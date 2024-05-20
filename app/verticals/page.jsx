import Image from "next/image";
import Header from "@/components/Header";
import Verticals from "../../components/Verticals";
const Page = () => {
  return (
    <>
      <Header hideMainDesc={true} />
      <Verticals />
    </>
  );
};

export default Page;