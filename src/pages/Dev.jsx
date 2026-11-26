import { Link } from "react-router";

const Dev = () => {
    return (
        <div className="p-15">
            <Link to={"/"} className="hover:cursor-pointer hover:underline">← Back</Link>
            <h2 className="text-5xl font-black mb-7">Apps</h2>
            <Link to={"https://github.com/Onthatile-Lesufi"} target="_blank">
                <button className="bg-black h-13 w-38 rounded-lg text-white hover:cursor-pointer font-bold
                 text-2xl mb-2">Github →</button>
            </Link>
            <p className="mb-20">
                This page covers all of my app development work.<br/> 
                This includes desktop applications, web apps as well as mobile applications.<br/>
                Currently this portion of the site is still under development as I have yet to complete professional jobs worthy of this section.<br/>
                For now feel free to page through my github for all of my front facing projects I developed as a part of my schooling.
            </p>
            
            <h2 className="text-4xl mb-15">Featured Works:</h2>
            <div className=" h-75 flex items-center">
                <p className="w-full">
                    <p className="text-center font-bold text-4xl">Why So Empty...</p>
                    <p className="text-center text-2xl">Fixing Right Now</p>
                </p>
            </div>
            <h2 className="text-4xl mb-15">Works In Progress:</h2>
            <div className=" h-75 flex items-center">
                <p className="w-full">
                    <p className="text-center font-bold text-4xl">Why So Empty...</p>
                    <p className="text-center text-2xl">Fixing Right Now</p>
                </p>
            </div>
        </div>
    )
}

export default Dev;