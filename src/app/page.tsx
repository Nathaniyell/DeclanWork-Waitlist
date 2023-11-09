import Image from "next/image";
import logo from "../../public/assets/Images/logo.png"
import mockup from "../../public/assets/Images/mockup.png"

export default function Home() {
  return (
    <main className="min-h-screen relative">
  <Image src={logo} alt="Logo" className="absolute inline left-10" />
  <div className="flex items-center justify-between bg-white">
    <form action="" className="">
      <span className="bg-[#1671D9] text-white p-1 rounded-lg">Coming soon</span>
      <h1 className="text-xl text-black">Get Early Access</h1>
      <p>Be one of the first to get notified when we launch our Beta version</p>
    </form>
    <div className="bg-[#EDFCF6]">
      <Image src={mockup} alt="Mock up" className="" />
    </div>
  </div>
    </main>
  )
}
