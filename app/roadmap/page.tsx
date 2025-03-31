import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Roadmap() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/simpsons-sky.png" alt="Simpsons Sky" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-[#ffd521] text-white hover:bg-[#ffd52133] hover:text-[#ffd521]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="simpsons-text text-4xl font-bold text-[#ffd521] drop-shadow-lg md:text-6xl">
            SimpsonToken Roadmap
          </h1>
          <p className="mt-4 text-xl text-white drop-shadow-md">Our master plan to the moon!</p>
        </div>

        <div className="mb-12 flex justify-center">
          <Image
            src="/images/roadmap-image.png"
            alt="Springfield Future"
            width={600}
            height={400}
            className="rounded-xl border-4 border-[#ffd521] shadow-lg"
          />
        </div>

        <div className="rounded-xl bg-[#ffd521]/90 p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#0f52ba]">Phase 1: Launch (Q2 2025)</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Token Launch</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Launch token</li>
                  <li>Make memes</li>
                  <li>Shill on Twitter</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Community</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Discord server</li>
                  <li>Telegram group</li>
                  <li>More memes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#0f52ba]">Phase 2: Growth (Q3 2025)</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Exchanges</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Get listed somewhere</li>
                  <li>Pump the price</li>
                  <li>Celebrate with donuts</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">NFTs</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Cash grab NFT collection</li>
                  <li>Overpriced pixel art</li>
                  <li>Call it "utility"</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-center text-3xl font-bold text-[#0f52ba]">Phase 3: Moon (Q4 2025)</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Lambos</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Yellow Lambos for everyone</li>
                  <li>Team buys mansions</li>
                  <li>Ignore all promises</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Or Rugpull?</h3>
                <ul className="list-disc pl-5 text-[#0f52ba]">
                  <li>Disappear with funds</li>
                  <li>Blame "market conditions"</li>
                  <li>Start new token next week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f52ba] py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="simpsons-text text-2xl font-bold text-[#ffd521]">SimpsonToken</h3>
              <p className="text-white">© 2025 Not Financial Advice</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-white hover:text-[#ffd521]">
                Twitter
              </Link>
              <Link href="#" className="text-white hover:text-[#ffd521]">
                Telegram
              </Link>
              <Link href="#" className="text-white hover:text-[#ffd521]">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

