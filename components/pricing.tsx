import PricingCard from "./ui/pricing-card"

const starterFeatures: { text: string }[] = [
  { text: "Data Ingestion" },
  { text: "Data Preprocessing" },
  { text: "Modeling" },
  { text: "Deployment" },
  { text: "Monitoring & Logging" },

]
const allinFeatures: { text: string }[] = [
  { text: "Everything in Basic Plan, plus:" },
  { text: "Advanced Data Ingestion" },
  { text: "Advanced Data Preprocessing" },
  { text: "Advanced Modeling" },
  { text: "Advanced Deployment" },
]
export default function Pricing() {


  return (
    <>
      {/* Features */}
      <div className="overflow-hidden">
        <div className="max-w-4xl py-10 lg:py-14 mx-auto">
          {/* Title */}
          <div className=" mb-8 lg:mb-14">
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">

              Get Started Today!

            </h2>
          </div>
          {/* End Title */}
          <div className="relative  xl:mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2  gap-6 lg:gap-8">


              <PricingCard features={starterFeatures} link="https://fastml.lemonsqueezy.com/buy/7a4d3c38-3889-482d-bcd3-c0ac47fdff7c?enabled=391877" price={99} variant="Starter" />
              <PricingCard features={allinFeatures} link="https://fastml.lemonsqueezy.com/buy/6ae13a25-4014-4be2-8ce9-d5aaf817e71a?enabled=391880" price={129} variant="All-in" />

            </div>
            {/* End Grid */}
            {/* SVG Element */}
            <div className="hidden md:block absolute top-0 end-0 -translate-y-10 translate-x-12">
              <svg
                className="w-16 h-auto text-purple-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                className="w-56 h-auto text-indigo-300"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
          </div>
        </div>
      </div>
      {/* End Features */}

    </>

  )
}