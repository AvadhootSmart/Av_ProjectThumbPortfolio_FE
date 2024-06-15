
import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What services do you offer as a freelance thumbnail designer?",
      answer:
        "I specialize in creating custom thumbnails for YouTube videos, social media posts, blog articles, and other online content. My services include designing eye-catching and engaging thumbnails tailored to your brand and audience.",
    },
    {
      question: "What information do you need from me to create a thumbnail?",
      answer:
        "To create a thumbnail, I need the title of your video or content, any specific text or phrases you want included, high-quality images or screenshots, your branding guidelines (colors, fonts, logos), and any preferences or examples of styles you like.",
    },
    {
      question: "How long does it take to create a thumbnail?",
      answer:
        "The turnaround time for a thumbnail depends on the complexity of the design and my current workload. Typically, I can deliver a thumbnail within 24-48 hours. For bulk orders or more detailed designs, it may take a bit longer.",
    },
    {
      question: "Can I request revisions to the thumbnail design?",
      answer:
        "Yes, I offer revisions to ensure you are completely satisfied with the final design. The number of revisions included depends on the package you choose. Additional revisions can be requested for an extra fee.",
    },
    {
      question: "What are your rates for thumbnail design?",
      answer:
        "My rates vary depending on the complexity and quantity of thumbnails. I offer different packages to suit various needs, from single thumbnail designs to bulk orders. Please refer to my pricing page or contact me for a detailed quote.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You will receive the final thumbnail in high-resolution JPEG or PNG format, optimized for the platform you will be using it on. If needed, I can also provide the source file (PSD or AI) for an additional fee.",
    },
    {
      question: "How do I make a payment?",
      answer:
        "I accept payments through UPI(For Indian Clients), credit card, and bank transfers. Payment terms will be discussed and agreed upon before starting the project. For new clients, a deposit may be required upfront.",
    },
    {
      question: "What if I don't like the final design?",
      answer:
        "Client satisfaction is my top priority. If you are not happy with the final design, I will work with you to make the necessary adjustments. If we are still unable to achieve a satisfactory result, we can discuss alternative solutions or a refund based on the terms agreed upon.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 font-bebas">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 max-w-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition">
            <button
              className="w-full text-left p-6 font-semibold text-xl font-[Montserrat] focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 text-gray-400">
                <p>{'>>'} {faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
