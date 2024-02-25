// pages/api/create-order.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';


const razorpay = new Razorpay({
    key_id: 'rzp_live_TRaKMRdCPf9r3P',
    key_secret: 'Q19YemIjKrScuguyYrdgPBbN',
});

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
