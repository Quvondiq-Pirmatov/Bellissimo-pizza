import React, { useEffect, useState } from 'react'
import Card from './Card';

const CardList = ({ addToCart, products }) => { /* cardlarni list qilish  va loader qismi*/
    const[delay, setDelay] = useState(true); // default xolatda loader ko'rinadi

    useEffect(() => {
        setDelay(true);
        setTimeout(() =>  {
            setDelay(false) // 3s dan keyin loader o'chadi va false qiymatga o'tadi
        }, 100)  // 3s loader aylanishi
    }, [products])

  return (
    <>
        {
            delay ? <div className='loader'>
                        <img 
                            src="https://acegif.com/wp-content/uploads/loading-87.gif"
                            alt="loader"
                            className='loader'
                        />
                    </div>
            :
            <>
                <div className="card-list">
                    {
                        products.length === 0 ? <p>none products</p> :
                        products.map((item) => {
                            return(
                                <Card key={item.id} data={item} addToCart={addToCart} />
                            )
                        })
                    }
                </div>
            </>
        }
    </>
  )
}
export default CardList