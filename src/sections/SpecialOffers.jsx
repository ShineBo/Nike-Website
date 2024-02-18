import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse max-container gap-10">
      <div className="flex-1">
        <img src={offer} alt="shoes on img" width={773} height={687} />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className='mt-10 font-palanquin text-4xl 
        lg:max-w-lg capitalize font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red '>Spcial </span>
          Offers
        </h1>
        <p className='mt-6 info-text lg:max-w-lg'>
        Embark on a shopping journey that redefines your experience with 
        unbeatable deals. From premier selections to incredible savings, 
        we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. 
        Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" 
          borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers