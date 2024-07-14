import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 my-8">
      <h1 className="text-center text-3xl text-text">Team</h1>
      <div className="flex flex-col text-text border-2 p-4 ">
        <Image
          width="600"
          height="400"
          className="w-full h-auto"
          src="/images/team-photo-1.jpeg"
          alt="Team photo 1"
          priority
        />
      </div>
      <div className="flex flex-col text-text border-2 p-4 ">
        <Image
          width="600"
          height="400"
          className="w-full h-auto"
          src="/images/team-photo-3.jpeg"
          alt="Team photo 3"
          priority
        />
      </div>
      <div className="flex flex-col text-text border-2 p-4 ">
        <Image
          width="600"
          height="400"
          className="w-full h-auto"
          src="/images/team-photo-2.jpeg"
          alt="Team photo 2"
          priority
        />
      </div>
    </div>
  );
}
