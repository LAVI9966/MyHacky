'use client';
import React from 'react';

const demoData = [
    {
        _id: '6808c7c8d63c2bf357220bc4',
        name: 'gaurav',
        email: 'gsoni5380@gmail.com',
        purchasedItemsCount: 1,
        purchasedItems: [
            {
                product: '68011b6accf2202a9b393f5c',
                quantity: 1,
                purchaseDate: '2025-04-23T10:58:15.768Z',
            },
        ],
    },
];

const AllUsers = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10 bg-white text-black">
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full text-sm text-left border border-gray-300">
                    <thead className="bg-gray-100 text-black uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3 border-b">Name</th>
                            <th className="px-4 py-3 border-b">Email</th>
                            <th className="px-4 py-3 border-b">Items Count</th>
                            <th className="px-4 py-3 border-b">Purchased Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoData.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3 border-b font-medium">{user.name}</td>
                                <td className="px-4 py-3 border-b">{user.email}</td>
                                <td className="px-4 py-3 border-b text-center">
                                    {user.purchasedItemsCount}
                                </td>
                                <td className="px-4 py-3 border-b">
                                    <ul className="space-y-1">
                                        {user.purchasedItems.map((item, index) => (
                                            <li key={index}>
                                                <div>
                                                    <strong>Product:</strong> {item.product}
                                                </div>
                                                <div>
                                                    <strong>Qty:</strong> {item.quantity}
                                                </div>
                                                <div>
                                                    <strong>Date:</strong>{' '}
                                                    {new Date(item.purchaseDate).toLocaleDateString()}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
