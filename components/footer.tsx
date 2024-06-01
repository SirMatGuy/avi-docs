export default function Footer(){

    return (
        <>
  {/* ========== FOOTER ========== */}
  <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="col-span-full lg:col-span-1">
          <a
            className="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand"
          >
            <span className="text-indigo-500">FastML</span> <br/> The Python ML Boilerplate
          </a>
        </div>
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Legal</h4>
          <div className="mt-3 grid space-y-3">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Terms
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Privacy
              </a>
            </p>
            {/* <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Docs
              </a>
            </p> */}
          </div>
        </div>
       
      </div>
      {/* End Grid */}
      <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 dark:text-neutral-400">
            © 2024 FastML. All rights reserved.
          </p>
        </div>
        {/* End Col */}
        {/* Social Brands */}
       
        {/* End Social Brands */}
      </div>
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
</>

    )
}