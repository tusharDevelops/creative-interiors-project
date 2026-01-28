"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderById } from "@/services/operations/orderAPI";
import Image from "next/image";

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<any>();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const loadOrder = async () => {
      const res = await dispatch(getOrderById(params.id));
      setOrder(res);
    };
    loadOrder();
  }, [dispatch, params.id]);

  if (!order) return <div className="p-10 text-center">Loading order details...</div>;

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
    <div className=" max-w-4xl mx-auto p-6 space-y-8">
        
      {/* 1. Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Order Details</h1>
          <p className="text-sm text-gray-500">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {order.status}
          </span>
          <p className="mt-2 font-mono text-sm uppercase">{order.orderNumber}</p>
        </div>
      </div>

      {/* 2. Order Items */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Items ({order.items.length})</h2>
        {order.items.map((item: any) => (
          <div key={item.id} className="border rounded-lg p-4 bg-white shadow-sm flex flex-col md:flex-row gap-6">
            {/* Image Placeholder if available */}
            {item.configurationJson?.catalogueImage && (
               <img 
                src={item.configurationJson.catalogueImage} 
                alt="Product" 
                className="w-24 h-24 object-cover rounded bg-gray-100"
              />
            )}

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{item.configurationJson?.designName || item.productType}</h3>
                <p className="font-bold text-blue-600">₹{item.totalPrice}</p>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">Ref ID: {item.productRefId}</p>

              {/* Technical Details from configurationJson */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs bg-gray-50 p-3 rounded">
                <div><span className="text-gray-500">Material:</span> {item.configurationJson?.materialName}</div>
                <div><span className="text-gray-500">Dimensions:</span> {item.configurationJson?.width} x {item.configurationJson?.height} {item.configurationJson?.unit}</div>
                <div><span className="text-gray-500">Quantity:</span> {item.quantity}</div>
                <div><span className="text-gray-500">Category:</span> {item.configurationJson?.category}</div>
                {item.configurationJson?.specialNotes && (
                   <div className="col-span-full italic pt-1 border-t mt-1">
                    <span className="text-gray-500">Notes:</span> {item.configurationJson.specialNotes}
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Order Summary Footer */}
      <div className="bg-gray-800 text-white p-6 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Customer Email</p>
          <p className="font-medium">{order.userId}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Grand Total</p>
          <p className="text-3xl font-bold">₹{order.grandTotal}</p>
        </div>
      </div>
    </div>
    </>
  );
}