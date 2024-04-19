// Page.js
import { getDomain } from '../../lib/data';
import { hubSpotFormScript } from './HubSpotFormScript';
import Image from "next/image";
const Page = () => {
  const domain = getDomain();
  const containerStyles = {
    width: '650px',
    margin: '0 auto',
    border: '1px solid #222',
    padding: '35px',
    background: '#fff',
    borderRadius: '8px',
    marginBottom: '100px',
  };
  const joinText = {
    fontSize: '2rem'
  };

  return (
    <div className="container pt-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">        
        <div className="col-span-12 md:col-span-12">          
          <div className='joinText text-center mb-3'>
            <h2 className='text-white' style={joinText}>Join The Challenge</h2>
          </div>
          <div className='script-container' style={containerStyles}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              setTimeout(function(){
                var c=document.createElement("script");
                c.type="text/javascript",
                c.readyState ? c.onreadystatechange=function(){
                  "loaded"!=c.readyState&&"complete"!=c.readyState||(c.onreadystatechange=null,b())
                }:
                c.onload=function(){
                  hbspt.forms.create({
                    region: "na1",
                    portalId: "42816889",
                    formId: "025de5fa-0bbb-48ce-a056-4da9acc75cd1"
                  });
                },
                c.src="//js.hsforms.net/forms/embed/v2.js",
                document.getElementsByTagName("head")[0].appendChild(c)
              },2000)
              
              `,
            }}
          />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Page