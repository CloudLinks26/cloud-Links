'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  Award,
  IndianRupee,
  Wallet,
  AlertTriangle,
  UserX,
  ShieldAlert,
  Scale
} from 'lucide-react';

export const TermsConditionsContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
  {
    id: 1,
    icon: CheckCircle2,
    title: '1. About CloudsLink',
    bullets: [
      'CloudsLink is an affiliate marketing platform that connects brands and advertisers with affiliates, publishers and other eligible users.',
      'Through the platform, users may discover affiliate campaigns, apply for offers, generate tracking links, promote products or services through permitted channels, track performance and earn commissions for qualifying actions.',
      'Brands and advertisers may use CloudsLink to promote their products or services through performance-based partnerships.'
    ]
  },
  {
    id: 2,
    icon: UserCheck,
    title: '2. Eligibility',
    bullets: [
      'You must provide accurate and complete information when creating your CloudsLink account.',
      'By registering, you confirm that:',
      'You are legally capable of entering into these Terms.',
      'The information provided by you is accurate and up to date.',
      'You will maintain the security of your account credentials.',
      'You will use the platform only for lawful purposes.',
      'You will comply with the terms and promotional requirements of each campaign you participate in.',
      'CloudsLink may restrict or reject an application where the information provided is incomplete, inaccurate or does not meet applicable eligibility requirements.'
    ]
  },
  {
    id: 3,
    icon: UserCheck,
    title: '3. Account Registration',
    bullets: [
      'Certain features of CloudsLink require you to create an account.',
      'You are responsible for maintaining the confidentiality of your login credentials and for all activity carried out through your account.',
      'You must notify CloudsLink promptly if you believe your account has been accessed without your permission.',
      'CloudsLink reserves the right to suspend or terminate accounts that contain false information, violate these Terms or are involved in fraudulent or abusive activity.'
    ]
  },
  {
    id: 4,
    icon: Award,
    title: '4. Affiliate Campaigns',
    bullets: [
      'CloudsLink may make various affiliate campaigns and offers available through the platform.',
      'Each campaign may have its own:',
      'Commission rate',
      'Eligibility requirements',
      'Approval process',
      'Promotional restrictions',
      'Conversion requirements',
      'Attribution period',
      'Payment conditions',
      'Other campaign-specific terms',
      'Users are responsible for reviewing the applicable campaign terms before promoting an offer.',
      'Being a registered CloudsLink user does not guarantee approval for every campaign.'
    ]
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: '5. Affiliate Links & Tracking',
    bullets: [
      'Approved users may receive unique tracking links associated with specific campaigns.',
      'These links are used to attribute eligible clicks, sales, leads or other qualifying actions to the appropriate affiliate.',
      'Users must not alter, manipulate, hide or interfere with tracking parameters in a way that prevents accurate attribution.',
      'CloudsLink is not responsible for conversions that cannot be properly attributed because of circumstances outside its reasonable control, including technical issues, incorrect link usage, tracking limitations or actions by third-party platforms.'
    ]
  },
  {
    id: 6,
    icon: AlertTriangle,
    title: '6. Promotion Guidelines',
    bullets: [
      'Users may promote affiliate links only through channels and methods permitted by the applicable campaign.',
      'Depending on campaign requirements, permitted channels may include websites, blogs, social media platforms, messaging platforms and other digital channels.',
      'Users must not:',
      'Make false or misleading claims about a product or service.',
      'Use deceptive advertising or promotional practices.',
      'Engage in spam.',
      'Use fraudulent traffic or artificial clicks.',
      'Generate fake leads, orders or conversions.',
      'Use bots, automated traffic or other methods intended to manipulate performance.',
      'Misrepresent themselves as the brand or advertiser.',
      'Use unauthorised brand assets or trademarks.',
      'Promote campaigns through prohibited channels.',
      'Engage in activities that violate applicable laws or third-party platform policies.',
      'CloudsLink may reject or reverse commissions resulting from prohibited, fraudulent or otherwise invalid activity.'
    ]
  },
  {
    id: 7,
    icon: IndianRupee,
    title: '7. Commissions',
    bullets: [
      "Commissions are earned only when the applicable campaign's qualifying action has been completed and subsequently validated or approved.",
      'Commission rates and qualifying actions may vary between campaigns.',
      'A click or transaction does not automatically guarantee a commission. Transactions may be rejected, cancelled, returned, refunded, duplicated, fraudulent or otherwise found ineligible under the relevant campaign terms.',
      'CloudsLink may adjust or reverse commissions where a conversion is subsequently determined to be invalid.'
    ]
  },
  {
    id: 8,
    icon: Wallet,
    title: '8. Payouts',
    bullets: [
      'CloudsLink processes payouts in accordance with its applicable payout policies and campaign terms.',
      'The minimum payout threshold currently applicable to affiliates is ₹5,000, unless otherwise specified by CloudsLink.',
      'Approved earnings may be paid through available payment methods, which may include bank transfer or eligible UPI/payment methods.',
      'Payout timelines may vary depending on conversion validation, advertiser approval, payment processing and other applicable conditions.',
      'CloudsLink may withhold or delay payment where an account or transaction is under review for suspected fraud, abuse, policy violations or other legitimate reasons.',
      'Any applicable taxes, deductions or statutory requirements shall be handled in accordance with applicable law.'
    ]
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: '9. Reversed or Cancelled Transactions',
    bullets: [
      "Commissions may be cancelled or reversed where the underlying transaction or qualifying action is cancelled, refunded, returned, duplicated, fraudulent or otherwise does not meet the campaign's requirements.",
      'Where a previously credited commission is later determined to be invalid, CloudsLink may deduct the corresponding amount from future eligible earnings or take other appropriate action.'
    ]
  },
  {
    id: 10,
    icon: AlertTriangle,
    title: '10. Prohibited Activities',
    bullets: [
      'You may not use CloudsLink to:',
      'Conduct fraudulent or deceptive activities.',
      'Generate artificial traffic, clicks, leads or transactions.',
      'Circumvent campaign restrictions or tracking systems.',
      'Promote prohibited products or services.',
      'Violate intellectual property, privacy or other legal rights.',
      'Distribute malware, malicious code or harmful content.',
      'Engage in unlawful advertising or marketing.',
      'Interfere with the operation or security of the CloudsLink platform.',
      'Create multiple accounts for the purpose of abusing offers, promotions or payouts.',
      'Use CloudsLink for any purpose prohibited by applicable law.',
      'CloudsLink may investigate suspected violations and take appropriate action, including withholding commissions, suspending accounts or terminating access.'
    ]
  },
  {
    id: 11,
    icon: Award,
    title: '11. Brand & Advertiser Responsibilities',
    bullets: [
      'Brands and advertisers using CloudsLink are responsible for providing accurate information about their products, services, campaigns, commission structures and promotional requirements.',
      'Advertisers are responsible for complying with applicable advertising, consumer protection, privacy and other laws.',
      'CloudsLink acts as a platform connecting advertisers with eligible affiliates and does not necessarily manufacture, sell or provide the products or services promoted through affiliate campaigns.'
    ]
  },
  {
    id: 12,
    icon: CheckCircle2,
    title: '12. Third-Party Products & Services',
    bullets: [
      'CloudsLink may contain links to third-party websites, products and services.',
      'CloudsLink does not control the policies, availability, pricing, quality or performance of third-party websites or products.',
      "Any purchase or interaction with a third-party brand is subject to that brand's own terms, policies and conditions.",
      'CloudsLink is not responsible for disputes between users and third-party advertisers, except where required by applicable law.'
    ]
  },
  {
    id: 13,
    icon: Award,
    title: '13. Intellectual Property',
    bullets: [
      'The CloudsLink name, logo, website design, content, software, graphics, text, features and other platform materials are owned by or licensed to CloudsLink unless otherwise stated.',
      'You may not copy, reproduce, modify, distribute, sell, republish or commercially exploit CloudsLink content without prior written permission.',
      'Brand names, logos and trademarks displayed on the platform remain the property of their respective owners.'
    ]
  },
  {
    id: 14,
    icon: CheckCircle2,
    title: '14. Platform Availability',
    bullets: [
      'CloudsLink aims to keep the platform available and functioning reliably but does not guarantee uninterrupted or error-free access.',
      'The platform may occasionally be unavailable because of maintenance, upgrades, technical issues, third-party services, network failures or circumstances beyond our reasonable control.',
      'CloudsLink reserves the right to modify, suspend or discontinue any feature, campaign or part of the platform when necessary.'
    ]
  },
  {
    id: 15,
    icon: UserX,
    title: '15. Account Suspension & Termination',
    bullets: [
      'CloudsLink may suspend, restrict or terminate an account if:',
      'These Terms are violated.',
      'Campaign rules are breached.',
      'Fraudulent or suspicious activity is detected.',
      'False or misleading information is provided.',
      'The account is used for unlawful purposes.',
      "The user's activities may harm CloudsLink, its advertisers, partners or other users.",
      'Where appropriate, CloudsLink may provide notice before termination. However, immediate action may be taken where necessary to protect the platform, users, advertisers or comply with legal requirements.'
    ]
  },
  {
    id: 16,
    icon: ShieldAlert,
    title: '16. Disclaimer',
    bullets: [
      'CloudsLink does not guarantee a specific level of traffic, conversions, sales or affiliate earnings.',
      "Affiliate earnings depend on factors including campaign terms, traffic, audience behaviour, conversion rates, product demand and other factors outside CloudsLink's control.",
      'Any earning examples, estimates or projections shown on the website are for illustrative purposes only and should not be considered a guarantee of income.'
    ]
  },
  {
    id: 17,
    icon: ShieldAlert,
    title: '17. Limitation of Liability',
    bullets: [
      'To the maximum extent permitted by applicable law, CloudsLink will not be responsible for indirect, incidental, consequential or special losses arising from your use of the platform or participation in affiliate campaigns.',
      'This includes losses arising from third-party products, services, websites, campaign changes, rejected conversions, technical interruptions or events outside CloudsLink\'s reasonable control.',
      'Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.'
    ]
  },
  {
    id: 18,
    icon: ShieldAlert,
    title: '18. Indemnification',
    bullets: [
      'You agree to indemnify and hold harmless CloudsLink, its owners, employees, representatives, partners and service providers from claims, losses, damages, liabilities and expenses arising from:',
      'Your violation of these Terms.',
      'Your violation of applicable law.',
      'Your misuse of the platform.',
      'Your promotional activities.',
      'Your infringement of third-party rights.',
      'Fraudulent or unauthorised activity associated with your account.'
    ]
  },
  {
    id: 19,
    icon: CheckCircle2,
    title: '19. Changes to These Terms',
    bullets: [
      'CloudsLink may update these Terms from time to time to reflect changes to the platform, services, business practices or applicable laws.',
      'Updated Terms will be published on this page with a revised "Last Updated" date.',
      'Your continued use of CloudsLink after changes are published constitutes acceptance of the updated Terms.'
    ]
  },
  {
    id: 20,
    icon: Scale,
    title: '20. Governing Law',
    bullets: [
      'These Terms shall be governed by and interpreted in accordance with the laws of India, unless otherwise required by applicable law.',
      'Any disputes arising in connection with these Terms shall be subject to the jurisdiction of the courts of [Insert City, State, India].'
    ]
  },
  {
    id: 21,
    icon: UserCheck,
    title: '21. Contact Us',
    bullets: [
      'If you have questions about these Terms, your account, campaigns or the CloudsLink platform, please contact us:',
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
            <FileText className="w-3.5 h-3.5" />
            <span>Please Read Carefully</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Terms & Conditions
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Welcome to CloudsLink. These Terms & Conditions govern your access to and use of the CloudsLink website, platform, tools, affiliate programs and related services.

          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Terms & Conditions</span>
          </div>
        </div>
      </section>


 


      {/* ========================================== */}
      {/* PART C — INTRO PARAGRAPH                   */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center text-sm sm:text-base text-[#1A3C34] font-medium leading-relaxed space-y-3">
       
        <p className="text-xs sm:text-sm text-[#6B6355]">
          By accessing or using CloudsLink, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use the platform.

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

export default TermsConditionsContent;
