'use client'
import CartContent from "./CartContent"

interface CartDrawerProps {
    isOpen: boolean
    onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            {/* Cart Content */}
            <CartContent onClose={onClose} />
        </div>
    )
}