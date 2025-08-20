import Banner from "@/components/Banner";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="text-[#fff]">
    <Headline />
   <div className="container ">
    <Navbar />
    <Banner />
  </div>
    </div>
  );
}
