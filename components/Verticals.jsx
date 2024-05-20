"use client";
import React from 'react';

const domains = [
  "uxchallenge.com",
  "javachallenge.com",
  "codechallenge.com",
  "codeprogram.com",
  "coderschannel.com",
  "codeweek.com",
  "codergeek.com",
  "coderpool.com",
  "codervalley.com",
  "codeperk.com",
  "codervillage.com",
  "codelancers.com",
  "castcode.com",
  "codersource.com",
  "codebuilder.com",
  "encodestream.com",
  "mergercode.com",
  "coderventures.com",
  "coderchannel.com",
  "codestream.net",
  "coderscup.com",
  "coderbootcamp.com",
  "codemanager.com",
  "codegang.com",
  "coderscafe.com",
  "codehub.com",
  "codefreak.com",
  "coderpoint.com",
  "codevelopment.com",
  "coderep.com",
  "accesscode.com",
  "codestreams.com",
  "codemerchant.com",
  "codepreviews.com",
  "ipcode.com",
  "codecaster.com",
  "thecodechannel.com",
  "codeclasses.com",
  "codesurvey.com",
  "codepartner.com"
];

const sortedDomains = domains.sort();

const Verticals = () => {
  return (
    <>    
      <section className="relative w-full" style={{ marginTop: '-80px' }}>
        <div className="w-full mx-auto text-center">
          <h1 className="mb-1 text-white text-5xl font-bold leading-none max-w-5xl mx-auto tracking-normal text-indigo-900 sm:text-5xl md:text-5xl lg:text-5xl md:tracking-tight">
            Verticals
          </h1>
        </div>
      </section>
      <section className="bg-custom-1 mt-10 mb-40">
        <div className="max-w-7xl py-0 pb-20 flex flex-wrap justify-center mx-auto">          
          <div className="h-full w-full rounded-md">
            <div className="mx-auto max-w-7xl"> 
              <div className="flex flex-wrap mx-auto mt-0">
                {sortedDomains.map((domain, index) => (
                  <div key={index} className="p-2 w-full md:w-1/4">
                    <div className="bg-white bg-opacity-10 shadow rounded-md flex flex-col h-full">
                      <a href={`http://${domain}`} target="_blank" className="flex flex-col flex-grow">
                        <div className="p-4 flex-grow">
                          <p className="text-xl text-gray-200">{domain}</p>
                        </div>
                        <div className='relative'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-2 right-2 w-6 h-6 text-gray-500">
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
}

export default Verticals;
