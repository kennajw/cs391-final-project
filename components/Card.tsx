// Kenna Wylie's work
import { GatchaProps } from "@/types";

// component that will display the pulled alien character (which is passed in as gatchaPull)
export default function Card({gatchaPull}: {gatchaPull: GatchaProps}) {
    return (
        // div that creates the card itself (bg, color, display, etc.)
        <div className="flex flex-col rounded-md bg-[#FAF9FF] text-[#2B2B53] p-10 justify-center w-[80%] mh-[60%] text-center">
            {/* the following tags (h1, h2, img, p) display the information of the aliens */}
            <h1 className="p-1 text-[4.5vh]">{gatchaPull.name}</h1>
            <h2 className="p-1 text-[2vh]">{gatchaPull.rarity}</h2>
            <img src={gatchaPull.img} alt="INSERT ALT DESC LATER" className="rounded-md w-80 h-80 m-auto"/>
            <div className="flex h-30">
                <p className="p-1 text-[1.7vh] m-auto">{gatchaPull.description}</p>
            </div>
        </div>
    );
}