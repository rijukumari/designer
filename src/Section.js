import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import './index.css';

function Section() {
  return (
    <div>
      <div className="text-center   my-16">
        <div className="">
          <h2 className="text-2xl font-bold">Please verify your email...</h2>
          <MdOutlineMarkEmailRead className="w-11 h-11 text-neutral-300  btn" />
          <p className="text-neutral-500 text-md">
            Please verify your email address. We've sent a conformation email
            to:
          </p>
        </div>
        <div className="text-md">
          <h4 className=" py-4 font-bold leading-11">account@ refero.design</h4>
          <p className="text-neutral-500 leading-normal py-2">
            Click the conformation link in that email to begin using Dribbble.
          </p>
        </div>
        <div>
          <p className="text-neutral-500">
            Did'n recieve the email? Check your Spam folder, it may have been
            cought by a filter. if <br />
            you don't see it,you can{" "}
            <span className="text-pink-500 font-bold">
              resend the confirmation email.
            </span>
          </p>
        </div>
        <div>
          <p className="text-neutral-500 py-2">
            Wrong email address?{" "}
            <span className="text-pink-500 font-bold">Change it.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
