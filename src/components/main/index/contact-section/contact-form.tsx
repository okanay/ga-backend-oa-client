import { ContactInput } from "./form-ui/contact-input.tsx";
import { ContactLabel } from "./form-ui/contact-label.tsx";
import { ContactInputWrapper } from "./form-ui/contact-input-wrapper.tsx";
import { ContactTopic } from "@/components/main/index/contact-section/form-ui/contact-topic.tsx";
import { ContactTextField } from "@/components/main/index/contact-section/form-ui/contact-textfield.tsx";

const topics = ["General", "Feedback", "Support", "Business", "Other"];

export const ContactForm = () => {
  return (
    <div className={"font-plex-mono flex h-full w-full flex-col gap-8"}>
      <form className="mx-auto flex w-full max-w-[680px] flex-col items-center justify-center gap-8 px-8">
        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <ContactInputWrapper className={"sm:max-w-[220px] sm:flex-shrink-0"}>
            <ContactInput type="text" placeholder="name" />
            <ContactLabel htmlFor="name">Your Name</ContactLabel>
          </ContactInputWrapper>
          <ContactInputWrapper>
            <ContactInput type="email" placeholder="email" />
            <ContactLabel htmlFor="email">Email Address</ContactLabel>
          </ContactInputWrapper>
        </div>
        <ContactInputWrapper>
          <ContactTopic topics={topics} placeholder={"Select a topic"} />
          <ContactLabel
            htmlFor="message"
            className={"top-0 z-20 text-xs sm:text-sm"}
          >
            About
          </ContactLabel>
        </ContactInputWrapper>

        <ContactInputWrapper className={""}>
          <ContactTextField placeholder="Your Message" />
          <ContactLabel htmlFor="message">Your Message</ContactLabel>
        </ContactInputWrapper>

        <button
          type="submit"
          className="w-full rounded-md bg-secondary-700 py-3 text-sm font-semibold text-white sm:py-4 sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
