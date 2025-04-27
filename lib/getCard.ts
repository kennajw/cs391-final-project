import commonData from "@/json/common.json";
import rareData from "@/json/rare.json";
import epicData from "@/json/epic.json";
import legendaryData from "@/json/legendary.json";

interface Character {
    name: string,
    rarity: string,
    description: string,
    img: string,
};

const commonPulls: Character[] = commonData.commonPulls;
const rarePulls: Character[] = rareData.rarePulls;
const epicPulls: Character[] = epicData.epicPulls;
const legendaryPulls: Character[] = legendaryData.legendaryPulls;

interface Category {
    key: string,
    weight: number,
    pulls: Character[],
};

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

function pickCharacter(pulls: Character[]): Character {
    const index = Math.floor(Math.random() * pulls.length);
    return pulls[index];
};

export default function getCard(): Character {
    const category: Category = chooseCategory();
    const card: Character = pickCharacter(category.pulls);
    return card;
};