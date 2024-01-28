import Image from "next/image";

const Omelette = () => {
  return (
    <div className="relative h-[10.75rem] w-[23.438rem]">
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
