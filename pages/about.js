import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Clearly see all at once',
    description:
      'View your content at a glance with a short and crisp summary of content owners.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Our services are completely free of cost and will always be!',
    icon: ScaleIcon,
  },
  {
    name: 'Blazingly fast',
    description:
      'Get started in no time with 0 latency. We really work hard to serve the best to you.',
    icon: BoltIcon,
  },
  {
    name: 'Direct download',
    description:
      'Get your content into your phone with one click direct download and view them offline or share as a pdf!',
    icon: DevicePhoneMobileIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Drive Roan</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to manage your Drive</p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
