const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");

const sendTestEmail = async (req, res) => {
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('/api/reset-password', { email });
  //     const transporter = node.createTransport({
  //       service: 'gmail',
  //       auth: {
  //         user: process.env.GMAIL_USERNAME,
  //         pass: process.env.GMAIL_PASSWORD,
  //       },
  //     });
  //     const mailOptions = {
  //       from: 'your-email@example.com',
  //       to: email,
  //       subject: 'Password Reset',
  //       html: `Click <a href="${response.data.resetUrl}">here</a> to reset your password.`,
  //     };
  //     transporter.sendMail(mailOptions, (error) => {
  //       if (error) {
  //         console.log(error);
  //         setMessage('An error occurred while sending the email.');
  //       } else {
  //         console.log('Email sent successfully');
  //         setMessage('An email has been sent with instructions to reset your password.');
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setMessage('An error occurred while resetting your password.');
  //   }
  // };
  const { coursename, email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: "ayushagrawal0529@gmail.com",
      to: email,
      subject: "Smartranx Course Purchased",
      html: `Congrats on purchasing: ${coursename}`,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        //setMessage('An error occurred while sending the email.');
      } else {
        console.log("Email sent successfully");
        //setMessage('An email has been sent with instructions to reset your password.');
      }
    });
    res.status(200).send("Sent succesfully");
  } catch (error) {
    console.log(error);
    res.send("error occurred mail nahi gaya");
  }
};

const createOrder = async (req, res) => {
  console.log("server ka createorder chal gaya");
  var instance = new Razorpay({
    key_id: "rzp_live_TRaKMRdCPf9r3P",
    key_secret: "Q19YemIjKrScuguyYrdgPBbN",
  });

  try {
    console.log("eneter server try");
    const { amount, currency, receipt } = req.body;

    var resp = await instance.orders.create({
      amount: amount,
      currency: currency,
      receipt: receipt,
    });
    console.log(resp.id);
    res.status(200).json(resp);
    console.log("wait chal raha");
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Error creating order" });
  }
};

const handlePayment = async (req, res) => {
  try {
    const { email, coursename } = req.params;
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    const payment_sucess = {
      razorpay_payment_id: razorpay_payment_id,
      razorpay_order_id: razorpay_order_id,
      razorpay_signature: razorpay_signature,
    };

    res.status(200).json(payment_sucess);
  } catch (error) {}
};

module.exports = { sendTestEmail, createOrder, handlePayment };
