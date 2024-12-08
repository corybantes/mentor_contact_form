"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { Toast } from "./toast";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  queryType?: string;
  message?: string;
  consent?: string;
}

export default function ContactusForm() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQueryType(value);
  };
  const [queryType, setQueryType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors: FormErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!queryType) {
      newErrors.queryType = "Please select a query type";
    }

    if (!firstName) {
      newErrors.firstName = "This field is required";
    }

    if (!lastName) {
      newErrors.lastName = "This field is required";
    }

    if (!message) {
      newErrors.message = "This field is required";
    }

    if (consent == false) {
      newErrors.consent =
        "To submit this form, please consent to being contacted";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      //   alert("Form submitted successfully!");
      // Handle form submission logic (e.g., API call)
      setShowPopup(true);
      // Clear form data
      setFirstName("");
      setLastName("");
      setEmail("");
      setQueryType("");
      setMessage("");
      setConsent(false);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      //   setShowPopup(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='px-6 py-5 text-Primary-grey500 bg-white rounded-xl '
    >
      <h1 className='text-4xl mb-1 text-gray-900 font-semibold'>Contact Us</h1>
      <div className='md:flex md:gap-6 md:justify-between'>
        <div className='my-2 w-full'>
          <div>
            First Name <span className='text-green-600'>*</span>
          </div>
          <input
            type='text'
            name='first-name'
            className={`w-full ${
              errors.firstName ? "border-Primary-red" : "border-Primary-grey500"
            } border rounded-lg p-2 outline-none focus:border-Primary-green600`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
          )}
        </div>
        <div className='my-2 w-full'>
          <div>
            Last Name <span className='text-green-600'>*</span>
          </div>
          <input
            type='text'
            name='last-name'
            className={`w-full ${
              errors.lastName ? "border-Primary-red" : "border-Primary-grey500"
            } border rounded-lg p-2 outline-none focus:border-Primary-green600`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className='my-2'>
        <div>
          Email Address <span className='text-green-600'>*</span>
        </div>
        <input
          type='email'
          name='email'
          className={`w-full ${
            errors.email ? "border-Primary-red" : "border-Primary-grey500"
          } border rounded-lg p-2 outline-none focus:border-Primary-green600`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {errors.email && (
        <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
      )}
      <div className='my-2'>
        <div>
          Query Type <span className='text-green-600'>*</span>
        </div>
        <div className='sm:flex sm:gap-6 sm:justify-between'>
          <div
            className={`${
              queryType == "general-enquiry"
                ? "bg-Primary-green200 border border-Primary-green600 rounded-lg my-1 py-2 px-2 w-full"
                : "border rounded-lg my-1 py-2 px-2 w-full"
            } ${
              errors.queryType ? "border-Primary-red" : "border-Primary-grey500"
            }`}
          >
            <input
              type='radio'
              name='option'
              checked={queryType == "general-enquiry"}
              className='mx-2 accent-Primary-green600'
              value={"general-enquiry"}
              onChange={handleChange}
            />
            <span>General Enquiry</span>
          </div>
          <div
            className={`${
              queryType == "support-request"
                ? "bg-Primary-green200 border border-Primary-green600 rounded-lg my-1 py-2 px-2 w-full"
                : "border rounded-lg my-1 py-2 px-2 w-full"
            } ${
              errors.email ? "border-Primary-red" : "border-Primary-grey500"
            }`}
          >
            <input
              type='radio'
              name='option'
              checked={queryType == "support-request"}
              className='mx-2 accent-Primary-green600'
              value={"support-request"}
              onChange={handleChange}
            />
            <span>Support Request</span>
          </div>
        </div>
        {errors.queryType && (
          <p className='text-red-500 text-sm mt-1'>{errors.queryType}</p>
        )}
      </div>
      <div className='my-2'>
        <div>
          Message <span className='text-green-600'>*</span>
        </div>
        <textarea
          name='message'
          className={`${
            errors.message ? "border-Primary-red" : "border-Primary-grey500"
          } border rounded-lg resize-none w-full p-2 outline-none focus:border-Primary-green600`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        ></textarea>
        {errors.message && (
          <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
        )}
      </div>
      <div className='my-2'>
        <input
          type='checkbox'
          name='consent'
          className='mx-2 accent-Primary-green600'
          checked={consent == true}
          onChange={() => setConsent(!consent)}
        />
        <span>
          I consent to being contacted by the team{" "}
          <span className='text-green-600'>*</span>
        </span>
        {errors.consent && (
          <p className='text-red-500 text-sm mt-1'>{errors.consent}</p>
        )}
      </div>
      <button
        type='submit'
        className='bg-Primary-green600 py-2 px-4 rounded-lg w-full text-white my-1'
      >
        Submit
      </button>
      {showPopup && (
        <div className='fixed inset-x-0 mx-auto top-0 w-[80%] max-w-[400px]'>
          <Toast />
        </div>
      )}
    </form>
  );
}
