import { Bird, Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

export default function AnimalCategory({showMap}) {
  return (
    <section className={`flex justify-evenly items-center mt-1.5 ${showMap ? "p-1" : "p-3"} transition-all duration-300`}>
      <div className="flex flex-col items-center cursor-pointer">
        <Dog />
        <p>Dogs</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <Cat />
        <p>Cats</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <Bird />
        <p>Birds</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <Fish />
        <p>Fishes</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <Turtle />
        <p>Turtles</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <Rabbit />
        <p>Rabbits</p>
      </div>
    </section>
  );
}
