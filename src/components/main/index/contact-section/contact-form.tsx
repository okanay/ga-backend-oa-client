import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormFields,
  ContactFormSchema,
} from "@/validations/index/contact-form";

import { ContactInput } from "./form-ui/contact-input.tsx";
import { ContactLabel } from "./form-ui/contact-label.tsx";
import { ContactInputWrapper } from "./form-ui/contact-input-wrapper.tsx";
import { ContactTopic } from "@/components/main/index/contact-section/form-ui/contact-topic.tsx";
import { ContactTextField } from "@/components/main/index/contact-section/form-ui/contact-textfield.tsx";
import { ContactButton } from "@/components/main/index/contact-section/form-ui/contact-button.tsx";

const topics = ["General", "Feedback", "Support", "Business", "Other"];

export const ContactForm = () => {
  // React Hook Form Declarations
  const {
    register,
    handleSubmit,
    setError,
    setValue: setContactFormValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onSubmit",
  });

  // Send form data to API
  const onContactFormSubmit = async (data: ContactFormFields) => {
    const url = import.meta.env.VITE_CONTACT_API_URL;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(() => {
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
    });
    console.log(response);
  };

  return (
    <div className={"font-plex-mono flex h-full w-full flex-col gap-8"}>
      <form
        onSubmit={handleSubmit(onContactFormSubmit)}
        className="mx-auto flex w-full max-w-[680px] flex-col items-center justify-center gap-8"
      >
        {/* Name and Email Text Inputs */}
        <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <ContactInputWrapper className={`sm:max-w-[220px] sm:flex-shrink-0`}>
            <ContactInput
              {...register("name")}
              type="text"
              placeholder="name"
            />
            <ContactLabel
              htmlFor="name"
              className={`${errors.name && "text-rose-400"}`}
            >
              Your Name
            </ContactLabel>
          </ContactInputWrapper>
          <ContactInputWrapper>
            <ContactInput
              {...register("email")}
              type="email"
              placeholder="email"
            />
            <ContactLabel
              htmlFor="email"
              className={`${errors.email && "text-rose-400"}`}
            >
              Email Address
            </ContactLabel>
          </ContactInputWrapper>
        </div>
        {/* Topic Select Input */}
        <ContactInputWrapper className={"my-2"}>
          <ContactTopic
            onSelectionChange={(value) => {
              setContactFormValue("topicId", Number(value));
              setContactFormValue("topic", topics[Number(value)]);
            }}
            topics={topics}
            placeholder={"Select a topic"}
          />
          <ContactLabel
            htmlFor="topicId"
            className={`top-0 z-20 text-xs sm:text-sm ${
              errors.topicId && "text-rose-400"
            }`}
          >
            About
          </ContactLabel>
        </ContactInputWrapper>
        {/* Message TextArea Input */}
        <ContactInputWrapper className={""}>
          <ContactTextField
            {...register("message")}
            placeholder="Your Message"
          />
          <ContactLabel
            htmlFor="message"
            className={`${errors.message && "text-rose-400"} -top-2`}
          >
            Your Message
          </ContactLabel>
        </ContactInputWrapper>
        {/* Submit Button */}
        <ContactButton type={"submit"} disabled={isSubmitting} />
        <div className="-mb-[24px] h-[24px] text-xs text-rose-400 sm:text-sm">
          <p>{errors?.root?.message}</p>
        </div>
      </form>
    </div>
  );
};
