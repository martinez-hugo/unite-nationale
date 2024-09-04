import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

const logoStyle = {
  borderRadius: "300px",
};

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-96 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center w-full max-w-[1196px] max-md:max-w-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
