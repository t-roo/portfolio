import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="py-8 px-2 flex flex-col justify-center items-center md:py-12">
      <Head>
        <title>TanakaRyo&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-2 sm:m-4">
        <div className="h-24 w-auto flex items-center justify-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex-shrink-0">
              <Image className="float-left w-24 h-24 mb-3 mr-4 rounded-full shadow-lg object-cover sm:h-36 sm:w-36"  width={100} height={100} src="/images/profile.png" alt="pct" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
              Ryo Tanaka
              </p>
              <p className="text-lg text-gray-500 truncate dark:text-gray-400">
              SoftwareEnginner
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 sm:m-4">
        <h2 className="mb-4 text-4xl text-left font-mediu leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white" id="profile">
        Profile
        </h2>
        <div className="mb-6 text-lg text-left font-normal text-gray-900 lg:text-xl dark:text-gray-300">
          <p>I&apos;m Tanaka Ryo,Japanese SoftwareEnginner.</p>
          <p> I love Frontend and simple code.</p>
        </div>
      </div>
      <div className="m-2 sm:m-4">
        <h2 className="mb-4 text-4xl text-left font-mediu leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white" id="career">
        Career
        </h2>
        <div className="mb-6 text-lg text-left font-normal text-gray-900 lg:text-xl dark:text-gray-300">
          <p>2015/4~2017/3 Studied at Nihon Kogakuin.</p>
          <p>2017/4~2018/7 Worked as Freelance.</p>
          <p>2018/8~2019/9 Worked at Moly.</p>
          <p>2019/10~Now. Working as Freelance.</p>
        </div>
      </div>
      <div className="m-2 sm:m-4">
        <h2 className="mb-4 text-4xl text-left font-mediu leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white" id="disired">
        Disired
        </h2>
          <ul className="mb-6 text-lg text-gray-900 text-left font-normal space-y-4 dark:text-gray-300">
            <li className="flex items-center">
              <svg className="h-6 w-6 fill-none stroke-none stroke-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <p className="ml-4">
                Front end job, Especially like <code className="text-sm font-bold text-gray-900 dark:text-gray-300">React.js,Vue.js</code>
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"></path>
              </svg>
              <p className="ml-4">
                Clear and Free work.
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="ml-4">Salary of $75,000/month or more. Hourly rate is $45+. </p>
            </li>
          </ul>
      </div>
      <div className="m-2 sm:m-4">
        <h2 className="mb-4 text-4xl text-left font-mediu leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white" id="disired">
        Contact
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-300">
          I would like the following:
        </p>
      </div> 
      <a href="https://www.wantedly.com/id/tanakaryo" target="_blank" rel="noopener noreferrer" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 hover:opacity-75">Learn more</a>
    </div>
  )
}


export default Home
