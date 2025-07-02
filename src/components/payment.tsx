import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function PaymentOptionsOverlay() {
  const [selected, setSelected] = useState("cod");
  const [confirmed, setConfirmed] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (confirmed) {
      const timer = setTimeout(() => {
        setShowThankYou(true);
      }, 2000); // 2 seconds for animation
      return () => clearTimeout(timer);
    }
  }, [confirmed]);

  if (showThankYou) {
    return (
      <BackgroundBeamsWithCollision>
        <div className="z-20 relative flex flex-col items-center justify-center w-full h-full min-h-[32rem] px-4">
          <div className="bg-[#1a2636] rounded-2xl shadow-2xl p-6 w-full max-w-sm flex flex-col items-center border border-[#25324a] transition-all duration-500">
            <span className="text-white text-xl font-semibold text-center">Thank you for ordering from us.<br/>We will send updates in email.</span>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    );
  }

  return (
    <BackgroundBeamsWithCollision>
      <div className="z-20 relative flex flex-col items-center justify-center w-full h-full min-h-[32rem] px-4">
        {/* Overlay animation when confirmed */}
        {confirmed && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <DotLottieReact
              src="https://lottie.host/020f0878-a50b-4658-a8a9-6a05fe1ee407/ciy6ttNvHa.lottie"
              loop={false}
              autoplay
              style={{ width: 180, height: 180 }}
            />
          </div>
        )}
        <div className="bg-[#1a2636] rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md flex flex-col items-center border border-[#25324a] transition-all duration-500">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Payment Options</h2>
          <p className="text-[#b0bed0] mb-6 sm:mb-8 text-center text-sm sm:text-base">Choose your preferred payment method to complete your order</p>
          <div className="space-y-3 sm:space-y-4 w-full">
            {/* Cash on Delivery Option */}
            <label className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selected === 'cod' ? 'border-green-400 bg-[#163024]' : 'border-[#25324a] bg-[#202e44]'}`}>  
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selected === 'cod'}
                onChange={() => setSelected('cod')}
                className="accent-green-400 w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className={`flex items-center justify-center rounded-full ${selected === 'cod' ? 'bg-green-700' : 'bg-[#22304a]'} w-8 h-8 sm:w-10 sm:h-10`}>
                {/* Truck Icon */}
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24"><path d="M3 13V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7m-13 0h13m-13 0v5a1 1 0 0 0 1 1h1m11-6h2.382a1 1 0 0 1 .894.553l1.382 2.764A1 1 0 0 1 21 15.236V18a1 1 0 0 1-1 1h-1m-2-6v5m-10 0a2 2 0 1 0 4 0m6 0a2 2 0 1 0 4 0m-10 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="flex flex-col flex-1 min-w-0">
                <span className="font-bold text-white text-sm sm:text-base">Cash on Delivery</span>
                <span className="text-[#7b8ca6] text-xs sm:text-sm">Pay when your order arrives</span>
              </span>
              <span className="bg-green-700 text-green-200 font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded whitespace-nowrap">Free</span>
            </label>
            {/* Online Payment Option */}
            <label className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selected === 'online' ? 'border-blue-400 bg-[#1a2336]' : 'border-[#25324a] bg-[#202e44]'}`}>  
              <input
                type="radio"
                name="payment"
                value="online"
                checked={selected === 'online'}
                onChange={() => setSelected('online')}
                className="accent-blue-400 w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className={`flex items-center justify-center rounded-full ${selected === 'online' ? 'bg-blue-700' : 'bg-[#22304a]'} w-8 h-8 sm:w-10 sm:h-10`}>
                {/* Card Icon */}
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="flex flex-col flex-1 min-w-0">
                <span className="font-bold text-white text-sm sm:text-base">Online Payment</span>
                <span className="text-[#7b8ca6] text-xs sm:text-sm">Pay securely with Razorpay</span>
              </span>
              <span className="bg-blue-700 text-blue-200 font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded whitespace-nowrap">Instant</span>
            </label>
          </div>
          <Button
            className="mt-6 sm:mt-8 w-full py-2.5 sm:py-3 text-base sm:text-lg font-bold rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300"
            onClick={() => setConfirmed(true)}
          >
            Confirm Order
          </Button>
          <p className="text-[#7b8ca6] text-xs mt-4 sm:mt-6 text-center">By confirming your order, you agree to our terms and conditions</p>
          {confirmed && (
            <div className="mt-4 sm:mt-6 text-center flex flex-col items-center opacity-0 pointer-events-none select-none">
              {/* Hide the old animation and text when overlay is active */}
              <span className="text-white text-lg sm:text-xl font-semibold">Order Confirmed!</span>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Thank you for your order.</p>
            </div>
          )}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}