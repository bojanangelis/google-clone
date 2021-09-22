import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="https://www.google.mk/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt="Google logo"
          width={120}
          height={40}
          objectFit="contain"
        />
        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 text-blue-500 hidden border-l-2 pl-4 border-gray-300 sm:inline-flex" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            SearchHIDDEN
          </button>
        </form>
        <div className="ml-auto">
          <Avatar className="ml-auto" url="https://rebrand.ly/7m0699f" />
        </div>
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
