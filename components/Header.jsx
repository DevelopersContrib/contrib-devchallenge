"use client";
import Image from "next/image";

const Header = ({domain}) => {  
  return (
    <>    
    <section className="w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col flex-wrap items-center justify-between py-7 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row">
              <Image
                src="https://vnoclogos.s3-us-west-1.amazonaws.com/logo-devchallenge-1.png"
                alt="logo"
                width={350}
                height={20}
              />
              <nav className="flex flex-wrap items-center mb-0 text-lg md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-800">
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-400"
                >
                  Home
                </a>
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-400"
                >
                  Community
                </a>
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-400"
                >
                  Prize
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-400"
                >
                  Blog
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-400"
                >
                  About
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-400"
                >
                  Contact Us
                </a>
              </nav>
            </div>
            <div className="inline-flex items-center ml-5 text-lg space-x-6 lg:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 font-medium leading-6 text-gray-200 hover:text-white whitespace-no-wrap bg-gray-800 border border-transparent rounded shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col pt-20  md:pt-30 lg:pt-30">
            <div className="w-full lg:w-1/2 flex lg:px-0 px-0 flex-col md:items-center lg:items-start justify-center">
              <h1 className="lh text-white text-7xl sm:text-6xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-7xl font-black">
                Developing Tomorrow’s Collaborative Frameworks Today
              </h1>
              <p className="text-gray-500 sm:text-lg md:text-xl xl:text-1xl lg:max-w-none max-w-2xl md:text-center lg:text-left lg:pr-32 mt-6">
                Join us at Devchallenge.com as we pioneer the next generation of
                web development tools. Dive into a community-driven journey,
                shaping the future of collaborative web frameworks.
              </p>
              <a
                href="#_"
                className="bg-white text-black px-12 lg:px-16 py-4 text-center lg:py-5 font-bold rounded text-lg md:text-xl lg:text-2xl mt-8 inline-block w-auto"
              >
                {" "}
                Join Now!{" "}
              </a>
              <p className="text-gray-400 font-normal mt-4">
                Your code has the power to redefine how we build the web start
                today.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative lg:mt-0 mt-0 flex items-center justify-center">
              <Image
                src="https://cdn.vnoc.com/images/people_working_3.png"
                className="w-full ml-4 md:ml-20 lg:ml-0 relative"
                alt={""}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
  
  </>
  )
}

export default Header