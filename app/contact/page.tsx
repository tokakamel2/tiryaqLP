'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react'
import { Section, FormInput, FormTextarea } from '@/components/ui'
import { useLang } from '@/app/layout'

function ContactForm() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = t('الاسم مطلوب', 'Name is required')
    if (!form.email.trim()) errs.email = t('البريد الإلكتروني مطلوب', 'Email is required')
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = t('بريد إلكتروني غير صالح', 'Invalid email address')
    if (!form.message.trim()) errs.message = t('الرسالة مطلوبة', 'Message is required')
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-secondary-500" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
          {t('تم إرسال رسالتك!', 'Message Sent!')}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mb-6">
          {t(
            'شكراً على تواصلك معنا. سنرد عليك في أقل من 24 ساعة.',
            'Thank you for reaching out. We\'ll get back to you within 24 hours.'
          )}
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
          className="btn-secondary text-sm"
        >
          {t('إرسال رسالة أخرى', 'Send Another Message')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <FormInput
          label={t('الاسم الكامل', 'Full Name')}
          placeholder={t('أحمد محمد', 'Ahmed Mohamed')}
          value={form.name}
          onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
          error={errors.name}
        />
        <FormInput
          label={t('البريد الإلكتروني', 'Email Address')}
          type="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
          error={errors.email}
        />
      </div>
      <FormInput
        label={t('الموضوع', 'Subject')}
        placeholder={t('موضوع رسالتك', 'Your message subject')}
        value={form.subject}
        onChange={e => setForm({ ...form, subject: e.target.value })}
      />
      <FormTextarea
        label={t('الرسالة', 'Message')}
        placeholder={t('اكتب رسالتك هنا...', 'Write your message here...')}
        rows={5}
        value={form.message}
        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
        error={errors.message}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t('جاري الإرسال...', 'Sending...')}
          </>
        ) : (
          <>
            <Send size={18} />
            {t('إرسال الرسالة', 'Send Message')}
          </>
        )}
      </button>
    </form>
  )
}

export default function ContactPage() {
  const { t } = useLang()

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: t('البريد الإلكتروني', 'Email'),
      value: 'hello@tiryaq.com',
      href: 'mailto:hello@tiryaq.com',
      color: 'primary' as const,
    },
    {
      icon: <Phone size={22} />,
      title: t('الهاتف', 'Phone'),
      value: '+20 100 000 0000',
      href: 'tel:+201000000000',
      color: 'secondary' as const,
    },
    {
      icon: <Clock size={22} />,
      title: t('ساعات العمل', 'Working Hours'),
      value: t('السبت–الخميس، 9 ص – 12 م', 'Sat–Thu, 9 AM – 12 PM'),
      href: null,
      color: 'secondary' as const,
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
            <MessageCircle size={14} />
            {t('تواصل معنا', 'Get in Touch')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            {t('نحن هنا لمساعدتك', "We're Here to Help")}
          </h1>
          <p className="text-primary-200 text-xl max-w-xl mx-auto leading-relaxed">
            {t(
              'هل لديك سؤال أو تريد الانضمام؟ تواصل معنا وسنرد في أقل من 24 ساعة',
              'Have a question or want to join? Reach out and we\'ll respond in less than 24 hours'
            )}
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full fill-white dark:fill-neutral-900">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <Section variant="default">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {t('معلومات التواصل', 'Contact Information')}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400">
                {t('تواصل معنا بأي طريقة تناسبك', 'Reach us in any way that suits you')}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.color === 'primary'
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-500'
                      : 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-500'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 mb-0.5">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-neutral-800 dark:text-white hover:text-primary-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-neutral-800 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 h-48 flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <MapPin size={32} className="mx-auto mb-2" />
                <p className="text-sm">{t('الإسماعيلية، مصر', 'Ismailia, Egypt')}</p>
              </div>
            </div>

            {/* FAQ teaser */}
            <div className="bg-gradient-card rounded-2xl p-6 border border-primary-100 dark:border-primary-900">
              <h3 className="font-bold text-neutral-800 dark:text-white mb-3">
                {t('هل أنت عيادة؟', 'Are you a clinic?')}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                {t(
                  'إذا كنت تمثل عيادة وتريد الانضمام لمنصة ترياق، تواصل معنا مباشرة وسنهيئ كل شيء لك.',
                  'If you represent a clinic and want to join the Tiryaq platform, contact us directly and we\'ll set everything up for you.'
                )}
              </p>
              <a
                href="mailto:clinics@tiryaq.com"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:gap-3 transition-all"
              >
                <Mail size={14} />
                clinics@tiryaq.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700 shadow-medium">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {t('أرسل لنا رسالة', 'Send Us a Message')}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 mb-8">
                {t('سنرد عليك في أقل من 24 ساعة', "We'll get back to you within 24 hours")}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="subtle">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
              {t('أسئلة شائعة', 'Frequently Asked Questions')}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              {t('إجابات على الأسئلة الأكثر شيوعاً', 'Answers to the most common questions')}
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: t('كيف يمكننى استخدام التطبيق؟', 'How can i use the application?'),
                a: t('حمل التطبيق مجانا من هنا و سجل حسابك و احجز فى اقل من دقيقتين.', 'Download the application from here. then register and book your appointment in less than 2 minutes'),
              },
              {
                q: t('في أي مناطق يعمل ترياق؟', 'In which areas does Tiryaq operate?'),
                a: t('نعمل حالياً في الإسماعيلية ونتوسع تدريجياً في باقي المحافظات.', 'We currently operate in Ismailia and are gradually expanding to other governorates.'),
              },
              {
                q: t('كيف أشترك كعيادة؟', 'How do I register as a clinic?'),
                a: t('تواصل معنا عبر البريد الإلكتروني clinics@tiryaq.com وسنتواصل معك خلال 48 ساعةاو حمل التطبيق وسجل بيناتك فى حلال عشر دقايق و سيتم بعد ذلك مراجعة البيانات و تاكيد التفعيل .', 'Contact us at clinics@tiryaq.com and we\'ll reach you within 48 hours.Or register by yourself on the app. it will take 10 moinutes then we will review your registeration and the approval will be done in 24 hours'),
              },
              {
                q: t('هل الدفع آمن؟', 'Is payment secure?'),
                a: t('نعم، جميع المعاملات المالية مشفرة بالكامل ومعتمدة من بوابات دفع موثوقة.', 'Yes, all financial transactions are fully encrypted and certified by trusted payment gateways.'),
              },
              {
              q: t('هل بياناتي آمنة؟', 'Is my data secure?'),
              a: t('نعم، جميع بياناتك الشخصية والطبية مشفرة بالكامل ومحمية وفق أعلى معايير الأمان وحماية الخصوصية.', 'Yes, all your personal and medical data is fully encrypted and protected according to the highest security and privacy standards.'),
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 shadow-soft overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-neutral-800 dark:text-white">{faq.q}</span>
                  <div className="w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-600 flex items-center justify-center text-neutral-400 group-open:rotate-45 transition-transform duration-200 shrink-0 ms-4">
                    +
                  </div>
                </summary>
                <div className="px-6 pb-6 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
