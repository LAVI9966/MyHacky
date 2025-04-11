import React from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { LiaShoppingBagSolid } from "react-icons/lia";

interface CartItem {
    id: string
    title: string
    subtitle: string
    quantity: number
    price: number
    imageUrl: string
}

interface CartContentProps {
    onClose: () => void
    cartItems: CartItem[]
}

const CartContent = ({ onClose, cartItems }: CartContentProps) => {
    const isEmpty = cartItems.length === 0;
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="p-4 flex flex-col bg-white text-black h-full bg-gray-50 bg-transparent backdrop-brightness-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex items-center w-full justify-center gap-2">
                    <LiaShoppingBagSolid size={40} />
                    <h2 className="text-xl">Your Cart</h2>
                </div>
                <button onClick={onClose} className="text-black text-xl font-bold">×</button>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto">
                {isEmpty ? (
                    <>
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <p className="text-gray-500 mb-4">Your cart is empty</p>
                            <button className="bg-black text-white px-6 py-2 rounded">Return to Shop</button>
                        </div>
                        <div className="mt-6 space-y-2 shadow-[0_-8px_8px_-4px_rgba(0,0,0,0.1)]  w-full pt-4">
                            <button className="w-full bg-black hover:bg-white border text-white hover:text-black border-black  py-2 rounded">
                                Continue Shopping
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded shadow p-4 flex gap-4">
                                <Image src={item.imageUrl} alt={item.title} width={60} height={60} className="rounded object-fit w-16 h-16" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm">{item.title}</h3>
                                    <p className="text-xs text-gray-500 italic">{item.subtitle}</p>
                                    <p className="text-sm mt-1">{item.quantity} X</p>
                                    <p className="text-sm font-medium mt-1">Total bundle amount payable ₹{item.price.toFixed(2)}</p>
                                </div>
                                <button>
                                    <Trash2 className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            {!isEmpty && (
                <div className="mt-6 space-y-2 shadow-[0_-8px_8px_-4px_rgba(0,0,0,0.1)]  w-full pt-4">
                    <div>
                        <p className="font-semibold">Subtotal:</p>
                        <p className="text-sm text-gray-500">Shipping, taxes, and discounts calculated at checkout.</p>
                    </div>
                    <button className="w-full bg-black hover:bg-white border text-white hover:text-black border-black  py-2 rounded">
                        Continue Shopping
                    </button>
                    <button className="w-full bg-black hover:bg-white text-white  py-2 rounded">
                        Checkout – ₹{subtotal.toFixed(2)}
                    </button>
                </div>
            )}
        </div>
    )
}

export default CartContent
