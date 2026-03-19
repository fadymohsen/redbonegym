export type Locale = "en" | "ar";

const translations = {
  en: {
    nav: {
      about: "About",
      gallery: "Gallery",
      subscriptions: "Subscriptions",
      facilities: "Facilities",
      contact: "Contact Us",
    },
    hero: {
      subtitle: "Science-Based Journey",
      cta: "Contact Us",
    },
    features: [
      {
        title: "Science-Based Journey",
        description:
          "Every piece of information and every movement in your Redbone Gym workouts is based on accurate science. We rely on the latest studies in nutrition and training to help you achieve your goals effectively and safely.",
      },
      {
        title: "Anatomy",
        description:
          "Every movement in your body has a reason, and every exercise has a purpose. At Redbone Gym, we focus on anatomy so that you understand how your muscles and joints work — helping you train smarter and avoid injury.",
      },
      {
        title: "Connection",
        description:
          "We connect your body, your mind, and your goals. We believe that strength isn't measured by muscles alone — it's built through consistency, awareness, and the right support system around you.",
      },
    ],
    about: {
      role: "Owner",
      name: "Captain Maged",
      bio1: "My gym journey began early, and it was the spark that sparked a passion that continues to this day. Over the years, I have gained deep experience in fitness training and nutrition science, and I have dedicated myself to helping others achieve their goals through science-based programs.",
      bio2: "At RedBone Gym, we believe fitness is not just about lifting weights — it's about building a lifestyle. Every program is designed with anatomy, biomechanics, and your individual goals in mind. Our approach combines cutting-edge training methodologies with personalized nutrition plans to deliver real, lasting results.",
    },
    gallery: {
      title: "Our Facility",
      items: ["Gym Floor", "Weight Area", "Cardio Zone", "Training Area", "Equipment", "Locker Room"],
    },
    subscriptions: {
      title: "Subscriptions",
      trainingPeriod: "Training period",
      sessions: "Sessions",
      days: "days",
      subscribe: "Subscribe",
      bestValue: "Best Value",
      cta: "Ask about the latest offers and join now!",
      callNow: "Call now",
    },
    activities: {
      title: "Activities & Services",
      items: [
        {
          title: "Enjoy 1 Day",
          description: "Experience our gym with a complimentary one-day trial session and see what RedBone Gym has to offer.",
        },
        {
          title: "InBody",
          description: "Get a detailed InBody body composition analysis to track your progress and fine-tune your training plan.",
        },
        {
          title: "Physical Therapy",
          description: "Professional physical therapy sessions for recovery, rehabilitation, and injury prevention.",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      address: "Address",
      addressValue: "3 Gamal El-Din Dwidar St., off Abbas El-Akkad, Nasr City, Cairo",
      email: "Email",
      phone: "Phone",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      send: "Send Message",
    },
    footer: {
      description: "Science-based fitness programs designed to transform your body and mind.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "RedBone Gym. All rights reserved.",
      poweredBy: "Powered by",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      gallery: "المعرض",
      subscriptions: "الاشتراكات",
      facilities: "المرافق",
      contact: "تواصل معنا",
    },
    hero: {
      subtitle: "رحلة قائمة على العلم",
      cta: "تواصل معنا",
    },
    features: [
      {
        title: "رحلة قائمة على العلم",
        description:
          "كل معلومة وكل حركة في تمارينك في ريدبون جيم مبنية على علم دقيق. نعتمد على أحدث الدراسات في التغذية والتدريب لمساعدتك على تحقيق أهدافك بفعالية وأمان.",
      },
      {
        title: "التشريح",
        description:
          "كل حركة في جسمك لها سبب، وكل تمرين له هدف. في ريدبون جيم، نركز على التشريح حتى تفهم كيف تعمل عضلاتك ومفاصلك — مما يساعدك على التدريب بذكاء وتجنب الإصابات.",
      },
      {
        title: "الترابط",
        description:
          "نربط جسمك وعقلك وأهدافك. نؤمن أن القوة لا تُقاس بالعضلات فقط — بل تُبنى من خلال الاستمرارية والوعي ونظام الدعم المناسب من حولك.",
      },
    ],
    about: {
      role: "المالك",
      name: "كابتن ماجد",
      bio1: "بدأت رحلتي في عالم الجيم مبكرًا، وكانت الشرارة التي أشعلت شغفًا لا يزال مستمرًا حتى اليوم. على مر السنين، اكتسبت خبرة عميقة في تدريب اللياقة البدنية وعلوم التغذية، وكرّست نفسي لمساعدة الآخرين على تحقيق أهدافهم من خلال برامج قائمة على العلم.",
      bio2: "في ريدبون جيم، نؤمن أن اللياقة البدنية ليست مجرد رفع أوزان — بل هي بناء نمط حياة. كل برنامج مصمم مع مراعاة التشريح والميكانيكا الحيوية وأهدافك الشخصية. نهجنا يجمع بين أحدث منهجيات التدريب وخطط التغذية الشخصية لتحقيق نتائج حقيقية ودائمة.",
    },
    gallery: {
      title: "مرافقنا",
      items: ["صالة الجيم", "منطقة الأوزان", "منطقة الكارديو", "منطقة التدريب", "المعدات", "غرفة الخزائن"],
    },
    subscriptions: {
      title: "الاشتراكات",
      trainingPeriod: "مدة التدريب",
      sessions: "الجلسات",
      days: "يوم",
      subscribe: "اشترك",
      bestValue: "أفضل قيمة",
      cta: "اسأل عن أحدث العروض وانضم الآن!",
      callNow: "اتصل الآن",
    },
    activities: {
      title: "الأنشطة والخدمات",
      items: [
        {
          title: "استمتع بيوم واحد",
          description: "جرّب صالتنا الرياضية بجلسة تجريبية مجانية ليوم واحد واكتشف ما يقدمه ريدبون جيم.",
        },
        {
          title: "إنبودي",
          description: "احصل على تحليل مفصّل لتكوين الجسم باستخدام جهاز إنبودي لتتبع تقدمك وضبط خطتك التدريبية.",
        },
        {
          title: "العلاج الطبيعي",
          description: "جلسات علاج طبيعي احترافية للتعافي وإعادة التأهيل والوقاية من الإصابات.",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      address: "العنوان",
      addressValue: "٣ شارع جمال الدين دويدار متفرع من عباس العقاد، مدينة نصر، القاهرة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "رسالتك",
      send: "إرسال الرسالة",
    },
    footer: {
      description: "برامج لياقة بدنية قائمة على العلم مصممة لتحويل جسمك وعقلك.",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      rights: "ريدبون جيم. جميع الحقوق محفوظة.",
      poweredBy: "مدعوم من",
    },
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
