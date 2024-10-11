import Image from "next/image";
import Header from "./components/header";


export default function Home() {
  return (
    <body>
    <Header/>
    <h1><span className="portfoliocolor">Port</span>folio</h1>
      <div className="HomeContainer"> 
      <div className="ChildContainer"> 
        Hello Everyone,
        <br />
        My Name is <span className="green">Mudasir</span>
        <br /> 
        I'm a<span className="green"> Frontend </span>  Developer
        <hr />
        <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" className="exploremore"> Explore More </a>
      </div>
      <div id="round-image">
        <img src="mypicture-1.jpeg" alt="mypicture" className="profilepicture"></img>
      </div>
      </div>
      <br />
          <h1 className="MainHeadings"> My Skills </h1>
        <br />
        <div className="skillsParent">
        <div className="skillsContainer"> HTML </div>
        <div className="skillsContainer"> CSS </div>
        <div className="skillsContainer"> JavaScript </div>
        <div className="skillsContainer"> Typescript </div>
        <div className="skillsContainer"> Word </div>
        <div className="skillsContainer"> Excel </div>
        <div className="skillsContainer"> Adobe Photoshop </div>
        <div className="skillsContainer"> Next JS </div>
        <div className="skillsContainer"> Github </div>
        </div>
        <br />
          <div>
            <h1 className="MainHeadings" > About me ? </h1>
            <br />
            <p>Hi! I'm Mudasir Sohail Welcome to my portfolio! I'm a passionate FrontEnd web developer with a keen eye for design and functionality. , I am pursuing an IT course of Generative AI, Web3 and Metaverse at Governor House Sindh. Where we are currently learning advanced technologies like Next JS. With a strong foundation in HTML, CSS, and TypeScript/Javascript, I enjoy creating beautiful, user-friendly websites. Over the past few months, I've worked on diverse projects, from building simple Calculator to static Student Management System. I specialize in responsive design, ensuring that every user has the best experience, no matter what device they're using.</p>
            </div>
            <br />
            <h1 className="MainHeadings"> Projects </h1>
        <div className="parentPicture">
            <div> 
                <img src="calculator.jpg" alt="calculator" className="leftpicture" /> 
                <a href="https://github.com/mudasirsohail/Calculator-using-inquirer-TS.git" className="left"> Calculator </a>
            </div>
            <div>
                <img src="noguessinggame.png" alt="NumbeeGuessingGame" className="centerpicture"/>
                < a href="https://github.com/mudasirsohail/Typescript-Number-Guessing-Game-.git" className="center">Number Guessing</a>
            </div>
            <div>
            <img src="ATM.png" alt="ATM Machine" className="rightpicture" />
            <a href="https://github.com/mudasirsohail/ATM-Machine-Project.git" className="right"> ATM Machine</a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            <img src="TodoList.png" alt="TodoList" className="leftpicture"/>
            <a href="https://github.com/mudasirsohail/A-Todo-List-Project.git" className="left">Todo List</a>
            </div>
            <div >
            <img src="CurrencyConverter.png" alt="Currency Converter" className="centerpicture" />
            <a href="https://github.com/mudasirsohail/Currency-Converter.git" className="center"> Currency Converter </a>
            </div>
            <div>
            <img src="WordCounter.png" alt="Word Counter" className="rightpicture"/>
            <a href="https://github.com/mudasirsohail/Word-Counter.git" className="right"> Word Counter </a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            <img src="StudentManagementSystem.png" alt="Student Management System" className="leftpicture" />   
            <a href="https://github.com/mudasirsohail/Student-Management-System.git" className="left"> Student Management</a>
            </div>
        </div>
        <br /> <br />
        <h1 className="MainHeadings" > Contact Us </h1>
        <div className="MainContact">
                <div className="contactus">
                    <form action="">
                        {/* <ul> */}
                            <h1 className="h1contact"> <b> Contact Us </b></h1>
                            <input type="text" placeholder="Name" className="design" required/>
                            <input type="email" placeholder="Email" className="design" required/>
                            <textarea name="message" placeholder="Your Message" className="designMessage" required></textarea>
                            <button className="button">Send Message</button>
                        {/* </ul> */}
                    </form>
                </div>
                <div>
                    <img src="contactme.jpg" alt="contactmepicture" className="contactpicture" />
                </div>
            </div>
            <footer>
              <div className="Footer">
                <p className="footer-text">Mudasir Sohail</p>
                <div className="social-profiles">
                <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" target="blank">
                 <img src="linkedin.png" alt="linkedin-profile" className="footer-icons"/> 
                </a>
                <a href="https://github.com/mudasirsohail" target="blank">
                <img src="github.png" alt="github-profile" className="footer-icons" />
                </a>
                <a href="https://discord.com/channels/@me" target="blank">
                <img src="discord.png" alt="discord-profile"  className="footer-icons"/>
                </a>
                </div>
                <br />
                <p className="footer-text-last"> © Web Developer. All rights deserved</p>
              </div>
            </footer>
        
    </body>
  );
}
