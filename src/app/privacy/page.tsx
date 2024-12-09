"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicy() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleAccordionChange = (value: string) => {
    setExpandedItem(value === expandedItem ? null : value);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-xl text-gray-500 mb-12">
          Last update: {lastUpdated}
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            handle your personal information when you visit our website.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          value={expandedItem || undefined}
          onValueChange={handleAccordionChange}
        >
          {policyItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="flex justify-between items-center w-full p-6 text-left text-lg font-medium focus:outline-none">
                <span>{`${index + 1}. ${item.title}`}</span>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="prose prose-lg max-w-none">{item.content}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const policyItems = [
  {
    id: "item-1",
    title: "Introduction",
    content: (
      <p>
        Your privacy is important to us. This Privacy Policy explains how we
        handle your personal information when you visit our website. We do not
        collect any personal data from you, except for your Last.fm username,
        which is used solely to interact with the Last.fm API.
      </p>
    ),
  },
  {
    id: "item-2",
    title: "What Information We Collect",
    content: (
      <p>
        We do not collect personal data such as names, email addresses, or any
        other identifiable information. The only data we interact with is your
        Last.fm username, which is used to retrieve data from the Last.fm API to
        enhance your experience on our site.
      </p>
    ),
  },
  {
    id: "item-3",
    title: "How We Use Your Information",
    content: (
      <p>
        We use your Last.fm username exclusively to fetch data from the Last.fm
        API, such as music recommendations or other data provided by the
        service. We do not store or share your personal information.
      </p>
    ),
  },
  {
    id: "item-4",
    title: "How We Protect Your Information",
    content: (
      <p>
        Since we do not collect personal data, there are no security measures
        specifically for protecting personal information. However, any data
        fetched from the Last.fm API is transmitted securely in accordance with
        Last.fm&apos;s terms and conditions.
      </p>
    ),
  },
  {
    id: "item-5",
    title: "Use of Cookies",
    content: (
      <p>
        We may use cookies to improve your browsing experience on our site.
        Cookies are small files stored in your browser that help us personalize
        your experience. You can control or delete cookies through your browser
        settings.
      </p>
    ),
  },
  {
    id: "item-6",
    title: "Sharing Information",
    content: (
      <p>
        We do not share any of your personal information with third parties. The
        only third-party data we use is provided by the Last.fm API, and it is
        handled according to their privacy policy.
      </p>
    ),
  },
  {
    id: "item-7",
    title: "Your Rights",
    content: (
      <p>
        Since we do not collect personal data, you do not need to worry about
        accessing, correcting, or deleting information. Your Last.fm data is
        controlled by Last.fm itself, and you can review or modify your account
        directly through their platform.
      </p>
    ),
  },
  {
    id: "item-8",
    title: "Changes to the Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted here with the updated date.
      </p>
    ),
  },
  {
    id: "item-9",
    title: "Contact Us",
    content: (
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at{" "}
        <a
          href="mailto:lxcvz99@gmail.com"
          className="text-blue-600 hover:underline"
        >
          lxcvz99@gmail.com
        </a>
        .
      </p>
    ),
  },
];
