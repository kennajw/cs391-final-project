// Kenna Wylie's work
import { GatchaProps } from "@/types";

export default function Card({gatchaPull}: {gatchaPull: GatchaProps}) {
    return (
        <div>
            <h1>{gatchaPull.name}</h1>
            <h2>{gatchaPull.rarity}</h2>
            <img src={gatchaPull.img} alt="INSERT ALT DESC LATER" />
            <p>{gatchaPull.description}</p>
        </div>
    );
}