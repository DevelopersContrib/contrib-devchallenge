"use client";
import Image from "next/image";

const HomeContent = () => {  
  return (
    <>    
    <section className="w-full px-5 relative bg-black">
        <div className="container flex flex-col flex-wrap items-center justify-between py-20 mx-auto md:flex-row max-w-7xl">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-10 lg:pr-10 xl:pr-10">
            <Image
              src="https://cdn.vnoc.com/icons/devchallenge/sword.png"
              className="w-full ml-4 md:ml-20 lg:ml-0 relative"
              alt={""}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">
            <div className="relative">
              <div className="relative flex -rotate-2 text-yellow-600 px-3 mb-10 md:mb-4 py-1.5 uppercase font-bold text-xs">
                <span className="absolute inset-0 rounded bg-yellow-300 z-20"></span>
                <span className="w-full h-full absolute rounded right-0 -mr-0.5 top-0 mt-0.5 bg-yellow-400"></span>
                <span className="relative z-20">Call to Arms:</span>
              </div>
            </div>
            <h1 className="lh text-white text-6xl sm:text-6xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-6xl font-black mb-6 relative">
              Help Forge the Next.js Excalibur!
            </h1>
            <div className="relative"></div>
            <p className="text-gray-500 text-xl">
              Fellow developers, imagine a world where a Next.js template isn’t
              just a template. It’s a living, breathing entity, evolving with
              every contribution, managed from the nerve center of vnoc.com.
              Sounds like a sci-fi movie? Well, it’s about to become reality,
              and you&apos;re being recruited for the mission!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-5 relative bg-black">
        <div className="container flex flex-col flex-wrap items-center justify-between py-20 mx-auto md:flex-row max-w-7xl">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">
            <div className="relative">
              <div className="relative flex -rotate-2 text-yellow-600 px-3 mb-10 md:mb-4 py-1.5 uppercase font-bold text-xs">
                <span className="absolute inset-0 rounded bg-yellow-300 z-20"></span>
                <span className="w-full h-full absolute rounded right-0 -mr-0.5 top-0 mt-0.5 bg-yellow-400"></span>
                <span className="relative z-20">Self-updates:</span>
              </div>
            </div>
            <h1 className="lh text-white text-6xl sm:text-6xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-6xl font-black mb-6 relative">
              Introducing the Concept
            </h1>
            <div className="relative"></div>
            <p className="text-gray-500 text-xl">
              Like a mythical creature that regenerates, this template evolves
              with each contribution. Think of it as a GitHub repo that drinks
              from the Fountain of Eternal Updates. Central Management: Approved
              users wield the power to manage the site via our central app on
              vnoc.com, acting as guardians of this digital realm.
            </p>
          </div>
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-10 lg:pl-10 xl:pl-0">
            <Image
              src="https://cdn.vnoc.com/images/people_working_5.png"
              className="w-full ml-4 md:ml-20 lg:ml-0 relative"
              alt={""}
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="w-full px-5 relative bg-black">
        <div className="container flex flex-col flex-wrap items-center justify-between py-20 mx-auto md:flex-row max-w-7xl">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-10 lg:pr-10 xl:pr-10">
            <Image
              src="https://cdn.vnoc.com/images/people_working_3.png"
              className="w-full ml-4 md:ml-20 lg:ml-0 relative"
              alt={""}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">
            <div className="relative">
              <div className="relative flex -rotate-2 text-yellow-600 px-3 mb-10 md:mb-4 py-1.5 uppercase font-bold text-xs">
                <span className="absolute inset-0 rounded bg-yellow-300 z-20"></span>
                <span className="w-full h-full absolute rounded right-0 -mr-0.5 top-0 mt-0.5 bg-yellow-400"></span>
                <span className="relative z-20">How it works:</span>
              </div>
            </div>
            <h1 className="lh text-white text-6xl sm:text-6xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-6xl font-black mb-6 relative">
              The Magic Behind the Curtain
            </h1>
            <div className="relative"></div>
            <p className="text-gray-500 text-xl">
              <b className="text-white">The Proposal Arena: </b>Submit your
              ideas for what this Next.js template could be. A portfolio that
              updates with your latest GitHub commit? A blog that auto-publishes
              your midnight musings from a Markdown file? The sky’s the limit.
            </p>
            <p className="text-gray-500 text-xl">
              <b className="text-white">The Forge of Approval: </b>Ideas will be
              vetted by our team of wise wizards (aka the project admins). If
              your idea shines brightest, it becomes the chosen one.
            </p>
            <p className="text-gray-500 text-xl">
              <b className="text-white">The Circle of Contributors: </b>Once an
              idea is selected, it’s all hands on deck. Contribute code,
              documentation, spells, and potions (okay, maybe not potions) to
              bring the concept to life.
            </p>
            <p className="text-gray-500 text-xl">
              <b className="text-white">The Command Center: </b>Approved
              guardians (that’s you, if you wish) can manage the site directly
              from vnoc.com, ensuring the template remains not only a beacon of
              innovation but also a fortress of security and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-5 relative bg-black">
        <div className="container flex flex-col flex-wrap items-center justify-between py-20 mx-auto md:flex-row max-w-7xl">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto relative flex items-start justify-center flex-col">
            <div className="relative">
              <div className="relative flex -rotate-2 text-yellow-600 px-3 mb-10 md:mb-4 py-1.5 uppercase font-bold text-xs">
                <span className="absolute inset-0 rounded bg-yellow-300 z-20"></span>
                <span className="w-full h-full absolute rounded right-0 -mr-0.5 top-0 mt-0.5 bg-yellow-400"></span>
                <span className="relative z-20">Contribution:</span>
              </div>
            </div>
            <h1 className="lh text-white text-6xl sm:text-6xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-6xl font-black mb-6 relative">
              Ready to Make History?
            </h1>
            <div className="relative"></div>
            <p className="text-gray-500 text-xl">
              This isn’t just another project. It’s a chance to be part of
              something bigger, bolder, and frankly, pretty awesome. To join the
              quest, drop your idea here and let’s start shaping the future, one
              commit at a time. Together, we’re not just coding; we’re creating
              a legacy. Let the contributions begin!
            </p>
            <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
              <a
                href="#_"
                className="px-6 py-3 md:w-auto w-full text-center text-lg bg-white text-black rounded font-bold"
              >
                Join Now!
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-10 lg:pl-10 xl:pl-0">
            <Image
              src="https://cdn.vnoc.com/images/people_working_7.png"
              className="w-full ml-4 md:ml-20 lg:ml-0 relative"
              alt={""}
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="w-full px-5 relative bg-black">
        <div className="flex flex-col items-center max-w-7xl py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
          <h2 className="w-full m-0 text-6xl font-black tracking-wide text-center border-0 border-gray-200 sm:text-6xl text-gray-50 px-20">
            The Ultimate Prize Package Awaits You!
          </h2>
          <p className="w-full max-w-3xl mx-0 mx-auto mt-4 mb-0 text-sm font-medium leading-relaxed text-center text-gray-500 border-0 border-gray-200 lg:text-lg md:text-base">
            Dare to dream? Step into the limelight and grab your chance to not
            just win, but truly redefine what&apos;s possible in the tech world
            with our unparalleled prize package. Here&apos;s what awaits the
            visionary minds ready to challenge the status quo:
          </p>
          <div className="grid grid-cols-3 gap-5 mt-10 sm:grid-cols-8 lg:grid-cols-12">
            <div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
              <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                  <Image
                    src="https://cdn.vnoc.com/icons/devchallenge/agreement.png"
                    className="text-center mx-auto mb-3"
                    alt={""}
                    width={65}
                    height={65}
                  />
                  <span className="box-border text-2xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">
                    Exclusive Partnership Opportunity
                  </span>
                  <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
                    Join the Tech Elite: Secure a coveted partnership with
                    DevChallenge, Applications.com, and VNOC.com. This
                    isn&apos;t just a reward; it&apos;s a golden ticket to
                    innovation&apos;s inner circle. As part of our exclusive
                    network, you&apos;ll have the unique opportunity to
                    collaborate on cutting-edge projects, gain insider access to
                    industry secrets, and make your mark on the tech landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
              <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                <Image
                    src="https://cdn.vnoc.com/icons/devchallenge/money.png"
                    className="text-center mx-auto mb-3"
                    alt={""}
                    width={65}
                    height={65}
                  />
                  <span className="box-border text-2xl font-bold leading-none tracking-wider border-solid text-gray-50">
                    A Generous Stake in Tomorrow
                  </span>
                  <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
                    Invest in Your Future: Elevate your portfolio with 50,000
                    ESH of Applications.com, valued at an astonishing $54,598.92
                    with each share standing at $1.09. This substantial equity
                    stake is more than a prize; it&apos;s a leap towards
                    securing your future in the tech industry, offering you a
                    share of success in a pioneering enterprise.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-m col-span-4  border-0 border-gray-200 text-gray-50">
              <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                <div className="mt-6  text-center border-0 border-gray-200 sm:text-left text-gray-50">
                <Image
                    src="https://cdn.vnoc.com/icons/devchallenge/team.png"
                    className="text-center mx-auto mb-3"
                    alt={""}
                    width={65}
                    height={65}
                  />
                  <span className="box-border text-2xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">
                    First Dibs on Challenge Teams
                  </span>
                  <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">
                    Lead the Way: Gain an exclusive advantage with first dibs on
                    selecting your challenge team or project. This privilege
                    puts you in the driver&apos;s seat, allowing you to align
                    with a team that matches your vision, expertise, and drive,
                    setting the stage for a collaboration that could very well
                    redefine industry norms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 relative bg-black">
        <div className="flex flex-col items-center max-w-7xl py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
          <h1 className="lh text-white text-6xl sm:text-6xl lg:max-w-none  text-center md:text-center xl:text-6xl font-black mb-6 relative">
            Elevate Your Ideas to Win: Our Judging Criteria Unveiled
          </h1>
          <p className="mb-12 text-lg text-gray-500 text-center">
            In the quest to find groundbreaking projects that redefine
            what&apos;s possible, our panel of esteemed judges will be focusing
            on a blend of innovation, technical excellence, impact, and
            collaborative effort. Here’s what we&apos;re looking for in your
            submissions:
          </p>

          <div className="flex w-full h-full">
            <div className="w-full lg:w-12/12">
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Innovation and Originality (25%)
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">
                        Pioneering Ideas:
                      </p>
                      <p className="mb-2 text-gray-600">
                        We&apos;re seeking projects that push the boundaries of
                        the conventional, offering new perspectives, solutions,
                        or approaches. Your project should address existing
                        challenges or uncover new opportunities in unique and
                        creative ways.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Technical Execution and Excellence (25%)
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">
                        Robust Development:
                      </p>
                      <p className="mb-2 text-gray-600">
                        Your project&apos;s technical foundation should be
                        solid, showcasing clean, efficient, and scalable code.
                        We&apos;ll look at how well you&apos;ve integrated
                        technologies, the complexity of the problem solved, and
                        the smoothness of the execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Design and User Experience (20%)
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">
                        Intuitive and Engaging
                      </p>
                      <p className="mb-2 text-gray-600">
                        Aesthetics matter, but so does functionality. Your
                        project should not only look good but also offer an
                        intuitive and seamless user experience. We&apos;ll
                        evaluate the effectiveness of your design in
                        communicating ideas and facilitating user interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Impact and Application (20%)
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">
                        Real-World Viability
                      </p>
                      <p className="mb-2 text-gray-600">
                        The best projects have the potential to make a
                        difference. We&apos;re interested in how your project
                        can impact its intended audience or field. This could be
                        through innovation, efficiency, accessibility, or by
                        addressing critical needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Collaboration and Teamwork (10%)
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-sm font-medium text-gray-300 uppercase">
                        Harmonious Creation
                      </p>
                      <p className="mb-2 text-gray-600">
                        For team entries, the ability to collaborate effectively
                        is key. We&apos;ll consider how your team has leveraged
                        diverse skills, perspectives, and roles to enhance the
                        project. This includes coordination, division of labor,
                        and the integration of different ideas into a cohesive
                        whole.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-black border-2 border-yellow-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-lg font-bold text-gray-100">
                          Additional Notes:
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-gray-300 uppercase">
                        Clarity of Presentation
                      </p>
                      <p className="mb-2 text-gray-600">
                        While not a formal criterion, the clarity with which you
                        present your project—through documentation, pitch, or
                        demonstration—will naturally influence its reception.
                        Make sure to communicate your ideas clearly and
                        concisely.
                      </p>
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