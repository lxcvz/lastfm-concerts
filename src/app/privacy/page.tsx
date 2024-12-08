import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <p className="text-sm text-muted-foreground">
            Last update: {lastUpdated}
          </p>
        </CardHeader>
        <CardContent>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Your privacy is important to us. This Privacy Policy explains how
              we handle your personal information when you visit our website.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  1. Introduction
                </AccordionTrigger>
                <AccordionContent>
                  Your privacy is important to us. This Privacy Policy explains
                  how we handle your personal information when you visit our
                  website. We do not collect any personal data from you, except
                  for your Last.fm username, which is used solely to interact
                  with the Last.fm API.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  2. What Information We Collect
                </AccordionTrigger>
                <AccordionContent>
                  We do not collect personal data such as names, email
                  addresses, or any other identifiable information. The only
                  data we interact with is your Last.fm username, which is used
                  to retrieve data from the Last.fm API to enhance your
                  experience on our site.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  3. How We Use Your Information
                </AccordionTrigger>
                <AccordionContent>
                  We use your Last.fm username exclusively to fetch data from
                  the Last.fm API, such as music recommendations or other data
                  provided by the service. We do not store or share your
                  personal information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  4. How We Protect Your Information
                </AccordionTrigger>
                <AccordionContent>
                  Since we do not collect personal data, there are no security
                  measures specifically for protecting personal information.
                  However, any data fetched from the Last.fm API is transmitted
                  securely in accordance with Last.fm's terms and conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  5. Use of Cookies
                </AccordionTrigger>
                <AccordionContent>
                  We may use cookies to improve your browsing experience on our
                  site. Cookies are small files stored in your browser that help
                  us personalize your experience. You can control or delete
                  cookies through your browser settings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold">
                  6. Sharing Information
                </AccordionTrigger>
                <AccordionContent>
                  We do not share any of your personal information with third
                  parties. The only third-party data we use is provided by the
                  Last.fm API, and it is handled according to their privacy
                  policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-semibold">
                  7. Your Rights
                </AccordionTrigger>
                <AccordionContent>
                  Since we do not collect personal data, you do not need to
                  worry about accessing, correcting, or deleting information.
                  Your Last.fm data is controlled by Last.fm itself, and you can
                  review or modify your account directly through their platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-semibold">
                  8. Changes to the Privacy Policy
                </AccordionTrigger>
                <AccordionContent>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted here with the updated date.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-semibold">
                  9. Contact Us
                </AccordionTrigger>
                <AccordionContent>
                  If you have any questions or concerns about our Privacy
                  Policy, please contact us at{" "}
                  <a
                    href="mailto:seu-email@dominio.com"
                    className="text-primary hover:underline"
                  >
                    lxcvz99@gmail.com
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
