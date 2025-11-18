import Card from "./test_components/Card.tsx";
import type {Person} from "./test_components/Card.tsx";

function Test_App() {

    const cards : Person[] = [
        {name: "Leon", age: 20},
        {name: "Johannes", age: 2},
        {name: "Johannes", age: 21},
        {name: "Johannes", age: 21},
        {name: "Johannes", age: 3},
        {name: "Johannes", age: 21},
        {name: "Johannes", age: 7},
        {name: "Johannes", age: 21},

    ]

    return (
        <>

            <div className="flex gap-4">
                {cards.map((card : Person, key:number) => (
                    <Card name = {card.name} age = {card.age} key={key}/>
                ))}
            </div>
        </>
    )
}

export default Test_App
