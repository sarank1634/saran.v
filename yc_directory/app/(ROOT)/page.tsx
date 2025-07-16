import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="uppercase bg-black px-6 y-3  fomt-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Home</h1>
    </>
  );
}
