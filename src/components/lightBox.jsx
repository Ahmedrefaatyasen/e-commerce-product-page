import React,{useState} from 'react';
import { UseProductContext } from './productContext.jsx';

const LightBox = () => {
    const { setLightBoxOpen } = UseProductContext();
    const[i,setI]=useState(1)
    const[source,setSource]=React.useState(`/images/image-product-${i}.jpg`)
    const handleShiftLeft = () => {
        if(i>1){
            setI(i-1)
        }
        setSource(`/images/image-product-${i}.jpg`);

        // Logic to shift left
    }
   const handleShiftRight = () => {
    if(i<4){
        setI(i+1)
    }
    setSource(`/images/image-product-${i}.jpg`);
   }
    return (
        <div className='fixed bg-black/75 z-50 inset-0 backdrop-blur-xs  '>
        <div className=" relative   flex items-center justify-center my-25 ">
            <button className="absolute -top-10 right-150 hover:text-[#ff7d1a] text-white text-3xl  font-bold cursor-pointer" onClick={() => setLightBoxOpen(false)}>x</button>
            <button className="absolute left-80 top-40 bg-amber-50 rounded-[50%] w-10 h-10 flex justify-center items-center text-black text-2xl font-bold cursor-pointer" onClick={() => handleShiftLeft(4)}><img src="/images/icon-previous.svg" className="w-4 h-5" alt="icon-previous"/></button>
               <div className="w-[50%]">
                <img src={source} alt="product" className="rounded-lg w-[60%] h-full object-contain"/>
                <div className="flex  gap-8 mt-4">
                    <img  className="w-14 rounded-lg" src="/images/image-product-1-thumbnail.jpg" alt="image-product"/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-2-thumbnail.jpg" alt="image-product"/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-3-thumbnail.jpg" alt="image-product"/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-4-thumbnail.jpg" alt="image-product"/>

                </div>
            </div>
            <button className="flex justify-center items-center absolute top-40 right-145 bg-amber-50 rounded-[50%] w-10 h-10 text-center text-black text-2xl font-bold  cursor-pointer" onClick={() => handleShiftRight(4)}>< img src="/images/icon-next.svg" alt="icon-next" className="w-4"/></button>
        </div>
        </div>
    );
}

export default LightBox;
