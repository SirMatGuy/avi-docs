import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faq() {



    return (
        <div className="mx-auto max-w-4xl min-w-0 space-y-2">
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">FAQ
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">Have another question? Contact me on Twitter or by email.</p>
            {/*  */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What do i get exactly</AccordionTrigger>
                    <AccordionContent>
                        1. The FastML starter with all the boilerplate code you need to start building your ML workflows.<br />
                        2. The documentation helps you set up your pipelines from scratch<br />

                        3. Access to our Discord with makers who build fast to stay accountable!<br />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>My tech stack is different, can I still use it?</AccordionTrigger>
                    <AccordionContent>
                        Yes, as long as you're comfortable with Python .
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                    <AccordionContent>
                        After you've got access to the repo, FastML is yours forever, so it can't be refunded.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div >
    )
}