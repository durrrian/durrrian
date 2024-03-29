import Image from 'next/image'
import CalComButton from './lib/CalComButton'
import DarkModeSwitch from './lib/DarkModeSwitch'

export default function Page() {
  return (
    <main className='w-screen h-screen max-h-screen max-w-screen flex items-center justify-center'>
      <section className='max-w-[500px] space-y-8 mx-4'>
        <header className='flex items-center justify-between'>
          <Image
            src={'/logo/variant_logo_panjang.svg'}
            alt={'Durrrian logo'}
            height={30}
            width={150}
            draggable={false}
          />

          <DarkModeSwitch />
        </header>

        <h1 className='text-2xl font-bold'>We are a software house based in Jakarta, Indonesia 🇮🇩</h1>

        <p className='text-justify'>
          We provide services from designing to production for: Websites (including Web Application), Apple and Android
          applications (iOS, iPadOS, Android, tvOS, watchOS, Android TV), Desktop applications (Windows, Mac, Linux),
          Internet of Things, Backend services, and many more...
        </p>

        <p className='text-justify'>Services start from IDR 20,000,000</p>

        <CalComButton />

        <section className='space-y-2'>
          <p className='text-sm'>Awesome landing page is coming soon.</p>
          <p>Registered and operated in Indonesia under the legal name of PT KUDOKU FINANSIAL INDONESIA</p>
          <a className='block underline text-blue-500' href='/terms' target='_blank'>
            Read our Terms of Service.
          </a>
          <a className='block underline text-blue-500' href='/privacy' target='_blank'>
            Read our Privacy Policy.
          </a>
        </section>
      </section>
    </main>
  )
}
