"use client";

import { useState } from "react";
import {
  User,
  PhoneIcon,
  Mail,
  MapPin,
  Smartphone,
  ExternalLink,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export default function DeliveryApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    vehicle: "",
    experience: "",
    referralCode: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create WhatsApp message with download links
    const message = `Hello ${formData.name}! Thank you for applying to become an OLYYO Delivery Partner.

📱 Download Links:
• Android App: https://play.google.com/store/apps/details?id=com.olyyo.delivery
• iOS App: https://apps.apple.com/app/olyyo-delivery-partner

📞 Contact Information:
• Support: +1-800-OLYYO-123
• Manager: Rajesh Kumar (+91-9876543210)
• Email: partners@olyyo.com

📍 Office Address:
OLYYO Headquarters, 123 Business Park,
New Delhi, India

Next Steps:
1. Download the app
2. Complete your profile
3. Attend online orientation
4. Start earning!

We'll contact you within 24 hours to complete the verification process.`;
    
    // Encode the message for WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Create SMS message (simplified version)
    const smsMessage = `Welcome ${formData.name}! Download OLYYO Delivery Partner App:
Android: https://play.google.com/store/apps/details?id=com.olyyo.delivery
iOS: https://apps.apple.com/app/olyyo-delivery-partner
Contact: +1-800-OLYYO-123`;
    const smsUrl = `sms:?body=${encodeURIComponent(smsMessage)}`;
    
    setSubmitted({
      whatsappUrl,
      smsUrl,
      contactInfo: {
        phone: "+1-800-OLYYO-123",
        whatsapp: "+91-9876543210",
        email: "partners@olyyo.com",
        manager: "Rajesh Kumar",
      }
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Application Submitted Successfully!
          </h3>
          <p className="text-gray-600">
            We've sent download links and contact information to your phone.
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-600">Support Number</div>
                  <div className="text-gray-900 font-medium">{submitted.contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm text-gray-600">Manager WhatsApp</div>
                  <div className="text-gray-900 font-medium">{submitted.contactInfo.whatsapp}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="text-gray-900 font-medium">{submitted.contactInfo.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Links */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Download App</h4>
            <div className="space-y-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.olyyo.delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-lg hover:bg-orange-500/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">Android App</div>
                    <div className="text-sm text-gray-600">Download from Play Store</div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500" />
              </a>
              
              <a
                href="https://apps.apple.com/app/olyyo-delivery-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-lg hover:bg-orange-500/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">iOS App</div>
                    <div className="text-sm text-gray-600">Download from App Store</div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Share Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={submitted.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Open in WhatsApp</span>
            </a>
            
            <a
              href={submitted.smsUrl}
              className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              <span>Send as SMS</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              placeholder="Enter your WhatsApp number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              placeholder="Enter your city"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type *
          </label>
          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="">Select Vehicle</option>
            <option value="bike">Motorcycle/Scooter</option>
            <option value="bicycle">Bicycle</option>
            <option value="car">Car</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Experience
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="">Select Experience</option>
            <option value="none">No Experience</option>
            <option value="less_than_1">Less than 1 year</option>
            <option value="1_3">1-3 years</option>
            <option value="3_plus">3+ years</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Referral Code (Optional)
        </label>
        <input
          type="text"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          placeholder="Enter referral code if any"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-200 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Apply Now & Get Download Links"
        )}
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        By applying, you agree to receive download links and contact information via WhatsApp/SMS
      </p>
    </form>
  );
}