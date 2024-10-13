import React from 'react'
import Navbar from './navbar/page'
import Image from 'next/image';
import Link from 'next/link';

interface Meme {
  id: string;
  name: string;
  url: string;
}


const Page = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log(response.data.memes);

   
  return (
    <>
      <Navbar/>
      <div className="bg-black p-5 min-h-screen">
      <div className="flex justify-center gap-5 flex-wrap">
        {response.data.memes.map((item:Meme) => {
          return (
            <div className="relative group w-full sm:w-48 md:w-56 lg:w-64 xl:w-72">
              <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                <Image
                  src={item.url}
                  width={200}
                  height={200}
                  alt="meme"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <button className="mt-2 w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md transition-transform duration-300 transform hover:translate-y-[-2px] hover:shadow-xl">
               Generate Meme
              </button> */}
             <button className='mt-2 w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md transition-transform duration-300 transform hover:translate-y-[-2px] hover:shadow-xl'><Link href={{
              pathname: "generatememe",
              query: {
                url: item.url,
                id: item.id
              }
            }}>generate Meme</Link></button>


            </div>
          );

      })}
    </div>
    </div>
</>
  )
};

export default Page