import React from "react";

export default function ContactCard() {
  return (
    <div className="bg-white p-4 border-2 rounded-2xl flex items-center justify-center flex-col ">
      <form className="flex flex-col w-full max-w-md">
        <h1 className="font-semibold text-xl pb-4 text-center">Contact Me</h1>
        <input
          type="text"
          className=" p-1 input-field border-b-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="p-1 input-field  border-b-2"
          placeholder="Email"
        />
        <textarea
          className=" p-1 input-field h-32 border-b-2"
          placeholder="Text..."></textarea>
        <button className="btn-submit">Send</button>
      </form>
    </div>
  );
}
