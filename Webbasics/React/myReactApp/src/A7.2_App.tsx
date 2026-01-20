import {useEffect, useState} from "react";
import Person, {type PersonProps} from "./A7.2_components/Person.tsx";
import PersonListData from "./A7.2_components/PersonAPI.ts";


export default function A7_1_App() {

    const [PersonList] = useState<PersonProps[]>(PersonListData);




    return (
        <>
            <div className="flex justify-center align-middle ">
                <div className="border border-black p-2 m-4 w-1/4 bg-blue-100">
                    {PersonList.map((person) => (
                        <Person id={person.id} name={person.name} age={person.age}/>
                    ))}
                </div>
            </div>














        </>
    ) ;
}

