import Image from "next/image";
import logo from "../../public/assets/Images/logo.png";
import mockup from "../../public/assets/Images/mockup.png";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image src={logo} alt="Logo" className="absolute inline left-10 top-4" />
      <div className="flex items-center justify-between flex-col md:flex-row bg-white">
        <form action="" className="p-8 flex-1 relative top-20">
          <div className="flex items-start justify-between flex-col h-[120px] bg-white">
            <span className="bg-[#1671D9] text-white p-1 rounded-lg text-sm">
              Coming soon
            </span>
            <h1 className="text-xl text-black">Get Early Access</h1>
            <p className="text-[#757575] w-4/5">
              Be one of the first to get notified when we launch our Beta
              version
            </p>
          </div>
          <section className="mt-8 flex items-center justify-between w-full gap-8 mb-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="border border-black p-2 w-full indent-1 mt-2 outline-[#00D37B] outline-1"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="border border-black p-2 w-full indent-1 mt-2 outline-[#00D37B] outline-1"
                required
              />
            </div>
          </section>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            className="border border-black p-2 w-full indent-2 mt-2 outline-[#00D37B] outline-1"
            required
          />
          <button type="submit" className="bg-[#00D37B] w-full p-3 mt-8">
            Join Waitlist
          </button>
        </form>
        <div className="hidden md:block bg-[#EDFCF6]">
      <Image src={mockup} alt="Mock up" className="" />
    </div>
      </div>
    </main>
  );
}
