// Source - https://stackoverflow.com/a/62028885
// Posted by Víctor Daniel, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-15, License - CC BY-SA 4.0

import { Link } from "react-router";
import tacScreenshot from "../assets/screenshots/tea_and_cigarettes.png";

const Games = () => {
    return (
        <div className="p-15">
            <Link to={"/"} className="hover:cursor-pointer hover:underline">← Back</Link>
            <h2 className="text-5xl font-black mb-3">Game Design</h2>
            <Link to={"https://mrnineframes.itch.io/"} target="_blank">
                <button className="bg-[#fa5c5c] h-13 w-38 rounded-lg text-white hover:cursor-pointer font-bold
                 text-2xl mb-2">Itch.io →</button>
            </Link>
            <p>This page covers all of my game design work. This includes both my personal and my professional endeavors.</p>
            <br/>
            <br/>
            <h2 className=" text-4xl mb-5">Personal Work</h2>
            <div className="h-80 mb-5 -ml-15 -mr-15 ">
                <div className="bg-[#000000ac] absolute z-10 h-80 w-full flex items-center pl-45">
                    <div>
                        <p className="font-bold text-3xl text-white mb-8">Tea & Cigarettes</p>
                        <Link to={"https://defenderw.itch.io/tea-and-cigarettes"} target="_blank">
                            <button className="bg-[#fa5c5c] h-13 w-48 rounded-lg text-white hover:cursor-pointer font-bold
                             text-2xl">Download →</button>
                        </Link>
                    </div>
                </div>
                
                <img src={tacScreenshot} className="h-full w-full m-auto relative object-cover"/>
            </div>
            <div className="h-80 -ml-15 -mr-15">
                <p className="font-bold text-3xl">Land-Oke's Big Break: In Hustle Bruz We Trust</p>
                <Link to={"https://defenderw.itch.io/land-okes-big-break-in-hustle-bruz-we-trust"} target="_blank">
                    <button className="bg-[#fa5c5c] h-13 w-38 rounded-lg text-white hover:cursor-pointer font-bold
                     text-2xl">Itch.io →</button>
                </Link>
            </div>
            <br/>
            <br/>
            <h2 className="text-4xl">Professional Work</h2>
            <div className="-ml-15 -mr-15">
                <p className="font-bold text-3xl">Digital Game Box</p>
                <Link to={"https://www.digitalgamebox.com/webapp/home"} target="_blank">
                    <button className="bg-[#252422] h-13 w-30 rounded-lg text-white hover:cursor-pointer">
                        <p className="font-bold text-2xl text-[#EB8128]">DGB →</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Games;