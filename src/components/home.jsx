import LightBox from './lightBox.jsx';
import { UseProductContext } from './productContext.jsx'


const Home = () => {
 
    const { setCartArr, count, setCount, lightBoxOpen, setLightBoxOpen } = UseProductContext();

    const handleIncrement = () => {
        setCount((prevcount) =>(prevcount + 1));
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount((prevcount) => (prevcount>0?prevcount - 1:0));
        }
    };
    const handleAddToCart = () => {
       const newItem = {
            title: "Fall Limited Edition Sneakers",
            price: 125,
            image: "/images/image-product-1-thumbnail.jpg",
            
    
            
        };
        setCartArr((prevCartArr) => {
        const existingItem=prevCartArr.find((item)=>item.title===newItem.title)
        if (existingItem) {
            return prevCartArr.map((item) =>
                item.title === newItem.title ? { ...item, quantity: (item.quantity+count) } : item
            );
        }
        return [...prevCartArr, { ...newItem, quantity: count }];
    }
        );
    ;
    };
    const handleLightBoxOpen = () => {
        setLightBoxOpen(true);
       
    }

    return (
        <section className="sm:flex sm:items-center sm:justify-between sm:p-8">
            <div className="w-full sm:w-[50%]">
                <img src="/images/image-product-1-thumbnail.jpg" onClick={()=>handleLightBoxOpen()} alt="product" className="w-full sm:rounded-lg sm:w-[60%] sm:h-full object-contain"/>
                <div className="hidden sm:flex  sm:gap-8 sm:mt-4">
                    <img className="w-14 rounded-lg" src="/images/image-product-1-thumbnail.jpg" alt=""/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-2-thumbnail.jpg" alt=""/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-3-thumbnail.jpg" alt=""/>
                    <img  className="w-14 rounded-lg" src="/images/image-product-4-thumbnail.jpg" alt=""/>

                </div>
            </div>
            <div className="w-full px-3 sm:w-[50%]">
                <p className="mt-4 sm:text-[16px] text-[#6a717e]">sneaker company</p>
                <h1 className=" text-[30px] sm:text-[56px] font-bold text-[#000000]">Fall Limited Edition Sneakers</h1>
                <p className="text-[16px] text-[#6a717e]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className='flex mt-5 justify-between sm:flex-col '>
                <p className=" flex justify-between gap-3 sm:block text-[16px] sm:text-[24px] font-bold text-[#000000]">125$ <span className="bg-[#000000] border border-transparent rounded-xs text-[#ffffff]">50%</span></p>

                <p className='  sm:block '>250$</p>
                </div>
                <div className="flex flex-col mt-5 sm:flex-row gap-4 items-center">
                    <div className='flex gap-22 items-center sm:gap-3.5'>
                    <button onClick={handleDecrement} className="text-[#ff7d1a] cursor-pointer"><img src='/images/icon-minus.svg' alt=''/></button>
                    <span className="text-[#000000]">{count}</span>
                    <button onClick={handleIncrement} className="text-[#ff7d1a] cursor-pointer"><img src='/images/icon-plus.svg' alt=''/></button>
                    </div>
                        <button onClick={handleAddToCart} className="bg-[#ff7d1a] cursor-pointer text-[#000000] py-2 px-4 rounded-md w-full sm:w-[60%]">Add to cart</button>
                    
                </div>
            </div>
            {lightBoxOpen && <LightBox/>}
            
        </section>
    );
};

export default Home;
