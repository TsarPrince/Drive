import React from 'react'

const about = () => {
  return (
    <>
      <div className='mx-4 md:mx-12 my-6 space-y-4 text-slate-700 max-w-4xl md:text-2xl'>
        <p>For now it’s just a few simple things - <span className='text-4xl md:text-4xl'>view</span> your files, see which of them are taking the most <span className='text-4xl md:text-4xl'>space</span>, declutter your drive, directly <span className='text-4xl md:text-4xl'>download</span> the files to your local system with no hassle at all and <span className='text-4xl md:text-4xl'>nothing</span> to worry about.</p>
        <div className='grid grid-cols-2 items-center gap-12 pt-12'>
          <img src='/usage1.png' className='h-64 shadow-lg rounded-2xl object-cover'></img>
          <p>View your content at a glance.</p>
          <p>Direct link to your Google Drive.</p>
          <img src='/usage2.png' className='h-64 shadow-lg rounded-2xl object-cover'></img>
          <img src='/usage3.png' className='h-64 shadow-lg rounded-2xl object-cover'></img>
          <p>One click direct download.</p>
        </div>
      </div>
    </>
  )
}

export default about