'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { X, Copy, Sparkles, Link as LinkIcon, Check, ArrowRight, Share2, ShieldCheck, UserCheck, Building2, CheckCircle2, Cookie, Mail } from 'lucide-react';

interface GlobalContextType {
  onOpenAuth: (mode: 'signup' | 'login', role?: 'creator' | 'brand') => void;
  onOpenLinkGen: (brandName?: string) => void;
  showToast: (msg: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isCookieBannerVisible: boolean;
}

interface CookiePrefs {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cloudlinks_cookie_consent';

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isLinkGenOpen, setIsLinkGenOpen] = useState(false);
  const [linkGenBrand, setLinkGenBrand] = useState<string>('');

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [authRole, setAuthRole] = useState<'creator' | 'brand'>('creator');

  const [searchTerm, setSearchTerm] = useState('');

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  const [isCookiePrefsOpen, setIsCookiePrefsOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState<{ analytics: boolean; marketing: boolean }>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setIsCookieBannerVisible(true);
    }
  }, []);

  const persistCookieConsent = (prefs: CookiePrefs) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ ...prefs, updatedAt: Date.now() }));
    setIsCookieBannerVisible(false);
    setIsCookiePrefsOpen(false);
  };

  const handleAcceptAllCookies = () => {
    persistCookieConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleNecessaryOnlyCookies = () => {
    persistCookieConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSaveCookiePrefs = () => {
    persistCookieConsent({ necessary: true, analytics: cookiePrefs.analytics, marketing: cookiePrefs.marketing });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
  };

  const handleOpenLinkGen = (brandName?: string) => {
    setLinkGenBrand(brandName || '');
    setIsLinkGenOpen(true);
  };

  const handleOpenAuth = (mode: 'signup' | 'login', role?: 'creator' | 'brand') => {
    setAuthMode(mode);
    if (role) setAuthRole(role);
    setIsAuthOpen(true);
  };

  return (
    <GlobalContext.Provider value={{ onOpenAuth: handleOpenAuth, onOpenLinkGen: handleOpenLinkGen, showToast, searchTerm, setSearchTerm, isCookieBannerVisible }}>
      {children}
      <LinkGeneratorModal
        isOpen={isLinkGenOpen}
        onClose={() => setIsLinkGenOpen(false)}
        defaultBrand={linkGenBrand}
        onCopyToast={showToast}
      />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        initialRole={authRole}
        onToast={showToast}
      />
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
      <CookieConsent
        isVisible={isCookieBannerVisible}
        isPrefsOpen={isCookiePrefsOpen}
        prefs={cookiePrefs}
        onSetPrefs={setCookiePrefs}
        onAcceptAll={handleAcceptAllCookies}
        onNecessaryOnly={handleNecessaryOnlyCookies}
        onOpenPrefs={() => setIsCookiePrefsOpen(true)}
        onClosePrefs={() => setIsCookiePrefsOpen(false)}
        onSavePrefs={handleSaveCookiePrefs}
      />
    </GlobalContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* INLINED MODALS & TOAST COMPONENTS */
/* -------------------------------------------------------------------------- */

interface LinkGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBrand?: string;
  onCopyToast: (msg: string) => void;
}

const LinkGeneratorModal: React.FC<LinkGeneratorModalProps> = ({
  isOpen,
  onClose,
  defaultBrand = '',
  onCopyToast,
}) => {
  const [urlInput, setUrlInput] = useState(defaultBrand ? `https://www.${defaultBrand.toLowerCase().replace(/\s+/g, '')}.com/p/item-102` : '');
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand || 'Myntra');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      const brandSlug = selectedBrand.toLowerCase().replace(/\s+/g, '');
      const uniqueCode = Math.random().toString(36).substring(2, 7);
      setGeneratedLink(`https://cloudlinks.in/c/${brandSlug}?creator=you&id=${uniqueCode}`);
      setIsGenerating(false);
    }, 400);
  };

  const handleCopy = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    onCopyToast('CloudLinks Affiliate URL copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-hidden">
        <div className="flex items-center justify-between p-6 bg-[#1A3C34] text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C89B2A] flex items-center justify-center text-[#1A3C34] font-bold">
              <LinkIcon className="w-4 h-4 text-[#1A3C34]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Instant Link Generator</h3>
              <p className="text-xs text-[#E8E2D6]/80">Convert product URL into earning affiliate link</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1A3C34] uppercase tracking-wider mb-2">
                Select Brand / Platform
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-[#1A3C34] font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A] text-sm"
              >
                <option value="Myntra">Myntra (Up to 12% Comm.)</option>
                <option value="AJIO">AJIO (Up to 10% Comm.)</option>
                <option value="boAt">boAt (Up to 15% Comm.)</option>
                <option value="MakeMyTrip">MakeMyTrip (Up to 8% Comm.)</option>
                <option value="Mamaearth">Mamaearth (Up to 20% Comm.)</option>
                <option value="Meesho">Meesho (Up to 12% Comm.)</option>
                <option value="Amazon.in">Amazon.in (Up to 9% Comm.)</option>
                <option value="Flipkart">Flipkart (Up to 10% Comm.)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A3C34] uppercase tracking-wider mb-2">
                Product URL or Page Link
              </label>
              <div className="relative">
                <input
                  type="url"
                  placeholder={`https://www.${selectedBrand.toLowerCase()}.com/product-url`}
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-[#E8E2D6] bg-white text-[#1A3C34] text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                />
                <Sparkles className="absolute right-3 top-3.5 w-4 h-4 text-[#C89B2A]" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 px-6 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#1A3C34] border-t-transparent rounded-full animate-spin"></span>
                  Generating Link...
                </>
              ) : (
                <>
                  Generate CloudLinks Link
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {generatedLink && (
            <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#C89B2A]/40 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between text-xs font-semibold text-[#1A3C34]">
                <span className="flex items-center gap-1.5 text-[#C89B2A] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Your Monetized Affiliate Link
                </span>
                <span className="bg-[#1A3C34] text-white px-2 py-0.5 rounded text-[10px]">Active</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={generatedLink}
                  className="w-full px-3 py-2 bg-white text-xs font-mono border border-[#E8E2D6] rounded-lg text-[#1A3C34]"
                />
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#1A3C34] hover:bg-[#122b25] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#C89B2A]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy Link'}
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#6B6355]">
                <span>⚡ Commission Rate: <strong className="text-[#1A3C34]">Up to 12%</strong></span>
                <span>⏱️ Cookie Duration: <strong className="text-[#1A3C34]">30 Days</strong></span>
              </div>
            </div>
          )}

          <div className="p-3 bg-white/80 rounded-xl border border-[#E8E2D6] flex items-center gap-3 text-xs text-[#6B6355]">
            <Share2 className="w-5 h-5 text-[#C89B2A] flex-shrink-0" />
            <span>Share this link directly on WhatsApp, Instagram bio, YouTube description, or Telegram channels.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signup' | 'login';
  initialRole?: 'creator' | 'brand';
  onToast: (msg: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signup',
  initialRole = 'creator',
  onToast,
}) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [role, setRole] = useState<'creator' | 'brand'>(initialRole);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    socialHandle: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup') {
      onToast(`Welcome to CloudLinks! Account created successfully as ${role === 'creator' ? 'Creator' : 'Brand'}.`);
    } else {
      onToast(`Welcome back! Logged in to CloudLinks Creator Dashboard.`);
    }
    onClose();
  };

  // Brand Partnership — simple contact message, no form.
  // Branches on initialRole (how the modal was opened), not the mutable role state,
  // so the in-modal Creator/Brand toggle in the regular flow keeps working as before.
  if (initialRole === 'brand') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-[#6B6355] hover:text-[#1A3C34] rounded-lg hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 pt-10 text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C89B2A]/15 flex items-center justify-center mx-auto">
              <Mail className="w-7 h-7 text-[#C89B2A]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black font-display text-[#1A3C34]">
                Let's Talk Partnerships
              </h3>
              <p className="text-sm text-[#6B6355] leading-relaxed">
                We'd love to explore a partnership with your brand. Drop us an email with a few details and our team will get back to you shortly.
              </p>
            </div>

            <a
              href="mailto:internal@analyticsclouds.com"
              className="block w-full py-3 px-6 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm shadow-md transition-all"
            >
              internal@analyticsclouds.com
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-hidden">
        <div className="flex bg-[#1A3C34] text-white">
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors ${
              mode === 'signup'
                ? 'border-[#C89B2A] text-[#C89B2A] bg-white/5'
                : 'border-transparent text-white/70 hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors ${
              mode === 'login'
                ? 'border-[#C89B2A] text-[#C89B2A] bg-white/5'
                : 'border-transparent text-white/70 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={onClose}
            className="px-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {mode === 'signup' && (
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
              <button
                type="button"
                onClick={() => setRole('creator')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  role === 'creator'
                    ? 'bg-[#1A3C34] text-white shadow-sm'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-[#C89B2A]" />
                Creator / Influencer
              </button>
              <button
                type="button"
                onClick={() => setRole('brand')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  role === 'brand'
                    ? 'bg-[#1A3C34] text-white shadow-sm'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#C89B2A]" />
                Brand Partner
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-[#1A3C34] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1A3C34] mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="priya@creator.in"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
              />
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#1A3C34] mb-1">
                    WhatsApp Mobile Number (+91)
                  </label>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A3C34] mb-1">
                    {role === 'creator' ? 'Instagram / YouTube Channel Handle' : 'Brand Website / App URL'}
                  </label>
                  <input
                    type="text"
                    placeholder={role === 'creator' ? '@priyastyle or youtube.com/c/priya' : 'https://mybrand.in'}
                    required
                    value={formData.socialHandle}
                    onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1A3C34] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              {mode === 'signup' ? 'Create Free Account' : 'Sign In to Dashboard'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-center gap-2 text-xs text-[#6B6355]">
            <ShieldCheck className="w-4 h-4 text-[#1A3C34]" />
            <span>100% Free • No minimum follower limit • Instant Approval</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A3C34] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#C89B2A]/30 animate-bounce-short">
      <CheckCircle2 className="w-5 h-5 text-[#C89B2A] flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

interface CookieConsentProps {
  isVisible: boolean;
  isPrefsOpen: boolean;
  prefs: { analytics: boolean; marketing: boolean };
  onSetPrefs: (prefs: { analytics: boolean; marketing: boolean }) => void;
  onAcceptAll: () => void;
  onNecessaryOnly: () => void;
  onOpenPrefs: () => void;
  onClosePrefs: () => void;
  onSavePrefs: () => void;
}

const ToggleSwitch: React.FC<{ checked: boolean; disabled?: boolean; onChange: () => void }> = ({
  checked,
  disabled,
  onChange,
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={onChange}
    className={`relative w-10 h-6 rounded-full transition-colors shrink-0 ${
      checked ? 'bg-[#C89B2A]' : 'bg-[#E8E2D6]'
    } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
        checked ? 'translate-x-4' : 'translate-x-0'
      }`}
    />
  </button>
);

const CookieConsent: React.FC<CookieConsentProps> = ({
  isVisible,
  isPrefsOpen,
  prefs,
  onSetPrefs,
  onAcceptAll,
  onNecessaryOnly,
  onOpenPrefs,
  onClosePrefs,
  onSavePrefs,
}) => {
  if (!isVisible && !isPrefsOpen) return null;

  return (
    <>
      {isVisible && !isPrefsOpen && (
        <div className="fixed bottom-6 left-6 z-40 w-[calc(100%-3rem)] sm:w-96 bg-[#FDFAF4] border border-[#E8E2D6] rounded-2xl shadow-2xl p-5 space-y-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C89B2A]/15 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-[#C89B2A]" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-display font-extrabold text-[#1A3C34] text-base">We Use Cookies</h3>
              <p className="text-sm text-[#6B6355] leading-relaxed">
                We use cookies to keep CloudLinks running smoothly and, with your permission, to understand how it&apos;s used. You can accept all cookies or choose what you&apos;re comfortable with.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={onAcceptAll}
              className="w-full py-2.5 px-5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm shadow-md transition-all"
            >
              Accept All
            </button>
            <button
              onClick={onNecessaryOnly}
              className="w-full py-2.5 px-5 rounded-xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-bold text-sm transition-all"
            >
              Necessary Only
            </button>
            <button
              onClick={onOpenPrefs}
              className="w-full text-center text-xs font-semibold text-[#6B6355] hover:text-[#C89B2A] transition-colors pt-1"
            >
              Manage Preferences
            </button>
          </div>
        </div>
      )}

      {isPrefsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-hidden">
            <div className="flex items-center justify-between p-6 bg-[#1A3C34] text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#C89B2A] flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-[#1A3C34]" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Cookie Preferences</h3>
              </div>
              <button
                onClick={onClosePrefs}
                className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#1A3C34]">Necessary</p>
                  <p className="text-xs text-[#6B6355]">Required for the site to function. Always active.</p>
                </div>
                <ToggleSwitch checked={true} disabled onChange={() => {}} />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#1A3C34]">Analytics</p>
                  <p className="text-xs text-[#6B6355]">Helps us understand how visitors use CloudLinks.</p>
                </div>
                <ToggleSwitch
                  checked={prefs.analytics}
                  onChange={() => onSetPrefs({ ...prefs, analytics: !prefs.analytics })}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#1A3C34]">Marketing</p>
                  <p className="text-xs text-[#6B6355]">Used to show more relevant offers and campaigns.</p>
                </div>
                <ToggleSwitch
                  checked={prefs.marketing}
                  onChange={() => onSetPrefs({ ...prefs, marketing: !prefs.marketing })}
                />
              </div>

              <button
                onClick={onSavePrefs}
                className="w-full py-3 px-6 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm shadow-md transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
