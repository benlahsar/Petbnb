import { Bird, Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

const categories = [
  { type: "dog", label: "Dogs", icon: Dog },
  { type: "cat", label: "Cats", icon: Cat },
  { type: "bird", label: "Birds", icon: Bird },
  { type: "fish", label: "Fishes", icon: Fish },
  { type: "turtle", label: "Turtles", icon: Turtle },
  { type: "rabbit", label: "Rabbits", icon: Rabbit },
];

export default function AnimalCategory({ showMap, selectedType, setSelectedType }) {
  return (
    <section className={`flex justify-evenly items-center mt-1.5 ${showMap ? "p-1" : "p-3"} transition-all duration-300`}>
      {categories.map(({ type, label, icon: Icon }) => (
        <div
          key={type}
          className={`flex flex-col items-center cursor-pointer ${selectedType === type ? "text-blue-600 font-bold" : ""}`}
          onClick={() => setSelectedType(selectedType === type ? "" : type)}
        >
          <Icon />
          <p>{label}</p>
        </div>
      ))}
    </section>
  );
}