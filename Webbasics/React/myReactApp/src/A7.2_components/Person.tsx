
export type PersonProps = {
    id?: number;
    name: string;
    age: number;
};

export default function Person({name, age}: PersonProps) {


    return (
        <div>{name}, {age}</div>
    );
}
