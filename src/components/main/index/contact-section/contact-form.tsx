import { ContactInput } from "./form-ui/contact-input.tsx";
import { ContactLabel } from "./form-ui/contact-label.tsx";
import { ContactInputWrapper } from "./form-ui/contact-input-wrapper.tsx";

export const ContactForm = () => {
  return (
    <div className={"h-full w-full"}>
      <div
        data-name={"name-with-email"}
        className="mx-auto flex max-w-[640px] flex-col items-center justify-center gap-8 px-4 xl-phone:px-8 sm:flex-row sm:px-0"
      >
        <ContactInputWrapper className={"sm:max-w-[220px] sm:flex-shrink-0"}>
          <ContactInput type="text" placeholder="name" />
          <ContactLabel htmlFor="name">NAME</ContactLabel>
        </ContactInputWrapper>
        <ContactInputWrapper>
          <ContactInput type="email" placeholder="email" />
          <ContactLabel htmlFor="email">EMAIL</ContactLabel>
        </ContactInputWrapper>
      </div>
    </div>
  );
};
