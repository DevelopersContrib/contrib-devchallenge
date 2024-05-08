import Script from "next/script"
import { getDomain} from '../../lib/data';
import Image from "next/image";
import Header from "@/components/Header";
const page = () => {
  const domain = getDomain();
  return (
    <>
      <Header hideMainDesc={true} />  
      <section className="relative w-full" style={{marginTop:'-80px'}}>
        <div className="w-full mx-auto text-center">
          <h1 className="mb-1 text-white text-5xl font-bold leading-none max-w-5xl mx-auto tracking-normal text-indigo-900 sm:text-5xl md:text-5xl lg:text-5xl md:tracking-tight"> 
            Welcome To Our Template Directory 
          </h1>
          <p className="px-0 mb-3 text-lg text-gray-400 md:text-xl">Perfect for corporate websites or startups looking for a sleek and modern design.</p>
        </div>
      </section>
      <section className="bg-custom-1 mt-10 mb-40">
        <div className="max-w-7xl py-0 pb-20 flex space-x-5 w-full h-full items-center1 justify-center mx-auto">
            <div className="h-full w-1/4 bg-gray-0 rounded-md">
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
                    <div className="w-full flex mx-auto mt-0">
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="http://attackers.co/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_ai.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> AI Framework </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.sourcingchain.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_blockchain.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Blockchain Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.skycasts.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_buysell.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Buy & Sell Framework </p>  
                            </div>
                          </a>                        
                      </div>     
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.parentchallenge.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_buysellv2.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Buy & Sell v2 Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.moonchallenge.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_challenge.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> Challenge Framework </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="http://exnetwork.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_developer.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Developer Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://religiondirectory.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_eservice.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Eservice Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.handysurvey.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_forsale.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> For Sale Framework </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://virginiasurvey.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_forum.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Forum Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://homepropertymanager.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_handyman.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Handyman Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://eserves.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_icontent.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> Icontent Framework </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.querypost.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_leadv1.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Lead V.1 Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.equityprompts.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_leadv2.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Lead V.2 Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://www.contrib.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_redirect.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> Contrib Redirect </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://medicalbooker.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_social.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900">  Social Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://icommerce.net/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_staffing.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900"> Staffing Framework </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://surveyscripts.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_survey.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900">  Survey Framework </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://taxstream.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_topvertical.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900">  Top Vertical Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://livechains.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_verticalchain1.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900">Vertical Chain </p>  
                            </div>
                          </a>                        
                      </div>  
                      <div className="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="http://spachat.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_verticalholding.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                              <p class="text-xl text-gray-900"> Vertical Holding </p>  
                            </div>
                          </a>                        
                      </div>   
                      <div class="w-1/3 itemLink relative bg-white rounded-md m-2">
                          <a href="https://furniturecentre.com/" target="_blank" class="relative z-10 items-center h-full1 m-1 bg-white shadow position-relative d-block">    
                            <div className="templateImage">
                              <Image src="https://cdn.vnoc.com/templates/devchallenge/template_buylease.jpg" 
                              alt={""}
                              width={500}
                              height={500}
                              style={{ width: "100%", height: "100%" }}
                              className="object-cover w-full h-full" 
                              />
                            </div>               
                            <div class="flex-1 min-w-0 p-1">
                            <p class="text-xl text-gray-900">Buy/Lease Framework </p>  
                            </div>
                          </a>                        
                      </div>                            
                    </div>
                </div>
            </div>        
        </div>
      </section>
    </>
  )
}

export default page