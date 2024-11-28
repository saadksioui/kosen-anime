import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 py-3">
      <div className="w-[85%] lg:w-[95%] mx-auto flex flex-col md:flex-row items-center gap-5 md:justify-between">
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-center">
          <Link href={'/'}>
            <h1 className="text-lg text-white font-semibold font-epilogue">
              Kosen Anime
            </h1>
          </Link>
          <div className="flex gap-2 text-white font-poppins text-sm">
            <Link href={'/'}>
              Terms & Privacy
            </Link>
            <Link href={'/'}>
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={'https://www.instagram.com'}>
          <Instagram color="white"/>
          </Link>
          <Link href={'https://www.facebook.com'}>
          <Facebook color="white"/>
          </Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer
