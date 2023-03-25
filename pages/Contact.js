import React from "react";
import InputField from "../components/InputField";
function Contact() {
  return (
    <div className=" w-full h-screen flex items-center justify-center  ">
      <div className="w-[50%] h-[50%] bg-[#15223E] flex  flex-col items-center rounded-2xl shadow-2xl gap-32">
        <h1 className="text-3xl font-semibold mt-6">Contact Me</h1>
        <div className="flex flex-col gap-10 w-full items-center">
          <InputField placeholder="First name" />
          <InputField placeholder="Last name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Write your question here" />
          <button className="bg-white w-[120px] h-10 rounded-2xl shadow-2xl text-black font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
