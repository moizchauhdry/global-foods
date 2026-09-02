"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { productTypes } from "@/src/data/enquiry";
import { cn } from "@/src/lib/cn";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productType: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productType: "",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.email.includes("@")) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.country.trim()) next.country = "Destination is required.";
    if (!form.productType) next.productType = "Select beef or mutton.";
    if (!form.quantity.trim()) next.quantity = "Quantity is required.";
    else if (Number(form.quantity) <= 0) next.quantity = "Enter quantity in kilograms.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[28rem] flex-col justify-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
          <Check className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 font-display text-3xl font-semibold text-forest-deep">
          Enquiry received.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Thank you. Our export team will review the destination, product, and
          volume and respond to your enquiry.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 w-fit"
          onClick={() => {
            setForm(initialState);
            setErrors({});
            setSubmitError(null);
            setSuccess(false);
          }}
        >
          Send another enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      className="space-y-9"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitError(null);
        if (!validate()) return;

        setSending(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          const payload = (await response.json().catch(() => ({}))) as { error?: string };
          if (!response.ok) {
            throw new Error(payload.error || "Unable to send your inquiry right now.");
          }
          setSuccess(true);
          setForm(initialState);
        } catch (error) {
          setSubmitError(
            error instanceof Error ? error.message : "Unable to send your inquiry right now.",
          );
        } finally {
          setSending(false);
        }
      }}
      noValidate
    >
      <fieldset className="space-y-5">
        <legend className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
          <span className="font-display text-sm tracking-normal text-gold">01</span>
          Your details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            error={errors.name}
          />
          <Input
            label="Company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            error={errors.company}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            error={errors.email}
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            error={errors.phone}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
          <span className="font-display text-sm tracking-normal text-gold">02</span>
          Shipment
        </legend>
        <Input
          label="Destination"
          name="country"
          autoComplete="country-name"
          placeholder="Country or city"
          value={form.country}
          onChange={(e) => update("country", e.target.value)}
          error={errors.country}
        />

        <div>
          <p
            id="product-type-label"
            className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/75"
          >
            Product type
          </p>
          <div
            role="radiogroup"
            aria-labelledby="product-type-label"
            className="grid grid-cols-2 gap-3"
          >
            {productTypes.map((product) => {
              const selected = form.productType === product.value;
              return (
                <button
                  key={product.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => update("productType", product.value)}
                  className={cn(
                    "group relative rounded-sm border px-4 py-4 text-left transition-all duration-300",
                    selected
                      ? "border-forest bg-forest/[0.06] shadow-[0_10px_28px_-22px_rgba(15,74,18,0.7)]"
                      : "border-line bg-paper hover:border-forest/30 hover:bg-beige/50",
                    errors.productType && !form.productType && "border-red-500",
                  )}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-xl font-semibold text-forest-deep">
                      {product.label}
                    </span>
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                        selected
                          ? "border-forest bg-forest text-white"
                          : "border-line text-transparent",
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    Fresh chilled
                  </span>
                </button>
              );
            })}
          </div>
          {errors.productType ? (
            <p className="mt-2 text-xs text-red-600">{errors.productType}</p>
          ) : null}
        </div>

        <Input
          label="Quantity"
          name="quantity"
          type="number"
          min="1"
          step="1"
          inputMode="numeric"
          placeholder="500"
          suffix="kg"
          value={form.quantity}
          onChange={(e) => update("quantity", e.target.value)}
          error={errors.quantity}
        />
      </fieldset>

      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
        placeholder="Product details and destination requirements."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={sending}
        >
          {sending ? "Sending…" : "Send enquiry"}
          {sending ? null : <ArrowUpRight className="h-4 w-4" />}
        </Button>
        <p className="text-xs leading-relaxed text-muted sm:max-w-[16rem] sm:text-right">
          We typically respond within one business day.
        </p>
      </div>
      {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
    </form>
  );
}
