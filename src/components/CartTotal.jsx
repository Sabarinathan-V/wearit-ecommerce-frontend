import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getTotalCartAmount} = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {getTotalCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shopping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency} {getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + delivery_fee}.00</b>
                </div>

            </div>
        </div>
    )
}

export default CartTotal