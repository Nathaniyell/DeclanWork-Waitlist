"use client";
import Image from "next/image";
import logo from "../../public/assets/Images/logo.png";
import mockup from "../../public/assets/Images/mockup.png";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<{
    firstName: "";
    lastName: "";
    email: "";
  }>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formIsSubmitted, setFormIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((previousFormValues) => ({
      ...previousFormValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setFormIsSubmitted(true);
  };
  return (
    <main className="min-h-screen relative">
      <Image
        src={logo}
        alt="Logo"
        className="absolute inline left-10 top-4 md:left-20 z-0"
      />
      {formIsSubmitted && (
        <p
          className={`bg-[#0D5EBA] text-center transition-all ease-in py-1 md:py-2 z-10 text-white relative`}
        >
          Congratulations, you have been add to our waitlist. A mail has been
          sent to your inbox
        </p>
      )}
      <div className="flex items-center justify-between flex-col lg:flex-row bg-white">
        <form
          onSubmit={handleFormSubmit}
          className="p-8 flex-1 relative top-20 md:top-14 lg:top-8 mb-10"
        >
          <div className="flex items-start justify-between flex-col h-[150px] md:h-[100px] lg:md:h-[120px] bg-white">
            <span className="bg-[#1671D9] text-white p-1 text-sm rounded-lg md:text-xs">
              Coming soon
            </span>
            <h1 className="text-xl text-black">Get Early Access</h1>
            <p className="text-[#757575] w-4/5">
              Be one of the first to get notified when we launch our Beta
              version
            </p>
          </div>
          <section className="mt-8 flex items-center justify-between w-full gap-6 mb-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="border border-black p-2 w-full indent-1 mt-2 outline-[#00D37B] outline-1"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="border border-black p-2 w-full indent-1 mt-2 outline-[#00D37B] outline-1"
                required
              />
            </div>
          </section>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            className="border border-black p-2  indent-2 w-full mt-2 outline-[#00D37B] outline-1"
            required
          />
          <button type="submit" className="bg-[#00D37B] w-full p-3 mt-8">
            Join Waitlist
          </button>
        </form>
        <div className="hidden bg-[#EDFCF6] lg:block lg:w-[55%] lg:h-screen relative">
          <Image
            src={mockup}
            alt="Mock up"
            className="h-[85%] absolute right-0 bottom-0"
          />
        </div>
      </div>
    </main>
  );
}
