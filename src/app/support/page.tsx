import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail } from "lucide-react";

const faqs = [
    {
        question: "How do I report a lost or stolen card?",
        answer: "If your card is lost or stolen, please contact us immediately at our 24/7 support line: 0800 123 4567."
    },
    {
        question: "How can I check my account balance?",
        answer: "You can view your account balances on the main dashboard after logging in. The AI Assistant can also provide this information."
    },
    {
        question: "Is my money safe?",
        answer: "Yes, your eligible deposits with Barclays are protected up to a total of £85,000 by the Financial Services Compensation Scheme (FSCS)."
    },
    {
        question: "How do I make an international payment?",
        answer: "For international payments, you will need the recipient's IBAN and BIC/SWIFT code. Please navigate to the 'Payments' section or contact us for assistance."
    }
];

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Help & Support</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions below.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our support team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold">Phone Support (24/7)</p>
                        <p className="text-muted-foreground">0800 123 4567</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold">Email Support</p>
                        <p className="text-muted-foreground">support@barclays.co.uk</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
