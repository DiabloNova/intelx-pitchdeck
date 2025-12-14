"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "fa" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
  isRTL: boolean
  mounted: boolean
}

const translations: Record<Language, Record<string, string>> = {
  fa: {
    // Brand
    brand_name: "اینتل‌ایکس",
    brand_tagline: "هوش حقوقی",

    // Navigation
    nav_home: "صفحه اصلی",
    nav_about_intelx: "درباره اینتل‌ایکس",
    nav_about_pazirik: "درباره پازیریک",
    nav_team: "تیم توسعه",
    nav_contact: "تماس با ما",

    // Cover Page
    title: "اینتل‌ایکس",
    subtitle: "دستیار هوشمند حقوقی تطبیق‌پذیر برای نظام قضایی ایران",
    proposal_subtitle: "طرح پیشنهادی برای پلتفرم هوشمند حقوقی با قابلیت تطبیق‌پذیری ساختاری",
    client: "کارفرما",
    client_name: "مرکز فناوری قوه قضاییه",
    proponent: "پیشنهاددهنده",
    company_name: "شرکت راشا گستر پازیریک",

    // Navigation (old)
    cover: "معرفی",
    adaptability: "تطبیق‌پذیری",
    architecture: "معماری",
    pipeline: "خط لوله RAG",
    roadmap: "نقشه راه",
    comparison: "مقایسه",
    document: "سند",

    // Adaptability Diagram
    adaptability_title: "از تطبیق پسین به تطبیق‌پذیری ساختاری",
    traditional_model: "مدل سنتی",
    post_hoc_adaptation: "تطبیق پسین",
    generic_ai: "مدل هوش مصنوعی عمومی",
    western_design: "طراحی غربی",
    mismatch_gap: "شکاف عدم تطابق",
    iranian_context: "بافت حقوقی ایران",
    unique_requirements: "الزامات منحصربفرد",
    superficial_integration: "یکپارچگی سطحی و شکننده",
    intelx_model: "مدل اینتل‌ایکس",
    structural_adaptability: "تطبیق‌پذیری ساختاری",
    integrated_legal: "هوش حقوقی یکپارچه",
    organic_growth: "رشد ارگانیک از درون",
    core_integration: "حقوق مدنی + فقه جعفری + آیین دادرسی",
    deep_integration: "یکپارچگی عمیق و بومی",

    // Architecture
    architecture_title: "معماری هسته اینتل‌ایکس",
    architecture_subtitle: "چارچوب یکپارچه‌سازی چندلایه",
    layer3: "لایه ۳ — رابط",
    socio_professional: "لایه اجتماعی-حرفه‌ای",
    professional_augmentation: "تقویت حرفه‌ای و چارچوب اعتماد",
    layer2: "لایه ۲ — پلتفرم",
    procedural_institutional: "لایه رویه‌ای-نهادی",
    procedural_compliance: "انطباق رویه‌ای رسمی (مانند یکپارچه‌سازی سامانه ثنا)",
    layer1: "لایه ۱ — پایه",
    normative_legal: "لایه هنجاری-حقوقی",
    integrated_corpus: "مجموعه حقوقی یکپارچه: قانون مدنی و فقه جعفری",
    data_flow: "جریان داده و زمینه",
    compliant_output: "خروجی منطبق",
    transparency: "شفافیت",
    context: "زمینه",

    // RAG Pipeline
    rag_title: "خط لوله RAG زمینه‌آگاه",
    rag_subtitle: "از پرسش تا بینش عملیاتی",
    input: "ورودی",
    legal_query: "پرسش حقوقی در زمینه",
    processing: "پردازش",
    context_analyzer: "تحلیلگر زمینه",
    case_type_history: "نوع پرونده، سابقه",
    retrieval: "بازیابی",
    multi_source: "بازیابی چندمنبعی",
    laws_precedents: "قوانین، پیشینه، متون فقهی",
    synthesis: "ترکیب",
    synthesis_engine: "موتور ترکیب تفسیری",
    output_traceability: "خروجی و ردیابی",
    draft_document: "پیش‌نویس سند",
    petition_memo: "دادخواست، لایحه",
    source_attribution: "استناد منبع",
    audit_trail: "و رد حسابرسی",

    // Implementation Roadmap
    roadmap_title: "استراتژی پیاده‌سازی فازبندی‌شده",
    pilot_phase: "فاز آزمایشی",
    months_1_4: "ماه‌های ۱-۴",
    pilot_desc: "استقرار محدود و آموزش کاربران",
    feedback_phase: "بازخورد و بهینه‌سازی",
    months_3_6: "ماه‌های ۳-۶",
    feedback_desc: "پالایش تکراری بر اساس نظرات ذینفعان",
    scaling_phase: "مقیاس‌پذیری",
    months_6_12: "ماه‌های ۶-۱۲",
    scaling_desc: "توسعه ماژول و گسترش افقی",
    knowledge_phase: "شبکه دانش",
    year_2_plus: "سال ۲+",
    knowledge_desc: "یکپارچه‌سازی پلتفرم و سیستم دانش ملی",

    // Comparison
    comparison_title: "اینتل‌ایکس: یک تغییر پارادایم",
    aspect: "جنبه",
    conventional_tools: "ابزارهای هوش مصنوعی حقوقی متعارف",
    intelx_platform: "پلتفرم تطبیقی اینتل‌ایکس",
    approach: "رویکرد",
    generic_ai_label: "هوش مصنوعی عمومی",
    custom_built: "معماری سفارشی‌ساز",
    legal_understanding: "درک حقوقی",
    surface_analysis: "تحلیل متن سطحی",
    deep_interpretive: "لایه تفسیری عمیق",
    transparency_label: "شفافیت",
    black_box: "جعبه سیاه",
    audit_visibility: "رد حسابرسی و مشاهده‌پذیری منبع",
    goal: "هدف",
    task_automation: "اتوماسیون وظایف",
    professional_aug: "تقویت حرفه‌ای",
    summary: "اینتل‌ایکس یکپارچگی عمیق و بومی برای چشم‌انداز حقوقی منحصربفرد ایران ارائه می‌دهد",

    // PDF Viewer
    document_title: "سند معرفی پروژه",
    loading: "در حال بارگذاری...",
    page: "صفحه",
    of: "از",
    zoom_in: "بزرگنمایی",
    zoom_out: "کوچکنمایی",
    download: "دانلود",

    // About IntelX Page
    about_intelx_title: "درباره اینتل‌ایکس",
    about_intelx_subtitle: "نسل جدید دستیار هوشمند حقوقی",
    about_intelx_intro:
      "اینتل‌ایکس یک پلتفرم هوش مصنوعی پیشرفته است که به‌طور خاص برای نظام حقوقی ایران طراحی و توسعه یافته است. این سیستم با درک عمیق از حقوق مدنی، فقه جعفری و آیین دادرسی ایران، یک همراه هوشمند برای متخصصان حقوقی فراهم می‌کند.",
    about_intelx_vision_title: "چشم‌انداز",
    about_intelx_vision:
      "تبدیل شدن به استاندارد طلایی فناوری حقوقی در ایران و ارائه راه‌حل‌های هوشمند که کارایی و دقت در نظام قضایی را افزایش دهد.",
    about_intelx_mission_title: "مأموریت",
    about_intelx_mission:
      "توانمندسازی وکلا، قضات و متخصصان حقوقی با ابزارهای هوش مصنوعی که درک عمیقی از چارچوب حقوقی منحصربفرد ایران دارند.",
    about_intelx_features_title: "ویژگی‌های کلیدی",
    feature_1_title: "تطبیق‌پذیری ساختاری",
    feature_1_desc: "طراحی شده از پایه برای ساختار حقوقی ایران، نه تطبیق سطحی",
    feature_2_title: "یکپارچگی فقهی",
    feature_2_desc: "درک عمیق از فقه جعفری و ادغام آن با قوانین مدنی",
    feature_3_title: "شفافیت کامل",
    feature_3_desc: "رد حسابرسی و استناد منبع برای هر پاسخ",
    feature_4_title: "امنیت سطح سازمانی",
    feature_4_desc: "حفاظت از داده‌های حساس حقوقی با بالاترین استانداردها",

    // About Pazirik Page
    about_pazirik_title: "درباره پازیریک",
    about_pazirik_subtitle: "پل ارتباطی شما با روسیه",
    about_pazirik_intro:
      "شرکت راشا گستر پازیریک یکی از پیشروترین شرکت‌های ارائه خدمات تجاری و مشاوره‌ای در زمینه توسعه روابط تجاری ایران و روسیه است.",
    about_pazirik_establishment_title: "تأسیس شرکت",
    about_pazirik_establishment:
      "شرکت راشا گستر پازیریک در چهارم دی ماه سال ۱۳۹۸ به شماره ثبت ۵۵۲۱۵۳ به شناسه ملی ۱۴۰۰۸۸۶۶۸۸۵ در تهران تشکیل گردید. این شرکت با سرمایه دو میلیارد ریال تأسیس گردیده است.",
    about_pazirik_services_title: "حوزه‌های فعالیت",
    service_1_title: "خدمات تجاری",
    service_1_desc: "صادرات و واردات، خدمات پس از فروش، ترخیص کالا از گمرکات",
    service_2_title: "خدمات مالی",
    service_2_desc: "اخذ وام و تسهیلات بانکی، گشایش اعتبارات والسی، خدمات ارزی و ریالی",
    service_3_title: "خدمات آموزشی",
    service_3_desc: "مشاوره تحصیلی، برگزاری همایش و سمینار، اعزام دانشجو",
    service_4_title: "توسعه شبکه",
    service_4_desc: "ایجاد شعب و نمایندگی، شرکت در نمایشگاه‌ها، اخذ و اعطای نمایندگی",

    // Team Page
    team_title: "تیم توسعه",
    team_subtitle: "متخصصان پشت اینتل‌ایکس",
    team_intro:
      "تیم ما متشکل از متخصصان با تجربه در حوزه‌های هوش مصنوعی، حقوق، و فناوری اطلاعات است که با تعهد به نوآوری، در حال ساخت آینده فناوری حقوقی ایران هستند.",
    team_ceo: "مدیرعامل",
    team_ceo_name: "دکتر حمیدرضا بیات",
    team_ceo_desc: "دکترای مهندسی فیزیولوژی و بیوشیمی از روسیه",
    team_coo: "مدیر عملیات",
    team_coo_name: "دکتر زینب احمدی",
    team_coo_desc: "دکترای متدولوژی آموزش زبان روسی از روسیه، مدیر عامل موسسه آبادیس پارسیان دانش",
    team_values_title: "ارزش‌های ما",
    value_1: "نوآوری مستمر",
    value_2: "تعهد به کیفیت",
    value_3: "احترام به حریم خصوصی",
    value_4: "همکاری و شفافیت",

    // Contact Page
    contact_title: "تماس با ما",
    contact_subtitle: "منتظر شنیدن نظرات شما هستیم",
    contact_address_title: "آدرس",
    contact_address: "تهران، یوسف‌آباد، خیابان عبدالمجید اکبری، برج سپهر سایه، طبقه ۱۰، واحد ۱۰۰۴",
    contact_phone_title: "تلفن",
    contact_phone_1: "۰۹۱۲۲۱۸۳۶۵۳",
    contact_phone_2: "۰۲۱۸۸۵۵۲۶۲۳",
    contact_phone_3: "۰۲۱۸۸۵۵۲۶۲۴",
    contact_email_title: "ایمیل",
    contact_email: "info@pazirik.org",
    contact_form_title: "فرم تماس",
    contact_name: "نام و نام خانوادگی",
    contact_email_input: "آدرس ایمیل",
    contact_message: "پیام شما",
    contact_submit: "ارسال پیام",
    contact_success: "پیام شما با موفقیت ارسال شد!",
  },
  en: {
    // Brand
    brand_name: "INTELX",
    brand_tagline: "Legal Intelligence",

    // Navigation
    nav_home: "Home",
    nav_about_intelx: "About IntelX",
    nav_about_pazirik: "About Pazirik",
    nav_team: "Team",
    nav_contact: "Contact",

    // Cover Page
    title: "INTELX",
    subtitle: "An Adaptive AI Legal Assistant for Iran's Judicial System",
    proposal_subtitle: "A Proposal for a Structurally Adaptive Legal Intelligence Platform",
    client: "Client",
    client_name: "Center for Technology of the Judiciary",
    proponent: "Proponent",
    company_name: "Rasha Gostar Pazirik Company",

    // Navigation (old)
    cover: "Cover",
    adaptability: "Adaptability",
    architecture: "Architecture",
    pipeline: "RAG Pipeline",
    roadmap: "Roadmap",
    comparison: "Comparison",
    document: "Document",

    // Adaptability Diagram
    adaptability_title: "From Post-Hoc Adaptation to Structural Adaptability",
    traditional_model: "Traditional Model",
    post_hoc_adaptation: "Post-Hoc Adaptation",
    generic_ai: "Generic AI Model",
    western_design: "Western-centric design",
    mismatch_gap: "Mismatch Gap",
    iranian_context: "Iranian Legal Context",
    unique_requirements: "Unique requirements",
    superficial_integration: "Superficial & Fragile Integration",
    intelx_model: "IntelX Model",
    structural_adaptability: "Structural Adaptability",
    integrated_legal: "Integrated Legal Intelligence",
    organic_growth: "Growing organically from within",
    core_integration: "Civil Law + Jafari Fiqh + Procedural Code",
    deep_integration: "Deep & Native Integration",

    // Architecture
    architecture_title: "IntelX Core Architecture",
    architecture_subtitle: "A Multi-Layer Integration Framework",
    layer3: "Layer 3 — Interface",
    socio_professional: "Socio-Professional Layer",
    professional_augmentation: "Professional Augmentation & Trust Framework",
    layer2: "Layer 2 — Platform",
    procedural_institutional: "Procedural-Institutional Layer",
    procedural_compliance: "Formal Procedural Compliance (e.g., Sana System Integration)",
    layer1: "Layer 1 — Foundation",
    normative_legal: "Normative-Legal Layer",
    integrated_corpus: "Integrated Legal Corpus: Civil Code & Jafari Jurisprudence",
    data_flow: "Data Flow & Context",
    compliant_output: "Compliant Output",
    transparency: "Transparency",
    context: "Context",

    // RAG Pipeline
    rag_title: "Context-Aware RAG Pipeline",
    rag_subtitle: "From Query to Actionable Insight",
    input: "Input",
    legal_query: "Legal Query in Context",
    processing: "Processing",
    context_analyzer: "Context Analyzer",
    case_type_history: "Case Type, History",
    retrieval: "Retrieval",
    multi_source: "Multi-Source Retrieval",
    laws_precedents: "Laws, Precedents, Jurisprudential Texts",
    synthesis: "Synthesis",
    synthesis_engine: "Interpretive Synthesis Engine",
    output_traceability: "Output & Traceability",
    draft_document: "Draft Document",
    petition_memo: "Petition, Memo",
    source_attribution: "Source Attribution",
    audit_trail: "& Audit Trail",

    // Implementation Roadmap
    roadmap_title: "Phased Implementation Strategy",
    pilot_phase: "Pilot Phase",
    months_1_4: "Months 1-4",
    pilot_desc: "Limited Deployment & User Training",
    feedback_phase: "Feedback & Optimization",
    months_3_6: "Months 3-6",
    feedback_desc: "Iterative Refinement Based on Stakeholder Input",
    scaling_phase: "Scaling",
    months_6_12: "Months 6-12",
    scaling_desc: "Module Development & Horizontal Expansion",
    knowledge_phase: "Knowledge Network",
    year_2_plus: "Year 2+",
    knowledge_desc: "Platform Integration & National Knowledge System",

    // Comparison
    comparison_title: "IntelX: A Paradigm Shift",
    aspect: "Aspect",
    conventional_tools: "Conventional AI Legal Tools",
    intelx_platform: "IntelX Adaptive Platform",
    approach: "Approach",
    generic_ai_label: "Generic AI",
    custom_built: "Custom-Built Architecture",
    legal_understanding: "Legal Understanding",
    surface_analysis: "Surface-level Text Analysis",
    deep_interpretive: "Deep Interpretive Layer",
    transparency_label: "Transparency",
    black_box: "Black Box",
    audit_visibility: "Audit Trail & Source Visibility",
    goal: "Goal",
    task_automation: "Task Automation",
    professional_aug: "Professional Augmentation",
    summary: "IntelX delivers deep, native integration for Iran's unique legal landscape",

    // PDF Viewer
    document_title: "Project Introduction Document",
    loading: "Loading...",
    page: "Page",
    of: "of",
    zoom_in: "Zoom In",
    zoom_out: "Zoom Out",
    download: "Download",

    // About IntelX Page
    about_intelx_title: "About IntelX",
    about_intelx_subtitle: "The Next Generation Legal AI Assistant",
    about_intelx_intro:
      "IntelX is an advanced AI platform specifically designed and developed for Iran's legal system. With deep understanding of civil law, Jafari jurisprudence, and Iranian procedural code, this system provides an intelligent companion for legal professionals.",
    about_intelx_vision_title: "Vision",
    about_intelx_vision:
      "To become the gold standard in legal technology in Iran and provide intelligent solutions that enhance efficiency and accuracy in the judicial system.",
    about_intelx_mission_title: "Mission",
    about_intelx_mission:
      "Empowering lawyers, judges, and legal professionals with AI tools that have deep understanding of Iran's unique legal framework.",
    about_intelx_features_title: "Key Features",
    feature_1_title: "Structural Adaptability",
    feature_1_desc: "Designed from the ground up for Iran's legal structure, not superficial adaptation",
    feature_2_title: "Jurisprudential Integration",
    feature_2_desc: "Deep understanding of Jafari Fiqh and its integration with civil laws",
    feature_3_title: "Complete Transparency",
    feature_3_desc: "Audit trail and source attribution for every response",
    feature_4_title: "Enterprise-Grade Security",
    feature_4_desc: "Protection of sensitive legal data with the highest standards",

    // About Pazirik Page
    about_pazirik_title: "About Pazirik",
    about_pazirik_subtitle: "Your Bridge to Russia",
    about_pazirik_intro:
      "Rasha Gostar Pazirik Company is one of the leading companies providing commercial services and consulting in the development of trade relations between Iran and Russia.",
    about_pazirik_establishment_title: "Company Establishment",
    about_pazirik_establishment:
      "Rasha Gostar Pazirik Company was established on December 25, 2019, with registration number 552153 and national ID 14008866885 in Tehran. The company was founded with a capital of two billion Rials.",
    about_pazirik_services_title: "Areas of Activity",
    service_1_title: "Commercial Services",
    service_1_desc: "Import and export, after-sales services, customs clearance",
    service_2_title: "Financial Services",
    service_2_desc: "Banking loans and facilities, letter of credit opening, currency and Rial services",
    service_3_title: "Educational Services",
    service_3_desc: "Educational consulting, conferences and seminars, student dispatch",
    service_4_title: "Network Development",
    service_4_desc: "Branch and agency establishment, exhibition participation, agency acquisition and granting",

    // Team Page
    team_title: "Development Team",
    team_subtitle: "The Experts Behind IntelX",
    team_intro:
      "Our team consists of experienced experts in artificial intelligence, law, and information technology, committed to innovation and building the future of legal technology in Iran.",
    team_ceo: "CEO",
    team_ceo_name: "Dr. Hamidreza Bayat",
    team_ceo_desc: "PhD in Physiology and Biochemistry Engineering from Russia",
    team_coo: "COO",
    team_coo_name: "Dr. Zeinab Ahmadi",
    team_coo_desc: "PhD in Russian Language Teaching Methodology from Russia, CEO of Abadis Parsian Danesh Institute",
    team_values_title: "Our Values",
    value_1: "Continuous Innovation",
    value_2: "Commitment to Quality",
    value_3: "Privacy Respect",
    value_4: "Collaboration & Transparency",

    // Contact Page
    contact_title: "Contact Us",
    contact_subtitle: "We'd love to hear from you",
    contact_address_title: "Address",
    contact_address: "Tehran, Yousefabad, Abdolmajid Akbari St., Sepehr Saye Tower, 10th Floor, Unit 1004",
    contact_phone_title: "Phone",
    contact_phone_1: "09122183653",
    contact_phone_2: "02188552623",
    contact_phone_3: "02188552624",
    contact_email_title: "Email",
    contact_email: "info@pazirik.org",
    contact_form_title: "Contact Form",
    contact_name: "Full Name",
    contact_email_input: "Email Address",
    contact_message: "Your Message",
    contact_submit: "Send Message",
    contact_success: "Your message has been sent successfully!",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem("intelx-language") as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const html = document.documentElement
    html.setAttribute("dir", language === "fa" ? "rtl" : "ltr")
    html.setAttribute("lang", language)
    localStorage.setItem("intelx-language", language)
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"))
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const isRTL = language === "fa"

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
