import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";

export function PaymentOptionsOverlay() {
  const [selected, setSelected] = useState("cod");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <BackgroundBeamsWithCollision>
      <div className="z-20 relative flex flex-col items-center justify-center w-full h-full min-h-[32rem]">
        <div className="bg-[#1a2636] rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center border border-[#25324a] transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Payment Options</h2>
          <p className="text-[#b0bed0] mb-8 text-center text-base">Choose your preferred payment method to complete your order</p>
          <div className="space-y-4 w-full">
            {/* Cash on Delivery Option */}
            <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selected === 'cod' ? 'border-green-400 bg-[#163024]' : 'border-[#25324a] bg-[#202e44]'}`}>  
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selected === 'cod'}
                onChange={() => setSelected('cod')}
                className="accent-green-400 w-5 h-5"
              />
              <span className={`flex items-center justify-center rounded-full ${selected === 'cod' ? 'bg-green-700' : 'bg-[#22304a]'} w-10 h-10`}>
                {/* Truck Icon */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-green-300"><path d="M3 13V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7m-13 0h13m-13 0v5a1 1 0 0 0 1 1h1m11-6h2.382a1 1 0 0 1 .894.553l1.382 2.764A1 1 0 0 1 21 15.236V18a1 1 0 0 1-1 1h-1m-2-6v5m-10 0a2 2 0 1 0 4 0m6 0a2 2 0 1 0 4 0m-10 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="flex flex-col flex-1">
                <span className="font-bold text-white text-base">Cash on Delivery</span>
                <span className="text-[#7b8ca6] text-sm">Pay when your order arrives</span>
              </span>
              <span className="bg-green-700 text-green-200 font-bold text-base px-4 py-1 rounded">Free</span>
            </label>
            {/* Online Payment Option */}
            <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selected === 'online' ? 'border-blue-400 bg-[#1a2336]' : 'border-[#25324a] bg-[#202e44]'}`}>  
              <input
                type="radio"
                name="payment"
                value="online"
                checked={selected === 'online'}
                onChange={() => setSelected('online')}
                className="accent-blue-400 w-5 h-5"
              />
              <span className={`flex items-center justify-center rounded-full ${selected === 'online' ? 'bg-blue-700' : 'bg-[#22304a]'} w-10 h-10`}>
                {/* Card Icon */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-blue-300"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="flex flex-col flex-1">
                <span className="font-bold text-white text-base">Online Payment</span>
                <span className="text-[#7b8ca6] text-sm">Pay securely with Razorpay</span>
              </span>
              <span className="bg-blue-700 text-blue-200 font-bold text-base px-4 py-1 rounded">Instant</span>
            </label>
          </div>
          <Button
            className="mt-8 w-full py-3 text-lg font-bold rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300"
            onClick={() => setConfirmed(true)}
          >
            Confirm Order
          </Button>
          <p className="text-[#7b8ca6] text-xs mt-6 text-center">By confirming your order, you agree to our terms and conditions</p>
          {confirmed && (
            <div className="mt-6 text-center">
              <span className="text-white text-xl font-semibold">Order Confirmed!</span>
              <p className="text-gray-400 mt-2">Thank you for your order.</p>
            </div>
          )}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
