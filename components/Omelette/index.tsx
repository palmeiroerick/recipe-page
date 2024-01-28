import Image from "next/image";

const Omelette = () => {
  return (
    <div className="relative h-[10.75rem] w-[23.438rem] lg:m-auto lg:mt-10 lg:h-[18.25rem] lg:w-[40rem] lg:overflow-hidden lg:rounded-2xl">
      <Image
        className="object-contain"
        src="/assets/image-omelette.jpeg"
        alt=""
        fill
      />
    </div>
  );
};

export default Omelette;
