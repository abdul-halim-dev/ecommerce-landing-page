"use client";

import { useEffect, useState, useRef } from "react";
import CryptoJS from "crypto-js";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import { FaHome, FaPhone, FaUser } from "react-icons/fa";

const SECRET_KEY = "my-super-secret-key-123";

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);
  const invoiceRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("order");
    if (saved) {
      try {
        const bytes = CryptoJS.AES.decrypt(saved, SECRET_KEY);
        const decryptedOrder = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setOrder(decryptedOrder);
      } catch (err) {
        console.error("Failed to decrypt order:", err);
      }
    }
  }, []);

  const handlePrint = () => {
    if (invoiceRef.current) {
      const printContent = invoiceRef.current.innerHTML;
      const win = window.open("", "_blank");
      win.document.write(`<html><head><title>Invoice</title>
      <style>body{font-family:sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{padding:8px;border:1px solid #ccc;text-align:left;}th{text-align:left;background:#f0f0f0;}</style>
      </head><body>${printContent}</body></html>`);
      win.document.close();
      win.print();
    }
  };

  const handleDownload = () => {
    if (!order) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Invoice", 14, 22);

    doc.setFontSize(12);
    doc.text(`Order Number: ${order.id}`, 14, 32);
    doc.text(`Date: ${order.date}`, 14, 40);
    doc.text(`Payment Method: ${order.payment}`, 14, 48);

    let y = 60;
    doc.text("Products:", 14, y);
    order.products.forEach((p) => {
      y += 8;
      doc.text(`${p.name} × ${p.qty || 1} = ${p.price * (p.qty || 1)}৳`, 14, y);
    });

    y += 8;
    doc.text(`Subtotal: ${order.subtotal}৳`, 14, y);
    y += 8;
    doc.text(`Shipping: ${order.shipping}৳`, 14, y);
    y += 8;
    doc.text(`Total: ${order.total}৳`, 14, y);

    y += 12;
    doc.text("Billing Details:", 14, y);
    y += 8;
    doc.text(`Name: ${order.customer.name}`, 14, y);
    y += 8;
    doc.text(`Phone: ${order.customer.phone}`, 14, y);
    y += 8;
    doc.text(`Address: ${order.customer.address}`, 14, y);
    y += 8;
    doc.text(`Size: ${order.customer.size}`, 14, y);

    doc.save(`invoice-${order.id}.pdf`);
  };

  if (!order) return <p className="text-center mt-10">লোড হচ্ছে...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6 py-7 sm:py-10 bg-white shadow-md rounded-lg mt-6"
    >
      <div ref={invoiceRef} className="space-y-6">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-4"
        >
          <div className="w-17 sm:w-20 h-17 sm:h-20 bg-green-500 rounded-full flex items-center justify-center">
            <motion.span
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-white text-5xl"
            >
              ✔
            </motion.span>
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-2"
        >
          <h1 className="text-2xl font-bold text-gray-800">ধন্যবাদ</h1>
          <h2 className="text-lg font-semibold text-red-600">আপনার অর্ডার টি সম্পূর্ণ হয়েছে</h2>
          <p className="text-gray-600">আমাদের একজন প্রতিনিধি আপনার সাথে যোগাযোগ করবে।</p>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-100 p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Order number:</p>
              <p>{order.id}</p>
            </div>
            <div>
              <p className="font-semibold">Date:</p>
              <p>{order.date}</p>
            </div>
            <div>
              <p className="font-semibold">Total:</p>
              <p>{order.total}৳</p>
            </div>
            <div>
              <p className="font-semibold">Payment method:</p>
              <p>{order.payment}</p>
            </div>
          </div>
        </motion.div>

        {/* Order Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-bold mb-3">Order details</h3>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm min-w-[400px]">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-3 text-left">Product</th>
                  <th className="py-2 px-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((p, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 px-3">{p.name} × {p.qty || 1}</td>
                    <td className="py-2 px-3 text-right">{p.price * (p.qty || 1)}৳</td>
                  </tr>
                ))}
                <tr className="border-t">
                  <td className="py-2 px-3 font-semibold">Subtotal:</td>
                  <td className="py-2 px-3 text-right">{order.subtotal}৳</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-3 font-semibold">Shipping:</td>
                  <td className="py-2 px-3 text-right">{order.shipping}৳</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-2 px-3 font-bold">Total:</td>
                  <td className="py-2 px-3 text-right font-bold">{order.total}৳</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Billing Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4"
        >
          <h3 className="font-bold mb-2">Billing details</h3>
          <div className="flex flex-col gap-2 items-start justify-start text-sm">
            <p className="flex items-center justify-center gap-2"> <FaUser className="text-active "/> {order.customer.name}</p>
            <p className="flex items-center justify-center gap-2"> <FaPhone className="text-active " /> {order.customer.phone}</p>
            <p className="flex items-center justify-center gap-2"> <FaHome className="text-active " /> {order.customer.address}</p>
            <p className="flex items-center justify-center gap-2">📏 Size: {order.customer.size}</p>
          </div>
        </motion.div>
      </div>

      {/* Print & Download Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
      >
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Print Invoice
        </button>
        <button
          onClick={handleDownload}
          className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Download Invoice
        </button>
      </motion.div>
    </motion.div>
  );
}
