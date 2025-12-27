"use client";

export default function DeliveryFAQ() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              How soon can I start delivering?
            </h3>
            <p className="text-gray-600">
              Once you submit your application, we'll contact you within 24 hours. After completing the verification process and online orientation, you can start delivering immediately.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              When do I get paid?
            </h3>
            <p className="text-gray-600">
              We process payments weekly directly to your bank account. You can also opt for instant payouts for a small fee.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Is there any registration fee?
            </h3>
            <p className="text-gray-600">
              No, joining OLYYO as a delivery partner is completely free. We provide all necessary equipment at no cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}