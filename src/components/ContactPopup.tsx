"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/contact-info");
      const data = await res.json();
      setContactData(data);
    };
    fetchData();
  }, []);

  if (!contactData) return null;

  return (
    <div className="fixed inset-0 md:inset-y-0 md:right-0 md:left-[25%] w-full md:w-[75%] bg-blue-600 text-white z-50 shadow-lg overflow-y-scroll orange-scroll grid grid-cols-1 md:grid-cols-9">
      {/* Header */}
      <div className="md:col-span-9 flex flex-col md:flex-row items-start md:items-center border-b border-gray-300 px-6 md:px-10 py-6">
        <div className="text-2xl font-semibold flex-1">{contactData.heading}</div>
        <div className="mt-4 md:mt-0 text-lg font-medium md:border-l border-gray-300 md:pl-6">
          ADDITIONAL INFORMATION
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl font-light hover:text-orange-500 transition md:static md:ml-6 md:border-l border-gray-300 md:pl-6"
        >
          ╳
        </button>
      </div>

      {/* Row 2 - Contact Sections */}
      <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-9 text-lg">
        {/* Left - Subheading */}
        <div className="md:col-span-3 px-6 py-8 text-xl border-b md:border-b border-r border-gray-300">
          <p>{contactData.subheading}</p>
        </div>

        {/* Middle - Headquarters + Ethics */}
        <div className="md:col-span-3 border-b md:border-b border-r border-gray-300">
          <div className="px-6 py-8 border-b border-gray-300">
            <h3 className="text-md font-semibold mb-2">
              {contactData.sections.headquarters.title}
            </h3>
            <p>{contactData.sections.headquarters.name}</p>
            <p>{contactData.sections.headquarters.address1}</p>
            <p>{contactData.sections.headquarters.address2}</p>
            <p className="mt-2">{contactData.sections.headquarters.phone}</p>
            <p>{contactData.sections.headquarters.email}</p>
          </div>
          <div className="px-6 py-8">
            <h3 className="text-md font-semibold mb-2">
              {contactData.sections.ethics.title}
            </h3>
            <p>{contactData.sections.ethics.description}</p>
            <p className="mt-2">{contactData.sections.ethics.phone}</p>
            <Link
              href={contactData.sections.ethics.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm break-all underline hover:text-orange-500"
            >
              {contactData.sections.ethics.url}
            </Link>
          </div>
        </div>

        {/* Right - Subcontractors */}
        <div className="md:col-span-3 px-6 py-8 border-b md:border-b-0">
          <h3 className="text-md font-semibold mb-2">
            {contactData.sections.subcontractors.title}
          </h3>
          <p className="mb-2">{contactData.sections.subcontractors.description}</p>
          <Link
            href={contactData.sections.subcontractors.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold flex items-center hover:text-orange-500 transition"
          >
            {contactData.sections.subcontractors.cta}
            <span className="ml-2 text-3xl transform transition-transform hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Row 3 - Form */}
      <div className="md:col-span-6 px-6 md:px-10 pb-12 pt-6 border-b md:border-b border-r border-gray-300">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            required
            className="border-b border-white bg-transparent text-white text-xl placeholder-white px-2 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="border-b border-white bg-transparent text-white text-xl placeholder-white px-2 py-2 w-full"
          />
          <input
            type="email"
            placeholder="E-mail address"
            required
            className="border-b border-white bg-transparent text-white text-xl placeholder-white px-2 py-2 w-full"
          />
          <input
            type="number"
            placeholder="Phone (Optional)"
            className="border-b border-white bg-transparent text-white text-xl placeholder-white px-2 py-2 w-full"
          />
          <div className="md:col-span-2">
            <label className="block mb-1">Your Message</label>
            <textarea
              rows={4}
              className="w-full border border-white bg-transparent text-white px-2 py-2"
            ></textarea>
            <p className="mt-2 text-sm">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full border border-white py-2 hover:text-orange-500 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
