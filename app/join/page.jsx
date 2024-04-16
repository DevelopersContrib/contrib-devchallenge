import Script from "next/script"
import { getDomain} from '../../lib/data';
const page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={"//js.hsforms.net/forms/embed/v2.js"} />
      <div className="join-script"></div>
    </>
  )
}

export default page