"use client";
import Image from "next/image";

const HomeContent = () => {  
  return (
    <>    
<section className="relative w-full bg-dark-custom">
    <div className="relative px-8 mx-auto">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="flex flex-col items-start justify-center w-full pt-10 pb-10 -mt-10 md:w-full md:pb-24">
                <div className="marquee">
                    <div className="marquee-content">
                        <span className="text-7xl text-white">Your code has the power to redefine how we build the web start today.</span>
                        <span className="text-7xl text-white">Your code has the power to redefine how we build the web start today.</span>
                    </div>
                    <div className="marquee-content">
                        <span className="text-7xl text-white">Your code has the power to redefine how we build the web start today.</span>
                        <span className="text-7xl text-white">Your code has the power to redefine how we build the web start today.</span>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</section>

<section className="relative w-full overflow-hidden bg-dark-custom">
    <div className="relative px-8 pt-10 mx-auto max-w-7xl">
        <div className="absolute top-0 right-0 hidden w-full h-full -ml-32 transform scale-100 translate-x-1/2 translate-y-20 bg-gray-800 md:block -rotate-12 opacity-90"></div>
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="flex flex-col items-start justify-center w-full pt-10 pb-10 -mt-10 md:w-1/2 md:pb-24 md:pr-16">
                <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400">Call To Arms</div>
                <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
					Help Forge the Next.js Excalibur!
				</h2>
                <p className="text-lg text-gray-300 my-7">
					Fellow developers, imagine a world where a Next.js template isn&apos;t just a template. It&apos;s a living, breathing entity, evolving with every contribution, managed from the nerve center of vnoc.com. Sounds like a sci-fi movie? Well, it&apos;s about to become reality, and you&apos;re being recruited for the mission!
				</p>
            </div>
            <div className="relative flex items-center justify-center w-full md:w-1/2 md:pt-0">
                <div className="absolute w-full p-12 opacity-100">
                    <Image 
                    src="https://cdn.vnoc.com/icons/devchallenge/background-patterns.png" 
                    alt={""}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <Image 
                src="https://cdn.vnoc.com/icons/devchallenge/sword.png" 
                alt={""}
                width={500}
                height={500}
                style={{ width: "100%", height: "100%" }}
                className="relative w-full h-auto h-full md:w-100" 
                />
            </div>
        </div>
    </div>
</section>

<section className="relative w-full bg-dark-custom">
    <div className="relative px-8 pt-40 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">			
            <div className="flex flex-col items-start justify-center w-full pt-10 pb-10 -mt-10 md:w-full md:pb-24 md:pr-16">
                <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400">Self Updates</div>
                <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
					Introducing the Concept
				</h2>
                <p className="text-lg text-gray-300 my-7">
				Like a mythical creature that regenerates, this template evolves with each contribution. Think of it as a GitHub repo that drinks from the Fountain of Eternal Updates. Central Management: Approved users wield the power to manage the site via our central app on vnoc.com, acting as guardians of this digital realm.
				</p>
            </div>            
        </div>
    </div>
</section>

<section className="relative w-full bg-dark-custom">
    <div className="relative px-8 pt-20 mx-auto max-w-7xl"> 
        <div className="lg:w-full w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">      
           <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400">How It Works</div>
           <h2 className="mb-7 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
                The Magic Behind the Curtain
            </h2>
            <p className="text-gray-500 text-xl">
				<b className="text-white">The Proposal Arena: </b>Submit your ideas for what this Next.js template could be. A portfolio that updates with your latest GitHub commit? A blog that auto-publishes your midnight musings from a Markdown file? The sky&apos;s the limit.
			</p>
			 <p className="text-gray-500 text-xl">
				<b className="text-white">The Forge of Approval: </b>Ideas will be vetted by our team of wise wizards (aka the project admins). If your idea shines brightest, it becomes the chosen one.
			</p>
			<p className="text-gray-500 text-xl">
				<b className="text-white">The Circle of Contributors: </b>Once an idea is selected, it&apos;s all hands on deck. Contribute code, documentation, spells, and potions (okay, maybe not potions) to bring the concept to life.
			</p>
			<p className="text-gray-500 text-xl">
				<b className="text-white">The Command Center: </b>Approved guardians (that&apos;s you, if you wish) can manage the site directly from vnoc.com, ensuring the template remains not only a beacon of innovation but also a fortress of security and efficiency.
			</p>
        </div>       
    </div>
</section>

<section className="relative w-full bg-dark-custom">
    <div className="relative px-8 pt-40 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">			
            <div className="flex flex-col items-start justify-center w-full pt-10 pb-10 -mt-10 md:w-full md:pb-24 md:pr-16">
                <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400">Contribution</div>
                <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
					Ready to Make History?
				</h2>
                <p className="text-lg text-gray-300 my-7">
				This isn&apos;t just another project. It&apos;s a chance to be part of something bigger, bolder, and frankly, pretty awesome. To join the quest, drop your idea here and let&apos;s start shaping the future, one commit at a time. Together, we&apos;re not just coding; we&apos;re creating a legacy. Let the contributions begin!
				</p>
            </div>            
        </div>
    </div>
</section>

<section className="relative w-full bg-dark-custom">
    <div className="flex flex-col items-center max-w-7xl py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
        <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
		The Ultimate Prize Package Awaits You!
		</h2>
        <p className="w-full max-w-3xl mx-0 mx-auto mt-4 mb-0 text-sm font-medium leading-relaxed text-center text-gray-500 border-0 border-gray-200 lg:text-lg md:text-base">
            Dare to dream? Step into the limelight and grab your chance to not just win, but truly redefine what&apos;s possible in the tech world with our unparalleled prize package. Here&apos;s what awaits the visionary minds ready to challenge the status quo:
        </p>
        <div className="grid grid-cols-3 gap-5 mt-10 sm:grid-cols-8 lg:grid-cols-12">
			<div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                <Image
                  src="https://cdn.vnoc.com/icons/devchallenge/agreement.png"
                  alt={""}
                  width={100}
                  height={100}
                  className="mx-auto"
                  />
                    <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-2xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Exclusive Partnership Opportunity</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
							Join the Tech Elite: Secure a coveted partnership with DevChallenge, Applications.com, and VNOC.com. This isn&apos;t just a reward; it&apos;s a golden ticket to innovation&apos;s inner circle. As part of our exclusive network, you&apos;ll have the unique opportunity to collaborate on cutting-edge projects, gain insider access to industry secrets, and make your mark on the tech landscape.
						</p>
                    </div>
                </div>
            </div>        
            <div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                  <Image
                  src="https://cdn.vnoc.com/icons/devchallenge/money.png"
                  alt={""}
                  width={100}
                  height={100}
                  className="mx-auto"
                  />
                    <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-2xl font-bold leading-none tracking-wider border-solid text-gray-50">A Generous Stake in Tomorrow</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
						Invest in Your Future: Elevate your portfolio with 50,000 ESH of Applications.com, valued at an astonishing $54,598.92 with each share standing at $1.09. This substantial equity stake is more than a prize; it&apos;s a leap towards securing your future in the tech industry, offering you a share of success in a pioneering enterprise.
						</p>
                    </div>
                </div>
            </div>
            <div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                <Image
                  src="https://cdn.vnoc.com/icons/devchallenge/team.png"
                  alt={""}
                  width={100}
                  height={100}
                  className="mx-auto"
                  />
                    <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border text-2xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">First Dibs on Challenge Teams</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
							Lead the Way: Gain an exclusive advantage with first dibs on selecting your challenge team or project. This privilege puts you in the driver&apos;s seat, allowing you to align with a team that matches your vision, expertise, and drive, setting the stage for a collaboration that could very well redefine industry norms.
						</p>
                    </div>
                </div>
            </div>                
        </div>
    </div>
</section>

<section className="relative w-full bg-dark-custom">
     <div className="flex flex-col items-center max-w-7xl py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
        <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
			Elevate Your Ideas to Win: Our Judging Criteria Unveiled
		</h2>
        <p className="mt-5 mb-12 text-lg text-gray-500 text-center">In the quest to find groundbreaking projects that redefine what&apos;s possible, our panel of esteemed judges will be focusing on a blend of innovation, technical excellence, impact, and collaborative effort. Here&apos;s what we&apos;re looking for in your submissions:</p>

        <div className="flex w-full h-full">
            <div className="w-full lg:w-12/12">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Innovation and Originality (25%)</h3>
                                </div>
                                <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">Pioneering Ideas:</p>
                                <p className="mb-2 text-gray-600">We&apos;re seeking projects that push the boundaries of the conventional, offering new perspectives, solutions, or approaches. Your project should address existing challenges or uncover new opportunities in unique and creative ways.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Technical Execution and Excellence (25%)</h3>
                                </div>
                                <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">Robust Development:</p>
                                <p className="mb-2 text-gray-600">Your project&apos;s technical foundation should be solid, showcasing clean, efficient, and scalable code. We&apos;ll look at how well you&apos;ve integrated technologies, the complexity of the problem solved, and the smoothness of the execution.</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Design and User Experience (20%)</h3>
                                </div>
                                <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">Intuitive and Engaging</p>
                                <p className="mb-2 text-gray-600">Aesthetics matter, but so does functionality. Your project should not only look good but also offer an intuitive and seamless user experience. We&apos;ll evaluate the effectiveness of your design in communicating ideas and facilitating user interactions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Impact and Application (20%)</h3>
                                </div>
                                <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">Real-World Viability</p>
                                <p className="mb-2 text-gray-600">The best projects have the potential to make a difference. We&apos;re interested in how your project can impact its intended audience or field. This could be through innovation, efficiency, accessibility, or by addressing critical needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Collaboration and Teamwork (10%)</h3>
                                </div>
                                <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">Harmonious Creation</p>
                                <p className="mb-2 text-gray-600">For team entries, the ability to collaborate effectively is key. We&apos;ll consider how your team has leveraged diverse skills, perspectives, and roles to enhance the project. This includes coordination, division of labor, and the integration of different ideas into a cohesive whole.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-dark-custom border-2 border-blue-500 rounded-lg">
                                <div className="flex items-center -mt-1">
									<h3 className="my-2 text-lg font-bold text-gray-100">Additional Notes:</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-300 uppercase">Clarity of Presentation</p>
                                <p className="mb-2 text-gray-600">While not a formal criterion, the clarity with which you present your project—through documentation, pitch, or demonstration—will naturally influence its reception. Make sure to communicate your ideas clearly and concisely.</p>
                            </div>
                        </div>
                    </div>
                </div>
				
            </div>
        </div>
    </div>
</section>
  </>
  )
}

export default HomeContent