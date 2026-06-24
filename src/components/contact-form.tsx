"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organization = String(form.get("organization") || "");
    const interest = String(form.get("interest") || "General inquiry");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(
      `H.E.R Global Circle enquiry: ${interest}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        `Area of interest: ${interest}`,
        "",
        message,
      ].join("\n"),
    );

    setNotice(
      "Your email application should open with this message. If it does not, email info@herglobalcircle.org directly.",
    );
    window.location.href = `mailto:info@herglobalcircle.org?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-forest/10 bg-white p-7 shadow-soft sm:p-10"
    >
      <div className="mb-8 flex items-center gap-3">
        <Mail className="h-6 w-6 text-teal" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-forest">Start a Conversation</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-forest">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-ink"
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-forest">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-ink"
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-forest">
          Organization (Optional)
        </span>
        <input
          name="organization"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-ink"
        />
      </label>

      <label className="mt-6 block">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-forest">
          Area of Interest
        </span>
        <select
          name="interest"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-ink"
        >
          <option>General Inquiry</option>
          <option>Partnership</option>
          <option>Mentorship</option>
          <option>Donation or Funding</option>
          <option>H.E.R Enterprise Services</option>
        </select>
      </label>

      <label className="mt-6 block">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-forest">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-forest/15 bg-paper px-4 py-3 text-ink"
        />
      </label>

      <button
        type="submit"
        className="focus-ring mt-7 w-full rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-teal"
      >
        Continue in Email App
      </button>
      <p className="mt-4 text-xs leading-6 text-ink/55">
        This static website does not store your message. Submitting opens your
        device’s email application so you remain in control of sending it.
      </p>
      {notice ? (
        <p className="mt-3 rounded-xl bg-teal/10 p-3 text-sm leading-6 text-teal-700">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
