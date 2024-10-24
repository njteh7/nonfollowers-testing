import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-md px-5 py-8 lg:py-16">
      <h1 className="mb-4 text-center font-sans text-[39px] font-extrabold tracking-tight text-gray-900 transition-colors duration-250 dark:text-white md:text-[52px]">
        Contact Us
      </h1>
      <p className="mb-8 text-center text-lg font-light text-gray-700 transition-colors duration-250 dark:text-gray-300 md:text-xl lg:mb-16">
        Want to contact us for any reason? Please fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
