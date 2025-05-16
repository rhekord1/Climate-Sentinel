
import Footer from "../components/footer/footer";

import Main from "../components/campanel/campanel";

import Navbar from "../components/navbar/Navbar";


export default function Home() {
    return (
        <div className=" m-auto overflow-hidden ">
            <section className="bg-custom-silver">
                <div className="container m-auto bg-custom-silver">
                    <Navbar />
                </div>
            </section>
           <Main />
            
            
            <section className="bg-[#263238] py-[32px] ">
                <Footer />
            </section>
        </div>
    );
}
