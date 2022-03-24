import React from "react";

function ContactButton({ text }: any) {
  return (
    <button className="text-white bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2">
      {text}
    </button>
  );
}

export default ContactButton;