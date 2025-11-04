import List, {type nameProp} from "./A2_components/List.tsx";
import Button from "./A2_components/Button.tsx";

function A2_App() {

    const list: nameProp[] = [
        {name: "Coffee"},
        {name: "Tea"},
        {name: "Beer"},

    ]


    return (
        <>
            <div>
                {list.map((item, key) => (
                    <List key={key} name={item.name}/>
                ))}
            </div>

            <div>
                <Button text={"Sendar"} onClick={() => console.log("clicked")}/>
            </div>
        </>
    )


}


export default A2_App