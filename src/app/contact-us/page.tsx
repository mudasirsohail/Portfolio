import Image from "next/image";
import Header from "../components/header";


export default function Contact(){
    return(
        <div>
            <Header/>
            {/* <h1>Contact us</h1> */}
            <div className="MainContact">
                <div className="contactus">
                    <form action="https://api.web3forms.com/submit" method="POST">
                            <h1 className="h1contact"> <b> Contact Us </b></h1>
                            <input type="hidden" name="access_key" value="13abd95c-6a71-475c-a8af-dd959fcb308f"/>
                            <input type="text" placeholder="Name" className="design"/>
                            <input type="text" placeholder="Email" className="design"/>
                            <input type="text" placeholder="Your Message" className="designMessage"/>
                            <button className="button">Send Message</button>
                    
                    </form>
                </div>
                <div>
                    <img src="contactme.jpg" alt="contactmepicture" className="contactpicture" />
                </div>
            </div>
        </div>
    )
}