import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center gap-10 max-lg:flex-col w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className='mt-10 font-palanquin text-4xl 
        lg:max-w-lg capitalize font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red '>Super </span>
          <span className='text-coral-red '>Quality</span> Shoes
        </h1>
        <p className='mt-6 info-text lg:max-w-lg'>
        Ensuring premium comfort and style, our meticulously 
        crafted footwear is designed to elevate your experience, 
        providing you with unmatched guality, innovation, and 
        a touch of elegance
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className=" object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality