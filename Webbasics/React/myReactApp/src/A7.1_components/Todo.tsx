import {useState} from "react";

export type Props = {
    id?: number;
    title: string;
    completed: boolean;
};

export default function Todo({title, completed}: Props) {

    const [complete, setComplete] = useState(completed);


    return (
        <div className="border border-black grid grid-cols-[1fr_180px_auto] items-center gap-2 m-1 px-2">
            <div className="truncate">{title}</div>
            <div className="text-center">
                {complete ? "Completed" : "Not Completed"}
            </div>
            <input type="checkbox" checked={complete} onChange={() => setComplete(!complete)}/>
        </div>
    );
}
