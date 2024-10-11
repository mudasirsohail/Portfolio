import Link from "next/link"

export default function Header(){
    return(

        <div className="header">
            <ul className="header-button">
                {/* <h1> <span className="logo"> Portfolio </span></h1> */}
                <Link href={"/home"}><li>| Home |</li></Link>
                <Link href={"/skills"}><li>| Skills |</li></Link>
                <Link href={"/about"}><li>| About |</li></Link>
                <Link href={"/projects"}><li>| Projects |</li></Link>
                <Link href={"/contact-us"}><li>| Contact Us |</li></Link>
            </ul>
        </div>
    )
}