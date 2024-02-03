import { BentoBlock, Card } from "@/components";
import profilePicture from "@/assets/images/martinMalleinPP.jpeg";
import Image from "next/image";

export function Bento() {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* <div className="z-0 absolute w-[900px] h-[900px] bg-gradient-to-br from-blue-500 opacity-30 to-pink-500 rounded-full filter blur-3xl" /> */}
      <div className="w-fit relative z-10 grid grid-cols-3 grid-rows-6 gap-4">
        <Card className="col-span-2 row-span-2">
          <BentoBlock title="Frontend" description="Software Engineer" />
        </Card>
        <Card className="relative row-span-2 col-start-3">
          <Image
            alt="martin.mallein"
            src={profilePicture}
            fill
            sizes="300px"
            className="absolute object-cover rounded-lg"
          />
        </Card>
        <Card className="row-span-2 row-start-3">
          <BentoBlock title="5" description="projects" />
        </Card>
        <Card className="col-span-2 row-span-2 row-start-3">
          <BentoBlock title="Martin" description="Mallein" />
        </Card>
        <Card className="col-span-2 row-span-2 row-start-5">
          <BentoBlock title="Toulouse" description="31300 - France" />
        </Card>
        <Card className="col-start-3 row-start-5 gap-2 py-2">
          <span className="bg-green-400 rounded-full h-4 w-4 animate-pulse" />
          <h5 className="font-bold text-2xl">Available</h5>
        </Card>
        <Card className="col-start-3 row-start-6 py-2">
          <span className="w-full font-bold text-5xl">...</span>
        </Card>
      </div>
    </div>
  );
}
