import React, { useEffect, useState } from 'react';

const VideoHeroText = () => {
  const [phoneLink, setPhoneLink] = useState('');
  const [emailLink, setEmailLink] = useState('');

  useEffect(() => {
    // Construct phone number and email on the client only
    const phone = '+1' + '717' + '945' + '8132';
    const email = 'info' + '@' + 'lotusmarketingsolutions.com';

    setPhoneLink(`tel:${phone}`);
    setEmailLink(`mailto:${email}`);
  }, []);

  return (
    <div className="relative z-10 mx-auto max-w-7xl flex min-h-screen flex-col text-center items-center justify-center md:items-start md:text-left px-4 md:px-6 lg:px-8 w-full">
      <p className="mb-3 text-base text-white/80 md:text-lg uppercase tracking-wider">
        Our Websites are
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-sfHeavy tracking-wide text-white/70 subpixel-antialiased uppercase">
        Crafted to <span className="text-lime-400/70">Convert</span>
        <br />
        Designed to <span className="text-lime-400/70">Amaze</span>
      </h1>
      <p className="mt-4 font-sfHeavy text-xl text-white/80 md:text-2xl font-bold">
        Transforming brands into <br />unforgettable digital experiences.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row w-full">
        {phoneLink && (
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-sm transition duration-300 
            bg-lime-500 text-black/80 
            hover:bg-white hover:border-2 hover:border-lime-700 hover:border-offset-2 
            focus:border-2 focus:border-lime-700 focus:border-offset-2"
          >
            BOOK A CALL
          </a>
        )}
        <span className="text-white/70">or</span>
        {emailLink && (
          <a
            href={emailLink}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-sm transition duration-300 
            bg-white text-black/80 
            hover:bg-lime-500 hover:border-2 hover:border-white hover:border-offset-2 
            focus:border-2 focus:border-white focus:border-offset-2"
          >
            EMAIL US
          </a>
        )}
      </div>
    </div>
  );
};

export default VideoHeroText;
