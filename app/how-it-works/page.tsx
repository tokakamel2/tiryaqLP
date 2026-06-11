'use client'

import { Search, User, Calendar, CreditCard, Bell, CheckCircle, Star, Clock, Shield, ArrowDown } from 'lucide-react'
import { Section, SectionHeader, CTABlock } from '@/components/ui'
import { useLang } from '@/app/layout'

function StepDetail({
  number,
  icon,
  title,
  description,
  details,
  isLast = false,
  reverse = false,
}: {
  number: number
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  isLast?: boolean
  reverse?: boolean
}) {
  const { lang } = useLang()

  return (
    <div className="relative">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Visual side */}
        <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-10 flex items-center justify-center border border-primary-100 dark:border-primary-800 min-h-[300px]">
            {/* Big number bg */}
            <div className="absolute top-6 start-6 text-8xl font-black text-primary-100 dark:text-primary-900 select-none">
              {number}
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-primary">
                {icon}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className={`space-y-6 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
              {number}
            </div>
            <span className="text-sm text-primary-500 font-semibold uppercase tracking-wider">
              {`Step ${number}`}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
            {title}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
            {description}
          </p>
          <ul className="space-y-3">
            {details.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-secondary-500 shrink-0 mt-0.5" />
                <span className="text-neutral-600 dark:text-neutral-300">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connector */}
      {!isLast && (
        <div className="flex justify-center my-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary-300 to-secondary-300" />
            <ArrowDown size={20} className="text-primary-400" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-secondary-300 to-primary-300" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function HowItWorksPage() {
  const { t } = useLang()

  const steps = [
    {
      number: 1,
      icon: <Search size={40} />,
      title: t('ابحث عن طبيبك', 'Search for Your Doctor'),
      description: t(
        'ابحث عن أي تخصص أو دكتور بسهولة. يمكنك الفلترة حسب التخصص والموقع .',
        'Search for any specialty or doctor easily. Filter by Specialtz, location, Name.'
      ),
      details: [
        t('ابحث بالاسم أو التخصص', 'Search by name or specialty'),
        t('فلتر حسب الموقع ', 'Filter by location'),
        t('اطلع على ملفات الأطباء الكاملة', 'View complete doctor profiles'),
        
      ],
    },
    {
      number: 2,
      icon: <User size={40} />,
      title: t('شاهد ملف الطبيب', 'View Doctor Profile'),
      description: t(
        'اطلع على ملف الطبيب الكامل: تخصصاته، خبرته، تقييمات المرضى، والأوقات المتاحة.',
        'View the complete doctor profile: specializations, experience, patient ratings, and available times.'
      ),
      details: [
        t('تخصصات الطبيب وخبرته', 'Doctor specializations and experience'),
        t('الأوقات المتاحة للحجز', 'Available times for booking'),
        t('عنوان العيادة وطريقة الوصول', 'Clinic address and directions'),
      ],
    },
    {
      number: 3,
      icon: <Calendar size={40} />,
      title: t('اختر وقت موعدك', 'Select Your Appointment Time'),
      description: t(
        'اختر الوقت الذي يناسبك من الأوقات المتاحة. الحجز فوري ومؤكد بدون أي انتظار.',
        'Choose the time that suits you from available slots. Booking is instant and confirmed without any wait.'
      ),
      details: [
        t('تقويم مرئي بالأوقات المتاحة', 'Visual calendar with available times'),
        t('حجز فوري بدون انتظار', 'Instant booking without waiting'),
        t('تأكيد فوري على التطبيق ', 'Instant confirmation via app and email'),
        t('إمكانية إعادة و الغاء الحجز بسهولة', 'Easy rescheduling options'),
      ],
    },
    {
      number: 4,
      icon: <CreditCard size={40} />,
      title: t('ادفع بأمان', 'Pay Securely'),
      description: t(
        'اختر طريقة الدفع المناسبة: بطاقة ائتمان، محفظة رقمية. كل المعاملات مشفرة.',
        'Choose your preferred payment method: credit card, digital wallet. All transactions are encrypted.'
      ),
      details: [
        t('بطاقات ائتمان وخصم (Visa, Mastercard)', 'Credit and debit cards (Visa, Mastercard)'),
        t('محافظ رقمية (Fawry, Vodafone Cash, instapay)', 'Digital wallets (Fawry, Vodafone Cashو instapay)'),
        t('تشفير كامل وأمان تام', 'Full encryption and complete security'),
      ],
    },
    {
      number: 5,
      icon: <Bell size={40} />,
      title: t('استقبل التذكيرات وتتبع موعدك', 'Receive Reminders & Track Your Appointment'),
      description: t(
        'ستصلك تذكيرات ذكية قبل موعدك. تتبع حالة موعدك في الوقت الفعلي.',
        'You\'ll receive smart reminders before your appointment. Track your appointment status in real-time.'
      ),
      details: [
        t('تذكير قبل 24 ساعة من الموعد', 'Reminder 24 hours before appointment'),
        t('تذكير قبل ساعة من الموعد', 'Reminder 1 hour before appointment'),
        t('تتبع الدور والوقت المتوقع', 'Track queue position and expected time'),
        t('إشعارات فورية بأي تغييرات', 'Instant notifications for any changes'),
      ],
      isLast: true,
    },
  ]

  return (
    <>
      {/* Hero */}
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-primary-200 mb-6">
            {t('كيف يعمل ترياق', 'How Tiryaq Works')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            {t('بسيط. سريع. موثوق.', 'Simple. Fast. Reliable.')}
          </h1>
          <p className="text-primary-200 text-xl max-w-2xl mx-auto leading-relaxed">
            {t(
              'من البحث عن الطبيب إلى تأكيد الموعد في أقل من دقيقتين',
              'From finding a doctor to confirming your appointment in less than two minutes'
            )}
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { icon: <Clock size={18} />, text: t('أقل من دقيقتين', 'Less than 2 minutes') },
              { icon: <Shield size={18} />, text: t('دفع آمن ومشفر', 'Secure encrypted payment') },
              { icon: <Star size={18} />, text: t('تقييم 4.9/5', 'Rating 4.9/5') },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-200">
                {item.icon}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full fill-white dark:fill-neutral-900">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Steps */}
      <Section variant="default">
        <div className="space-y-4">
          {steps.map((step, i) => (
            <StepDetail
              key={step.number}
              {...step}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </Section>

      {/* For Clinics */}
      <Section variant="subtle">
        <SectionHeader
          badge={t('للعيادات', 'For Clinics')}
          title={t('ترياق للعيادات', 'Tiryaq For Clinics')}
          subtitle={t(
            ' نمكّن العيادات من تنظيم أعمالها وتقديم رعاية أفضل',
            'we empower clinics to organize their operations and deliver better care'
          )}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: t('إدارة المواعيد', 'Appointment Management'),
              desc: t('لوحة تحكم متكاملة لإدارة كل المواعيد والمرضى والأوقات', 'Integrated dashboard to manage all appointments, patients, and schedules'),
            },
            {
              title: t('تقليل الغاء الحجوزات', 'Reduce No-Shows'),
              desc: t('التذكيرات التلقائية تقلل نسبة المرضى الذين لا يحضرون بنسبة تصل إلى 60%', 'Automatic reminders reduce patient no-show rates by up to 60%'),
            },
            {
              title: t('تحليلات متقدمة', 'Advanced Analytics'),
              desc: t('تقارير تفصيلية عن أداء العيادة وتدفق المرضى والإيرادات', 'Detailed reports on clinic performance, patient flow, and revenue'),
            },
            {
             title: t('الحضور اونلاين', 'Online presence'),
            desc: t('حضور اونلاين لعيادتك يتيح للمرضى اكتشافك والحجز معك في أي وقت', 'An online presence for your clinic that lets patients discover you and book anytime'),
            },
            {
            title: t('زيادة الأرباح', 'Increase Profit'),
            desc: t('حجوزات مدفوعة مسبقاً وتقليل المواعيد الضائعة يعني إيراد أكثر وخسائر أقل', 'Pre-paid bookings and fewer lost appointments means more revenue and less wasted time'),
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-700 shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                <CheckCircle size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="default">
        <CTABlock
          title={t('جاهز تجرب؟', 'Ready to Try?')}
          subtitle={t(
            'ابدأ الحجز الآن وجرّب بنفسك مدى سهولة ترياق',
            'Start booking now and experience firsthand how easy Tiryaq is'
          )}
          primaryLabel={t('احجز موعدك الأول', 'Book Your First Appointment')}
          secondaryLabel={t('تواصل معنا', 'Contact Us')}
        />
      </Section>
    </>
  )
}
