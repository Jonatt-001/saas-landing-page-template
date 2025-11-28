import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
          A unified ecosystem designed for builders. KaaliDev delivers fast workflows, powerful automation, and seamless tools engineered for modern creation.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>

      </div>

    </div>
  )
}
