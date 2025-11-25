export type CounterProps = {
    count: number
    onClick1: () =>  void
    onClick2: () => void
}


function Counter({count, onClick1, onClick2}: CounterProps) {

    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="bg-blue-300 justify-items-center p-10 rounded-lg">
                <div className="bg-blue-500 w-20 aspect-square justify-items-center rounded-lg text-3xl flex items-center justify-center text-white "><p>{count}</p></div>
                <div className="flex m-2 gap-2">
                    <div className="bg-blue-700 w-10 aspect-square justify-items-center rounded-lg text-2xl flex items-center justify-center text-white"><button className="w-10 aspect-square" onClick={onClick1} >+</button>
                    </div>
                    <div className="bg-blue-700 w-10 aspect-square justify-items-center rounded-lg text-2xl flex items-center justify-center text-white"><button className="w-10 aspect-square" onClick={onClick2}>-</button>
                    </div>
                </div>
            </div>



        </div>
    )

}

export default Counter