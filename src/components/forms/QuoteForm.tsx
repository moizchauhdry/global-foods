"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Textarea } from "@/src/components/ui/Textarea";
import { products } from "@/src/data/products";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  productType: string;
  temperature: string;
  quantity: string;
  packaging: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: products[0]?.slug ?? "",
  productType: "Beef",
  temperature: "Frozen",
  quantity: "",
  packaging: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.email.includes("@")) next.email = "Enter a valid business email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.country.trim()) next.country = "Country is required.";
    if (!form.quantity.trim()) next.quantity = "Quantity is required.";
    if (!form.message.trim()) next.message = "Please describe your requirements.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return (
    <form
      className="space-y-5"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        setSuccess(null);
        setSubmitError(null);
        if (!validate()) return;

        setSending(true);
        try {
          const response = await fetch("/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          const payload = (await response.json().catch(() => ({}))) as { error?: string };
          if (!response.ok) {
            throw new Error(payload.error || "Unable to send your quote request right now.");
          }
          setSuccess("Thank you. Your quote request has been sent. We will reply by email.");
          setForm(initialState);
        } catch (error) {
          setSubmitError(
            error instanceof Error ? error.message : "Unable to send your quote request right now.",
          );
        } finally {
          setSending(false);
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={(e) => update("name", e.target.value)} error={errors.name} />
        <Input label="Company" name="company" value={form.company} onChange={(e) => update("company", e.target.value)} error={errors.company} />
        <Input label="Email" name="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} error={errors.email} />
        <Input label="Phone" name="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} error={errors.phone} />
        <Input label="Country" name="country" value={form.country} onChange={(e) => update("country", e.target.value)} error={errors.country} />
        <Select
          label="Product Type"
          name="productType"
          value={form.productType}
          onChange={(e) => update("productType", e.target.value)}
          options={[
            { label: "Beef", value: "Beef" },
            { label: "Mutton", value: "Mutton" },
            { label: "Other Products", value: "Other Products" },
          ]}
        />
        <Select
          label="Product"
          name="product"
          value={form.product}
          onChange={(e) => update("product", e.target.value)}
          options={products.map((product) => ({
            label: product.name,
            value: product.slug,
          }))}
        />
        <Select
          label="Chilled / Frozen"
          name="temperature"
          value={form.temperature}
          onChange={(e) => update("temperature", e.target.value)}
          options={[
            { label: "Chilled", value: "Chilled" },
            { label: "Frozen", value: "Frozen" },
            { label: "Both / Flexible", value: "Both" },
          ]}
        />
        <Input label="Quantity" name="quantity" placeholder="e.g. 1x40ft / MT requirement" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} error={errors.quantity} />
        <Input label="Packaging Requirements" name="packaging" value={form.packaging} onChange={(e) => update("packaging", e.target.value)} />
      </div>
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
        placeholder="Share destination market, specs, incoterms preference, and timeline."
      />
      <Button type="submit" variant="accent" size="lg" disabled={sending}>
        {sending ? "Sending…" : "Request Quote"}
      </Button>
      {success ? <p className="text-sm text-forest">{success}</p> : null}
      {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
    </form>
  );
}
