import TeamSection from "@/components/team/TeamSection";

 

 const page = () => {
    return (
      <div className="container mx-auto px-4 ">
        <div className="mb-10">
            <img
                className="w-full max-h-[700px] object-cover  rounded-lg shadow-lg"
                src="/entop.jpg"
                alt="Gruppenbild"
            />
        </div>
        <TeamSection />
      </div>
    );
}
export default page;