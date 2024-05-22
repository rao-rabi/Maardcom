import { FooterLogo, Facebook, Instagram, Twitter, Linkedin } from "./Images";
const Footer = () => {
  return (
    <div className="bg-[#1C1C28] px-5 p-14 pb-0">
      <div className="grid grid-cols-12 gap-5 max-w-7xl text-white mx-auto">
        {/* logo and description */}
        <div className="md:col-span-4 col-span-12">
          <img src={FooterLogo} className="object-contain" alt="" />
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        {/* quick links */}
        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <ul className="text-base font-semibold">
            <li className="pb-3">Quick Links</li>
            <li className="pb-2">
              <span className="py-2 px-1">--</span>About Us
            </li>
            <li className="text-[#838E9E] py-1">Teams</li>
            <li className="text-[#838E9E] py-1">Careers</li>
            <li className="text-[#838E9E] py-1">Investors</li>
            <li className="text-[#838E9E] py-1">Partners</li>
          </ul>
        </div>
        {/* products */}
        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <ul className="text-base font-semibold">
            <li className="pb-3">PRODUCTS</li>
            <li className="text-[#838E9E] py-1">Used Cars</li>
            <li className="text-[#838E9E] py-1">New Cars</li>
            <li className="text-[#838E9E] py-1">Showroom</li>
            <li className="text-[#838E9E] py-1">Dealers</li>
            <li className="text-[#838E9E] py-1">App Design</li>
          </ul>
        </div>
        {/* resources */}
        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <ul className="text-base font-semibold">
            <li className="pb-3">RESOURCES</li>
            <li className="text-[#838E9E] py-1">Blogs</li>
            <li className="text-[#838E9E] py-1">FAQs</li>
            <li className="text-[#838E9E] py-1">Contact Us</li>
            <li className="text-[#838E9E] py-1">Behance</li>
          </ul>
        </div>
        {/* links */}
        <div className="lg:col-span-2 md:col-span-4 col-span-6">
          <ul className="text-base font-semibold">
            <li className="text-white bg-[#393953] p-2 mb-3 w-fit flex items-center rounded-lg">
              <img src={Facebook} className="object-contain" alt="" />
              <span className="px-2">|</span>Facebook
            </li>
            <li className="text-white bg-[#880ED3] p-2 my-3 w-fit flex items-center rounded-lg">
              <img src={Linkedin} className="object-contain" alt="" />
              <span className="px-2">|</span>Linkedin
            </li>
            <li className="text-white bg-[#393953] p-2 my-3 w-fit flex items-center rounded-lg">
              <img src={Twitter} className="object-contain" alt="" />
              <span className="px-2">|</span>Twitter
            </li>
            <li className="text-white bg-[#393953] p-2 my-3 w-fit flex items-center rounded-lg">
              <img src={Instagram} className="object-contain" alt="" />
              <span className="px-2">|</span>Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* reserved */}
      <div className="max-w-7xl mx-auto border-t mt-10 border-[#243752]">
        <p className="text-center text-base text-white font-bold py-7">
          © 2024 - Maardcom
        </p>
      </div>
    </div>
  );
};

export default Footer;
