import { ContactButton } from "@/components/molecules/contactButton";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <ContactButton variant="default" size="lg">
        Send Message
      </ContactButton>
      <ContactButton variant="outline" size="default">
        Learn More
      </ContactButton>
      <ContactButton variant="ghost" size="sm">
        Cancel
      </ContactButton>
    </div>
  );
}