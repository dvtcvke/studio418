"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      url: formData.get("url") as string,
      description: formData.get("description") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Une erreur est survenue");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto text-green-400 mb-4" />
        <h3 className="text-2xl font-bold text-white">
          Demande envoyée!
        </h3>
        <p className="mt-3 text-zinc-400">
          On vous revient en moins de 48h avec votre maquette.
          <br />
          Gardez l&rsquo;&oelig;il sur votre boîte courriel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom du commerce */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Nom de votre commerce <span className="text-[#F97316]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ex: Café Le Vieux-Port"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 transition-all focus:border-[#F97316]/50"
        />
      </div>

      {/* Courriel */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Courriel <span className="text-[#F97316]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="vous@exemple.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 transition-all focus:border-[#F97316]/50"
        />
      </div>

      {/* URL (optionnel) */}
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          URL de votre site actuel ou page Facebook{" "}
          <span className="text-zinc-500">(optionnel)</span>
        </label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="https://www.votresite.ca"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 transition-all focus:border-[#F97316]/50"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Décrivez brièvement votre activité{" "}
          <span className="text-[#F97316]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          placeholder="Ex: Salon de coiffure dans le quartier Saint-Roch, 3 employés, on fait aussi de la coloration..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 transition-all focus:border-[#F97316]/50 resize-none"
        />
      </div>

      {/* Consent checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-[#F97316] shrink-0"
        />
        <label htmlFor="consent" className="text-xs text-zinc-400 leading-relaxed">
          J&rsquo;accepte que mes informations soient utilisées pour
          l&rsquo;envoi de ma maquette gratuite et le suivi de ma demande,
          conformément à la{" "}
          <a href="/confidentialite" className="text-[#F97316] hover:underline">
            politique de confidentialité
          </a>
          . <span className="text-[#F97316]">*</span>
        </label>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-base sm:text-lg py-3.5 sm:py-4 px-6 rounded-full transition-all"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Recevoir ma maquette gratuite
            <Send size={18} />
          </>
        )}
      </button>

      <p className="text-center text-sm text-zinc-500">
        Gratuit &middot; Sans engagement &middot; Zéro appel
      </p>
    </form>
  );
}
