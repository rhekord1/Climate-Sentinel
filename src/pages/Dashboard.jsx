
import Footer from "../components/footer/footer";
import Main from "../components/dmain/dmain";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen"> {/* Makes the layout full viewport height */}
            <section className="bg-custom-silver">
                <div className="container m-auto bg-custom-silver">
                    <Navbar />
                </div>
            </section>
            
            <Main /> 
            
            
        </div>
    );
}
