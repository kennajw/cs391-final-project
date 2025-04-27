// Lin Khant Ko's work

// components/Gatcha.tsx
"use client";

import { Button } from "@mui/material";
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
            <h1 className="text-2xl font-bold mt-5">GET A RANDOM CARD</h1>
        
            {card && <Card gatchaPull={card} />}
        
            <Button
                sx={{ width: "120px", background: "#3E7CB1"}}
                variant="contained"
                onClick={() => {
                const randomCard = getCard();
                setCard(randomCard);
                }}
            >
                GATCHA!
            </Button>
        </div>
    );
}