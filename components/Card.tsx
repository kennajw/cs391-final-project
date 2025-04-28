// Kenna Wylie's work
import { GatchaProps } from "@/types";

export default function Card({gatchaPull}: {gatchaPull: GatchaProps}) {
    return (
        <div className="flex flex-col rounded-md bg-[#FAF9FF] text-[#2B2B53] p-10 justify-center w-[80%] text-center">
            <h1 className="p-2 text-4xl">{gatchaPull.name}</h1>
            <h2 className="p-2 text-2xl">{gatchaPull.rarity}</h2>
            <img src={gatchaPull.img} alt="INSERT ALT DESC LATER" className="rounded-md w-100 h-100 m-auto"/>
            <p className="p-2">{gatchaPull.description}</p>
        </div>
    );
}