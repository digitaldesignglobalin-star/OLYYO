"use client";

import Navbar from "@/components/home/Navbar";
import DeliveryHeroSection from "@/components/delivery/DeliveryHeroSection";
import DeliveryBenefits from "@/components/delivery/DeliveryBenefits";
import DeliveryRequirements from "@/components/delivery/DeliveryRequirements";
import DeliveryEarnings from "@/components/delivery/DeliveryEarnings";
import DeliveryApplicationForm from "@/components/delivery/DeliveryApplicationForm";
import DeliveryFAQ from "@/components/delivery/DeliveryFAQ";
import DeliveryFooter from "@/components/delivery/DeliveryFooter";

export default function DeliveryPartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <DeliveryHeroSection />

      {/* Benefits Section */}
      <DeliveryBenefits />

      {/* Requirements Section */}
      <DeliveryRequirements />

      {/* Earnings Calculator */}
      <DeliveryEarnings />

      {/* Application Form */}
      <div id="applyForm" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply Now in 2 Minutes
            </h2>
            <p className="text-gray-600">
              Fill the form and get instant access to download links and contact information
            </p>
          </div>

          <DeliveryApplicationForm />
        </div>
      </div>

      {/* FAQ Section */}
      <DeliveryFAQ />

      {/* Footer */}
      <DeliveryFooter />
    </div>
  );
}