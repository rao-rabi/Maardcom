import {
  HopinLogo,
  TwitchLogo,
  AmazonLogo,
  GoogleFileLogo,
  FeeedlyLogo,
  ElementorLogo,
  CraftLogo,
} from './Images';

const JoinUS = () => {
  return (
    <div className="bg-[#FAF0FF]">
      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col justify-center items-center h-[600px]">
          <div className="max-w-[430px] text-center my-3">
            <h2 className="font-bold text-[40px] text-black mb-4">
              Join the 7,000+
              <br />
              companies trusting us
            </h2>
            <p className="font-medium text-[20px] text-[#7E7E7E] mb-11">
              You’ve got the ideas, we’ve got the tools
            </p>
            <a
              href="#"
              className="font-bold text-[16px] text-white inline-block bg-[#880ED3] py-4 rounded-xl w-[180px]"
            >
              Get Started
            </a>
          </div>
          <div className="absolute hidden sm:block top-[30px]">
            <a href="#">
              <img className="w-[100px] rounded-[52px]" src={HopinLogo} alt="Hopin Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block top-[70px] sm:left-[100px] md:left-[180px] xl:left-[300px]">
            <a href="#">
              <img className="lg:w-[120px] w-[80px] rounded-[62px]" src={FeeedlyLogo} alt="Feeedly Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block top-[35%] left-[20px]">
            <a href="#">
              <img className="w-[130px] lg:w-[178px] rounded-[62px]" src={AmazonLogo} alt="Amazon Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block bottom-[50px] left-[120px] xl:left-[240px]">
            <a href="#">
              <img className="w-[130px] rounded-[62px]" src={CraftLogo} alt="Craft Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block top-[130px] right-[120px] xl:right-[250px]">
            <a href="#">
              <img className="w-[130px] rounded-[62px]" src={TwitchLogo} alt="Twitch Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block top-[45%] right-[50px]">
            <a href="#">
              <img className="w-[90px] rounded-[62px]" src={GoogleFileLogo} alt="Google File Logo" />
            </a>
          </div>
          <div className="absolute hidden sm:block bottom-[25px] right-[210px]">
            <a href="#">
              <img className="w-[150px] rounded-[62px]" src={ElementorLogo} alt="Elementor Logo" />
            </a>
          </div>
          {/* For mobile */}
          <div className="sm:hidden flex gap-3 items-center">
            <div>
              <a href="#">
                <img className="w-[100px] rounded-[52px]" src={HopinLogo} alt="Hopin Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={FeeedlyLogo} alt="Feeedly Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={AmazonLogo} alt="Amazon Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={CraftLogo} alt="Craft Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={TwitchLogo} alt="Twitch Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={GoogleFileLogo} alt="Google File Logo" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="rounded-[62px]" src={ElementorLogo} alt="Elementor Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
