"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-card border border-line bg-surface p-8 text-center">
        <p className="font-display text-xl text-petrol">Vielen Dank für Ihre Nachricht!</p>
        <p className="mt-2 text-sm text-ink-soft">
          Ich melde mich so schnell wie möglich bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real visitors, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink outline-none focus:border-petrol"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink outline-none focus:border-petrol"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
          Telefon <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink outline-none focus:border-petrol"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink outline-none focus:border-petrol"
        />
      </div>

      {status === "error" && errorMessage && (
        <div role="alert" className="rounded-xl border border-terracotta-strong/40 bg-terracotta/10 p-4 text-sm text-ink">
          <p>{errorMessage}</p>
          <p className="mt-2">
            Alternativ erreichen Sie mich unter{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-petrol underline">
              {siteConfig.phone}
            </a>{" "}
            oder{" "}
            <a href={siteConfig.emailHref} className="font-semibold text-petrol underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-button bg-petrol px-6 py-3.5 text-base font-semibold text-canvas transition-colors hover:bg-petrol-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Wird gesendet…" : "Unverbindlich Kontakt aufnehmen"}
      </button>
    </form>
  );
}
