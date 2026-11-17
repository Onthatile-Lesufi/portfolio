// Source - https://stackoverflow.com/a/62028885
// Posted by Víctor Daniel, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-15, License - CC BY-SA 4.0

import { Link } from "react-router";
import tacScreenshot from "../assets/screenshots/tea_and_cigarettes.png";
import dgbScreenshot from "../assets/screenshots/dgb.png";
import loScreenshot from "../assets/screenshots/land_oke.png";

const Games = () => {
    return (
        <div className="p-15">
            <Link to={"/"} className="hover:cursor-pointer hover:underline">← Back</Link>
            <h2 className="text-5xl font-black mb-6">Game Design</h2>
            <Link to={"https://mrnineframes.itch.io/"} target="_blank">
                <button className="bg-[#fa5c5c] h-13 w-38 rounded-lg text-white hover:cursor-pointer font-bold
                 text-2xl mb-2">Itch.io →</button>
            </Link>
            <p className="font-semibold">
                This page covers all of my game design work.
                <br/> This includes both my personal and my professional endeavors.
                <br/>More games will be coming down the pipeline, but for now enjoy all of the projects I currently published on itch.io.
            </p>
            <br/>
            <br/>
            <h2 className=" text-4xl mb-12">Personal Work</h2>
            <div className="h-80 mb-5 -ml-15 -mr-15 border-t-5 border-b-5 border-[#fa5c5c]">
                <div className="bg-[#000000ac] absolute z-10 h-77.5 w-full flex items-center pl-45">
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
            <div className="h-80 -ml-15 -mr-15 border-t-5 border-b-5 border-[#fa5c5c]">
                <div className="bg-[#000000ac] absolute z-10 h-77.5 w-full flex items-center pl-45">
                    <div>
                        <p className="font-bold text-3xl text-white mb-8">Land-Oke's Big Break: In Hustle Bruz We Trust</p>
                        <Link to={"https://defenderw.itch.io/land-okes-big-break-in-hustle-bruz-we-trust"} target="_blank">
                            <button className="bg-[#fa5c5c] h-13 w-48 rounded-lg text-white hover:cursor-pointer font-bold
                             text-2xl">Download →</button>
                        </Link>
                    </div>
                    
                </div>
                <img src={loScreenshot} className="h-full w-full m-auto relative object-cover"/>
            </div>
            <br/>
            <br/>
            <h2 className="text-4xl mb-12">Professional Work</h2>
            <div className="h-80 -ml-15 -mr-15 border-t-5 border-b-5 border-amber-500">
                <div className="bg-[#000000ac] absolute z-10 h-77.5 w-full flex items-center pl-45">
                    <div>
                        <p className="font-bold text-3xl text-white mb-8">Digital Game Box</p>
                        <Link to={"https://www.digitalgamebox.com/webapp/home"} target="_blank">
                            <button className="bg-[#252422] h-13 w-50 rounded-lg text-white hover:cursor-pointer">
                                <p className="font-bold text-2xl text-[#EB8128]">Download →</p>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <img src={dgbScreenshot} className="h-full w-full m-auto relative object-cover"/>
            </div>
        </div>
    )
}

export default Games;