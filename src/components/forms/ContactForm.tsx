"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
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
import { cn } from "@/src/lib/cn";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  city: string;
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
  city: "",
  productType: "",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState(false);

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
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const updateCountry = (value: string) => {
    const nextCountry = getEnquiryCountry(value);
    const cities = nextCountry?.cities ?? [];
    setForm((prev) => ({
      ...prev,
      country: value,
      city: cities.length === 1 ? cities[0] : "",
    }));
    setErrors((prev) => ({ ...prev, country: undefined, city: undefined }));
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
          volume and respond with a tailored chilled program.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 w-fit"
          onClick={() => {
            setForm(initialState);
            setErrors({});
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
      onSubmit={(event) => {
        event.preventDefault();
        if (!validate()) return;
        setSuccess(true);
        setForm(initialState);
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            label="Country"
            name="country"
            value={form.country}
            onChange={(e) => updateCountry(e.target.value)}
            error={errors.country}
            placeholder="Select destination"
            options={enquiryCountries.map((country) => ({
              label: country.label,
              value: country.value,
            }))}
          />
          <AnimatePresence initial={false} mode="popLayout">
            {requiresCity ? (
              <motion.div
                key="city"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Select
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  error={errors.city}
                  placeholder="Select city"
                  options={cityOptions}
                />
              </motion.div>
            ) : (
              <div className="hidden sm:block" aria-hidden="true" />
            )}
          </AnimatePresence>
        </div>

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
                    Chilled export program
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
        placeholder="Cuts, packing, and preferred timing."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Send enquiry
          <ArrowUpRight className="h-4 w-4" />
        </Button>
        <p className="text-xs leading-relaxed text-muted sm:max-w-[16rem] sm:text-right">
          We typically respond within one business day with a tailored supply program.
        </p>
      </div>
    </form>
  );
}
