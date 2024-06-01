import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faq() {



    return (
        <div id="faq" className="mx-auto max-w-4xl min-w-0 space-y-2">
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">FAQ
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">Have another question? Contact me on Twitter or by email.</p>
            {/*  */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What do I get with the Basic Plan?</AccordionTrigger>
                    <AccordionContent>
                        The Basic Plan includes connectors for MongoDB, Cassandra, Couchbase, CSV, SQL, Redis, and Neo4j. You also get standard normalization, scaling, encoding, and color conversion tools. It covers basic classification and regression models, clustering algorithms, standard NLP functionalities, basic containerization and model serving, and standard model monitoring and experiment tracking.

                    </AccordionContent>
                </AccordionItem>
              
                <AccordionItem value="item-3">
                    <AccordionTrigger>How often is FastML updated?</AccordionTrigger>
                    <AccordionContent>
                        FastML is updated regularly to ensure it includes the latest features and improvements. Pro Plan users benefit from lifetime updates, ensuring they always have access to the latest tools and features.

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I switch between plans after subscribing?</AccordionTrigger>
                    <AccordionContent>Yes, you can upgrade from the Basic Plan to the Pro Plan at any time. Simply contact our support team to facilitate the transition and gain access to the additional features offered in the Pro Plan.

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What kind of support is available?</AccordionTrigger>
                    <AccordionContent>Both plans include access to our documentation and community forums. Pro Plan users receive additional support through our private Discord community, where you can collaborate with other users and get priority assistance from our support team.

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What is the refund policy?</AccordionTrigger>
                    <AccordionContent>Once you gain access to FastML, the subscription is non-refundable. We encourage users to thoroughly review the features and ensure it meets their needs before purchasing.

                    </AccordionContent>
                </AccordionItem>
          
                <AccordionItem value="item-8">
                    <AccordionTrigger> Can I use FastML with my existing projects?</AccordionTrigger>
                    <AccordionContent>Yes, FastML is designed to be flexible and can be integrated with your existing projects. Our connectors and preprocessing tools are compatible with a wide range of data sources and formats, making it easy to incorporate into your current workflow.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div >
    )
}