"use client";

import Image from 'next/image';
import React, { useRef, useState } from 'react';

const CreateMeme = ({ searchParams }: { searchParams: { id: string; url: string } }) => {
  const [meme, setMeme] = useState<string | null>(null);
  const text1 = useRef<HTMLInputElement>(null);
  const text2 = useRef<HTMLInputElement>(null);

  const createMeme = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`, {
      method: 'POST'
    });
    const response = await data.json();
    setMeme(response.data.url);
  };

  return (
    <div className="bg-black p-5 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-2xl mb-4">Create Meme</h1>
      <Image src={searchParams.url} width={200} height={200} alt='meme' className="rounded-lg shadow-lg" />

      <form onSubmit={createMeme} className="mt-4 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder='Enter text 1'
          ref={text1}
          className="w-full p-3 rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-transform transform hover:scale-105"
        />
        <input
          type="text"
          placeholder='Enter text 2'
          ref={text2}
          className="w-full p-3 rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-transform transform hover:scale-105"
        />
        <button
          type='submit'
          className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md transition-transform duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
        >
          Create Meme
        </button>
      </form>

      {meme && (
        <div className="mt-4">
          <Image src={meme} width={200} height={200} alt='meme' className="rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}

export default CreateMeme;
