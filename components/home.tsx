import BentoGridComponent from "./bento";
import { AnimatedBeamDemo } from "./explanation";
import Faq from "./faq";
import Hero from "./hero";
import Pricing from "./pricing";
import Welcome from "./welcome";

export default function Home() {



    return (
        <section className="space-y-12 mb-24">
            <Hero/>
            <div className="px-6 lg:px-0">
            <Welcome/>
            <AnimatedBeamDemo/>
            <BentoGridComponent/>
            <Pricing/>
            <Faq/>
            </div>
        </section>
    )
}