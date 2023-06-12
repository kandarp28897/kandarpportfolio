import React from 'react'
// import heroImage from '../assets/profileImage.jpg'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='bg-gradient-to-b from-purple-300 to-blue-300 h-screen w-full'>
      <div className='max-w-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-2xl text-purple-700'> I am a power platform developer who knows react with tailwind</h2>
            <p className='my-2 text-purple-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repudiandae nemo ut temporibus mollitia ducimus iure veritatis perferendis debitis, voluptatem rem corporis odit, possimus consequuntur, necessitatibus in dolorum exercitationem vel.</p>
            <div className='px-4 flex items-center'>
                <button className='group rounded-md ... bg-gradient-to-r from-purple-800 to-purple-400 w-fit px-8 h-10 justify-center flex my-3 items-center text-sm text-purple-200 cursor-pointer '>Portfolio <span className='group-hover:rotate-90 duration 700 px-1' size={25}><MdOutlineArrowRightAlt /></span></button>
                
            </div>
            
            
            
        </div>
        {/* <div className='rounded-xl  items-center mx-auto'>
                <img src={heroImage} alt='heroImage' />
            </div> */}
      </div>
    </div>
  )
}

export default Home
