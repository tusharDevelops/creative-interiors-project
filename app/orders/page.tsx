"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMyOrders } from "@/services/operations/orderAPI";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Package } from "lucide-react"; // Optional: install lucide-react or use SVG

export default function OrdersPage() {
  const dispatch = useDispatch<any>();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      const res = await dispatch(getMyOrders());
      setOrders(res || []);
      setLoading(false);
    };
    loadOrders();
  }, [dispatch]);

  // Helper for status badge colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "CREATED": return "bg-blue-100 text-blue-700 border-blue-200";
      case "PAID": return "bg-green-100 text-green-700 border-green-200";
      case "CANCELLED": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  if (loading) return <div className="max-w-5xl mx-auto p-6">Loading orders...</div>;

  return (<>
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
  <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-8">
        <Package className="w-6 h-6 text-gray-600" />
        <h1 className="text-2xl font-bold text-gray-900">Purchase History</h1>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <p className="text-gray-500 text-lg">You haven't placed any orders yet.</p>
          <Link href="/shop" className="text-blue-600 font-medium hover:underline mt-2 inline-block">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <Link
              key={order.id}
              href={`/orders/${order.id}`}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 bg-white border border-gray-200 rounded-xl transition-all duration-200 hover:shadow-md hover:border-blue-300"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-medium text-gray-500">
                    {order.orderNumber}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end md:gap-8">
                <div className="text-left md:text-right">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-xl font-bold text-gray-900">₹{order.grandTotal.toLocaleString()}</p>
                </div>
                <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
</div>
  </>
    
  );
}