
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <ShoppingBag className="w-10 h-10 text-gray-400" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
        Your cart is empty
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-sm">
        Add some beautiful products to get started with your design project.
      </p>

      <Link href="/shop">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white font-medium">
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}
