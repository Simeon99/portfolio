import HomeHeader from "@/components/home/HomeHeader";
import HomeAboutMe from "@/components/home/HomeAboutMe";

export default function Home() {
  return (
    <div className="flex flex-col bg-dark-blues items-center overflow-hidden">
      
      <div className="max-w-screen-sw w-full sw:px-8 ">

        <HomeHeader />
      </div>
      <div className="max-w-screen-sw w-full sw:px-8 ">
        <HomeAboutMe />
      </div>
    </div>
  );
}
