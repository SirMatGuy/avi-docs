import BentoGridComponent from "./bento";
import { AnimatedBeamDemo } from "./explanation";
import Faq from "./faq";
import Hero from "./hero";
import Lead from "./lead";
import Pricing from "./pricing";
import Testemonial from "./testemonial";
import Welcome from "./welcome";

export default function Home() {



    return (
        <section className="space-y-12 mb-24">
            <Hero/>
            <div className="px-6 lg:px-0 spacing-y-8">
            <Welcome/>
            
            <BentoGridComponent/>
            <Testemonial/>
            <Pricing/>
            <Faq/>
            <Lead/>
            </div>
        </section>
    )
}