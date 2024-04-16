"use client";
import Image from "next/image";

const Header = () => {  
  return (
    <>    
  <section className="w-full">
    <div className="relative h-auto pb-40 sm:pb-40 md:pb-40">       
        <div className="px-10 mx-auto max-w-7xl">
            <div className="relative flex items-center justify-between h-20 mx-auto">
                <a href="/" className="relative flex items-center text-xl font-bold text-white">
                  <Image
                   src="https://vnoclogos.s3-us-west-1.amazonaws.com/logo-devchallenge-1.png" 
                   alt="logo"
                   height={20}
                   width={350}
                   />
                </a>
                <nav className="text-sm font-bold text-white sm:text-base">
                    <a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>Home</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
                    <a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>Commuity</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
					 <a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>Prize</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
					 <a href="blog.devchallenge.com" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>Blog</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
					 <a href="/about" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>About</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
					 <a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                        <span>Contact Us</span>
                        <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
                    </a>
                    <a href="/join" target="_blank" className="text-md bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Join Now!</a>
                </nav>
            </div>           
            <div className="container relative max-w-4xl mx-auto mt-20 sm:mt-20 lg:mt-20 pt-10">
                <h1 className="lh text-center text-7xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-500 sm:text-7xl md:text-7xl">
					Developing Tomorrow&apos;s Collaborative Frameworks Today
				</h1>                
                <p className="text-xl text-center mt-6 text-md text-gray-300">
				Join us at Devchallenge.com as we pioneer the next generation of web development tools. Dive into a community-driven journey, shaping the future of collaborative web frameworks.
				</p>
            </div>
            <div className="relative flex justify-center max-w-3xl mx-auto mt-10">
                <div className="inline-block w-full overflow-hidden font-mono font-medium text-white bg-white rounded-lg shadow-sm bg-opacity-10 text-">
                    <div className="flex items-center w-full h-12 pl-4 bg-transparent opacity-80">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="px-5 pt-1 pb-5">
                        <p>$ your code has the power to redefine how we build the web start today.</p>
                        <p className="mt-4">Loading Awesomeness...</p>
                        <p>Ready to Deploy 🚀</p>
                    </div>
                </div>
            </div>
			<div className="relative flex justify-center max-w-3xl mx-auto mt-10">
				<a href="/join" target="_blank" className="text-xl bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Join Now!</a>
			</div>
        </div>
    </div>
</section>
  </>
  )
}

export default Header