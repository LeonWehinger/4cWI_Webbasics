import {useEffect, useState} from "react";
import Person, {type PersonProps} from "./A7.2_components/Person.tsx";
import {data} from "autoprefixer";


export default function A7_1_App() {

    const [PersonList, setPersonList] = useState<PersonProps[]>([]);

    useEffect(() => {
        fetch("C:\\Users\\leonl\\WebstormProjects\\4cWI_Webbasics\\Webbasics\\React\\myReactApp\\src\\A7.2_components\\PersonAPI.ts")
            .then(res => res.json()).then(data => setPersonList(data));
            console.log(data);
    }, []);


    return (
        <>
            <div className="border border-black p-2 m-4">
                {PersonList.map((person) => (
                    <Person id={person.id} name={person.name} age={person.age}/>
                ))}
            </div>


        </>
    ) ;
}

