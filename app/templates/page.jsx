import Script from "next/script"
import { getDomain} from '../../lib/data';
import Image from "next/image";
import Header from "@/components/Header";
const page = () => {
  const domain = getDomain();
  return (
    <>
      <Header hideMainDesc={true} />  
      <section className="bg-custom-1 tails-selected-element">
        <div className="max-w-7xl py-0 pb-20 flex space-x-5 w-full h-full items-center1 justify-center mx-auto">
            <div className="h-full w-1/4 bg-gray-0 rounded-md">
                <div className="bg-white border shadow mt-2">
                <form className="w-full max-w-sm">
                  <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Template"/>
                    <button className="flex-shrink-0 text-md bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 text-white py-1 px-2 rounded" type="button">
                      Search
                    </button>
                  </div>
                </form>
                </div>
            </div>
            <div className="h-full w-3/4 rounded-md">
                <div className="mx-auto max-w-7xl"> 
                    <div className="w-full flex mx-auto mt-0">
                        <div className="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                                <p class="text-xl text-gray-900"> AI Framework </p>  
                              </div>
                            </a>                        
                        </div>   
                        <div class="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                              <p class="text-xl text-gray-900"> Blockchain Framework </p>  
                              </div>
                            </a>                        
                        </div>  
                        <div class="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                              <p class="text-xl text-gray-900"> Buy & Sell Framework </p>  
                              </div>
                            </a>                        
                        </div>     
                    </div>
                    <div className="w-full flex mx-auto mt-0">
                    <div class="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                              <p class="text-xl text-gray-900"> Buy & Sell v2 Framework </p>  
                              </div>
                            </a>                        
                        </div>  
                        <div className="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                                <p class="text-xl text-gray-900"> Challenge Framework </p>  
                              </div>
                            </a>                        
                        </div>   
                        <div class="w-1/3 itemLink relative">
                            <a href="" class="relative z-10 items-center h-full1 m-2 bg-white shadow position-relative d-block">    
                              <div className="templateImage">
                                <Image src="https://cdn.vnoc.com/templates/devchallenge/template_bg.jpg" 
                                alt={""}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%" }}
                                className="object-cover w-full h-full" 
                                />
                              </div>               
                              <div class="flex-1 min-w-0 p-2">
                              <p class="text-xl text-gray-900"> Contentbots Framework </p>  
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