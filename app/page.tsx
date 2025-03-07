import Banner from "@/components/header/Banner";
import ContactCTA from "@/components/main/ContactCTA";
 
import HomeCarousel from "@/components/main/HomeCarousel";
import Rezension from "@/components/main/Rezension";
import Welcome from "@/components/main/Welcom";
 
 

export default function Home() {
  return (
    <div className="text-4xl text-center bg-gray-100">
     
      <main>
        <Banner />
        <div className=" md:mt-32">
          <Welcome />
        </div>
        <div>
          <HomeCarousel />
        </div>
        <div>
          <Rezension />
        </div>
        <div>
          <ContactCTA />
        </div>
      </main>
    </div>
  );
}
