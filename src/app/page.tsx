import Image from "next/image";
import logo from "../../public/assets/Images/logo.png"

export default function Home() {
  return (
    <main className="min-h-screen p-6 ">
  <Image src={logo} alt="Logo" />
    </main>
  )
}
