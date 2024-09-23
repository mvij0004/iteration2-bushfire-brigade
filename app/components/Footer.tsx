import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBF2] py-6">
      <hr className="my-8 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" aria-label="Homepage">
            <Image
              src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png"
              alt="Bushfire Brigade Logo"
              width={120}
              height={100}
              layout="intrinsic"
              quality={100}
            />
          </Link>
          <ul className="flex flex-wrap items-center text-xl font-medium text-gray-500 mt-4 md:mt-0">
            {["Learn", "Prepare", "Recover", "Quiz", "Help"].map(
              (text, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 transform hover:scale-105 mb-2 md:mb-0"
                >
                  <Link
                    href={`/${text.toLowerCase()}`}
                    aria-label={text}
                    className="hover:underline mx-2 md:mx-4 hover:text-orange-400"
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center text-xl text-gray-500">
          <p className="mb-4 px-4 sm:px-6 md:px-0">
            Bushfire Brigade respectfully acknowledges the Traditional Owners of
            the land we govern, the Wurundjeri Woi-wurrung and Bunurong / Boon
            Wurrung peoples of the Kulin and pays respect to their Elders past
            and present. We acknowledge and honour the unbroken spiritual,
            cultural and political connection they have maintained to this
            unique place for more than 2000 generations. We accept the
            invitation in the Uluru Statement from the Heart and are committed
            to walking together to build a better future.
          </p>
          <p>© 2024 Bushfire Brigade (TA30). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
