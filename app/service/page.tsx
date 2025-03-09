import TeamSection from "@/components/team/TeamSection";

 

 const page = () => {
    return (
      <div className="container mx-auto px-4 ">
        <div className="mb-10">
            <img
                className="w-full max-h-[600px] object-cover opacity-85 rounded-lg shadow-lg"
                src="/leistung.jpg"
                alt="Gruppenbild"
            />
        </div>
        <TeamSection />
      </div>
    );
}
export default page;