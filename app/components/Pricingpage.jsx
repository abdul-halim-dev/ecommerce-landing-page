"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";
import { motion } from "framer-motion";

const SECRET_KEY = "my-super-secret-key-123";

const productsData = [
  { id: 1, name: "Sea Green x 1", price: 720, img: "/image1.jpg" },
  { id: 2, name: "Jam Color", price: 560, img: "/image2.jpg" },
  { id: 3, name: "White Color xxl", price: 500, img: "/image3.jpg" },
  { id: 4, name: "Olive Color", price: 630, img: "/image4.jpg" },
  { id: 5, name: "Marron Color", price: 700, img: "/image5-1.webp" },
  { id: 6, name: "Black Color M", price: 800, img: "/image6-1.webp" },
  { id: 7, name: "Ash Color", price: 680, img: "/image7.jpg" },
  { id: 8, name: "Navy Blue Color", price: 750, img: "/image8.jpg" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [shipping, setShipping] = useState(0);
  const [billing, setBilling] = useState({ name: "", phone: "", address: "", size: "" });
  const [errors, setErrors] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // Load saved encrypted data
  useEffect(() => {
    const saved = localStorage.getItem("order");
    if (saved) {
      try {
        const bytes = CryptoJS.AES.decrypt(saved, SECRET_KEY);
        const decryptedOrder = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        setBilling(decryptedOrder.customer || {});
        setSelected(decryptedOrder.products?.map((p) => p.id) || []);
        const qtyObj = {};
        decryptedOrder.products?.forEach((p) => {
          qtyObj[p.id] = p.qty || 1;
        });
        setQuantities(qtyObj);

        if (decryptedOrder.shipping !== undefined && decryptedOrder.shipping !== null) {
          setShipping(decryptedOrder.shipping);
        }
      } catch (err) {
        console.error("Failed to decrypt saved order:", err);
      }
    }
  }, []);

  // Recalculate subtotal and total
  useEffect(() => {
    const newSubtotal = selected.reduce((acc, id) => {
      const product = productsData.find((p) => p.id === id);
      if (!product) return acc;
      const qty = quantities[id] || 1;
      return acc + product.price * qty;
    }, 0);

    const totalQty = Object.values(quantities).reduce((acc, q) => acc + q, 0);
    const newShipping = totalQty >= 3 ? 0 : shipping || 100; // free delivery if 3+
    setShipping(newShipping);

    setSubtotal(newSubtotal);
    setTotal(newSubtotal + newShipping);
  }, [selected, quantities, shipping]);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
      const updated = { ...quantities };
      delete updated[id];
      setQuantities(updated);
    } else {
      setSelected([...selected, id]);
      setQuantities({ ...quantities, [id]: 1 });
    }
  };

  const handleQuantity = (id, type) => {
    setQuantities((prev) => {
      const updatedQty = Math.max(1, type === "inc" ? (prev[id] || 1) + 1 : (prev[id] || 1) - 1);
      return { ...prev, [id]: updatedQty };
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!billing.name) newErrors.name = "আপনার নাম লিখতে হবে।";
    if (!billing.phone) newErrors.phone = "মোবাইল নাম্বার লিখতে হবে।";
    else if (!/^01[0-9]{9}$/.test(billing.phone)) newErrors.phone = "সঠিক মোবাইল নাম্বার লিখুন (১১ সংখ্যা)।";
    if (!billing.address) newErrors.address = "আপনার ঠিকানা লিখতে হবে।";
    if (!billing.size) newErrors.size = "একটি সাইজ নির্বাচন করুন।";
    if (selected.length === 0) newErrors.product = "কমপক্ষে একটি প্রোডাক্ট নির্বাচন করুন।";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const order = {
        id: Math.floor(Math.random() * 9000 + 1000),
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
        customer: billing,
        products: selected.map((id) => {
          const product = productsData.find((p) => p.id === id);
          return product ? { ...product, qty: quantities[id] || 1 } : null;
        }).filter(Boolean),
        payment: "Cash on delivery",
        shipping,
        subtotal,
        total,
      };

      const encryptedOrder = CryptoJS.AES.encrypt(JSON.stringify(order), SECRET_KEY).toString();
      localStorage.setItem("order", encryptedOrder);

      router.push("/order-success");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="w-full flex flex-col gap-8  ">
      <h3 className="w-full mb-2 font-semibold">পছন্দের শার্ট গুলো সিলেক্ট করুন:</h3>

      {/* Products */}
      <div className="flex flex-wrap gap-3 justify-center">
        {productsData.map((product, index) => {
          const qty = quantities[product.id] || 1;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 150 }}
              className={`flex shadow items-center gap-3 border rounded-lg p-2 sm:p-4 w-full md:w-[49%] ${selected.includes(product.id) ? "border-orange-500" : "border-gray-300"}`}
            >
              <input type="checkbox" checked={selected.includes(product.id)} onChange={() => handleSelect(product.id)} />
              <img src={product.img} alt={product.name} className="w-16 h-16 object-cover" />
              <div className="flex flex-col">
                <p className="text-black text-[16px] font-semibold">{product.name}</p>
                <p>{product.price * qty}৳</p>
                {selected.includes(product.id) && (
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 border" onClick={() => handleQuantity(product.id, "dec")}>-</button>
                    <span>{qty}</span>
                    <button className="px-2 border" onClick={() => handleQuantity(product.id, "inc")}>+</button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Billing + Order Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full flex flex-col md:flex-row items-start gap-5 ">
        {/* Billing */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full md:w-[50%] flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-3">Billing details</h2>
          <input type="text" placeholder="আপনার নাম লিখুন" className="w-full border p-2 rounded" value={billing.name} onChange={(e) => setBilling({ ...billing, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input type="text" placeholder="আপনার মোবাইল নাম্বার লিখুন" className="w-full border p-2 rounded" value={billing.phone} onChange={(e) => setBilling({ ...billing, phone: e.target.value })} />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input type="text" placeholder="আপনার ঠিকানা লিখুন" className="w-full border p-2 rounded" value={billing.address} onChange={(e) => setBilling({ ...billing, address: e.target.value })} />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <div>
            <p className="mb-2 font-semibold">PRODUCT SIZE *</p>
            <div className="flex gap-2">
              {["M", "L", "XL", "XXL", "3XL"].map((size) => (
                <button key={size} onClick={() => setBilling({ ...billing, size })} className={`px-3 py-[2px] border rounded ${billing.size === size ? "bg-orange-500 text-white" : "bg-white"}`}>{size}</button>
              ))}
            </div>
            {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-full md:w-[50%] border p-2 sm:p-4 rounded-lg flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-3">Your order</h2>
          {selected.map((id) => {
            const product = productsData.find((p) => p.id === id);
            const qty = quantities[id] || 1;
            if (!product) return null;
            return (
              <motion.div key={id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: id * 0.05 }} className="flex justify-between">
                <p>{product.name} × {qty}</p>
                <p>{product.price * qty}৳</p>
              </motion.div>
            );
          })}
          {errors.product && <p className="text-red-500 text-sm">{errors.product}</p>}

          <hr className="my-2" />
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{subtotal}৳</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="block">
              <input type="radio" checked={shipping === 0} onChange={() => setShipping(0)} /> Free Delivery
            </label>
            <label className="block">
              <input type="radio" checked={shipping === 100} onChange={() => setShipping(100)} /> ঢাকার ভিতরে: 100৳
            </label>
            <label className="block">
              <input type="radio" checked={shipping === 70} onChange={() => setShipping(70)} /> ঢাকার বাইরে: 70৳
            </label>
          </div>

          <div className="flex justify-between mt-2 font-semibold">
            <p>Total</p>
            <p>{total}৳</p>
          </div>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit} className="w-full bg-orange-500 text-white py-3 rounded mt-4 font-bold">
            Place Order {total}৳
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
