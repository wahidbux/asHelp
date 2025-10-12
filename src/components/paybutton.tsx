import React, { useState } from 'react';
import { ChevronRight, CreditCard } from 'lucide-react';

interface PayButtonProps {
  amount?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const PayButton: React.FC<PayButtonProps> = ({
  amount = "99.99",
  onClick,
  disabled = false,
  loading = false,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`
          group relative flex items-center bg-white rounded-lg shadow-lg
          transition-all duration-300 ease-in-out overflow-hidden
          w-full
          ${isHovered ? 'scale-105 shadow-xl' : 'hover:shadow-xl'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          h-28 border border-gray-100
        `}
      >
        {/* Left Side - Card Animation */}
        <div className={`
          relative bg-gradient-to-br from-emerald-400 to-emerald-500 
          rounded-md flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${isHovered ? 'w-full' : 'w-32'}
          h-28 flex-shrink-0 overflow-hidden
        `}>
          {/* Credit Card */}
          <div className={`
            absolute bg-emerald-100 rounded-md shadow-lg
            flex flex-col items-center justify-center
            transition-all duration-1000 ease-out
            ${isHovered ? 'transform -translate-y-2 rotate-90 scale-90' : ''}
            w-16 h-11 z-10
          `}>
            <div className="w-14 h-3 bg-emerald-300 rounded-sm mb-1"></div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
          </div>

          {/* ATM/Terminal */}
          <div className={`
            absolute bg-gray-300 rounded-md overflow-hidden
            transition-all duration-1000 ease-out delay-500
            ${isHovered ? 'transform -translate-y-16' : 'transform translate-y-20'}
            w-14 h-18 z-20
          `}>
            <div className="w-12 h-2 bg-gray-600 mx-auto mt-2 rounded-sm"></div>
            <div className="w-12 h-2 bg-gray-500 mx-auto rounded-sm"></div>
            <div className="w-12 h-6 bg-white mx-auto mt-1 rounded-sm relative">
              <div className={`
                absolute inset-0 flex items-center justify-center
                text-emerald-600 font-bold text-sm
                transition-opacity duration-300 delay-1000
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}>
                ₹
              </div>
            </div>
            <div className="flex justify-center mt-1 space-x-px">
              <div className="w-3 h-3 bg-gray-500 transform rotate-90"></div>
              <div className="w-3 h-3 bg-gray-400 transform rotate-90"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Text and Arrow */}
        <div className={`
          flex items-center justify-between px-5 
          transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-0 w-0' : 'opacity-100 flex-1'}
          h-full
        `}>
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <span className="text-xl font-semibold text-gray-800 whitespace-nowrap">
              {loading ? 'Processing...' : 'Pay Now'}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-emerald-600">
              ${amount}
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
          </div>
        )}
      </button>
    </div>
  );
};

// Demo Component
const PayButtonDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Payment processed successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Modern Pay Button</h1>
          <p className="text-gray-600">Hover to see the animation effect</p>
        </div>
        
        <div className="space-y-6">
          <PayButton
            amount="99.99"
            onClick={handlePayment}
            loading={loading}
          />
          
          <PayButton
            amount="24.99"
            onClick={() => alert('Payment clicked!')}
          />
          
          <PayButton
            amount="149.99"
            disabled={true}
          />
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>• Hover over buttons to see animation</p>
          <p>• Click to trigger payment action</p>
          <p>• Disabled state shown in last button</p>
        </div>
      </div>
    </div>
  );
};

export { PayButton };
export default PayButtonDemo;