const ContactInfo = () => {
  return (
    <div className="bg-[#880ED3] py-10 px-5 text-white">
      <div className="text-center max-w-[1000px] mx-auto">
        <p className="text-[50px] font-semibold">Contact Information </p>
        <p className="text-[16px] font-medium leading-5 my-5">
          Plan upon yet way get cold spot its week. Almost do am or limits
          hearts.
          <br /> Resolve parties but why she shewing.
        </p>

        <div className="my-10 grid md:grid-cols-3 gap-5 grid-cols-1 place-items-center">
          <div>
            <p className="text-[20px] font-semibold">Hotline</p>
            <p className="text-[16px] font-normal">+4733378901</p>
          </div>
          <div>
            <p className="text-[20px] font-semibold">Our Location</p>
            <p className="text-[16px] font-normal leading-5 md:text-justify text-center">
              55 Main Street, The Grand Avenue 2nd Block,
              <br />
              New York City
            </p>
          </div>
          <div>
            <p className="text-[20px] font-semibold">Official Email</p>
            <p className="text-[16px] font-normal">info@agrul.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
