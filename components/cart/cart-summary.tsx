'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { CartItem } from '@/redux/slices/cartSlice'

interface CartSummaryProps {
  items: CartItem[]
  onClearCart: () => Promise<void>
  isLoading?: boolean
  handlePlaceOrder: () => Promise<void>
}

export function CartSummary({ items, onClearCart, isLoading = false, handlePlaceOrder }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6 h-fit">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Summary Details */}
      <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Items ({totalItems})</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>

        {/* Future: Add shipping, taxes, discounts */}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-2xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        
          <Button
            disabled={items.length === 0 || isLoading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium h-11"
            onClick={handlePlaceOrder}
          >
            Proceed to Checkout
          </Button>
        

        <Button
          onClick={onClearCart}
          disabled={items.length === 0 || isLoading}
          variant="outline"
          className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 font-medium h-11 bg-transparent"
        >
          Clear Cart
        </Button>
      </div>

      {/* Info Text */}
      {items.length === 0 && (
        <p className="text-xs text-gray-500 text-center mt-4">Your cart is empty</p>
      )}
    </div>
  )
}
