import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <section className="flex flex-col justify-center items-center
    text-center m-auto max-w-lg"> 
        <img src={imgURL} alt="customer img" width={120} height={120} className="rounded-full object-cover"/>
        <p className="mt-5 max-w-sm info-text">{feedback}</p>
        <div className="flex justify-center items-center gap-2.5 mt-3">
            <img src={star} alt="star" width={24} height={24} className="object-container m-0" />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <p className="mt-2 font-palanquin text-3xl font-bold leading-normal">{customerName}</p>
    </section>
  )
}

export default ReviewCard