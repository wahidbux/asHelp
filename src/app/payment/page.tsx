"use client";
import { Suspense } from 'react';
import { PaymentOptionsOverlay } from '@/components/payment';

function PaymentContent() {
  return <PaymentOptionsOverlay />;
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
