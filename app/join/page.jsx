import Script from "next/script"
import { getDomain} from '../../lib/data';
const page = () => {
  const domain = getDomain();
  return (
    <>
      
        <div className="row">
          <div className="col">
            <div className="join-script"></div>
          </div>
        </div>
        <script
        dangerouslySetInnerHTML={{
        __html: `

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
        `,
        }}
        ></script>
    </>
  )
}

export default page