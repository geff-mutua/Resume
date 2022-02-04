import React from 'react';
import Image from 'next/image'
import { Facebook, LinkedIn, Redeem, Twitter, LocationOn } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Sidebar() {
  return (
    <div className='bg-geff_color m-2 p-10 items-center text-white rounded-3xl' >
      <div className=''>
        <div className='p-4 text-center'>
          <Image src='https://links.geocadict.com/prof2.jpg'
            width={200}
            height={200}
            objectFit='contain'
            className='cursor-pointer rounded-2xl'

          />
        </div>
        <h2 className='text-center text-3xl pb-3'>Geoffrey <span className='text-4xl font-bold'>Mutua</span> </h2>
        <p className='text-center bg-geff_color-light p-2 rounded-xl mb-2 text-xs'>Fullstack Developer</p>
        <div className='text-center text-xs mb-4'>
          <Facebook className='bg-transparent mt-2 pr-2' />
          <Twitter className='bg-transparent mt-2 pr-2'/>
          <LinkedIn className='bg-transparent mt-2 pr-2'/>
        </div>
        <div className='hidden lg:inline-block md:inline-block'>
          <p className='mb-2'>
            <Redeem className='mr-3' fontSize='50' />
            <span className='text-sm'>January 12, 1993</span>
          </p>
          <p className='mb-2'>
            <LocationOn className='mr-3' fontSize='50'/>
            <span className='text-sm'>Limuru, Kenya</span>
          </p>
          <p className='mb-2'>
            <MailOutlineIcon className='mr-3' fontSize='50'/>
            <span className='text-xs'>geoffreymutua01@gmail.com</span>
          </p>
          <p className='mb-2'>
            <PhoneAndroidIcon className='mr-3' fontSize='50'/>
            <span className='text-sm'>+254 795 451 228</span>
          </p>
          <p className='mb-2'>

            <InstagramIcon className='mr-3' fontSize='50'/>
            <span className='text-sm'>Geff_mutua</span>

          </p>
        </div>
        <div className='text-center'>
        <button className='button mt-2'>
          <FileDownloadIcon className='mr-2' fontSize='50' />
          Download CV
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;
