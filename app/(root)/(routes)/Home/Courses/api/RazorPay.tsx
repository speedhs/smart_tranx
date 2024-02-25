import cors from 'cors'
import express from "express"
import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

// Initialize Razorpay instance with your API key and secret
const razorpay = new Razorpay({
    key_id: 'rzp_live_TRaKMRdCPf9r3P',
    key_secret: 'Q19YemIjKrScuguyYrdgPBbN',
});

const app = express();
app.use(cors());
// const RazorpayIntegration = async () => {
//     console.log("button pressead")
// //   const createOrder = async () => {
//     const amount = 100; // Amount in paise (e.g., ₹1)
//     const currency = 'INR';
//     console.log("fine till here")
//     try {
//         console.log("entered try block")
//       const response = await axios.post('https://api.razorpay.com/v1/orders', {
//         amount,
//         currency,
//         receipt: 'receipt_order_74394', // You can generate your own unique receipt ID
//       }, {
//         auth: {
//           username: 'rzp_live_C7ayx7PaJJkARf',
//           password: '4BdgF5N5FitWBRBA6QwZrVwi',
//         },
//       });

//       console.log('Order created:', response.data);
//       // You can handle the response data here, like opening the payment modal provided by Razorpay
//     } catch (error) {
//     //   console.error('Error creating order:', error.response.data);
//       // Handle errors here
//       console.log("some errorrr")
//     }
//   };

//   return (
//     <div>
//       <button onClick={createOrder}>Pay Now</button>
//     </div>
//   );

// };


// Define a function to create an order
// const createOrder = async () => {
//     try {
//         const order = await razorpay.orders.create({
//             amount: 50000, // Amount in paisa (50000 = ₹500)
//             currency: 'INR',
//             receipt: 'order_rcptid_11',
//             payment_capture: true,
//         });

//         return order;
//     } catch (error) {
//         console.error('Error creating order:', error);
//         throw error;
//     }
// };

// // Example usage
// const main = async () => {
//     try {
//         const order = await createOrder();
//         console.log('Created order:', order);
//         // Store the order response in a variable or process it further
//     } catch (error) {
//         console.error(' Nahi ho paya Error:', error);
//     }
// };


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const order = await razorpay.orders.create({
                amount: 50000, // Amount in paisa (50000 = ₹500)
                currency: 'INR',
                receipt: 'order_rcptid_11',
                payment_capture: true,
            });
            res.status(200).json(order);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ error: 'Error creating order' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

// export dewfault main;