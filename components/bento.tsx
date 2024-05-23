import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconBrandPython,
    IconDatabase,
    IconGitPullRequest,
    IconStack
} from "@tabler/icons-react";

export default function BentoGridComponent() {
    return (
        <div className="mx-auto max-w-4xl min-w-0 space-y-2 ">
            <div className="mb-8 lg:mb-14">
                <h2 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">Spend less time debugging, more time innovating.
                </h2>
                <p className="text-lg text-zinc-400">From data ingestion to deployment, we've got you covered</p>
            </div>

            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "One single codebase",
        description: "Just use python!",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconBrandPython className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "To any database",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconStack className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Easy intergration",
        description: "Easly integrate your pipeline into your existing Ops",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconGitPullRequest className="h-4 w-4 text-neutral-500" />,
    },
];
