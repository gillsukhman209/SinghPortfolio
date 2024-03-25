import React from "react";
import InputField from "../components/InputField";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bbcef7c-c0e0-4162-9c88-24435269685d");

    const object = Object.fromEntries(formData);
    const data = {
      access_key: "1bbcef7c-c0e0-4162-9c88-24435269685d",
      name: name,
      email: email,
      message: message,
    };
    const json = JSON.stringify(data);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Successfully sent");
    } else {
      alert("Error sending, please try again");
    }
  };
  return (
    <div className=" w-full min-h-screen flex items-start   justify-center p-4 ">
      <div className="w-[100%]  2xl:w-[30%] lg:w-[70%] h-[800px] bg-[#15223E] flex  flex-col items-center justify-around  rounded-2xl shadow-2xl  ">
        <h1 className="text-4xl font-semibold ">Contact Me</h1>
        <form
          onSubmit={(event) => {
            onSubmit(event);
          }}
          className="flex flex-col gap-10 w-full items-center mb-32"
        >
          <input
            type="text"
            placeholder="Name"
            className=" p-2 text-sm bg-transparent border-b-2 w-[50%] "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className=" p-2 text-sm bg-transparent border-b-2 w-[50%] "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Write your message here"
            className=" p-2 text-sm bg-transparent border-b-2 w-[50%] "
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button
            className="bg-white w-[120px] h-10 rounded-2xl shadow-2xl text-black font-bold mt-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
