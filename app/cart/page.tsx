'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { CartItem } from '@/components/cart/cart-item'
import { CartSummary } from '@/components/cart/cart-summary'
import { EmptyCart } from '@/components/cart/empty-cart'
import { Button } from '@/components/ui/button'
import { setCart, setLoading, updateItemQuantity, removeItem, clearCart } from '@/redux/slices/cartSlice'
import { RootState } from '@/redux/combinedReducer'
import {
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart as clearCartApi,
} from "@/services/operations/cartAPI"
import { createOrder } from "@/services/operations/orderAPI";
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function CartPage() {
  const dispatch = useDispatch<any>()
  const { items, loading } = useSelector((state: RootState) => state.cart)
  const [isAuthError, setIsAuthError] = useState(false)

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
  try {
    dispatch(setLoading(true))
    setIsAuthError(false)

    const response = await dispatch(getCart())
    dispatch(setCart(response))
  } catch (err: any) {
    if (err?.response?.status === 401) {
      setIsAuthError(true)
    } else {
      console.error("Cart load failed", err)
    }
    dispatch(setCart([]))
  } finally {
    dispatch(setLoading(false))
  }
}
const router = useRouter();


const cart = useSelector((state: any) => state.cart);

const handlePlaceOrder = async () => {
  try {
    const res = await dispatch(createOrder(cart));
    
    if (res?.orderId) {
      await dispatch(clearCart());
      router.push("/orders");
    }
  } catch (err) {
    console.error(err);
  }
};


 const handleUpdateQuantity = async (itemId: string, quantity: number) => {
  await dispatch(updateCartItem(itemId, quantity))
  dispatch(updateItemQuantity({ id: itemId, quantity }))
}


 const handleRemoveItem = async (itemId: string) => {
  await dispatch(removeCartItem(itemId))
  dispatch(removeItem(itemId))
}


  const handleClearCart = async () => {
  await dispatch(clearCartApi())
  dispatch(clearCart())
}

  if (isAuthError) {
    return (
      <div className="min-h-screen bg-white py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 pl-0 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shopping
            </Button>
          </Link>

          <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-lg p-6">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-red-900 mb-2">Authentication Required</h2>
              <p className="text-red-700 mb-4">
                Please login to view your cart and proceed with checkout.
              </p>
              <Link href="/login">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  


  return (
    <>
     <div className=" w-full h-52 relative">
                        <Image
                          src="/products.jpg"
                          alt="Background"
                          fill
                          quality={100}
                          priority
                          className="object-cover" // or object-contain if needed
                        />
              
              </div>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 pl-0 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shopping
            </Button>
          </Link>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
       

        {/* Empty State */}
        {items.length === 0 && !loading ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white animate-pulse">
                      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem
                      key={item.cartItemId}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      isLoading={loading}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <CartSummary
                items={items}
                onClearCart={handleClearCart}
                isLoading={loading}
                handlePlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        )}
      </div>
    </div>
    </>
    
  )
}
