"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Textarea } from "@/src/components/ui/Textarea";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  inquiryType: "Export Inquiry",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.email.includes("@")) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.country.trim()) next.country = "Country is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSuccess(null);
        if (!validate()) return;
        setSuccess(
          "Inquiry captured locally. Connect this form to your CRM or email service for production use.",
        );
        setForm(initialState);
      }}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={(e) => update("name", e.target.value)} error={errors.name} />
        <Input label="Company" name="company" value={form.company} onChange={(e) => update("company", e.target.value)} error={errors.company} />
        <Input label="Email" name="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} error={errors.email} />
        <Input label="Phone" name="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} error={errors.phone} />
        <Input label="Country" name="country" value={form.country} onChange={(e) => update("country", e.target.value)} error={errors.country} />
        <Select
          label="Inquiry Type"
          name="inquiryType"
          value={form.inquiryType}
          onChange={(e) => update("inquiryType", e.target.value)}
          options={[
            { label: "Export Inquiry", value: "Export Inquiry" },
            { label: "Sales Inquiry", value: "Sales Inquiry" },
            { label: "Partnership", value: "Partnership" },
            { label: "General", value: "General" },
          ]}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
      />
      <Button type="submit" variant="primary" size="lg">
        Send Inquiry
      </Button>
      {success ? <p className="text-sm text-forest">{success}</p> : null}
    </form>
  );
}
