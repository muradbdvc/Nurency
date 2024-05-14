import React from 'react'

const HeroDiv = () => {
  return (
    <div>
        <section className='dark:bg-gray-100 dark:text-gray-800'>
            <div className='container flex flex-col py-2 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-evenly'>

                <div className='flex flex-col p-6 text-left w-2/4 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <h1 className='text-8xl font-extrabold leading-normal sm:text-6xl'>We Design Digital Product</h1>
                </div>

                <div className='flex-col items-center text-left p-6 mt-8 lg:mt-0 h-full w-1/3 sm:h-80 lg:h-60 xl:h-112 2xl:h-128'>
                    <p className='text-xl font-semibold'>Nurency is a leading UX design agency based in Canada. We help startups & Fortune 500 companies delight humans on the other side of the screen</p>
                <div className='flex flex-row justify-evenly mt-4'>
                    <img src="Assets/clatch_icon.png" alt="Clatch" />
                    <img src="Assets/behance.png" alt="Clatch" />
                    <img src="Assets/google.png" alt="Clatch" />
                    <img src="Assets/trustp.png" alt="Clatch" />
                </div>
                </div>

            </div>
            <div className='flex flex-wrap gap-x-4 mx-auto sm:py-4 lg:py-4 lg:flex-row lg:justify-evenly'>
                <div className='max-w-sm p-6 bg-violet-400 border flex flex-col border-gray-200 shadow-md rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700'>
                    <h2 className='text-4xl font-bold text-white text-center my-6'>SAAS</h2>
                    <img src="Assets/saas.png" alt="SAAS" />
                </div>
                <div className='max-w-sm p-6 bg-rose-300 border flex flex-col border-gray-200 shadow-md rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700'>
                    <h2 className='text-4xl font-bold text-white text-center my-6'>SAAS</h2>
                    <img src="Assets/saas.png" alt="SAAS" />
                </div>
                <div className='max-w-sm p-6 bg-cyan-400 border flex flex-col border-gray-200 shadow-md rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700'>
                    <h2 className='text-4xl font-bold text-white text-center my-6'>SAAS</h2>
                    <img src="Assets/saas.png" alt="SAAS" />
                </div>
                <div className='max-w-sm p-6 bg-amber-400 border flex flex-col border-gray-200 shadow-md rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700'>
                    <h2 className='text-4xl font-bold text-white text-center my-6'>SAAS</h2>
                    <img src="Assets/saas.png" alt="SAAS" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroDiv