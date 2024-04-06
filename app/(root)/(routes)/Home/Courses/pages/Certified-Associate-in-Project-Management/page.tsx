"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaCalendarAlt, FaRegIdBadge } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import Overview from "./components/Overview";
import Keyfeatures from "./components/Keyfeatures";
import Courseagenda from "./components/Courseagenda";
import Faq from "./components/Faq";
import Benifits_cards from "@/components/Benifits_cards";
import SheduleForm from "@/components/SheduleForm";
import { cn } from "@/lib/utils";
import Contactus_card from "@/components/Contactus_card";
import main from "../../api/RazorPay";
import axios from 'axios';
import Razorpay from "razorpay";

const Page = () => {
  const [order, setOrder] = useState<any>(null);
  const [order_id, setOrderId] = useState<any>("");
  const [amount, setAmount] = useState<any>(0);
  const [coursename, setCourseName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [prefillValues, setPrefillValues] = useState<any>({
    name: "",
    email: "",
    contact: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const sendEmail = async() => {
    try {
      setCourseName("PMP-ACP-Certification")
      const email = "cocattackbased@gmail.com"
      const response = await axios.post('http://localhost:8000/api/send-email', {
        coursename,
        email
      })
      console.log(response)

    } catch (error) {
      console.log("client mai error:", error)
    }
  }

  const createOrder = async () => {
      try {
          var amount = 1000
          var currency = "INR"
          var receipt = "receipt#1"
          const response = await axios.post('http://localhost:8000/api/create-order', {
              amount,
              currency,
              receipt
          });
          setAmount(response.data.amount)
          setOrderId(response.data.id)
          setOrder(response.data);
      } catch (error) {
          console.error('Error creating order:', error);
      }
  };

  const payment = async () => {
    try {
      var script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.head.appendChild(script);  
    console.log("script")
      var options = {
        "key": "rzp_live_TRaKMRdCPf9r3P", // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Smartranx", // Your business name
        "description": "Test Transaction",
        "image": "https://logos.flamingtext.com/Word-Logos/any-design-sketch-name.png",
        "order_id": order_id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `http://localhost:8000/api/handle-payment?${email}&${coursename}`,
        "prefill": { // We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": prefillValues.name, // Your customer's name
            "email": prefillValues.email,
            "contact": prefillValues.contact // Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
      };
      
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    createOrder()
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrefillValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment);

  const [selectedSection, setSelectedSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const handleSectionChange = (section: any) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffset = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY;

      setIsSticky(scrollPosition >= sectionOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto p-6">
      <div className="p-6">
        <div className="text-lg opacity-50">
          {pathSegments.map((segment, index) => (
            <span key={index}>
              {segment}
              {index < pathSegments.length - 1 && " > "}
            </span>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between mt-5 p-8">
          <div className="flex flex-col">
            <div className="h-auto max-w-[700px]  ">
            <h1 className="text-4xl font-extrabold">
                CAPM Certification Course
              </h1>
              <p className="font-medium text-lg opacity-90">
                The Certified Associate in Project Management (CAPM®) course provides participants with a fundamental understanding of PMBOK® Guide processes and knowledge areas. It helps individuals recognize the essential steps within a project's lifecycle and equips them with the skills to create a comprehensive project management plan, which encompasses the Project Charter, Scope Statement, and Work Breakdown Structure.
              </p>
            </div>
            <div className="flex flex-row mt-8 gap-x-7 p-2  ">
              <div className="flex gap-2 items-center ">
                <FaCalendarAlt className="w-10 h-10 opacity-80" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Duration</h1>
                  <h2>4 days</h2>
                </div>
              </div>
              <Separator orientation="vertical" className="font-black" />
              <div className="flex gap-2 items-center">
                <FaRegIdBadge className="w-10 h-10 opacity-80" />
                <div className="flex flex-col">
                  <h1 className="font-bold ">Speciality</h1>
                  <h2>One to One training</h2>
                </div>
              </div>  
            </div>
            <button className="w-auto max-w-44 h-auto bg-sky-400 mt-10 min-h-14 rounded-lg p-1" onClick={sendEmail}>
              <h1 className="text-xl font-normal">Schedule</h1>
            </button>
            <button className="w-auto max-w-44 h-auto bg-sky-400 mt-10 min-h-14 rounded-lg p-1" onClick={payment}>
              <h1 className="text-xl font-normal">Pay</h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 justify-center">
          <h1 className="text-4xl font-bold">
            Benifits of <span className="text-orange-500">Smart Tranx</span>
          </h1>
          <Benifits_cards />
        </div>
        <div className="sticky flex flex-col top-0 z-10 mt-14 bg-white">
          <NavBar
            selectedSection={selectedSection}
            onSectionChange={handleSectionChange}
          />
          <Separator className="mt-2 max-w-[1000px]" />
        </div>
        <div ref={sectionRef} className="flex ">
          <Section selectedSection={selectedSection} />
          <div
            ref={formRef}
            className={`fixed top-0 right-0 mt-14 ml-14 ${
              isSticky ? "relative" : "relative"
            }`}
          >
            <SheduleForm title="Change Management Certification training" duration="4 days" />
          </div>
        </div>
        <Contactus_card />
      </div>
      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" value={prefillValues.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" value={prefillValues.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="contact" className="block mb-2">Contact</label>
                <input type="text" id="contact" name="contact" value={prefillValues.contact} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="text-right">
                <button type="button" onClick={closeDialog} className="px-4 py-2 bg-sky-400 text-white rounded-md">Done</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const NavBar = ({ selectedSection, onSectionChange }: any) => {
  const sections = ["Overview", "Keyfeatures", "Courseagenda", "Faqs"];

  return (
    <div className="flex justify-between max-w-[1000px] px-4 py-2 bg-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`px-4 py-2 cursor-pointer ${
            selectedSection === section ? "text-orange-600" : "text-black"
          }`}
          onClick={() => onSectionChange(section)}
        >
          <h1 className="font-medium">{section}</h1>
        </div>
      ))}
    </div>
  );
};

const Section = ({ selectedSection }: any) => {
  const contentMap = {
    Overview: <Overview />,
    Keyfeatures: <Keyfeatures />,
    Courseagenda: <Courseagenda />,
    Faqs: <Faq />,
  };

  return (
    <div>
      {contentMap[selectedSection]}
    </div>
  );
};

export default Page;
