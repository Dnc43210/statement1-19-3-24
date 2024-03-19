import React, { useState } from "react";
import {toast} from "react-hot-toast";
 
export default function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
 
  const validateEmail = () => {
    // Simple email validation
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };
 
  const validateFirstName = () => {
    // Validation logic for first name
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      return false;
    }
    setFirstNameError("");
    return true;
  };
 
  const validateLastName = () => {
    // Validation logic for last name
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      return false;
    }
    setLastNameError("");
    return true;
  };
 
  const validateSubject = () => {
    // Validation logic for subject
    if (subject.trim() === "") {
      setSubjectError("Subject is required");
      return false;
    }
    setSubjectError("");
    return true;
  };
 
  const validateMessage = () => {
    // Validation logic for message
    if (message.trim() === "") {
      setMessageError("Message is required");
      return false;
    }
    setMessageError("");
    return true;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValidEmail = validateEmail();
    const isValidFirstName = validateFirstName();
    const isValidLastName = validateLastName();
    const isValidSubject = validateSubject();
    const isValidMessage = validateMessage();
 
    if (isValidEmail && isValidFirstName && isValidLastName && isValidSubject && isValidMessage) {
      toast.success("Form submitted successfully!");
    }
    else {
      toast.error("Check all the errors before proceeding")
    }
  };
 
  return (
    <>
      <div className="lg:px-48 py-4 sm:px-20">
        <h1 className="text-3xl font-bold pb-3">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-gray-600 pb-2">Contact Information</h2>
          <input
            type="text"
            className="bg-transparent  px-4 py-2 rounded-xl w-full border"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <p className="text-red-500 mb-2">{emailError}</p>
          <div className="flex text-xs text-gray-600 pb-2 space-x-2">
            <input type="checkbox" />
            <label>Email me with news and offers.</label>
          </div>
          <div className="flex flex-col justify-center items-start pt-2 text-gray-600">
            <h2 className="text-lg font-semibold text-gray-600 pb-2">Your Details</h2>
            <input
              type="text"
              className="bg-transparent px-4 py-2 rounded-xl w-full border"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={validateFirstName}
            />
            <p className="text-red-500 mb-[20px]">{firstNameError}</p>
            <input
              type="text"
              className="bg-transparent px-4 py-2 rounded-xl w-full border"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={validateLastName}
            />
            <p className="text-red-500 mb-[20px]">{lastNameError}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600 pb-2">Message Details</h2>
            <input
              type="text"
              className="bg-transparent px-4 py-2 rounded-xl w-full border"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onBlur={validateSubject}
            />
            <p className="text-red-500 mb-[20px]">{subjectError}</p>
            <textarea
              className="bg-transparent px-4 py-2 rounded-xl w-full border h-80 placeholder:align-text-top"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={validateMessage}
            />
            <p className="text-red-500 mb-[10px]">{messageError}</p>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}