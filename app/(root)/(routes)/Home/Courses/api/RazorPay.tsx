import React from 'react';
import axios from 'axios';
import cors from 'cors'

const RazorpayIntegration = async () => {
    console.log("button pressead")
//   const createOrder = async () => {
    const amount = 100; // Amount in paise (e.g., ₹1)
    const currency = 'INR';
    console.log("fine till here")
    try {
        console.log("entered try block")
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://api.razorpay.com/v1/orders', {
        amount,
        currency,
        receipt: 'receipt_order_74394', // You can generate your own unique receipt ID
      }, {
        auth: {
          username: 'rzp_live_C7ayx7PaJJkARf',
          password: '4BdgF5N5FitWBRBA6QwZrVwi',
        },
      });

      console.log('Order created:', response.data);
      // You can handle the response data here, like opening the payment modal provided by Razorpay
    } catch (error) {
    //   console.error('Error creating order:', error.response.data);
      // Handle errors here
      console.log("some error")
    }
  };

//   return (
//     <div>
//       <button onClick={createOrder}>Pay Now</button>
//     </div>
//   );

// };

export default RazorpayIntegration;
