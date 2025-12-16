import {useEffect, useState} from "react";

export type Person = {
    name: string;
    initialAge: number;
}

function Card({name, initialAge}: Person) {

    const [age, setAge] = useState(initialAge);

    useEffect(() => {
        console.log("age changed")
    },[])

    return (
        <div className="w-32 h-80 bg-gray-300">
            <p>{name}</p>
            <p>{age}</p>
            {age > 18 && <p>You are over 18</p>}
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>increase age</button>
        </div>

    )
}

export default Card;