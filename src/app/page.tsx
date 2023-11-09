import Image from "next/image";
import logo from "../../public/assets/Images/logo.png"
import mockup from "../../public/assets/Images/mockup.png"

export default function Home() {
  return (
    <main className="min-h-screen relative">
  <Image src={logo} alt="Logo" className="absolute inline left-10 top-4" />
  <div className="flex items-center justify-between flex-col md:flex-row bg-white">
    <form action="" className="p-8 flex-1 relative top-20">
      <div className="flex items-start justify-between flex-col h-[120px] bg-white">
      <span className="bg-[#1671D9] text-white p-1 rounded-lg text-sm">Coming soon</span>
      <h1 className="text-xl text-black">Get Early Access</h1>
      <p className="text-[#757575] w-4/5">Be one of the first to get notified when we launch our Beta version</p>
      </div>
      <section className="bg-green-600 mt-8">

      <label htmlFor="firstName">First Name</label>
      </section>
    </form>
    {/* <div className="bg-[#EDFCF6]">
      <Image src={mockup} alt="Mock up" className="" />
    </div> */}
  </div>
    </main>
  )
}
