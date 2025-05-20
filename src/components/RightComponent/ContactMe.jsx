import { useState } from "react";
import SocialIcons from "../LeftComponent/SocialIcon";

const formFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "company", label: "Your Company", type: "text", required: false },
  { name: "subject", label: "Subject", type: "text", required: true },
  {
    name: "question",
    label: "Your Question",
    type: "textarea",
    required: true,
  },
];

const ContactMe = () => {
  return (
    <>
      <h2 className="mt-24 text-lg font-medium tracking-tight text-[rgb(152,243,151)] sm:text-xl text-center mb-4">
        Let's Connect
      </h2>
      <p className="text-sm text-white text-center mb-10">
        Get in touch with me to provide better service. Social media success
        starts with a conversation let’s start.
      </p>
      <form
        className="max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md space-y-4"
        action="https://formsubmit.co/7c191778ad16041f91d5656a4f9ca43c"
        method="POST"
      >
        {formFields.map(({ name, label, type, required }) => (
          <div key={name}>
            <label className="block mb-1 font-semibold" htmlFor={name}>
              {label}
            </label>

            {type === "textarea" ? (
              <textarea
                id={name}
                name={name}
                rows="4"
                required={required}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            ) : (
              <input
                id={name}
                name={name}
                type={type}
                required={required}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            )}
          </div>
        ))}
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          value={`https://vishakha07-portfolio.netlify.app/thank-you`}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
        >
          Submit
        </button>
      </form>
      {/* Social Icons */}
      <div className="flex gap-4 mt-10 lg:hidden justify-center">
        <SocialIcons />
      </div>
    </>
  );
};

export default ContactMe;
