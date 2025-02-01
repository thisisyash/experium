import React, { useState } from 'react';
import PaymentSuccess from '../components/PaymentSuccess';
import PaymentError from '../components/PaymentError';

const PaymentStatusHandler = () => {
  const [paymentSuccessOpen, setPaymentSuccessOpen] = useState(false);
  const [paymentErrorOpen, setPaymentErrorOpen] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccessOpen(true);
  };

  const handlePaymentError = () => {
    setPaymentErrorOpen(true);
  };

  const handleCloseSuccess = () => {
    setPaymentSuccessOpen(false);
  };

  const handleCloseError = () => {
    setPaymentErrorOpen(false);
  };

  return (
    <div>
      {/* Example payment status trigger */}
      <button onClick={handlePaymentSuccess}>Trigger Success</button>
      <button onClick={handlePaymentError}>Trigger Error</button>

      {/* Success and Error Snackbar components */}
      <PaymentSuccess open={paymentSuccessOpen} onClose={handleCloseSuccess} />
      <PaymentError open={paymentErrorOpen} onClose={handleCloseError} />
    </div>
  );
};

export default PaymentStatusHandler;
