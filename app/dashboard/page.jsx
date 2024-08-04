'use client'

import React, { useState, useEffect } from 'react';
import { firestore } from './firebase.js';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import { PlusCircle, MinusCircle, Trash2, BarChart2 } from 'lucide-react';

function Tracker() {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [showChart, setShowChart] = useState(false);

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() });
    });
    setInventory(inventoryList);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const addItem = async (item, category) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity, category: existingCategory } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1, category: existingCategory });
    } else {
      await setDoc(docRef, { quantity: 1, category });
    }
    await updateInventory();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { ...docSnap.data(), quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const deleteItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    await deleteDoc(docRef);
    await updateInventory();
  };

  const getRandomColor = () => {
    const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
    <div style={{ minHeight: 'calc(100vh - (64px + 88px)' }} className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Inventory Tracker</h1>
          <div className="flex space-x-4 mb-8">
            <input
              type="text"
              placeholder="Item name"
              className="flex-1 p-2 border rounded"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              className="flex-1 p-2 border rounded"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              onClick={() => {
                if (itemName && itemCategory) {
                  addItem(itemName, itemCategory);
                  setItemName('');
                  setItemCategory('');
                }
              }}
            >
              Add Item
            </button>
          </div>
          <div className="space-y-4">
            {inventory.map(({ name, quantity, category }) => (
              <div
                key={name}
                className={`${getRandomColor()} p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <p className="text-gray-600">Category: {category}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => removeItem(name)} className="text-red-500 hover:text-red-700">
                      <MinusCircle />
                    </button>
                    <span className="text-xl font-bold">{quantity}</span>
                    <button onClick={() => addItem(name, category)} className="text-green-500 hover:text-green-700">
                      <PlusCircle />
                    </button>
                    <button onClick={() => deleteItem(name)} className="text-gray-500 hover:text-gray-700">
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <button
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
            onClick={() => setShowChart(!showChart)}
          >
            <BarChart2 className="mr-2" />
            {showChart ? 'Hide' : 'Show'} Inventory Chart
          </button>
        </div>
        {showChart && (
          <div className="p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Inventory Distribution</h2>
            <div className="h-64 flex items-baseline space-x-2">
              {inventory.map(({ name, quantity }) => (
                <div key={name} className="h-full flex flex-col items-center">
                  <div
                    className="bg-indigo-500 w-16 rounded-t"
                    style={{ height: `${(quantity / Math.max(...inventory.map(item => item.quantity))) * 100}%` }}
                  ></div>
                  <span className="text-xs mt-2">{name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Tracker;