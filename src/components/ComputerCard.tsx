export interface CProps {
  
    brand:string;
    model:string;
    specs:
    {
        processor:string;
        graphics_card:string;
        memory:string;
        storage:
        {
            type:string
            ssd_capacity:string
            hdd_capacity?:string
        };
    os:string;
    display:
    {
        type:string
        size:string
        resolution:string
    };
    dimensions:{
        width:string
        height:string
        depth:string
    };
    weight:string;
    image:string;
   
  };
  onCardclick?: () => void
}

export const ComputerCard = (computerprops: CProps) => {
    return(
    
        <div
        className="max-w-sm border cursor-pointer   bg-gradient-to-br from-blue-200 to-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out bg-white shadow-md rounded-lg ring-4 ring-blue-100 hover:ring-blue-700 ring-opacity-50 overflow-hidden"
        onClick={computerprops.onCardclick}
      >
        <img className="w-full h-56 object-cover" src={computerprops.specs.image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{computerprops.brand}</div>
          <p className="text-gray-700 font-semibold text-base mb-2">
            Model: {computerprops.model}
          </p>
        
          <p className="text-gray-700 font-semibold text-base mb-2">
            Specs:
         <section>
                <ul>
                  <li>Processor: {computerprops.specs.processor}</li>
                  <li>Graphics Card: {computerprops.specs.graphics_card}</li>
                  <li>Memory: {computerprops.specs.memory}</li>
                  <li>
                    Storage:
                    <ul>
                      <li>Type: {computerprops.specs.storage.type}</li>
                      <li>
                        SSD Capacity: {computerprops.specs.storage.ssd_capacity}
                      </li>
                      <li>
                        HDD Capacity: {computerprops.specs.storage.hdd_capacity}
                      </li>
                    </ul>
                  </li>
                </ul>
            </section>
        
          </p>
          <div className="font-bold text-xl mb-2">{computerprops.specs.os}</div>
          <section>
            <article>
                <ul>
                  <li>Display: {computerprops.specs.display.type}</li>
                  <li>Size: {computerprops.specs.display.size}</li>
                  <li>Resolution: {computerprops.specs.display.resolution}</li>
                </ul>
            </article>
          </section>
          <div className="font-bold text-xl mb-2">{computerprops.specs.dimensions.width} x {computerprops.specs.dimensions.height} x {computerprops.specs.dimensions.depth}</div>
        <article>weight:{computerprops.specs.weight}</article>
        </div>
      </div>
    )
    

}