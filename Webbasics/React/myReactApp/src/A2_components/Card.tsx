export type Card = {
    name: string;
    work: string;
}


function Card({name, work}: Card) {

    return(
        <div className="border-2 inline-block">
            <div className="inline-block">
                <img src="images1.jpg" alt="CardPicture"/>

                <div className="bg-white p-2">
                    <p><strong>{name}</strong></p>
                    <p>{work}</p>
                </div>
            </div>


        </div>


    )
}

export default Card;