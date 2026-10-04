
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UseProductContext } from './productContext';

const Header = () => {
    const{cartArr,count}=UseProductContext()
    const [isOpen,setIsOpen]=useState(false)
    const[ismenuOpen,setismenuOpen]=useState(false)
    const navigate = useNavigate();
    const handleLinkClick = () => {
        navigate('/')
    }
  ;
    return (
        <header className='flex justify-between mx-3 my-3  sm:flex sm:justify-between sm:items-center'>
            
            <div className='flex items-center gap-3 sm:flex  sm:items-center sm:gap-10'>
                <img src='/images/icon-menu.svg' alt='Menu' onClick={()=>setismenuOpen(!ismenuOpen)} className='sm:hidden cursor-pointer  h-4' />
         <img src='/images/logo.svg' alt='Logo' className=" cursor-pointer" onClick={handleLinkClick} />
         <nav className='hidden sm:flex'>
            <ul className='sm:flex sm:gap-8 sm:items-center text-[16px] text-[#6a717e]'>
            <li className='relative' ><Link className='after:w-0 after:h-1 after:bg-amber-500 after:absolute after:right-0 after:bottom-0 after:top-12 hover:after:w-20 after:transition-all' to="/collections">Collections</Link></li>
                <li  className='relative'><Link className='after:w-0 after:h-1 after:bg-amber-500 after:absolute after:right-0 after:bottom-0 after:top-12 hover:after:w-10 after:transition-all' to="/men">Men</Link></li>
                <li className='relative'><Link className='after:w-0 after:h-1 after:bg-amber-500 after:absolute after:right-0  after:bottom-0 after:top-12 hover:after:w-15 after:transition-all' to="/women">Women</Link></li>
                <li className='relative'><Link className='after:w-0 after:h-1 after:bg-amber-500 after:absolute after:right-0 after:bottom-0 after:top-12 hover:after:w-15 after:transition-all' to="/about">About</Link></li>
                <li className='relative'><Link className='after:w-0 after:h-1 after:bg-amber-500 after:absolute after:right-0 after:bottom-0 after:top-12 hover:after:w-15  after:transition-all' to="/contact">Contact</Link></li>
            </ul>
         </nav>
         </div>
            <div className='flex items-center gap-4 sm:flex sm:gap-8 sm:items-center'>
                <img src='/images/icon-cart.svg' alt='Cart' className='sm:pr-4 absolute cursor-pointer' onClick={()=>setIsOpen(!isOpen)} />
                <p className='relative bg-amber-500 text-amber-50 rounded-4xl  flex items-center justify-center bottom-2.5 left-3.75 '>{count*cartArr.length}</p>
                <img src='/images/image-avatar.png' alt='Avatar' className='w-8 sm:pr-4 sm:w-12.5' />
                {isOpen&&<div className='absolute top-15 right-0 w-[90%] h-[250px] mx-4 sm:top-25 sm:right-12.5 bg-[#ffffff] sm:w-75 rounded-md shadow-lg p-4'>
                    
                    <h1>cart</h1>
                
                    <div className=' bg-[#e9ecef] mt-5'></div>
                    {cartArr.length>0 ? cartArr.map((item,index)=>
                        <div key={index} className='flex gap-4 mt-5'>
                            <div>
                                <img src={item.image} alt={item.title} className='w-12.5 h-12.5 rounded-md' />


                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#6a717e]'>{item.title}</p>
                                <div className='flex gap-2'>
                                <p className='text-[#6a717e]'>${item.price} X {count}</p>
                                <p className="font-bold">${item.price * count}</p>
                                </div>

                            </div>
                        </div>)
:
                    <p className='text-[16px] text-[#6a717e] mr-auto ml-auto mt-7'>{"your cart is empty"}</p>
                    }
                   {count>0? <button type='button' className='bg-[#ff7d1a] text-[#000000] font-bold py-2 px-4 rounded-md mt-5 w-full'>Checkout</button>: null}
                    
                    </div>}
            </div>
            {ismenuOpen&&<div className='w-[50%] absolute p-4 top-0 left-0 h-screen bg-[#ffffff] capitalize font-bold z-10 sm:hidden'>
                <button onClick={()=>setismenuOpen(false)} className='text-[25px] cursor-pointer'>x</button>
                <nav className='mt-15'>
              <ul>
            <li><Link to='/collections' >collections</Link></li>
            <li><Link to='/men' >men</Link></li>
                  <li><Link to='/women' >women</Link></li>
                <li><Link to='./about' >about</Link></li>
                    <li><Link to='./contact' >contact</Link></li>
              </ul>
         </nav>
                
                
                </div>}

        </header>
    );
}

export default Header;
