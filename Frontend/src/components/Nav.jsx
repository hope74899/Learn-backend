import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex justify-between items-center text-white h-20 bg-black min-w-full">
            <div className="p-2 ml-10">
                <h1 className="text-3xl font-extrabold">Database</h1></div>
            <div className="p-2">
                <ul className=" flex items-center justify-start gap-x-3 ">
                    <li className="text-xl font-semibold hover:text-yellow-300"><NavLink className={(e) => { return e.isActive ? "rounded-sm border-b-4 border-solid border-yellow-300" : "" }} to="/">Home</NavLink></li>
                    <li className="text-xl font-semibold hover:text-yellow-300"><NavLink className={(e) => { return e.isActive ? "rounded-sm border-b-4 border-solid border-yellow-300" : "" }} to="/">About</NavLink></li>
                    <li className="text-xl font-semibold hover:text-yellow-300"><NavLink className={(e) => { return e.isActive ? "rounded-sm border-b-4 border-solid border-yellow-300" : "" }} to="/">Admissions</NavLink></li>
                </ul>
            </div >
            <div className="flex items-center gap-x-2 mr-10">
                <ul><li className="border-2 border-black text-xl font-semibold text-black bg-yellow-300 px-4 py-2 rounded-xl"><NavLink to="/Loginhere">login</NavLink></li></ul>
            </div>

        </div>
    )
}

export default Nav
