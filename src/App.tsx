import React, { useState, useEffect } from 'react';
import {
  CalendarDays,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Check,
  GraduationCap,
  Star,
  Info,
  Stethoscope
} from 'lucide-react';

const AGENDA_ONLINE_URL =
  'http://agendamiento.softwaremedilink.com/agendas/online/4fd0a5055a4f7157adc286f72ece7e760fd73905';
const WHATSAPP_BASE_URL =
  'https://wa.me/56998041740?text=Hola%20Dr.%20Rubio%2C%20vi%20su%20sitio%20web%20y%20quiero%20agendar%20una%20hora.';
const PHONE_TEL = 'tel:+56998041740';
const EMAIL_MAILTO = 'mailto:consulta.drrubio@gmail.com';
const MAPS_URL = 'https://goo.gl/maps/6z1J1Sf5puRsw9SGA';
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Consulta%20M%C3%A9dica%20Dr.%20Rubio&t=m&z=17&output=embed';

const LOGO_SRC = 'https://doctordanilorubio.cl/wp-content/uploads/2023/03/logoweb2.png';
const IMG_MEDICINA_SRC = 'https://doctordanilorubio.cl/wp-content/uploads/2023/05/img5.webp';
const IMG_SALUD_MENTAL_SRC = 'https://doctordanilorubio.cl/wp-content/uploads/2023/05/img6.webp';
const IMG_DOCTOR_SRC = 'https://doctordanilorubio.cl/wp-content/uploads/2023/05/img3.webp';

const TOPICS_SALUD_MENTAL = [
  'Adicciones y comportamientos adictivos',
  'Ansiedad y trastornos de pánico',
  'Depresión y trastornos del ánimo',
  'Problemas conductuales en adolescentes',
  'Problemas de relaciones interpersonales',
  'Problemas de autoestima y confianza',
  'Trastorno de ansiedad generalizada (TAG)',
  'Trastorno por déficit atencional e hiperactividad',
  'Trastorno por estrés agudo y duelo patológico',
  'Trastornos alimentarios y obesidad',
  'Trastornos del sueño y parasomnias',
  'Trauma y estrés postraumático'
];

const REVIEWS = [
  {
    name: 'Exequiel A.',
    text: 'Excelente profesional, atención general de salud de buena calidad.'
  },
  {
    name: 'Mariella K.',
    text: 'Muy buen espacio físico. Profesional. Con conocimiento, experiencia, buen trato y respeto por el paciente. Absolutamente recomendado.'
  },
  {
    name: 'Danilo P.',
    text: 'Excelente profesional, años viajando a Rancagua para atenderme con el Dr. Rubio junto a mi familia, 10/10.'
  },
  {
    name: 'Ricardo M.',
    text: 'Es un gran médico sin duda y preocupado por sus pacientes, full recomendado.'
  }
];

const FEATURED_REVIEW = {
  name: 'Roxana B.',
  text: 'Excelente atención por parte del profesional, se da el tiempo para interiorizarse de los problemas de su paciente y genera instancias para que este se sienta en confianza, en un ambiente relajado y adecuado para tratarlo.'
};

export default function App() {
  const [logoError, setLogoError] = useState(false);
  const [img5Error, setImg5Error] = useState(false);
  const [img6Error, setImg6Error] = useState(false);
  const [img3Error, setImg3Error] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Form state
  const [formName, setFormName] = useState('');
  const [formType, setFormType] = useState('Medicina general y familiar');
  const [formSchedule, setFormSchedule] = useState('Me da lo mismo');
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormError('Por favor ingresa tu nombre.');
      return;
    }
    if (!formType.trim()) {
      setFormError('Por favor selecciona el tipo de consulta.');
      return;
    }
    setFormError('');

    let msg = `Hola Dr. Rubio, mi nombre es ${formName.trim()}. Quisiera agendar una hora de ${formType}.`;
    if (formSchedule) {
      msg += ` Horario que prefiero: ${formSchedule}.`;
    }
    if (formMessage.trim()) {
      msg += ` ${formMessage.trim()}`;
    }

    const whatsappUrl = `https://wa.me/56998041740?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-surface text-ink font-sans pb-24 md:pb-0">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-surface h-16 border-b border-line transition-shadow duration-200 ${
          isScrolled ? 'shadow-xs' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center focus:outline-hidden"
            aria-label="Ir al inicio"
          >
            {!logoError ? (
              <img
                src={LOGO_SRC}
                alt="Logo Consulta Doctor Danilo Rubio"
                width={190}
                height={50}
                onError={() => setLogoError(true)}
                className="h-9 md:h-11 w-auto object-contain"
              />
            ) : (
              <span className="text-xl font-semibold text-ink font-sans tracking-tight">
                Dr. Danilo Rubio
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#atencion"
              className="text-sm font-medium uppercase tracking-[0.08em] text-ink hover:underline decoration-primary underline-offset-8 transition-colors"
            >
              Atención
            </a>
            <a
              href="#doctor"
              className="text-sm font-medium uppercase tracking-[0.08em] text-ink hover:underline decoration-primary underline-offset-8 transition-colors"
            >
              El doctor
            </a>
            <a
              href="#resenas"
              className="text-sm font-medium uppercase tracking-[0.08em] text-ink hover:underline decoration-primary underline-offset-8 transition-colors"
            >
              Reseñas
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium uppercase tracking-[0.08em] text-ink hover:underline decoration-primary underline-offset-8 transition-colors"
            >
              Contacto
            </a>
            <a
              href={AGENDA_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-ink font-semibold rounded-full px-5 py-2.5 text-sm transition-colors duration-200 hover:bg-ink hover:text-surface"
            >
              Agenda tu hora
            </a>
          </nav>

          {/* Mobile Call Button */}
          <a
            href={PHONE_TEL}
            aria-label="Llamar a la consulta"
            className="md:hidden w-10 h-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:bg-secondary transition-colors"
          >
            <Phone className="w-5 h-5 text-ink" />
          </a>
        </div>
      </header>

      <main className="pt-16">
        {/* 1. HERO */}
        <section
          id="inicio"
          className="bg-secondary min-h-[calc(100svh-64px)] flex items-center py-8 md:py-16"
        >
          <div className="max-w-6xl mx-auto px-5 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text column: 7/12 on desktop */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-muted text-[13px] font-medium uppercase tracking-[0.08em] mb-3 block">
                  ATENCIÓN PARTICULAR · RANCAGUA
                </span>

                <h1 className="text-[36px] sm:text-[40px] lg:text-[64px] font-semibold text-ink tracking-[-0.02em] leading-[1.05] mb-4">
                  <span className="block anim-hero-line-1">Dr. Danilo Rubio</span>
                  <span className="block font-normal anim-hero-line-2">
                    Medicina general y familiar
                  </span>
                  <span className="block font-normal anim-hero-line-3 relative inline-block">
                    y salud mental.
                    <span
                      className="block h-1 bg-primary rounded-[2px] mt-2 anim-hero-bar"
                      aria-hidden="true"
                    />
                  </span>
                </h1>

                <p className="text-ink text-[16px] md:text-[17px] leading-[1.6] max-w-xl mb-6">
                  Atención cercana y personalizada para todas las edades, en el Edificio Focus Center de Rancagua.
                </p>

                {/* Mobile version of booking card (starts well before 600px) */}
                <div className="block lg:hidden anim-hero-card mb-4">
                  <div className="bg-surface rounded-2xl border border-line p-5 shadow-xs">
                    <h2 className="text-[18px] font-semibold text-ink mb-4">
                      ¿Qué hora necesitas?
                    </h2>
                    <div className="flex flex-col gap-3">
                      <a
                        href={AGENDA_ONLINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 bg-primary text-ink font-semibold rounded-full px-5 flex items-center justify-between transition-colors duration-200 hover:bg-ink hover:text-surface"
                      >
                        <span>Medicina general y familiar</span>
                        <ArrowUpRight className="w-5 h-5 shrink-0" />
                      </a>
                      <a
                        href={AGENDA_ONLINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 bg-surface border-2 border-primary text-ink font-semibold rounded-full px-5 flex items-center justify-between transition-colors duration-200 hover:bg-ink hover:border-ink hover:text-surface"
                      >
                        <span>Salud mental</span>
                        <ArrowUpRight className="w-5 h-5 shrink-0" />
                      </a>
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href={WHATSAPP_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink text-sm underline decoration-primary underline-offset-4 font-medium hover:text-ink/80 transition-colors"
                      >
                        ¿Tienes dudas? Escríbenos por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location row */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-ink/80 transition-colors mt-2"
                >
                  <MapPin className="w-4 h-4 text-ink shrink-0" />
                  <span>Av. Membrillar #230, of. 56, 5° piso · Rancagua</span>
                </a>
              </div>

              {/* Desktop version of booking container: 5/12 */}
              <div className="hidden lg:block lg:col-span-5 anim-hero-card">
                <div className="bg-primary rounded-3xl p-8 shadow-xs">
                  <div className="bg-surface rounded-2xl border border-line p-6 shadow-xs">
                    <h2 className="text-[18px] font-semibold text-ink mb-4">
                      ¿Qué hora necesitas?
                    </h2>
                    <div className="flex flex-col gap-3">
                      <a
                        href={AGENDA_ONLINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 bg-primary text-ink font-semibold rounded-full px-5 flex items-center justify-between transition-colors duration-200 hover:bg-ink hover:text-surface"
                      >
                        <span>Medicina general y familiar</span>
                        <ArrowUpRight className="w-5 h-5 shrink-0" />
                      </a>
                      <a
                        href={AGENDA_ONLINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 bg-surface border-2 border-primary text-ink font-semibold rounded-full px-5 flex items-center justify-between transition-colors duration-200 hover:bg-ink hover:border-ink hover:text-surface"
                      >
                        <span>Salud mental</span>
                        <ArrowUpRight className="w-5 h-5 shrink-0" />
                      </a>
                    </div>
                    <div className="mt-5 text-center">
                      <a
                        href={WHATSAPP_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink text-sm underline decoration-primary underline-offset-4 font-medium hover:text-ink/80 transition-colors"
                      >
                        ¿Tienes dudas? Escríbenos por WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink font-medium hover:underline transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-ink shrink-0" />
                      <span>Av. Membrillar #230, of. 56, 5° piso · Rancagua</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ÁREAS DE ATENCIÓN */}
        <section id="atencion" className="bg-surface py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <div className="mb-12">
              <h2 className="text-[30px] md:text-[44px] font-semibold text-ink tracking-tight">
                Dos áreas, un mismo trato cercano
              </h2>
              <div className="h-1 w-20 bg-primary rounded-[2px] mt-3" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Block 1: Medicina general y familiar (5/12) */}
              <div className="lg:col-span-5 bg-secondary rounded-2xl p-6 border border-line transition-transform duration-200 hover:-translate-y-0.5 flex flex-col h-full">
                <div className="aspect-[510/350] w-full rounded-xl overflow-hidden bg-secondary relative mb-5 border border-line">
                  {!img5Error ? (
                    <img
                      src={IMG_MEDICINA_SRC}
                      alt="Consulta de medicina general y familiar del Dr. Danilo Rubio en Rancagua"
                      width={510}
                      height={350}
                      loading="lazy"
                      decoding="async"
                      onError={() => setImg5Error(true)}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Stethoscope className="w-10 h-10 text-primary" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">
                  Medicina general y familiar
                </h3>

                <p className="text-ink text-[16px] leading-[1.6] mb-5">
                  Primer nivel de atención para adultos y niños: prevención, detección y tratamiento de enfermedades comunes, y derivación al especialista indicado cuando hace falta.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-ink font-medium">
                    <Check className="w-5 h-5 text-ink shrink-0" />
                    <span>Enfermedades agudas y crónicas</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-ink font-medium">
                    <Check className="w-5 h-5 text-ink shrink-0" />
                    <span>Prevención y controles de rutina</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-ink font-medium">
                    <Check className="w-5 h-5 text-ink shrink-0" />
                    <span>Atención prenatal y postnatal</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href={AGENDA_ONLINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-primary text-ink font-semibold rounded-full px-6 flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-ink hover:text-surface"
                  >
                    <span>Agendar medicina general</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Block 2: Salud mental (7/12) */}
              <div className="lg:col-span-7 bg-secondary rounded-2xl p-6 border border-line transition-transform duration-200 hover:-translate-y-0.5 flex flex-col h-full">
                <div className="aspect-[510/350] w-full rounded-xl overflow-hidden bg-secondary relative mb-5 border border-line">
                  {!img6Error ? (
                    <img
                      src={IMG_SALUD_MENTAL_SRC}
                      alt="Consulta de salud mental del Dr. Danilo Rubio en Rancagua"
                      width={510}
                      height={350}
                      loading="lazy"
                      decoding="async"
                      onError={() => setImg6Error(true)}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Stethoscope className="w-10 h-10 text-primary" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">
                  Salud mental
                </h3>

                <p className="text-ink text-[16px] leading-[1.6] mb-5">
                  Diagnóstico, tratamiento y acompañamiento para dificultades emocionales, conductuales o mentales que afectan tu día a día, con una atención cercana y empática.
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {TOPICS_SALUD_MENTAL.map((topic) => (
                      <span
                        key={topic}
                        className="bg-surface border border-line text-ink text-[14px] px-3.5 py-2 rounded-full cursor-default"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href={AGENDA_ONLINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 bg-primary text-ink font-semibold rounded-full px-6 flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-ink hover:text-surface"
                  >
                    <span>Agendar salud mental</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EL DOCTOR */}
        <section id="doctor" className="bg-secondary py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Desktop: Image 5/12 on left. Mobile: Image second */}
              <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative max-w-[420px] w-full mr-4 mb-4">
                  {/* Displaced background block as frame */}
                  <div
                    className="absolute inset-0 translate-x-4 translate-y-4 bg-primary rounded-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-3xl overflow-hidden bg-secondary border border-line aspect-[728/736]">
                    {!img3Error ? (
                      <img
                        src={IMG_DOCTOR_SRC}
                        alt="Dr. Danilo Rubio, consulta en Rancagua"
                        width={728}
                        height={736}
                        loading="lazy"
                        decoding="async"
                        onError={() => setImg3Error(true)}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary">
                        <span className="text-[64px] font-semibold text-ink">DR</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Text 7/12 on right. Mobile: Text first */}
              <div className="order-1 lg:order-2 lg:col-span-7">
                <span className="text-muted text-[13px] font-medium uppercase tracking-[0.08em] mb-2 block">
                  QUIÉN TE ATIENDE
                </span>

                <h2 className="text-[30px] md:text-[44px] font-semibold text-ink tracking-tight mb-2">
                  Dr. Danilo Rubio
                </h2>
                <div className="h-1 w-20 bg-primary rounded-[2px] mb-6" aria-hidden="true" />

                <p className="text-ink text-[16px] md:text-[17px] leading-[1.6] mb-6">
                  Médico general de la Universidad de Santiago de Chile, con más de 12 años de experiencia en medicina integral de salud mental. También atiende medicina general y familiar, y ha trabajado en centros de salud general, de salud mental y de tratamiento de adicciones.
                </p>

                {/* Formación list */}
                <div className="border-t border-line divide-y divide-line mb-8">
                  <div className="py-3.5 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <span className="text-ink text-sm md:text-base">
                      Diplomado en Salud Familiar — Universidad de Chile
                    </span>
                  </div>
                  <div className="py-3.5 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <span className="text-ink text-sm md:text-base">
                      Diplomado en Adicciones — Pontificia Universidad Católica de Chile
                    </span>
                  </div>
                  <div className="py-3.5 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <span className="text-ink text-sm md:text-base">
                      Residencia de Psiquiatría — Clínica Psiquiátrica Universitaria, Universidad de Chile
                    </span>
                  </div>
                  <div className="py-3.5 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <span className="text-ink text-sm md:text-base">
                      Instituto de Psicoterapia Breve de Santiago
                    </span>
                  </div>
                </div>

                {/* Highlight stat */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-surface rounded-2xl p-6 border border-line">
                  <div>
                    <div className="text-[48px] font-semibold text-ink leading-none mb-1">
                      +12 años
                    </div>
                    <div className="text-muted text-sm font-medium">
                      de experiencia en salud mental
                    </div>
                  </div>
                  <a
                    href={AGENDA_ONLINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 bg-primary text-ink font-semibold rounded-full px-7 flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-ink hover:text-surface shrink-0"
                  >
                    <span>Agenda tu hora</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RESEÑAS */}
        <section id="resenas" className="bg-primary py-20 md:py-28 text-ink">
          <div className="max-w-6xl mx-auto px-5">
            <div className="mb-12">
              <span className="text-ink text-[13px] font-medium uppercase tracking-[0.08em] mb-2 block">
                RESEÑAS DE PACIENTES EN GOOGLE
              </span>
              <h2 className="text-[30px] md:text-[44px] font-semibold text-ink tracking-tight">
                Lo que dicen quienes ya se atendieron
              </h2>
              {/* Distinctive bar in ink color because the background is primary */}
              <div className="h-1 w-20 bg-ink rounded-[2px] mt-3" aria-hidden="true" />
            </div>

            {/* Desktop Composition: Left featured, Right 2x2 grid */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Featured review: Roxana B. (5/12 or 6/12) */}
              <div className="lg:col-span-6 bg-surface rounded-2xl p-8 border-l-4 border-primary border border-line flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-0.5">
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-ink text-ink" />
                    ))}
                  </div>
                  <blockquote className="text-[22px] font-medium text-ink leading-[1.5] mb-6">
                    «{FEATURED_REVIEW.text}»
                  </blockquote>
                </div>
                <div className="font-semibold text-ink text-base">
                  {FEATURED_REVIEW.name}
                </div>
              </div>

              {/* 2x2 grid of the other 4 reviews (6/12) */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {REVIEWS.map((review) => (
                  <div
                    key={review.name}
                    className="bg-secondary rounded-2xl p-5 border border-line flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-ink text-ink" />
                        ))}
                      </div>
                      <p className="text-ink text-sm leading-[1.6] mb-4">
                        «{review.text}»
                      </p>
                    </div>
                    <div className="font-semibold text-ink text-sm">
                      {review.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout: Featured review on top, 4 reviews horizontal snap scroll */}
            <div className="block lg:hidden space-y-6">
              {/* Featured review */}
              <div className="bg-surface rounded-2xl p-6 border-l-4 border-primary border border-line shadow-xs">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-ink text-ink" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-ink leading-[1.5] mb-4">
                  «{FEATURED_REVIEW.text}»
                </blockquote>
                <div className="font-semibold text-ink">
                  {FEATURED_REVIEW.name}
                </div>
              </div>

              {/* Horizontal scroll for the remaining 4 reviews */}
              <div className="flex overflow-x-auto gap-4 snap-mandatory-x pb-4 -mx-5 px-5">
                {REVIEWS.map((review) => (
                  <div
                    key={review.name}
                    className="w-[85%] shrink-0 snap-center-child bg-secondary rounded-2xl p-5 border border-line flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-ink text-ink" />
                        ))}
                      </div>
                      <p className="text-ink text-sm leading-[1.6] mb-4">
                        «{review.text}»
                      </p>
                    </div>
                    <div className="font-semibold text-ink text-sm">
                      {review.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACTO Y UBICACIÓN */}
        <section id="contacto" className="bg-surface py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5">
            <div className="mb-12">
              <h2 className="text-[30px] md:text-[44px] font-semibold text-ink tracking-tight">
                Agenda tu hora o escríbenos
              </h2>
              <div className="h-1 w-20 bg-primary rounded-[2px] mt-3" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct contact & Map (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary rounded-2xl p-4 border border-line flex items-start gap-4 transition-transform duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted font-medium mb-1">
                      Dirección
                    </div>
                    <div className="text-ink text-sm font-medium leading-relaxed group-hover:text-ink/80 transition-colors">
                      Av. Membrillar #230, oficina 56 (5° piso), Edificio Focus Center, Rancagua
                    </div>
                  </div>
                </a>

                <a
                  href={PHONE_TEL}
                  className="bg-secondary rounded-2xl p-4 border border-line flex items-start gap-4 transition-transform duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted font-medium mb-1">
                      Teléfono y WhatsApp
                    </div>
                    <div className="text-ink text-sm font-medium group-hover:text-ink/80 transition-colors">
                      +56 9 9804 1740
                    </div>
                  </div>
                </a>

                <a
                  href={EMAIL_MAILTO}
                  className="bg-secondary rounded-2xl p-4 border border-line flex items-start gap-4 transition-transform duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted font-medium mb-1">
                      Correo electrónico
                    </div>
                    <div className="text-ink text-sm font-medium group-hover:text-ink/80 transition-colors">
                      consulta.drrubio@gmail.com
                    </div>
                  </div>
                </a>

                {/* Google Maps Embed iframe */}
                <div className="rounded-2xl overflow-hidden border border-line h-[260px] bg-secondary mt-2">
                  <iframe
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Consulta Dr. Danilo Rubio"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Column: Online Booking CTA + WhatsApp Form (lg:col-span-7) */}
              <div className="lg:col-span-7 bg-surface rounded-2xl p-6 sm:p-8 border border-line">
                <a
                  href={AGENDA_ONLINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 bg-primary text-ink font-semibold rounded-full px-6 flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-ink hover:text-surface text-base"
                >
                  <CalendarDays className="w-5 h-5" />
                  <span>Agendar hora online</span>
                </a>

                {/* Separator */}
                <div className="flex items-center gap-4 my-6">
                  <div className="h-px bg-line flex-1" />
                  <span className="text-muted text-xs sm:text-sm text-center px-2">
                    o déjanos tus datos y te respondemos por WhatsApp
                  </span>
                  <div className="h-px bg-line flex-1" />
                </div>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-secondary border border-line rounded-xl text-ink text-sm">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-ink text-sm font-medium mb-1.5"
                    >
                      Nombre <span className="text-muted">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Tu nombre y apellido"
                      className="w-full bg-secondary border border-line rounded-xl px-4 py-3 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tipo-consulta"
                      className="block text-ink text-sm font-medium mb-1.5"
                    >
                      Tipo de consulta <span className="text-muted">*</span>
                    </label>
                    <select
                      id="tipo-consulta"
                      required
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full bg-secondary border border-line rounded-xl px-4 py-3 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="Medicina general y familiar">
                        Medicina general y familiar
                      </option>
                      <option value="Salud mental">Salud mental</option>
                      <option value="Otra consulta">Otra consulta</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="horario"
                      className="block text-ink text-sm font-medium mb-1.5"
                    >
                      Horario que prefieres
                    </label>
                    <select
                      id="horario"
                      value={formSchedule}
                      onChange={(e) => setFormSchedule(e.target.value)}
                      className="w-full bg-secondary border border-line rounded-xl px-4 py-3 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Me da lo mismo">Me da lo mismo</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-ink text-sm font-medium mb-1.5"
                    >
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="¿Tienes alguna preferencia o consulta sobre el agendamiento?"
                      className="w-full bg-secondary border border-line rounded-xl px-4 py-3 text-ink text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted resize-none"
                    />
                    <p className="text-muted text-xs mt-1.5">
                      No es necesario que detalles síntomas por aquí.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-ink text-surface font-semibold rounded-full px-6 flex items-center justify-center gap-2 hover:bg-ink/90 transition-colors duration-200 mt-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-surface" />
                    <span>Enviar por WhatsApp</span>
                  </button>

                  {/* Medical disclaimer note */}
                  <div className="flex items-start gap-2.5 pt-3 text-muted text-[13px] leading-relaxed">
                    <Info className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                    <span>
                      Este canal no atiende urgencias. En una emergencia llama al 131 (SAMU) o acude al servicio de urgencia más cercano.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-secondary border-t border-line py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8 border-b border-line">
            <a href="#inicio" aria-label="Ir al inicio" className="focus:outline-hidden">
              {!logoError ? (
                <img
                  src={LOGO_SRC}
                  alt="Logo Consulta Doctor Danilo Rubio"
                  width={190}
                  height={50}
                  onError={() => setLogoError(true)}
                  className="h-9 md:h-11 w-auto object-contain"
                />
              ) : (
                <span className="text-xl font-semibold text-ink font-sans tracking-tight">
                  Dr. Danilo Rubio
                </span>
              )}
            </a>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={AGENDA_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-ink font-semibold rounded-full px-5 py-2.5 text-sm transition-colors duration-200 hover:bg-ink hover:text-surface"
              >
                Agenda tu hora
              </a>
              <a
                href={PHONE_TEL}
                className="text-sm font-medium text-ink hover:underline transition-colors"
              >
                +56 9 9804 1740
              </a>
              <a
                href={EMAIL_MAILTO}
                className="text-sm font-medium text-ink hover:underline transition-colors"
              >
                consulta.drrubio@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-ink">
            <div>
              <p className="font-medium text-ink mb-1">
                Consulta Doctor Danilo Rubio · Medicina general y familiar · Salud mental
              </p>
              <p className="text-muted text-xs">
                Av. Membrillar #230, oficina 56 (5° piso), Edificio Focus Center, Rancagua
              </p>
            </div>

            <p className="text-muted text-[13px]">
              © {new Date().getFullYear()} Consulta Doctor Danilo Rubio
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED BOTTOM BAR (<768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-line px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden flex items-center gap-3 shadow-md">
        <a
          href={AGENDA_ONLINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 bg-primary text-ink font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-ink hover:text-surface transition-colors duration-200 text-sm"
        >
          <CalendarDays className="w-5 h-5" />
          <span>Agendar hora</span>
        </a>

        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-surface hover:bg-ink/90 transition-colors shrink-0"
        >
          <MessageCircle className="w-5 h-5 text-surface" />
        </a>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (>=1024px or md:flex) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 group items-center">
        <span className="mr-3 px-3 py-1.5 bg-ink text-surface text-xs font-medium rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp
        </span>
        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="w-14 h-14 bg-ink rounded-full flex items-center justify-center text-surface shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 text-surface" />
        </a>
      </div>
    </div>
  );
}
