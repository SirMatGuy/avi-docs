import { cn } from "@/utils/cn"


export default function PricingCard(props: {
    price: number,
    variant: string,
    features: {text:string}[],
    link:string,
    className?:string

}) {


    return (
        <div className={cn("z-50 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-zinc-200  justify-between flex flex-col space-y-4",props.className)}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                {props.variant}
            </h3>
            {/* <div className="text-sm text-gray-500 dark:text-neutral-500">
                    Everything a small team needs.
                  </div> */}
            <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                    ${props.price}
                </span>
                <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">
                    .00
                </span>
                {/* <span className="ms-3 text-gray-500 dark:text-neutral-500">
                      USD / monthly
                    </span> */}
            </div>
            <div className="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                {/* List */}
                <ul className="space-y-2 text-sm sm:text-base">
                    {props.features.map((item) =>
                    (
                        <li className="flex space-x-3">

                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                <svg
                                    className="flex-shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                            <span className="text-gray-800 dark:text-neutral-200">
                                {item.text}
                            </span>
                        </li>
                    )
                    )}

                </ul>
                {/* End List */}
                {/* List */}
                {/* <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-neutral-200">
                          Custom reports
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-neutral-200">
                          Product support
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <svg
                            className="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-neutral-200">
                          Activity reporting
                        </span>
                      </li>
                    </ul> */}
                {/* End List */}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-x-4 py-4 first:pt-0 last:pb-0">

                <div className="flex justify-end">   <a
                    type="button"
                    href={props.link}
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-200 bg-indigo-500 text-indigo-950 shadow-sm hover:bg-indigo-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-indigo-900 dark:border-indigo-800 dark:text-white dark:hover:bg-indigo-800 transition-colors"
                >
                    Get Started
                </a>
                </div>
            </div>
        </div>

    )
}