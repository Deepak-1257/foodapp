import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
    const priceRef=useRef();
    let dispatch=useDispatchCart();
    let data=useCart();
    let option=props.foodItems.options[0];
    let priceOption=Object.keys(option);
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("");
    let finalPrice=qty * parseInt(props.foodItems.options[0][size]);
    console.log(props.foodItems.options[0][size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    const handleAddToCart=async()=>{
     await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size})
     console.log(data)
    }
    return (
        <>
            <div >
                <div className="card mt-3 " style={{ "width": "18rem", "maxheight": "360px" }} >
                    <img className="card-img-top" src={props.foodItems.img} alt="Card image cap" style={{height:"200px",objectfit:"fill"}}/>
                    <div className="card-body ">
                        <h5 className="card-title">{props.foodItems.name}</h5>
                        <p className="card-text">Some important stuff
                        </p>
                        <div className="container w-100">
                            <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} >{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                                {priceOption.map((data)=>{
                                 return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <hr></hr>
                            <div className='d-inline h-100 fs-5' >
                                rs {finalPrice}/-
                            </div>
                        </div>
                        <hr>
                        </hr>
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
