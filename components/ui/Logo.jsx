import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-sans font-bold cursor-pointer">
        YemekExpress
      </span>
    </Link>
  );
};

export default Logo;
