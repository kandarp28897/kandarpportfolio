import React , { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"

const links = [
  {
    id: 1,
    linkName: "Home"
  },
  {
    id: 2,
    linkName: "About"
  },
  {
    id: 3,
    linkName: "Portfolio"
  },
  {
    id: 4,
    linkName: "Experience"
  },
  {
    id:5,
    linkName:'Contact'
  }
];

const Navbar = () => {
    const [nav,setNav] =useState(false);
  return (
    <div className="h-20 w-full flex px-4 items-center  bg-purple-800 text-purple-100 justify-between fixed">
      <div className="text-4xl font-medium font-signature">Kandarp Jadfva</div>
      <ul className=" m-4 hidden md:flex">
        {links.map(({id , linkName })=>{
           return( <li key = {id} className="pr-4 mr-2 text-purple-200 hover:scale-50 duration-200 cursor-pointer">
            <Link to={Link} smooth duration={500}>{linkName}</Link> 
          </li>)
        })}
        
      </ul>
      <div onClick={()=>{ return setNav(!nav)}} className="cursor-pointer md:hidden">
        { nav ? <FaTimes size = {30}/>:<FaBars size = {30}/>}
      </div>
      {nav && <ul className="flex flex-col items-center justify-center w-full h-screen top-20 left-0 absolute bg-gradient-to-b from-purple-800 to-purple-300">
      {links.map(({id , linkName })=>{
           return( <li key = {id} className="text-4xl cursor-pointer py-5">
            {linkName}
          </li>)
        })}
        
        
      </ul>}
    </div>
  );
};

export default Navbar;
