export type nameProp = {
    name: string;
}

function List({name}: nameProp) {
    return (
        <div className="flex items-center hover:bg-teal-600 p-10 w-60 h-20 m-0.5 text-white bg-teal-500">
            {name}
        </div>
    )
}

export default List;