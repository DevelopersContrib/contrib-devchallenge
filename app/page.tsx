import HeaderWidget from "../components/HeaderWidget";
import ScriptLoader from "../components/ScriptLoader";
import Footer from "../components/footer";
import TopDomainsComponent from "../components/TopDomainsComponent";
import Ai from "../components/Ai";
import Logo from "../components/logo";
import Image from "next/image";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserCog,
  faCogs,
  faGlobe,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { getData, getDomain, getTopsites, getScript } from "../lib/data";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const topDomains = await getTopsites();
  const background =
    c.data.background_url !== undefined && c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );

  return (
    <>
      <section className="w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col flex-wrap items-center justify-between py-7 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row">
              <Image
                src="https://cdn.vnoc.com/logos/logo-devchallenge.png"
                alt="logo"
                width={350}
                height={20}
              />
              <nav className="flex flex-wrap items-center mb-0 text-lg md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-800">
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Community
                </a>
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Prize
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-900"
                >
                  Blog
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="#_"
                  className="font-medium leading-6 text-gray-600 md:mr-5 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </nav>
            </div>
            <div className="inline-flex items-center ml-5 text-lg space-x-6 lg:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 font-medium leading-6 text-gray-200 hover:text-white whitespace-no-wrap bg-gray-800 border border-transparent rounded shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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

      <section className="w-full px-5 relative bg-black">
        <div className="container flex flex-col flex-wrap items-center justify-between py-20 mx-auto md:flex-row max-w-7xl">
          <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl mx-auto lg:pt-0 pt-10 lg:pr-10 xl:pr-10">
            <Image
              src="https://cdn.vnoc.com/images/people_working_4.png"
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
              src="https://cdn.vnoc.com/images/people_working_6.png"
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

      <section className="w-full bg-black">
        <div className="px-8 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-3">
              <a
                href="#_"
                className="text-xl font-black leading-none text-white select-none logo"
              >
                DevChallenge.
              </a>
              <p className="my-4 text-xs leading-normal text-gray-100">
                Developing Tomorrow’s Collaborative Frameworks Today
              </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-200 uppercase">
                Company
              </p>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Join
              </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-200 uppercase">
                About
              </p>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Terms
              </a>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Privacy Policy
              </a>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-200 uppercase">
                Contact
              </p>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-white"
              >
                Partner With Us
              </a>
            </nav>
            <div className="col-span-3">
              <span className="inline-flex justify-center w-full mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-end">
                <a href="#" className="text-gray-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a href="#" className="text-gray-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a href="#" className="text-gray-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                <a href="#" className="text-gray-100 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a href="#" className="text-gray-100 hover:text-white">
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-500 md:flex-row md:items-center"
            data-primary="gray-500"
          >
            <p className="mb-6 text-sm text-left text-gray-200 md:mb-0">
              &copy; Copyright 2024 DevChallenge. All Rights Reserved.
            </p>
            <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
              <a
                href="#_"
                className="text-sm text-gray-200 transition hover:text-white"
              >
                Terms
              </a>
              <a
                href="#_"
                className="text-sm text-gray-200 transition hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
