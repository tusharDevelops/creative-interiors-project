'use client'

import { useState } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { CartItem  } from '@/redux/slices/cartSlice'


interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (itemId: string, quantity: number) => Promise<void>
  onRemove: (itemId: string) => Promise<void>
  isLoading?: boolean
}
  const getProductTypeLabel = (type: string) => {
  switch (type) {
    case "WALLPAPER": return "Wallpaper"
    case "BLINDS": return "Blinds"
    case "CANVAS": return "Canvas"
    case "GLASS_FILM": return "Glass Film"
    default: return type
  }
}


export function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
  isLoading = false,
}: CartItemProps) {
  const [isUpdating, setIsUpdating] = useState(false)

  let config: any = {}

  try {
    config = item.configurationJson
      ? JSON.parse(item.configurationJson)
      : {}
  } catch {
    config = {}
  }

  const imageUrl = config.imageType === "CUSTOM_UPLOAD"
    ? config.imageUrl
    : config.imageType === "CATALOGUE"
    ? config.catalogueImage
    : "/placeholder.svg"

  
const configDetails: string[] = [];

if (config.width && config.height) {
  configDetails.push(
    `${config.width} × ${config.height} ${config.unit || "in"}`
  );
}

if (config.materialName) {
  configDetails.push(`Material: ${config.materialName}`);
}

if (config.specialNotes) {
  configDetails.push(`Note: ${config.specialNotes}`);
}

if (config.colorTint) {
  configDetails.push(`Tint: ${config.colorTint}`);
}

if (config.finish) {
  configDetails.push(`Finish: ${config.finish}`);
}



  const handleIncrement = async () => {
    setIsUpdating(true)
    await onUpdateQuantity(item.cartItemId, item.quantity + 1)
    setIsUpdating(false)
  }

  const handleDecrement = async () => {
    if (item.quantity > 1) {
      setIsUpdating(true)
      await onUpdateQuantity(item.cartItemId, item.quantity - 1)
      setIsUpdating(false)
    }
  }

  const handleRemove = async () => {
    setIsUpdating(true)
    await onRemove(item.cartItemId)
  }
  if (!item) return null;


  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white hover:shadow-sm transition-shadow">
      {/* Product image */}
      <div className="mb-4 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Product ${item.productRefId}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Header with product type and remove button */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge variant="outline" className="text-xs font-medium text-gray-700 bg-gray-50">
          {getProductTypeLabel(item.productType)}
        </Badge>
        <button
          onClick={handleRemove}
          disabled={isUpdating || isLoading}
          className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
          aria-label="Remove item from cart"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Product details */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium text-gray-800">Product ID:</span> {item.productRefId}
        </p>

        {/* Configuration details */}
        {configDetails.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {configDetails.map((detail, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100"
              >
                {detail}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quantity and Price Row */}
      <div className="flex items-center justify-between">
        {/* Quantity Selector */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
          <button
            onClick={handleDecrement}
            disabled={item.quantity <= 1 || isUpdating || isLoading}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="w-8 text-center text-sm font-medium text-gray-800">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            disabled={isUpdating || isLoading}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-0.5">Unit Price</p>
          <p className="text-sm text-gray-600 mb-2">${item.unitPrice.toFixed(2)}</p>
          <p className="text-lg font-bold text-gray-900">${item.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
