"use client";

import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const [hasSent, setHasSent] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHasSent(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        setHasSent(false);

        throw new Error("Something went wrong");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setHasSent(false);

      toast({
        title: "Uhuuu!",
        description: "Your message has been sent.",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: (error as Error).message,
      });
    }
  };

  return (
    <div className="bg-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Have any questions? We&apos;re here to help. Fill out the form
            below, and we&apos;ll get in touch with you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                onChange={handleChange}
                value={formData.subject}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                onChange={handleChange}
                value={formData.message}
              />
            </div>
            <Button type="submit" className="w-full" disabled={hasSent}>
              {hasSent ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
