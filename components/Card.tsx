// Kenna Wylie's work
import { GatchaProps } from "@/types";

export default function Card({gatchaPull}: {gatchaPull: GatchaProps}) {
    return (
        <div className="flex flex-col rounded-md bg-[#F1E4F3]">
            <h1 className="font-bold">{gatchaPull.name}</h1>
            <h2>{gatchaPull.rarity}</h2>
            <img src={gatchaPull.img} alt="INSERT ALT DESC LATER" className="rounded-md w-200"/>
            <p>{gatchaPull.description}</p>
        </div>
    );
}