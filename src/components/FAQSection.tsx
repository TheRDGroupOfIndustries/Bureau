"use client";

import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const faqs = [
    {
        question: "How much money do I need to start trading?",
        answer:
            "You can start with as little as ₹5,000 for learning purposes. However, to see significant returns and manage risk effectively, a capital of ₹25,000 to ₹50,000 is recommended for beginners.",
    },
    {
        question: "Do I need a laptop for trading?",
        answer:
            "While a laptop or desktop is recommended for proper chart analysis and faster execution, you can start learning and taking basic trades using a smartphone app provided by your broker.",
    },
    {
        question: "Is stock market trading risky?",
        answer:
            "Yes, all financial trading involves risk. However, with proper knowledge, risk management strategies (like Stop Loss), and discipline, you can minimize losses and become a profitable trader.",
    },
    {
        question: "How long does it take to learn trading?",
        answer:
            "It depends on your dedication. You can understand the basics in 1-2 months, but becoming a consistently profitable trader typically takes 6-12 months of practice and experience.",
    },
    {
        question: "Do you provide calls or tips?",
        answer:
            "We focus on education and empowering you to take your own trades. While we analyze market setups for learning purposes, we encourage you to learn the logic behind every trade rather than blindly following tips.",
    },
    // Merged FAQs from separate page
    {
        question: "What do you do?",
        answer: "Stock Bureau India provides stock market consulting, investment advisory guidance, and educational services to help you navigate the financial markets."
    },
    {
        question: "Who can invest with you?",
        answer: "Our services are designed for everyone — complete beginners, working professionals, business owners, and seasoned investors looking for long-term growth."
    },
    {
        question: "How are strategies made?",
        answer: "Our strategies are customized based on thorough market research, individual risk profiles, financial goals, and time horizons."
    },
    {
        question: "Do you guarantee returns?",
        answer: "No. Stock market investments are subject to market risks, and no one can guarantee fixed returns. We focus on risk management and consistent long-term growth."
    },
    {
        question: "Long-term investing or trading?",
        answer: "We offer guidance for both. We help you build long-term wealth through investing while also teaching risk-managed trading strategies for short-term opportunities."
    },
    {
        question: "Can you review my portfolio?",
        answer: "Yes, we offer portfolio review and optimization services to help you identify underperforming assets and rebalance your investments."
    },
    {
        question: "How do I start?",
        answer: "Simply book a consultation with us. We will assess your financial goals and guide you on the best path forward."
    },
    {
        question: "Is it beginner-friendly?",
        answer: "Absolutely. We simplify complex market concepts and guide you step-by-step, making it easy for beginners to start their investment journey."
    },
    {
        question: "Is my data safe?",
        answer: "Yes, we maintain strict client confidentiality. Your personal and financial data is never shared with third parties."
    },
    {
        question: "Is online consultation available?",
        answer: "Yes, we provide both online (video/voice call) and offline consultations to suit your convenience."
    },
    {
        question: "Do I need a demat account?",
        answer: "Yes, a Demat and Trading account is mandatory to invest or trade in the Indian stock market."
    },
    {
        question: "Are you SEBI registered?",
        answer: "We act as investment consultants and educators. All regulatory details and disclosures are shared transparently with clients where applicable."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Got questions? We've got answers to help you get started.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                <span className="text-[#15803d] text-2xl flex-shrink-0 ml-4">
                                    {openIndex === index ? (
                                        <RiArrowUpSLine />
                                    ) : (
                                        <RiArrowDownSLine />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
