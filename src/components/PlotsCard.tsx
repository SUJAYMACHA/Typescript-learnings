export interface PlotsCardProps {
    property_details:{
        image:string
        price_range:string
        emi_starts_at:string
        name:string
        rera:boolean
        developer:string
        description:string
        possession_date:string
        average_price_per_sqft:string
        possession_status:string
        description_long:string
        nearby_places:{
            name:string
            distance:string
        }[],
},
developer_details:{
    name:string
    type:string
    additional_details:string
},
buttons:{
    name:string
}[];
oncardclick?: () => void

    
}

export const PlotsCard = (props: PlotsCardProps) => {
    return (
        <article className="bg-yellow-400 p-4 lg:p-10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div
                className="max-w-sm cursor-pointer bg-gradient-to-br from-yellow-200 to-yellow-400 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md rounded-lg overflow-hidden"
                onClick={props.oncardclick}
            >
                <img src={props.property_details.image} alt="" className="h-48 w-full object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{props.property_details.name}</h3>
                    <p className="text-sm text-gray-700">{props.property_details.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm font-bold">{props.property_details.price_range}</span>
                        <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-${props.property_details.rera ? 'green-600' : 'red-600'} bg-${props.property_details.rera ? 'green-200' : 'red-200'}`}>
                            {props.property_details.rera ? 'RERA Approved' : 'Non RERA'}
                        </span>
                    </div>
                    <div className="mt-4">
                        {props.property_details.nearby_places.map((place, index) => (
                            <div key={index} className="text-xs">
                                <span className="font-semibold">{place.name}:</span> {place.distance}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-md font-semibold">Developer Details</h4>
                <p className="text-sm">{props.developer_details.name} - {props.developer_details.type}</p>
                <p className="text-xs mt-2">{props.developer_details.additional_details}</p>
            </div>
            <div className="flex space-x-2 mt-4">
                {props.buttons.map((button, index) => (
                    <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {button.name}
                    </button>
                ))}
            </div>
        </article>
    );
};
