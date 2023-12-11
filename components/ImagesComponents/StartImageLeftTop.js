import Image from "next/image";

export default function StartImageLeftTop() {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/StartImageTopLeft.png"
        width={400}
        height={400}
        alt=""
      />
    </div>
  );
}
