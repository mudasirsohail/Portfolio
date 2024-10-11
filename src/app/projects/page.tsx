import Image from "next/image";
import Header from "../components/header";
Image
export default function Projects(){
    return(
        <div>
            <Header/>
            <h1> Projects </h1>
        <div className="parentPicture">
            <div> 
                <a href="https://github.com/mudasirsohail/Calculator-using-inquirer-TS.git" target="blank" className="left"> 
                <img src="calculator.jpg" alt="calculator" className="leftpicture" />  Calculator </a>
            </div>
            <div>
               
                < a href="https://github.com/mudasirsohail/Typescript-Number-Guessing-Game-.git" target="blank" className="center" > <img src="noguessinggame.png" alt="NumbeeGuessingGame" className="centerpicture"/> Number Guessing</a>
            </div>
            <div>
            
            <a href="https://github.com/mudasirsohail/ATM-Machine-Project.git" target="blank" className="right"><img src="ATM.png" alt="ATM Machine" className="rightpicture" /> ATM Machine</a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            
            <a href="https://github.com/mudasirsohail/A-Todo-List-Project.git" target="blank" className="left"> <img src="TodoList.png" alt="TodoList" className="leftpicture"/> Todo List</a>
            </div>
            <div >
            
            <a href="https://github.com/mudasirsohail/Currency-Converter.git" target="blank" className="center"> <img src="CurrencyConverter.png" alt="Currency Converter" className="centerpicture" /> Currency Converter </a>
            </div>
            <div>
            
            <a href="https://github.com/mudasirsohail/Word-Counter.git" target="blank" className="right"> <img src="WordCounter.png" alt="Word Counter" className="rightpicture"/> Word Counter </a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            <a href="https://github.com/mudasirsohail/Student-Management-System.git" target="blank" className="left"> <img src="StudentManagementSystem.png" alt="Student Management System" className="leftpicture" /> Student Management </a>
            </div>
            <div >
            
            </div>
            <div>

            </div>
        </div>
        </div>
    )
}