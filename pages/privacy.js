import React from 'react'

const privacy = () => {
  return (
    <div className='mx-4 md:mx-12 my-6 space-y-4 text-slate-700 max-w-4xl'>
      <p className='font-semibold text-2xl'>
        DRIVE ROAN Privacy Policy
      </p>

      <p className='text-lg font-semibold'>
        This Privacy Policy is meant to help you understand what information we collect and why.
      </p>
      <p className='text-2xl font-semibold max-w-xl'>
        When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
      </p>

      <p>
        Information Drive Roan collects -
      </p>

      <div className='space-y-2'>
        <p className='text-lg font-semibold'>
          We want you to understand the types of information we collect as you use our services
        </p>
        <p>
          It might sound shocking, but we collect absolutely zero amount of your sensitive data. Whatever is there it’s just for you to view and explore. We don’t even collect your account information, so after a browser refresh, it’s all gone!
        </p>
        <p>
          All of us have privacy concerns, so do we. We respect your privacy and nothing is 100% secure in today’s digital world. So, why to even create a database when we can’t guarentee it’s security to you. We have done exactly that.
        </p>
      </div>

      <div className='space-y-2'>
        <p className='text-lg font-semibold'>
          Things you create or provide to us
        </p>
        <p>
          Seems like nothing. We do not store any of the user data (even not your email or name with us). At user’s end this comes with a cost of some downfall in UX as we don’t remember you everytime time you visit our website, but for us - the developers, it comes with so much of simplicity of not handling even a single database.
        </p>
      </div>

      <div className='space-y-2'>
        <p className='text-lg font-semibold'>
          Things you share with us (always with your consent)
        </p>
        <p>
          However we do not store these, but you still share them with us -
        </p>
        <ul className='space-y-2 list-disc marker:text-indigo-500 ml-5'>
          <li>
            Your google account, profile photo, display name and preferred language.
          </li>
          <li>
            Any file owner’s google account, profile photo and display name.
          </li>
          <li>
            Your files stored in your google drive account.
          </li>
          <li>
            Your file’s metadata stored in your google drive account.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default privacy