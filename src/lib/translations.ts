export type Locale = "en" | "ar";

const translations = {
  en: {
    nav: {
      about: "About",
      gallery: "Gallery",
      subscriptions: "Subscriptions",
      facilities: "Facilities",
      contact: "Contact Us",
      services: "Services",
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
      title: "Gallery",
      items: ["Gym Floor", "Weight Area", "Cardio Zone", "Training Area", "Equipment", "Locker Room", "Stretching Zone", "Reception", "Group Classes"],
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
      viewAll: "View All Services",
      items: [
        { name: "Dr. Mostafa", price: "300" },
        { name: "Dr. Mohsen", price: "300" },
        { name: "Cupping & Massage", price: "600" },
        { name: "InBody Analysis", price: "100" },
        { name: "Day Use", price: "free", freeLabel: "Free" },
        { name: "Kick Boxing 🥊", price: "800" },
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
    app: {
      title: "Download Our App",
      description: "Take RedBone Gym wherever you go. Our free mobile app puts everything you need right at your fingertips — manage your membership, track your workouts, and book your sessions with just a few taps. Get real-time notifications about the latest offers, schedule changes, and exclusive member deals. Whether you're planning your next session or checking your progress, the RedBone Gym app keeps you connected to your fitness journey 24/7. Available on both iOS and Android.",
      appStore: "App Store",
      playStore: "Google Play",
      downloadOn: "Download on the",
      getItOn: "Get it on",
    },
    aboutPage: {
      heroTitle: "About RedBone Gym",
      heroSubtitle: "Where science meets strength. Your transformation starts here.",
      storyTitle: "Our Story",
      storyP1: "RedBone Gym was born from a simple belief: fitness should be accessible, science-based, and life-changing. Founded by Captain Maged, our gym started as a small training space and grew into one of Nasr City's most trusted fitness communities.",
      storyP2: "Every detail — from our equipment selection to our training programs — is designed with purpose. We don't follow trends; we follow science. That's what sets us apart.",
      missionTitle: "Our Mission",
      missionDesc: "To empower every individual to unlock their full physical potential through science-based training, expert guidance, and a supportive community that feels like family.",
      visionTitle: "Our Vision",
      visionDesc: "To be Cairo's leading fitness destination where results are real, knowledge is shared, and every member feels they belong.",
      valuesTitle: "Our Values",
      values: [
        { title: "Science First", desc: "Every program is backed by research in biomechanics, anatomy, and nutrition science." },
        { title: "Community", desc: "We're more than a gym — we're a family that pushes each other to be better every day." },
        { title: "Results Driven", desc: "We measure success by your progress. Real results, not empty promises." },
        { title: "Personalization", desc: "No cookie-cutter plans. Every member gets guidance tailored to their unique goals." },
      ],
      ownerTitle: "Meet the Founder",
      ownerCta: "Learn More About Us",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "What are your working hours?", a: "We're open daily from 6:00 AM to 12:00 AM (midnight), giving you maximum flexibility to train on your schedule." },
        { q: "Do I need previous gym experience?", a: "Not at all! We welcome beginners and advanced athletes alike. Our coaches will guide you through proper form and create a program that matches your fitness level." },
        { q: "How often should I work out per week?", a: "For most people, 3-5 sessions per week is ideal. We'll help you find the right balance between training and recovery based on your goals." },
        { q: "Do you provide nutrition plans?", a: "Yes! We believe nutrition is 70% of the journey. Our team can create personalized meal plans that complement your training program." },
        { q: "Can I freeze my membership?", a: "Yes, we offer flexible freeze options. Contact us for details about our freeze policy." },
        { q: "Is there a trial session available?", a: "Absolutely! We offer a complimentary one-day trial so you can experience RedBone Gym before committing to a membership." },
      ],
    },
    subscriptionsPage: {
      heroTitle: "Choose Your Plan",
      heroSubtitle: "Invest in yourself. Every great transformation starts with a single decision.",
      plans: [
        {
          slug: "1-month",
          motivational: "Start Strong",
          tagline: "The perfect way to kickstart your fitness journey. One month to build the habit that changes everything.",
          features: ["Full gym access", "Equipment orientation", "Locker room access"],
        },
        {
          slug: "3-months",
          motivational: "Build Momentum",
          tagline: "Three months is where real change happens. Enough time to see results and fall in love with the process.",
          features: ["Full gym access", "Progress tracking", "Locker room access"],
        },
        {
          slug: "6-months",
          motivational: "Transform Completely",
          tagline: "Half a year of dedication. This is where you'll look in the mirror and see someone new staring back.",
          features: ["Full gym access", "Progress tracking", "Nutrition guidance", "Locker room access"],
        },
        {
          slug: "1-year",
          motivational: "Commit to Greatness",
          tagline: "A full year of transformation. The ultimate commitment to becoming the best version of yourself.",
          features: ["Full gym access", "Priority coaching", "Nutrition plan", "InBody analysis", "Locker room access"],
        },
      ],
      whyTitle: "Why Join RedBone?",
      whyItems: [
        { title: "Expert Coaches", desc: "Certified trainers who know the science behind every rep." },
        { title: "Modern Equipment", desc: "Top-tier machines and free weights for every muscle group." },
        { title: "Proven Results", desc: "Hundreds of members have transformed their bodies with us." },
        { title: "Flexible Hours", desc: "Open from 6 AM to midnight — train when it works for you." },
      ],
      viewPlans: "View All Plans",
    },
    servicesPage: {
      heroTitle: "Our Services",
      heroSubtitle: "Professional services to complement your fitness journey. Book your session today.",
      bookNow: "Book via WhatsApp",
      free: "Free",
      services: [
        {
          name: "Dr. Mostafa",
          description: "Professional physiotherapy and rehabilitation sessions with Dr. Mostafa. Expert care for injury recovery, pain management, and performance optimization.",
          price: "300",
        },
        {
          name: "Dr. Mohsen",
          description: "Specialized medical consultations and sports medicine with Dr. Mohsen. Get expert advice on training-related health concerns and injury prevention.",
          price: "300",
        },
        {
          name: "Cupping & Massage",
          description: "Traditional cupping therapy and professional massage sessions for muscle recovery, improved blood circulation, and deep relaxation.",
          price: "600",
        },
        {
          name: "InBody Analysis",
          description: "Detailed body composition analysis using InBody technology. Track your muscle mass, body fat percentage, and water balance to fine-tune your training plan.",
          price: "100",
        },
        {
          name: "Day Use",
          description: "Experience RedBone Gym with a complimentary day pass. Try our equipment, feel the atmosphere, and see why our members love training here.",
          price: "free",
        },
        {
          name: "Kick Boxing 🥊",
          description: "High-energy kickboxing classes that build strength, improve cardio, and teach you real self-defense techniques. Suitable for all fitness levels.",
          price: "800",
        },
      ],
      ctaTitle: "Ready to Book?",
      ctaDesc: "Reserve your session now via WhatsApp and our team will confirm your appointment.",
    },
    footer: {
      description: "More than just a gym — RedBone is your second home. Whether you're just starting out or pushing past your limits, we've got the team, the energy, and the tools to help you become the best version of yourself. Come train with us and feel the difference.",
      workingHours: "Working Hours",
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
      services: "الخدمات",
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
      title: "المعرض",
      items: ["صالة الجيم", "منطقة الأوزان", "منطقة الكارديو", "منطقة التدريب", "المعدات", "غرفة الخزائن", "منطقة الإطالة", "الاستقبال", "الحصص الجماعية"],
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
      viewAll: "شوف كل الخدمات",
      items: [
        { name: "دكتور مصطفى", price: "300" },
        { name: "دكتور محسن", price: "300" },
        { name: "حجامة وماساج", price: "600" },
        { name: "تحليل InBody", price: "100" },
        { name: "يوم تجريبي", price: "free", freeLabel: "مجانًا" },
        { name: "كيك بوكسينج 🥊", price: "800" },
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
    app: {
      title: "حمّل الأبليكيشن بتاعنا",
      description: "خد ريدبون جيم معاك في أي مكان. الأبليكيشن بتاعنا ببلاش وهيخليك تعمل كل حاجة من موبايلك — تدير اشتراكك، تتابع تمارينك، وتحجز جلساتك بضغطة زرار. هتوصلك إشعارات بأحدث العروض والخصومات الحصرية للأعضاء، وأي تغيير في المواعيد هتعرفه أول بأول. سواء بتخطط لتمرينك الجاي أو عايز تشوف تقدمك، الأبليكيشن هيفضل معاك ٢٤ ساعة. متاح على iOS و Android.",
      appStore: "App Store",
      playStore: "Google Play",
      downloadOn: "حمّل من",
      getItOn: "احصل عليه من",
    },
    aboutPage: {
      heroTitle: "عن ريدبون جيم",
      heroSubtitle: "حيث يلتقي العلم بالقوة. تحوّلك يبدأ من هنا.",
      storyTitle: "قصتنا",
      storyP1: "ريدبون جيم اتولد من إيمان بسيط: اللياقة لازم تكون متاحة للكل، مبنية على العلم، وتغيّر حياتك. أسسه كابتن ماجد، وبدأ كمساحة تدريب صغيرة ونما ليكون واحد من أكتر مجتمعات اللياقة الموثوقة في مدينة نصر.",
      storyP2: "كل تفصيلة — من اختيار المعدات لبرامج التدريب — مصممة بهدف. احنا مش بنتبع الترندات؛ احنا بنتبع العلم. وده اللي بيميزنا.",
      missionTitle: "مهمتنا",
      missionDesc: "تمكين كل فرد من إطلاق إمكاناته البدنية الكاملة من خلال تدريب قائم على العلم، وتوجيه متخصص، ومجتمع داعم يحسسك إنك في عيلتك.",
      visionTitle: "رؤيتنا",
      visionDesc: "نكون الوجهة الرائدة للياقة البدنية في القاهرة حيث النتائج حقيقية، والمعرفة مشتركة، وكل عضو يحس إنه في مكانه.",
      valuesTitle: "قيمنا",
      values: [
        { title: "العلم أولاً", desc: "كل برنامج مدعوم بأبحاث في الميكانيكا الحيوية والتشريح وعلوم التغذية." },
        { title: "المجتمع", desc: "احنا أكتر من جيم — احنا عيلة بتدفع بعض للأفضل كل يوم." },
        { title: "نتائج حقيقية", desc: "نقيس النجاح بتقدمك. نتائج حقيقية، مش وعود فارغة." },
        { title: "التخصيص", desc: "مفيش خطط جاهزة. كل عضو بياخد توجيه مصمم لأهدافه الخاصة." },
      ],
      ownerTitle: "تعرّف على المؤسس",
      ownerCta: "اعرف أكتر عننا",
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "إيه مواعيد العمل؟", a: "مفتوحين يوميًا من ٦ الصبح لـ ١٢ بالليل، عشان تتمرن في أي وقت يناسبك." },
        { q: "محتاج خبرة سابقة في الجيم؟", a: "أبدًا! بنرحب بالمبتدئين والمتقدمين. مدربينا هيعلموك الفورم الصح ويعملولك برنامج يناسب مستواك." },
        { q: "كام مرة لازم أتمرن في الأسبوع؟", a: "لمعظم الناس، ٣-٥ جلسات في الأسبوع مثالية. هنساعدك تلاقي التوازن الصح بين التمرين والراحة حسب أهدافك." },
        { q: "بتقدموا خطط تغذية؟", a: "أيوا! بنؤمن إن التغذية ٧٠٪ من الرحلة. فريقنا يقدر يعمل لك خطة أكل شخصية تكمّل برنامجك التدريبي." },
        { q: "أقدر أجمّد اشتراكي؟", a: "أيوا، بنقدم خيارات تجميد مرنة. تواصل معانا لتفاصيل سياسة التجميد." },
        { q: "فيه جلسة تجريبية؟", a: "طبعًا! بنقدم يوم تجريبي مجاني عشان تجرب ريدبون جيم قبل ما تلتزم باشتراك." },
      ],
    },
    subscriptionsPage: {
      heroTitle: "اختار باقتك",
      heroSubtitle: "استثمر في نفسك. كل تحوّل عظيم بيبدأ بقرار واحد.",
      plans: [
        {
          slug: "1-month",
          motivational: "ابدأ بقوة",
          tagline: "الطريقة المثالية لبداية رحلتك الرياضية. شهر واحد لبناء العادة اللي هتغير كل حاجة.",
          features: ["دخول كامل للجيم", "توجيه على المعدات", "دخول غرفة الخزائن"],
        },
        {
          slug: "3-months",
          motivational: "ابني الزخم",
          tagline: "٣ شهور هي اللي بيحصل فيها التغيير الحقيقي. وقت كافي تشوف نتائج وتحب العملية.",
          features: ["دخول كامل للجيم", "متابعة التقدم", "دخول غرفة الخزائن"],
        },
        {
          slug: "6-months",
          motivational: "اتحوّل كليًا",
          tagline: "نص سنة من التفاني. هنا هتبص في المرايا وتشوف شخص جديد بيبصلك.",
          features: ["دخول كامل للجيم", "متابعة التقدم", "توجيه غذائي", "دخول غرفة الخزائن"],
        },
        {
          slug: "1-year",
          motivational: "التزم بالعظمة",
          tagline: "سنة كاملة من التحوّل. الالتزام الأقصى عشان تبقى أحسن نسخة من نفسك.",
          features: ["دخول كامل للجيم", "تدريب أولوي", "خطة تغذية", "تحليل InBody", "دخول غرفة الخزائن"],
        },
      ],
      whyTitle: "ليه تنضم لريدبون؟",
      whyItems: [
        { title: "مدربين متخصصين", desc: "مدربين معتمدين فاهمين العلم ورا كل تمرين." },
        { title: "معدات حديثة", desc: "أجهزة وأوزان حرة من أعلى مستوى لكل مجموعة عضلية." },
        { title: "نتائج مثبتة", desc: "مئات الأعضاء حوّلوا أجسامهم معانا." },
        { title: "مواعيد مرنة", desc: "مفتوحين من ٦ الصبح لنص الليل — تمرن في أي وقت يناسبك." },
      ],
      viewPlans: "شوف كل الباقات",
    },
    servicesPage: {
      heroTitle: "خدماتنا",
      heroSubtitle: "خدمات احترافية تكمّل رحلتك الرياضية. احجز جلستك النهارده.",
      bookNow: "احجز عبر واتساب",
      free: "مجانًا",
      services: [
        {
          name: "دكتور مصطفى",
          description: "جلسات علاج طبيعي وتأهيل احترافية مع دكتور مصطفى. رعاية متخصصة للتعافي من الإصابات وإدارة الألم وتحسين الأداء.",
          price: "300",
        },
        {
          name: "دكتور محسن",
          description: "استشارات طبية متخصصة وطب رياضي مع دكتور محسن. احصل على نصائح خبيرة بخصوص المشاكل الصحية المتعلقة بالتدريب والوقاية من الإصابات.",
          price: "300",
        },
        {
          name: "حجامة وماساج",
          description: "جلسات حجامة تقليدية وماساج احترافي لاستشفاء العضلات وتحسين الدورة الدموية والاسترخاء العميق.",
          price: "600",
        },
        {
          name: "تحليل InBody",
          description: "تحليل مفصّل لتكوين الجسم باستخدام تقنية إنبودي. تابع كتلة العضلات ونسبة الدهون وتوازن المياه لضبط خطتك التدريبية.",
          price: "100",
        },
        {
          name: "يوم تجريبي",
          description: "جرّب ريدبون جيم بيوم مجاني. جرب المعدات، حس بالأجواء، واعرف ليه أعضاؤنا بيحبوا يتمرنوا هنا.",
          price: "free",
        },
        {
          name: "كيك بوكسينج 🥊",
          description: "حصص كيك بوكسينج عالية الطاقة بتبني القوة وتحسّن الكارديو وتعلمك تقنيات دفاع عن النفس حقيقية. مناسبة لكل المستويات.",
          price: "800",
        },
      ],
      ctaTitle: "جاهز تحجز؟",
      ctaDesc: "احجز جلستك دلوقتي عبر واتساب وفريقنا هيأكد معادك.",
    },
    footer: {
      description: "ريدبون مش مجرد جيم — ده بيتك التاني. سواء لسه بتبدأ أو بتحاول تكسر حدودك، عندنا الفريق والطاقة والأدوات اللي هتساعدك تبقى أحسن نسخة من نفسك. تعالى تمرن معانا وحس بالفرق.",
      workingHours: "ساعات العمل",
      followUs: "تابعنا",
      rights: "ريدبون جيم. جميع الحقوق محفوظة.",
      poweredBy: "مدعوم من",
    },
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
