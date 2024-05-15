import React from "react";

export default function ContactCard() {
  return (
    <div className="bg-white p-20 border-2 rounded-2xl flex flex-col items-center justify-center gap-y-3">
      <div>
        <span className="block ">Email</span>
        <input
          className="mt-1 px-3 py-2 border-2 rounded-2xl block w-full  sm:text-sm focus:ring-1"
          placeholder="you@swajp.com"
          type="email"
        />
        <span className="block">Message</span>
        <input
          className="mt-1 px-3 py-2 border-2 rounded-2xl block w-full  sm:text-sm focus:ring-1"
          type="text"
          placeholder="Swajpův Dog"
        />
        <button className=" p-1 rounded-xl hover:bg-blue-200 active:bg-blue-600 ">
          Send
        </button>
      </div>
    </div>
  );
}
