import Image from "next/image";

const TestimonialsCards = ({ testimonialUser, image, company, comment }) => {
  const cardHeight = comment.length > 100 ? "h-[300px]" : "h-[200px]";

  // DEFBC2
  return (
    <div className={`dark:bg-[#1679AB] bg-zinc-100 rounded-lg p-8`}>
      <div className="flex gap-2">
        <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
          <Image
            src={image}
            fill
            alt="clientimage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-base ">{testimonialUser}</h1>
          <p className="block mt-[1px] text-zinc-500 dark:text-white">
            {" "}
            {company}
          </p>
        </div>
      </div>
      <div>
        <p className="mt-2 text-zinc-600 dark:text-black"> {comment}</p>
      </div>
    </div>
  );
};

export default TestimonialsCards;
