const errorCodesData = [
  {
    "brand": "LG",
    "errorCode": "CH05",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Communication error between indoor and outdoor unit.",
      "fr": "Erreur de communication entre l'unité intérieure et extérieure.",
      "ar": "خطأ في الاتصال بين الوحدة الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check wiring connections.",
        "Verify PCB voltage.",
        "Restart system."
      ],
      "fr": [
        "Vérifiez les connexions de câblage.",
        "Vérifiez la tension du PCB.",
        "Redémarrez le système."
      ],
      "ar": [
        "تحقق من توصيلات الأسلاك.",
        "التحقق من الجهد ثنائي الفينيل متعدد الكلور.",
        "إعادة تشغيل النظام."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH21",
    "problemTitle": {
      "en": "DC Peak Error (Compressor)",
      "fr": "Erreur de crête CC (compresseur)",
      "ar": "خطأ ذروة التيار المستمر (الضاغط)"
    },
    "problemDescription": {
      "en": "Inverter compressor overcurrent detected.",
      "fr": "Surintensité du compresseur inverseur détectée.",
      "ar": "تم اكتشاف التيار الزائد للضاغط العاكس."
    },
    "solutionSteps": {
      "en": [
        "Check compressor winding resistance.",
        "Verify inverter PCB."
      ],
      "fr": [
        "Vérifiez la résistance de l'enroulement du compresseur.",
        "Vérifiez la carte PCB de l'onduleur."
      ],
      "ar": [
        "تحقق من مقاومة لف الضاغط.",
        "التحقق من العاكس ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH34",
    "problemTitle": {
      "en": "High Pressure Safety",
      "fr": "Sécurité haute pression",
      "ar": "سلامة الضغط العالي"
    },
    "problemDescription": {
      "en": "Abnormally high pressure in the refrigerant system.",
      "fr": "Pression anormalement élevée dans le système réfrigérant.",
      "ar": "ارتفاع الضغط بشكل غير طبيعي في نظام التبريد."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor condenser coil.",
        "Check fan motor operation.",
        "Check for overcharged refrigerant."
      ],
      "fr": [
        "Nettoyer le serpentin extérieur du condenseur.",
        "Vérifiez le fonctionnement du moteur du ventilateur.",
        "Vérifiez s'il y a une surcharge de réfrigérant."
      ],
      "ar": [
        "تنظيف ملف المكثف الخارجي.",
        "تحقق من تشغيل محرك المروحة.",
        "تحقق من وجود سائل التبريد الزائد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH01",
    "problemTitle": {
      "en": "Indoor Temperature Sensor Error",
      "fr": "Erreur du capteur de température intérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الداخلي"
    },
    "problemDescription": {
      "en": "The indoor room temperature thermistor is open or shorted.",
      "fr": "La thermistance de température ambiante intérieure est ouverte ou en court-circuit.",
      "ar": "الثرمستور لدرجة حرارة الغرفة الداخلية مفتوح أو قصير."
    },
    "solutionSteps": {
      "en": [
        "Inspect sensor wiring.",
        "Replace thermistor if faulty."
      ],
      "fr": [
        "Inspectez le câblage du capteur.",
        "Remplacez la thermistance si elle est défectueuse."
      ],
      "ar": [
        "فحص أسلاك الاستشعار.",
        "استبدل الثرمستور إذا كان معيبًا."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH10",
    "problemTitle": {
      "en": "Indoor Fan Motor Issue",
      "fr": "Problème de moteur de ventilateur intérieur",
      "ar": "مشكلة محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "The indoor fan motor is operating abnormally.",
      "fr": "Le moteur du ventilateur intérieur fonctionne anormalement.",
      "ar": "محرك المروحة الداخلية يعمل بشكل غير طبيعي."
    },
    "solutionSteps": {
      "en": [
        "Check fan blade blockages.",
        "Test motor capacitor and connections."
      ],
      "fr": [
        "Vérifiez les blocages des pales du ventilateur.",
        "Testez le condensateur et les connexions du moteur."
      ],
      "ar": [
        "تحقق من انسداد شفرة المروحة.",
        "اختبار مكثفات المحرك والوصلات."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH61",
    "problemTitle": {
      "en": "Condenser Pipe Sensor Extra High Temp",
      "fr": "Capteur de tuyau de condenseur très haute température",
      "ar": "مستشعر أنبوب المكثف بدرجة حرارة عالية جدًا"
    },
    "problemDescription": {
      "en": "Outdoor unit coil temperature is too high.",
      "fr": "La température du serpentin de l’unité extérieure est trop élevée.",
      "ar": "درجة حرارة ملف الوحدة الخارجية مرتفعة جدًا."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor unit.",
        "Ensure no airflow obstructions."
      ],
      "fr": [
        "Nettoyer l’unité extérieure.",
        "Assurez-vous qu’il n’y a aucune obstruction du flux d’air."
      ],
      "ar": [
        "وحدة خارجية نظيفة.",
        "تأكد من عدم وجود عوائق لتدفق الهواء."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH53",
    "problemTitle": {
      "en": "Communication Error (Indoor to Main)",
      "fr": "Erreur de communication (intérieur vers principal)",
      "ar": "خطأ في الاتصال (من الداخل إلى الرئيسي)"
    },
    "problemDescription": {
      "en": "Signal loss between indoor unit and main network.",
      "fr": "Perte de signal entre l’unité intérieure et le réseau principal.",
      "ar": "فقدان الإشارة بين الوحدة الداخلية والشبكة الرئيسية."
    },
    "solutionSteps": {
      "en": [
        "Reset breaker.",
        "Inspect communication cables."
      ],
      "fr": [
        "Réinitialisez le disjoncteur.",
        "Inspectez les câbles de communication."
      ],
      "ar": [
        "إعادة تعيين الكسارة.",
        "فحص كابلات الاتصالات."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH38",
    "problemTitle": {
      "en": "Refrigerant Leakage",
      "fr": "Fuite de réfrigérant",
      "ar": "تسرب المبردات"
    },
    "problemDescription": {
      "en": "System has detected a low refrigerant level.",
      "fr": "Le système a détecté un faible niveau de réfrigérant.",
      "ar": "اكتشف النظام مستوى منخفض من مادة التبريد."
    },
    "solutionSteps": {
      "en": [
        "Check for leaks.",
        "Evacuate and recharge refrigerant."
      ],
      "fr": [
        "Vérifiez les fuites.",
        "Évacuez et rechargez le réfrigérant."
      ],
      "ar": [
        "تحقق من وجود تسربات.",
        "إخلاء وإعادة شحن المبرد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH02",
    "problemTitle": {
      "en": "Indoor Pipe Thermistor Error",
      "fr": "Erreur de thermistance de tuyau intérieur",
      "ar": "خطأ في الثرمستور في الأنابيب الداخلية"
    },
    "problemDescription": {
      "en": "The indoor pipe temperature sensor is malfunctioning.",
      "fr": "Le capteur de température du tuyau intérieur fonctionne mal.",
      "ar": "جهاز استشعار درجة حرارة الأنبوب الداخلي معطل."
    },
    "solutionSteps": {
      "en": [
        "Check sensor connection on the indoor board.",
        "Replace pipe thermistor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur sur la carte intérieure.",
        "Remplacez la thermistance du tuyau."
      ],
      "ar": [
        "تحقق من اتصال المستشعر على اللوحة الداخلية.",
        "استبدال الثرمستور الأنابيب."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH03",
    "problemTitle": {
      "en": "Remote Controller Communication Error",
      "fr": "Erreur de communication de la télécommande",
      "ar": "خطأ في اتصال وحدة التحكم عن بعد"
    },
    "problemDescription": {
      "en": "Data transfer failed between wired remote and indoor PCB.",
      "fr": "Le transfert de données a échoué entre la télécommande filaire et le PCB intérieur.",
      "ar": "فشل نقل البيانات بين جهاز التحكم عن بعد السلكي وثنائي الفينيل متعدد الكلور الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check remote control wiring.",
        "Replace remote controller if damaged."
      ],
      "fr": [
        "Vérifiez le câblage de la télécommande.",
        "Remplacez la télécommande si elle est endommagée."
      ],
      "ar": [
        "تحقق من أسلاك جهاز التحكم عن بعد.",
        "استبدل وحدة التحكم عن بعد في حالة تلفها."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH04",
    "problemTitle": {
      "en": "Drain Pump Error",
      "fr": "Erreur de pompe de vidange",
      "ar": "خطأ في مضخة التصريف"
    },
    "problemDescription": {
      "en": "Water drainage failure usually detected by the float switch.",
      "fr": "Défaillance de l'évacuation de l'eau généralement détectée par l'interrupteur à flotteur.",
      "ar": "عادةً ما يتم اكتشاف فشل تصريف المياه بواسطة مفتاح التعويم."
    },
    "solutionSteps": {
      "en": [
        "Clean drain pan and pipe.",
        "Test the drain pump mechanism."
      ],
      "fr": [
        "Nettoyer le bac de récupération et le tuyau.",
        "Testez le mécanisme de la pompe de vidange."
      ],
      "ar": [
        "تنظيف عموم الصرف والأنابيب.",
        "اختبار آلية مضخة الصرف."
      ]
    },
    "category": "Drainage Problems",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH06",
    "problemTitle": {
      "en": "Indoor Pipe Thermistor (Out) Error",
      "fr": "Erreur de thermistance de tuyau intérieur (sortie)",
      "ar": "خطأ في الثرمستور (الخارج) للأنبوب الداخلي"
    },
    "problemDescription": {
      "en": "The outgoing pipe temperature sensor is reading out of bounds.",
      "fr": "Le capteur de température du tuyau sortant affiche des valeurs hors limites.",
      "ar": "يقرأ مستشعر درجة حرارة الأنبوب الصادر خارج الحدود."
    },
    "solutionSteps": {
      "en": [
        "Check thermistor resistance.",
        "Re-seat or replace sensor."
      ],
      "fr": [
        "Vérifiez la résistance de la thermistance.",
        "Réinstallez ou remplacez le capteur."
      ],
      "ar": [
        "تحقق من مقاومة الثرمستور.",
        "أعد مقعد أو استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH07",
    "problemTitle": {
      "en": "Dual Compressor Mode Error",
      "fr": "Erreur du mode double compresseur",
      "ar": "خطأ في وضع الضاغط المزدوج"
    },
    "problemDescription": {
      "en": "Operation conflict in multi-split system modes.",
      "fr": "Conflit de fonctionnement dans les modes système multi-split.",
      "ar": "صراع التشغيل في أوضاع النظام متعدد الانقسام."
    },
    "solutionSteps": {
      "en": [
        "Set all indoor units to the same mode (cooling/heating)."
      ],
      "fr": [
        "Réglez toutes les unités intérieures sur le même mode (refroidissement/chauffage)."
      ],
      "ar": [
        "اضبط جميع الوحدات الداخلية على نفس الوضع (تبريد/تدفئة)."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "LG",
    "errorCode": "CH09",
    "problemTitle": {
      "en": "EEPROM Error (Indoor)",
      "fr": "Erreur EEPROM (intérieure)",
      "ar": "خطأ EEPROM (داخلي)"
    },
    "problemDescription": {
      "en": "Indoor unit PCB memory failure.",
      "fr": "Panne de mémoire PCB de l’unité intérieure.",
      "ar": "عطل في ذاكرة PCB للوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Reset main power.",
        "Replace indoor unit main board."
      ],
      "fr": [
        "Réinitialisez l’alimentation principale.",
        "Remplacez la carte principale de l’unité intérieure."
      ],
      "ar": [
        "إعادة ضبط الطاقة الرئيسية.",
        "استبدل اللوحة الرئيسية للوحدة الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH11",
    "problemTitle": {
      "en": "Connecting Wire Error",
      "fr": "Erreur de fil de connexion",
      "ar": "خطأ في توصيل الأسلاك"
    },
    "problemDescription": {
      "en": "Incorrect wiring between indoor and outdoor unit terminals.",
      "fr": "Câblage incorrect entre les bornes de l’unité intérieure et extérieure.",
      "ar": "توصيلات غير صحيحة بين أطراف الوحدة الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Verify wiring matches L/N/C strictly.",
        "Fix crossed wires."
      ],
      "fr": [
        "Vérifiez que le câblage correspond strictement à L/N/C.",
        "Réparez les fils croisés."
      ],
      "ar": [
        "تحقق من تطابق الأسلاك مع L/N/C بدقة.",
        "إصلاح الأسلاك المتقاطعة."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH22",
    "problemTitle": {
      "en": "AC Input Voltage Error",
      "fr": "Erreur de tension d'entrée CA",
      "ar": "خطأ في جهد إدخال التيار المتردد"
    },
    "problemDescription": {
      "en": "Incoming power supply is outside operational limits.",
      "fr": "L’alimentation électrique entrante est en dehors des limites opérationnelles.",
      "ar": "مصدر الطاقة الوارد يقع خارج الحدود التشغيلية."
    },
    "solutionSteps": {
      "en": [
        "Check breaker voltage.",
        "Install stable power supply/regulator."
      ],
      "fr": [
        "Vérifiez la tension du disjoncteur.",
        "Installez une alimentation/régulateur stable."
      ],
      "ar": [
        "التحقق من الجهد الكسارة.",
        "قم بتثبيت مصدر طاقة/منظم ثابت."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH23",
    "problemTitle": {
      "en": "DC Link Low Voltage Error",
      "fr": "Erreur de basse tension du lien CC",
      "ar": "خطأ في الجهد المنخفض لرابط DC"
    },
    "problemDescription": {
      "en": "Inverter board DC link voltage has plummeted.",
      "fr": "La tension du circuit intermédiaire de la carte onduleur a chuté.",
      "ar": "لقد انخفض جهد وصلة التيار المستمر للوحة العاكس."
    },
    "solutionSteps": {
      "en": [
        "Measure DC voltage at capacitor.",
        "Replace outdoor inverter board."
      ],
      "fr": [
        "Mesurez la tension continue au niveau du condensateur.",
        "Remplacez la carte de l'onduleur extérieur."
      ],
      "ar": [
        "قياس الجهد المستمر في المكثف.",
        "استبدال لوحة العاكس في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH24",
    "problemTitle": {
      "en": "High Pressure Switch Open",
      "fr": "Pressostat haute pression ouvert",
      "ar": "مفتاح الضغط العالي مفتوح"
    },
    "problemDescription": {
      "en": "Mechanical high pressure switch has tripped to protect compressor.",
      "fr": "Le pressostat mécanique haute pression s’est déclenché pour protéger le compresseur.",
      "ar": "لقد تعثر مفتاح الضغط العالي الميكانيكي لحماية الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check for refrigerant overcharge.",
        "Ensure condenser fan is running."
      ],
      "fr": [
        "Vérifiez la surcharge de réfrigérant.",
        "Assurez-vous que le ventilateur du condenseur fonctionne."
      ],
      "ar": [
        "تحقق من الشحن الزائد لغاز التبريد.",
        "تأكد من تشغيل مروحة المكثف."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH26",
    "problemTitle": {
      "en": "DC Compressor Position Error",
      "fr": "Erreur de position du compresseur CC",
      "ar": "خطأ في موضع ضاغط التيار المستمر"
    },
    "problemDescription": {
      "en": "Inverter fail to detect compressor rotor position.",
      "fr": "L’onduleur ne parvient pas à détecter la position du rotor du compresseur.",
      "ar": "فشل العاكس في اكتشاف موضع دوار الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check output to compressor.",
        "Replace compressor or active inverter PCB."
      ],
      "fr": [
        "Vérifiez la sortie vers le compresseur.",
        "Remplacez le compresseur ou la carte électronique active de l'onduleur."
      ],
      "ar": [
        "تحقق من الإخراج إلى الضاغط.",
        "استبدل الضاغط أو العاكس النشط PCB."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH27",
    "problemTitle": {
      "en": "PSC Fault Error",
      "fr": "Erreur de défaut PSC",
      "ar": "خطأ خطأ PSC"
    },
    "problemDescription": {
      "en": "Power factor correction module or reactor failing.",
      "fr": "Module de correction du facteur de puissance ou réacteur défaillant.",
      "ar": "وحدة تصحيح معامل القدرة أو فشل المفاعل."
    },
    "solutionSteps": {
      "en": [
        "Check reactor wiring.",
        "Replace outdoor PCB."
      ],
      "fr": [
        "Vérifiez le câblage du réacteur.",
        "Remplacez le PCB extérieur."
      ],
      "ar": [
        "فحص أسلاك المفاعل.",
        "استبدال ثنائي الفينيل متعدد الكلور في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH29",
    "problemTitle": {
      "en": "Compressor Phase Overcurrent",
      "fr": "Surintensité de phase du compresseur",
      "ar": "مرحلة الضاغط التيار الزائد"
    },
    "problemDescription": {
      "en": "Excessive current detected on a single compressor phase.",
      "fr": "Courant excessif détecté sur une seule phase du compresseur.",
      "ar": "تم اكتشاف تيار زائد في مرحلة ضاغط واحدة."
    },
    "solutionSteps": {
      "en": [
        "Megger test compressor.",
        "Check inverter output module."
      ],
      "fr": [
        "Compresseur d'essai Megger.",
        "Vérifiez le module de sortie de l'onduleur."
      ],
      "ar": [
        "ضاغط اختبار ميجار.",
        "تحقق من وحدة إخراج العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH32",
    "problemTitle": {
      "en": "Discharge Pipe Temp Error",
      "fr": "Erreur de température du tuyau de décharge",
      "ar": "خطأ في درجة حرارة أنبوب التفريغ"
    },
    "problemDescription": {
      "en": "Inverter compressor is overheating at discharge.",
      "fr": "Le compresseur inverseur surchauffe au refoulement.",
      "ar": "يسخن الضاغط العاكس عند التفريغ."
    },
    "solutionSteps": {
      "en": [
        "Check refrigerant levels (often low).",
        "Check EEV opening."
      ],
      "fr": [
        "Vérifiez les niveaux de réfrigérant (souvent bas).",
        "Vérifiez l'ouverture de l'EEV."
      ],
      "ar": [
        "تحقق من مستويات سائل التبريد (غالبًا ما تكون منخفضة).",
        "تحقق من فتح EEV."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "LG",
    "errorCode": "CH40",
    "problemTitle": {
      "en": "CT Sensor Error",
      "fr": "Erreur du capteur CT",
      "ar": "خطأ في مستشعر الأشعة المقطعية"
    },
    "problemDescription": {
      "en": "Current transformer sensor circuit logic failure.",
      "fr": "Défaillance logique du circuit du capteur du transformateur de courant.",
      "ar": "فشل منطق دائرة استشعار المحول الحالي."
    },
    "solutionSteps": {
      "en": [
        "Replace outdoor inverter board carrying the CT sensor."
      ],
      "fr": [
        "Remplacez la carte de l'onduleur extérieur portant le capteur CT."
      ],
      "ar": [
        "استبدل اللوحة العاكسة الخارجية التي تحمل جهاز استشعار الأشعة المقطعية."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Temperature Sensor",
      "fr": "Capteur de température ambiante",
      "ar": "مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Thermistor short or open circuit.",
      "fr": "Thermistance en court-circuit ou en circuit ouvert.",
      "ar": "الثرمستور دائرة قصيرة أو مفتوحة."
    },
    "solutionSteps": {
      "en": [
        "Check connections.",
        "Replace indoor thermistor."
      ],
      "fr": [
        "Vérifiez les connexions.",
        "Remplacez la thermistance intérieure."
      ],
      "ar": [
        "تحقق من الاتصالات.",
        "استبدل الثرمستور الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Evaporator Pipe Sensor",
      "fr": "Capteur de tuyau d'évaporateur",
      "ar": "مستشعر أنبوب المبخر"
    },
    "problemDescription": {
      "en": "Indoor coil temperature sensor fault.",
      "fr": "Défaut du capteur de température de la batterie intérieure.",
      "ar": "خطأ في مستشعر درجة حرارة الملف الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Ensure proper airflow.",
        "Replace sensor if uncalibrated."
      ],
      "fr": [
        "Assurer une bonne circulation de l’air.",
        "Remplacez le capteur s’il n’est pas calibré."
      ],
      "ar": [
        "ضمان تدفق الهواء المناسب.",
        "استبدل المستشعر إذا لم تتم معايرته."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Indoor Fan Motor Malfunction",
      "fr": "Dysfonctionnement du moteur du ventilateur intérieur",
      "ar": "عطل في محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Fan speed is out of parameters or locked.",
      "fr": "La vitesse du ventilateur est hors paramètres ou verrouillée.",
      "ar": "سرعة المروحة خارج المعلمات أو مقفلة."
    },
    "solutionSteps": {
      "en": [
        "Clear fan obstructions.",
        "Replace fan motor."
      ],
      "fr": [
        "Éliminez les obstructions du ventilateur.",
        "Remplacez le moteur du ventilateur."
      ],
      "ar": [
        "إزالة عوائق المروحة.",
        "استبدل محرك المروحة."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E101",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "No communication between indoor and outdoor units.",
      "fr": "Aucune communication entre les unités intérieures et extérieures.",
      "ar": "لا يوجد اتصال بين الوحدات الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Verify power wiring.",
        "Check communication lines."
      ],
      "fr": [
        "Vérifiez le câblage électrique.",
        "Vérifiez les lignes de communication."
      ],
      "ar": [
        "التحقق من أسلاك الطاقة.",
        "التحقق من خطوط الاتصال."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E121",
    "problemTitle": {
      "en": "Room Sensor Open/Short",
      "fr": "Sonde d'ambiance ouverte/court-circuitée",
      "ar": "مستشعر الغرفة مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Defective indoor temperature sensor.",
      "fr": "Capteur de température intérieure défectueux.",
      "ar": "جهاز استشعار درجة الحرارة في الأماكن المغلقة معيب."
    },
    "solutionSteps": {
      "en": [
        "Reseat sensor plug.",
        "Replace sensor module."
      ],
      "fr": [
        "Réinstallez le bouchon du capteur.",
        "Remplacez le module de capteur."
      ],
      "ar": [
        "أعد تثبيت قابس المستشعر.",
        "استبدال وحدة الاستشعار."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E464",
    "problemTitle": {
      "en": "IPM Overcurrent",
      "fr": "Surintensité IPM",
      "ar": "IPM التيار الزائد"
    },
    "problemDescription": {
      "en": "Inverter Power Module overcurrent protection activated.",
      "fr": "Protection contre les surintensités du module de puissance de l'onduleur activée.",
      "ar": "تم تنشيط حماية التيار الزائد لوحدة الطاقة العاكسة."
    },
    "solutionSteps": {
      "en": [
        "Inspect compressor wiring.",
        "Evaluate inverter PCB."
      ],
      "fr": [
        "Inspectez le câblage du compresseur.",
        "Évaluez le PCB de l’onduleur."
      ],
      "ar": [
        "فحص أسلاك الضاغط.",
        "تقييم العاكس ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E554",
    "problemTitle": {
      "en": "Gas Leak Detected",
      "fr": "Fuite de gaz détectée",
      "ar": "تم اكتشاف تسرب الغاز"
    },
    "problemDescription": {
      "en": "Abnormal pressure indicative of refrigerant loss.",
      "fr": "Pression anormale indiquant une perte de réfrigérant.",
      "ar": "يشير الضغط غير الطبيعي إلى فقدان مادة التبريد."
    },
    "solutionSteps": {
      "en": [
        "Find and seal leak.",
        "Recharge system."
      ],
      "fr": [
        "Trouver et colmater la fuite.",
        "Système de recharge."
      ],
      "ar": [
        "البحث عن التسرب وإغلاقه.",
        "نظام إعادة الشحن."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E202",
    "problemTitle": {
      "en": "Communication Time Out",
      "fr": "Délai de communication",
      "ar": "انتهت مهلة الاتصالات"
    },
    "problemDescription": {
      "en": "Indoor unit cannot receive data from outdoor unit.",
      "fr": "L'unité intérieure ne peut pas recevoir de données de l'unité extérieure.",
      "ar": "لا يمكن للوحدة الداخلية استقبال البيانات من الوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check cable lengths and shields.",
        "Reset main breaker."
      ],
      "fr": [
        "Vérifiez les longueurs et les blindages des câbles.",
        "Réinitialisez le disjoncteur principal."
      ],
      "ar": [
        "تحقق من أطوال الكابلات والدروع.",
        "إعادة ضبط الكسارة الرئيسية."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Indoor Heat Exchanger Sensor",
      "fr": "Capteur d'échangeur de chaleur intérieur",
      "ar": "مستشعر المبادل الحراري الداخلي"
    },
    "problemDescription": {
      "en": "Freeze protection triggered by indoor coil sensor.",
      "fr": "Protection antigel déclenchée par le capteur de la batterie intérieure.",
      "ar": "الحماية من التجميد الناتجة عن مستشعر الملف الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Clean air filters.",
        "Verify indoor fan is working properly."
      ],
      "fr": [
        "Nettoyer les filtres à air.",
        "Vérifiez que le ventilateur intérieur fonctionne correctement."
      ],
      "ar": [
        "مرشحات الهواء النظيفة.",
        "تحقق من أن المروحة الداخلية تعمل بشكل صحيح."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Indoor Unit EEPROM Error",
      "fr": "Erreur EEPROM de l’unité intérieure",
      "ar": "خطأ في الوحدة الداخلية EEPROM"
    },
    "problemDescription": {
      "en": "Corruption in the indoor board memory parameters.",
      "fr": "Corruption des paramètres de mémoire de la carte intérieure.",
      "ar": "الفساد في معلمات ذاكرة اللوحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Restore EEPROM option codes.",
        "Replace indoor PCB."
      ],
      "fr": [
        "Restaurez les codes d’option EEPROM.",
        "Remplacez le PCB intérieur."
      ],
      "ar": [
        "استعادة رموز خيار EEPROM.",
        "استبدل ثنائي الفينيل متعدد الكلور الداخلي."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E154",
    "problemTitle": {
      "en": "Indoor Fan Error",
      "fr": "Erreur du ventilateur intérieur",
      "ar": "خطأ في المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Feedback missing from indoor fan hall sensor.",
      "fr": "Commentaires manquants du capteur du hall du ventilateur intérieur.",
      "ar": "ردود الفعل مفقودة من مستشعر قاعة المروحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check fan motor terminals.",
        "Replace indoor fan motor."
      ],
      "fr": [
        "Vérifiez les bornes du moteur du ventilateur.",
        "Remplacez le moteur du ventilateur intérieur."
      ],
      "ar": [
        "تحقق من أطراف محرك المروحة.",
        "استبدل محرك المروحة الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E162",
    "problemTitle": {
      "en": "EEPROM Error (Outdoor)",
      "fr": "Erreur EEPROM (extérieur)",
      "ar": "خطأ EEPROM (خارجي)"
    },
    "problemDescription": {
      "en": "Outdoor unit control board memory failed.",
      "fr": "La mémoire de la carte de commande de l’unité extérieure est défaillante.",
      "ar": "فشلت ذاكرة لوحة التحكم بالوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Reset main power to system.",
        "Replace outdoor control board."
      ],
      "fr": [
        "Réinitialisez l’alimentation principale du système.",
        "Remplacez le tableau de commande extérieur."
      ],
      "ar": [
        "إعادة ضبط الطاقة الرئيسية للنظام.",
        "استبدال لوحة التحكم الخارجية"
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E163",
    "problemTitle": {
      "en": "EEPROM Option Setting Error",
      "fr": "Erreur de réglage de l'option EEPROM",
      "ar": "خطأ في إعداد خيار EEPROM"
    },
    "problemDescription": {
      "en": "System configuration option codes are invalid or lost.",
      "fr": "Les codes d'option de configuration du système sont invalides ou perdus.",
      "ar": "رموز خيارات تكوين النظام غير صالحة أو مفقودة."
    },
    "solutionSteps": {
      "en": [
        "Re-enter option codes via remote controller."
      ],
      "fr": [
        "Saisissez à nouveau les codes d'option via la télécommande."
      ],
      "ar": [
        "أعد إدخال رموز الخيارات عبر جهاز التحكم عن بعد."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E201",
    "problemTitle": {
      "en": "Comms Error (Indoor to Outdoor)",
      "fr": "Erreur de communication (intérieur vers extérieur)",
      "ar": "خطأ في الاتصال (من الداخل إلى الخارج)"
    },
    "problemDescription": {
      "en": "Outdoor unit is not responding to indoor unit.",
      "fr": "L'unité extérieure ne répond pas à l'unité intérieure.",
      "ar": "الوحدة الخارجية لا تستجيب للوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check F1/F2 terminals.",
        "Verify outdoor PCB is powered."
      ],
      "fr": [
        "Vérifiez les bornes F1/F2.",
        "Vérifiez que le PCB extérieur est alimenté."
      ],
      "ar": [
        "تحقق من محطات F1/F2.",
        "تحقق من تشغيل ثنائي الفينيل متعدد الكلور الخارجي."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E203",
    "problemTitle": {
      "en": "Comms Time Out (Outdoor to Main)",
      "fr": "Délai d'expiration des communications (extérieur vers principal)",
      "ar": "انتهاء مهلة الاتصالات (من الخارج إلى الرئيسي)"
    },
    "problemDescription": {
      "en": "Signal path failure in multi-system main board to sub-board.",
      "fr": "Défaillance du chemin du signal de la carte principale multisystème vers la sous-carte.",
      "ar": "فشل مسار الإشارة من اللوحة الرئيسية متعددة الأنظمة إلى اللوحة الفرعية."
    },
    "solutionSteps": {
      "en": [
        "Check communication loop.",
        "Ensure terminating resistors are placed correctly."
      ],
      "fr": [
        "Vérifiez la boucle de communication.",
        "Assurez-vous que les résistances de terminaison sont placées correctement."
      ],
      "ar": [
        "تحقق من حلقة الاتصال.",
        "تأكد من وضع مقاومات النهاية بشكل صحيح."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E221",
    "problemTitle": {
      "en": "Outdoor Temp Sensor Error",
      "fr": "Erreur du capteur de température extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor ambient temperature thermistor damaged.",
      "fr": "Thermistance de température ambiante extérieure endommagée.",
      "ar": "تلف الثرمستور في درجة الحرارة المحيطة بالخارج."
    },
    "solutionSteps": {
      "en": [
        "Inspect sensor wire.",
        "Replace outdoor ambient sensor."
      ],
      "fr": [
        "Inspectez le fil du capteur.",
        "Remplacez le capteur ambiant extérieur."
      ],
      "ar": [
        "افحص سلك المستشعر.",
        "استبدل مستشعر البيئة الخارجية."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E231",
    "problemTitle": {
      "en": "Condenser Temp Sensor Error",
      "fr": "Erreur du capteur de température du condenseur",
      "ar": "خطأ في مستشعر درجة حرارة المكثف"
    },
    "problemDescription": {
      "en": "Outdoor heat exchanger thermistor abnormal.",
      "fr": "Thermistance de l’échangeur thermique extérieur anormale.",
      "ar": "الثرمستور للمبادل الحراري الخارجي غير طبيعي."
    },
    "solutionSteps": {
      "en": [
        "Check connection at outdoor board.",
        "Replace condenser sensor."
      ],
      "fr": [
        "Vérifiez la connexion au tableau extérieur.",
        "Remplacez le capteur du condenseur."
      ],
      "ar": [
        "تحقق من الاتصال على اللوحة الخارجية.",
        "استبدل مستشعر المكثف."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Samsung",
    "errorCode": "E251",
    "problemTitle": {
      "en": "Discharge Temp Sensor Error",
      "fr": "Erreur du capteur de température de décharge",
      "ar": "خطأ في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge sensor open or shorted.",
      "fr": "Capteur de décharge du compresseur ouvert ou en court-circuit.",
      "ar": "مستشعر تفريغ الضاغط مفتوح أو قصير."
    },
    "solutionSteps": {
      "en": [
        "Ensure sensor is firmly attached to discharge pipe.",
        "Replace sensor."
      ],
      "fr": [
        "Assurez-vous que le capteur est fermement fixé au tuyau de refoulement.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تأكد من توصيل المستشعر بإحكام بأنبوب التفريغ.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E461",
    "problemTitle": {
      "en": "Inverter Compressor Starting Failure",
      "fr": "Panne de démarrage du compresseur inverseur",
      "ar": "فشل بدء تشغيل الضاغط العاكس"
    },
    "problemDescription": {
      "en": "Compressor rotor failed to rotate during startup sequence.",
      "fr": "Le rotor du compresseur n'a pas réussi à tourner pendant la séquence de démarrage.",
      "ar": "فشل دوار الضاغط في الدوران أثناء تسلسل بدء التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Check compressor winding.",
        "Check inverter PCB IGBTs."
      ],
      "fr": [
        "Vérifiez l'enroulement du compresseur.",
        "Vérifiez les IGBT du PCB de l'onduleur."
      ],
      "ar": [
        "تحقق من لف الضاغط.",
        "تحقق من العاكس PCB IGBTs."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E462",
    "problemTitle": {
      "en": "I_Trip Error / PFC Overcurrent",
      "fr": "Erreur I_Trip / Surintensité PFC",
      "ar": "خطأ I_Trip / التيار الزائد PFC"
    },
    "problemDescription": {
      "en": "Total system current is too high.",
      "fr": "Le courant total du système est trop élevé.",
      "ar": "إجمالي تيار النظام مرتفع جدًا."
    },
    "solutionSteps": {
      "en": [
        "Verify clean power supply.",
        "Check condenser fan operation to rule out high pressure load."
      ],
      "fr": [
        "Vérifiez que l'alimentation électrique est propre.",
        "Vérifiez le fonctionnement du ventilateur du condenseur pour exclure toute charge à haute pression."
      ],
      "ar": [
        "التحقق من إمدادات الطاقة النظيفة.",
        "تحقق من تشغيل مروحة المكثف لاستبعاد حمل الضغط العالي."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E465",
    "problemTitle": {
      "en": "Compressor V_limit Error",
      "fr": "Erreur V_limit du compresseur",
      "ar": "خطأ في الضاغط V_limit"
    },
    "problemDescription": {
      "en": "Voltage limit to the compressor exceeded.",
      "fr": "Limite de tension du compresseur dépassée.",
      "ar": "تجاوز الحد الأقصى لجهد الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Inspect inverter module.",
        "Confirm stable main voltage."
      ],
      "fr": [
        "Inspectez le module onduleur.",
        "Confirmez la stabilité de la tension principale."
      ],
      "ar": [
        "فحص وحدة العاكس.",
        "تأكيد الجهد الرئيسي المستقر."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E466",
    "problemTitle": {
      "en": "DC Link Voltage Error",
      "fr": "Erreur de tension de liaison CC",
      "ar": "خطأ في جهد وصلة التيار المستمر"
    },
    "problemDescription": {
      "en": "Under/Over voltage on the DC link capacitor bank.",
      "fr": "Sous/surtension sur la batterie de condensateurs du circuit intermédiaire.",
      "ar": "انخفاض / زيادة الجهد على بنك مكثف وصلة DC."
    },
    "solutionSteps": {
      "en": [
        "Test AC input voltage.",
        "Replace outdoor inverter board."
      ],
      "fr": [
        "Testez la tension d’entrée CA.",
        "Remplacez la carte de l'onduleur extérieur."
      ],
      "ar": [
        "اختبار جهد إدخال التيار المتردد.",
        "استبدال لوحة العاكس في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Samsung",
    "errorCode": "E500",
    "problemTitle": {
      "en": "IPM Overheat Error",
      "fr": "Erreur de surchauffe IPM",
      "ar": "خطأ في سخونة IPM"
    },
    "problemDescription": {
      "en": "Inverter power module heatsink is dangerously hot.",
      "fr": "Le dissipateur thermique du module d’alimentation de l’onduleur est dangereusement chaud.",
      "ar": "المبدد الحراري لوحدة الطاقة العاكسة ساخن بشكل خطير."
    },
    "solutionSteps": {
      "en": [
        "Clear debris from outdoor unit.",
        "Apply thermal paste to new IPM if bare."
      ],
      "fr": [
        "Éliminez les débris de l’unité extérieure.",
        "Appliquez de la pâte thermique sur le nouvel IPM s'il est nu."
      ],
      "ar": [
        "قم بإزالة الحطام من الوحدة الخارجية.",
        "ضع المعجون الحراري على المكافحة المتكاملة للآفات الجديدة إذا كانت عارية."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "U0",
    "problemTitle": {
      "en": "Refrigerant Shortage",
      "fr": "Pénurie de réfrigérant",
      "ar": "نقص المبردات"
    },
    "problemDescription": {
      "en": "System operates at low pressure due to missing refrigerant.",
      "fr": "Le système fonctionne à basse pression en raison du manque de réfrigérant.",
      "ar": "يعمل النظام عند ضغط منخفض بسبب فقدان مادة التبريد."
    },
    "solutionSteps": {
      "en": [
        "Check for leaks.",
        "Regas the unit."
      ],
      "fr": [
        "Vérifiez les fuites.",
        "Refaites le plein d'énergie."
      ],
      "ar": [
        "تحقق من وجود تسربات.",
        "ريجاس الوحدة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "U4",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Transmission error between indoor and outdoor units.",
      "fr": "Erreur de transmission entre les unités intérieures et extérieures.",
      "ar": "خطأ في النقل بين الوحدات الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check control wires.",
        "Check power supply to both units."
      ],
      "fr": [
        "Vérifiez les fils de commande.",
        "Vérifiez l'alimentation électrique des deux unités."
      ],
      "ar": [
        "تحقق من أسلاك التحكم.",
        "تحقق من مصدر الطاقة لكلتا الوحدتين."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Discharge Pipe Temperature Control",
      "fr": "Contrôle de la température du tuyau de refoulement",
      "ar": "التحكم في درجة حرارة أنبوب التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge pipe is too hot.",
      "fr": "Le tuyau de refoulement du compresseur est trop chaud.",
      "ar": "أنبوب تفريغ الضاغط ساخن جدًا."
    },
    "solutionSteps": {
      "en": [
        "Check for refrigerant shortage.",
        "Inspect for pipe blockages."
      ],
      "fr": [
        "Vérifiez s'il y a un manque de réfrigérant.",
        "Inspectez les tuyaux bloqués."
      ],
      "ar": [
        "التحقق من نقص المبردات.",
        "فحص انسداد الأنابيب."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "A1",
    "problemTitle": {
      "en": "Indoor PCB Defect",
      "fr": "Défaut de PCB intérieur",
      "ar": "عيب ثنائي الفينيل متعدد الكلور داخلي"
    },
    "problemDescription": {
      "en": "Malfunction of indoor unit printed circuit board.",
      "fr": "Dysfonctionnement du circuit imprimé de l’unité intérieure.",
      "ar": "عطل في لوحة الدائرة المطبوعة للوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Reset power.",
        "Replace indoor PCB."
      ],
      "fr": [
        "Réinitialisez l’alimentation.",
        "Remplacez le PCB intérieur."
      ],
      "ar": [
        "إعادة ضبط الطاقة.",
        "استبدل ثنائي الفينيل متعدد الكلور الداخلي."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "A5",
    "problemTitle": {
      "en": "High Pressure / Freeze-Up",
      "fr": "Haute pression / gel",
      "ar": "ارتفاع الضغط / التجميد"
    },
    "problemDescription": {
      "en": "Heat exchanger freezing or high pressure safety activated.",
      "fr": "Gel de l'échangeur thermique ou sécurité haute pression activée.",
      "ar": "تجميد المبادل الحراري أو تفعيل أمان الضغط العالي."
    },
    "solutionSteps": {
      "en": [
        "Clean air filters.",
        "Ensure proper airflow."
      ],
      "fr": [
        "Nettoyer les filtres à air.",
        "Assurer une bonne circulation de l’air."
      ],
      "ar": [
        "مرشحات الهواء النظيفة.",
        "ضمان تدفق الهواء المناسب."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Outdoor Fan Motor Fault",
      "fr": "Défaut du moteur du ventilateur extérieur",
      "ar": "عطل في محرك المروحة الخارجية"
    },
    "problemDescription": {
      "en": "DC fan motor lock or overload.",
      "fr": "Verrouillage ou surcharge du moteur du ventilateur CC.",
      "ar": "قفل محرك مروحة التيار المستمر أو التحميل الزائد."
    },
    "solutionSteps": {
      "en": [
        "Clear debris from fan.",
        "Check fan motor windings."
      ],
      "fr": [
        "Retirez les débris du ventilateur.",
        "Vérifiez les enroulements du moteur du ventilateur."
      ],
      "ar": [
        "قم بإزالة الحطام من المروحة.",
        "تحقق من اللفات محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "L5",
    "problemTitle": {
      "en": "Inverter Compressor Overcurrent",
      "fr": "Surintensité du compresseur inverseur",
      "ar": "التيار الزائد للضاغط العاكس"
    },
    "problemDescription": {
      "en": "Compressor drawing too much current.",
      "fr": "Le compresseur consomme trop de courant.",
      "ar": "الضاغط يسحب الكثير من التيار."
    },
    "solutionSteps": {
      "en": [
        "Check for compressor short.",
        "Verify inverter board output."
      ],
      "fr": [
        "Vérifiez s'il y a un court-circuit dans le compresseur.",
        "Vérifiez la sortie de la carte de l'onduleur."
      ],
      "ar": [
        "تحقق من وجود ضاغط قصير.",
        "التحقق من إخراج لوحة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "U2",
    "problemTitle": {
      "en": "Power Supply Voltage Issue",
      "fr": "Problème de tension d'alimentation",
      "ar": "مشكلة الجهد الكهربائي"
    },
    "problemDescription": {
      "en": "Low voltage or main circuit overvoltage.",
      "fr": "Basse tension ou surtension du circuit principal.",
      "ar": "الجهد المنخفض أو الجهد الزائد للدائرة الرئيسية."
    },
    "solutionSteps": {
      "en": [
        "Check incoming main power.",
        "Inspect power transformer."
      ],
      "fr": [
        "Vérifiez l’alimentation principale entrante.",
        "Inspectez le transformateur de puissance."
      ],
      "ar": [
        "تحقق من الطاقة الرئيسية الواردة.",
        "فحص محول الطاقة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "A3",
    "problemTitle": {
      "en": "Drain System Error",
      "fr": "Erreur du système de vidange",
      "ar": "خطأ في نظام الصرف"
    },
    "problemDescription": {
      "en": "Water level in the drain pan has reached the safety float switch.",
      "fr": "Le niveau d'eau dans le bac de récupération a atteint l'interrupteur à flotteur de sécurité.",
      "ar": "وصل مستوى الماء في وعاء التصريف إلى مفتاح تعويم الأمان."
    },
    "solutionSteps": {
      "en": [
        "Unclog the drain hose.",
        "Clean the drain pan.",
        "Check drain pump operation."
      ],
      "fr": [
        "Débouchez le tuyau de vidange.",
        "Nettoyez le bac de récupération.",
        "Vérifiez le fonctionnement de la pompe de vidange."
      ],
      "ar": [
        "قم بفك خرطوم التصريف.",
        "قم بتنظيف وعاء التصريف.",
        "التحقق من تشغيل مضخة التصريف."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "A6",
    "problemTitle": {
      "en": "Fan Motor Lock / Overload",
      "fr": "Verrouillage/surcharge du moteur du ventilateur",
      "ar": "قفل محرك المروحة / التحميل الزائد"
    },
    "problemDescription": {
      "en": "Indoor fan motor abnormal load or jammed.",
      "fr": "Charge anormale ou blocage du moteur du ventilateur intérieur.",
      "ar": "محرك المروحة الداخلية حمل غير طبيعي أو محشور."
    },
    "solutionSteps": {
      "en": [
        "Ensure fan drum rotates freely.",
        "Replace fan motor PCB."
      ],
      "fr": [
        "Assurez-vous que le tambour du ventilateur tourne librement.",
        "Remplacez la carte électronique du moteur du ventilateur."
      ],
      "ar": [
        "تأكد من أن أسطوانة المروحة تدور بحرية.",
        "استبدل محرك المروحة PCB."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "C4",
    "problemTitle": {
      "en": "Liquid Pipe Thermistor Error",
      "fr": "Erreur de thermistance du tuyau de liquide",
      "ar": "خطأ في الثرمستور في الأنبوب السائل"
    },
    "problemDescription": {
      "en": "Defect in the liquid pipe temperature sensor.",
      "fr": "Défaut dans le capteur de température du tuyau liquide.",
      "ar": "خلل في حساس درجة حرارة أنبوب السائل."
    },
    "solutionSteps": {
      "en": [
        "Verify resistance values of the thermistor.",
        "Replace thermistor."
      ],
      "fr": [
        "Vérifiez les valeurs de résistance de la thermistance.",
        "Remplacez la thermistance."
      ],
      "ar": [
        "التحقق من قيم مقاومة الثرمستور.",
        "استبدل الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "C5",
    "problemTitle": {
      "en": "Gas Pipe Thermistor Error",
      "fr": "Erreur de thermistance du tuyau de gaz",
      "ar": "خطأ في الثرمستور في أنبوب الغاز"
    },
    "problemDescription": {
      "en": "Defect in the gas pipe temperature sensor.",
      "fr": "Défaut dans le capteur de température du tuyau de gaz.",
      "ar": "خلل في حساس درجة حرارة أنبوب الغاز."
    },
    "solutionSteps": {
      "en": [
        "Check connection at the indoor PCB.",
        "Replace thermistor."
      ],
      "fr": [
        "Vérifiez la connexion au PCB intérieur.",
        "Remplacez la thermistance."
      ],
      "ar": [
        "تحقق من الاتصال في PCB الداخلي.",
        "استبدل الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "C9",
    "problemTitle": {
      "en": "Suction Air Thermistor Error",
      "fr": "Erreur de thermistance d’air d’aspiration",
      "ar": "خطأ في شفط الهواء الثرمستور"
    },
    "problemDescription": {
      "en": "Return air temperature sensor operates incorrectly.",
      "fr": "Le capteur de température de l’air de reprise ne fonctionne pas correctement.",
      "ar": "مستشعر درجة حرارة الهواء الراجع يعمل بشكل غير صحيح."
    },
    "solutionSteps": {
      "en": [
        "Check wire harness.",
        "Replace suction thermistor."
      ],
      "fr": [
        "Vérifiez le faisceau de câbles.",
        "Remplacez la thermistance d'aspiration."
      ],
      "ar": [
        "تحقق من تسخير الأسلاك.",
        "استبدال الثرمستور الشفط."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "CJ",
    "problemTitle": {
      "en": "Remote Controller Thermistor Error",
      "fr": "Erreur de thermistance de la télécommande",
      "ar": "خطأ الثرمستور في جهاز التحكم عن بعد"
    },
    "problemDescription": {
      "en": "Sensor inside the wired remote is faulty.",
      "fr": "Le capteur à l’intérieur de la télécommande filaire est défectueux.",
      "ar": "المستشعر الموجود داخل جهاز التحكم عن بعد السلكي معيب."
    },
    "solutionSteps": {
      "en": [
        "Replace the wired remote controller."
      ],
      "fr": [
        "Remplacez la télécommande filaire."
      ],
      "ar": [
        "استبدل وحدة التحكم عن بعد السلكية."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Outdoor PCB Defect",
      "fr": "Défaut de PCB extérieur",
      "ar": "عيب ثنائي الفينيل متعدد الكلور في الهواء الطلق"
    },
    "problemDescription": {
      "en": "Logic failure on the main outdoor circuit board.",
      "fr": "Défaillance logique sur le circuit imprimé principal extérieur.",
      "ar": "فشل منطقي على لوحة الدائرة الكهربائية الرئيسية في الهواء الطلق."
    },
    "solutionSteps": {
      "en": [
        "Restart the system.",
        "Replace outdoor control board if persistent."
      ],
      "fr": [
        "Redémarrez le système.",
        "Remplacez le panneau de commande extérieur si cela persiste."
      ],
      "ar": [
        "أعد تشغيل النظام.",
        "استبدل لوحة التحكم الخارجية إذا كانت مستمرة."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "E3",
    "problemTitle": {
      "en": "High Pressure Control",
      "fr": "Contrôle haute pression",
      "ar": "التحكم في الضغط العالي"
    },
    "problemDescription": {
      "en": "High pressure switch has been activated.",
      "fr": "Le pressostat haute pression a été activé.",
      "ar": "تم تفعيل مفتاح الضغط العالي."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor unit.",
        "Verify outdoor fan motor running.",
        "Check refrigerant pressure."
      ],
      "fr": [
        "Nettoyer l’unité extérieure.",
        "Vérifiez que le moteur du ventilateur extérieur fonctionne.",
        "Vérifiez la pression du réfrigérant."
      ],
      "ar": [
        "وحدة خارجية نظيفة.",
        "التحقق من تشغيل محرك المروحة الخارجية.",
        "تحقق من ضغط المبرد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Low Pressure Control",
      "fr": "Contrôle basse pression",
      "ar": "التحكم في الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Low pressure switch activated.",
      "fr": "Pressostat basse pression activé.",
      "ar": "تم تفعيل مفتاح الضغط المنخفض."
    },
    "solutionSteps": {
      "en": [
        "Check for refrigerant leaks.",
        "Check electronic expansion valve function."
      ],
      "fr": [
        "Vérifiez les fuites de réfrigérant.",
        "Vérifier le fonctionnement du détendeur électronique."
      ],
      "ar": [
        "تحقق من وجود تسرب لغاز التبريد.",
        "التحقق من وظيفة صمام التوسع الإلكتروني."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Compressor Motor Lock",
      "fr": "Verrouillage du moteur du compresseur",
      "ar": "قفل محرك الضاغط"
    },
    "problemDescription": {
      "en": "Compressor fails to turn due to mechanical failure or locking.",
      "fr": "Le compresseur ne tourne pas en raison d’une défaillance mécanique ou d’un blocage.",
      "ar": "فشل الضاغط في الدوران بسبب عطل ميكانيكي أو قفل."
    },
    "solutionSteps": {
      "en": [
        "Perform electrical test on compressor.",
        "Replace compressor unit."
      ],
      "fr": [
        "Effectuez un test électrique sur le compresseur.",
        "Remplacez le compresseur."
      ],
      "ar": [
        "إجراء اختبار كهربائي على الضاغط.",
        "استبدل وحدة الضاغط."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Input Overcurrent",
      "fr": "Surintensité d'entrée",
      "ar": "إدخال التيار الزائد"
    },
    "problemDescription": {
      "en": "Input current from the mains exceeds limit.",
      "fr": "Le courant d’entrée du secteur dépasse la limite.",
      "ar": "تيار الإدخال من التيار الكهربائي يتجاوز الحد."
    },
    "solutionSteps": {
      "en": [
        "Examine power supply connections.",
        "Check if compressor is drawing locked rotor amps."
      ],
      "fr": [
        "Examinez les connexions d’alimentation.",
        "Vérifiez si le compresseur consomme des ampères à rotor bloqué."
      ],
      "ar": [
        "فحص توصيلات مصدر الطاقة.",
        "تحقق مما إذا كان الضاغط يسحب أمبير الدوار المقفل."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "F6",
    "problemTitle": {
      "en": "High Pressure Due To Overcharge",
      "fr": "Haute pression due à une surcharge",
      "ar": "ارتفاع الضغط بسبب الشحن الزائد"
    },
    "problemDescription": {
      "en": "Abnormal temperature in heat exchanger suggesting severe overcharge.",
      "fr": "Température anormale dans l’échangeur thermique suggérant une surcharge importante.",
      "ar": "درجة حرارة غير طبيعية في المبادل الحراري تشير إلى الشحن الزائد الشديد."
    },
    "solutionSteps": {
      "en": [
        "Reclaim and measure refrigerant.",
        "Refill to factory weight."
      ],
      "fr": [
        "Récupérez et mesurez le réfrigérant.",
        "Remplissez au poids d’usine."
      ],
      "ar": [
        "استعادة وقياس المبردات.",
        "إعادة التعبئة لوزن المصنع."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "H3",
    "problemTitle": {
      "en": "High Pressure Switch Defect",
      "fr": "Défaut du pressostat haute pression",
      "ar": "عيب في مفتاح الضغط العالي"
    },
    "problemDescription": {
      "en": "The high pressure safety switch is malfunctioning.",
      "fr": "Le pressostat de sécurité haute pression fonctionne mal.",
      "ar": "مفتاح أمان الضغط العالي معطل."
    },
    "solutionSteps": {
      "en": [
        "Check continuity of the high pressure switch.",
        "Replace switch if stuck."
      ],
      "fr": [
        "Vérifier la continuité du pressostat haute pression.",
        "Remplacez l'interrupteur s'il est coincé."
      ],
      "ar": [
        "التحقق من استمرارية مفتاح الضغط العالي.",
        "استبدل المفتاح إذا كان عالقًا."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Daikin",
    "errorCode": "H9",
    "problemTitle": {
      "en": "Outdoor Air Thermistor Defect",
      "fr": "Défaut de la thermistance de l’air extérieur",
      "ar": "عيب في الثرمستور الهوائي الخارجي"
    },
    "problemDescription": {
      "en": "Outdoor ambient air temperature sensor failure.",
      "fr": "Défaillance du capteur de température de l’air ambiant extérieur.",
      "ar": "فشل جهاز استشعار درجة حرارة الهواء المحيط في الهواء الطلق."
    },
    "solutionSteps": {
      "en": [
        "Inspect sensor resistance.",
        "Replace ambient thermistor."
      ],
      "fr": [
        "Inspectez la résistance du capteur.",
        "Remplacez la thermistance ambiante."
      ],
      "ar": [
        "فحص مقاومة المستشعر.",
        "استبدال الثرمستور المحيط."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Daikin",
    "errorCode": "J3",
    "problemTitle": {
      "en": "Discharge Pipe Thermistor Defect",
      "fr": "Défaut de thermistance du tuyau de décharge",
      "ar": "عيب في الثرمستور في أنبوب التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge temperature sensor error.",
      "fr": "Erreur du capteur de température de décharge du compresseur.",
      "ar": "خطأ في مستشعر درجة حرارة تفريغ الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check sensor mounting on the discharge pipe.",
        "Replace discharge thermistor."
      ],
      "fr": [
        "Vérifier le montage du capteur sur le tuyau de refoulement.",
        "Remplacez la thermistance de décharge."
      ],
      "ar": [
        "تحقق من تركيب المستشعر على أنبوب التفريغ.",
        "استبدال الثرمستور التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P4",
    "problemTitle": {
      "en": "Drain Pan Sensor Error",
      "fr": "Erreur du capteur du bac de récupération",
      "ar": "خطأ في مستشعر وعاء التصريف"
    },
    "problemDescription": {
      "en": "Drain sensor failure or float switch open.",
      "fr": "Défaillance du capteur de vidange ou interrupteur à flotteur ouvert.",
      "ar": "فشل مستشعر التصريف أو فتح مفتاح التعويم."
    },
    "solutionSteps": {
      "en": [
        "Empty drain pan.",
        "Clean drain pipe.",
        "Replace float switch if stuck."
      ],
      "fr": [
        "Bac de récupération vide.",
        "Nettoyer le tuyau de vidange.",
        "Remplacez l'interrupteur à flotteur s'il est coincé."
      ],
      "ar": [
        "وعاء استنزاف فارغ.",
        "تنظيف أنبوب الصرف.",
        "استبدل المفتاح العائم إذا كان عالقًا."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P5",
    "problemTitle": {
      "en": "Drain Pump Malfunction",
      "fr": "Dysfonctionnement de la pompe de vidange",
      "ar": "عطل في مضخة التصريف"
    },
    "problemDescription": {
      "en": "Water leakage prevention triggered.",
      "fr": "Prévention des fuites d'eau déclenchée.",
      "ar": "تم تفعيل منع تسرب المياه."
    },
    "solutionSteps": {
      "en": [
        "Check drain pump operation.",
        "Unclog drain lines."
      ],
      "fr": [
        "Vérifiez le fonctionnement de la pompe de vidange.",
        "Débouchez les conduites d’évacuation."
      ],
      "ar": [
        "التحقق من تشغيل مضخة التصريف.",
        "فتح خطوط الصرف."
      ]
    },
    "category": "Drainage Problems",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Signal loss between remotes or units.",
      "fr": "Perte de signal entre les télécommandes ou les unités.",
      "ar": "فقدان الإشارة بين أجهزة التحكم عن بعد أو الوحدات."
    },
    "solutionSteps": {
      "en": [
        "Check remote wiring.",
        "Reset total power."
      ],
      "fr": [
        "Vérifiez le câblage à distance.",
        "Réinitialisez la puissance totale."
      ],
      "ar": [
        "تحقق من الأسلاك عن بعد.",
        "إعادة ضبط الطاقة الإجمالية."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U8",
    "problemTitle": {
      "en": "Outdoor Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur extérieur",
      "ar": "خطأ في محرك المروحة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor fan is not rotating properly.",
      "fr": "Le ventilateur extérieur ne tourne pas correctement.",
      "ar": "المروحة الخارجية لا تدور بشكل صحيح."
    },
    "solutionSteps": {
      "en": [
        "Remove obstacles from fan.",
        "Verify fan motor electricals."
      ],
      "fr": [
        "Retirez les obstacles du ventilateur.",
        "Vérifiez le système électrique du moteur du ventilateur."
      ],
      "ar": [
        "إزالة العقبات من المروحة.",
        "التحقق من كهرباء محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "FB",
    "problemTitle": {
      "en": "Control Board Malfunction",
      "fr": "Dysfonctionnement de la carte de commande",
      "ar": "عطل في لوحة التحكم"
    },
    "problemDescription": {
      "en": "Indoor unit controller board issue.",
      "fr": "Problème de carte contrôleur de l’unité intérieure.",
      "ar": "مشكلة في لوحة تحكم الوحدة الداخلية"
    },
    "solutionSteps": {
      "en": [
        "Re-seat all board connections.",
        "Replace indoor board."
      ],
      "fr": [
        "Réinstallez toutes les connexions de la carte.",
        "Remplacez le panneau intérieur."
      ],
      "ar": [
        "أعد تركيب جميع وصلات اللوحة.",
        "استبدال اللوحة الداخلية."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E0",
    "problemTitle": {
      "en": "Remote Control Comm Error",
      "fr": "Erreur de communication de la télécommande",
      "ar": "خطأ بالاتصال بجهاز التحكم عن بعد"
    },
    "problemDescription": {
      "en": "Loss of communication with wired remote.",
      "fr": "Perte de communication avec la télécommande filaire.",
      "ar": "فقدان الاتصال بجهاز التحكم عن بعد السلكي."
    },
    "solutionSteps": {
      "en": [
        "Check remote cable integrity.",
        "Replace remote controller."
      ],
      "fr": [
        "Vérifiez l'intégrité du câble distant.",
        "Remplacez la télécommande."
      ],
      "ar": [
        "تحقق من سلامة الكابل عن بعد.",
        "استبدال جهاز التحكم عن بعد."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P8",
    "problemTitle": {
      "en": "Pipe Temperature Error",
      "fr": "Erreur de température du tuyau",
      "ar": "خطأ في درجة حرارة الأنابيب"
    },
    "problemDescription": {
      "en": "Abnormal pipe temperature during operation.",
      "fr": "Température anormale des tuyaux pendant le fonctionnement.",
      "ar": "درجة حرارة الأنبوب غير طبيعية أثناء التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Check refrigerant levels.",
        "Inspect 4-way valve."
      ],
      "fr": [
        "Vérifiez les niveaux de réfrigérant.",
        "Inspectez la vanne à 4 voies."
      ],
      "ar": [
        "تحقق من مستويات المبردات.",
        "فحص الصمام رباعي الاتجاه."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U2",
    "problemTitle": {
      "en": "High Discharge Temp",
      "fr": "Température de décharge élevée",
      "ar": "ارتفاع درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor operating at unsafe temperatures.",
      "fr": "Compresseur fonctionnant à des températures dangereuses.",
      "ar": "الضاغط يعمل في درجات حرارة غير آمنة."
    },
    "solutionSteps": {
      "en": [
        "Check for gas leak.",
        "Verify LEV (Linear Expansion Valve) function."
      ],
      "fr": [
        "Vérifiez s'il y a une fuite de gaz.",
        "Vérifiez la fonction LEV (détendeur linéaire)."
      ],
      "ar": [
        "تحقق من وجود تسرب للغاز.",
        "تحقق من وظيفة LEV (صمام التمدد الخطي)."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P1",
    "problemTitle": {
      "en": "Intake Sensor Error",
      "fr": "Erreur du capteur d'admission",
      "ar": "خطأ في مستشعر السحب"
    },
    "problemDescription": {
      "en": "Return air temperature sensor abnormality.",
      "fr": "Anomalie du capteur de température d’air de retour.",
      "ar": "إرجاع خلل في مستشعر درجة حرارة الهواء."
    },
    "solutionSteps": {
      "en": [
        "Readjust sensor position.",
        "Replace intake thermistor."
      ],
      "fr": [
        "Réajustez la position du capteur.",
        "Remplacez la thermistance d'admission."
      ],
      "ar": [
        "أعد ضبط موضع المستشعر.",
        "استبدال الثرمستور المدخول."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P2",
    "problemTitle": {
      "en": "Pipe Sensor Error",
      "fr": "Erreur du capteur de tuyau",
      "ar": "خطأ في مستشعر الأنابيب"
    },
    "problemDescription": {
      "en": "Liquid pipe thermistor logic fault.",
      "fr": "Défaut logique de la thermistance du tuyau de liquide.",
      "ar": "خطأ منطقي في أنبوب الثرمستور السائل."
    },
    "solutionSteps": {
      "en": [
        "Verify sensor connection.",
        "Replace liquid pipe sensor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur.",
        "Remplacez le capteur du tuyau de liquide."
      ],
      "ar": [
        "تحقق من اتصال المستشعر.",
        "استبدل مستشعر الأنابيب السائلة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P6",
    "problemTitle": {
      "en": "Freezing / Overheating Protection",
      "fr": "Protection contre le gel/surchauffe",
      "ar": "حماية من التجميد/السخونة الزائدة"
    },
    "problemDescription": {
      "en": "Indoor coil is operating outside safe bounds.",
      "fr": "Le serpentin intérieur fonctionne en dehors des limites de sécurité.",
      "ar": "الملف الداخلي يعمل خارج الحدود الآمنة."
    },
    "solutionSteps": {
      "en": [
        "Clean air filters.",
        "Make sure indoor fan is operating efficiently."
      ],
      "fr": [
        "Nettoyer les filtres à air.",
        "Assurez-vous que le ventilateur intérieur fonctionne efficacement."
      ],
      "ar": [
        "مرشحات الهواء النظيفة.",
        "تأكد من أن المروحة الداخلية تعمل بكفاءة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "P9",
    "problemTitle": {
      "en": "Pipe Sensor Error (Dual)",
      "fr": "Erreur de capteur de tuyau (double)",
      "ar": "خطأ في مستشعر الأنابيب (مزدوج)"
    },
    "problemDescription": {
      "en": "Two-phase pipe temperature sensor error.",
      "fr": "Erreur du capteur de température du tuyau biphasé.",
      "ar": "خطأ في مستشعر درجة حرارة الأنبوب على مرحلتين."
    },
    "solutionSteps": {
      "en": [
        "Check gas pipe sensor resistance.",
        "Replace sensor if faulty."
      ],
      "fr": [
        "Vérifiez la résistance du capteur du tuyau de gaz.",
        "Remplacer le capteur s'il est défectueux."
      ],
      "ar": [
        "تحقق من مقاومة مستشعر أنبوب الغاز.",
        "استبدل المستشعر إذا كان معيبًا."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Remote Communication Receive Error",
      "fr": "Erreur de réception de communication à distance",
      "ar": "خطأ في تلقي الاتصالات عن بعد"
    },
    "problemDescription": {
      "en": "Indoor unit is not receiving data from remote controller.",
      "fr": "L'unité intérieure ne reçoit pas de données de la télécommande.",
      "ar": "الوحدة الداخلية لا تتلقى بيانات من جهاز التحكم عن بعد."
    },
    "solutionSteps": {
      "en": [
        "Check remote transmission line.",
        "Verify indoor terminal block."
      ],
      "fr": [
        "Vérifiez la ligne de transmission à distance.",
        "Vérifiez le bornier intérieur."
      ],
      "ar": [
        "التحقق من خط النقل عن بعد.",
        "تحقق من الكتلة الطرفية الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Remote Communication Transmit Error",
      "fr": "Erreur de transmission de communication à distance",
      "ar": "خطأ في إرسال الاتصال عن بعد"
    },
    "problemDescription": {
      "en": "Remote controller is not receiving data from indoor unit.",
      "fr": "La télécommande ne reçoit pas de données de l'unité intérieure.",
      "ar": "وحدة التحكم عن بعد لا تتلقى بيانات من الوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check wiring for interference.",
        "Replace controller."
      ],
      "fr": [
        "Vérifiez le câblage pour déceler toute interférence.",
        "Remplacez le contrôleur."
      ],
      "ar": [
        "تحقق من الأسلاك للتداخل.",
        "استبدال وحدة التحكم."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Comms Error (Indoor/Outdoor)",
      "fr": "Erreur de communication (intérieur/extérieur)",
      "ar": "خطأ في الاتصال (داخلي/خارجي)"
    },
    "problemDescription": {
      "en": "Abnormal communication detected at indoor unit.",
      "fr": "Communication anormale détectée au niveau de l’unité intérieure.",
      "ar": "تم اكتشاف اتصال غير طبيعي في الوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Inspect S1/S2/S3 connections.",
        "Test for earth leakage."
      ],
      "fr": [
        "Inspectez les connexions S1/S2/S3.",
        "Testez les fuites à la terre."
      ],
      "ar": [
        "افحص اتصالات S1/S2/S3.",
        "اختبار تسرب الأرض."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Comms Error (Outdoor/Indoor)",
      "fr": "Erreur de communication (extérieur/intérieur)",
      "ar": "خطأ في الاتصال (خارجي/داخلي)"
    },
    "problemDescription": {
      "en": "Abnormal communication detected at outdoor unit.",
      "fr": "Communication anormale détectée au niveau de l’unité extérieure.",
      "ar": "تم اكتشاف اتصال غير طبيعي في الوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Perform noise check on communication wires.",
        "Check outdoor control board."
      ],
      "fr": [
        "Effectuez un contrôle du bruit sur les fils de communication.",
        "Vérifiez le tableau de commande extérieur."
      ],
      "ar": [
        "إجراء فحص الضوضاء على أسلاك الاتصالات.",
        "فحص لوحة التحكم الخارجية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Reverse Phase / Phase Loss",
      "fr": "Phase inverse/perte de phase",
      "ar": "عكس المرحلة / خسارة المرحلة"
    },
    "problemDescription": {
      "en": "3-phase power supply has missing or reversed phases.",
      "fr": "L'alimentation triphasée présente des phases manquantes ou inversées.",
      "ar": "يحتوي مصدر الطاقة ثلاثي الطور على مراحل مفقودة أو معكوسة."
    },
    "solutionSteps": {
      "en": [
        "Check incoming main power phases.",
        "Correct phase sequence L1-L2-L3."
      ],
      "fr": [
        "Vérifiez les phases d’alimentation principale entrantes.",
        "Corriger l'ordre des phases L1-L2-L3."
      ],
      "ar": [
        "تحقق من مراحل الطاقة الرئيسية الواردة.",
        "تسلسل المرحلة الصحيح L1-L2-L3."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Phase Loss",
      "fr": "Perte de phase",
      "ar": "خسارة المرحلة"
    },
    "problemDescription": {
      "en": "One of the incoming power phases is dead.",
      "fr": "L'une des phases d'alimentation entrante est morte.",
      "ar": "إحدى مراحل الطاقة الواردة ميتة."
    },
    "solutionSteps": {
      "en": [
        "Test each electrical phase leg.",
        "Investigate main breaker or fuses."
      ],
      "fr": [
        "Testez chaque branche de phase électrique.",
        "Examinez le disjoncteur principal ou les fusibles."
      ],
      "ar": [
        "اختبار كل ساق المرحلة الكهربائية.",
        "فحص الكسارة الرئيسية أو الصمامات."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U1",
    "problemTitle": {
      "en": "High Pressure Abnormality",
      "fr": "Anomalie de haute pression",
      "ar": "ارتفاع ضغط الدم غير طبيعي"
    },
    "problemDescription": {
      "en": "High pressure sensor detects extreme system pressure.",
      "fr": "Le capteur haute pression détecte une pression extrême du système.",
      "ar": "يكتشف مستشعر الضغط العالي ضغط النظام الشديد."
    },
    "solutionSteps": {
      "en": [
        "Wash condenser coil.",
        "Remove debris around outdoor unit.",
        "Check for overcharged system."
      ],
      "fr": [
        "Laver le serpentin du condenseur.",
        "Retirez les débris autour de l’unité extérieure.",
        "Vérifiez le système surchargé."
      ],
      "ar": [
        "اغسل ملف المكثف.",
        "قم بإزالة الحطام حول الوحدة الخارجية.",
        "تحقق من النظام الزائد."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U3",
    "problemTitle": {
      "en": "Discharge Thermistor Open/Short",
      "fr": "Thermistance de décharge ouverte/courte",
      "ar": "تفريغ الثرمستور مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Compressor discharge temperature sensor circuit fails.",
      "fr": "Le circuit du capteur de température de décharge du compresseur est en panne.",
      "ar": "فشل دائرة استشعار درجة حرارة تفريغ الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Inspect thermistor wire.",
        "Replace discharge thermistor."
      ],
      "fr": [
        "Inspectez le fil de la thermistance.",
        "Remplacez la thermistance de décharge."
      ],
      "ar": [
        "فحص سلك الثرمستور.",
        "استبدال الثرمستور التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U4",
    "problemTitle": {
      "en": "Outdoor Coil Thermistor Abnormality",
      "fr": "Anomalie de la thermistance de la bobine extérieure",
      "ar": "شذوذ الثرمستور في الملف الخارجي"
    },
    "problemDescription": {
      "en": "Outdoor heat exchanger thermistor issue.",
      "fr": "Problème de thermistance de l’échangeur de chaleur extérieur.",
      "ar": "مشكلة الثرمستور للمبادل الحراري الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Check outdoor board terminal.",
        "Replace thermistor."
      ],
      "fr": [
        "Vérifiez le terminal de la carte extérieure.",
        "Remplacez la thermistance."
      ],
      "ar": [
        "تحقق من محطة اللوحة الخارجية.",
        "استبدل الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "U6",
    "problemTitle": {
      "en": "Power Module Abnormality",
      "fr": "Anomalie du module d’alimentation",
      "ar": "شذوذ وحدة الطاقة"
    },
    "problemDescription": {
      "en": "Inverter board compressor drive module error.",
      "fr": "Erreur du module d’entraînement du compresseur de la carte onduleur.",
      "ar": "خطأ في وحدة محرك ضاغط اللوحة العاكسة."
    },
    "solutionSteps": {
      "en": [
        "Verify compressor isn't shorted.",
        "Replace inverter power module."
      ],
      "fr": [
        "Vérifiez que le compresseur n'est pas en court-circuit.",
        "Remplacez le module d'alimentation de l'onduleur."
      ],
      "ar": [
        "تأكد من عدم قصر الضاغط.",
        "استبدال وحدة الطاقة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Mitsubishi Electric",
    "errorCode": "UF",
    "problemTitle": {
      "en": "Compressor Overcurrent Interruption",
      "fr": "Interruption de surintensité du compresseur",
      "ar": "انقطاع التيار الزائد للضاغط"
    },
    "problemDescription": {
      "en": "Compressor drew excessive amps and was halted.",
      "fr": "Le compresseur a consommé des ampères excessifs et a été arrêté.",
      "ar": "قام الضاغط بسحب أمبيرات زائدة وتم إيقافه."
    },
    "solutionSteps": {
      "en": [
        "Check compressor winding resistance.",
        "Evaluate mechanical lock."
      ],
      "fr": [
        "Vérifiez la résistance de l'enroulement du compresseur.",
        "Évaluer le verrouillage mécanique."
      ],
      "ar": [
        "تحقق من مقاومة لف الضاغط.",
        "تقييم القفل الميكانيكي."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E1",
    "problemTitle": {
      "en": "EEPROM Error",
      "fr": "Erreur EEPROM",
      "ar": "خطأ إيبروم"
    },
    "problemDescription": {
      "en": "Indoor unit EEPROM parameter error.",
      "fr": "Erreur de paramètre EEPROM de l’unité intérieure.",
      "ar": "خطأ في معلمة EEPROM للوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor PCB."
      ],
      "fr": [
        "Remplacez le PCB intérieur."
      ],
      "ar": [
        "استبدل ثنائي الفينيل متعدد الكلور الداخلي."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Zero-Crossing Signal Error",
      "fr": "Erreur de signal de passage à zéro",
      "ar": "خطأ في إشارة العبور الصفري"
    },
    "problemDescription": {
      "en": "Irregular AC power supply detection.",
      "fr": "Détection d’alimentation CA irrégulière.",
      "ar": "الكشف عن مصدر طاقة التيار المتردد غير المنتظم."
    },
    "solutionSteps": {
      "en": [
        "Check main power stability.",
        "Replace PCB if power is stable."
      ],
      "fr": [
        "Vérifiez la stabilité de l’alimentation principale.",
        "Remplacez le PCB si l'alimentation est stable."
      ],
      "ar": [
        "التحقق من استقرار الطاقة الرئيسية.",
        "استبدل PCB إذا كانت الطاقة مستقرة."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "EC",
    "problemTitle": {
      "en": "Refrigerant Leakage",
      "fr": "Fuite de réfrigérant",
      "ar": "تسرب المبردات"
    },
    "problemDescription": {
      "en": "System detected sudden loss of refrigerant.",
      "fr": "Le système a détecté une perte soudaine de réfrigérant.",
      "ar": "اكتشف النظام فقدانًا مفاجئًا لغاز التبريد."
    },
    "solutionSteps": {
      "en": [
        "Stop unit to prevent compressor damage.",
        "Find and repair leak, then regas."
      ],
      "fr": [
        "Arrêtez l'unité pour éviter d'endommager le compresseur.",
        "Trouvez et réparez la fuite, puis faites le plein."
      ],
      "ar": [
        "وحدة التوقف لمنع تلف الضاغط.",
        "البحث عن التسرب وإصلاحه، ثم إعادة الغاز."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Indoor Fan Speed Out of Control",
      "fr": "Vitesse du ventilateur intérieur hors de contrôle",
      "ar": "سرعة المروحة الداخلية تخرج عن نطاق السيطرة"
    },
    "problemDescription": {
      "en": "Fan speed is significantly abnormal.",
      "fr": "La vitesse du ventilateur est significativement anormale.",
      "ar": "سرعة المروحة غير طبيعية بشكل ملحوظ."
    },
    "solutionSteps": {
      "en": [
        "Check fan motor and hall sensor.",
        "Ensure blade is not blocked."
      ],
      "fr": [
        "Vérifiez le moteur du ventilateur et le capteur à effet Hall.",
        "Assurez-vous que la lame n'est pas bloquée."
      ],
      "ar": [
        "فحص محرك المروحة ومستشعر القاعة.",
        "تأكد من عدم حظر الشفرة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Indoor Room Temp Sensor",
      "fr": "Capteur de température ambiante intérieure",
      "ar": "مستشعر درجة حرارة الغرفة الداخلية"
    },
    "problemDescription": {
      "en": "Open or short circuit on room thermistor.",
      "fr": "Circuit ouvert ou court-circuit sur la thermistance ambiante.",
      "ar": "دائرة مفتوحة أو قصيرة على الثرمستور في الغرفة."
    },
    "solutionSteps": {
      "en": [
        "Re-connect sensor.",
        "Replace sensor if broken."
      ],
      "fr": [
        "Rebranchez le capteur.",
        "Remplacez le capteur s’il est cassé."
      ],
      "ar": [
        "أعد توصيل المستشعر.",
        "استبدل المستشعر في حالة الكسر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Evaporator Coil Temp Sensor",
      "fr": "Capteur de température du serpentin de l'évaporateur",
      "ar": "مستشعر درجة حرارة ملف المبخر"
    },
    "problemDescription": {
      "en": "Open or short circuit on indoor coil thermistor.",
      "fr": "Circuit ouvert ou court-circuit sur la thermistance de la bobine intérieure.",
      "ar": "دائرة مفتوحة أو قصيرة على الثرمستور الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check sensor resistance.",
        "Replace defective sensor."
      ],
      "fr": [
        "Vérifiez la résistance du capteur.",
        "Remplacez le capteur défectueux."
      ],
      "ar": [
        "تحقق من مقاومة المستشعر.",
        "استبدال المستشعر المعيب."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "P0",
    "problemTitle": {
      "en": "Inverter Module Protection",
      "fr": "Protection du module onduleur",
      "ar": "حماية وحدة العاكس"
    },
    "problemDescription": {
      "en": "IPM malfunction or IGBT over-strong current.",
      "fr": "Dysfonctionnement de l’IPM ou courant trop fort de l’IGBT.",
      "ar": "عطل IPM أو تيار IGBT مفرط القوة."
    },
    "solutionSteps": {
      "en": [
        "Check compressor wiring.",
        "Check thermal paste on IPM module.",
        "Replace inverter board."
      ],
      "fr": [
        "Vérifiez le câblage du compresseur.",
        "Vérifiez la pâte thermique sur le module IPM.",
        "Remplacez la carte onduleur."
      ],
      "ar": [
        "تحقق من أسلاك الضاغط.",
        "تحقق من المعجون الحراري على وحدة IPM.",
        "استبدال لوحة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "P1",
    "problemTitle": {
      "en": "Over Voltage / Under Voltage",
      "fr": "Surtension / Sous-tension",
      "ar": "أكثر من الجهد / تحت الجهد"
    },
    "problemDescription": {
      "en": "Power supply voltage is outside safe parameters.",
      "fr": "La tension d’alimentation est en dehors des paramètres de sécurité.",
      "ar": "جهد مصدر الطاقة خارج المعايير الآمنة."
    },
    "solutionSteps": {
      "en": [
        "Verify building supply voltage.",
        "Install voltage stabilizer."
      ],
      "fr": [
        "Vérifiez la tension d’alimentation du bâtiment.",
        "Installez un stabilisateur de tension."
      ],
      "ar": [
        "التحقق من جهد إمداد المبنى.",
        "تثبيت مثبت الجهد."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E0",
    "problemTitle": {
      "en": "EEPROM Parameter Error",
      "fr": "Erreur de paramètre EEPROM",
      "ar": "خطأ في معلمة EEPROM"
    },
    "problemDescription": {
      "en": "Outdoor unit EEPROM parameter error.",
      "fr": "Erreur de paramètre EEPROM de l’unité extérieure.",
      "ar": "خطأ في معلمة EEPROM للوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Reprogram system memory.",
        "Replace outdoor main board."
      ],
      "fr": [
        "Reprogrammez la mémoire système.",
        "Remplacez la carte principale extérieure."
      ],
      "ar": [
        "إعادة برمجة ذاكرة النظام.",
        "استبدال اللوحة الرئيسية الخارجية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Outdoor Unit Zero-Crossing Error",
      "fr": "Erreur de passage à zéro de l'unité extérieure",
      "ar": "خطأ في عبور الوحدة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor AC power frequency detection failed.",
      "fr": "La détection de la fréquence du secteur extérieur a échoué.",
      "ar": "فشل اكتشاف تردد طاقة التيار المتردد الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Verify AC input power.",
        "Replace outdoor control PCB."
      ],
      "fr": [
        "Vérifiez l’alimentation CA d’entrée.",
        "Remplacez la carte de contrôle extérieure."
      ],
      "ar": [
        "تحقق من طاقة إدخال التيار المتردد.",
        "استبدال ثنائي الفينيل متعدد الكلور التحكم في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Comms Error (Indoor to Outdoor)",
      "fr": "Erreur de communication (intérieur vers extérieur)",
      "ar": "خطأ في الاتصال (من الداخل إلى الخارج)"
    },
    "problemDescription": {
      "en": "Data transmission failed between the two primary units.",
      "fr": "La transmission des données a échoué entre les deux unités principales.",
      "ar": "فشل نقل البيانات بين الوحدتين الأساسيتين."
    },
    "solutionSteps": {
      "en": [
        "Inspect control cabling.",
        "Check 24v communication block."
      ],
      "fr": [
        "Inspectez le câblage de commande.",
        "Vérifiez le bloc de communication 24 V."
      ],
      "ar": [
        "فحص كابلات التحكم.",
        "تحقق من كتلة الاتصال 24 فولت."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Indoor Fan Speed Protection",
      "fr": "Protection de la vitesse du ventilateur intérieur",
      "ar": "حماية من سرعة المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Indoor fan has stopped unexpectedly.",
      "fr": "Le ventilateur intérieur s'est arrêté de manière inattendue.",
      "ar": "توقفت المروحة الداخلية بشكل غير متوقع."
    },
    "solutionSteps": {
      "en": [
        "Clean squirrel cage fan.",
        "Replace fan motor assembly."
      ],
      "fr": [
        "Nettoyer le ventilateur à cage d’écureuil.",
        "Remplacez l’ensemble moteur du ventilateur."
      ],
      "ar": [
        "تنظيف مروحة قفص السنجاب.",
        "استبدل مجموعة محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Comms Error (Indoor to Display)",
      "fr": "Erreur de communication (intérieur à afficher)",
      "ar": "خطأ في الاتصال (داخلي للعرض)"
    },
    "problemDescription": {
      "en": "Wall display not communicating with indoor board.",
      "fr": "L'écran mural ne communique pas avec le tableau intérieur.",
      "ar": "شاشة الحائط لا تتواصل مع اللوحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check flat ribbon cable to display front panel.",
        "Replace display board."
      ],
      "fr": [
        "Vérifiez le câble plat pour afficher le panneau avant.",
        "Remplacez le panneau d'affichage."
      ],
      "ar": [
        "تحقق من كابل الشريط المسطح لعرض اللوحة الأمامية.",
        "استبدال لوحة العرض."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "F0",
    "problemTitle": {
      "en": "Overload Current Protection",
      "fr": "Protection contre les surcharges",
      "ar": "الزائد الحماية الحالية"
    },
    "problemDescription": {
      "en": "Total system amps exceeds maximum rating.",
      "fr": "L’intensité totale du système dépasse la valeur nominale maximale.",
      "ar": "يتجاوز إجمالي أمبير النظام الحد الأقصى للتصنيف."
    },
    "solutionSteps": {
      "en": [
        "Check for dirty condenser.",
        "Verify compressor amp draw."
      ],
      "fr": [
        "Vérifiez le condenseur sale.",
        "Vérifiez la consommation de l'ampli du compresseur."
      ],
      "ar": [
        "تحقق من وجود المكثف القذر.",
        "تحقق من سحب أمبير الضاغط."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Outdoor Ambient Temp Sensor",
      "fr": "Capteur de température ambiante extérieure",
      "ar": "مستشعر درجة الحرارة المحيطة في الهواء الطلق"
    },
    "problemDescription": {
      "en": "Sensor T4 circuit is open or short.",
      "fr": "Le circuit du capteur T4 est ouvert ou court-circuité.",
      "ar": "دائرة الحساس T4 مفتوحة أو قصيرة."
    },
    "solutionSteps": {
      "en": [
        "Connect T4 sensor correctly.",
        "Replace sensor."
      ],
      "fr": [
        "Connectez correctement le capteur T4.",
        "Remplacez le capteur."
      ],
      "ar": [
        "قم بتوصيل مستشعر T4 بشكل صحيح.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Outdoor Condenser Sensor",
      "fr": "Capteur de condensateur extérieur",
      "ar": "مستشعر المكثف الخارجي"
    },
    "problemDescription": {
      "en": "Condenser pipe sensor T3 is malfunctioning.",
      "fr": "Le capteur T3 du tuyau du condenseur est défectueux.",
      "ar": "مستشعر أنبوب المكثف T3 معطل."
    },
    "solutionSteps": {
      "en": [
        "Test resistance of T3.",
        "Replace T3 sensor element."
      ],
      "fr": [
        "Testez la résistance de T3.",
        "Remplacez l'élément du capteur T3."
      ],
      "ar": [
        "اختبار مقاومة T3.",
        "استبدل عنصر الاستشعار T3."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Discharge Temp Sensor Error",
      "fr": "Erreur du capteur de température de décharge",
      "ar": "خطأ في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge sensor T5 is faulty.",
      "fr": "Le capteur de décharge du compresseur T5 est défectueux.",
      "ar": "مستشعر تفريغ الضاغط T5 معيب."
    },
    "solutionSteps": {
      "en": [
        "Verify T5 sensor location.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez l'emplacement du capteur T5.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من موقع مستشعر T5.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "F4",
    "problemTitle": {
      "en": "Outdoor EEPROM Error",
      "fr": "Erreur EEPROM extérieure",
      "ar": "خطأ EEPROM خارجي"
    },
    "problemDescription": {
      "en": "EEPROM parameter failure on the outdoor inverter.",
      "fr": "Défaillance du paramètre EEPROM sur l’onduleur extérieur.",
      "ar": "فشل معلمة EEPROM على العاكس الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Re-seat EEPROM chip if socketed.",
        "Replace outdoor inverter board."
      ],
      "fr": [
        "Réinstallez la puce EEPROM si elle est insérée.",
        "Remplacez la carte de l'onduleur extérieur."
      ],
      "ar": [
        "أعد تركيب شريحة EEPROM إذا كانت موصولة.",
        "استبدال لوحة العاكس في الهواء الطلق."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "F5",
    "problemTitle": {
      "en": "Outdoor Fan Speed Out of Control",
      "fr": "Vitesse du ventilateur extérieur hors de contrôle",
      "ar": "سرعة المروحة الخارجية تخرج عن نطاق السيطرة"
    },
    "problemDescription": {
      "en": "DC outdoor fan motor feedback is lost.",
      "fr": "Le retour du moteur du ventilateur extérieur CC est perdu.",
      "ar": "يتم فقدان ردود فعل محرك المروحة الخارجية التي تعمل بالتيار المستمر."
    },
    "solutionSteps": {
      "en": [
        "Remove obstructions.",
        "Replace outdoor DC fan motor."
      ],
      "fr": [
        "Supprimez les obstacles.",
        "Remplacez le moteur du ventilateur CC extérieur."
      ],
      "ar": [
        "إزالة العوائق.",
        "استبدل محرك مروحة التيار المستمر الخارجي."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "P2",
    "problemTitle": {
      "en": "High Temp Protection",
      "fr": "Protection haute température",
      "ar": "حماية من ارتفاع درجة الحرارة"
    },
    "problemDescription": {
      "en": "Compressor dome top temperature is extreme.",
      "fr": "La température supérieure du dôme du compresseur est extrême.",
      "ar": "درجة الحرارة العلوية لقبة الضاغط شديدة."
    },
    "solutionSteps": {
      "en": [
        "Check refrigerant charge.",
        "Verify EEV operation."
      ],
      "fr": [
        "Vérifiez la charge de réfrigérant.",
        "Vérifiez le fonctionnement de l'EEV."
      ],
      "ar": [
        "تحقق من شحن غاز التبريد.",
        "التحقق من تشغيل EEV."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "P3",
    "problemTitle": {
      "en": "Low Ambient Temp Protection",
      "fr": "Protection contre les basses températures ambiantes",
      "ar": "حماية من انخفاض درجة الحرارة المحيطة"
    },
    "problemDescription": {
      "en": "Outdoor temperature is too low for safe operation.",
      "fr": "La température extérieure est trop basse pour un fonctionnement sûr.",
      "ar": "درجة الحرارة الخارجية منخفضة للغاية مما لا يسمح بالتشغيل الآمن."
    },
    "solutionSteps": {
      "en": [
        "Wait for ambient temperature to rise.",
        "Install low ambient kit."
      ],
      "fr": [
        "Attendez que la température ambiante augmente.",
        "Installez le kit de basse température ambiante."
      ],
      "ar": [
        "انتظر حتى ترتفع درجة الحرارة المحيطة.",
        "قم بتثبيت مجموعة أدوات البيئة المنخفضة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Midea",
    "errorCode": "P4",
    "problemTitle": {
      "en": "Inverter Compressor Drive Error",
      "fr": "Erreur d'entraînement du compresseur inverseur",
      "ar": "خطأ في محرك الضاغط العاكس"
    },
    "problemDescription": {
      "en": "Errors in V/Hz or rotational speed control.",
      "fr": "Erreurs en V/Hz ou contrôle de la vitesse de rotation.",
      "ar": "أخطاء في V/هرتز أو التحكم في سرعة الدوران."
    },
    "solutionSteps": {
      "en": [
        "Perform electrical checks on compressor.",
        "Replace IPM module."
      ],
      "fr": [
        "Effectuer des contrôles électriques sur le compresseur.",
        "Remplacez le module IPM."
      ],
      "ar": [
        "إجراء فحوصات كهربائية على الضاغط.",
        "استبدال وحدة IPM."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Midea",
    "errorCode": "P5",
    "problemTitle": {
      "en": "Mode Conflict",
      "fr": "Conflit de modes",
      "ar": "صراع الوضع"
    },
    "problemDescription": {
      "en": "Multiple indoor units calling for opposing modes (heat/cool).",
      "fr": "Plusieurs unités intérieures appelant des modes opposés (chauffage/refroidissement).",
      "ar": "وحدات داخلية متعددة تتطلب أوضاعًا متعارضة (حرارة/تبريد)."
    },
    "solutionSteps": {
      "en": [
        "Change all units to identical modes on multi-split systems."
      ],
      "fr": [
        "Changez toutes les unités en modes identiques sur les systèmes multi-split."
      ],
      "ar": [
        "قم بتغيير جميع الوحدات إلى أوضاع متطابقة على الأنظمة متعددة الانقسام."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "E1",
    "problemTitle": {
      "en": "High Pressure Protection",
      "fr": "Protection haute pression",
      "ar": "حماية الضغط العالي"
    },
    "problemDescription": {
      "en": "System high pressure excessively elevated.",
      "fr": "Haute pression du système excessivement élevée.",
      "ar": "ارتفاع ضغط النظام بشكل مفرط."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor condenser coil.",
        "Check outdoor fan operation.",
        "Verify refrigerant charge."
      ],
      "fr": [
        "Nettoyer le serpentin extérieur du condenseur.",
        "Vérifiez le fonctionnement du ventilateur extérieur.",
        "Vérifiez la charge de réfrigérant."
      ],
      "ar": [
        "تنظيف ملف المكثف الخارجي.",
        "تحقق من تشغيل المروحة الخارجية.",
        "التحقق من شحن غاز التبريد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Anti-Freezing Protection",
      "fr": "Protection antigel",
      "ar": "الحماية ضد التجمد"
    },
    "problemDescription": {
      "en": "Evaporator temperature too low.",
      "fr": "Température de l'évaporateur trop basse.",
      "ar": "درجة حرارة المبخر منخفضة جدًا."
    },
    "solutionSteps": {
      "en": [
        "Clean indoor air filters.",
        "Ensure indoor fan is running properly."
      ],
      "fr": [
        "Nettoyer les filtres à air intérieur.",
        "Assurez-vous que le ventilateur intérieur fonctionne correctement."
      ],
      "ar": [
        "تنظيف مرشحات الهواء في الأماكن المغلقة.",
        "تأكد من أن المروحة الداخلية تعمل بشكل صحيح."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "H6",
    "problemTitle": {
      "en": "PG Motor No Feedback",
      "fr": "Moteur PG Pas de retour",
      "ar": "محرك PG لا توجد تعليقات"
    },
    "problemDescription": {
      "en": "Indoor fan motor feedback lost.",
      "fr": "Retour du moteur du ventilateur intérieur perdu.",
      "ar": "فقدت ردود فعل محرك المروحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check motor terminals.",
        "Replace indoor fan motor / PCB."
      ],
      "fr": [
        "Vérifiez les bornes du moteur.",
        "Remplacez le moteur du ventilateur intérieur/le PCB."
      ],
      "ar": [
        "تحقق من أطراف المحرك.",
        "استبدل محرك المروحة الداخلي/ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Room Sensor Open/Short",
      "fr": "Sonde d'ambiance ouverte/court-circuitée",
      "ar": "مستشعر الغرفة مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Indoor ambient temp sensor failure.",
      "fr": "Défaillance du capteur de température ambiante intérieure.",
      "ar": "فشل جهاز استشعار درجة الحرارة المحيطة في الأماكن المغلقة."
    },
    "solutionSteps": {
      "en": [
        "Check sensor connection.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من اتصال المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Evaporator Sensor Open/Short",
      "fr": "Capteur d'évaporateur ouvert/court-circuit",
      "ar": "حساس المبخر مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Indoor pipe temp sensor failure.",
      "fr": "Défaillance du capteur de température du tuyau intérieur.",
      "ar": "فشل جهاز استشعار درجة حرارة الأنابيب الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check sensor connection.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من اتصال المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "C5",
    "problemTitle": {
      "en": "Jumper Cap Malfunction",
      "fr": "Dysfonctionnement du capuchon du cavalier",
      "ar": "عطل في غطاء الطائر"
    },
    "problemDescription": {
      "en": "Missing or misconfigured PCB jumper.",
      "fr": "Cavalier PCB manquant ou mal configuré.",
      "ar": "وصلة PCB مفقودة أو تم تكوينها بشكل خاطئ."
    },
    "solutionSteps": {
      "en": [
        "Check jumper cap on indoor PCB.",
        "Reinsert or replace jumper."
      ],
      "fr": [
        "Vérifiez le capuchon du cavalier sur le PCB intérieur.",
        "Réinsérez ou remplacez le cavalier."
      ],
      "ar": [
        "تحقق من غطاء العبور الموجود على PCB الداخلي.",
        "أعد إدخال أو استبدال العبور."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Overload Protection",
      "fr": "Protection contre les surcharges",
      "ar": "حماية الزائد"
    },
    "problemDescription": {
      "en": "System working under extreme load conditions.",
      "fr": "Système fonctionnant dans des conditions de charge extrêmes.",
      "ar": "يعمل النظام تحت ظروف التحميل القصوى."
    },
    "solutionSteps": {
      "en": [
        "Check for dirty heat exchangers.",
        "Verify ambient temperatures."
      ],
      "fr": [
        "Vérifiez les échangeurs de chaleur sales.",
        "Vérifiez les températures ambiantes."
      ],
      "ar": [
        "تحقق من وجود مبادلات حرارية قذرة.",
        "التحقق من درجات الحرارة المحيطة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "U8",
    "problemTitle": {
      "en": "Zero-Crossing Detection",
      "fr": "Détection du passage à zéro",
      "ar": "كشف العبور الصفري"
    },
    "problemDescription": {
      "en": "PG motor zero-crossing detection circuit malfunction.",
      "fr": "Dysfonctionnement du circuit de détection du passage à zéro du moteur PG.",
      "ar": "عطل في دائرة الكشف عن التقاطع الصفري لمحرك PG."
    },
    "solutionSteps": {
      "en": [
        "Check power supply wiring.",
        "Replace main PCB."
      ],
      "fr": [
        "Vérifiez le câblage de l'alimentation.",
        "Remplacez le PCB principal."
      ],
      "ar": [
        "تحقق من أسلاك مصدر الطاقة.",
        "استبدال ثنائي الفينيل متعدد الكلور الرئيسي."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Low Pressure Protection",
      "fr": "Protection basse pression",
      "ar": "حماية الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Refrigerant pressure dropped below safety limits.",
      "fr": "La pression du réfrigérant est tombée en dessous des limites de sécurité.",
      "ar": "انخفض ضغط سائل التبريد إلى ما دون حدود السلامة."
    },
    "solutionSteps": {
      "en": [
        "Look for refrigerant leaks.",
        "Check EEV and filter driers."
      ],
      "fr": [
        "Recherchez les fuites de réfrigérant.",
        "Vérifiez l’EEV et les filtres déshydrateurs."
      ],
      "ar": [
        "ابحث عن تسرب المبردات.",
        "تحقق من EEV ومجففات التصفية."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Compressor Discharge Temp Overheat",
      "fr": "Surchauffe de la température de décharge du compresseur",
      "ar": "ارتفاع درجة حرارة تفريغ الضاغط"
    },
    "problemDescription": {
      "en": "Compressor is exceeding maximum safe discharge temps.",
      "fr": "Le compresseur dépasse les températures de décharge maximales de sécurité.",
      "ar": "يتجاوز الضاغط الحد الأقصى لدرجات حرارة التفريغ الآمنة."
    },
    "solutionSteps": {
      "en": [
        "Verify the system isn't undercharged.",
        "Check compressor thermal block."
      ],
      "fr": [
        "Vérifiez que le système n'est pas sous-chargé.",
        "Vérifiez le bloc thermique du compresseur."
      ],
      "ar": [
        "تأكد من أن النظام ليس أقل من اللازم.",
        "تحقق من الكتلة الحرارية للضاغط."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Overcurrent Protection",
      "fr": "Protection contre les surintensités",
      "ar": "حماية التيار الزائد"
    },
    "problemDescription": {
      "en": "Mains current exceeds expected limits safely.",
      "fr": "Le courant secteur dépasse les limites attendues en toute sécurité.",
      "ar": "التيار الرئيسي يتجاوز الحدود المتوقعة بأمان."
    },
    "solutionSteps": {
      "en": [
        "Check input wiring gauge.",
        "Clear blockages from condenser fans."
      ],
      "fr": [
        "Vérifiez le calibre du câblage d’entrée.",
        "Éliminez les blocages des ventilateurs du condenseur."
      ],
      "ar": [
        "تحقق من مقياس الأسلاك الإدخال.",
        "إزالة الانسداد من مراوح المكثف."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Communication Malfunction",
      "fr": "Dysfonctionnement des communications",
      "ar": "خلل في الاتصالات"
    },
    "problemDescription": {
      "en": "Internal network between indoor and outdoor failed.",
      "fr": "Le réseau interne entre l'intérieur et l'extérieur est en panne.",
      "ar": "فشل الشبكة الداخلية بين الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Examine signal wire integrity.",
        "Test for 5V DC fluctuating comms signal."
      ],
      "fr": [
        "Examinez l’intégrité du fil de signal.",
        "Testez le signal de communication fluctuant de 5 V CC."
      ],
      "ar": [
        "فحص سلامة سلك الإشارة.",
        "اختبار لإشارة الاتصالات المتقلبة 5V DC."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Mode Conflict",
      "fr": "Conflit de modes",
      "ar": "صراع الوضع"
    },
    "problemDescription": {
      "en": "Simultaneous heating and cooling requests in multi-zone systems.",
      "fr": "Demandes simultanées de chauffage et de refroidissement dans les systèmes multizones.",
      "ar": "طلبات التدفئة والتبريد المتزامنة في الأنظمة متعددة المناطق."
    },
    "solutionSteps": {
      "en": [
        "Switch all active zones to either Heat or Cool simultaneously."
      ],
      "fr": [
        "Basculez toutes les zones actives sur Chauffage ou Refroidissement simultanément."
      ],
      "ar": [
        "قم بتبديل جميع المناطق النشطة إما إلى التدفئة أو التبريد في وقت واحد."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Anti-Freezing Protection",
      "fr": "Protection antigel",
      "ar": "الحماية ضد التجمد"
    },
    "problemDescription": {
      "en": "Indoor coil is about to ice up.",
      "fr": "Le serpentin intérieur est sur le point de geler.",
      "ar": "الملف الداخلي على وشك أن يتجمد."
    },
    "solutionSteps": {
      "en": [
        "Check for blocked filters.",
        "Assess for low gas charge."
      ],
      "fr": [
        "Vérifiez les filtres bloqués.",
        "Évaluez la faible charge de gaz."
      ],
      "ar": [
        "التحقق من وجود عوامل التصفية المحظورة.",
        "تقييم انخفاض شحنة الغاز."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "F0",
    "problemTitle": {
      "en": "Refrigerant Shortage / Gathering",
      "fr": "Pénurie/collecte de réfrigérant",
      "ar": "نقص / تجمع المبردات"
    },
    "problemDescription": {
      "en": "Subcooling/superheat values indicate low refrigerant.",
      "fr": "Les valeurs de sous-refroidissement/surchauffe indiquent un faible niveau de réfrigérant.",
      "ar": "تشير قيم التبريد الفرعي/السخونة الزائدة إلى انخفاض مستوى التبريد."
    },
    "solutionSteps": {
      "en": [
        "Pressure test lineset.",
        "Repair leak and recharge."
      ],
      "fr": [
        "Ensemble de lignes de test de pression.",
        "Réparez la fuite et rechargez."
      ],
      "ar": [
        "مجموعة خطوط اختبار الضغط",
        "إصلاح التسرب وإعادة الشحن."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Outdoor Ambient Sensor Open/Short",
      "fr": "Capteur ambiant extérieur ouvert/court-circuité",
      "ar": "مستشعر البيئة الخارجية مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Outdoor temperature reading failed.",
      "fr": "La lecture de la température extérieure a échoué.",
      "ar": "فشلت قراءة درجة الحرارة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Plug sensor firmly into outdoor logic board.",
        "Replace external sensor."
      ],
      "fr": [
        "Branchez fermement le capteur sur la carte mère extérieure.",
        "Remplacez le capteur externe."
      ],
      "ar": [
        "قم بتوصيل المستشعر بقوة في لوحة المنطق الخارجية.",
        "استبدال المستشعر الخارجي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "F4",
    "problemTitle": {
      "en": "Outdoor Condenser Sensor Open/Short",
      "fr": "Capteur de condenseur extérieur ouvert/court-circuité",
      "ar": "مستشعر المكثف الخارجي مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Coil temperature on outdoor unit is lost.",
      "fr": "La température du serpentin de l’unité extérieure est perdue.",
      "ar": "يتم فقدان درجة حرارة الملف في الوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check sensor for wire rot.",
        "Replace condenser tube sensor."
      ],
      "fr": [
        "Vérifiez le capteur pour détecter la pourriture du fil.",
        "Remplacez le capteur du tube du condenseur."
      ],
      "ar": [
        "فحص المستشعر لتعفن الأسلاك.",
        "استبدل مستشعر أنبوب المكثف."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "F5",
    "problemTitle": {
      "en": "Outdoor Discharge Sensor Open/Short",
      "fr": "Capteur de décharge extérieur ouvert/court-circuit",
      "ar": "مستشعر التفريغ الخارجي مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Discharge pipe thermistor is giving false readings.",
      "fr": "La thermistance du tuyau de décharge donne de fausses lectures.",
      "ar": "الثرمستور في أنبوب التفريغ يعطي قراءات خاطئة."
    },
    "solutionSteps": {
      "en": [
        "Verify continuity.",
        "Replace discharge line thermistor."
      ],
      "fr": [
        "Vérifier la continuité.",
        "Remplacez la thermistance de la conduite de décharge."
      ],
      "ar": [
        "التحقق من الاستمرارية.",
        "استبدال الثرمستور خط التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "H1",
    "problemTitle": {
      "en": "Defrosting",
      "fr": "Dégivrage",
      "ar": "إزالة الجليد"
    },
    "problemDescription": {
      "en": "Normal expected defrost cycle in heating mode.",
      "fr": "Cycle de dégivrage normal attendu en mode chauffage.",
      "ar": "دورة تذويب عادية متوقعة في وضع التسخين."
    },
    "solutionSteps": {
      "en": [
        "No action required. Wait for cycle to complete (usually 5-15 mins)."
      ],
      "fr": [
        "Aucune action requise. Attendez la fin du cycle (généralement 5 à 15 minutes)."
      ],
      "ar": [
        "لا يوجد إجراء مطلوب. انتظر حتى تكتمل الدورة (عادة من 5 إلى 15 دقيقة)."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "H2",
    "problemTitle": {
      "en": "Static Dust Sweeping Protection",
      "fr": "Protection contre le balayage de la poussière statique",
      "ar": "حماية من الغبار الساكن"
    },
    "problemDescription": {
      "en": "Electrostatic filter cleaning error or electrostatic precipitator failure.",
      "fr": "Erreur de nettoyage du filtre électrostatique ou panne du précipitateur électrostatique.",
      "ar": "خطأ في تنظيف المرشح الكهروستاتيكي أو فشل المرسب الكهروستاتيكي."
    },
    "solutionSteps": {
      "en": [
        "Clean electrostatic filters.",
        "Check high-voltage PSU for dust sweepers."
      ],
      "fr": [
        "Nettoyer les filtres électrostatiques.",
        "Vérifiez le bloc d’alimentation haute tension pour les balayeuses de poussière."
      ],
      "ar": [
        "تنظيف المرشحات الكهروستاتيكية.",
        "تحقق من PSU عالي الجهد بحثًا عن كاسحات الغبار."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Gree",
    "errorCode": "H3",
    "problemTitle": {
      "en": "Compressor Overload Protection",
      "fr": "Protection contre les surcharges du compresseur",
      "ar": "حماية الزائد للضاغط"
    },
    "problemDescription": {
      "en": "Internal overload protector in compressor has tripped.",
      "fr": "Le protecteur interne de surcharge du compresseur s’est déclenché.",
      "ar": "تعثر واقي التحميل الزائد الداخلي في الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Wait for compressor to cool down.",
        "Check for faulty run capacitor."
      ],
      "fr": [
        "Attendez que le compresseur refroidisse.",
        "Vérifiez le condensateur de fonctionnement défectueux."
      ],
      "ar": [
        "انتظر حتى يبرد الضاغط.",
        "التحقق من وجود خلل في تشغيل المكثف."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "H4",
    "problemTitle": {
      "en": "System Abnormality",
      "fr": "Anomalie du système",
      "ar": "خلل في النظام"
    },
    "problemDescription": {
      "en": "Generic system pressure or thermistor fault.",
      "fr": "Défaut générique de pression du système ou de thermistance.",
      "ar": "ضغط النظام العام أو خطأ الثرمستور."
    },
    "solutionSteps": {
      "en": [
        "Perform deep diagnostic check of all core components.",
        "Reset breakers."
      ],
      "fr": [
        "Effectuez un diagnostic approfondi de tous les composants principaux.",
        "Réinitialisez les disjoncteurs."
      ],
      "ar": [
        "إجراء فحص تشخيصي عميق لجميع المكونات الأساسية.",
        "إعادة تعيين قواطع."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Gree",
    "errorCode": "H5",
    "problemTitle": {
      "en": "IPM Protection",
      "fr": "Protection IPM",
      "ar": "حماية IPM"
    },
    "problemDescription": {
      "en": "Inverter board IPM safety triggered.",
      "fr": "La sécurité IPM de la carte onduleur est déclenchée.",
      "ar": "تم تشغيل سلامة IPM للوحة العاكس."
    },
    "solutionSteps": {
      "en": [
        "Check for heat buildup on the active board.",
        "Replace inverter PCB."
      ],
      "fr": [
        "Vérifiez l'accumulation de chaleur sur la carte active.",
        "Remplacez la carte électronique de l'onduleur."
      ],
      "ar": [
        "تحقق من تراكم الحرارة على اللوحة النشطة.",
        "استبدال ثنائي الفينيل متعدد الكلور العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Temp Sensor Fault",
      "fr": "Défaut du capteur de température ambiante",
      "ar": "خطأ في مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Indoor ambient temperature sensor failure.",
      "fr": "Défaillance du capteur de température ambiante intérieure.",
      "ar": "فشل جهاز استشعار درجة الحرارة المحيطة في الأماكن المغلقة."
    },
    "solutionSteps": {
      "en": [
        "Check and replace thermistor."
      ],
      "fr": [
        "Vérifiez et remplacez la thermistance."
      ],
      "ar": [
        "فحص واستبدال الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Indoor Coil Sensor Fault",
      "fr": "Défaut du capteur de bobine intérieure",
      "ar": "خطأ في مستشعر الملف الداخلي"
    },
    "problemDescription": {
      "en": "Indoor heat exchanger thermistor malfunction.",
      "fr": "Dysfonctionnement de la thermistance de l’échangeur de chaleur intérieur.",
      "ar": "عطل الثرمستور للمبادل الحراري الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check connection.",
        "Replace thermistor if faulty."
      ],
      "fr": [
        "Vérifiez la connexion.",
        "Remplacez la thermistance si elle est défectueuse."
      ],
      "ar": [
        "تحقق من الاتصال.",
        "استبدل الثرمستور إذا كان معيبًا."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Outdoor Coil Sensor Fault",
      "fr": "Défaut du capteur de bobine extérieure",
      "ar": "خطأ في مستشعر الملف الخارجي"
    },
    "problemDescription": {
      "en": "Outdoor heat exchanger thermistor malfunction.",
      "fr": "Dysfonctionnement de la thermistance de l’échangeur de chaleur extérieur.",
      "ar": "عطل الثرمستور للمبادل الحراري الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Check sensor integrity.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez l’intégrité du capteur.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من سلامة المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "E4",
    "problemTitle": {
      "en": "System Abnormality",
      "fr": "Anomalie du système",
      "ar": "خلل في النظام"
    },
    "problemDescription": {
      "en": "Compressor or general system failure.",
      "fr": "Panne du compresseur ou du système général.",
      "ar": "الضاغط أو فشل النظام العام."
    },
    "solutionSteps": {
      "en": [
        "Power cycle system.",
        "Call technician for thorough check."
      ],
      "fr": [
        "Système de cycle d'alimentation.",
        "Appelez un technicien pour une vérification approfondie."
      ],
      "ar": [
        "نظام دورة الطاقة.",
        "اتصل بالفني لإجراء فحص شامل."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Model Configuration Error",
      "fr": "Erreur de configuration du modèle",
      "ar": "خطأ في تكوين النموذج"
    },
    "problemDescription": {
      "en": "Mismatch in EEPROM or unit config.",
      "fr": "Incompatibilité dans l'EEPROM ou la configuration de l'unité.",
      "ar": "عدم التطابق في EEPROM أو تكوين الوحدة."
    },
    "solutionSteps": {
      "en": [
        "Verify model settings on PCB.",
        "Replace main board if defective."
      ],
      "fr": [
        "Vérifiez les paramètres du modèle sur le PCB.",
        "Remplacez la carte principale si elle est défectueuse."
      ],
      "ar": [
        "تحقق من إعدادات النموذج على PCB.",
        "استبدل اللوحة الرئيسية إذا كانت معيبة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Indoor Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur intérieur",
      "ar": "خطأ في محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Abnormal indoor fan speed.",
      "fr": "Vitesse anormale du ventilateur intérieur.",
      "ar": "سرعة المروحة الداخلية غير طبيعية."
    },
    "solutionSteps": {
      "en": [
        "Check for blockages.",
        "Test motor winding.",
        "Replace motor."
      ],
      "fr": [
        "Vérifiez les blocages.",
        "Testez l’enroulement du moteur.",
        "Remplacez le moteur."
      ],
      "ar": [
        "تحقق من وجود انسدادات.",
        "اختبار لف المحرك.",
        "استبدل المحرك."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "EC",
    "problemTitle": {
      "en": "Refrigerant Leakage",
      "fr": "Fuite de réfrigérant",
      "ar": "تسرب المبردات"
    },
    "problemDescription": {
      "en": "Loss of refrigerant pressure detected.",
      "fr": "Perte de pression du réfrigérant détectée.",
      "ar": "تم اكتشاف فقدان ضغط غاز التبريد."
    },
    "solutionSteps": {
      "en": [
        "Turn unit off to prevent damage.",
        "Locate leak and re-pressurize system."
      ],
      "fr": [
        "Éteignez l'appareil pour éviter tout dommage.",
        "Localisez la fuite et repressurisez le système."
      ],
      "ar": [
        "قم بإيقاف تشغيل الوحدة لمنع تلفها.",
        "حدد موقع التسرب وأعد ضغط النظام."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "P1",
    "problemTitle": {
      "en": "High/Low Voltage Protection",
      "fr": "Protection haute/basse tension",
      "ar": "حماية الجهد العالي/المنخفض"
    },
    "problemDescription": {
      "en": "Unstable incoming AC power.",
      "fr": "Alimentation CA entrante instable.",
      "ar": "طاقة التيار المتردد الواردة غير مستقرة."
    },
    "solutionSteps": {
      "en": [
        "Verify main power grid.",
        "Install power stabilizer."
      ],
      "fr": [
        "Vérifiez le réseau électrique principal.",
        "Installez le stabilisateur de puissance."
      ],
      "ar": [
        "التحقق من شبكة الكهرباء الرئيسية.",
        "تثبيت مثبت الطاقة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E0",
    "problemTitle": {
      "en": "Indoor EEPROM Error",
      "fr": "Erreur EEPROM intérieure",
      "ar": "خطأ EEPROM داخلي"
    },
    "problemDescription": {
      "en": "Parameter fault in the indoor logic EEPROM.",
      "fr": "Défaut de paramètre dans l’EEPROM de la logique intérieure.",
      "ar": "خطأ المعلمة في EEPROM المنطق الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor PCB board."
      ],
      "fr": [
        "Remplacez la carte PCB intérieure."
      ],
      "ar": [
        "استبدل لوحة PCB الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Comms Error (Indoor/Outdoor)",
      "fr": "Erreur de communication (intérieur/extérieur)",
      "ar": "خطأ في الاتصال (داخلي/خارجي)"
    },
    "problemDescription": {
      "en": "Communication loop disrupted.",
      "fr": "Boucle de communication perturbée.",
      "ar": "تعطلت حلقة الاتصال."
    },
    "solutionSteps": {
      "en": [
        "Check interconnecting wire between L and S terminals.",
        "Inspect PCB optocouplers."
      ],
      "fr": [
        "Vérifiez le fil d’interconnexion entre les bornes L et S.",
        "Inspectez les optocoupleurs PCB."
      ],
      "ar": [
        "تحقق من سلك التوصيل البيني بين المحطتين L وS.",
        "فحص optocouplers ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Display Board Communication Error",
      "fr": "Erreur de communication du panneau d'affichage",
      "ar": "خطأ في اتصال لوحة العرض"
    },
    "problemDescription": {
      "en": "Wiring between main board and LED display is interrupted.",
      "fr": "Le câblage entre la carte principale et l’affichage LED est interrompu.",
      "ar": "تمت مقاطعة الأسلاك بين اللوحة الرئيسية وشاشة LED."
    },
    "solutionSteps": {
      "en": [
        "Reconnect display wire harness.",
        "Replace display or main board."
      ],
      "fr": [
        "Rebranchez le faisceau de câbles de l'écran.",
        "Remplacez l'écran ou la carte principale."
      ],
      "ar": [
        "أعد توصيل مجموعة أسلاك العرض.",
        "استبدل الشاشة أو اللوحة الرئيسية."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Auto-Restart Parameter Error",
      "fr": "Erreur de paramètre de redémarrage automatique",
      "ar": "خطأ في معلمة إعادة التشغيل التلقائي"
    },
    "problemDescription": {
      "en": "EEPROM error on reboot parameters.",
      "fr": "Erreur EEPROM sur les paramètres de redémarrage.",
      "ar": "خطأ EEPROM في معلمات إعادة التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Reset main breaker.",
        "Replace indoor board."
      ],
      "fr": [
        "Réinitialisez le disjoncteur principal.",
        "Remplacez le panneau intérieur."
      ],
      "ar": [
        "إعادة ضبط الكسارة الرئيسية.",
        "استبدال اللوحة الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "F0",
    "problemTitle": {
      "en": "Overload Current Protection",
      "fr": "Protection contre les surcharges",
      "ar": "الزائد الحماية الحالية"
    },
    "problemDescription": {
      "en": "High load detected during operation.",
      "fr": "Charge élevée détectée pendant le fonctionnement.",
      "ar": "تم الكشف عن حمولة عالية أثناء التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Check condenser for dirt.",
        "Verify appropriate charge levels."
      ],
      "fr": [
        "Vérifiez le condenseur pour déceler de la saleté.",
        "Vérifiez les niveaux de charge appropriés."
      ],
      "ar": [
        "فحص المكثف للأوساخ.",
        "التحقق من مستويات الشحن المناسبة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Outdoor Temp Sensor Error",
      "fr": "Erreur du capteur de température extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الخارجية"
    },
    "problemDescription": {
      "en": "Ambient temperature sensor failed.",
      "fr": "Le capteur de température ambiante est en panne.",
      "ar": "فشل مستشعر درجة الحرارة المحيطة."
    },
    "solutionSteps": {
      "en": [
        "Re-plug sensor to outdoor board.",
        "Replace."
      ],
      "fr": [
        "Rebranchez le capteur à la carte extérieure.",
        "Remplacer."
      ],
      "ar": [
        "أعد توصيل المستشعر باللوحة الخارجية.",
        "يستبدل."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Condenser Temp Sensor Error",
      "fr": "Erreur du capteur de température du condenseur",
      "ar": "خطأ في مستشعر درجة حرارة المكثف"
    },
    "problemDescription": {
      "en": "Outdoor coil thermistor malfunction.",
      "fr": "Dysfonctionnement de la thermistance de la bobine extérieure.",
      "ar": "عطل في الثرمستور ذو الملف الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Test resistance value in water.",
        "Replace coil sensor."
      ],
      "fr": [
        "Testez la valeur de résistance dans l'eau.",
        "Remplacez le capteur de bobine."
      ],
      "ar": [
        "اختبار قيمة المقاومة في الماء.",
        "استبدل مستشعر الملف."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Compressor Discharge Temp Error",
      "fr": "Erreur de température de décharge du compresseur",
      "ar": "خطأ في درجة حرارة تفريغ الضاغط"
    },
    "problemDescription": {
      "en": "Discharge sensor is open or shorted.",
      "fr": "Le capteur de décharge est ouvert ou en court-circuit.",
      "ar": "مستشعر التفريغ مفتوح أو قصير."
    },
    "solutionSteps": {
      "en": [
        "Check sensor mounting.",
        "Replace sensor module."
      ],
      "fr": [
        "Vérifiez le montage du capteur.",
        "Remplacez le module de capteur."
      ],
      "ar": [
        "تحقق من تركيب المستشعر.",
        "استبدال وحدة الاستشعار."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "F4",
    "problemTitle": {
      "en": "Outdoor EEPROM Error",
      "fr": "Erreur EEPROM extérieure",
      "ar": "خطأ EEPROM خارجي"
    },
    "problemDescription": {
      "en": "Outdoor control board memory parameter failure.",
      "fr": "Défaillance des paramètres de mémoire de la carte de commande extérieure.",
      "ar": "فشل معلمة ذاكرة لوحة التحكم الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Re-flash software or replace outdoor PCB."
      ],
      "fr": [
        "Re-flashez le logiciel ou remplacez le PCB extérieur."
      ],
      "ar": [
        "أعد وميض البرنامج أو استبدل PCB الخارجي."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "F5",
    "problemTitle": {
      "en": "Outdoor Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur extérieur",
      "ar": "خطأ في محرك المروحة الخارجية"
    },
    "problemDescription": {
      "en": "Loss of fan speed control on DC units.",
      "fr": "Perte de contrôle de la vitesse du ventilateur sur les unités DC.",
      "ar": "فقدان التحكم في سرعة المروحة على وحدات التيار المستمر."
    },
    "solutionSteps": {
      "en": [
        "Ensure proper input voltage to fan PCB.",
        "Replace outdoor fan motor."
      ],
      "fr": [
        "Assurez-vous d’une tension d’entrée appropriée sur le PCB du ventilateur.",
        "Remplacez le moteur du ventilateur extérieur."
      ],
      "ar": [
        "تأكد من أن جهد الإدخال مناسب لمروحة PCB.",
        "استبدل محرك المروحة الخارجية."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "P0",
    "problemTitle": {
      "en": "IPM Protection",
      "fr": "Protection IPM",
      "ar": "حماية IPM"
    },
    "problemDescription": {
      "en": "Intelligent Power Module protects against overcurrent / overheat.",
      "fr": "Le module d'alimentation intelligent protège contre les surintensités/surchauffes.",
      "ar": "وحدة الطاقة الذكية تحمي من التيار الزائد / الحرارة الزائدة."
    },
    "solutionSteps": {
      "en": [
        "Check compressor ground faults.",
        "Replace IPM/Inverter board."
      ],
      "fr": [
        "Vérifiez les défauts à la terre du compresseur.",
        "Remplacez la carte IPM/Inverter."
      ],
      "ar": [
        "فحص الأعطال الأرضية للضاغط.",
        "استبدل IPM/لوحة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "P2",
    "problemTitle": {
      "en": "Compressor Top High Temp Protection",
      "fr": "Protection haute température du dessus du compresseur",
      "ar": "ضاغط علوي لحماية درجة الحرارة العالية"
    },
    "problemDescription": {
      "en": "Extreme temperatures around the compressor housing.",
      "fr": "Températures extrêmes autour du boîtier du compresseur.",
      "ar": "درجات الحرارة القصوى حول مبيت الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Add refrigerant if low.",
        "Check expansion valve."
      ],
      "fr": [
        "Ajoutez du réfrigérant si le niveau est bas.",
        "Vérifier le détendeur."
      ],
      "ar": [
        "أضف المبرد إذا كان منخفضًا.",
        "تحقق من صمام التوسع."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "P3",
    "problemTitle": {
      "en": "Outdoor Low Temp Protection",
      "fr": "Protection extérieure basse température",
      "ar": "حماية من درجات الحرارة المنخفضة في الهواء الطلق"
    },
    "problemDescription": {
      "en": "Ambient temperature too low for specific compressor operation.",
      "fr": "Température ambiante trop basse pour un fonctionnement spécifique du compresseur.",
      "ar": "درجة الحرارة المحيطة منخفضة جدًا لتشغيل ضاغط معين."
    },
    "solutionSteps": {
      "en": [
        "Wait for operating conditions to improve or use crankcase heater."
      ],
      "fr": [
        "Attendez que les conditions de fonctionnement s'améliorent ou utilisez un chauffage de carter."
      ],
      "ar": [
        "انتظر حتى تتحسن ظروف التشغيل أو استخدم سخان علبة المرافق."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "P4",
    "problemTitle": {
      "en": "Compressor Drive Error",
      "fr": "Erreur d'entraînement du compresseur",
      "ar": "خطأ في محرك الضاغط"
    },
    "problemDescription": {
      "en": "Abnormal readings on phase UVW wiring.",
      "fr": "Lectures anormales sur le câblage de la phase UVW.",
      "ar": "قراءات غير طبيعية على أسلاك المرحلة UVW."
    },
    "solutionSteps": {
      "en": [
        "Check compressor connection phases.",
        "Validate inverter output."
      ],
      "fr": [
        "Vérifier les phases de connexion du compresseur.",
        "Validez la sortie de l’onduleur."
      ],
      "ar": [
        "تحقق من مراحل اتصال الضاغط.",
        "التحقق من صحة إخراج العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Carrier",
    "errorCode": "P5",
    "problemTitle": {
      "en": "Mode Conflict",
      "fr": "Conflit de modes",
      "ar": "صراع الوضع"
    },
    "problemDescription": {
      "en": "Different modes requested across multiple indoor units.",
      "fr": "Différents modes demandés sur plusieurs unités intérieures.",
      "ar": "أوضاع مختلفة مطلوبة عبر وحدات داخلية متعددة."
    },
    "solutionSteps": {
      "en": [
        "All indoor units must select identical modes."
      ],
      "fr": [
        "Toutes les unités intérieures doivent sélectionner des modes identiques."
      ],
      "ar": [
        "يجب على جميع الوحدات الداخلية تحديد أوضاع متطابقة."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Carrier",
    "errorCode": "P6",
    "problemTitle": {
      "en": "Low Pressure Protection",
      "fr": "Protection basse pression",
      "ar": "حماية الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Refrigerant loop suction pressure falls too low.",
      "fr": "La pression d’aspiration de la boucle de réfrigérant tombe trop bas.",
      "ar": "ينخفض ​​ضغط شفط حلقة غاز التبريد بشكل كبير."
    },
    "solutionSteps": {
      "en": [
        "Fix slow refrigerant leaks.",
        "Regas system to specification."
      ],
      "fr": [
        "Réparez les fuites lentes de réfrigérant.",
        "Système de regazage selon spécifications."
      ],
      "ar": [
        "إصلاح تسرب المبردات البطيئة.",
        "نظام ريجاس للمواصفات."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "04",
    "problemTitle": {
      "en": "Compressor Return Failure",
      "fr": "Panne de retour du compresseur",
      "ar": "فشل عودة الضاغط"
    },
    "problemDescription": {
      "en": "Return signal from compressor to target controller failed.",
      "fr": "Le signal de retour du compresseur au contrôleur cible a échoué.",
      "ar": "فشلت إشارة العودة من الضاغط إلى وحدة التحكم المستهدفة."
    },
    "solutionSteps": {
      "en": [
        "Check wiring between units.",
        "Check compressor driver board."
      ],
      "fr": [
        "Vérifiez le câblage entre les unités.",
        "Vérifiez la carte pilote du compresseur."
      ],
      "ar": [
        "فحص الأسلاك بين الوحدات.",
        "تحقق من لوحة تشغيل الضاغط."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "0B",
    "problemTitle": {
      "en": "Float Switch Error",
      "fr": "Erreur d'interrupteur à flotteur",
      "ar": "تعويم خطأ التبديل"
    },
    "problemDescription": {
      "en": "Drain pan full or float switch triggered.",
      "fr": "Bac de récupération plein ou interrupteur à flotteur déclenché.",
      "ar": "تم تشغيل مفتاح التصريف بالكامل أو تعويم."
    },
    "solutionSteps": {
      "en": [
        "Clear drain pan and pipe.",
        "Check float switch continuity."
      ],
      "fr": [
        "Nettoyer le bac de récupération et le tuyau.",
        "Vérifier la continuité de l'interrupteur à flotteur."
      ],
      "ar": [
        "مسح عموم الصرف والأنابيب.",
        "التحقق من استمرارية التبديل تعويم."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "11",
    "problemTitle": {
      "en": "Indoor Fan Error",
      "fr": "Erreur du ventilateur intérieur",
      "ar": "خطأ في المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Indoor fan motor abnormal lock.",
      "fr": "Verrouillage anormal du moteur du ventilateur intérieur.",
      "ar": "قفل غير طبيعي لمحرك المروحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Clean fan drum.",
        "Check motor and PCB terminals."
      ],
      "fr": [
        "Nettoyer le tambour du ventilateur.",
        "Vérifiez les bornes du moteur et du PCB."
      ],
      "ar": [
        "تنظيف طبل المروحة.",
        "تحقق من أطراف المحرك وثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "12",
    "problemTitle": {
      "en": "Indoor Board Abnormality",
      "fr": "Anomalie du panneau intérieur",
      "ar": "شذوذ المجلس الداخلي"
    },
    "problemDescription": {
      "en": "EEPROM or general logic error on indoor board.",
      "fr": "EEPROM ou erreur logique générale sur la carte intérieure.",
      "ar": "EEPROM أو خطأ منطقي عام على اللوحة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Reset power.",
        "Replace indoor control board."
      ],
      "fr": [
        "Réinitialisez l’alimentation.",
        "Remplacez le tableau de commande intérieur."
      ],
      "ar": [
        "إعادة ضبط الطاقة.",
        "استبدال لوحة التحكم الداخلية"
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "1C",
    "problemTitle": {
      "en": "Compressor Drive Error",
      "fr": "Erreur d'entraînement du compresseur",
      "ar": "خطأ في محرك الضاغط"
    },
    "problemDescription": {
      "en": "Compressor drive control circuit failure.",
      "fr": "Panne du circuit de commande d’entraînement du compresseur.",
      "ar": "فشل دائرة التحكم في محرك الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check inverter PCB.",
        "Perform megger test on compressor."
      ],
      "fr": [
        "Vérifiez la carte PCB de l'onduleur.",
        "Effectuez un test Megger sur le compresseur."
      ],
      "ar": [
        "فحص العاكس ثنائي الفينيل متعدد الكلور.",
        "قم بإجراء اختبار الميجر على الضاغط."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "1F",
    "problemTitle": {
      "en": "Compressor Breakdown",
      "fr": "Panne du compresseur",
      "ar": "انهيار الضاغط"
    },
    "problemDescription": {
      "en": "Compressor motor malfunction or overheat.",
      "fr": "Dysfonctionnement ou surchauffe du moteur du compresseur.",
      "ar": "عطل في محرك الضاغط أو ارتفاع درجة حرارته."
    },
    "solutionSteps": {
      "en": [
        "Check compressor resistance.",
        "Replace compressor if broken."
      ],
      "fr": [
        "Vérifiez la résistance du compresseur.",
        "Remplacez le compresseur s’il est cassé."
      ],
      "ar": [
        "تحقق من مقاومة الضاغط.",
        "استبدل الضاغط في حالة الكسر."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "08",
    "problemTitle": {
      "en": "4-Way Valve Error",
      "fr": "Erreur de vanne à 4 voies",
      "ar": "خطأ في الصمام رباعي الاتجاه"
    },
    "problemDescription": {
      "en": "Heating/cooling changeover valve stuck or faulty.",
      "fr": "Vanne d'inversion chauffage/refroidissement bloquée ou défectueuse.",
      "ar": "صمام تحويل التدفئة/التبريد عالق أو معيب."
    },
    "solutionSteps": {
      "en": [
        "Check valve solenoid coil.",
        "Tap valve body gently to unstick.",
        "Replace 4-way valve."
      ],
      "fr": [
        "Bobine du solénoïde du clapet anti-retour.",
        "Tapotez doucement le corps de la valve pour le décoller.",
        "Remplacez la vanne à 4 voies."
      ],
      "ar": [
        "فحص الملف اللولبي للصمام.",
        "اضغط على جسم الصمام بلطف لفكه.",
        "استبدل الصمام رباعي الاتجاه."
      ]
    },
    "category": "System Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "21",
    "problemTitle": {
      "en": "High Pressure Switch",
      "fr": "Pressostat haute pression",
      "ar": "مفتاح الضغط العالي"
    },
    "problemDescription": {
      "en": "High pressure switch activated during operation.",
      "fr": "Pressostat haute pression activé pendant le fonctionnement.",
      "ar": "يتم تفعيل مفتاح الضغط العالي أثناء التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor unit.",
        "Check for excessive refrigerant.",
        "Verify outdoor fan operation."
      ],
      "fr": [
        "Nettoyer l’unité extérieure.",
        "Vérifiez s'il y a un excès de réfrigérant.",
        "Vérifiez le fonctionnement du ventilateur extérieur."
      ],
      "ar": [
        "وحدة خارجية نظيفة.",
        "تحقق من وجود سائل التبريد الزائد.",
        "التحقق من تشغيل المروحة الخارجية."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "00",
    "problemTitle": {
      "en": "Return Air Temp Sensor Error",
      "fr": "Erreur du capteur de température de l'air de retour",
      "ar": "إرجاع خطأ في مستشعر درجة حرارة الهواء"
    },
    "problemDescription": {
      "en": "Indoor TA sensor short or open.",
      "fr": "Capteur TA intérieur court-circuité ou ouvert.",
      "ar": "مستشعر TA الداخلي قصير أو مفتوح."
    },
    "solutionSteps": {
      "en": [
        "Verify TA sensor insertion.",
        "Replace component."
      ],
      "fr": [
        "Vérifiez l’insertion du capteur TA.",
        "Remplacez le composant."
      ],
      "ar": [
        "تحقق من إدخال مستشعر TA.",
        "استبدال المكون."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "01",
    "problemTitle": {
      "en": "Indoor Coil Temp Sensor Error",
      "fr": "Erreur du capteur de température du serpentin intérieur",
      "ar": "خطأ في مستشعر درجة حرارة الملف الداخلي"
    },
    "problemDescription": {
      "en": "Indoor TC sensor abnormality.",
      "fr": "Anomalie du capteur TC intérieur.",
      "ar": "خلل في مستشعر TC الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Refit sensor plug to CN41 on PCB.",
        "Replace TC coil sensor."
      ],
      "fr": [
        "Remettez la fiche du capteur sur CN41 sur le PCB.",
        "Remplacez le capteur de bobine TC."
      ],
      "ar": [
        "أعد تركيب قابس المستشعر على CN41 الموجود على PCB.",
        "استبدل مستشعر الملف TC."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "02",
    "problemTitle": {
      "en": "Outdoor Coil Temp Sensor Error",
      "fr": "Erreur du capteur de température du serpentin extérieur",
      "ar": "خطأ في مستشعر درجة حرارة الملف الخارجي"
    },
    "problemDescription": {
      "en": "TE sensor failure at the condenser.",
      "fr": "Panne du capteur TE au niveau du condenseur.",
      "ar": "فشل مستشعر TE في المكثف."
    },
    "solutionSteps": {
      "en": [
        "Inspect wiring from condenser coil down to logic board.",
        "Replace TE sensor."
      ],
      "fr": [
        "Inspectez le câblage depuis la bobine du condenseur jusqu’à la carte mère.",
        "Remplacez le capteur TE."
      ],
      "ar": [
        "افحص الأسلاك من ملف المكثف إلى لوحة المنطق.",
        "استبدل مستشعر TE."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "03",
    "problemTitle": {
      "en": "Outdoor Ambient Temp Sensor Error",
      "fr": "Erreur du capteur de température ambiante extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة المحيطة بالخارج"
    },
    "problemDescription": {
      "en": "TO sensor reading out of scope.",
      "fr": "Lecture du capteur TO hors de portée.",
      "ar": "لقراءة الاستشعار خارج النطاق."
    },
    "solutionSteps": {
      "en": [
        "Check sensor mounting for physical shield damage.",
        "Replace TO ambient thermistor."
      ],
      "fr": [
        "Vérifiez le montage du capteur pour déceler tout dommage physique au blindage.",
        "Remplacez la thermistance ambiante TO."
      ],
      "ar": [
        "تحقق من تركيب المستشعر بحثًا عن تلف الدرع المادي.",
        "استبدل الثرمستور المحيط."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "09",
    "problemTitle": {
      "en": "PTC Thermistor Error",
      "fr": "Erreur de thermistance PTC",
      "ar": "خطأ في الثرمستور PTC"
    },
    "problemDescription": {
      "en": "PTC resistor failure on the outdoor inverter.",
      "fr": "Défaillance de la résistance PTC sur l'onduleur extérieur.",
      "ar": "فشل مقاومة PTC على العاكس الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Examine power supply circuits.",
        "Replace outdoor control board."
      ],
      "fr": [
        "Examinez les circuits d’alimentation.",
        "Remplacez le tableau de commande extérieur."
      ],
      "ar": [
        "فحص دوائر إمداد الطاقة.",
        "استبدال لوحة التحكم الخارجية"
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "0C",
    "problemTitle": {
      "en": "Indoor Temp Sensor Open Circuit",
      "fr": "Circuit ouvert du capteur de température intérieure",
      "ar": "دائرة مفتوحة لمستشعر درجة الحرارة الداخلي"
    },
    "problemDescription": {
      "en": "Room TA sensor fundamentally disconnected.",
      "fr": "Capteur TA d’ambiance fondamentalement déconnecté.",
      "ar": "تم فصل مستشعر TA بالغرفة بشكل أساسي."
    },
    "solutionSteps": {
      "en": [
        "Reconnect TA sensor.",
        "Solder broken wires."
      ],
      "fr": [
        "Rebranchez le capteur TA.",
        "Soudez les fils cassés."
      ],
      "ar": [
        "أعد توصيل مستشعر TA.",
        "لحام الأسلاك المكسورة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "0D",
    "problemTitle": {
      "en": "Indoor Coil Sensor Open Circuit",
      "fr": "Circuit ouvert du capteur de bobine intérieure",
      "ar": "الدائرة المفتوحة لجهاز استشعار الملف الداخلي"
    },
    "problemDescription": {
      "en": "TC sensor completely unreadable.",
      "fr": "Capteur TC complètement illisible.",
      "ar": "مستشعر TC غير قابل للقراءة تمامًا."
    },
    "solutionSteps": {
      "en": [
        "Check plug harness continuity to board.",
        "Replace parts."
      ],
      "fr": [
        "Vérifiez la continuité du faisceau de connexion à la carte.",
        "Remplacez les pièces."
      ],
      "ar": [
        "تحقق من استمرارية تسخير المكونات على اللوحة.",
        "استبدال الأجزاء."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "14",
    "problemTitle": {
      "en": "Inverter Overcurrent",
      "fr": "Surintensité de l'onduleur",
      "ar": "العاكس التيار الزائد"
    },
    "problemDescription": {
      "en": "Inverter has detected high amperage spikes.",
      "fr": "L'onduleur a détecté des pics d'ampérage élevés.",
      "ar": "اكتشف العاكس طفرات عالية في التيار."
    },
    "solutionSteps": {
      "en": [
        "Check system charge levels.",
        "Check compressor windings.",
        "Ensure input voltage is clean."
      ],
      "fr": [
        "Vérifiez les niveaux de charge du système.",
        "Vérifiez les enroulements du compresseur.",
        "Assurez-vous que la tension d’entrée est propre."
      ],
      "ar": [
        "التحقق من مستويات شحن النظام.",
        "تحقق من اللفات الضاغط.",
        "تأكد من أن جهد الإدخال نظيف."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "16",
    "problemTitle": {
      "en": "Compressor Position Detection Error",
      "fr": "Erreur de détection de position du compresseur",
      "ar": "خطأ في اكتشاف موضع الضاغط"
    },
    "problemDescription": {
      "en": "Sensors fail to determine rotor phase sequence.",
      "fr": "Les capteurs ne parviennent pas à déterminer la séquence des phases du rotor.",
      "ar": "تفشل المستشعرات في تحديد تسلسل طور الدوار."
    },
    "solutionSteps": {
      "en": [
        "Check wiring for loose contacts at U/V/W terminals.",
        "Replace IPM components."
      ],
      "fr": [
        "Check wiring for loose contacts at U/V/W terminals.",
        "Remplacez les composants IPM."
      ],
      "ar": [
        "تحقق من الأسلاك بحثًا عن جهات اتصال فضفاضة في أطراف U / V / W.",
        "استبدال مكونات IPM."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "17",
    "problemTitle": {
      "en": "Current Detection Circuit Error",
      "fr": "Erreur du circuit de détection de courant",
      "ar": "خطأ في دائرة الكشف الحالية"
    },
    "problemDescription": {
      "en": "Shunt resistor or CT failure on inverter PCB.",
      "fr": "Résistance shunt ou défaillance du TC sur la carte PCB de l'onduleur.",
      "ar": "مقاومة التحويل أو فشل CT على العاكس ثنائي الفينيل متعدد الكلور."
    },
    "solutionSteps": {
      "en": [
        "Investigate board burn marks.",
        "Replace inverter PCB directly."
      ],
      "fr": [
        "Examinez les marques de brûlure du tableau.",
        "Remplacez directement la carte PCB de l'onduleur."
      ],
      "ar": [
        "التحقيق في علامات الحروق على متن الطائرة.",
        "استبدل PCB العاكس مباشرة."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "18",
    "problemTitle": {
      "en": "Discharge Temp Sensor Error",
      "fr": "Erreur du capteur de température de décharge",
      "ar": "خطأ في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "TD sensor is shorted or reading openly.",
      "fr": "Le capteur TD est en court-circuit ou lit ouvertement.",
      "ar": "مستشعر TD قصير أو يقرأ بشكل مفتوح."
    },
    "solutionSteps": {
      "en": [
        "Ensure sensor bulb is tightly strapped to the hot gas line.",
        "Replace TD sensor."
      ],
      "fr": [
        "Ensure sensor bulb is tightly strapped to the hot gas line.",
        "Remplacez le capteur TD."
      ],
      "ar": [
        "تأكد من ربط لمبة المستشعر بإحكام بخط الغاز الساخن.",
        "استبدل مستشعر TD."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "19",
    "problemTitle": {
      "en": "Suction Temp Sensor Error",
      "fr": "Erreur du capteur de température d'aspiration",
      "ar": "خطأ في مستشعر درجة حرارة الشفط"
    },
    "problemDescription": {
      "en": "TS sensor fails to return true readings.",
      "fr": "Le capteur TS ne parvient pas à renvoyer de vraies lectures.",
      "ar": "فشل مستشعر TS في إرجاع القراءات الحقيقية."
    },
    "solutionSteps": {
      "en": [
        "Check for insulation wrap around sensor.",
        "Replace TS suction pipe sensor."
      ],
      "fr": [
        "Vérifiez l'isolation autour du capteur.",
        "Remplacer le capteur du tuyau d'aspiration TS."
      ],
      "ar": [
        "تحقق من وجود غلاف عازل حول المستشعر.",
        "استبدل مستشعر أنبوب الشفط TS."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Toshiba",
    "errorCode": "20",
    "problemTitle": {
      "en": "Low Pressure Switch Error",
      "fr": "Erreur du pressostat basse pression",
      "ar": "خطأ في تبديل الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Low pressure cutout due to loss of charge.",
      "fr": "Coupure basse pression due à une perte de charge.",
      "ar": "انقطاع الضغط المنخفض بسبب فقدان الشحن."
    },
    "solutionSteps": {
      "en": [
        "Search and correct all flared joints.",
        "Vacuum and drop in new refrigerant charge."
      ],
      "fr": [
        "Rechercher et corriger tous les joints évasés.",
        "Passez l’aspirateur et déposez une nouvelle charge de réfrigérant."
      ],
      "ar": [
        "بحث وتصحيح جميع المفاصل المشتعلة.",
        "قم بالتفريغ وإسقاط شحنة التبريد الجديدة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "22",
    "problemTitle": {
      "en": "Outdoor Fan Error (DC Motor Lock)",
      "fr": "Erreur du ventilateur extérieur (verrouillage du moteur CC)",
      "ar": "خطأ في المروحة الخارجية (قفل محرك التيار المستمر)"
    },
    "problemDescription": {
      "en": "Outdoor fan speed detection is missing.",
      "fr": "La détection de la vitesse du ventilateur extérieur est manquante.",
      "ar": "اكتشاف سرعة المروحة الخارجية مفقود."
    },
    "solutionSteps": {
      "en": [
        "Remove bird nests or debris.",
        "Test DC voltage across fan terminals.",
        "Replace fan."
      ],
      "fr": [
        "Retirez les nids d'oiseaux ou les débris.",
        "Testez la tension continue aux bornes du ventilateur.",
        "Remplacez le ventilateur."
      ],
      "ar": [
        "إزالة أعشاش الطيور أو الحطام.",
        "اختبار جهد التيار المستمر عبر أطراف المروحة.",
        "استبدل المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Toshiba",
    "errorCode": "23",
    "problemTitle": {
      "en": "Discharge Temp Anomaly",
      "fr": "Anomalie de température de décharge",
      "ar": "شذوذ درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "TD sensor reporting heat higher than rated specification.",
      "fr": "TD sensor reporting heat higher than rated specification.",
      "ar": "يبلغ مستشعر TD عن حرارة أعلى من المواصفات المقدرة."
    },
    "solutionSteps": {
      "en": [
        "Ensure proper refrigerant volume.",
        "Validate correct PMV (expansion valve) sequence."
      ],
      "fr": [
        "Assurez-vous d’un volume de réfrigérant approprié.",
        "Validez la séquence correcte du PMV (détendeur)."
      ],
      "ar": [
        "تأكد من حجم سائل التبريد المناسب.",
        "التحقق من صحة تسلسل PMV (صمام التمدد) الصحيح."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H11",
    "problemTitle": {
      "en": "Indoor/Outdoor Communication Error",
      "fr": "Erreur de communication intérieure/extérieure",
      "ar": "خطأ في الاتصال الداخلي/الخارجي"
    },
    "problemDescription": {
      "en": "Data transfer irregularity between units.",
      "fr": "Irrégularité du transfert de données entre les unités.",
      "ar": "عدم انتظام نقل البيانات بين الوحدات."
    },
    "solutionSteps": {
      "en": [
        "Inspect connecting cables 1, 2, and 3.",
        "Check PCB fuse."
      ],
      "fr": [
        "Inspectez les câbles de connexion 1, 2 et 3.",
        "Vérifiez le fusible du circuit imprimé."
      ],
      "ar": [
        "افحص كابلات التوصيل 1 و2 و3.",
        "تحقق من فتيل ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H14",
    "problemTitle": {
      "en": "Indoor Intake Air Sensor",
      "fr": "Capteur d'air d'admission intérieur",
      "ar": "مستشعر هواء السحب الداخلي"
    },
    "problemDescription": {
      "en": "Room thermistor short or open.",
      "fr": "Thermistance ambiante courte ou ouverte.",
      "ar": "غرفة الثرمستور قصيرة أو مفتوحة."
    },
    "solutionSteps": {
      "en": [
        "Check sensor placement and resistance.",
        "Replace thermistor."
      ],
      "fr": [
        "Vérifiez l’emplacement et la résistance du capteur.",
        "Remplacez la thermistance."
      ],
      "ar": [
        "تحقق من موضع المستشعر ومقاومته.",
        "استبدل الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "F91",
    "problemTitle": {
      "en": "Refrigeration System Abnormality",
      "fr": "Anomalie du système de réfrigération",
      "ar": "خلل في نظام التبريد"
    },
    "problemDescription": {
      "en": "Gas leak or blocked refrigerant cycle.",
      "fr": "Fuite de gaz ou cycle réfrigérant bloqué.",
      "ar": "تسرب الغاز أو انسداد دورة التبريد."
    },
    "solutionSteps": {
      "en": [
        "Look for oil stains at joints indicating leak.",
        "Vacuum and recharge."
      ],
      "fr": [
        "Recherchez des taches d'huile au niveau des joints indiquant une fuite.",
        "Passez l'aspirateur et rechargez."
      ],
      "ar": [
        "ابحث عن بقع الزيت في المفاصل التي تشير إلى التسرب.",
        "فراغ وإعادة الشحن."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H16",
    "problemTitle": {
      "en": "Outdoor Current Transformer Open",
      "fr": "Transformateur de courant extérieur ouvert",
      "ar": "محول التيار الخارجي مفتوح"
    },
    "problemDescription": {
      "en": "CT current is below expected value.",
      "fr": "Le courant du CT est inférieur à la valeur attendue.",
      "ar": "تيار CT أقل من القيمة المتوقعة."
    },
    "solutionSteps": {
      "en": [
        "Check power wiring.",
        "Check outdoor PCB."
      ],
      "fr": [
        "Vérifiez le câblage électrique.",
        "Vérifiez le PCB extérieur."
      ],
      "ar": [
        "تحقق من أسلاك الطاقة.",
        "تحقق من ثنائي الفينيل متعدد الكلور في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H19",
    "problemTitle": {
      "en": "Indoor Fan Motor Block",
      "fr": "Bloc moteur du ventilateur intérieur",
      "ar": "كتلة محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Indoor fan motor locked.",
      "fr": "Moteur du ventilateur intérieur verrouillé.",
      "ar": "محرك المروحة الداخلي مغلق."
    },
    "solutionSteps": {
      "en": [
        "Check fan for dust blockages.",
        "Check motor PCB feedback."
      ],
      "fr": [
        "Vérifiez le ventilateur pour déceler toute obstruction par la poussière.",
        "Vérifiez le retour de la carte PCB du moteur."
      ],
      "ar": [
        "افحص المروحة بحثًا عن انسدادات الغبار.",
        "تحقق من ردود فعل PCB للمحرك."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F90",
    "problemTitle": {
      "en": "PFC Circuit Error",
      "fr": "Erreur du circuit PFC",
      "ar": "خطأ في دائرة PFC"
    },
    "problemDescription": {
      "en": "Power Factor Correction circuit failure on outdoor PCB.",
      "fr": "Power Factor Correction circuit failure on outdoor PCB.",
      "ar": "فشل دائرة تصحيح معامل القدرة على ثنائي الفينيل متعدد الكلور الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Check input voltage.",
        "Replace outdoor inverter board."
      ],
      "fr": [
        "Vérifiez la tension d'entrée.",
        "Remplacez la carte de l'onduleur extérieur."
      ],
      "ar": [
        "تحقق من جهد الإدخال.",
        "استبدال لوحة العاكس في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F93",
    "problemTitle": {
      "en": "Compressor Abnormal Rotation",
      "fr": "Rotation anormale du compresseur",
      "ar": "دوران الضاغط غير طبيعي"
    },
    "problemDescription": {
      "en": "Compressor fails to turn at requested speed.",
      "fr": "Le compresseur ne parvient pas à tourner à la vitesse demandée.",
      "ar": "فشل الضاغط في الدوران بالسرعة المطلوبة."
    },
    "solutionSteps": {
      "en": [
        "Check compressor windings.",
        "Verify inverter output module."
      ],
      "fr": [
        "Vérifiez les enroulements du compresseur.",
        "Vérifiez le module de sortie de l'onduleur."
      ],
      "ar": [
        "تحقق من اللفات الضاغط.",
        "التحقق من وحدة إخراج العاكس."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H23",
    "problemTitle": {
      "en": "Indoor Pipe Sensor",
      "fr": "Capteur de tuyau intérieur",
      "ar": "مستشعر الأنابيب الداخلي"
    },
    "problemDescription": {
      "en": "Heat exchanger sensor abnormality.",
      "fr": "Anomalie du capteur de l’échangeur thermique.",
      "ar": "خلل في مستشعر المبادل الحراري."
    },
    "solutionSteps": {
      "en": [
        "Check sensor connection on indoor PCB.",
        "Replace heat exchanger sensor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur sur le PCB intérieur.",
        "Remplacez le capteur de l'échangeur de chaleur."
      ],
      "ar": [
        "تحقق من اتصال المستشعر الموجود على PCB الداخلي.",
        "استبدل مستشعر المبادل الحراري."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H00",
    "problemTitle": {
      "en": "No Abnormality Detected",
      "fr": "Aucune anomalie détectée",
      "ar": "لم يتم اكتشاف أي خلل"
    },
    "problemDescription": {
      "en": "System memory reports normal operation.",
      "fr": "La mémoire système signale un fonctionnement normal.",
      "ar": "تشير ذاكرة النظام إلى التشغيل العادي."
    },
    "solutionSteps": {
      "en": [
        "No service required.",
        "Clear memory cache if diagnosing."
      ],
      "fr": [
        "Aucun service requis.",
        "Effacez le cache mémoire en cas de diagnostic."
      ],
      "ar": [
        "لا توجد خدمة مطلوبة.",
        "امسح ذاكرة التخزين المؤقت للذاكرة في حالة التشخيص."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H12",
    "problemTitle": {
      "en": "Indoor Unit Capacity Unmatched",
      "fr": "Capacité de l'unité intérieure inégalée",
      "ar": "سعة الوحدة الداخلية لا مثيل لها"
    },
    "problemDescription": {
      "en": "Total connected indoor capacity doesn't match outdoor.",
      "fr": "Total connected indoor capacity doesn't match outdoor.",
      "ar": "إجمالي السعة الداخلية المتصلة لا تتطابق مع المساحة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Ensure correct sizing of indoor heads.",
        "Change dipswitch settings."
      ],
      "fr": [
        "Assurez-vous du dimensionnement correct des têtes intérieures.",
        "Modifiez les paramètres des commutateurs DIP."
      ],
      "ar": [
        "تأكد من الحجم الصحيح للرؤوس الداخلية.",
        "تغيير إعدادات dipswitch."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H15",
    "problemTitle": {
      "en": "Outdoor Compressor Temp Sensor Abnormal",
      "fr": "Capteur de température du compresseur extérieur anormal",
      "ar": "مستشعر درجة حرارة الضاغط الخارجي غير طبيعي"
    },
    "problemDescription": {
      "en": "Discharge sensor is dislodged or open.",
      "fr": "Le capteur de décharge est délogé ou ouvert.",
      "ar": "تم إزاحة مستشعر التفريغ أو فتحه."
    },
    "solutionSteps": {
      "en": [
        "Check thermistor attachment.",
        "Test sensor resistance values."
      ],
      "fr": [
        "Vérifiez la fixation de la thermistance.",
        "Testez les valeurs de résistance du capteur."
      ],
      "ar": [
        "تحقق من مرفق الثرمستور.",
        "اختبار قيم مقاومة الاستشعار."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H21",
    "problemTitle": {
      "en": "Indoor Float Switch Abnormal",
      "fr": "Interrupteur à flotteur intérieur anormal",
      "ar": "تعويم داخلي التبديل غير طبيعي"
    },
    "problemDescription": {
      "en": "Drain pan water level reaches limits.",
      "fr": "Le niveau d’eau du bac de récupération atteint les limites.",
      "ar": "يصل مستوى الماء في وعاء التصريف إلى الحد الأقصى."
    },
    "solutionSteps": {
      "en": [
        "Clean indoor unit drain pipe.",
        "Test float switch operation."
      ],
      "fr": [
        "Nettoyer le tuyau de vidange de l’unité intérieure.",
        "Testez le fonctionnement de l’interrupteur à flotteur."
      ],
      "ar": [
        "تنظيف أنبوب تصريف الوحدة الداخلية.",
        "اختبار تشغيل مفتاح التعويم."
      ]
    },
    "category": "Drainage Problems",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H24",
    "problemTitle": {
      "en": "Indoor Heat Exchanger Sensor 2 Abnormal",
      "fr": "Capteur 2 de l’échangeur de chaleur intérieur anormal",
      "ar": "حساس المبادل الحراري الداخلي 2 غير طبيعي"
    },
    "problemDescription": {
      "en": "Sub-coil thermistor failure.",
      "fr": "Panne de thermistance sous-bobine.",
      "ar": "فشل الثرمستور في الملف الفرعي."
    },
    "solutionSteps": {
      "en": [
        "Reseat connector onto main PCB.",
        "Replace sensor wiring harness."
      ],
      "fr": [
        "Réinstallez le connecteur sur le PCB principal.",
        "Remplacez le faisceau de câblage du capteur."
      ],
      "ar": [
        "أعد تثبيت الموصل على PCB الرئيسي.",
        "استبدل مجموعة أسلاك المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H27",
    "problemTitle": {
      "en": "Outside Air Temp Sensor Abnormal",
      "fr": "Capteur de température de l'air extérieur anormal",
      "ar": "مستشعر درجة حرارة الهواء الخارجي غير طبيعي"
    },
    "problemDescription": {
      "en": "Ambient thermistor failure.",
      "fr": "Panne de la thermistance ambiante.",
      "ar": "فشل الثرمستور المحيط."
    },
    "solutionSteps": {
      "en": [
        "Gently clean exterior sensor from dirt.",
        "Replace thermistor."
      ],
      "fr": [
        "Nettoyez délicatement le capteur extérieur de la saleté.",
        "Remplacez la thermistance."
      ],
      "ar": [
        "قم بتنظيف المستشعر الخارجي بلطف من الأوساخ.",
        "استبدل الثرمستور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H28",
    "problemTitle": {
      "en": "Outdoor Heat Exchanger Sensor Abnormal",
      "fr": "Capteur d'échangeur de chaleur extérieur anormal",
      "ar": "مستشعر المبادل الحراري الخارجي غير طبيعي"
    },
    "problemDescription": {
      "en": "Condenser pipe sensor failure.",
      "fr": "Panne du capteur du tuyau du condenseur.",
      "ar": "فشل مستشعر أنبوب المكثف."
    },
    "solutionSteps": {
      "en": [
        "Verify resistance.",
        "Replace defective component."
      ],
      "fr": [
        "Vérifiez la résistance.",
        "Remplacez le composant défectueux."
      ],
      "ar": [
        "التحقق من المقاومة.",
        "استبدال المكون المعيب."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H30",
    "problemTitle": {
      "en": "Discharge Pipe Temp Sensor Abnormal",
      "fr": "Capteur de température du tuyau de refoulement anormal",
      "ar": "مستشعر درجة حرارة أنبوب التفريغ غير طبيعي"
    },
    "problemDescription": {
      "en": "Compressor heat sensor failure.",
      "fr": "Panne du capteur de chaleur du compresseur.",
      "ar": "فشل استشعار حرارة الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Assess thermal paste adhesion.",
        "Replace discharge sensor."
      ],
      "fr": [
        "Évaluez l’adhérence de la pâte thermique.",
        "Remplacez le capteur de décharge."
      ],
      "ar": [
        "تقييم التصاق المعجون الحراري.",
        "استبدل مستشعر التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H33",
    "problemTitle": {
      "en": "Inner/Outer Connection Error",
      "fr": "Erreur de connexion interne/externe",
      "ar": "خطأ في الاتصال الداخلي/الخارجي"
    },
    "problemDescription": {
      "en": "Wrong voltage application or mis-wiring limit.",
      "fr": "Mauvaise application de tension ou limite de mauvais câblage.",
      "ar": "تطبيق الجهد الخاطئ أو حد سوء الأسلاك."
    },
    "solutionSteps": {
      "en": [
        "Measure L1-L2-L3 voltages.",
        "Double check wiring schematic."
      ],
      "fr": [
        "Mesurez les tensions L1-L2-L3.",
        "Vérifiez à nouveau le schéma de câblage."
      ],
      "ar": [
        "قياس الفولتية L1-L2-L3.",
        "تحقق مرتين من مخطط الأسلاك."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H97",
    "problemTitle": {
      "en": "Outdoor Fan Motor Mechanism Lock",
      "fr": "Verrouillage du mécanisme du moteur du ventilateur extérieur",
      "ar": "قفل آلية محرك المروحة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor fan motor overload or stall.",
      "fr": "Surcharge ou décrochage du moteur du ventilateur extérieur.",
      "ar": "محرك المروحة الخارجية الزائد أو المماطلة."
    },
    "solutionSteps": {
      "en": [
        "Verify motor spins freely.",
        "Check fan capacitors."
      ],
      "fr": [
        "Vérifiez que le moteur tourne librement.",
        "Vérifiez les condensateurs du ventilateur."
      ],
      "ar": [
        "تحقق من أن المحرك يدور بحرية.",
        "تأكد من مكثفات المروحة ."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "H98",
    "problemTitle": {
      "en": "Indoor High Pressure Protection",
      "fr": "Protection intérieure haute pression",
      "ar": "حماية الضغط العالي في الأماكن المغلقة"
    },
    "problemDescription": {
      "en": "Excessive heat saturation in indoor unit.",
      "fr": "Saturation excessive de chaleur dans l’unité intérieure.",
      "ar": "تشبع الحرارة المفرط في الوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Clear air filters.",
        "Inspect blower fan speed setup."
      ],
      "fr": [
        "Filtres à air clairs.",
        "Inspectez la configuration de la vitesse du ventilateur."
      ],
      "ar": [
        "مسح مرشحات الهواء.",
        "فحص إعداد سرعة مروحة المنفاخ."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": false
  },
  {
    "brand": "Panasonic",
    "errorCode": "H99",
    "problemTitle": {
      "en": "Indoor Operating Freeze Protection",
      "fr": "Protection contre le gel en fonctionnement intérieur",
      "ar": "حماية من التجميد أثناء التشغيل الداخلي"
    },
    "problemDescription": {
      "en": "Indoor coil forming ice.",
      "fr": "Serpentin intérieur formant de la glace.",
      "ar": "لفائف داخلية تشكل الجليد."
    },
    "solutionSteps": {
      "en": [
        "Ensure proper airflow.",
        "Verify refrigerant levels."
      ],
      "fr": [
        "Assurer une bonne circulation de l’air.",
        "Vérifiez les niveaux de réfrigérant."
      ],
      "ar": [
        "ضمان تدفق الهواء المناسب.",
        "التحقق من مستويات المبردات."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F11",
    "problemTitle": {
      "en": "4-Way Valve Switching Abnormal",
      "fr": "Commutation anormale de la vanne à 4 voies",
      "ar": "تبديل الصمام رباعي الاتجاه غير طبيعي"
    },
    "problemDescription": {
      "en": "System cannot switch between heating and cooling.",
      "fr": "Le système ne peut pas basculer entre le chauffage et le refroidissement.",
      "ar": "لا يمكن للنظام التبديل بين التدفئة والتبريد."
    },
    "solutionSteps": {
      "en": [
        "Tap valve to release stuck piston.",
        "Check solenoid coil.",
        "Replace valve."
      ],
      "fr": [
        "Appuyez sur la valve pour libérer le piston coincé.",
        "Vérifiez la bobine du solénoïde.",
        "Remplacez la vanne."
      ],
      "ar": [
        "اضغط على الصمام لتحرير المكبس العالق.",
        "تحقق من الملف اللولبي.",
        "استبدل الصمام."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F95",
    "problemTitle": {
      "en": "Cooling High Pressure Protection",
      "fr": "Protection haute pression de refroidissement",
      "ar": "تبريد حماية الضغط العالي"
    },
    "problemDescription": {
      "en": "Extreme pressure during cooling mode operation.",
      "fr": "Pression extrême pendant le fonctionnement en mode refroidissement.",
      "ar": "الضغط الشديد أثناء تشغيل وضع التبريد."
    },
    "solutionSteps": {
      "en": [
        "Wash outdoor heat exchanger.",
        "Verify correct gas charge."
      ],
      "fr": [
        "Lavez l’échangeur de chaleur extérieur.",
        "Vérifiez la charge de gaz correcte."
      ],
      "ar": [
        "اغسل المبادل الحراري الخارجي.",
        "التحقق من شحنة الغاز الصحيحة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F96",
    "problemTitle": {
      "en": "IPM Overheat Protection",
      "fr": "Protection contre la surchauffe IPM",
      "ar": "حماية من الحرارة الزائدة IPM"
    },
    "problemDescription": {
      "en": "Inverter board IPM is unacceptably hot.",
      "fr": "L’IPM de la carte onduleur est trop chaud.",
      "ar": "لوحة العاكس IPM ساخنة بشكل غير مقبول."
    },
    "solutionSteps": {
      "en": [
        "Check outdoor fan ventilation.",
        "Replace active power module."
      ],
      "fr": [
        "Vérifiez la ventilation du ventilateur extérieur.",
        "Remplacez le module d'alimentation active."
      ],
      "ar": [
        "تحقق من تهوية المروحة الخارجية.",
        "استبدل وحدة الطاقة النشطة."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F97",
    "problemTitle": {
      "en": "Compressor Overheat Protection",
      "fr": "Protection contre la surchauffe du compresseur",
      "ar": "حماية من الحرارة الزائدة للضاغط"
    },
    "problemDescription": {
      "en": "Dome temperature triggers thermal cutoff.",
      "fr": "La température du dôme déclenche une coupure thermique.",
      "ar": "تؤدي درجة حرارة القبة إلى انقطاع الحرارة."
    },
    "solutionSteps": {
      "en": [
        "Investigate refrigerant shortage.",
        "Check expansion valve."
      ],
      "fr": [
        "Enquêter sur la pénurie de réfrigérant.",
        "Vérifier le détendeur."
      ],
      "ar": [
        "التحقيق في نقص المبردات.",
        "تحقق من صمام التوسع."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F98",
    "problemTitle": {
      "en": "Total Running Current Protection",
      "fr": "Protection totale du courant de fonctionnement",
      "ar": "إجمالي الحماية الحالية للتشغيل"
    },
    "problemDescription": {
      "en": "Total system amperage draw exceeds threshold repeatedly.",
      "fr": "L’intensité totale du système dépasse le seuil à plusieurs reprises.",
      "ar": "إجمالي سحب التيار الكهربائي للنظام يتجاوز الحد بشكل متكرر."
    },
    "solutionSteps": {
      "en": [
        "Check power source.",
        "Megger test the compressor windings."
      ],
      "fr": [
        "Vérifiez la source d’alimentation.",
        "Megger teste les enroulements du compresseur."
      ],
      "ar": [
        "تحقق من مصدر الطاقة.",
        "يقوم Megger باختبار ملفات الضاغط."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Panasonic",
    "errorCode": "F99",
    "problemTitle": {
      "en": "DC Peak Detection",
      "fr": "Détection de crête CC",
      "ar": "كشف الذروة العاصمة"
    },
    "problemDescription": {
      "en": "Spike in DC input voltage on logic board.",
      "fr": "Pic de tension d'entrée CC sur la carte mère.",
      "ar": "ارتفاع في جهد إدخال التيار المستمر على لوحة المنطق."
    },
    "solutionSteps": {
      "en": [
        "Verify no grid lightning spikes.",
        "Replace outdoor control PCB."
      ],
      "fr": [
        "Vérifiez qu’il n’y a pas de pics de foudre sur le réseau.",
        "Remplacez la carte de contrôle extérieure."
      ],
      "ar": [
        "تحقق من عدم وجود طفرات البرق في الشبكة.",
        "استبدال ثنائي الفينيل متعدد الكلور التحكم في الهواء الطلق."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Sensor Error",
      "fr": "Erreur du capteur d'ambiance",
      "ar": "خطأ في مستشعر الغرفة"
    },
    "problemDescription": {
      "en": "Indoor ambient temp sensor fault.",
      "fr": "Défaut du capteur de température ambiante intérieure.",
      "ar": "خطأ في جهاز استشعار درجة الحرارة المحيطة في الأماكن المغلقة."
    },
    "solutionSteps": {
      "en": [
        "Check sensor wiring.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez le câblage du capteur.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من أسلاك المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Heat Exchanger Sensor Error",
      "fr": "Erreur du capteur de l'échangeur de chaleur",
      "ar": "خطأ في مستشعر المبادل الحراري"
    },
    "problemDescription": {
      "en": "Indoor coil thermistor fault.",
      "fr": "Défaut de thermistance de la bobine intérieure.",
      "ar": "خطأ في الثرمستور الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Reseat sensor plug.",
        "Replace indoor coil sensor."
      ],
      "fr": [
        "Réinstallez le bouchon du capteur.",
        "Remplacez le capteur de la bobine intérieure."
      ],
      "ar": [
        "أعد تثبيت قابس المستشعر.",
        "استبدل مستشعر الملف الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Signal failure between indoor and outdoor units.",
      "fr": "Panne de signal entre les unités intérieures et extérieures.",
      "ar": "فشل الإشارة بين الوحدات الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Verify 3-core communication line.",
        "Check for voltage spikes."
      ],
      "fr": [
        "Vérifiez la ligne de communication à 3 conducteurs.",
        "Vérifiez les pointes de tension."
      ],
      "ar": [
        "التحقق من خط الاتصال ثلاثي النواة.",
        "تحقق من وجود طفرات الجهد."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F1",
    "problemTitle": {
      "en": "IPM Module Protection",
      "fr": "Protection des modules IPM",
      "ar": "حماية وحدة IPM"
    },
    "problemDescription": {
      "en": "Intelligent Power Module overcurrent/overheat.",
      "fr": "Surintensité/surchauffe du module d'alimentation intelligent.",
      "ar": "وحدة الطاقة الذكية التيار الزائد/الحرارة الزائدة."
    },
    "solutionSteps": {
      "en": [
        "Check compressor.",
        "Verify outdoor fan operation.",
        "Replace inverter PCB."
      ],
      "fr": [
        "Vérifiez le compresseur.",
        "Vérifiez le fonctionnement du ventilateur extérieur.",
        "Remplacez la carte électronique de l'onduleur."
      ],
      "ar": [
        "فحص الضاغط.",
        "التحقق من تشغيل المروحة الخارجية.",
        "استبدال ثنائي الفينيل متعدد الكلور العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Compressor Overcurrent",
      "fr": "Surintensité du compresseur",
      "ar": "التيار الزائد للضاغط"
    },
    "problemDescription": {
      "en": "Compressor drawing too much power.",
      "fr": "Le compresseur consomme trop de puissance.",
      "ar": "الضاغط يسحب الكثير من الطاقة."
    },
    "solutionSteps": {
      "en": [
        "Check refrigerant levels.",
        "Test compressor resistance."
      ],
      "fr": [
        "Vérifiez les niveaux de réfrigérant.",
        "Testez la résistance du compresseur."
      ],
      "ar": [
        "تحقق من مستويات المبردات.",
        "اختبار مقاومة الضاغط."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E14",
    "problemTitle": {
      "en": "Indoor Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur intérieur",
      "ar": "خطأ في محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Fan speed feedback abnormality.",
      "fr": "Anomalie de retour de vitesse du ventilateur.",
      "ar": "استجابة غير طبيعية لسرعة المروحة."
    },
    "solutionSteps": {
      "en": [
        "Free up fan blade.",
        "Test fan capacitor and motor."
      ],
      "fr": [
        "Libérez la pale du ventilateur.",
        "Testez le condensateur et le moteur du ventilateur."
      ],
      "ar": [
        "حرر شفرة المروحة.",
        "اختبار مكثف المروحة والمحرك."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F4",
    "problemTitle": {
      "en": "Discharge Temp Sensor",
      "fr": "Capteur de température de décharge",
      "ar": "مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge thermistor error.",
      "fr": "Erreur de thermistance de décharge du compresseur.",
      "ar": "خطأ في تفريغ الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check connection.",
        "Replace discharge sensor."
      ],
      "fr": [
        "Vérifiez la connexion.",
        "Remplacez le capteur de décharge."
      ],
      "ar": [
        "تحقق من الاتصال.",
        "استبدل مستشعر التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F7",
    "problemTitle": {
      "en": "Ambient Temp Sensor (Outdoor)",
      "fr": "Capteur de température ambiante (extérieur)",
      "ar": "مستشعر درجة الحرارة المحيطة (خارجي)"
    },
    "problemDescription": {
      "en": "Outdoor temp sensor failure.",
      "fr": "Panne du capteur de température extérieure.",
      "ar": "فشل جهاز استشعار درجة الحرارة في الهواء الطلق."
    },
    "solutionSteps": {
      "en": [
        "Inspect sensor head for damage.",
        "Replace sensor."
      ],
      "fr": [
        "Inspectez la tête du capteur pour déceler tout dommage.",
        "Remplacez le capteur."
      ],
      "ar": [
        "افحص رأس المستشعر بحثًا عن أي ضرر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Compressor Out of Step",
      "fr": "Compresseur déphasé",
      "ar": "الضاغط خارج الخطوة"
    },
    "problemDescription": {
      "en": "Inverter compressor losing synchronous rotation.",
      "fr": "Le compresseur inverseur perd la rotation synchrone.",
      "ar": "الضاغط العاكس يفقد الدوران المتزامن."
    },
    "solutionSteps": {
      "en": [
        "Perform deep system reboot.",
        "Test for IPM/inverter module integrity."
      ],
      "fr": [
        "Effectuez un redémarrage approfondi du système.",
        "Testez l’intégrité du module IPM/onduleur."
      ],
      "ar": [
        "إجراء إعادة تشغيل النظام العميق.",
        "اختبار سلامة وحدة IPM/العاكس."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Display Board Communication",
      "fr": "Communication du panneau d'affichage",
      "ar": "عرض لوحة الاتصالات"
    },
    "problemDescription": {
      "en": "Indoor logic board fails to talk to display panel.",
      "fr": "La carte mère intérieure ne parvient pas à communiquer avec le panneau d'affichage.",
      "ar": "فشل لوحة المنطق الداخلية في التحدث إلى لوحة العرض."
    },
    "solutionSteps": {
      "en": [
        "Reseat 4-pin connector cable.",
        "Replace receiver board."
      ],
      "fr": [
        "Réinstallez le câble du connecteur à 4 broches.",
        "Remplacez la carte réceptrice."
      ],
      "ar": [
        "أعد تثبيت كابل الموصل ذو 4 سنون.",
        "استبدال لوحة الاستقبال."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Indoor EEPROM Error",
      "fr": "Erreur EEPROM intérieure",
      "ar": "خطأ EEPROM داخلي"
    },
    "problemDescription": {
      "en": "Memory access error on indoor processor.",
      "fr": "Erreur d'accès à la mémoire sur le processeur intérieur.",
      "ar": "خطأ في الوصول إلى الذاكرة على المعالج الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor unit control board."
      ],
      "fr": [
        "Remplacez le tableau de commande de l’unité intérieure."
      ],
      "ar": [
        "استبدل لوحة التحكم بالوحدة الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Zero Crossing Signal Error",
      "fr": "Erreur de signal de passage à zéro",
      "ar": "خطأ في إشارة عبور الصفر"
    },
    "problemDescription": {
      "en": "Frequency timing logic failed due to noisy AC power.",
      "fr": "La logique de synchronisation de fréquence a échoué en raison d’une alimentation CA bruyante.",
      "ar": "فشل منطق توقيت التردد بسبب طاقة التيار المتردد المزعجة."
    },
    "solutionSteps": {
      "en": [
        "Verify clean mains supply.",
        "Test with voltage conditioner."
      ],
      "fr": [
        "Vérifiez que l'alimentation secteur est propre.",
        "Testez avec un conditionneur de tension."
      ],
      "ar": [
        "التحقق من إمدادات التيار الكهربائي النظيفة.",
        "اختبار مع مكيف الجهد."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Overload Protection",
      "fr": "Protection contre les surcharges",
      "ar": "حماية الزائد"
    },
    "problemDescription": {
      "en": "Too much load on compressor leading to shutdown.",
      "fr": "Trop de charge sur le compresseur entraînant un arrêt.",
      "ar": "الحمل الزائد على الضاغط يؤدي إلى إيقاف التشغيل."
    },
    "solutionSteps": {
      "en": [
        "Check condenser for mud/dust.",
        "Verify ambient limits."
      ],
      "fr": [
        "Vérifiez le condenseur pour la boue/poussière.",
        "Vérifiez les limites ambiantes."
      ],
      "ar": [
        "افحص المكثف بحثًا عن الطين/الغبار.",
        "التحقق من الحدود المحيطة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "E9",
    "problemTitle": {
      "en": "System Abnormality / Water Full",
      "fr": "Anomalie du système / Eau pleine",
      "ar": "خلل في النظام / امتلاء الماء"
    },
    "problemDescription": {
      "en": "Cassette models detecting high drain water level.",
      "fr": "Modèles à cassette détectant un niveau d’eau de vidange élevé.",
      "ar": "نماذج كاسيت تكتشف ارتفاع مستوى مياه الصرف."
    },
    "solutionSteps": {
      "en": [
        "Check float switch and drain pump.",
        "Clear slimes from pan."
      ],
      "fr": [
        "Vérifiez l’interrupteur à flotteur et la pompe de vidange.",
        "Éliminez les boues de la poêle."
      ],
      "ar": [
        "تحقق من مفتاح التعويم ومضخة التصريف.",
        "مسح السلايم من المقلاة."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Communication Error (Outdoor/IPM)",
      "fr": "Erreur de communication (extérieur/IPM)",
      "ar": "خطأ في الاتصال (خارجي/IPM)"
    },
    "problemDescription": {
      "en": "Outdoor main board unable to communicate with its IPM sub-board.",
      "fr": "Carte principale extérieure incapable de communiquer avec sa sous-carte IPM.",
      "ar": "اللوحة الرئيسية الخارجية غير قادرة على التواصل مع اللوحة الفرعية IPM الخاصة بها."
    },
    "solutionSteps": {
      "en": [
        "Inspect data ribbon on outdoor unit.",
        "Replace driver board."
      ],
      "fr": [
        "Inspectez le ruban de données sur l’unité extérieure.",
        "Remplacez la carte pilote."
      ],
      "ar": [
        "فحص شريط البيانات على الوحدة الخارجية.",
        "استبدال لوحة القيادة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F5",
    "problemTitle": {
      "en": "Compressor Discharge Sensor Error",
      "fr": "Erreur du capteur de décharge du compresseur",
      "ar": "خطأ في مستشعر تفريغ الضاغط"
    },
    "problemDescription": {
      "en": "Open or short reading from the hot gas sensor.",
      "fr": "Lecture ouverte ou courte du capteur de gaz chauds.",
      "ar": "قراءة مفتوحة أو قصيرة من حساس الغاز الساخن."
    },
    "solutionSteps": {
      "en": [
        "Validate wire harness.",
        "Replace sensor component."
      ],
      "fr": [
        "Validez le faisceau de câbles.",
        "Remplacez le composant du capteur."
      ],
      "ar": [
        "التحقق من صحة تسخير الأسلاك.",
        "استبدل مكون المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "F6",
    "problemTitle": {
      "en": "Outdoor Coil Sensor Error",
      "fr": "Erreur du capteur de bobine extérieure",
      "ar": "خطأ في مستشعر الملف الخارجي"
    },
    "problemDescription": {
      "en": "Outside exchanger core sensing failure.",
      "fr": "Défaillance de détection du noyau de l’échangeur extérieur.",
      "ar": "فشل الاستشعار الأساسي للمبادل الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Replace external pipe sensor."
      ],
      "fr": [
        "Remplacez le capteur de tuyau externe."
      ],
      "ar": [
        "استبدل مستشعر الأنابيب الخارجي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "F8",
    "problemTitle": {
      "en": "Outdoor DC Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur CC extérieur",
      "ar": "خطأ في محرك مروحة التيار المستمر الخارجي"
    },
    "problemDescription": {
      "en": "Driver failure or mechanical blockage of condenser fan.",
      "fr": "Panne du pilote ou blocage mécanique du ventilateur du condenseur.",
      "ar": "فشل السائق أو الانسداد الميكانيكي لمروحة المكثف."
    },
    "solutionSteps": {
      "en": [
        "Clear twigs or leaves.",
        "Change DC fan motor assembly."
      ],
      "fr": [
        "Nettoyez les brindilles ou les feuilles.",
        "Remplacez l’ensemble moteur du ventilateur CC."
      ],
      "ar": [
        "مسح الأغصان أو الأوراق.",
        "تغيير مجموعة محرك مروحة التيار المستمر."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F11",
    "problemTitle": {
      "en": "Compressor Drive Error",
      "fr": "Erreur d'entraînement du compresseur",
      "ar": "خطأ في محرك الضاغط"
    },
    "problemDescription": {
      "en": "Electronic drive parameters out of sync with physical load.",
      "fr": "Paramètres électroniques du variateur désynchronisés par rapport à la charge physique.",
      "ar": "معلمات محرك الأقراص الإلكترونية غير متزامنة مع الحمل الفعلي."
    },
    "solutionSteps": {
      "en": [
        "Megger test compressor.",
        "Replace IPM and board."
      ],
      "fr": [
        "Compresseur d'essai Megger.",
        "Remplacez l'IPM et la carte."
      ],
      "ar": [
        "ضاغط اختبار ميجار.",
        "استبدال IPM واللوحة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F12",
    "problemTitle": {
      "en": "Main Board EEPROM Error",
      "fr": "Erreur EEPROM de la carte principale",
      "ar": "خطأ في اللوحة الرئيسية EEPROM"
    },
    "problemDescription": {
      "en": "Outdoor microprocessor parameter loss.",
      "fr": "Perte des paramètres du microprocesseur extérieur.",
      "ar": "فقدان معلمة المعالج الدقيق في الهواء الطلق."
    },
    "solutionSteps": {
      "en": [
        "Power cycle unit completely.",
        "Replace outdoor main PCB."
      ],
      "fr": [
        "Redémarrez complètement l’unité.",
        "Remplacez le PCB principal extérieur."
      ],
      "ar": [
        "وحدة دورة الطاقة بالكامل.",
        "استبدل ثنائي الفينيل متعدد الكلور الرئيسي الخارجي."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F21",
    "problemTitle": {
      "en": "Defrost Temperature Sensor Error",
      "fr": "Erreur du capteur de température de dégivrage",
      "ar": "خطأ في مستشعر درجة حرارة تذويب"
    },
    "problemDescription": {
      "en": "Sensor responsible for heat pump defrost logic is disconnected.",
      "fr": "La sonde responsable de la logique de dégivrage de la pompe à chaleur est déconnectée.",
      "ar": "تم فصل المستشعر المسؤول عن منطق تذويب المضخة الحرارية."
    },
    "solutionSteps": {
      "en": [
        "Check wiring continuity to defrost sensor.",
        "Swap out sensor."
      ],
      "fr": [
        "Vérifier la continuité du câblage vers le capteur de dégivrage.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من استمرارية الأسلاك لإزالة الجليد من جهاز الاستشعار.",
        "مبادلة خارج الاستشعار."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Haier",
    "errorCode": "F22",
    "problemTitle": {
      "en": "AC Current Protection",
      "fr": "Protection du courant alternatif",
      "ar": "الحماية الحالية للتيار المتردد"
    },
    "problemDescription": {
      "en": "Sudden spike in supplied alternating current.",
      "fr": "Pic soudain du courant alternatif fourni.",
      "ar": "ارتفاع مفاجئ في التيار المتردد الموردة."
    },
    "solutionSteps": {
      "en": [
        "Investigate breaker box.",
        "Evaluate condenser loading conditions."
      ],
      "fr": [
        "Examinez le boîtier de disjoncteurs.",
        "Évaluer les conditions de chargement du condenseur."
      ],
      "ar": [
        "التحقيق في مربع الكسارة.",
        "تقييم ظروف تحميل المكثف."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F23",
    "problemTitle": {
      "en": "DC Overvoltage Protection",
      "fr": "Protection contre les surtensions CC",
      "ar": "حماية من الجهد الزائد بالتيار المستمر"
    },
    "problemDescription": {
      "en": "High voltage seen on the DC bus capacitors.",
      "fr": "Haute tension observée sur les condensateurs du bus DC.",
      "ar": "الجهد العالي الذي يظهر على مكثفات ناقل التيار المستمر."
    },
    "solutionSteps": {
      "en": [
        "Protect unit from lightning or grid flux.",
        "Replace inverter."
      ],
      "fr": [
        "Protégez l'unité de la foudre ou du flux du réseau.",
        "Remplacez l'onduleur."
      ],
      "ar": [
        "حماية الوحدة من البرق أو تدفق الشبكة.",
        "استبدال العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Haier",
    "errorCode": "F25",
    "problemTitle": {
      "en": "Exhaust Temp Sensing Error",
      "fr": "Erreur de détection de la température d'échappement",
      "ar": "خطأ في استشعار درجة حرارة العادم"
    },
    "problemDescription": {
      "en": "Overheat warning specifically at the compressor exhaust port.",
      "fr": "Avertissement de surchauffe spécifiquement au niveau de l’orifice d’échappement du compresseur.",
      "ar": "تحذير من ارتفاع درجة الحرارة على وجه التحديد في منفذ عادم الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check for low pressure/refrigerant conditions.",
        "Inspect expansion device."
      ],
      "fr": [
        "Vérifiez les conditions de basse pression/réfrigérant.",
        "Inspectez le périphérique d’extension."
      ],
      "ar": [
        "تحقق من وجود ضغط منخفض/ظروف التبريد.",
        "فحص جهاز التوسعة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "01",
    "problemTitle": {
      "en": "Reversible Valve Abnormality",
      "fr": "Anomalie valvulaire réversible",
      "ar": "شذوذ الصمام العكسي"
    },
    "problemDescription": {
      "en": "Defect in 4-way reversing valve.",
      "fr": "Défaut dans la vanne d'inversion à 4 voies.",
      "ar": "عيب في صمام عكس رباعي الاتجاه."
    },
    "solutionSteps": {
      "en": [
        "Test valve coil.",
        "Replace reversing valve."
      ],
      "fr": [
        "Testez la bobine de la vanne.",
        "Remplacez la vanne d'inversion."
      ],
      "ar": [
        "لفائف صمام الاختبار.",
        "استبدال صمام عكس."
      ]
    },
    "category": "System Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "02",
    "problemTitle": {
      "en": "Outdoor Compressor Lock",
      "fr": "Verrouillage du compresseur extérieur",
      "ar": "قفل الضاغط الخارجي"
    },
    "problemDescription": {
      "en": "Compressor failure or mechanical lock.",
      "fr": "Panne du compresseur ou blocage mécanique.",
      "ar": "فشل الضاغط أو القفل الميكانيكي."
    },
    "solutionSteps": {
      "en": [
        "Disconnect power.",
        "Perform megger check.",
        "Replace compressor."
      ],
      "fr": [
        "Coupez l’alimentation.",
        "Effectuez une vérification du Megger.",
        "Remplacez le compresseur."
      ],
      "ar": [
        "افصل الطاقة.",
        "قم بإجراء فحص الميجر.",
        "استبدل الضاغط."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "03",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Transmission failure between units.",
      "fr": "Panne de transmission entre les unités.",
      "ar": "فشل الإرسال بين الوحدات."
    },
    "solutionSteps": {
      "en": [
        "Inspect data cables.",
        "Test interface boards."
      ],
      "fr": [
        "Inspectez les câbles de données.",
        "Testez les cartes d’interface."
      ],
      "ar": [
        "فحص كابلات البيانات.",
        "لوحات واجهة الاختبار."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "04",
    "problemTitle": {
      "en": "Return Air Temp Sensor",
      "fr": "Capteur de température de l'air de retour",
      "ar": "إرجاع مستشعر درجة حرارة الهواء"
    },
    "problemDescription": {
      "en": "Malfunction in indoor return air thermistor.",
      "fr": "Dysfonctionnement de la thermistance de retour d’air intérieur.",
      "ar": "عطل في الثرمستور الهوائي الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check sensor resistance.",
        "Replace defective sensor."
      ],
      "fr": [
        "Vérifiez la résistance du capteur.",
        "Remplacez le capteur défectueux."
      ],
      "ar": [
        "تحقق من مقاومة المستشعر.",
        "استبدال المستشعر المعيب."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Hitachi",
    "errorCode": "08",
    "problemTitle": {
      "en": "Discharge Gas Temp Too High",
      "fr": "Température du gaz de décharge trop élevée",
      "ar": "درجة حرارة تفريغ الغاز مرتفعة جدًا"
    },
    "problemDescription": {
      "en": "Overheating at the compressor discharge.",
      "fr": "Surchauffe à la sortie du compresseur.",
      "ar": "ارتفاع درجة الحرارة عند تفريغ الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check for low gas.",
        "Verify LEV operation."
      ],
      "fr": [
        "Vérifiez le niveau de gaz.",
        "Vérifiez le fonctionnement du LEV."
      ],
      "ar": [
        "تحقق من انخفاض الغاز.",
        "التحقق من تشغيل LEV."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "11",
    "problemTitle": {
      "en": "Inverter PCB Error",
      "fr": "Erreur de carte PCB de l'onduleur",
      "ar": "خطأ في العاكس ثنائي الفينيل متعدد الكلور"
    },
    "problemDescription": {
      "en": "General failure on outdoor inverter board.",
      "fr": "Panne générale sur la carte de l'onduleur extérieur.",
      "ar": "عطل عام في لوحة العاكس الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Reset system.",
        "Replace outdoor inverter PCB if persistent."
      ],
      "fr": [
        "Réinitialiser le système.",
        "Remplacez la carte PCB de l'onduleur extérieur si cela persiste."
      ],
      "ar": [
        "إعادة ضبط النظام.",
        "استبدل PCB العاكس الخارجي إذا كان ثابتًا."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "22",
    "problemTitle": {
      "en": "Outdoor Fan Motor Lock",
      "fr": "Verrouillage du moteur du ventilateur extérieur",
      "ar": "قفل محرك المروحة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor fan blocked or burnt.",
      "fr": "Ventilateur extérieur bloqué ou brûlé.",
      "ar": "المروحة الخارجية مسدودة أو محترقة."
    },
    "solutionSteps": {
      "en": [
        "Clear obstruction.",
        "Replace fan motor."
      ],
      "fr": [
        "Supprimer l’obstruction.",
        "Remplacez le moteur du ventilateur."
      ],
      "ar": [
        "عرقلة واضحة.",
        "استبدل محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "31",
    "problemTitle": {
      "en": "Incorrect Capacity Settings",
      "fr": "Paramètres de capacité incorrects",
      "ar": "إعدادات السعة غير الصحيحة"
    },
    "problemDescription": {
      "en": "Mismatched indoor and outdoor units capacity config.",
      "fr": "Configuration de capacité des unités intérieures et extérieures incompatible.",
      "ar": "تكوين سعة الوحدات الداخلية والخارجية غير متطابق."
    },
    "solutionSteps": {
      "en": [
        "Check DIP switches.",
        "Ensure correct unit pairing."
      ],
      "fr": [
        "Vérifiez les commutateurs DIP.",
        "Assurez-vous que l’appairage de l’unité est correct."
      ],
      "ar": [
        "تحقق من مفاتيح DIP.",
        "تأكد من الاقتران الصحيح للوحدة."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "05",
    "problemTitle": {
      "en": "Phase Abnormality",
      "fr": "Anomalie de phase",
      "ar": "شذوذ المرحلة"
    },
    "problemDescription": {
      "en": "Detects reverse phase or phase failure in power lines.",
      "fr": "Détecte la phase inverse ou la panne de phase dans les lignes électriques.",
      "ar": "يكتشف الطور العكسي أو فشل الطور في خطوط الكهرباء."
    },
    "solutionSteps": {
      "en": [
        "Recable main power connections R/S/T properly.",
        "Check fuses."
      ],
      "fr": [
        "Rebranchez correctement les connexions d'alimentation principale R/S/T.",
        "Vérifiez les fusibles."
      ],
      "ar": [
        "قم بإعادة توصيل توصيلات الطاقة الرئيسية R/S/T بشكل صحيح.",
        "تحقق من الصمامات."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "06",
    "problemTitle": {
      "en": "Inverter Voltage Dropping",
      "fr": "Chute de tension de l'onduleur",
      "ar": "انخفاض الجهد العاكس"
    },
    "problemDescription": {
      "en": "Unexpected sag in inverter drive voltage.",
      "fr": "Affaissement inattendu de la tension de commande de l’onduleur.",
      "ar": "تراجع غير متوقع في جهد محرك العاكس."
    },
    "solutionSteps": {
      "en": [
        "Verify stable AC input voltage.",
        "Suspect failing inverter power board."
      ],
      "fr": [
        "Vérifiez la tension d’entrée CA stable.",
        "Carte d'alimentation de l'onduleur suspectée d'être défectueuse."
      ],
      "ar": [
        "تحقق من استقرار جهد دخل التيار المتردد.",
        "الاشتباه في فشل لوحة الطاقة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "07",
    "problemTitle": {
      "en": "Exhaust Gas Superheat Decreasing",
      "fr": "Diminution de la surchauffe des gaz d'échappement",
      "ar": "انخفاض درجة حرارة غاز العادم"
    },
    "problemDescription": {
      "en": "Low superheat meaning liquid refrigerant is flooding the compressor.",
      "fr": "Une faible surchauffe signifie que le réfrigérant liquide inonde le compresseur.",
      "ar": "انخفاض الحرارة يعني أن سائل التبريد يغمر الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check expansion valve function.",
        "Check evaporator fan blockages."
      ],
      "fr": [
        "Vérifier le fonctionnement du détendeur.",
        "Vérifiez les blocages du ventilateur de l’évaporateur."
      ],
      "ar": [
        "التحقق من وظيفة صمام التوسع.",
        "تحقق من انسداد مروحة المبخر."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "0A",
    "problemTitle": {
      "en": "Transmission Abnormality (Outdoor to Outdoor)",
      "fr": "Anomalie de transmission (extérieur vers extérieur)",
      "ar": "شذوذ النقل (من الخارج إلى الخارج)"
    },
    "problemDescription": {
      "en": "Communication fault between cascading outdoor units.",
      "fr": "Défaut de communication entre les unités extérieures en cascade.",
      "ar": "خطأ في الاتصال بين الوحدات الخارجية المتتالية."
    },
    "solutionSteps": {
      "en": [
        "Check communication loops H-LINK.",
        "Set unit addresses correctly."
      ],
      "fr": [
        "Vérifiez les boucles de communication H-LINK.",
        "Réglez correctement les adresses des unités."
      ],
      "ar": [
        "تحقق من حلقات الاتصال H-LINK.",
        "ضبط عناوين الوحدة بشكل صحيح."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "0B",
    "problemTitle": {
      "en": "Transmission Abnormality (Indoor to Indoor)",
      "fr": "Anomalie de transmission (intérieur à intérieur)",
      "ar": "شذوذ الإرسال (من الداخل إلى الداخل)"
    },
    "problemDescription": {
      "en": "Communication error within indoor unit daisy chain.",
      "fr": "Erreur de communication dans la guirlande de l’unité intérieure.",
      "ar": "خطأ في الاتصال داخل السلسلة التعاقبية للوحدة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check network bus.",
        "Resolve IP / dip switch conflicts."
      ],
      "fr": [
        "Vérifiez le bus réseau.",
        "Résoudre les conflits IP/dip switch."
      ],
      "ar": [
        "تحقق من حافلة الشبكة.",
        "حل تعارضات تبديل IP/dip."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "0C",
    "problemTitle": {
      "en": "Transmission Abnormality to Main Unit",
      "fr": "Anomalie de transmission à l’unité principale",
      "ar": "شذوذ الإرسال إلى الوحدة الرئيسية"
    },
    "problemDescription": {
      "en": "Slave unit cannot report back to master controller.",
      "fr": "L'unité esclave ne peut pas faire de rapport au contrôleur maître.",
      "ar": "لا يمكن للوحدة التابعة تقديم تقرير إلى وحدة التحكم الرئيسية."
    },
    "solutionSteps": {
      "en": [
        "Check interconnecting wire resistance.",
        "Replace board logic interface."
      ],
      "fr": [
        "Vérifiez la résistance du fil d’interconnexion.",
        "Remplacez l'interface logique de la carte."
      ],
      "ar": [
        "تحقق من مقاومة الأسلاك المتصلة.",
        "استبدال الواجهة المنطقية للوحة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "12",
    "problemTitle": {
      "en": "Indoor Fan Motor Abnormality",
      "fr": "Anomalie du moteur du ventilateur intérieur",
      "ar": "خلل في محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Indoor blower rotational errors.",
      "fr": "Erreurs de rotation du ventilateur intérieur.",
      "ar": "أخطاء دوران المنفاخ الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Perform visual check on indoor drum.",
        "Replace fan PCB controller."
      ],
      "fr": [
        "Effectuer une vérification visuelle du tambour intérieur.",
        "Remplacez le contrôleur PCB du ventilateur."
      ],
      "ar": [
        "قم بإجراء فحص بصري على الأسطوانة الداخلية.",
        "استبدل وحدة تحكم PCB للمروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "13",
    "problemTitle": {
      "en": "High Pressure Abnormality",
      "fr": "Anomalie de haute pression",
      "ar": "ارتفاع ضغط الدم غير طبيعي"
    },
    "problemDescription": {
      "en": "Rapid pressure rise triggering limit switch.",
      "fr": "Fin de course déclenchant une montée en pression rapide.",
      "ar": "ارتفاع الضغط السريع يؤدي إلى مفتاح الحد."
    },
    "solutionSteps": {
      "en": [
        "Recover overgrown refrigerant.",
        "Ensure condenser airflow is excellent."
      ],
      "fr": [
        "Récupérez le réfrigérant envahi.",
        "Assurez-vous que le débit d’air du condenseur est excellent."
      ],
      "ar": [
        "استعادة المبردات المتضخمة.",
        "تأكد من أن تدفق هواء المكثف ممتاز."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "14",
    "problemTitle": {
      "en": "Inverter Overcurrent",
      "fr": "Surintensité de l'onduleur",
      "ar": "العاكس التيار الزائد"
    },
    "problemDescription": {
      "en": "Hardware overcurrent limit tripped at IPM.",
      "fr": "La limite de surintensité matérielle s'est déclenchée à l'IPM.",
      "ar": "تعثر حد التيار الزائد للأجهزة عند IPM."
    },
    "solutionSteps": {
      "en": [
        "Check all terminal blocks to compressor.",
        "Examine compressor insulation."
      ],
      "fr": [
        "Vérifiez tous les borniers du compresseur.",
        "Examinez l’isolation du compresseur."
      ],
      "ar": [
        "تحقق من جميع الكتل الطرفية للضاغط.",
        "فحص عزل الضاغط."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "15",
    "problemTitle": {
      "en": "Discharge Temp Sensor Abnormality",
      "fr": "Anomalie du capteur de température de décharge",
      "ar": "خلل في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Thermistor out of bounds or severed.",
      "fr": "Thermistance hors limites ou coupée.",
      "ar": "الثرمستور خارج الحدود أو مقطوع."
    },
    "solutionSteps": {
      "en": [
        "Firmly crimp or attach sensor.",
        "Read resistance values.",
        "Replace."
      ],
      "fr": [
        "Sertissez ou fixez fermement le capteur.",
        "Lisez les valeurs de résistance.",
        "Remplacer."
      ],
      "ar": [
        "قم بتجعيد أو توصيل المستشعر بإحكام.",
        "قراءة قيم المقاومة.",
        "يستبدل."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Hitachi",
    "errorCode": "16",
    "problemTitle": {
      "en": "Heat Exchanger Temp Sensor Abnormality",
      "fr": "Anomalie du capteur de température de l’échangeur de chaleur",
      "ar": "خلل في مستشعر درجة حرارة المبادل الحراري"
    },
    "problemDescription": {
      "en": "Mid-coil sensor failure.",
      "fr": "Panne du capteur au milieu de la bobine.",
      "ar": "فشل مستشعر منتصف الملف."
    },
    "solutionSteps": {
      "en": [
        "Replace part inside unit casing."
      ],
      "fr": [
        "Remplacez la pièce à l’intérieur du boîtier de l’unité."
      ],
      "ar": [
        "استبدل الجزء الموجود داخل غلاف الوحدة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Hitachi",
    "errorCode": "17",
    "problemTitle": {
      "en": "Ambient Temp Sensor Abnormality",
      "fr": "Anomalie du capteur de température ambiante",
      "ar": "شذوذ مستشعر درجة الحرارة المحيطة"
    },
    "problemDescription": {
      "en": "Outdoor air check thermistor failure.",
      "fr": "Défaillance de la thermistance de vérification de l’air extérieur.",
      "ar": "فحص الهواء الخارجي فشل الثرمستور."
    },
    "solutionSteps": {
      "en": [
        "Use multimeter on sensor component.",
        "Replace if necessary."
      ],
      "fr": [
        "Utilisez un multimètre sur le composant du capteur.",
        "Remplacez si nécessaire."
      ],
      "ar": [
        "استخدم المتر المتعدد على مكون المستشعر.",
        "استبدله إذا لزم الأمر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Hitachi",
    "errorCode": "18",
    "problemTitle": {
      "en": "Transmission Error To Inverter",
      "fr": "Erreur de transmission à l'onduleur",
      "ar": "خطأ في الإرسال إلى العاكس"
    },
    "problemDescription": {
      "en": "Outdoor logic board cannot reach inverter driver.",
      "fr": "La carte mère extérieure ne peut pas atteindre le pilote de l'onduleur.",
      "ar": "لا يمكن للوحة المنطقية الخارجية الوصول إلى سائق العاكس."
    },
    "solutionSteps": {
      "en": [
        "Re-seat ribbon cable.",
        "Replace one or both boards."
      ],
      "fr": [
        "Réinstallez le câble ruban.",
        "Remplacez une ou les deux cartes."
      ],
      "ar": [
        "إعادة مقعد كابل الشريط.",
        "استبدل إحدى اللوحتين أو كلتيهما."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "32",
    "problemTitle": {
      "en": "Transmission Error To Outdoor Unit",
      "fr": "Erreur de transmission vers l'unité extérieure",
      "ar": "خطأ في النقل إلى الوحدة الخارجية"
    },
    "problemDescription": {
      "en": "Indoor unit loses outdoor handshake.",
      "fr": "L’unité intérieure perd la poignée de main extérieure.",
      "ar": "تفقد الوحدة الداخلية المصافحة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Verify line voltages aren't bleeding into data lines.",
        "Re-cable signal wires."
      ],
      "fr": [
        "Vérifiez que les tensions de ligne ne se déversent pas dans les lignes de données.",
        "Re-câblez les fils de signal."
      ],
      "ar": [
        "تأكد من عدم تسرب جهد الخط إلى خطوط البيانات.",
        "إعادة كابلات أسلاك الإشارة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Hitachi",
    "errorCode": "35",
    "problemTitle": {
      "en": "Incorrect Indoor Unit Setting",
      "fr": "Réglage incorrect de l’unité intérieure",
      "ar": "إعداد الوحدة الداخلية غير صحيح"
    },
    "problemDescription": {
      "en": "Duplicate indoor unit numbers or invalid DIP configurations.",
      "fr": "Numéros d’unité intérieure en double ou configurations DIP invalides.",
      "ar": "أرقام وحدة داخلية مكررة أو تكوينات DIP غير صالحة."
    },
    "solutionSteps": {
      "en": [
        "Ensure rotary dials and dip switches are unique per unit."
      ],
      "fr": [
        "Assurez-vous que les cadrans rotatifs et les commutateurs DIP sont uniques par unité."
      ],
      "ar": [
        "تأكد من أن الأقراص الدوارة ومفاتيح الغمس فريدة لكل وحدة."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Hitachi",
    "errorCode": "38",
    "problemTitle": {
      "en": "Abnormality Of Protective Circuit",
      "fr": "Anomalie du circuit de protection",
      "ar": "شذوذ في دائرة الحماية"
    },
    "problemDescription": {
      "en": "Onboard trace or protection fuse has blown.",
      "fr": "Le fusible de trace ou de protection intégré a sauté.",
      "ar": "لقد انفجر الأثر الموجود على متن الطائرة أو فتيل الحماية."
    },
    "solutionSteps": {
      "en": [
        "Identify source of short circuit.",
        "Change protective PCB element."
      ],
      "fr": [
        "Identifiez la source du court-circuit.",
        "Changer l'élément de protection du PCB."
      ],
      "ar": [
        "تحديد مصدر الدائرة القصيرة.",
        "تغيير عنصر PCB الواقي."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "01",
    "problemTitle": {
      "en": "Serial Communication Error",
      "fr": "Erreur de communication série",
      "ar": "خطأ في الاتصال التسلسلي"
    },
    "problemDescription": {
      "en": "No signal received from outdoor unit.",
      "fr": "Aucun signal reçu de l'unité extérieure.",
      "ar": "لا توجد إشارة مستلمة من الوحدة الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check wiring terminals.",
        "Test PCB on both units."
      ],
      "fr": [
        "Vérifiez les bornes de câblage.",
        "Testez le PCB sur les deux unités."
      ],
      "ar": [
        "تحقق من محطات الأسلاك.",
        "اختبار ثنائي الفينيل متعدد الكلور على كلا الوحدتين."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "11",
    "problemTitle": {
      "en": "Indoor Unit PCB",
      "fr": "PCB de l'unité intérieure",
      "ar": "وحدة داخلية ثنائي الفينيل متعدد الكلور"
    },
    "problemDescription": {
      "en": "Room unit controller failure or model not set.",
      "fr": "Défaillance du contrôleur de l'unité d'ambiance ou modèle non défini.",
      "ar": "فشل وحدة تحكم وحدة الغرفة أو لم يتم ضبط النموذج."
    },
    "solutionSteps": {
      "en": [
        "Check EEPROM.",
        "Replace indoor control board."
      ],
      "fr": [
        "Vérifiez l'EEPROM.",
        "Remplacez le tableau de commande intérieur."
      ],
      "ar": [
        "تحقق من إيبروم.",
        "استبدال لوحة التحكم الداخلية"
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "32",
    "problemTitle": {
      "en": "Indoor Heat Exchanger Sensor",
      "fr": "Capteur d'échangeur de chaleur intérieur",
      "ar": "مستشعر المبادل الحراري الداخلي"
    },
    "problemDescription": {
      "en": "Open or shorted indoor coil thermistor.",
      "fr": "Thermistance de la bobine intérieure ouverte ou en court-circuit.",
      "ar": "ملف الثرمستور الداخلي مفتوح أو قصير."
    },
    "solutionSteps": {
      "en": [
        "Check sensor connection.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez la connexion du capteur.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من اتصال المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "51",
    "problemTitle": {
      "en": "Indoor Fan Motor",
      "fr": "Moteur de ventilateur intérieur",
      "ar": "محرك مروحة داخلي"
    },
    "problemDescription": {
      "en": "Fan motor rotation speed abnormality.",
      "fr": "Anomalie de vitesse de rotation du moteur du ventilateur.",
      "ar": "خلل في سرعة دوران محرك المروحة."
    },
    "solutionSteps": {
      "en": [
        "Inspect fan wheel.",
        "Replace fan motor."
      ],
      "fr": [
        "Inspectez la roue du ventilateur.",
        "Remplacez le moteur du ventilateur."
      ],
      "ar": [
        "فحص عجلة المروحة.",
        "استبدل محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "71",
    "problemTitle": {
      "en": "Discharge Temp Sensor Error",
      "fr": "Erreur du capteur de température de décharge",
      "ar": "خطأ في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Outdoor compressor discharge sensor fault.",
      "fr": "Défaut capteur de décharge du compresseur extérieur.",
      "ar": "خطأ في مستشعر تفريغ الضاغط الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Check connection.",
        "Replace discharge thermistor."
      ],
      "fr": [
        "Vérifiez la connexion.",
        "Remplacez la thermistance de décharge."
      ],
      "ar": [
        "تحقق من الاتصال.",
        "استبدال الثرمستور التفريغ."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "62",
    "problemTitle": {
      "en": "Outdoor Unit Fan Error",
      "fr": "Erreur du ventilateur de l'unité extérieure",
      "ar": "خطأ في مروحة الوحدة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor fan motor locked or driver failed.",
      "fr": "Le moteur du ventilateur extérieur est verrouillé ou le pilote est en panne.",
      "ar": "محرك المروحة الخارجية مغلق أو فشل السائق."
    },
    "solutionSteps": {
      "en": [
        "Free blockages.",
        "Check fan motor resistance.",
        "Replace fan motor."
      ],
      "fr": [
        "Blocages gratuits.",
        "Vérifiez la résistance du moteur du ventilateur.",
        "Remplacez le moteur du ventilateur."
      ],
      "ar": [
        "انسدادات مجانية.",
        "تحقق من مقاومة محرك المروحة.",
        "استبدل محرك المروحة."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "84",
    "problemTitle": {
      "en": "Compressor Sensor Error",
      "fr": "Erreur du capteur du compresseur",
      "ar": "خطأ في مستشعر الضاغط"
    },
    "problemDescription": {
      "en": "Current sensor giving abnormal readings.",
      "fr": "Capteur de courant donnant des lectures anormales.",
      "ar": "جهاز الاستشعار الحالي يعطي قراءات غير طبيعية."
    },
    "solutionSteps": {
      "en": [
        "Check compressor terminal wiring.",
        "Replace outdoor board."
      ],
      "fr": [
        "Vérifiez le câblage des bornes du compresseur.",
        "Remplacez le tableau extérieur."
      ],
      "ar": [
        "تحقق من الأسلاك الطرفية للضاغط.",
        "استبدال اللوحة الخارجية."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "94",
    "problemTitle": {
      "en": "Trip Detection",
      "fr": "Détection de voyage",
      "ar": "كشف الرحلة"
    },
    "problemDescription": {
      "en": "Compressor overcurrent/overheat trip.",
      "fr": "Déclenchement de surintensité/surchauffe du compresseur.",
      "ar": "رحلة التيار الزائد/السخونة الزائدة للضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check for refrigerant restriction.",
        "Verify compressor integrity."
      ],
      "fr": [
        "Vérifiez la restriction du réfrigérant.",
        "Vérifiez l’intégrité du compresseur."
      ],
      "ar": [
        "التحقق من وجود قيود المبردات.",
        "التحقق من سلامة الضاغط."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "12",
    "problemTitle": {
      "en": "Wired Remote Control Communication Error",
      "fr": "Erreur de communication de la télécommande filaire",
      "ar": "خطأ في الاتصال السلكي بجهاز التحكم عن بعد"
    },
    "problemDescription": {
      "en": "Controller data bus has frozen or shorted.",
      "fr": "Le bus de données du contrôleur est gelé ou court-circuité.",
      "ar": "تم تجميد ناقل بيانات وحدة التحكم أو قصره."
    },
    "solutionSteps": {
      "en": [
        "Restart controller.",
        "Verify remote data bus cable.",
        "Change remote control."
      ],
      "fr": [
        "Redémarrez le contrôleur.",
        "Vérifiez le câble du bus de données distant.",
        "Changer de télécommande."
      ],
      "ar": [
        "إعادة تشغيل وحدة التحكم.",
        "تحقق من كابل ناقل البيانات البعيد.",
        "تغيير جهاز التحكم عن بعد."
      ]
    },
    "category": "Communication Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "13",
    "problemTitle": {
      "en": "Indoor Unit EEPROM Error",
      "fr": "Erreur EEPROM de l’unité intérieure",
      "ar": "خطأ في الوحدة الداخلية EEPROM"
    },
    "problemDescription": {
      "en": "Data corrupt on indoor controller.",
      "fr": "Données corrompues sur le contrôleur intérieur.",
      "ar": "البيانات تالفة في وحدة التحكم الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Perform deep power cycle.",
        "Replace internal electronics PCB."
      ],
      "fr": [
        "Effectuez un cycle d’alimentation profond.",
        "Remplacez la carte électronique interne."
      ],
      "ar": [
        "أداء دورة الطاقة العميقة.",
        "استبدل PCB الإلكترونيات الداخلية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "21",
    "problemTitle": {
      "en": "Liquid Pipe Sensor Error",
      "fr": "Erreur du capteur de tuyau de liquide",
      "ar": "خطأ في مستشعر الأنابيب السائلة"
    },
    "problemDescription": {
      "en": "Indoor coil entry point thermistor fails.",
      "fr": "La thermistance du point d’entrée de la bobine intérieure est en panne.",
      "ar": "فشل الثرمستور في نقطة دخول الملف الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Inspect wiring from thermistor securely.",
        "Replace sensor."
      ],
      "fr": [
        "Inspectez soigneusement le câblage de la thermistance.",
        "Remplacez le capteur."
      ],
      "ar": [
        "فحص الأسلاك من الثرمستور بشكل آمن.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "22",
    "problemTitle": {
      "en": "Gas Pipe Sensor Error",
      "fr": "Erreur du capteur de tuyau de gaz",
      "ar": "خطأ في مستشعر أنبوب الغاز"
    },
    "problemDescription": {
      "en": "Indoor coil exit point thermistor fails.",
      "fr": "La thermistance du point de sortie de la bobine intérieure est en panne.",
      "ar": "فشل الثرمستور في نقطة خروج الملف الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Verify resistance.",
        "Replace component."
      ],
      "fr": [
        "Vérifiez la résistance.",
        "Remplacez le composant."
      ],
      "ar": [
        "التحقق من المقاومة.",
        "استبدال المكون."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "31",
    "problemTitle": {
      "en": "Power Supply Frequency Test Error",
      "fr": "Erreur de test de fréquence d'alimentation",
      "ar": "خطأ في اختبار تردد مصدر الطاقة"
    },
    "problemDescription": {
      "en": "AC power frequency fluctuating beyond 50Hz/60Hz limits.",
      "fr": "Fréquence du courant alternatif fluctuant au-delà des limites de 50 Hz/60 Hz.",
      "ar": "تردد طاقة التيار المتردد يتقلب بما يتجاوز حدود 50 هرتز/60 هرتز."
    },
    "solutionSteps": {
      "en": [
        "Verify generator or grid power.",
        "Isolate circuit."
      ],
      "fr": [
        "Vérifiez l’alimentation du générateur ou du réseau.",
        "Isoler le circuit."
      ],
      "ar": [
        "التحقق من قوة المولد أو الشبكة.",
        "عزل الدائرة."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "41",
    "problemTitle": {
      "en": "Room Temp Sensor Error",
      "fr": "Erreur du capteur de température ambiante",
      "ar": "خطأ في مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Indoor ambient pickup thermistor broken.",
      "fr": "Thermistance de détection de la température ambiante intérieure cassée.",
      "ar": "الثرمستور لاقط المحيط الداخلي مكسور."
    },
    "solutionSteps": {
      "en": [
        "Examine mounting placement.",
        "Swap broken sensor out."
      ],
      "fr": [
        "Examinez l’emplacement de montage.",
        "Remplacez le capteur cassé."
      ],
      "ar": [
        "فحص موضع التركيب.",
        "قم بتبديل المستشعر المكسور."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "42",
    "problemTitle": {
      "en": "Indoor Heat Exchanger Mid Sensor Error",
      "fr": "Erreur du capteur central de l'échangeur de chaleur intérieur",
      "ar": "خطأ في مستشعر منتصف المبادل الحراري الداخلي"
    },
    "problemDescription": {
      "en": "Thermistor at coil midpoint reads openly.",
      "fr": "La thermistance au milieu de la bobine lit ouvertement.",
      "ar": "يقرأ الثرمستور عند نقطة منتصف الملف بشكل مفتوح."
    },
    "solutionSteps": {
      "en": [
        "Ensure connection head is tight.",
        "Replace."
      ],
      "fr": [
        "Assurez-vous que la tête de connexion est bien serrée.",
        "Remplacer."
      ],
      "ar": [
        "تأكد من أن رأس التوصيل مشدود.",
        "يستبدل."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "52",
    "problemTitle": {
      "en": "VD (Fan Motor) Error",
      "fr": "Erreur VD (moteur de ventilateur)",
      "ar": "خطأ VD (محرك المروحة)."
    },
    "problemDescription": {
      "en": "Direct failure of motor drive logic.",
      "fr": "Défaillance directe de la logique d'entraînement du moteur.",
      "ar": "الفشل المباشر في منطق محرك الأقراص."
    },
    "solutionSteps": {
      "en": [
        "Verify no mechanical jam.",
        "Replace entire fan assembly."
      ],
      "fr": [
        "Vérifiez qu'il n'y a pas de bourrage mécanique.",
        "Remplacez l’ensemble du ventilateur."
      ],
      "ar": [
        "تحقق من عدم وجود انحشار ميكانيكي.",
        "استبدل مجموعة المروحة بالكامل."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "63",
    "problemTitle": {
      "en": "Inverter Error",
      "fr": "Erreur de l'onduleur",
      "ar": "خطأ العاكس"
    },
    "problemDescription": {
      "en": "General inverter circuit damage.",
      "fr": "Dommages généraux au circuit de l’onduleur.",
      "ar": "تلف دائرة العاكس العامة."
    },
    "solutionSteps": {
      "en": [
        "Clear high pressure blockages.",
        "Check IPM continuity.",
        "Install new inverter board."
      ],
      "fr": [
        "Éliminez les blocages à haute pression.",
        "Vérifiez la continuité de l'IPM.",
        "Installez une nouvelle carte onduleur."
      ],
      "ar": [
        "إزالة الانسدادات ذات الضغط المرتفع.",
        "التحقق من استمرارية IPM.",
        "تثبيت لوحة العاكس الجديدة."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "64",
    "problemTitle": {
      "en": "Active Filter Error",
      "fr": "Erreur de filtre actif",
      "ar": "خطأ في التصفية النشطة"
    },
    "problemDescription": {
      "en": "Voltage smoothing filter capacitor bank failed.",
      "fr": "La batterie de condensateurs du filtre de lissage de tension est en panne.",
      "ar": "فشل بنك مكثف مرشح تجانس الجهد."
    },
    "solutionSteps": {
      "en": [
        "Check input voltage spikes history.",
        "Replace outdoor PCB parts."
      ],
      "fr": [
        "Vérifiez l’historique des pics de tension d’entrée.",
        "Remplacez les pièces extérieures du PCB."
      ],
      "ar": [
        "تحقق من سجل ارتفاعات جهد الإدخال.",
        "استبدل أجزاء PCB الخارجية."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "72",
    "problemTitle": {
      "en": "Compressor Temp Sensor Error",
      "fr": "Erreur du capteur de température du compresseur",
      "ar": "خطأ في مستشعر درجة حرارة الضاغط"
    },
    "problemDescription": {
      "en": "Domain body or internal coil read incorrectly.",
      "fr": "Le corps du domaine ou la bobine interne sont mal lus.",
      "ar": "قراءة نص المجال أو الملف الداخلي بشكل غير صحيح."
    },
    "solutionSteps": {
      "en": [
        "Visually inspect sensor connection on compressor.",
        "Change module."
      ],
      "fr": [
        "Inspectez visuellement la connexion du capteur sur le compresseur.",
        "Changer de module."
      ],
      "ar": [
        "افحص اتصال المستشعر الموجود على الضاغط بصريًا.",
        "تغيير الوحدة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "73",
    "problemTitle": {
      "en": "Heat Exchanger Temp Sensor Error (Outdoor)",
      "fr": "Erreur du capteur de température de l'échangeur de chaleur (extérieur)",
      "ar": "خطأ في مستشعر درجة حرارة المبادل الحراري (في الخارج)"
    },
    "problemDescription": {
      "en": "Thermistor on external condensing coils failed.",
      "fr": "La thermistance des serpentins de condensation externes est tombée en panne.",
      "ar": "فشل الثرمستور الموجود على ملفات التكثيف الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Inspect clip.",
        "Exchange with verified part."
      ],
      "fr": [
        "Inspectez le clip.",
        "Échange avec pièce vérifiée."
      ],
      "ar": [
        "فحص المقطع.",
        "تبادل مع الجزء الذي تم التحقق منه."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "74",
    "problemTitle": {
      "en": "Outdoor Temp Sensor Error",
      "fr": "Erreur du capteur de température extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الخارجية"
    },
    "problemDescription": {
      "en": "Thermistor monitoring outside air broken.",
      "fr": "Thermistance de surveillance de l'air extérieur cassée.",
      "ar": "مراقبة الثرمستور الهواء الخارجي مكسور."
    },
    "solutionSteps": {
      "en": [
        "Locate sensor head and clean it.",
        "Replace if damaged."
      ],
      "fr": [
        "Localisez la tête du capteur et nettoyez-la.",
        "Remplacez-le s’il est endommagé."
      ],
      "ar": [
        "حدد موقع رأس المستشعر وقم بتنظيفه.",
        "استبدله في حالة تلفه."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Fujitsu",
    "errorCode": "82",
    "problemTitle": {
      "en": "Current Sensor Error",
      "fr": "Erreur du capteur de courant",
      "ar": "خطأ في الاستشعار الحالي"
    },
    "problemDescription": {
      "en": "Logic board cannot ascertain amperage used.",
      "fr": "La carte mère ne peut pas déterminer l'ampérage utilisé.",
      "ar": "لا يمكن للوحة المنطقية التأكد من التيار المستخدم."
    },
    "solutionSteps": {
      "en": [
        "Evaluate control PCB.",
        "Replace outdoor main unit board."
      ],
      "fr": [
        "Évaluer le PCB de contrôle.",
        "Remplacez la carte de l’unité principale extérieure."
      ],
      "ar": [
        "تقييم التحكم في ثنائي الفينيل متعدد الكلور.",
        "استبدل لوحة الوحدة الرئيسية الخارجية."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "83",
    "problemTitle": {
      "en": "High Pressure Sensor Error",
      "fr": "Erreur du capteur haute pression",
      "ar": "خطأ في جهاز استشعار الضغط العالي"
    },
    "problemDescription": {
      "en": "High pressure transducer providing no analogue input.",
      "fr": "Transducteur haute pression ne fournissant aucune entrée analogique.",
      "ar": "محول الضغط العالي لا يوفر أي مدخلات تناظرية."
    },
    "solutionSteps": {
      "en": [
        "Measure 5V input to sensor.",
        "Replace transducer element."
      ],
      "fr": [
        "Mesurez l’entrée 5 V du capteur.",
        "Remplacez l'élément transducteur."
      ],
      "ar": [
        "قياس مدخلات 5V إلى أجهزة الاستشعار.",
        "استبدال عنصر محول."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Fujitsu",
    "errorCode": "95",
    "problemTitle": {
      "en": "Compressor Motor Control Error",
      "fr": "Erreur de commande du moteur du compresseur",
      "ar": "خطأ في التحكم في محرك الضاغط"
    },
    "problemDescription": {
      "en": "Position or speed control fails continuously.",
      "fr": "Le contrôle de position ou de vitesse échoue continuellement.",
      "ar": "يفشل التحكم في الموضع أو السرعة بشكل مستمر."
    },
    "solutionSteps": {
      "en": [
        "Perform deep compressor winding analyses.",
        "Likely replace inverter IPM."
      ],
      "fr": [
        "Effectuer des analyses approfondies des enroulements du compresseur.",
        "Remplacer probablement l'IPM de l'onduleur."
      ],
      "ar": [
        "إجراء تحليلات لف الضاغط العميق.",
        "من المحتمل استبدال العاكس IPM."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Temp Sensor Error",
      "fr": "Erreur du capteur de température ambiante",
      "ar": "خطأ في مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Indoor temperature thermistor has failed.",
      "fr": "La thermistance de température intérieure est en panne.",
      "ar": "فشل الثرمستور في درجة الحرارة الداخلية."
    },
    "solutionSteps": {
      "en": [
        "Check wiring.",
        "Replace room thermistor."
      ],
      "fr": [
        "Vérifiez le câblage.",
        "Remplacez la thermistance ambiante."
      ],
      "ar": [
        "تحقق من الأسلاك.",
        "استبدال الثرمستور الغرفة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Coil Temp Sensor Error",
      "fr": "Erreur du capteur de température de la bobine",
      "ar": "خطأ في مستشعر درجة حرارة الملف"
    },
    "problemDescription": {
      "en": "Indoor heat exchanger sensor is open/short.",
      "fr": "Le capteur de l’échangeur de chaleur intérieur est ouvert/court-circuité.",
      "ar": "مستشعر المبادل الحراري الداخلي مفتوح/قصير."
    },
    "solutionSteps": {
      "en": [
        "Reseat connection.",
        "Replace coil sensor."
      ],
      "fr": [
        "Réinstallez la connexion.",
        "Remplacez le capteur de bobine."
      ],
      "ar": [
        "إعادة الاتصال.",
        "استبدل مستشعر الملف."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E3",
    "problemTitle": {
      "en": "System Abnormality",
      "fr": "Anomalie du système",
      "ar": "خلل في النظام"
    },
    "problemDescription": {
      "en": "General protection trip in the compressor control.",
      "fr": "Déclenchement de protection générale dans le contrôle du compresseur.",
      "ar": "رحلة الحماية العامة في التحكم بالضاغط."
    },
    "solutionSteps": {
      "en": [
        "Reset main breaker.",
        "Check IPM inverter limits."
      ],
      "fr": [
        "Réinitialisez le disjoncteur principal.",
        "Vérifiez les limites de l’onduleur IPM."
      ],
      "ar": [
        "إعادة ضبط الكسارة الرئيسية.",
        "تحقق من حدود عاكس IPM."
      ]
    },
    "category": "System Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Compressor Fault",
      "fr": "Panne du compresseur",
      "ar": "خطأ الضاغط"
    },
    "problemDescription": {
      "en": "Compressor fails to start or draws high amps.",
      "fr": "Le compresseur ne démarre pas ou consomme des ampères élevés.",
      "ar": "فشل الضاغط في البدء أو يسحب أمبيرات عالية."
    },
    "solutionSteps": {
      "en": [
        "Check compressor windings.",
        "Replace inverter board."
      ],
      "fr": [
        "Vérifiez les enroulements du compresseur.",
        "Remplacez la carte onduleur."
      ],
      "ar": [
        "تحقق من اللفات الضاغط.",
        "استبدال لوحة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Low Voltage Protection",
      "fr": "Protection basse tension",
      "ar": "حماية الجهد المنخفض"
    },
    "problemDescription": {
      "en": "Incoming utility power dropped below safety limits.",
      "fr": "La puissance électrique entrante est tombée en dessous des limites de sécurité.",
      "ar": "انخفضت طاقة المرافق الواردة إلى ما دون حدود السلامة."
    },
    "solutionSteps": {
      "en": [
        "Check main panel voltage.",
        "Install voltage stabilizer."
      ],
      "fr": [
        "Vérifiez la tension du panneau principal.",
        "Installez un stabilisateur de tension."
      ],
      "ar": [
        "تحقق من جهد اللوحة الرئيسية.",
        "تثبيت مثبت الجهد."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Whirlpool",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Loss of signal between indoor and outdoor sections.",
      "fr": "Perte de signal entre les sections intérieures et extérieures.",
      "ar": "فقدان الإشارة بين الأقسام الداخلية والخارجية."
    },
    "solutionSteps": {
      "en": [
        "Inspect 3-core communication wire.",
        "Re-terminate connections."
      ],
      "fr": [
        "Inspectez le fil de communication à 3 conducteurs.",
        "Rebranchez les connexions."
      ],
      "ar": [
        "فحص سلك الاتصال ثلاثي النواة.",
        "إعادة إنهاء الاتصالات."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Whirlpool",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Outdoor Temp Sensor Error",
      "fr": "Erreur du capteur de température extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الخارجية"
    },
    "problemDescription": {
      "en": "Outdoor ambient air sensor failure.",
      "fr": "Panne du capteur d’air ambiant extérieur.",
      "ar": "فشل مستشعر الهواء المحيط الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Check for sensor damage.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez si le capteur est endommagé.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من تلف المستشعر.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Whirlpool",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Outdoor Pipe Temp Sensor Error",
      "fr": "Erreur du capteur de température du tuyau extérieur",
      "ar": "خطأ في مستشعر درجة حرارة الأنبوب الخارجي"
    },
    "problemDescription": {
      "en": "Outdoor coil thermistor failure.",
      "fr": "Défaillance de la thermistance de la bobine extérieure.",
      "ar": "فشل الثرمستور في الملف الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Replace external pipe sensor."
      ],
      "fr": [
        "Remplacez le capteur de tuyau externe."
      ],
      "ar": [
        "استبدل مستشعر الأنابيب الخارجي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Whirlpool",
    "errorCode": "F3",
    "problemTitle": {
      "en": "Discharge Temp Sensor Error",
      "fr": "Erreur du capteur de température de décharge",
      "ar": "خطأ في مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge line thermistor failure.",
      "fr": "Défaillance de la thermistance de la conduite de refoulement du compresseur.",
      "ar": "فشل الثرمستور في خط تفريغ الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Make sure sensor is firmly attached.",
        "Replace."
      ],
      "fr": [
        "Assurez-vous que le capteur est fermement fixé.",
        "Remplacer."
      ],
      "ar": [
        "تأكد من توصيل المستشعر بإحكام.",
        "يستبدل."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Whirlpool",
    "errorCode": "F4",
    "problemTitle": {
      "en": "EEPROM Error",
      "fr": "Erreur EEPROM",
      "ar": "خطأ إيبروم"
    },
    "problemDescription": {
      "en": "Parameter loss on outdoor control board.",
      "fr": "Perte de paramètres sur le tableau de commande extérieur.",
      "ar": "فقدان المعلمة على لوحة التحكم الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Reset power.",
        "Replace outdoor main board."
      ],
      "fr": [
        "Réinitialisez l’alimentation.",
        "Remplacez la carte principale extérieure."
      ],
      "ar": [
        "إعادة ضبط الطاقة.",
        "استبدال اللوحة الرئيسية الخارجية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "Ed",
    "problemTitle": {
      "en": "Compressor Phase Reverse",
      "fr": "Inversion de phase du compresseur",
      "ar": "عكس مرحلة الضاغط"
    },
    "problemDescription": {
      "en": "3-phase power is connected incorrectly.",
      "fr": "L’alimentation triphasée est mal connectée.",
      "ar": "تم توصيل الطاقة ثلاثية الطور بشكل غير صحيح."
    },
    "solutionSteps": {
      "en": [
        "Swap any two of the three main power legs."
      ],
      "fr": [
        "Échangez deux des trois pattes motrices principales."
      ],
      "ar": [
        "قم بتبديل أي اثنين من أرجل القوة الرئيسية الثلاثة."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E1",
    "problemTitle": {
      "en": "High Pressure Protection",
      "fr": "Protection haute pression",
      "ar": "حماية الضغط العالي"
    },
    "problemDescription": {
      "en": "System pressure is too high.",
      "fr": "La pression du système est trop élevée.",
      "ar": "ضغط النظام مرتفع جدًا."
    },
    "solutionSteps": {
      "en": [
        "Clean condenser coil.",
        "Ensure fan runs."
      ],
      "fr": [
        "Nettoyer le serpentin du condenseur.",
        "Assurez-vous que le ventilateur fonctionne."
      ],
      "ar": [
        "تنظيف ملف المكثف.",
        "التأكد من تشغيل المروحة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Anti-Freezing Protection",
      "fr": "Protection antigel",
      "ar": "الحماية ضد التجمد"
    },
    "problemDescription": {
      "en": "Indoor heat exchanger freezing.",
      "fr": "Gel de l’échangeur de chaleur intérieur.",
      "ar": "تجميد المبادل الحراري الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check air filter.",
        "Ensure blower speed is adequate."
      ],
      "fr": [
        "Vérifiez le filtre à air.",
        "Assurez-vous que la vitesse du ventilateur est adéquate."
      ],
      "ar": [
        "فحص فلتر الهواء.",
        "تأكد من أن سرعة المنفاخ كافية."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Bosch",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Low Pressure Protection",
      "fr": "Protection basse pression",
      "ar": "حماية الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Refrigerant shortage or leak detected.",
      "fr": "Manque ou fuite de réfrigérant détectée.",
      "ar": "تم اكتشاف نقص أو تسرب في سائل التبريد."
    },
    "solutionSteps": {
      "en": [
        "Leak test system.",
        "Refrigerant recharge."
      ],
      "fr": [
        "Système de test de fuite.",
        "Recharge de réfrigérant."
      ],
      "ar": [
        "نظام اختبار التسرب.",
        "إعادة شحن المبردات."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E4",
    "problemTitle": {
      "en": "High Discharge Temp Protection",
      "fr": "Protection contre les températures de décharge élevées",
      "ar": "حماية درجة حرارة التفريغ العالية"
    },
    "problemDescription": {
      "en": "Compressor overheating.",
      "fr": "Surchauffe du compresseur.",
      "ar": "ارتفاع درجة حرارة الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check for low charge.",
        "Inspect EEV."
      ],
      "fr": [
        "Vérifiez la charge faible.",
        "Inspectez l’EEV."
      ],
      "ar": [
        "تحقق من انخفاض الشحن.",
        "فحص EEV."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Overcurrent Protection",
      "fr": "Protection contre les surintensités",
      "ar": "حماية التيار الزائد"
    },
    "problemDescription": {
      "en": "Compressor pulling excessively high amps.",
      "fr": "Le compresseur tire des ampères excessivement élevés.",
      "ar": "يقوم الضاغط بسحب أمبيرات عالية جدًا."
    },
    "solutionSteps": {
      "en": [
        "Megger test compressor.",
        "Replace IPM module."
      ],
      "fr": [
        "Compresseur d'essai Megger.",
        "Remplacez le module IPM."
      ],
      "ar": [
        "ضاغط اختبار ميجار.",
        "استبدال وحدة IPM."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Communication Fault",
      "fr": "Défaut de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Indoor and outdoor boards failed handshake.",
      "fr": "Les conseils d’administration intérieurs et extérieurs n’ont pas réussi à établir une poignée de main.",
      "ar": "فشل المجالس الداخلية والخارجية في المصافحة."
    },
    "solutionSteps": {
      "en": [
        "Verify communication wiring.",
        "Replace PCB."
      ],
      "fr": [
        "Vérifiez le câblage de communication.",
        "Remplacez le PCB."
      ],
      "ar": [
        "التحقق من أسلاك الاتصالات.",
        "استبدال ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Mode Conflict",
      "fr": "Conflit de modes",
      "ar": "صراع الوضع"
    },
    "problemDescription": {
      "en": "Opposing modes set on multi-split indoor units.",
      "fr": "Modes opposés définis sur les unités intérieures multi-split.",
      "ar": "تم ضبط الأوضاع المتعارضة على الوحدات الداخلية متعددة الانقسام."
    },
    "solutionSteps": {
      "en": [
        "Set all zones to the same mode (heat/cool)."
      ],
      "fr": [
        "Réglez toutes les zones sur le même mode (chauffage/refroidissement)."
      ],
      "ar": [
        "اضبط جميع المناطق على نفس الوضع (حرارة/تبريد)."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Bosch",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Indoor Fan Motor Fault",
      "fr": "Défaut du moteur du ventilateur intérieur",
      "ar": "عطل في محرك المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Loss of fan speed control.",
      "fr": "Perte de contrôle de la vitesse du ventilateur.",
      "ar": "فقدان التحكم في سرعة المروحة."
    },
    "solutionSteps": {
      "en": [
        "Clear debris from blower.",
        "Replace indoor motor."
      ],
      "fr": [
        "Retirez les débris du ventilateur.",
        "Remplacez le moteur intérieur."
      ],
      "ar": [
        "إزالة الحطام من المنفاخ.",
        "استبدال المحرك الداخلي."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Bosch",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Water Full Protection",
      "fr": "Protection complète de l'eau",
      "ar": "حماية كاملة للمياه"
    },
    "problemDescription": {
      "en": "Drain pan overflow float switch active.",
      "fr": "Interrupteur à flotteur de trop-plein du bac de récupération actif.",
      "ar": "مفتاح تعويم الفائض في وعاء الصرف نشط."
    },
    "solutionSteps": {
      "en": [
        "Unclog drain lines.",
        "Test drain pump."
      ],
      "fr": [
        "Débouchez les conduites d’évacuation.",
        "Testez la pompe de vidange."
      ],
      "ar": [
        "فتح خطوط الصرف.",
        "اختبار مضخة التصريف."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Sharp",
    "errorCode": "E0",
    "problemTitle": {
      "en": "Water Pump Error",
      "fr": "Erreur de pompe à eau",
      "ar": "خطأ في مضخة المياه"
    },
    "problemDescription": {
      "en": "Condensate pump malfunction or blockage.",
      "fr": "Dysfonctionnement ou blocage de la pompe à condensats.",
      "ar": "عطل أو انسداد في مضخة المكثفات."
    },
    "solutionSteps": {
      "en": [
        "Clear drain blockages.",
        "Replace drain pump."
      ],
      "fr": [
        "Éliminez les obstructions des canalisations.",
        "Remplacez la pompe de vidange."
      ],
      "ar": [
        "إزالة انسدادات التصريف.",
        "استبدل مضخة التصريف."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Sharp",
    "errorCode": "E1",
    "problemTitle": {
      "en": "High Pressure Anomaly",
      "fr": "Anomalie de haute pression",
      "ar": "شذوذ الضغط العالي"
    },
    "problemDescription": {
      "en": "Abnormal high side refrigerant pressure.",
      "fr": "Pression anormalement élevée du réfrigérant.",
      "ar": "ارتفاع ضغط سائل التبريد الجانبي بشكل غير طبيعي."
    },
    "solutionSteps": {
      "en": [
        "Wash condenser.",
        "Check outdoor fan."
      ],
      "fr": [
        "Laver le condenseur.",
        "Vérifiez le ventilateur extérieur."
      ],
      "ar": [
        "غسل المكثف.",
        "تحقق من المروحة الخارجية."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Low Pressure Anomaly",
      "fr": "Anomalie de basse pression",
      "ar": "شذوذ الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Low side refrigerant pressure trip.",
      "fr": "Déclenchement de pression de réfrigérant côté basse.",
      "ar": "رحلة ضغط التبريد الجانبي المنخفض."
    },
    "solutionSteps": {
      "en": [
        "Find refrigerant leak.",
        "Vacuum and recharge."
      ],
      "fr": [
        "Trouvez une fuite de réfrigérant.",
        "Passez l'aspirateur et rechargez."
      ],
      "ar": [
        "العثور على تسرب المبردات.",
        "فراغ وإعادة الشحن."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Compressor Overload",
      "fr": "Surcharge du compresseur",
      "ar": "الزائد للضاغط"
    },
    "problemDescription": {
      "en": "Compressor overload protector tripped.",
      "fr": "Le protecteur de surcharge du compresseur s'est déclenché.",
      "ar": "تعثر واقي الحمل الزائد للضاغط."
    },
    "solutionSteps": {
      "en": [
        "Check capacitors.",
        "Cool compressor down."
      ],
      "fr": [
        "Vérifiez les condensateurs.",
        "Refroidissez le compresseur."
      ],
      "ar": [
        "فحص المكثفات.",
        "ضاغط بارد إلى أسفل."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Fan Motor Overload",
      "fr": "Surcharge du moteur du ventilateur",
      "ar": "الحمل الزائد لمحرك المروحة"
    },
    "problemDescription": {
      "en": "Fan motor drawing abnormal current.",
      "fr": "Le moteur du ventilateur consomme un courant anormal.",
      "ar": "محرك المروحة يسحب تيارًا غير طبيعي."
    },
    "solutionSteps": {
      "en": [
        "Free fan blade.",
        "Replace motor."
      ],
      "fr": [
        "Pale de ventilateur gratuite.",
        "Remplacez le moteur."
      ],
      "ar": [
        "شفرة المروحة مجانية.",
        "استبدل المحرك."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Loss of serial signals between boards.",
      "fr": "Perte de signaux série entre les cartes.",
      "ar": "فقدان الإشارات التسلسلية بين اللوحات."
    },
    "solutionSteps": {
      "en": [
        "Check connecting cables.",
        "Replace control board."
      ],
      "fr": [
        "Vérifiez les câbles de connexion.",
        "Remplacez le tableau de commande."
      ],
      "ar": [
        "تحقق من توصيل الكابلات.",
        "استبدال لوحة التحكم."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Indoor Sensor Error",
      "fr": "Erreur du capteur intérieur",
      "ar": "خطأ في الاستشعار الداخلي"
    },
    "problemDescription": {
      "en": "Room or coil temp sensor fault.",
      "fr": "Défaut du capteur de température de la pièce ou du serpentin.",
      "ar": "خطأ في مستشعر درجة حرارة الغرفة أو الملف."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor thermistor assembly."
      ],
      "fr": [
        "Remplacez l’ensemble de thermistance intérieure."
      ],
      "ar": [
        "استبدل مجموعة الثرمستور الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Sharp",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Discharge Temp Anomaly",
      "fr": "Anomalie de température de décharge",
      "ar": "شذوذ درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor discharge line is too hot.",
      "fr": "La conduite de refoulement du compresseur est trop chaude.",
      "ar": "خط تفريغ الضاغط ساخن جدًا."
    },
    "solutionSteps": {
      "en": [
        "Investigate refrigerant level.",
        "Check expansion valve operation."
      ],
      "fr": [
        "Vérifiez le niveau de réfrigérant.",
        "Vérifier le fonctionnement du détendeur."
      ],
      "ar": [
        "التحقيق في مستوى المبرد.",
        "تحقق من تشغيل صمام التمدد."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Sharp",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Outdoor Temp Sensor Error",
      "fr": "Erreur du capteur de température extérieure",
      "ar": "خطأ في مستشعر درجة الحرارة الخارجية"
    },
    "problemDescription": {
      "en": "Ambient outside sensor reads open or shorted.",
      "fr": "Le capteur ambiant extérieur indique ouvert ou court-circuité.",
      "ar": "يقرأ المستشعر الخارجي المحيط مفتوحًا أو قصيرًا."
    },
    "solutionSteps": {
      "en": [
        "Replace ambient thermistor."
      ],
      "fr": [
        "Remplacez la thermistance ambiante."
      ],
      "ar": [
        "استبدال الثرمستور المحيط."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Sharp",
    "errorCode": "F2",
    "problemTitle": {
      "en": "Heat Exchanger Sensor Error",
      "fr": "Erreur du capteur de l'échangeur de chaleur",
      "ar": "خطأ في مستشعر المبادل الحراري"
    },
    "problemDescription": {
      "en": "Outdoor condenser coil sensor reads open or shorted.",
      "fr": "Le capteur du serpentin du condenseur extérieur indique une ouverture ou un court-circuit.",
      "ar": "مستشعر ملف المكثف الخارجي يقرأ مفتوحًا أو قصيرًا."
    },
    "solutionSteps": {
      "en": [
        "Check connection.",
        "Replace sensor harness."
      ],
      "fr": [
        "Vérifiez la connexion.",
        "Remplacez le faisceau du capteur."
      ],
      "ar": [
        "تحقق من الاتصال.",
        "استبدل مجموعة أجهزة الاستشعار."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "York",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Temp Sensor Fault",
      "fr": "Défaut du capteur de température ambiante",
      "ar": "خطأ في مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Indoor ambient sensor failure.",
      "fr": "Panne du capteur ambiant intérieur.",
      "ar": "فشل جهاز الاستشعار المحيطي الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Check wire harness.",
        "Replace sensor."
      ],
      "fr": [
        "Vérifiez le faisceau de câbles.",
        "Remplacez le capteur."
      ],
      "ar": [
        "تحقق من تسخير الأسلاك.",
        "استبدل المستشعر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "York",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Indoor Coil Sensor Fault",
      "fr": "Défaut du capteur de bobine intérieure",
      "ar": "خطأ في مستشعر الملف الداخلي"
    },
    "problemDescription": {
      "en": "Indoor heat exchanger sensor failure.",
      "fr": "Panne du capteur de l’échangeur de chaleur intérieur.",
      "ar": "فشل مستشعر المبادل الحراري الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Verify resistance.",
        "Replace indoor coil sensor."
      ],
      "fr": [
        "Vérifiez la résistance.",
        "Remplacez le capteur de la bobine intérieure."
      ],
      "ar": [
        "التحقق من المقاومة.",
        "استبدل مستشعر الملف الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "York",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Outdoor Coil Sensor Fault",
      "fr": "Défaut du capteur de bobine extérieure",
      "ar": "خطأ في مستشعر الملف الخارجي"
    },
    "problemDescription": {
      "en": "Condenser thermistor fault.",
      "fr": "Défaut de thermistance du condenseur.",
      "ar": "خطأ الثرمستور المكثف."
    },
    "solutionSteps": {
      "en": [
        "Check sensor mounting.",
        "Replace outdoor coil sensor."
      ],
      "fr": [
        "Vérifiez le montage du capteur.",
        "Remplacez le capteur du serpentin extérieur."
      ],
      "ar": [
        "تحقق من تركيب المستشعر.",
        "استبدل مستشعر الملف الخارجي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "York",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Compressor System Fault",
      "fr": "Défaut du système de compresseur",
      "ar": "خطأ في نظام الضاغط"
    },
    "problemDescription": {
      "en": "Inverter compressor drive error.",
      "fr": "Erreur d'entraînement du compresseur inverseur.",
      "ar": "خطأ في محرك الضاغط العاكس."
    },
    "solutionSteps": {
      "en": [
        "Check IPM.",
        "Replace inverter board."
      ],
      "fr": [
        "Vérifiez l'IPM.",
        "Remplacez la carte onduleur."
      ],
      "ar": [
        "تحقق من IPM.",
        "استبدال لوحة العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Model Error",
      "fr": "Erreur de modèle",
      "ar": "خطأ في النموذج"
    },
    "problemDescription": {
      "en": "EEPROM capacity setting mismatch.",
      "fr": "Incompatibilité des paramètres de capacité EEPROM.",
      "ar": "عدم تطابق إعدادات سعة EEPROM."
    },
    "solutionSteps": {
      "en": [
        "Configure DIP switches.",
        "Replace logic board."
      ],
      "fr": [
        "Configurez les commutateurs DIP.",
        "Remplacez la carte mère."
      ],
      "ar": [
        "تكوين مفاتيح DIP.",
        "استبدال لوحة المنطق."
      ]
    },
    "category": "Communication Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Indoor Fan Error",
      "fr": "Erreur du ventilateur intérieur",
      "ar": "خطأ في المروحة الداخلية"
    },
    "problemDescription": {
      "en": "Fan motor speed anomaly.",
      "fr": "Anomalie de vitesse du moteur du ventilateur.",
      "ar": "شذوذ في سرعة محرك المروحة."
    },
    "solutionSteps": {
      "en": [
        "Check blower wheel.",
        "Replace indoor fan motor."
      ],
      "fr": [
        "Vérifiez la roue du ventilateur.",
        "Remplacez le moteur du ventilateur intérieur."
      ],
      "ar": [
        "تحقق من عجلة المنفاخ.",
        "استبدل محرك المروحة الداخلي."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Indoor to outdoor signal fault.",
      "fr": "Défaut de signal intérieur vers extérieur.",
      "ar": "خطأ إشارة داخلي إلى خارجي."
    },
    "solutionSteps": {
      "en": [
        "Check comms wiring.",
        "Ensure stable power."
      ],
      "fr": [
        "Vérifiez le câblage des communications.",
        "Assurer une puissance stable."
      ],
      "ar": [
        "تحقق من أسلاك الاتصالات.",
        "ضمان قوة مستقرة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "E8",
    "problemTitle": {
      "en": "System High Pressure",
      "fr": "Système haute pression",
      "ar": "نظام الضغط العالي"
    },
    "problemDescription": {
      "en": "High pressure cut-out activated.",
      "fr": "Coupure haute pression activée.",
      "ar": "تم تفعيل قطع الضغط العالي."
    },
    "solutionSteps": {
      "en": [
        "Clean unit.",
        "Verify charge."
      ],
      "fr": [
        "Unité propre.",
        "Vérifiez les frais."
      ],
      "ar": [
        "وحدة نظيفة.",
        "التحقق من تهمة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Low Voltage",
      "fr": "Basse tension",
      "ar": "الجهد المنخفض"
    },
    "problemDescription": {
      "en": "Input power voltage sag.",
      "fr": "Affaissement de la tension d’entrée.",
      "ar": "تبلد جهد الطاقة المدخلة."
    },
    "solutionSteps": {
      "en": [
        "Check breaker.",
        "Install voltage monitor."
      ],
      "fr": [
        "Vérifiez le disjoncteur.",
        "Installez un moniteur de tension."
      ],
      "ar": [
        "تحقق من الكسارة.",
        "تثبيت جهاز مراقبة الجهد."
      ]
    },
    "category": "Power Faults",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "York",
    "errorCode": "EE",
    "problemTitle": {
      "en": "EEPROM Error",
      "fr": "Erreur EEPROM",
      "ar": "خطأ إيبروم"
    },
    "problemDescription": {
      "en": "Main board memory chip failure.",
      "fr": "Défaillance de la puce mémoire de la carte principale.",
      "ar": "عطل في شريحة ذاكرة اللوحة الرئيسية."
    },
    "solutionSteps": {
      "en": [
        "Replace main printed circuit board."
      ],
      "fr": [
        "Remplacez la carte de circuit imprimé principale."
      ],
      "ar": [
        "استبدال لوحة الدوائر المطبوعة الرئيسية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Lennox",
    "errorCode": "E1",
    "problemTitle": {
      "en": "Room Temp Sensor Failure",
      "fr": "Panne du capteur de température ambiante",
      "ar": "فشل مستشعر درجة حرارة الغرفة"
    },
    "problemDescription": {
      "en": "Ambient air sensor disconnected.",
      "fr": "Capteur d'air ambiant débranché.",
      "ar": "تم فصل مستشعر الهواء المحيط."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor sensor component."
      ],
      "fr": [
        "Remplacez le composant du capteur intérieur."
      ],
      "ar": [
        "استبدل مكون المستشعر الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Lennox",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Evaporator Temp Sensor Failure",
      "fr": "Défaillance du capteur de température de l'évaporateur",
      "ar": "فشل مستشعر درجة حرارة المبخر"
    },
    "problemDescription": {
      "en": "Indoor coil sensor disconnected.",
      "fr": "Capteur de bobine intérieure déconnecté.",
      "ar": "تم فصل مستشعر الملف الداخلي."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor coil thermistor."
      ],
      "fr": [
        "Remplacez la thermistance de la bobine intérieure."
      ],
      "ar": [
        "استبدال الثرمستور اللولبي الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Lennox",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Condenser Temp Sensor Failure",
      "fr": "Panne du capteur de température du condenseur",
      "ar": "فشل مستشعر درجة حرارة المكثف"
    },
    "problemDescription": {
      "en": "Outdoor coil sensor disconnected.",
      "fr": "Capteur de serpentin extérieur déconnecté.",
      "ar": "تم فصل مستشعر الملف الخارجي."
    },
    "solutionSteps": {
      "en": [
        "Replace outdoor coil thermistor."
      ],
      "fr": [
        "Remplacez la thermistance de la bobine extérieure."
      ],
      "ar": [
        "استبدال الثرمستور اللولبي الخارجي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Lennox",
    "errorCode": "E4",
    "problemTitle": {
      "en": "System High Pressure",
      "fr": "Système haute pression",
      "ar": "نظام الضغط العالي"
    },
    "problemDescription": {
      "en": "Refrigerant pressure above safe operating limits.",
      "fr": "Pression du réfrigérant supérieure aux limites de fonctionnement sûres.",
      "ar": "ضغط المبرد أعلى من حدود التشغيل الآمنة."
    },
    "solutionSteps": {
      "en": [
        "Clean heat exchangers.",
        "Recover excess refrigerant."
      ],
      "fr": [
        "Nettoyer les échangeurs de chaleur.",
        "Récupérez l’excédent de réfrigérant."
      ],
      "ar": [
        "مبادلات حرارية نظيفة.",
        "استعادة المبرد الزائد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Lennox",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Compressor Overcurrent",
      "fr": "Surintensité du compresseur",
      "ar": "التيار الزائد للضاغط"
    },
    "problemDescription": {
      "en": "Current drawn by compressor exceeded thresholds.",
      "fr": "Le courant consommé par le compresseur a dépassé les seuils.",
      "ar": "تجاوز التيار الذي يسحبه الضاغط العتبات."
    },
    "solutionSteps": {
      "en": [
        "Check compressor for shorts to ground.",
        "Replace inverter driver."
      ],
      "fr": [
        "Vérifiez le compresseur pour déceler tout court-circuit à la masse.",
        "Remplacez le pilote de l'onduleur."
      ],
      "ar": [
        "تحقق من الضاغط بحثًا عن الشورت على الأرض.",
        "استبدال سائق العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Lennox",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Communication Error",
      "fr": "Erreur de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "No signals traveling between indoor/outdoor boards.",
      "fr": "Aucun signal ne circule entre les cartes intérieures/extérieures.",
      "ar": "لا توجد إشارات تنتقل بين اللوحات الداخلية/الخارجية."
    },
    "solutionSteps": {
      "en": [
        "Check inter-connecting cable.",
        "Replace active control board."
      ],
      "fr": [
        "Vérifiez le câble d'interconnexion.",
        "Remplacez la carte de commande active."
      ],
      "ar": [
        "تحقق من كابل التوصيل البيني.",
        "استبدال لوحة التحكم النشطة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Lennox",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Outdoor Ambient Sensor",
      "fr": "Capteur d'ambiance extérieure",
      "ar": "مستشعر محيط خارجي"
    },
    "problemDescription": {
      "en": "Outdoor air temperature sensor is down.",
      "fr": "Le capteur de température de l’air extérieur est en panne.",
      "ar": "مستشعر درجة حرارة الهواء الخارجي معطل."
    },
    "solutionSteps": {
      "en": [
        "Inspect sensor harness.",
        "Replace part."
      ],
      "fr": [
        "Inspectez le faisceau du capteur.",
        "Remplacez la pièce."
      ],
      "ar": [
        "فحص تسخير الاستشعار.",
        "استبدال الجزء."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Lennox",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Discharge Temp Sensor",
      "fr": "Capteur de température de décharge",
      "ar": "مستشعر درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Discharge piping sensor open or shorted.",
      "fr": "Capteur de tuyauterie de refoulement ouvert ou en court-circuit.",
      "ar": "مستشعر أنابيب التفريغ مفتوح أو قصير."
    },
    "solutionSteps": {
      "en": [
        "Ensure proper thermal connection to pipe.",
        "Substitute sensor."
      ],
      "fr": [
        "Assurer une bonne connexion thermique au tuyau.",
        "Remplacez le capteur."
      ],
      "ar": [
        "ضمان التوصيل الحراري المناسب للأنابيب.",
        "مستشعر بديل."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Lennox",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Inverter Module Protection",
      "fr": "Protection du module onduleur",
      "ar": "حماية وحدة العاكس"
    },
    "problemDescription": {
      "en": "High heat or overcurrent on logic board power stage.",
      "fr": "Chaleur élevée ou surintensité sur l’étage de puissance de la carte mère.",
      "ar": "حرارة عالية أو تيار زائد على مرحلة طاقة لوحة المنطق."
    },
    "solutionSteps": {
      "en": [
        "Verify compressor starts correctly.",
        "Replace IPM module."
      ],
      "fr": [
        "Vérifiez que le compresseur démarre correctement.",
        "Remplacez le module IPM."
      ],
      "ar": [
        "تحقق من بدء تشغيل الضاغط بشكل صحيح.",
        "استبدال وحدة IPM."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Lennox",
    "errorCode": "E0",
    "problemTitle": {
      "en": "EEPROM Parameter Error",
      "fr": "Erreur de paramètre EEPROM",
      "ar": "خطأ في معلمة EEPROM"
    },
    "problemDescription": {
      "en": "Invalid configuration data on control board chip.",
      "fr": "Données de configuration invalides sur la puce de la carte de commande.",
      "ar": "بيانات التكوين غير صالحة على شريحة لوحة التحكم."
    },
    "solutionSteps": {
      "en": [
        "Restart power.",
        "Replace PCB."
      ],
      "fr": [
        "Redémarrez le courant.",
        "Remplacez le PCB."
      ],
      "ar": [
        "أعد تشغيل الطاقة.",
        "استبدال ثنائي الفينيل متعدد الكلور."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E1",
    "problemTitle": {
      "en": "High Pressure Protection",
      "fr": "Protection haute pression",
      "ar": "حماية الضغط العالي"
    },
    "problemDescription": {
      "en": "Compressor forced off by high pressure cutout.",
      "fr": "Compresseur forcé à l'arrêt par coupure haute pression.",
      "ar": "تم طرد الضاغط بسبب انقطاع الضغط العالي."
    },
    "solutionSteps": {
      "en": [
        "Check fan airflow.",
        "Check if condenser is blocked."
      ],
      "fr": [
        "Vérifiez le débit d’air du ventilateur.",
        "Vérifiez si le condenseur est bloqué."
      ],
      "ar": [
        "تحقق من تدفق هواء المروحة.",
        "تحقق مما إذا كان المكثف مسدودًا."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Freeze Protection",
      "fr": "Protection contre le gel",
      "ar": "الحماية من التجميد"
    },
    "problemDescription": {
      "en": "Indoor coil temperature dropping below freezing.",
      "fr": "La température du serpentin intérieur descend en dessous de zéro.",
      "ar": "انخفاض درجة حرارة الملف الداخلي إلى ما دون درجة التجمد."
    },
    "solutionSteps": {
      "en": [
        "Check filter.",
        "Verify blower functions well."
      ],
      "fr": [
        "Vérifiez le filtre.",
        "Vérifiez bien le fonctionnement du ventilateur."
      ],
      "ar": [
        "تحقق من الفلتر.",
        "التحقق من عمل المنفاخ بشكل جيد."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Trane",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Low Pressure Protection",
      "fr": "Protection basse pression",
      "ar": "حماية الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Refrigerant charge lost or exceptionally cold outside.",
      "fr": "Charge de réfrigérant perdue ou température extérieure exceptionnellement froide.",
      "ar": "فقدان شحنة غاز التبريد أو البرودة الشديدة في الخارج."
    },
    "solutionSteps": {
      "en": [
        "Check for gas leaks.",
        "Regas system."
      ],
      "fr": [
        "Vérifiez les fuites de gaz.",
        "Système de regazage."
      ],
      "ar": [
        "التحقق من وجود تسربات الغاز.",
        "نظام ريجاس."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Discharge Temp Protection",
      "fr": "Protection contre la température de décharge",
      "ar": "حماية درجة حرارة التفريغ"
    },
    "problemDescription": {
      "en": "Compressor dome is overheating.",
      "fr": "Le dôme du compresseur surchauffe.",
      "ar": "ارتفاع درجة حرارة قبة الضاغط."
    },
    "solutionSteps": {
      "en": [
        "Look for refrigerant restriction.",
        "Check TXV / EEV."
      ],
      "fr": [
        "Recherchez les restrictions de réfrigérant.",
        "Vérifiez TXV/EEV."
      ],
      "ar": [
        "ابحث عن تقييد المبردات.",
        "تحقق من TXV / EEV."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Overcurrent Protection",
      "fr": "Protection contre les surintensités",
      "ar": "حماية التيار الزائد"
    },
    "problemDescription": {
      "en": "System drawing maximum allowable AC current.",
      "fr": "Le système consomme le courant alternatif maximum autorisé.",
      "ar": "يسحب النظام الحد الأقصى المسموح به لتيار التيار المتردد."
    },
    "solutionSteps": {
      "en": [
        "Clean outdoor unit.",
        "Megger compressor windings."
      ],
      "fr": [
        "Nettoyer l’unité extérieure.",
        "Enroulements du compresseur Megger."
      ],
      "ar": [
        "وحدة خارجية نظيفة.",
        "اللفات ضاغط ميجار."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Comms Error",
      "fr": "Erreur de communication",
      "ar": "خطأ بالاتصالات"
    },
    "problemDescription": {
      "en": "Indoor vs Outdoor communication broken.",
      "fr": "Communication intérieure/extérieure interrompue.",
      "ar": "الاتصالات الداخلية والخارجية مكسورة."
    },
    "solutionSteps": {
      "en": [
        "Verify wire continuity.",
        "Look for board blown varistors."
      ],
      "fr": [
        "Vérifier la continuité des fils.",
        "Recherchez des varistances soufflées par carte."
      ],
      "ar": [
        "التحقق من استمرارية الأسلاك.",
        "ابحث عن المكثفات المنفوخة على اللوحة."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Water Full Protection",
      "fr": "Protection complète de l'eau",
      "ar": "حماية كاملة للمياه"
    },
    "problemDescription": {
      "en": "Drain float switch detects full pan.",
      "fr": "L'interrupteur à flotteur de vidange détecte un bac plein.",
      "ar": "يكتشف مفتاح تعويم الصرف المقلاة الكاملة."
    },
    "solutionSteps": {
      "en": [
        "Blow out drain lines.",
        "Test condensate pump."
      ],
      "fr": [
        "Soufflez les conduites de vidange.",
        "Testez la pompe à condensats."
      ],
      "ar": [
        "تفجير خطوط الصرف.",
        "اختبار مضخة المكثفات."
      ]
    },
    "category": "Drainage Problems",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Trane",
    "errorCode": "E8",
    "problemTitle": {
      "en": "Fan Motor Error",
      "fr": "Erreur du moteur du ventilateur",
      "ar": "خطأ في محرك المروحة"
    },
    "problemDescription": {
      "en": "Fan rotation is obstructed or motor burned.",
      "fr": "La rotation du ventilateur est obstruée ou le moteur est brûlé.",
      "ar": "تم إعاقة دوران المروحة أو حرق المحرك."
    },
    "solutionSteps": {
      "en": [
        "Spin fan manually.",
        "Replace fan motor PCB."
      ],
      "fr": [
        "Faites tourner le ventilateur manuellement.",
        "Remplacez la carte électronique du moteur du ventilateur."
      ],
      "ar": [
        "تدور المروحة يدويا.",
        "استبدل محرك المروحة PCB."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Trane",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Sensor Fault",
      "fr": "Défaut du capteur",
      "ar": "خطأ الاستشعار"
    },
    "problemDescription": {
      "en": "Generic room/coil thermistor failure.",
      "fr": "Défaillance générique de la thermistance de la pièce/bobine.",
      "ar": "فشل الثرمستور في الغرفة/الملف بشكل عام."
    },
    "solutionSteps": {
      "en": [
        "Disconnect and check resistance.",
        "Replace affected sensor."
      ],
      "fr": [
        "Débranchez et vérifiez la résistance.",
        "Remplacez le capteur concerné."
      ],
      "ar": [
        "افصل وتحقق من المقاومة.",
        "استبدل المستشعر المتأثر."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Trane",
    "errorCode": "E0",
    "problemTitle": {
      "en": "EEPROM Error",
      "fr": "Erreur EEPROM",
      "ar": "خطأ إيبروم"
    },
    "problemDescription": {
      "en": "Loss of memory on intelligent controller.",
      "fr": "Perte de mémoire sur le contrôleur intelligent.",
      "ar": "فقدان الذاكرة على وحدة تحكم ذكية."
    },
    "solutionSteps": {
      "en": [
        "Perform master reset.",
        "Replace logic card."
      ],
      "fr": [
        "Effectuez une réinitialisation générale.",
        "Remplacez la carte logique."
      ],
      "ar": [
        "إجراء إعادة الضبط الرئيسية.",
        "استبدال البطاقة المنطقية."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E1",
    "problemTitle": {
      "en": "High Pressure Protection",
      "fr": "Protection haute pression",
      "ar": "حماية الضغط العالي"
    },
    "problemDescription": {
      "en": "System has shut down to avoid excessive pressure rupture.",
      "fr": "Le système s'est arrêté pour éviter une rupture de pression excessive.",
      "ar": "تم إيقاف تشغيل النظام لتجنب تمزق الضغط الزائد."
    },
    "solutionSteps": {
      "en": [
        "Clean condenser coil.",
        "Verify charge level.",
        "Check condenser fan motor."
      ],
      "fr": [
        "Nettoyer le serpentin du condenseur.",
        "Vérifiez le niveau de charge.",
        "Vérifiez le moteur du ventilateur du condenseur."
      ],
      "ar": [
        "تنظيف ملف المكثف.",
        "التحقق من مستوى الشحن.",
        "تحقق من محرك مروحة المكثف."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E2",
    "problemTitle": {
      "en": "Anti-Freeze Protection",
      "fr": "Protection antigel",
      "ar": "حماية ضد التجمد"
    },
    "problemDescription": {
      "en": "Indoor coil is turning to ice.",
      "fr": "Le serpentin intérieur se transforme en glace.",
      "ar": "الملف الداخلي يتحول إلى الجليد."
    },
    "solutionSteps": {
      "en": [
        "Clean the air filter.",
        "Ensure indoor fan spins rapidly."
      ],
      "fr": [
        "Nettoyez le filtre à air.",
        "Assurez-vous que le ventilateur intérieur tourne rapidement."
      ],
      "ar": [
        "قم بتنظيف فلتر الهواء.",
        "تأكد من دوران المروحة الداخلية بسرعة."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E3",
    "problemTitle": {
      "en": "Low Pressure Protection",
      "fr": "Protection basse pression",
      "ar": "حماية الضغط المنخفض"
    },
    "problemDescription": {
      "en": "Refrigerant loop is starved of pressure.",
      "fr": "La boucle de réfrigérant manque de pression.",
      "ar": "حلقة التبريد محرومة من الضغط."
    },
    "solutionSteps": {
      "en": [
        "Check flare nuts for oil/leaks.",
        "Top up refrigerant."
      ],
      "fr": [
        "Vérifiez les écrous évasés pour déceler de l'huile/des fuites.",
        "Faites l'appoint de réfrigérant."
      ],
      "ar": [
        "تحقق من صواميل الشعلة بحثًا عن الزيت/التسربات.",
        "قم بتعبئة سائل التبريد."
      ]
    },
    "category": "Refrigerant Issues",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E4",
    "problemTitle": {
      "en": "Compressor Discharge High Temp",
      "fr": "Décharge du compresseur haute température",
      "ar": "تفريغ الضاغط بدرجة حرارة عالية"
    },
    "problemDescription": {
      "en": "Compressor gas exit is too hot.",
      "fr": "La sortie de gaz du compresseur est trop chaude.",
      "ar": "خروج غاز الضاغط ساخن جدًا."
    },
    "solutionSteps": {
      "en": [
        "Check expansion valve functions.",
        "Check for undercharge."
      ],
      "fr": [
        "Vérifier le fonctionnement du détendeur.",
        "Vérifiez la sous-facturation."
      ],
      "ar": [
        "التحقق من وظائف صمام التوسع.",
        "التحقق من عدم وجود تهمة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E5",
    "problemTitle": {
      "en": "Overcurrent Protection",
      "fr": "Protection contre les surintensités",
      "ar": "حماية التيار الزائد"
    },
    "problemDescription": {
      "en": "Dangerous amperage level detected.",
      "fr": "Niveau d'ampérage dangereux détecté.",
      "ar": "تم اكتشاف مستوى تيار خطير."
    },
    "solutionSteps": {
      "en": [
        "Megger test compressor.",
        "Replace inverter PCB."
      ],
      "fr": [
        "Compresseur d'essai Megger.",
        "Remplacez la carte électronique de l'onduleur."
      ],
      "ar": [
        "ضاغط اختبار ميجار.",
        "استبدال ثنائي الفينيل متعدد الكلور العاكس."
      ]
    },
    "category": "Power Faults",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E6",
    "problemTitle": {
      "en": "Communication Fault",
      "fr": "Défaut de communication",
      "ar": "خطأ في الاتصال"
    },
    "problemDescription": {
      "en": "Main unit failed to detect sub unit via data wire.",
      "fr": "L'unité principale n'a pas réussi à détecter l'unité secondaire via le fil de données.",
      "ar": "فشلت الوحدة الرئيسية في اكتشاف الوحدة الفرعية عبر سلك البيانات."
    },
    "solutionSteps": {
      "en": [
        "Ensure correct wiring.",
        "Check connection tightness."
      ],
      "fr": [
        "Assurez-vous que le câblage est correct.",
        "Vérifier l'étanchéité des connexions."
      ],
      "ar": [
        "تأكد من الأسلاك الصحيحة.",
        "تحقق من ضيق الاتصال."
      ]
    },
    "category": "Communication Errors",
    "severity": "critical",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E7",
    "problemTitle": {
      "en": "Mode Conflict",
      "fr": "Conflit de modes",
      "ar": "صراع الوضع"
    },
    "problemDescription": {
      "en": "Conflict between multi-zone units (cooling vs heating).",
      "fr": "Conflit entre unités multizones (refroidissement vs chauffage).",
      "ar": "الصراع بين الوحدات متعددة المناطق (التبريد مقابل التدفئة)."
    },
    "solutionSteps": {
      "en": [
        "Match operational mode on all remotes."
      ],
      "fr": [
        "Faites correspondre le mode opérationnel sur toutes les télécommandes."
      ],
      "ar": [
        "مطابقة وضع التشغيل على جميع أجهزة التحكم عن بعد."
      ]
    },
    "category": "System Faults",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E8",
    "problemTitle": {
      "en": "High Temp Protection",
      "fr": "Protection haute température",
      "ar": "حماية من ارتفاع درجة الحرارة"
    },
    "problemDescription": {
      "en": "Compressor overloaded due to heat.",
      "fr": "Compresseur surchargé à cause de la chaleur.",
      "ar": "الضغط الزائد على الضاغط بسبب الحرارة."
    },
    "solutionSteps": {
      "en": [
        "Clean exterior condenser fins.",
        "Clear obstructions."
      ],
      "fr": [
        "Nettoyer les ailettes extérieures du condenseur.",
        "Éliminez les obstacles."
      ],
      "ar": [
        "تنظيف زعانف المكثف الخارجية.",
        "عوائق واضحة."
      ]
    },
    "category": "Sensor Errors",
    "severity": "moderate",
    "requiresTechnician": true
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "E9",
    "problemTitle": {
      "en": "Cold Air Prevention Protection",
      "fr": "Protection contre l'air froid",
      "ar": "حماية منع الهواء البارد"
    },
    "problemDescription": {
      "en": "Indoor fan won't spin in heating until coil is warm.",
      "fr": "Le ventilateur intérieur ne tournera pas pendant le chauffage tant que le serpentin n'est pas chaud.",
      "ar": "لن تدور المروحة الداخلية أثناء التسخين حتى يصبح الملف دافئًا."
    },
    "solutionSteps": {
      "en": [
        "Normal operation in heating mode. Just wait."
      ],
      "fr": [
        "Fonctionnement normal en mode chauffage. Attendez."
      ],
      "ar": [
        "التشغيل العادي في وضع التدفئة. فقط انتظر."
      ]
    },
    "category": "Fan/Motor Errors",
    "severity": "minor",
    "requiresTechnician": false
  },
  {
    "brand": "Cooper & Hunter",
    "errorCode": "F1",
    "problemTitle": {
      "en": "Room Sensor Open/Short",
      "fr": "Sonde d'ambiance ouverte/court-circuitée",
      "ar": "مستشعر الغرفة مفتوح/قصير"
    },
    "problemDescription": {
      "en": "Indoor ambient temp sensor failure.",
      "fr": "Défaillance du capteur de température ambiante intérieure.",
      "ar": "فشل جهاز استشعار درجة الحرارة المحيطة في الأماكن المغلقة."
    },
    "solutionSteps": {
      "en": [
        "Replace indoor sensor component."
      ],
      "fr": [
        "Remplacez le composant du capteur intérieur."
      ],
      "ar": [
        "استبدل مكون المستشعر الداخلي."
      ]
    },
    "category": "Sensor Errors",
    "severity": "minor",
    "requiresTechnician": false
  }
];

window.errorCodesData = errorCodesData;