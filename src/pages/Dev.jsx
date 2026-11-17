import { Link } from "react-router";

const Dev = () => {
    return (
        <div className="p-15">
            <Link to={"/"} className="hover:cursor-pointer hover:underline">← Back</Link>
            <h2 className="text-5xl font-black mb-3">Apps</h2>
            <Link to={"https://github.com/Onthatile-Lesufi"} target="_blank">
                <button className="bg-black h-13 w-38 rounded-lg text-white hover:cursor-pointer font-bold
                 text-2xl mb-2">Github →</button>
            </Link>
            <p>This page covers all of my game design work. This includes both my personal and my professional endeavors.</p>
            <br/>
            
            <h2 className="text-4xl">Works In Progress</h2>
            <div>
                <p className="font-bold text-3xl">E2E</p>
                
            </div>
            <div>
                <p className="font-bold text-3xl">Digital Game Box</p>
                
            </div>
        </div>
    )
}

export default Dev;