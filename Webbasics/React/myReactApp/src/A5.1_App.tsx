import Counter from "./A5.1_components/Counter.tsx"
import {useState} from "react";

function A5_1_App() {

    const [count, setCount] = useState(0);

    return(
        <Counter count={count} onClick1={() => setCount(count + 1)} onClick2={() => setCount(count - 1) } />

    )

}

export default A5_1_App