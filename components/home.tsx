import BentoGridComponent from "./bento";
import Faq from "./faq";
import Hero from "./hero";
import Pricing from "./pricing";
import Welcome from "./welcome";

export default function Home() {



    return (
        <section className="space-y-12 mb-24">
            <Hero/>
            <Welcome/>
            <BentoGridComponent/>
            <Pricing/>
            <Faq/>
        </section>
    )
}