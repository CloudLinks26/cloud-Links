'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Calendar,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  Database,
  Eye,
  Share2,
  Cookie,
  KeyRound,
  UserCheck,
  Clock,Wallet,
  RefreshCw
} from 'lucide-react';

export default function PrivacyPolicyContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
  {
    id: 1,
    icon: Database,
    title: '1. Information We Collect',
    bullets: [
      'Depending on how you use CloudsLink, we may collect the following types of information:',
      'Personal Information',
      'When you create an account, apply for campaigns or contact us, we may collect information such as:',
      'Name',
      'Email address',
      'Phone number',
      'Account/login details',
      'Payment or payout information',
      'Business or professional information',
      'Other information you voluntarily provide',
      'Account & Campaign Information',
      'When you use the CloudsLink platform, we may collect information related to:',
      'Campaigns you apply for',
      'Affiliate offers you participate in',
      'Affiliate and tracking links',
      'Clicks, conversions and qualifying actions',
      'Commission and payout information',
      'Account activity and preferences',
      'Technical Information',
      'When you visit our website or use our platform, certain information may be collected automatically, including:',
      'IP address',
      'Browser type and version',
      'Device type',
      'Operating system',
      'Pages visited',
      'Referring pages or sources',
      'Date and time of visits',
      'Website usage and interaction data',
      'We may use cookies and similar technologies to collect some of this information.'
    ]
  },
  {
    id: 2,
    icon: Eye,
    title: '2. How We Use Your Information',
    bullets: [
      'We may use the information we collect to:',
      'Create and manage your CloudsLink account.',
      'Process applications for affiliate campaigns.',
      'Generate and manage affiliate tracking links.',
      'Track clicks, conversions and qualifying actions.',
      'Calculate and process commissions and payouts.',
      'Communicate with you about your account, campaigns and services.',
      'Provide customer and technical support.',
      'Improve our website, platform and services.',
      'Monitor platform performance and security.',
      'Detects and prevents fraud, abuse and unauthorised activity.',
      'Comply with applicable legal and regulatory requirements.'
    ]
  },
  {
    id: 3,
    icon: Share2,
    title: '3. Affiliate Tracking',
    bullets: [
      'CloudsLink uses tracking technologies to measure activity generated through affiliate links.',
      'When someone clicks an affiliate link, information such as the referring affiliate, campaign, click and subsequent qualifying action may be recorded so that the appropriate conversion and commission can be attributed.',
      'This information is used to operate affiliate campaigns, calculate commissions, prevent fraudulent activity and provide performance reporting.'
    ]
  },
  {
    id: 4,
    icon: Cookie,
    title: '4. Cookies & Similar Technologies',
    bullets: [
      'CloudsLink may use cookies, pixels, tags and similar technologies to:',
      'Keep the website functioning properly.',
      'Remember preferences.',
      'Understand how visitors use our website.',
      'Measure campaign and website performance.',
      'Support affiliate tracking and attribution.',
      'Detect suspicious or fraudulent activity.',
      'You can manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.'
    ]
  },
  {
    id: 5,
    icon: Share2,
    title: '5. How We Share Information',
    bullets: [
      'We may share relevant information with trusted third parties where necessary to operate CloudsLink and provide our services.',
      'These may include:',
      'Brands and advertisers participating in affiliate campaigns.',
      'Payment processors and financial service providers.',
      'Technology, hosting and analytics providers.',
      'Tracking and fraud-prevention service providers.',
      'Customer support and communication service providers.',
      'Professional advisers and service providers.',
      'Government authorities or law enforcement where required by law.',
      'We only share information where reasonably necessary for the relevant purpose or where required or permitted by applicable law.',
      'We do not sell your personal information simply for the purpose of selling it to third parties.'
    ]
  },
  {
    id: 6,
    icon: Wallet,
    title: '6. Payment & Payout Information',
    bullets: [
      'If you earn commissions through CloudsLink, we may need to collect information required to process your payouts.',
      'Payment information may be shared with relevant payment providers or financial institutions for processing purposes.',
      'We may also collect information necessary to comply with applicable tax, accounting and regulatory requirements.'
    ]
  },
  {
    id: 7,
    icon: KeyRound,
    title: '7. Data Security',
    bullets: [
      'We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, misuse, alteration or disclosure.',
      'However, no website, online platform or electronic transmission can be guaranteed to be completely secure. You are responsible for keeping your account credentials confidential and notifying us if you suspect unauthorised access to your account.'
    ]
  },
  {
    id: 8,
    icon: Clock,
    title: '8. Data Retention',
    bullets: [
      'We retain personal information for as long as reasonably necessary to provide our services, maintain business and financial records, resolve disputes, prevent fraud, comply with legal obligations and enforce our agreements.',
      'When information is no longer required, we may securely delete, anonymise or otherwise dispose of it in accordance with applicable requirements.'
    ]
  },
  {
    id: 9,
    icon: Share2,
    title: '9. Third-Party Websites',
    bullets: [
      'CloudsLink may contain links to third-party websites, brands, advertisers and services.',
      'These third-party websites operate under their own privacy policies and terms. CloudsLink is not responsible for the privacy practices or content of third-party websites.',
      'We encourage you to review the privacy policy of any third-party website you visit through CloudsLink.'
    ]
  },
  {
    id: 10,
    icon: UserCheck,
    title: '10. Your Choices & Rights',
    bullets: [
      'Depending on applicable law, you may have rights regarding your personal information, including the right to:',
      'Request access to information we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of certain information.',
      'Withdraw consent where processing is based on consent.',
      'Request information about how your data is being used.',
      'Raise a concern or complaint regarding our handling of your information.',
      'Some requests may be subject to legal, contractual or other applicable limitations.',
      'To exercise an applicable privacy right, contact us using the details provided below.'
    ]
  },
  {
    id: 11,
    icon: UserCheck,
    title: "11. Children's Privacy",
    bullets: [
      'CloudsLink is not intended for individuals who are not legally eligible to use the platform.',
      'We do not knowingly collect personal information from children in violation of applicable law. If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.'
    ]
  },
  {
    id: 12,
    icon: RefreshCw,
    title: '12. Marketing Communications',
    bullets: [
      'We may occasionally send you information about campaigns, platform updates, services or other relevant communications.',
      'Where required, you will have the option to opt out of promotional communications.',
      'You may continue to receive essential communications relating to your account, transactions, security or use of the platform even after opting out of marketing messages.'
    ]
  },
  {
    id: 13,
    icon: Share2,
    title: '13. International Data Transfers',
    bullets: [
      'Depending on the service providers and technologies used by CloudsLink, your information may be processed or stored in locations outside your state or country.',
      'Where required, we will take appropriate steps to ensure that such processing is carried out in accordance with applicable data protection requirements.'
    ]
  },
  {
    id: 14,
    icon: RefreshCw,
    title: '14. Changes to This Privacy Policy',
    bullets: [
      'We may update this Privacy Policy from time to time to reflect changes to our services, technology, business practices or applicable laws.',
      'Any updated version will be published on this page along with a revised "Last Updated" date.',
      'We encourage you to review this Privacy Policy periodically.'
    ]
  },
  {
    id: 15,
    icon: UserCheck,
    title: '15. Contact Us',
    bullets: [
      'If you have questions about this Privacy Policy or how your information is handled, please contact us:',
      'CloudsLink',
      'Email: internal@analyticsclouds.com',
      'Website: www.cloudlinks.in'
    ]
  }
];

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* ========================================== */}
      {/* PART A — HERO HEADER                       */}
      {/* ========================================== */}
      <section className="bg-[#1A3C34] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Gold Dotted Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          {/* Gold Outlined Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-extrabold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Your Privacy Matters to Us</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Privacy Policy
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            At CloudsLink, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store and protect your information when you visit or use the CloudsLink website, platform and related services.

          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Privacy Policy</span>
          </div>
        </div>
      </section>




      {/* ========================================== */}
      {/* PART C — INTRO PARAGRAPH                   */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center text-sm sm:text-base text-[#1A3C34] font-medium leading-relaxed space-y-3">
        
        <p className="text-xs sm:text-sm text-[#6B6355]">
          By using CloudsLink, you agree to the practices described in this Privacy Policy.
        </p>
      </section>


      {/* ========================================== */}
      {/* PART D — ACCORDION SECTIONS                */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-3">
        {sections.map((sec, idx) => {
          const isOpen = openIndex === idx;
          const IconComp = sec.icon;

          return (
            <div
              key={sec.id}
              className={`bg-[#FDFAF4] rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                isOpen
                  ? 'border-l-4 border-l-[#C89B2A] border-t-[#E8E2D6] border-r-[#E8E2D6] border-b-[#E8E2D6]'
                  : 'border-[#E8E2D6]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1A3C34] hover:text-[#C89B2A] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isOpen ? 'bg-[#C89B2A]/20 text-[#1A3C34]' : 'bg-[#F5F0E8] text-[#6B6355]'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span>{sec.title}</span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C89B2A]' : 'text-[#6B6355]'
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#6B6355] space-y-3 leading-relaxed border-t border-[#E8E2D6]/50 pt-4">
                  <ul className="space-y-2.5">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2A] flex-shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </section>


      

    </div>
  );
};
