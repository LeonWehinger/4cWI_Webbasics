export type LightProps = {
    state: boolean
    onClick1: () =>  void
}


function LightCard({state, onClick1}: LightProps) {

    return (
        <div className=" h-screen w-screen bg-white items-center">

            <div className="bg-white w-96 aspect-square justify-items-center text-2xl flex items-center mx-auto my-auto justify-center mt-2">
                <img src={state ? "public/LightOff.png" : "public/LightOn.png"} alt=""/>
            </div>


            <button className="bg-gray-400 w-20 h-10 justify-items-center rounded-lg text-3xl flex justify-center mx-auto my-auto mt-2 text-white " onClick={onClick1}>
                {state ? "OFF" : "ON"}
            </button>

        </div>

    )

}

export default LightCard