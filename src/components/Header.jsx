import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full h-15">
        <nav className=" w-full">
            <ul className="flex w-full justify-around px-7 py-4 bg-slate-200 font-semibold">
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="page-1/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="page-2/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header