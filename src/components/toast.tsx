"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Toast = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className=' z-40 bg-Primary-grey900 text-white p-2 rounded-lg'>
      <div className='space-y-2 flex'>
        <Image
          src={"/images/icon-success-check.svg"}
          width={20}
          height={21}
          alt='check'
          className='mx-2'
        />
        <h3 className='font-semibold pb-2'>Message Sent!</h3>
      </div>
      <p className='mx-2'>
        Thanks for completing the form. We&apos;ll be in touch soon!
      </p>
    </div>
  );
};
