import React from "react";
import InputField from "../components/InputField";
function Contact() {
  return (
    <div className=" w-full h-screen flex items-center justify-center p-4 ">
      <div className="w-[100%]  2xl:w-[30%] lg:w-[70%] h-[60%]  bg-[#15223E] flex  flex-col items-center justify-center  rounded-2xl shadow-2xl  md:gap-36 gap-10  ">
        <h1 className="md:text-3xl text-2xl font-semibold ">Contact Me</h1>
        <div className="flex flex-col gap-10 w-full items-center">
          <InputField placeholder="First name" />
          <InputField placeholder="Last name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Write your question here" />
          <button className="bg-white w-[120px] h-10 rounded-2xl shadow-2xl text-black font-bold mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
