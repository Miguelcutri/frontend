import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex justify-between bg-gray-1000 p-4">
        <Image alt="Talk to me" src="/logo.svg" width={100} height={100} />
        <Image alt="Hero Code" src="/hero.svg" width={60} height={60} />
      </div>
    </>
  );
}
