"use client";

import { PaymentDetailInterface } from "@/types/interface";
import Image from "next/image";
import React from "react";

// Define the types for the props

interface PackagePaymentMethodsProps {
  payments: {
    payment_gateway?: PaymentDetailInterface[];
    bank_transfer?: PaymentDetailInterface[];
    cash?: PaymentDetailInterface[];
  };
  selectedPaymentMethod: number | null;
  onPaymentMethodChange: (metodeId: number) => void;
}

const PaymentMethods: React.FC<PackagePaymentMethodsProps> = ({
  payments,
  selectedPaymentMethod,
  onPaymentMethodChange,
}) => {
  const handleRadioChange = (metodeId: number) => {
    onPaymentMethodChange(metodeId);
  };

  const pembayarans = [
    {
      id: 1,
      name: "Payment Gateway",
      options: payments?.payment_gateway,
    },
    {
      id: 2,
      name: "Transfer Bank",
      options: payments?.bank_transfer,
    },
    // {
    //   id: 3,
    //   name: "Cash",
    //   options: payments?.cash,
    // },
  ];

  return (
    <div className="payment-methods border rounded-lg p-4">
      {pembayarans.map((method) => (
        <div key={method.id} className="payment-method mb-4">
          <label
            htmlFor={`payment-option-${method.id}`}
            className="flex items-center p-4 cursor-pointer border rounded-lg hover:border-purple-500">
            <input
              type="radio"
              id={`payment-option-${method.id}`}
              name="payment-method"
              value={method.id}
              checked={selectedPaymentMethod === method.id}
              onChange={() => handleRadioChange(method.id)}
              className="mr-4"
            />
            <span className="flex-1">{method.name}</span>
            <div className="flex items-center space-x-2">
              {method.options?.map((option) => (
                <Image
                  key={option.id}
                  src={option.img}
                  alt={option.keterangan}
                  className="h-6 w-6"
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
