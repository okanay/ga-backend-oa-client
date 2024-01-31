import { ContactHeader } from "@/components/main/index/contact-form/contact-header.tsx";
import { ContactForm } from "@/components/main/index/contact-form/contact-form.tsx";

export const ContactSection = () => {
  return (
    <section className="bg-flower-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-12 px-4 py-12 sm:space-y-24 sm:py-24">
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  );
};
