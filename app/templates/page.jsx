import templates from './templates.json';
import Image from "next/image";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header hideMainDesc={true} />
      <section className="relative w-full" style={{ marginTop: '-80px' }}>
        <div className="w-full mx-auto text-center">
          <h1 className="mb-1 text-white text-5xl font-bold leading-none max-w-5xl mx-auto tracking-normal text-indigo-900 sm:text-5xl md:text-5xl lg:text-5xl md:tracking-tight">
            Welcome To Our Template Directory
          </h1>
          <p className="px-0 mb-3 text-lg text-gray-400 md:text-xl">
            Perfect for corporate websites or startups looking for a sleek and modern design.
          </p>
        </div>
      </section>
      <section className="bg-custom-1 mt-10 mb-40">
        <div className="max-w-7xl py-0 pb-20 flex flex-wrap justify-center mx-auto">
          <div className="h-full w-1/4 bg-gray-0 rounded-md pt-0 p-2">
            <div className="bg-white border shadow mt-2 rounded-md">
              <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2 mx-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Template"/>
                  <button className="flex-shrink-0 text-md bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 text-white py-1 px-2 rounded" type="button">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-3/4 rounded-md">
            <div className="mx-auto max-w-7xl"> 
              <div className="flex flex-wrap mx-auto mt-0">
                {templates.map(template => (
                  <div key={template.id} className="p-2 w-full md:w-1/3">
                    <div className="bg-white border shadow rounded-md flex flex-col h-full">
                      <a href={template.link} target="_blank" className="flex flex-col flex-grow">
                        <Image
                          src={template.imageUrl}
                          alt={template.name}
                          width={500}
                          height={500}
                          layout="responsive"
                          className="rounded-t-md"
                        />
                        <div className="p-4 flex-grow">
                          <p className="text-xl text-gray-900">{template.name}</p>
                          <p className="text-sm text-gray-500">{template.description}</p>
                        </div>
                        <div className='relative'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-2 right-2 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </a>                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>          
        </div>
      </section>
    </>
  );
};

export default Page;
