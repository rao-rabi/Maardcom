import { useState } from "react";
import { SubmitImg } from "./Images";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

    // handle submit function
    const handleSubmit = () => {
      console.log("function handleSubmit");
    }
  return (
    <div className="max-w-7xl mx-auto my-20 px-2">
      <div className="max-w-[370px] mx-auto">
        <div>
          <div className="p-2 bg-[#bb53fb26] md:mx-0 mx-auto w-fit rounded-xl">
            <p className="text-[#B479D9] font-bold text-lg px-4 italic">
              Have Questions
            </p>
          </div>
          <p className="text-[38px] font-bold text-center">Send us a massage</p>
        </div>
        <form action="" className="">
          {/* name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            placeholder="Name"
            className="border-0 outline-0 p-2 rounded-lg w-full my-4 bg-[#F8F8F8] font-semibold text-[#6C757D] placeholder:text-[#6C757D]"
          />
          {/* email and phone */}
          <div className="flex justify-between gap-3">
            <input
              type="email"
              name="Email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="border-0 outline-0 rounded-lg p-2 w-full bg-[#F8F8F8] font-semibold text-[#6C757D] placeholder:text-[#6C757D]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="border-0 outline-0 rounded-lg p-2 w-full bg-[#F8F8F8] font-semibold text-[#6C757D] placeholder:text-[#6C757D]"
            />
          </div>
          {/* message */}
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Tell Us About Project *"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="border-0 mt-4 outline-0 resize-none rounded-lg p-2 w-full bg-[#F8F8F8] font-semibold text-[#6C757D] placeholder:text-[#6C757D]"
          ></textarea>
          {/* submit button */}
          <button type="submit" onClick={handleSubmit} className="text-white px-4 py-2 mt-4 font-bold text-[17px] flex items-center justify-center bg-black rounded-lg">
            <img src={SubmitImg} alt="" /> Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
