import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Footer from './components/footer'
const logo = (
  <div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="24"
      fill="none"
      viewBox="0 0 85 24"
    >
      <g clipPath="url(#clip0_22_15)">
        <g clipPath="url(#clip1_22_15)">
          <path
            stroke="color(display-p3 0.3882 0.4000 0.9451)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 3v7h6l-8 11v-7H5l8-11z"
          ></path>
        </g>
        <path
          className='dark:fill-white fill-black'
          d="M29.41 17.5V5.864h6.976v1.25h-5.568v3.932h5.046v1.25h-5.046V17.5H29.41zm11.776.204a3.545 3.545 0 01-1.506-.312 2.584 2.584 0 01-1.074-.915c-.265-.401-.397-.886-.397-1.454 0-.5.098-.906.295-1.216.197-.315.46-.56.79-.739.33-.178.693-.31 1.09-.397a13.28 13.28 0 011.211-.216c.53-.069.96-.12 1.29-.154.333-.038.576-.1.727-.187.155-.088.233-.239.233-.455v-.045c0-.561-.153-.997-.46-1.307-.303-.31-.763-.466-1.38-.466-.64 0-1.143.14-1.506.42-.364.28-.62.58-.768.898l-1.272-.455c.227-.53.53-.943.909-1.238.383-.3.8-.508 1.25-.625a5.19 5.19 0 011.34-.182c.281 0 .603.034.967.102.367.065.721.2 1.062.404.345.204.63.513.858.926.227.413.341.966.341 1.659v5.75h-1.34v-1.182h-.069c-.09.19-.242.392-.455.608-.212.216-.494.4-.846.551-.352.152-.782.227-1.29.227zm.205-1.204c.53 0 .977-.104 1.34-.313a2.127 2.127 0 001.114-1.846v-1.227c-.057.068-.182.13-.375.187-.19.053-.409.1-.659.142a29.881 29.881 0 01-1.284.17c-.349.046-.674.12-.977.222-.3.099-.542.248-.728.45-.181.196-.272.465-.272.806 0 .466.172.818.517 1.057.348.235.79.352 1.324.352zm12.424-5.773l-1.204.341a2.237 2.237 0 00-.335-.585 1.627 1.627 0 00-.591-.477c-.25-.125-.57-.188-.96-.188-.535 0-.98.123-1.336.37-.352.242-.528.55-.528.926 0 .333.121.596.363.79.243.193.622.354 1.137.482l1.295.319c.78.189 1.362.479 1.745.869.382.386.573.884.573 1.494 0 .5-.143.947-.431 1.341-.285.394-.682.705-1.194.932-.51.227-1.106.34-1.784.34-.89 0-1.627-.192-2.21-.579-.583-.386-.952-.95-1.108-1.693l1.273-.318c.121.47.35.822.687 1.057.341.235.786.352 1.336.352.625 0 1.12-.133 1.488-.398.372-.269.557-.59.557-.966 0-.303-.106-.556-.318-.761-.212-.208-.538-.364-.977-.466l-1.455-.34c-.8-.19-1.386-.484-1.761-.882-.371-.401-.557-.903-.557-1.505 0-.493.138-.928.415-1.307.28-.379.66-.676 1.142-.892.485-.216 1.034-.324 1.647-.324.864 0 1.542.19 2.035.568.496.38.848.88 1.056 1.5zm5.973-1.954v1.136h-4.522V8.773h4.522zm-3.204-2.091h1.34V15c0 .379.056.663.166.852.113.186.257.31.431.375.178.06.366.091.563.091.147 0 .269-.007.363-.023l.228-.045.272 1.204a2.73 2.73 0 01-.38.103c-.163.038-.37.057-.62.057-.378 0-.75-.082-1.113-.245a2.213 2.213 0 01-.898-.744c-.235-.333-.352-.754-.352-1.261V6.682z"
        ></path>
        <path
          fill="color(display-p3 0.3882 0.4000 0.9451)"
          d="M61.59 5.864h3.034l3.204 7.818h.136l3.205-7.818h3.034V17.5h-2.386V9.926h-.097l-3.011 7.517h-1.625l-3.012-7.545h-.096V17.5H61.59V5.864zM76.23 17.5V5.864h2.46v9.608h4.989V17.5H76.23z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_22_15">
          <path fill="#fff" d="M0 0H85V24H0z"></path>
        </clipPath>
        <clipPath id="clip1_22_15">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </div>
)
const config: DocsThemeConfig = {
  logo,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  chat: {
    link: 'https://x.com/RoshkovanAvi',
    icon:<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <path d="M4 4l11.733 16H20L8.267 4zM4 20l6.768-6.768m2.46-2.46L20 4"></path>
  </svg>
    
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: <Footer />
  },
  editLink:{
component:null
  },
  feedback:{
    content:null
  },
  themeSwitch: {
    component: <></>
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  search:{
    //
    component: null,
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard ='https://fastml.co/og.jpeg'
      

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Create ML Pipelines with ease."
        />
        <meta
          name="og:description"
          content="Create ML Pipelines with ease."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="fastml.co" />
        <meta name="twitter:url" content="https://fastml.co" />
        <meta
          name="og:title"
          content={title ? title + '- FastML' : 'FastML'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="FastML" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - FastML'
      }
    }
  }
}

export default config
