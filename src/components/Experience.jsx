import React from 'react'
import htmlThumbnail from '../assets/Thumbnails/html.png'
import powerappsThumbnail from '../assets/Thumbnails/powerapps.webp'
import powerautomateThumbnail from '../assets/Thumbnails/powerautomate.png'
import dataverseThumbnail from '../assets/Thumbnails/dataverse.png'
import javascriptThumbnail from '../assets/Thumbnails/JavaScript.png'
import reactThumbnail from '../assets/Thumbnails/react.png'
import tailwindThumbnail from '../assets/Thumbnails/tailwind.png'


const technologies = [
    {
        id : 1,
        src : powerappsThumbnail,
        alt : "powerappsThumbnail",
        style : "shadow-purple-700 border-purple-700"
    },
    {
        id : 2,
        src : powerautomateThumbnail,
        alt : "htmlThumbnail",
        style : "shadow-blue-700 border-blue-700"
    },
    {
        id : 3,
        src : dataverseThumbnail,
        alt : "dataverseThumbnail",
        style : "shadow-green-700 border-green-700"
    },
    {
        id : 4,
        src : htmlThumbnail,
        alt : "htmlThumbnail",
        style : "shadow-orange-700 border-orange-700"
    },
    {
        id : 5,
        src : javascriptThumbnail,
        alt : "javascriptThumbnail",
        style : "shadow-yellow-700 border-yellow-700"
        
    },
    {
        id : 6,
        src : reactThumbnail,
        alt : "reacthumbnail",
        style : "shadow-sky-700 border-sky-700"
    },
    {
        id : 7,
        src : tailwindThumbnail,
        alt : "tailwindThumbnail",
        style : "shadow-black border-black"
    }

]

const Experience = () => {
  return (
    <div className='bg-gradient-to-b from-blue-300 to-purple-300'>
      <div className='justify-center items-center flex flex-col'>
        <div>
            <p className='text-4xl text-purple-700 font-bold border-b-4 border-blue-400 inline py-3'>Experience</p>
            <p className='my-8 text-purple-700'>These are the technology I have worked with</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 mx-24 my-20 mt-2 gap-8 h-1/4  w-1/4  '> 
           {
            technologies.map(({id,src,alt,style})=>{
                return <div key={id}><img className={`h-full rounded-lg shadow-lg  border-b-4 ${style}`}src={src} alt={{alt}} /></div>
            })
           } 

        </div>
      </div>
    </div>
  )
}

export default Experience
