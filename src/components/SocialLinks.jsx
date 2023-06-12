import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'


const links = [ {
    id:1,
    child:(
        <>
            LinkedIn  <FaLinkedin size={25}/>
        </>
    ),
    href: 'https://www.linkedin.com'

},
{
    id:2,
    child:(
        <>
            Github  <FaGithub size={25}/>
        </>
    ),
    href: 'https://www.Github.com'
},
{
    id:3,
    child:(
        <>
            Mail To<HiOutlineMail size={25}/>
        </>
    ),
    href: 'mailto:jadfvak@gmail.com'

}, {
    id:4,
    child:(
        <>
            Resume<BsFillPersonFill size={25}/>
        </>
    ),
    href: '/Jadfva_Kandarp_CV.pdf',
    download : true

}]

const SocialLinks = () => {
  return (
    <div className='bg-purple-800  top-[35%] left-0  hidden lg:flex fixed '>
        <ul>
            {
                links.map(( {id ,child ,href,download})=>{
                   return <li key = { id } className='flex flex-col justify-center items-center w-28 h-14 px-2 ml-[-70px] hover:ml-[-5px] hover:duration-300 '>
                <a className='w-full justify-between items-center flex mr-1 ml-1 text-purple-200' href= {href} target='_blank' rel="noreferrer" download={download}>{ child }</a>
            </li>
                })
            }
        </ul>
      
    </div>
  )
}

export default SocialLinks
