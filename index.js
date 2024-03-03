// Get elements by their IDs
const languageList = document.getElementById("languageList");
const englishOption = document.getElementById("english");
const spanishOption = document.getElementById("spanish");
const frenchOption = document.getElementById("french");
const hindiOption = document.getElementById("hindi");

// Example content in different languages
const content = {
  english: {
    header: "TechAdobe",
    subheader: "Your Tech Companion",
    heroText: "A home that knows how to help.",
    servicesText:
      "From smart lights to smart locks, TechAdobe will help you take care of tasks.",
    worksWithWeb: "Works with Web",
    worksWithAndroid: "Works with Android",
    lighting: "Lighting",
    appliances: "Appliances",
    fan: "Fan Control",
    security: "Security",
    additionalContentTitle: "Enhance Your Home",
    additionalContentText:
      "Upgrade your lifestyle with TechAdobe's cutting-edge technologies. Our solutions are designed to make your home smarter, safer, and more efficient.",
    footerText: "© TechAdobe 2024",
  },
  spanish: {
    header: "TechAdobe",
    subheader: "Tu Compañero Tecnológico",
    heroText: "Un hogar que sabe cómo ayudar.",
    servicesText:
      "Desde luces inteligentes hasta cerraduras inteligentes, TechAdobe te ayudará a ocuparte de las tareas.",
    worksWithWeb: "Funciona con Web",
    worksWithAndroid: "Funciona con Android",
    lighting: "Iluminación",
    appliances: "Electrodomésticos",
    fan: "Control de Ventilador",
    security: "Seguridad",
    additionalContentTitle: "Mejora tu Hogar",
    additionalContentText:
      "Mejora tu estilo de vida con las tecnologías de vanguardia de TechAdobe. Nuestras soluciones están diseñadas para hacer que tu hogar sea más inteligente, seguro y eficiente.",
    footerText: "© TechAdobe 2024",
  },
  french: {
    header: "TechAdobe",
    subheader: "Votre Compagnon Technologique",
    heroText: "Un foyer qui sait comment aider.",
    servicesText:
      "Des éclairages intelligents aux serrures intelligentes, TechAdobe vous aidera à prendre soin des tâches.",
    worksWithWeb: "Fonctionne avec le Web",
    worksWithAndroid: "Fonctionne avec Android",
    lighting: "Éclairage",
    appliances: "Appareils électroménagers",
    fan: "Contrôle du Ventilateur",
    security: "Sécurité",
    additionalContentTitle: "Améliorez votre Maison",
    additionalContentText:
      "Améliorez votre style de vie avec les technologies de pointe de TechAdobe. Nos solutions sont conçues pour rendre votre maison plus intelligente, plus sûre et plus efficace.",
    footerText: "© TechAdobe 2024",
  },
  hindi: {
    header: "टेकआडोबी",
    subheader: "आपका टेक संगी",
    heroText: "एक ऐसा घर जो मदद करने का तरीका जानता है।",
    servicesText:
      "स्मार्ट लाइट से स्मार्ट लॉक तक, टेकआडोबी आपको कार्यों का ध्यान रखने में मदद करेगा।",
    worksWithWeb: "वेब के साथ काम करता है",
    worksWithAndroid: "एंड्रॉयड के साथ काम करता है",
    lighting: "रोशनी",
    appliances: "उपकरण",
    fan: "फैन कंट्रोल",
    security: "सुरक्षा",
    additionalContentTitle: "अपने घर को बेहतर बनाएं",
    additionalContentText:
      "अपनी जीवनशैली को अपग्रेड करें टेकआडोबी की कटिंग-एज तकनीकों के साथ। हमारी समाधान से आपके घर को आपके जीवन को बुद्धिमत्ता, सुरक्षा, और अधिक दक्ष बनाने के लिए डिज़ाइन किया गया है।",
    footerText: "© टेकआडोबी 2024",
  },
};

// Set initial language (English)
let currentLanguage = "english";

// Function to update content based on language
function updateContent(language) {
  document.getElementById("header").textContent = content[language].header;
  document.getElementById("subheader").textContent =
    content[language].subheader;
  document.getElementById("hero-text").textContent = content[language].heroText;
  document.getElementById("services-text").textContent =
    content[language].servicesText;
  document.getElementById("works-with-web").textContent =
    content[language].worksWithWeb;
  document.getElementById("works-with-android").textContent =
    content[language].worksWithAndroid;
  document.getElementById("lighting").textContent = content[language].lighting;
  document.getElementById("appliances").textContent =
    content[language].appliances;
  document.getElementById("fan").textContent = content[language].fan;
  document.getElementById("security").textContent = content[language].security;
  document.getElementById("additional-content-title").textContent =
    content[language].additionalContentTitle;
  document.getElementById("additional-content-text").textContent =
    content[language].additionalContentText;
  document.getElementById("footer-text").textContent =
    content[language].footerText;
}

// Event listeners for language selection
englishOption.addEventListener("click", () => {
  currentLanguage = "english";
  updateContent(currentLanguage);
});

spanishOption.addEventListener("click", () => {
  currentLanguage = "spanish";
  updateContent(currentLanguage);
});

frenchOption.addEventListener("click", () => {
  currentLanguage = "french";
  updateContent(currentLanguage);
});

hindiOption.addEventListener("click", () => {
  currentLanguage = "hindi";
  updateContent(currentLanguage);
});

// Function to open APK
function openApk() {
  // Implement your APK opening logic here
  console.log("APK opened!");
  window.open("./Tech-Adobe.apk");
}

// Function to open URL
function openUrl() {
  // Implement your URL opening logic here
  window.open("https://dashboard-tech-adobe.netlify.app/", "");
  console.log("URL opened!");
}
