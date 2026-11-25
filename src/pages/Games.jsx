import { Link } from "react-router";
import tacScreenshot from "../assets/screenshots/tea_and_cigarettes.png";
import dgbScreenshot from "../assets/screenshots/dgb.png";
import loScreenshot from "../assets/screenshots/land_oke.png";

const Games = () => {
    return (
        <div className="p-6 py-20 md:p-15">
            <Link to={"/"} className="hover:cursor-pointer hover:underline">← Back</Link>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Game Design</h2>
            <a
                href="https://mrnineframes.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#fa5c5c] h-13 w-38 rounded-lg text-white font-bold text-2xl mb-4"
            >
                Itch.io →
            </a>
            <p className="font-semibold max-w-3xl">
                This page covers all of my game design work.
                <br/> This includes both my personal and my professional endeavors.
                <br/> More games will be coming down the pipeline, but for now enjoy all of the projects I currently published on itch.io.
            </p>

            <h2 className="text-3xl md:text-4xl mt-12 mb-8 md:mb-12">Personal Work</h2>

            <div className="relative h-80 mb-5 -mx-6 md:-mx-15 border-t-5 border-b-5 border-[#fa5c5c] overflow-hidden">
                <div className="bg-[#000000ac] absolute inset-0 z-10 flex items-center px-10 sm:px-16 md:pl-45">
                    <div>
                        <p className="font-bold text-2xl sm:text-3xl text-white mb-6 md:mb-8">Tea & Cigarettes</p>
                        <a
                            href="https://defenderw.itch.io/tea-and-cigarettes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#fa5c5c] h-13 w-48 rounded-lg text-white font-bold text-2xl"
                        >
                            Download →
                        </a>
                    </div>
                </div>
                <img src={tacScreenshot} alt="Tea & Cigarettes" className="h-full w-full object-cover"/>
            </div>

            <div className="relative h-80 -mx-6 md:-mx-15 border-t-5 border-b-5 border-[#fa5c5c] overflow-hidden">
                <div className="bg-[#000000ac] absolute inset-0 z-10 flex items-center px-10 sm:px-16 md:pl-45">
                    <div>
                        <p className="font-bold text-2xl sm:text-3xl text-white mb-6 md:mb-8">Land-Oke's Big Break: In Hustle Bruz We Trust</p>
                        <a
                            href="https://defenderw.itch.io/land-okes-big-break-in-hustle-bruz-we-trust"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#fa5c5c] h-13 w-48 rounded-lg text-white font-bold text-2xl"
                        >
                            Download →
                        </a>
                    </div>
                </div>
                <img src={loScreenshot} alt="Land-Oke's Big Break" className="h-full w-full object-cover"/>
            </div>

            <h2 className="text-3xl md:text-4xl mt-12 mb-8 md:mb-12">Professional Work</h2>

            <div className="relative h-80 -mx-6 md:-mx-15 border-t-5 border-b-5 border-amber-500 overflow-hidden">
                <div className="bg-[#000000ac] absolute inset-0 z-10 flex items-center px-10 sm:px-16 md:pl-45">
                    <div>
                        <p className="font-bold text-2xl sm:text-3xl text-white mb-6 md:mb-8">Digital Game Box</p>
                        <a
                            href="https://www.digitalgamebox.com/webapp/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#252422] h-13 w-50 rounded-lg font-bold text-2xl text-[#EB8128]"
                        >
                            Download →
                        </a>
                    </div>
                </div>
                <img src={dgbScreenshot} alt="Digital Game Box" className="h-full w-full object-cover"/>
            </div>
        </div>
    )
}

export default Games;