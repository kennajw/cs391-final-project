// Daniel Davydov's work
import commonData from "@/json/common.json";
import rareData from "@/json/rare.json";
import epicData from "@/json/epic.json";
import legendaryData from "@/json/legendary.json";
import { GatchaProps, Category } from "@/types";

const commonPulls: GatchaProps[] = commonData.commonPulls;
const rarePulls: GatchaProps[] = rareData.rarePulls;
const epicPulls: GatchaProps[] = epicData.epicPulls;
const legendaryPulls: GatchaProps[] = legendaryData.legendaryPulls;

const categories: Category[] = [
    {key: "common", weight: 0.65, pulls: commonPulls},
    {key: "rare", weight: 0.25, pulls: rarePulls},
    {key: "epic", weight: 0.0925, pulls: epicPulls},
    {key: "legendary", weight: 0.0075, pulls: legendaryPulls},
];

function chooseCategory(): Category {
    const random = Math.random();
    let sum = 0;

    for (const category of categories) {
        sum += category.weight;
        if (random < sum) {
            return category;
        }
    }

    return categories[0];
};

function pickCharacter(pulls: GatchaProps[]): GatchaProps {
    const index = Math.floor(Math.random() * pulls.length);
    return pulls[index];
};

export default function getCard(): GatchaProps {
    const category: Category = chooseCategory();
    const card: GatchaProps = pickCharacter(category.pulls);
    return card;
};