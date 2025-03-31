import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Donut, Rocket, Beer, Zap } from "lucide-react"
import { ImageCarousel } from "@/components/ImageCarousel"

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'SimpsonFont', Arial, sans-serif" }}>
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/simpsons-sky.png" alt="Simpsons Sky" fill className="object-cover" priority />
      </div>

      <div className="relative z-10" style={{ fontFamily: "'SimpsonFont', Arial, sans-serif" }}>
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 text-center">
              <h1 className="text-5xl font-bold text-[#ffd521] drop-shadow-lg md:text-7xl" style={{ fontFamily: "'SimpsonFont', Arial, sans-serif !important" }}>
                SIMPSONSCOIN
              </h1>
              <p className="mt-2 text-xl font-medium text-white drop-shadow-md" style={{ fontFamily: "'SimpsonFont', Arial, sans-serif" }}>D'OH! It's a token!</p>
            </div>
            <div className="mt-4">
              <Image
                src="/images/bart-coin.png"
                alt="SIMPSONSCOIN"
                width={200}
                height={200}
                className="rounded-full border-4 border-[#ffd521] shadow-lg"
                priority
              />
            </div>
            <div className="mt-6 flex gap-4">
              <Button className="bg-[#ffd521] text-[#0f52ba] hover:bg-[#ffcc00]">Buy Now!</Button>
              <Button
                variant="outline"
                disabled
                className="border-[#ffd521] bg-white/10 backdrop-blur-sm text-[#ffd521] opacity-50 cursor-not-allowed"
              >
                Whitepaper
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8">
          {/* About Section with Carousel */}
          <div className="mb-12 rounded-xl bg-[#ffd521]/80 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-[#0f52ba] drop-shadow-md text-center mb-8">
              Welcome to Springfield's First Memecoin!
            </h2>
            <div className="mb-8">
              <ImageCarousel />
            </div>
            <div className="text-center mt-6">
              <p className="text-xl text-[#0f52ba] font-bold">
                Join our community and collect your favorite Springfield characters!
              </p>
              <p className="text-lg text-[#0f52ba] mt-2">
                Get ready for an epic journey through the crypto world of Springfield!
              </p>
            </div>
          </div>

          {/* Token Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#ffd521] drop-shadow-md">
              Token Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-4 border-[#ffd521] bg-white/90">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#ffd521] p-3">
                    <Donut className="h-8 w-8 text-[#0f52ba]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Donut Technology</h3>
                  <p className="text-center text-[#0f52ba]">Powered by sprinkles and frosting!</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-[#ffd521] bg-white/90">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#ffd521] p-3">
                    <Beer className="h-8 w-8 text-[#0f52ba]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Duff Integration</h3>
                  <p className="text-center text-[#0f52ba]">Buy beer with fake money!</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-[#ffd521] bg-white/90">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#ffd521] p-3">
                    <Rocket className="h-8 w-8 text-[#0f52ba]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Moon Soon</h3>
                  <p className="text-center text-[#0f52ba]">Trust me bro, 100x guaranteed!*</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-[#ffd521] bg-white/90">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#ffd521] p-3">
                    <Zap className="h-8 w-8 text-[#0f52ba]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f52ba]">Nuclear Powered</h3>
                  <p className="text-center text-[#0f52ba]">Almost as safe as Springfield Nuclear!</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-12 rounded-xl bg-[#ffd521]/80 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-[#0f52ba] drop-shadow-md">Roadmap</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="text-xl font-bold text-[#0f52ba] mb-2">Phase 1: Launch</h3>
                <p className="text-[#0f52ba]">Make a website, copy other memecoins, profit!</p>
              </div>

              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="text-xl font-bold text-[#0f52ba] mb-2">Phase 2: Hype</h3>
                <p className="text-[#0f52ba]">Post memes, tag Elon, pray he notices!</p>
              </div>

              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="text-xl font-bold text-[#0f52ba] mb-2">Phase 3: Partnership</h3>
                <p className="text-[#0f52ba]">Collab with Krusty Burger, probably!</p>
              </div>

              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="text-xl font-bold text-[#0f52ba] mb-2">Phase 4: Utility</h3>
                <p className="text-[#0f52ba]">Something about Web3, trust us bro!</p>
              </div>
            </div>
          </div>

          {/* NFT Collection */}
          <div className="mb-12 rounded-xl bg-white/90 p-6">
            <Image
              src="/images/roadmap-image.png"
              alt="Springfield NFT Preview"
              width={500}
              height={300}
              className="rounded-xl border-4 border-[#ffd521] shadow-lg mx-auto"
            />
          </div>

          {/* Team */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#ffd521] drop-shadow-md">Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-[#ffd521]">
                  <Image
                    src="/images/team-member1.png"
                    alt="Team Member 1"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white drop-shadow-md">Bob Bodily</h3>
                <p className="text-[#ffd521]">Failed NFT Artist</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-[#ffd521]">
                  <Image
                    src="/images/team-member2.png"
                    alt="Team Member 2"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white drop-shadow-md">Odin Fun</h3>
                <p className="text-[#ffd521]">Watched a YouTube Tutorial</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-[#ffd521]">
                  <Image
                    src="/images/team-member3.png"
                    alt="Team Member 3"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white drop-shadow-md">Michael Saylor</h3>
                <p className="text-[#ffd521]">Has No Idea He's Here</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-[#ffd521] p-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h2 className="mb-2 text-3xl font-bold text-[#0f52ba]">Join The Community!</h2>
                <p className="text-xl text-[#0f52ba]">
                  Get your SIMPSONSCOIN now and be part of Springfield's future!
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Button className="bg-[#0f52ba] text-white hover:bg-[#0a3d8a]">Buy SIMPSONSCOIN</Button>
                <a href="https://x.com/simpsonsco1491" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#0f52ba] text-[#0f52ba] hover:bg-[#0f52ba33] w-full">
                    Join X
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f52ba] py-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-[#ffd521]">SIMPSONSCOIN</h3>
                <p className="text-white">© 2025 SIMPSONSCOIN</p>
              </div>
              <div className="flex space-x-6">
                <p className="text-white">To The Moon!</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

