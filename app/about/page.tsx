'use client'

import { Heart, Target, Eye, Zap, Users, Shield, BookOpen, MapPin } from 'lucide-react'
import { Section, SectionHeader, FeatureCard, StatCard, CTABlock } from '@/components/ui'
import { useLang } from '@/app/layout'

export default function AboutPage() {
  const { t } = useLang()

  const values = [
    {
      icon: <Zap size={22} />,
      title: t('الابتكار', 'Innovation'),
      description: t('نبني أدوات الغد. نؤمن بأن التكنولوجيا قادرة على إصلاح ما أُفسد في منظومة الرعاية الصحية', 'We build the tools of tomorrow. We believe technology can fix what\'s broken in the healthcare system'),
      color: 'primary' as const,
    },
    {
      icon: <Users size={22} />,
      title: t('الاحترام', 'Respect'),
      description: t('نحترم وقت المريض وكرامته ونحترم جهد الطبيب وتركيزه. وقتك له قيمة', 'We honor the time and dignity of patients and doctors. Your time has value'),
      color: 'secondary' as const,
    },
    {
      icon: <Heart size={22} />,
      title: t('الرعاية', 'Care'),
      description: t('الإنسان في قلب كل قرار نتخذه. نصمم بعاطفة لأن الصحة ليست مجرد أرقام', 'The human element is at the center of every decision we make. We design with empathy because health is not just numbers'),
      color: 'primary' as const,
    },
  ]

  const milestones = [
    { year: '2025', event: t('تأسيس البنية الاساسية لترياق', 'Tiryaq foundation') },
    { year: '2026', event: t('إطلاق المنصة وأولى الشراكات مع العيادات', 'Platform launch and first clinic partnerships') },
    { year: '2027', event: t('التوسع في محافظات مصر', 'Expansion across Egyptian governorates') },
    { year: '2030', event: t('المنصة الأولى في مصر للرعاية الصحية الرقمية', '#1 digital healthcare platform in Egypt') },
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
            {t('قصتنا', 'Our Story')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-3xl mx-auto leading-tight">
            {t('لماذا أسسنا ترياق؟', 'Why Did We Found Tiryaq?')}
          </h1>
          <p className="text-primary-200 text-xl leading-relaxed max-w-2xl mx-auto">
            {t(
              ' مريض ينتظر ساعات، طبيب يغرق في ازدحام المواعيد، ونظام يحتاج التطور',
              'Because we feel your pain — a patient waiting hours, a doctor overloaded, and a system that needs optimization'
            )}
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full fill-white dark:fill-neutral-900">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Name Story */}
      <Section variant="default">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
              {t(
                'ترياق — حجز اسهل , رعاية افضل',
                'Tiryaq — More Than a Name'
              )}
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                {t(
                  'ترياق هو تطبيق ذكي يربط المرضى بالأطباء في ثوانٍ معدودة. لحل مشكلة العيادات مزدحمة، مواعيد ضائعة و ملغاة، وانتظار لا نهاية له.',
                  '"Tiryaq" is a smart app that connects patients with doctors in seconds — built to solve the real problems of overcrowded clinics, lost or cancelled appointments, and endless waiting.'
                )}
              </p>
              <p>
                {t(
                  'تجعل حجز الطبيب أسهل للمريض، تزيد كفاءة العيادة، تُخفّف الضغط عن فريق الاستقبال — كل ذلك تلقائيًا.',
                  'We make booking a doctor effortless for patients, boost clinic efficiency, and take the pressure off reception teams — all automatically.'
                )}
              </p>
             
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-center text-white shadow-strong">
              <div className="text-8xl font-black mb-4 opacity-20 font-arabic">ترياق</div>
              <div className="text-6xl font-black text-gradient bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent mb-6 font-arabic">ترياق</div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { ar: 'ابتكار', en: 'Innovation' },
                  { ar: 'احترام', en: 'Respect' },
                  { ar: 'رعاية', en: 'Care' },
                ].map((w) => (
                  <div key={w.ar} className="bg-white/10 rounded-xl p-3">
                    <p className="text-white font-bold text-sm">{t(w.ar, w.en)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section variant="subtle">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t('المهمة', 'Mission')}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t(
                'تبسيط وتنظيم الوصول إلى الرعاية الصحية من خلال بناء أدوات تساعد المرضى في إيجاد الأطباء بسهولة، حجز المواعيد، وتجربة زيارات طبية فعّالة، مع تمكين العيادات من إدارة تدفق المرضى وتقديم رعاية أفضل.',
                'To simplify and organize healthcare access by building tools that help patients easily find doctors, book appointments, and experience efficient medical visits, while enabling clinics to manage patient flow and deliver better care.'
              )}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-secondary-50 dark:bg-secondary-900/30 text-secondary-500 flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t('الرؤية', 'Vision')}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t(
                'تحويل منظومة الرعاية الصحية إلى واقع يكون فيه الوصول إلى الرعاية الطبية بسيطاً وميسور التكلفة وإنسانياً للجميع في مصر والمنطقة.',
                'Transforming the healthcare system into a reality where accessing medical care is simple, affordable, and humane for everyone in Egypt and the region.'
              )}
            </p>
          </div>
        </div>

        {/* Strategy */}
        <div className="mt-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('الاستراتيجية', 'Strategy')}</h3>
              <p className="text-primary-200">
                {t(
                  'أن نصبح المنصة الرائدة في الرعاية الصحية في مصر خلال خمس سنوات، من خلال هيمنتنا على شبكات العيادات المحلية، وبناء تأثيرات شبكية قوية بين العيادات والمرضى تمكننا من التوسع في منظومة رعاية صحية رقمية أشمل.',
                  'To become the leading healthcare access platform in Egypt within five years, by dominating local clinic networks, and building strong network effects between clinics and patients that allow expansion into a broader digital healthcare ecosystem.'
                )}
              </p>
            </div>
          </div>
          {/*<div className="flex items-center gap-2 text-primary-200">
            <MapPin size={16} />
            <span className="text-sm">{t('البداية من الإسماعيلية 🇪🇬', 'Starting from Ismailia 🇪🇬')}</span>
          </div>*/}
        </div>
      </Section>

      {/* Values */}
      <Section variant="default">
        <SectionHeader
          badge={t('قيمنا', 'Our Values')}
          title={t('ما الذي يقودنا', 'What Drives Us')}
          subtitle={t(
            'ثلاث قيم تقود كل قرار نتخذه وكل سطر كود نكتبه',
            'Three values guide every decision we make and every line of code we write'
          )}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => <FeatureCard key={v.title} {...v} />)}
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="subtle">
        <SectionHeader
          badge={t('الرحلة', 'The Journey')}
          title={t('خريطة الطريق', 'Roadmap')}
          subtitle={t('من فكرة إلى منصة تغير الرعاية الصحية في مصر', 'From an idea to a platform that changes healthcare in Egypt')}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute start-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center shadow-primary shrink-0">
                  <span className="text-white font-black text-sm">{m.year}</span>
                </div>
                <div className="flex-1 bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-100 dark:border-neutral-700 shadow-soft mt-3">
                  <p className="text-neutral-700 dark:text-neutral-200 font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="default">
        <CTABlock
          title={t('كن جزءاً من التغيير', 'Be Part of the Change')}
          subtitle={t(
            'انضم إلينا في رحلة تحويل الرعاية الصحية في مصر إلى تجربة إنسانية حقيقية',
            'Join us in the journey of transforming healthcare in Egypt into a truly human experience'
          )}
          primaryLabel={t('سجل معانا الآن', 'Register Now')}
          secondaryLabel={t('تواصل معنا', 'Contact Us')}
        />
      </Section>
    </>
  )
}
