import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s()-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is not valid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 4) {
      newErrors.message = "Message must be at least 4 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmitForm}>
      {isSubmitted && (
        <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-2 rounded-lg">
          ✅ Your message has been sent successfully!
        </div>
      )}

      <FormInput
        label="Name"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      {/* Message */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full py-2 px-3 border-2 rounded-lg focus:outline-none
            ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-black/30 focus:border-[#D24343]"
            }`}
        />

        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          ButtonText="Submit"
          styling="bg-[#D24343] px-4 py-2 text-white font-semibold rounded-lg"
        />
      </div>
    </form>
  );
};

export default Form;
