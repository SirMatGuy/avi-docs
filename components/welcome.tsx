import { AnimatedBeamDemo } from "./explanation";

export default function Welcome() {



    return (


        <div className="mx-auto max-w-4xl min-w-0 space-y-2 mb-10">
            <div className="mb-8 lg:mb-14 ">
                <h2 className="scroll-m-20 mb-4 text-2xl lg:text-4xl font-bold tracking-tight text-black dark:text-white">Simplify your ML workflow, <span className="dark:text-indigo-400 text-indigo-500 ">maximize your impact.</span>

                </h2>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">Welcome to FastML, your ultimate MLOps boilerplate. Streamline your machine learning workflow with our ready-to-use scripts for data handling, modeling, and deployment.</p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">Spend more time innovating and less time integrating. FastML provides everything you need to quickly turn your ML ideas into reality.

                </p>
            </div>
            <AnimatedBeamDemo/>
        </div>
    )
}