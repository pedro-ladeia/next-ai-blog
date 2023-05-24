import React from 'react'
import Image from 'next/image'
import Twitter from 'public/assets/social_twitter.png'
import Instagram from 'public/assets/social_instagram.png'
import Facebook from 'public/assets/social_facebook.png'
import Google from 'public/assets/social_google.png'
import Discord from 'public/assets/social_discord.png'


type Props = {
  isDark?: boolean;
}

const SocialLinks = ({ isDark = false}: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
      <a href="https://twitter.con" target="_blank" rel="noreferrer">
        <Image
        className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Twitter} 
          alt='Twitter logo'
          width={20}
          height={20}
          />
      </a>

      <a href="https://instagram.con" target="_blank" rel="noreferrer">
        <Image
        className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Instagram} 
          alt='Instagram logo'
          width={20}
          height={20}
          />
      </a>

      <a href="https://facebook.con" target="_blank" rel="noreferrer">
        <Image
        className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Facebook} 
          alt='Facebook logo'
          width={20}
          height={20}
          />
      </a>

      <a href="https://google.con" target="_blank" rel="noreferrer">
        <Image
        className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Google} 
          alt='Google logo'
          width={20}
          height={20}
          />
      </a>

      <a href="https://discord.con" target="_blank" rel="noreferrer">
        <Image
        className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Discord} 
          alt='discord logo'
          width={20}
          height={20}
          />
      </a>

    </div>
  )
}

export default SocialLinks