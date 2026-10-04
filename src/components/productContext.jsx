import { useContext,createContext, useState } from "react";
const productContext=createContext()



const ProductContext = ({ children }) => {

    const[count,setCount]=useState(0)
    const [lightBoxOpen,setLightBoxOpen]=useState(false)
        const [cartArr,setCartArr]=useState([
      ])
    return (
        <productContext.Provider value={{cartArr,setCartArr,count,setCount,lightBoxOpen,setLightBoxOpen}}>
            {children}
            
        </productContext.Provider>
    );
}
const UseProductContext=()=>{
    return useContext(productContext)
}
export { UseProductContext };
export default ProductContext;
