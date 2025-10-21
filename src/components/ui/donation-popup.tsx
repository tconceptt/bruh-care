'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationOptions = [
  {
    id: 'cbe',
    name: 'CBE Mobile Banking',
    logo: '/cbe-logo.svg',
    accountNumber: '1000252358898',
    accountHolder: 'Edget Wsnenet Maekel',
    description: 'Commercial Bank of Ethiopia'
  },
  {
    id: 'telebirr',
    name: 'Telebirr',
    logo: '/telebirr-logo.svg',
    accountNumber: '+251911186118',
    accountHolder: 'Nardos Assefa',
    description: 'Mobile Money Transfer'
  }
];

export const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-white via-[rgba(77,190,158,0.03)] to-[rgba(254,190,41,0.04)] border-b border-gray-200/60 p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(77,190,158,0.08),_transparent_50%)]" />
              <div className="relative">
                <h2 className="text-3xl font-semibold text-[var(--color-deep)] mb-1">Make a Donation</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full mt-3" />
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all shadow-sm hover:shadow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {donationOptions.map((option) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Logo and Name */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center p-2.5 flex-shrink-0">
                        <Image
                          src={option.logo}
                          alt={`${option.name} logo`}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-base">{option.name}</h3>
                        <p className="text-xs text-gray-600 mt-0.5">{option.description}</p>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Account Number</label>
                        <div className="relative">
                          <div className="font-mono text-lg font-semibold text-gray-900 bg-white px-4 py-3 rounded-xl border border-gray-200 pr-12">
                            {option.accountNumber}
                          </div>
                          <button
                            onClick={() => copyToClipboard(option.accountNumber, `${option.id}-number`)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                            title="Copy account number"
                          >
                            {copiedItem === `${option.id}-number` ? (
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Account Holder</label>
                        <div className="text-gray-900 font-medium px-4 py-3 bg-white rounded-xl border border-gray-200">
                          {option.accountHolder}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Message */}
              <div className="mt-6 p-5 bg-[rgba(77,190,158,0.08)] rounded-xl border border-[var(--color-accent)]/15">
                <p className="text-center text-sm text-gray-700 leading-relaxed">
                Your support brings hope, learning, and joy to children and families.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
