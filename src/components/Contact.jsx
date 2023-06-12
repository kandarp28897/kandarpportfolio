import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-purple-300 to-blue-300'>
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center my-8 '>
                <p className='text-4xl text-purple-700 font-bold border-b-4 border-blue-400'>Contact</p>
                <p className='text-xl text-purple-700 mt-4'>Submit the form to get in touch with me</p>
            </div>
            <div className=''>
                <form action="https://getform.io/f/65efd467-1174-4c4b-a6f4-8ce504742e25" method='POST' className='flex flex-col  py-16 my-auto  justify-center items-center w-full'>
                    <input type="text"
                     name="name"
                     placeholder="Enter Your Name"
                     className='p-2 my-1/2 bg-transperent w-full md:w-1/2 focus:outline-none border-2 border-purple-700 rounded-md text-purple-700' />
                     <input type="email"
                     name="email"
                     placeholder="Enter Your email"
                     className='p-2 my-4 bg-transperent border-purple-700 w-full border-2 md:w-1/2 focus:outline-none  rounded-md text-purple-700' />
                     <textarea name="message"  rows="10" className='p-2 bg-transperent  w-full md:w-1/2 focus:outline-none border-2 border-purple-700  rounded-md'></textarea>
                     <div className='w-28 h-12'>
                     <button className='bg-gradient-to-r mt-4 from-purple-700 to-purple-400 w-full h-full  rounded-md text-purple-100'>
                        Let's Talk
                     </button>
                     </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
