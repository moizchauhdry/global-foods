"use client";

import { useMemo, useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Textarea } from "@/src/components/ui/Textarea";
import {
  enquiryCountries,
  getEnquiryCountry,
  productTypes,
} from "@/src/data/enquiry";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  productType: string;
  temperature: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  productType: "",
  temperature: "Chilled",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const selectedCountry = getEnquiryCountry(form.country);
  const cityOptions = useMemo(
    () =>
      (selectedCountry?.cities ?? []).map((city) => ({
        label: city,
        value: city,
      })),
    [selectedCountry],
  );
  const requiresCity = Boolean(selectedCountry && selectedCountry.cities.length > 0);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateCountry = (value: string) => {
    const nextCountry = getEnquiryCountry(value);
    const cities = nextCountry?.cities ?? [];
    setForm((prev) => ({
      ...prev,
      country: value,
      city: cities.length === 1 ? cities[0] : "",
    }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!form.email.includes("@")) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.country) next.country = "Country is required.";
    if (requiresCity && !form.city) next.city = "City is required.";
    if (!form.productType) next.productType = "Select beef or mutton.";
    if (!form.quantity.trim()) next.quantity = "Quantity is required.";
    else if (Number(form.quantity) <= 0) next.quantity = "Enter quantity in kilograms.";
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
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />
        <Input
          label="Company"
          name="company"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          error={errors.company}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
        />
        <Select
          label="Country"
          name="country"
          value={form.country}
          onChange={(e) => updateCountry(e.target.value)}
          error={errors.country}
          placeholder="Select country"
          options={enquiryCountries.map((country) => ({
            label: country.label,
            value: country.value,
          }))}
        />
        {requiresCity ? (
          <Select
            label="City"
            name="city"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            error={errors.city}
            placeholder="Select city"
            options={cityOptions}
          />
        ) : null}
        <Select
          label="Product type"
          name="productType"
          value={form.productType}
          onChange={(e) => update("productType", e.target.value)}
          error={errors.productType}
          placeholder="Select product type"
          options={[...productTypes]}
        />
        <Input
          label="Temperature"
          name="temperature"
          value="Chilled"
          readOnly
        />
        <Input
          label="Quantity (kg)"
          name="quantity"
          type="number"
          min="1"
          step="1"
          inputMode="numeric"
          placeholder="e.g. 500"
          value={form.quantity}
          onChange={(e) => update("quantity", e.target.value)}
          error={errors.quantity}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
        placeholder="Tell us about cuts, packing, and timing."
      />
      <Button type="submit" variant="primary" size="lg">
        Send Inquiry
      </Button>
      {success ? <p className="text-sm text-forest">{success}</p> : null}
    </form>
  );
}
