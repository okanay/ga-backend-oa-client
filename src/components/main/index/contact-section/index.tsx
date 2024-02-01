import { ContactHeader } from "@/components/main/index/contact-section/contact-header.tsx";
import { ContactForm } from "@/components/main/index/contact-section/contact-form.tsx";

export const ContactSection = () => {
  return (
    <section id={"#contact"} className="bg-flower-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-12 px-4 py-12 sm:py-24">
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  );
};
