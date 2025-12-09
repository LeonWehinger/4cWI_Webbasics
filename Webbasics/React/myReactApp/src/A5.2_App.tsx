import {useState} from "react";
import LightCard from "./A5.2_components/LightCard.tsx";

function A5_2_App() {

    const [state, setState] = useState(false);


    return (
        <>
            <div>
                <LightCard state={state} onClick1={() => setState(!state)}/>
            </div>

        </>
    )


}


export default A5_2_App