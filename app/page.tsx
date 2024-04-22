import HeaderWidget from "../components/HeaderWidget";
import ScriptLoader from "../components/ScriptLoader";
import Footer from "../components/footer";
import TopDomainsComponent from "../components/TopDomainsComponent";
import Ai from "../components/Ai";
import Logo from "../components/logo";
import Image from "next/image";
import Container from "../components/Container";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import MainFooter from "../components/MainFooter";
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
      <Header hideMainDesc={undefined} />
      <HomeContent />
      <MainFooter />
    </>
  );
}
