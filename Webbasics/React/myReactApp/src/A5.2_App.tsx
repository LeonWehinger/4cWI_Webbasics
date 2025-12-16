import {useState} from "react";
import LightCard from "./A5.2_components/LightCard.tsx";
import Card from "./test_components/Card.tsx";

function A5_2_App() {

    const [state, setState] = useState(false);


    return (
        <>
            <div>
                <LightCard state={state} onClick1={() => setState(!state)}/>
                <Card name=" leon" initialAge={15}></Card>
            </div>

        </>
    )


}


export default A5_2_App