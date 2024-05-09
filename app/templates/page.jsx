import Image from "next/image";
import Header from "@/components/Header";
import Templates from "../../components/Templates";
const Page = () => {
  return (
    <>
      <Header hideMainDesc={true} />
      <Templates />
    </>
  );
};

export default Page;
