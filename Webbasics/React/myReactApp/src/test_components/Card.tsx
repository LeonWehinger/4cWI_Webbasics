export type Person = {
    name: string;
    age: number;
}

function Card({name, age}: Person) {

    return (
        <div className="w-32 h-80 bg-gray-300">
            <p>{name}</p>
            <p>{age}</p>
            {age > 18 && <p>You are over 18</p>}
        </div>

    )
}

export default Card;