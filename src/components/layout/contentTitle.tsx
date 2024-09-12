import Image from "next/image";

export default function ContentTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="title text-black py-28 flex items-center gap-2.5">
      <Image
        width={61}
        height={33}
        src={"/assets/media/arrow-title-left.png"}
        alt="Arrow Left Title"
      />
      <h1 className="text-2xl font-bold">{children}</h1>
      <Image
        width={61}
        height={33}
        src={"/assets/media/arrow-title-right.png"}
        alt="Arrow Right Title"
      />
    </div>
  );
}
