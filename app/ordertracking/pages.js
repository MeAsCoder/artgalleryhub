import React from 'react';
import Link from 'next/link';

const OrderHistory = () => {
    const orders = [
        {
            orderNumber: "WU88191111",
            datePlaced: "January 22, 2021",
            totalAmount: "$302.00",
            items: [
                {
                    name: "Nomad Tumbler",
                    description: "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
                    price: "$35.00",
                    status: "Out for delivery",
                    image: "https://via.placeholder.com/100", // Placeholder image
                },
                {
                    name: "Leather Long Wallet",
                    description: "We're not sure who carries cash anymore, but this leather long wallet will keep those bills nice and fold-free. The cashier hasn't seen print money in years, but you'll make a damn fine impression with your pristine cash monies.",
                    price: "$118.00",
                    status: "Delivered on January 25, 2021",
                    image: "https://via.placeholder.com/100", // Placeholder image
                },
                {
                    name: "Minimalist Wristwatch",
                    description: "This contemporary wristwatch has a clean, minimalist look and high quality components. Everyone knows you'll never use it to check the time, but wow, does that wrist look good with this timepiece on it.",
                    price: "$149.00",
                    status: "Delivered on January 25, 2021",
                    image: "https://via.placeholder.com/100", // Placeholder image
                },
            ],
        },
        // You can add more orders here
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Order History</h1>
            <p className="mb-4">Check the status of recent orders, manage returns, and download invoices.</p>

            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            {orders.map((order) => (
                <div key={order.orderNumber} className="bg-white shadow rounded-lg p-4 mb-4">
                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="font-semibold">Order placed on {order.datePlaced}</p>
                            <p className="text-sm">Order number: <span className="font-semibold">{order.orderNumber}</span></p>
                            <p className="text-sm">Total amount: <span className="font-semibold">{order.totalAmount}</span></p>
                        </div>
                        <div className="flex items-center">
                            <Link href={`/order/${order.orderNumber}`} className="text-rose-400 mr-4">View Order</Link>
                            <Link href={`/invoice/${order.orderNumber}`} className="text-rose-400">View Invoice for order {order.orderNumber}</Link>
                        </div>
                    </div>

                    {order.items.map((item) => (
                        <div key={item.name} className="flex items-start mb-4 border-t pt-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover mr-4" />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-700">{item.description}</p>
                                <p className="font-semibold mt-2">{item.price}</p>
                                <p className={`text-sm mt-1 ${item.status.includes("Delivered") ? "text-green-500" : "text-yellow-500"}`}>{item.status}</p>
                            </div>
                            <div className="flex flex-col ml-4">
                                <Link href={`/product/${item.name}`} className="text-rose-400 mb-2">View Product</Link>
                                <button className="bg-rose-400 text-white py-1 px-2 rounded">Buy Again</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
