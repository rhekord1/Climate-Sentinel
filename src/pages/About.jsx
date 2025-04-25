import Asida from "../components/abasida/abasida";
import Footer from "../components/footer/footer";
import Info from "../components/info/info";
import Main from "../components/abmain/abmain";
import Cameramodule from "../components/cameramodule/cameramodule";
import Navbar from "../components/navbar/Navbar";
import Wrapper from "../components/wrapper/wrapper";

export default function Home() {
    return (
        <div className=" m-auto overflow-hidden ">
            <section className="bg-custom-silver">
                <div className="container m-auto bg-custom-silver">
                    <Navbar />
                </div>
            </section>
            <Main />
            <Asida />
            
            
            <section className="bg-[#263238] py-[32px] ">
                <Footer />
            </section>
        </div>
    );
}
