// Lin Khant Ko's work

// components/Gatcha.tsx
import { Button } from "@mui/material";

export default function Gatcha() {
    return (
        <div className="flex flex-col items-center">
            <h1>GET A RANDOM CARD</h1>
            <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
            >
                    GATCHA!
            </Button>
        
        </div>
    );
}