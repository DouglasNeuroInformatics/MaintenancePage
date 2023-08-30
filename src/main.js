import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageToggle = document.getElementById('language-toggle');

const eyebrow = document.getElementById('eyebrow');
const heading = document.getElementById('heading');
const message = document.getElementById('message');
const contact = document.getElementById('contact');

const applyTranslations = () => {
  eyebrow.innerHTML = i18next.t('eyebrow');
  heading.innerHTML = i18next.t('heading');
  message.innerHTML = i18next.t('message');
  contact.innerHTML = i18next.t('contact');

  if (i18next.resolvedLanguage === 'fr') {
    languageToggle.innerHTML = 'English';
  } else {
    languageToggle.innerHTML = 'Français';
  }
};

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          eyebrow: 'Temporarily Down for Maintenance',
          heading: "We'll Be Back Soon",
          message:
            'This website is currently undergoing scheduled maintenance to bring you an even better experience. Please try again in several minutes.',
          contact: 'Contact Support'
        }
      },
      fr: {
        translation: {
          eyebrow: 'Temporairement indisponible à cause de maintenance',
          heading: 'Nous reviendrons bientôt',
          message:
            "Ce site web fait actuellement l'objet d'une maintenance planifiée afin de vous offrir une expérience encore meilleure. Veuillez réessayer dans quelques minutes.",
          contact: 'Contactez-nous'
        }
      }
    }
  })
  .then(() => {
    applyTranslations();
  })
  .catch((err) => {
    console.error(err);
  });

languageToggle.addEventListener('click', () => {
  i18next.changeLanguage(i18next.resolvedLanguage === 'en' ? 'fr' : 'en', (err) => {
    if (err) {
      console.error(err);
    } else {
      applyTranslations();
    }
  });
});
