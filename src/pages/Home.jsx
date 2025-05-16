import Asida from "../components/asida/asida";
import Footer from "../components/footer/footer";
import HeroCarousel from "../components/hero/coruse";
import Info from "../components/info/info";
import Main from "../components/main/main";
import Cameramodule from "../components/cameramodule/cameramodule";
import Navbar from "../components/navbar/Navbar";
import Wrapper from "../components/wrapper/wrapper";

export default function Home() {
    return (
        <div className=" m-auto overflow-hidden ">
            <section className="bg-custom-silver">
                <div className="container m-auto bg-custom-silver">
                    <Navbar />
                    <HeroCarousel />
                </div>
            </section>
            <Main />
            <section className="bg-custom-silver">
                <Info />
            </section>
            <Cameramodule/>
            {/* <section className="bg-custom-silver py-[32px]">
                <Wrap />
            </section> */}
            
            <Asida />
            <Wrapper />
            
            <section className="bg-[#263238] py-[32px] ">
                <Footer />
            </section>
        </div>
    );
}
