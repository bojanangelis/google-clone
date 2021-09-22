import Image from "next/image";

//neznam zasho nesaka...
function Avatar({ url, className }) {
  return (
    <Image
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-90 ${className}`}
      src={url}
      alt="avatar"
      objectFit="contain"
      layout="fixed"
      width={42}
      height={42}
    />
  );
}

export default Avatar;
