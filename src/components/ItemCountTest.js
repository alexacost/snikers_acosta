import React, { useState } from "react";

export const ItemCountTest = ({stock, setStockSelected}) => {
    const [Count, setCount] = useState(0);
    const increase =()=> {
      if(Count<stock) {
        setCount(Count+1);
      }
    }
    const decrease =()=> {
      if (Count>0) {
        setCount(Count-1)
      }
    }
    
  return <div className='row align-items-start justify-content-center m-2'>
      <button className='col-5 btn btn-outline-primary btn-sm' onClick={increase}>
      +
      </button>
      <p className="col-2">
      {Count}
      </p>
      <button  className='col-5 btn btn-outline-primary btn-sm' onClick={decrease}>
      -
      </button>
      <p>
        Stock total: {stock}
      </p>
  </div>;
};
