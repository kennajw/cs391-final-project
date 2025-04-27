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
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">GET A RANDOM CARD</h1>
        
            {card && <Card gatchaPull={card} />}
        
            <Button
                sx={{ width: "120px" }}
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