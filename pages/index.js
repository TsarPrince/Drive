import Link from "next/link";

const callouts = [
  {
    name: 'Time saving',
    description: 'View your content at a glance.',
    imageSrc: '/usage1.png',
    imageAlt: 'View your content at a glance.',
    href: '#',
  },
  {
    name: 'Easy Peasy',
    description: 'Direct link to your Google Drive.',
    imageSrc: '/usage2.png',
    imageAlt: 'Direct link to your Google Drive.',
    href: '#',
  },
  {
    name: 'Safe and Secure',
    description: 'One click direct download.',
    imageSrc: '/usage3.png',
    imageAlt: 'One click direct download.',
    href: '#',
  },
]

export default function HomePage() {

  return (
    <div className="relative z-0 bg-white overflow-hidden">
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[0rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our brand new product.{' '}
                    <Link href="/about" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Google Drive made easier for you.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  View your files, see which of them are taking the most space, declutter your drive, directly download the files to your local system with no hassle.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/login"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Sign In{' '}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=D_tsIytsKn0"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Live demo{' '}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>



        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Our Features</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-contain border-2 rounded-lg"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
