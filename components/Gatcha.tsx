// Lin Khant Ko's work

// components/Gatcha.tsx
"use client";

import { useState } from "react";
import getCard from "@/lib/getCard";
import Card from "@/components/Card";

export default function Gatcha() {
    // in this component, I will implement
    // - title
    // - image (if there is one)
    // - button
    const [card, setCard] = useState<{
        name: string;
        rarity: string;
        description: string;
        img: string;
    } | null>(null);

    return (
        <div className="flex flex-col items-center space-y-4 bg-[#2B2B53] text-[#FAF9FF] w-screen min-h-[calc(100vh-80px)]">
        <h1 className="text-2s font-bold mt-2">GET A RANDOM CARD</h1>

        {card && <Card gatchaPull={card} />}

        <button
            className="w-[120px] py-2 rounded-md cursor-pointer"
            style={{
                backgroundColor: "#3E7CB1",
                color: "#FEF9FF",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
            }}
            onClick={() => {
                const randomCard = getCard();
                setCard(randomCard);
            }}
            >
            GATCHA!
        </button>

        </div>
    );
}
