import Script from "next/script"
import { getDomain} from '../../lib/data';
import Image from "next/image";
const page = () => {
  const domain = getDomain();
  return (
    <>
      <section className="h-auto py-12 md:py-20">
        <div className="md:text-center max-w-7xl mx-auto xl:px-0 px-5">
            <p className="font-medium text-white mb-4 sm:text-lg uppercase tracking-wide">Continuous learning, skill enhancement, and camaraderie!</p>
            <h1 className="text-4xl font-extrabold tracking-normal text-white sm:text-5xl lg:text-7xl md:leading-none">About DevChallenge</h1>
            <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-2xl md:max-w-4xl">
            Welcome to DevChallenge.com, where coding meets competition and creativity. Our platform is designed to bring together developers from around the globe to challenge themselves, learn new skills, and connect with a vibrant community. Whether you're looking to sharpen your coding skills, showcase your expertise, or just have some fun, DevChallenge is the place for you.
            </p>
        </div>
      </section>
      <section className="relative leading-7 text-gray-900 border-solid">
        <div className="box-border mx-auto border-solid max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
            <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
              <h2 className="m-0 text-3xl font-bold leading-tight tracking-tight text-left text-white sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-2xl md:max-w-4xl">
                Our mission is to empower developers by providing a dynamic environment where they can:
              </p>
              <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex-1 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Challenge Themselves</h3>
                    <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-2xl md:max-w-4xl">
                    Take on a variety of coding challenges that push their limits and encourage continuous learning.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex-1 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Showcase Talent</h3>
                    <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-2xl md:max-w-4xl">
                    Demonstrate their skills in a competitive setting and gain recognition among peers and potential employers.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex-1 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Connect and Collaborate</h3>
                    <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-2xl md:max-w-4xl">
                    Join a community of like-minded individuals who are passionate about coding and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
              <Image
              src="https://cdn.vnoc.com/templates/devchallenge/web-dev-2.jpg" 
              alt={""}
              width={500}
              height={500}
              style={{ width: "100%", height: "100%" }}
              className="object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-10 lg:px-0">
          <div className="max-w-5xl py-20 mb-20 mx-auto">
            <h2 className="m-0 text-3xl font-bold leading-tight tracking-tight text-center text-white sm:text-4xl md:text-5xl">
            What We Offer
            </h2>
            <div className="grid gap-10 pt-16 pb-10 md:grid-cols-2">
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Diverse Challenges</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">From front-end visuals to back-end logic, our challenges cover all aspects of development. Challenges are categorized by difficulty and technology, ensuring that there&apos;s something for everyone, from beginners to seasoned professionals.</p>
                </div>
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Learning Opportunities</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">Each challenge is an opportunity to learn something new. We provide resources, tutorials, and feedback to help our community members grow and improve with each contest.</p>
                </div>
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Supportive Community</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">Our platform is built on the foundation of community. We offer forums, chat rooms, and live events where members can connect, share ideas, and offer support.</p>
                </div>
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Recognition & Rewards</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">Achievement deserves recognition. We offer badges, certificates, and prizes to celebrate the accomplishments of our community members. Top performers can also gain visibility in front of leading tech companies.</p>
                </div>
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Meet The Team</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">DevChallenge was founded by a group of tech enthusiasts and former competitive coders who wanted to create a space where developers could test their skills in a friendly, supportive environment. Our team is made up of experienced developers, designers, and educators who are all passionate about making DevChallenge the best place to code.</p>
                </div>
                <div className="relative p-10 space-y-2 border border-gray-200 rounded-lg">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-white border-solid sm:text-xl md:text-2xl">Join Us</h3>
                  <p className="max-w-none mx-auto mt-3 text-xl font-normal text-gray-400 sm:mt-5 sm:text-xl md:mt-5 lg:text-xl md:max-w-xl">Whether you&apos;re a coding novice or a pro, DevChallenge offers you a platform to learn, grow, and prove yourself. Accept the challenge, join our community, and start your journey today. Let&apos;s code, compete, and celebrate together!</p>
                </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default page