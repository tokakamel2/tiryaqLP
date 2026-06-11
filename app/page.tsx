'use client'

import Link from 'next/link'
import {
  Search, Calendar, CreditCard, Bell, CheckCircle, Clock, AlertCircle,
  ArrowLeft, ArrowRight, Star, Download, Smartphone, Shield, Zap, Users,
  TrendingUp, ChevronRight, Play
} from 'lucide-react'
import { Section, SectionHeader, FeatureCard, StepCard, CTABlock, StatCard } from '@/components/ui'
import { useLang } from '@/app/layout'

// ============ PHONE MOCKUP ============
function PhoneMockup() {
  return (
    <div className="relative w-64 h-[520px] mx-auto animate-float" style={{ animationDelay: '0s' }}>
      {/* Phone shell */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[44px] shadow-strong border border-neutral-700" />
      
      {/* Screen */}
      <div className="absolute inset-[10px] bg-white dark:bg-neutral-100 rounded-[36px] overflow-hidden">
        {/* Status bar */}
        <div className="bg-primary-600 h-10 flex items-center justify-between px-5 pt-1">
          <span className="text-white text-[10px] font-bold">9:41</span>
          <div className="w-20 h-5 bg-neutral-900 rounded-full" /> {/* Notch */}
          <div className="flex gap-1">
            <div className="w-3 h-1.5 bg-white rounded-sm opacity-60" />
            <div className="w-1 h-1.5 bg-white rounded-sm opacity-80" />
            <div className="w-1 h-1.5 bg-white rounded-sm" />
          </div>
        </div>
        
        {/* App header */}
        <div className="bg-primary-600 px-4 pb-5 pt-2">
          <p className="text-primary-200 text-[10px]">مرحباً، أحمد</p>
          <p className="text-white font-bold text-sm">ابحث عن طبيبك</p>
          {/* Search bar */}
          <div className="mt-3 bg-white rounded-xl px-3 py-2 flex items-center gap-2">
            <Search size={12} className="text-neutral-400" />
            <span className="text-neutral-400 text-[10px]">ابحث عن تخصص أو دكتور...</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="bg-neutral-50 flex-1 px-3 py-3 space-y-2">
          {/* Category pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {['عام', 'أطفال', 'قلب', 'عيون'].map((cat, i) => (
              <span key={cat} className={`shrink-0 px-2.5 py-1 rounded-full text-[9px] font-medium ${i === 0 ? 'bg-primary-500 text-white' : 'bg-white text-neutral-500 border border-neutral-200'}`}>
                {cat}
              </span>
            ))}
          </div>
          
          {/* Doctor cards */}
          {[
            { name: 'د. محمد علي', spec: 'طب عام', rating: '4.9', avail: 'متاح اليوم', color: 'bg-blue-100' },
            { name: 'د. سارة أحمد', spec: 'أطفال', rating: '4.8', avail: 'غداً 10 ص', color: 'bg-green-100' },
          ].map((doc) => (
            <div key={doc.name} className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm border border-neutral-100">
              <div className={`w-9 h-9 ${doc.color} rounded-xl flex items-center justify-center`}>
                <span className="text-[10px] font-bold text-neutral-600">{doc.name.split(' ')[1][0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-neutral-800 truncate">{doc.name}</p>
                <p className="text-[9px] text-neutral-500">{doc.spec}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star size={7} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-[8px] text-neutral-600">{doc.rating}</span>
                </div>
              </div>
              <div className="text-end">
                <span className="text-[8px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full border border-green-100">{doc.avail}</span>
              </div>
            </div>
          ))}
          
          {/* Appointment card */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-2.5 text-white">
            <p className="text-[9px] opacity-80 mb-0.5">موعدك القادم</p>
            <p className="text-[10px] font-bold">د. خالد إبراهيم</p>
            <div className="flex items-center gap-1 mt-1">
              <Calendar size={8} />
              <span className="text-[8px]">غداً، 2:00 م</span>
              <div className="mx-1 w-px h-2 bg-white/30" />
              <CheckCircle size={8} />
              <span className="text-[8px]">مؤكد</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home indicator */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center">
        <div className="w-20 h-1 bg-neutral-600 rounded-full" />
      </div>
    </div>
  )
}

// ============ HERO SECTION ============
function HeroSection() {
  const { t, lang } = useLang()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 noise-overlay">
      {/* Blobs */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-secondary-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container-custom mx-auto px-4 md:px-8 py-32 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-primary-200">
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
              {t('متاح الآن في الإسماعيلية', 'Now Available in Ismailia')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              {t(
                <>احجز طبيبك<br /><span className="text-gradient bg-gradient-to-r from-secondary-300 to-secondary-400 bg-clip-text text-transparent">في ثوانٍ </span></>,
                <>Book Your Doctor<br /><span className="text-gradient bg-gradient-to-r from-secondary-300 to-secondary-400 bg-clip-text text-transparent">in Seconds</span></>
              )}
            </h1>
            
            <p className="text-lg text-primary-200 leading-relaxed max-w-lg">
              {t(
                ' حجز اسهل , رعاية افضل ',
                'Easier booking, Better Care'
              )}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-4 bg-white text-primary-700 rounded-2xl font-bold hover:bg-primary-50 transition-all duration-200 shadow-strong hover:-translate-y-0.5 hover:shadow-glow">
                <Download size={20} />
                {t('حمّل التطبيق', 'Download App')}
              </button>
              <Link
                href="/how-it-works"
                className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <Play size={16} className="fill-current" />
                {t('كيف يعمل', 'How It Works')}
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['M', 'S', 'K', 'F'].map((l) => (
                    <div key={l} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-primary-800 flex items-center justify-center text-xs font-bold text-white">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-primary-300 text-xs">+500 {t('مريض سعيد', 'happy patients')}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-primary-200 text-sm">
                <span className="font-bold text-white">50+</span> {t('عيادة متاحة', 'clinics available')}
              </div>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup />
              {/* Floating badges */}
              <div className="absolute -start-8 top-1/4 bg-white dark:bg-neutral-800 rounded-2xl p-3 shadow-strong flex items-center gap-2.5 border border-neutral-100 dark:border-neutral-700 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <CheckCircle size={16} className="text-secondary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-800 dark:text-white">{t('محجوز!', 'Booked!')}</p>
                  <p className="text-[10px] text-neutral-400">{t('د. علي — غداً', 'Dr. Ali — Tomorrow')}</p>
                </div>
              </div>
              <div className="absolute -end-8 bottom-1/3 bg-white dark:bg-neutral-800 rounded-2xl p-3 shadow-strong flex items-center gap-2 border border-neutral-100 dark:border-neutral-700 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Bell size={16} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-800 dark:text-white">{t('تذكير', 'Reminder')}</p>
                  <p className="text-[10px] text-neutral-400">{t('موعدك بعد ساعة', 'Appt in 1 hour')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full fill-white dark:fill-neutral-900">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}

// ============ SOCIAL PROOF ============
function SocialProof() {
  const { t } = useLang()

  const stats = [
    { value: '500+', label: t('مريض سعيد', 'Happy Patients') },
    { value: '50+', label: t('عيادة شريكة', 'Partner Clinics') },
    { value: '4.9★', label: t('تقييم المستخدمين', 'User Rating') },
    { value: '98%', label: t('نسبة الرضا', 'Satisfaction Rate') },
  ]

  return (
    <Section variant="default">
      <div className="text-center mb-10">
        <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest mb-2">
          {t('موثوق من قِبل', 'Trusted By')}
        </p>
        <p className="text-2xl font-bold text-neutral-800 dark:text-white">
          {t('عيادات وأطباء ومرضى عبر مصر', 'Clinics, doctors & patients across Egypt')}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      {/* Testimonial */}
      <div className="bg-gradient-card rounded-2xl p-8 border border-primary-100 dark:border-primary-900">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white font-bold text-xl shrink-0">م</div>
          <div className="flex-1 text-center md:text-start">
            <div className="flex justify-center md:justify-start mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-neutral-700 dark:text-neutral-200 italic mb-3">
              {t(
                '"ترياق غيّر طريقة حجزي للمواعيد تماماً. لم أعد أضطر للانتظار ساعات في العيادة. الآن أحجز في دقيقة ويصلني تذكير قبل الموعد."',
                '"Tiryaq completely changed how I book appointments. No more waiting hours at the clinic. Now I book in a minute and get a reminder before my appointment."'
              )}
            </p>
            <p className="font-bold text-neutral-800 dark:text-white text-sm">{t('محمد حسن', 'Mohamed Hassan')}</p>
            <p className="text-neutral-400 text-xs">{t('مريض — الإسماعيلية', 'Patient — Ismailia')}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}


// ============ SOLUTION SECTION ============
function SolutionSection() {
  const { t } = useLang()

  const solutions = [
    {
      icon: <Zap size={24} />,
      title: t('حجز فوري', 'Instant Booking'),
      description: t('احجز موعدك في ثوانٍ مباشرةً من هاتفك، في أي وقت وأي مكان', 'Book your appointment in seconds directly from your phone, anytime anywhere'),
      color: 'primary' as const,
    },
    {
      icon: <Calendar size={24} />,
      title: t('جدولة منظمة', 'Organized Scheduling'),
      description: t('تتبع جميع مواعيدك في مكان واحد مع تذكيرات ذكية تلقائية', 'Track all your appointments in one place with automatic smart reminders'),
      color: 'secondary' as const,
    },
    {
      icon: <TrendingUp size={24} />,
      title: t('متابعة رقمية', 'Digital Tracking'),
      description: t('احتفظ بسجلك الطبي وتاريخ زياراتك منظماً ومتاحاً دائماً', 'Keep your medical record and visit history organized and always accessible'),
      color: 'primary' as const,
    },
  ]

  return (
    <Section variant="default">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative order-2 lg:order-1">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-3xl p-8 border border-primary-100 dark:border-primary-800">
            <div className="space-y-4">
              {[
                { icon: <CheckCircle size={18} className="text-secondary-500" />, text: t('اعثر على طبيبك في 30 ثانية', 'Find your doctor in 30 seconds') },
                { icon: <CheckCircle size={18} className="text-secondary-500" />, text: t('احجز واحصل على تأكيد فوري', 'Book and get instant confirmation') },
                { icon: <CheckCircle size={18} className="text-secondary-500" />, text: t('ادفع بأمان أونلاين', 'Pay securely online') },
                { icon: <CheckCircle size={18} className="text-secondary-500" />, text: t('استقبل التذكيرات قبل الموعد', 'Receive reminders before your appointment') },
                { icon: <CheckCircle size={18} className="text-secondary-500" />, text: t('تتبع تاريخك الطبي', 'Track your medical history') },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-soft border border-neutral-100 dark:border-neutral-700">
                  {item.icon}
                  <span className="text-neutral-700 dark:text-neutral-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute -top-4 -start-4 w-20 h-20 bg-primary-500/10 rounded-2xl -z-10" />
          <div className="absolute -bottom-4 -end-4 w-16 h-16 bg-secondary-500/10 rounded-full -z-10" />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
            {t('ترياق', 'Tiryaq ')}
            <br />
            <span className="text-gradient">{t('  لرعاية صحية افضل', ' For Better Healthcare ')}</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {t(
              'بنينا ترياق لأننا آمنا بأن الوصول إلى الرعاية الصحية يجب أن يكون بسيطاً وإنسانياً. نحن نقدم الحل الذكي  لمنظومة صحية اكثر كفاءة.',
              'We built Tiryaq because we believe accessing healthcare should be simple and humane. we offer the smart solution to more efficient healthcare system.'
            )}
          </p>
          <div className="space-y-4">
            {solutions.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-neutral-800 dark:text-white mb-1">{s.title}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

// ============ FEATURES SECTION ============
function FeaturesSection() {
  const { t } = useLang()

  const features = [
    {
      icon: <Search size={22} />,
      title: t('بحث ذكي', 'Smart Search'),
      description: t('ابحث عن أي دكتور أو تخصص وابحث حسب التقييم والموقع والتوفر', 'Search for any doctor or specialty and filter by rating, location, and availability'),
      color: 'primary' as const,
    },
    {
      icon: <CreditCard size={22} />,
      title: t('دفع متعدد الوسائل', 'Multiple Payment Methods'),
      description: t('ادفع بالبطاقة أو المحفظة الرقمية أو نقداً — كما يناسبك', 'Pay by card, digital wallet, or cash — whatever suits you'),
      color: 'secondary' as const,
    },
    {
      icon: <Calendar size={22} />,
      title: t('تتبع المواعيد', 'Appointment Tracking'),
      description: t('جميع مواعيدك في لمحة واحدة مع حالة كل موعد في الوقت الفعلي', 'All your appointments at a glance with real-time status for each one'),
      color: 'primary' as const,
    },
    {
      icon: <Bell size={22} />,
      title: t('تذكيرات ذكية', 'Smart Notifications'),
      description: t('تذكيرات قبل موعدك بساعة ويوم حتى لا تنسى أبداً', 'Reminders 1 hour and 1 day before your appointment so you never forget'),
      color: 'secondary' as const,
    },
    {
      icon: <Shield size={22} />,
      title: t('بيانات آمنة', 'Secure Data'),
      description: t('بياناتك الطبية محمية ومشفرة. خصوصيتك أولويتنا الأولى', 'Your medical data is protected and encrypted. Your privacy is our top priority'),
      color: 'primary' as const,
    },
    {
      icon: <Users size={22} />,
      title: t('أطباء معتمدون', 'Verified Doctors'),
      description: t('جميع الأطباء موثقون ومعتمدون لضمان أعلى جودة رعاية', 'All doctors are verified and accredited to ensure the highest quality of care'),
      color: 'secondary' as const,
    },
  ]

  return (
    <Section variant="subtle">
      <SectionHeader
        title={t('كل ما تحتاجه في مكان واحد', 'Everything You Need in One Place')}
        subtitle={t(
          'صممنا ترياق ليكون بسيطاً للمريض وفعالاً للعيادة',
          'We designed Tiryaq to be simple for the patient and effective for the clinic'
        )}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Section>
  )
}

// ============ HOW IT WORKS PREVIEW ============
function HowItWorksPreview() {
  const { t } = useLang()

  const steps = [
    {
      number: 1,
      icon: <Search size={28} />,
      title: t('ابحث', 'Search'),
      description: t('ابحث عن طبيب أو تخصص', 'Search for a doctor or specialty'),
    },
    {
      number: 2,
      icon: <Users size={28} />,
      title: t('اختر', 'Select'),
      description: t('اختر طبيبك والوقت المناسب', 'Choose your doctor and suitable time'),
    },
    {
      number: 3,
      icon: <Calendar size={28} />,
      title: t('احجز', 'Book'),
      description: t('احجز موعدك بضغطة واحدة', 'Book your appointment with one click'),
    },
    {
      number: 4,
      icon: <CheckCircle size={28} />,
      title: t('أكّد', 'Confirm'),
      description: t('استقبل التأكيد والتذكيرات', 'Receive confirmation and reminders'),
    },
  ]

  return (
    <Section variant="default">
      <SectionHeader
        badge={t('كيف يعمل', 'How It Works')}
        title={t('أربع خطوات بسيطة', 'Four Simple Steps')}
        subtitle={t(
          'من البحث إلى التأكيد في أقل من دقيقة',
          'From search to confirmation in less than a minute'
        )}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <StepCard key={step.number} {...step} isLast={i === steps.length - 1} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/how-it-works" className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all duration-200">
          {t('اعرف أكثر', 'Learn More')}
          <ChevronRight size={18} />
        </Link>
      </div>
    </Section>
  )
}

// ============ APP DOWNLOAD ============
function AppDownload() {
  const { t } = useLang()

  return (
    <Section variant="subtle">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-neutral-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 end-0 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('حمّل التطبيق الآن', 'Download the App Now')}
            </h2>
            <p className="text-primary-200 mb-8">
              {t(
                'متاح على iOS و Android. جرّب تجربة الرعاية الصحية الذكية',
                'Available on iOS and Android. Experience smart healthcare'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              {/* App Store */}
              <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-neutral-900 transition-colors border border-white/10">
                <Smartphone size={22} />
                <div>
                  <p className="text-[10px] text-neutral-400">{t('حمّل من', 'Download on the')}</p>
                  <p className="font-bold text-sm">App Store</p>
                </div>
              </a>
              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-neutral-900 transition-colors border border-white/10">
                <Download size={22} />
                <div>
                  <p className="text-[10px] text-neutral-400">{t('احصل عليه من', 'Get it on')}</p>
                  <p className="font-bold text-sm">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="scale-75 origin-top">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ============ MAIN PAGE ============
export default function HomePage() {
  const { t } = useLang()

  return (
    <>
      <HeroSection />
      <SocialProof />
      
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksPreview />
      <AppDownload />
      {/* <Section variant="default">
        <CTABlock
          title={t('ابدأ الحجز الذكي اليوم', 'Start Booking Smarter Today')}
          subtitle={t(
            'انضم إلى مئات المرضى الذين غيّروا طريقة تعاملهم مع الرعاية الصحية مع ترياق',
            'Join hundreds of patients who changed how they experience healthcare with Tiryaq'
          )}
          primaryLabel={t('احجز الآن ', 'Book Now  ')}
          secondaryLabel={t('تعرف على المزيد', 'Learn More')}
        />
      </Section>*/}
    </>
  )
}
