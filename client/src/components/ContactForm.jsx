import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./contact/FormInput";
import FormTextarea from "./contact/FormTextarea";
import SubmitButton from "./contact/SubmitButton";
import CountrySelector from "./contact/CountrySelector";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setValue("countryCode", country.code);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="Name"
              id="name"
              register={register}
              required={true}
              minLength={2}
            />

            <div className="grid grid-cols-2 gap-4">
              <CountrySelector
                register={register}
                setValue={setValue}
                onSelect={handleCountrySelect}
              />
              <FormInput
                label="Phone Number"
                id="phoneNumber"
                register={register}
                required={true}
                inputMode="numeric"
                placeholder={
                  selectedCountry
                    ? selectedCountry.format.replace(/x/g, "#")
                    : "Enter phone number"
                }
              />
            </div>

            <FormInput
              label="Email"
              id="email"
              type="email"
              register={register}
              required={true}
            />

            <FormTextarea
              label="Message"
              id="message"
              register={register}
              required={true}
              minLength={10}
            />

            <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
          </form>

          {submitError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <h3 className="font-semibold">Error</h3>
              <p>{submitError}</p>
            </div>
          )}

          {submitSuccess && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <h3 className="font-semibold">Success</h3>
              <p>Your message has been sent successfully!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
