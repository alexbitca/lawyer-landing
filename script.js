/* ----------------- Mobile menu toggle ----------------- */
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/* ----------------- Dynamic year in footer ----------------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ----------------- Translation dictionary ----------------- */
const translations = {
  ro: {
    'brand-sub': 'AVOCAT',
    'nav-home': 'Acasă',
    'nav-about': 'Despre mine',
    'nav-services': 'Servicii',
    'nav-contact': 'Contact',
    'hero-title': 'Cabinetul Avocatului Ion Popescu',
    'hero-subtitle': 'Peste 25 de ani de experiență, dedicați apărării drepturilor dumneavoastră',
    'hero-cta': 'Solicită o consultație',
    'hero-stat-experience': 'Ani experiență',
    'hero-stat-cases': 'Cazuri',
    'hero-stat-private': 'Privat',
    'about-title': 'Despre mine',
    'about-text1':
      'Sunt <strong>Ion Popescu</strong>, avocat licențiat (Licența seria A nr. 1111 din 18 septembrie 2001), membru al Uniunii Avocaților din Moldova din 1998.<br />' +
      'De peste 25 de ani ofer <strong>asistență juridică calificată</strong>, bazată pe integritate, promptitudine și rezultate. N-am activat în organele de drept, ceea ce îmi permite să abordez fiecare caz fără stereotipuri și să mă concentrez exclusiv pe interesele clientului.',
    'about-quote': '„Reputația profesională se construiește prin fapte, nu prin publicitate.”',
    'about-card-member': 'MEMBRU UAM',
    'about-card-license': 'LICENȚA',
    'about-card-experience': 'ANI PRACTICĂ',
    'about-card-private': 'PRIVAT',
    'services-title': 'Servicii',
    'services-business-title': 'Asistență pentru <span>persoane juridice</span>',
    'services-business-list': [
      'Litigii fiscale',
      'Litigii contractuale',
      'Contencios administrativ',
      'Încasarea datoriilor',
      'Apărarea reputației profesionale',
      'Consultanță și asistență juridică în afaceri',
      'Litigii economice internaționale',
      'Litigii vamale',
    ],
    'services-individual-title': 'Asistență pentru <span>persoane fizice</span>',
    'services-individual-list': [
      'Litigii de asigurări',
      'Litigii de muncă (restabilirea în funcție, rezilierea CIM, salarizare, daune morale)',
      'Încasarea prejudiciului material și moral',
      'Litigii succesorale',
      'Litigii fiscale',
      'Drepturi de autor',
      'Imobiliare și proprietate',
      'Protecția consumatorului',
      'Litigii de familie',
      'Litigii locative',
      'Dobândirea cetățeniei',
      'Reprezentare la CEDO',
      'Cauze penale',
      'Apărarea onoarei și demnității',
      'Asistență în accidente rutiere',
    ],
    'contact-title': 'Contact',
    'contact-address-label': 'Adresă:',
    'contact-address': 'Bd. Decebal 11/A, Chișinău, Moldova',
    'contact-phonefax-label': 'Telefon/Fax:',
    'contact-mobile-label': 'Mobil:',
    'contact-form-title': 'Trimiteți-mi un mesaj',
    'form-name-label': 'Nume',
    'form-email-label': 'Email',
    'form-message-label': 'Mesaj',
    'form-submit': 'Trimite',
  },
  ru: {
    'brand-sub': 'АДВОКАТ',
    'nav-home': 'Главная',
    'nav-about': 'Обо мне',
    'nav-services': 'Услуги',
    'nav-contact': 'Контакты',
    'hero-title': 'Кабинет адвоката Иона Попеску',
    'hero-subtitle': 'Более 25 лет опыта, посвящённых защите ваших прав',
    'hero-cta': 'Запросить консультацию',
    'hero-stat-experience': 'Лет опыта',
    'hero-stat-cases': 'Дел',
    'hero-stat-private': 'Приватно',
    'about-title': 'Обо мне',
    'about-text1':
      'Я, <strong>Ион Попеску</strong>, лицензированный адвокат (лицензия серия A № 1111 от 18 сентября 2001 г.), член Союза Адвокатов Молдовы с 1998 года.<br />' +
      'Уже более 25 лет предоставляю <strong>квалифицированную юридическую помощь</strong>, основанную на честности, оперативности и результатах. Я не работал в правоохранительных органах, что позволяет мне рассматривать каждый случай без стереотипов и фокусироваться исключительно на интересах клиента.',
    'about-quote': '«Профессиональная репутация строится поступками, а не рекламой».',
    'about-card-member': 'ЧЛЕН СОЮЗА',
    'about-card-license': 'ЛИЦЕНЗИЯ',
    'about-card-experience': 'ЛЕТ ПРАКТИКИ',
    'about-card-private': 'ПРИВАТНО',
    'services-title': 'Услуги',
    'services-business-title': 'Правовая помощь <span>юридическим лицам</span>',
    'services-business-list': [
      'Налоговые споры',
      'Договорные споры',
      'Административные споры',
      'Взыскание долгов',
      'Защита деловой репутации',
      'Юридическое сопровождение бизнеса',
      'Международные экономические споры',
      'Таможенные споры',
    ],
    'services-individual-title': 'Правовая помощь <span>физическим лицам</span>',
    'services-individual-list': [
      'Споры по страховым правоотношениям',
      'Трудовые споры (восстановление в должности, расторжение ИТД, зарплата, моральный вред)',
      'Взыскание материального ущерба и компенсация морального вреда',
      'Наследственные споры',
      'Налоговые споры',
      'Защита авторских прав',
      'Недвижимость и имущественные отношения',
      'Защита прав потребителей',
      'Семейные споры',
      'Жилищные споры',
      'Получение гражданства',
      'Представительство в ЕСПЧ',
      'Уголовные дела',
      'Защита чести и достоинства',
      'Помощь при ДТП',
    ],
    'contact-title': 'Контакты',
    'contact-address-label': 'Адрес:',
    'contact-address': 'Bd. Decebal 11/A, Кишинёв, Молдова',
    'contact-phonefax-label': 'Телефон/Факс:',
    'contact-mobile-label': 'Моб.:',
    'contact-form-title': 'Напишите мне',
    'form-name-label': 'Имя',
    'form-email-label': 'Электронная почта',
    'form-message-label': 'Сообщение',
    'form-submit': 'Отправить',
  },
  en: {
    'brand-sub': 'LAWYER',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-contact': 'Contact',
    'hero-title': 'Ion Popescu Law Office',
    'hero-subtitle': 'Over 25 years of experience dedicated to defending your rights',
    'hero-cta': 'Request a consultation',
    'hero-stat-experience': 'Years experience',
    'hero-stat-cases': 'Cases',
    'hero-stat-private': 'Private',
    'about-title': 'About Me',
    'about-text1':
      'I am <strong>Ion Popescu</strong>, a licensed attorney (License Series A No. 1111, issued on September 18, 2001) and a member of the Moldovan Bar Association since 1998.<br />' +
      'For more than 25 years, I have provided <strong>qualified legal assistance</strong> based on integrity, prompt action, and measurable results. My career has been entirely in private practice, allowing me to tackle each case free of institutional stereotypes and focus solely on my clients’ interests.',
    'about-quote': '“Professional reputation is built on actions, not advertisements.”',
    'about-card-member': 'BAR MEMBER',
    'about-card-license': 'LICENSE',
    'about-card-experience': 'YEARS PRACTICE',
    'about-card-private': 'PRIVATE',
    'services-title': 'Services',
    'services-business-title': 'Legal assistance for <span>businesses</span>',
    'services-business-list': [
      'Tax disputes',
      'Contract disputes',
      'Administrative litigation',
      'Debt collection',
      'Protection of professional reputation',
      'Business legal consultancy and assistance',
      'International economic disputes',
      'Customs disputes',
    ],
    'services-individual-title': 'Legal assistance for <span>individuals</span>',
    'services-individual-list': [
      'Insurance disputes',
      'Employment disputes (reinstatement, termination, wage claims, moral damages)',
      'Recovery of material damages and moral compensation',
      'Inheritance disputes',
      'Tax disputes',
      'Intellectual property rights',
      'Real estate and property matters',
      'Consumer protection',
      'Family disputes',
      'Housing disputes',
      'Citizenship acquisition',
      'Representation before the European Court of Human Rights',
      'Criminal cases',
      'Protection of honor and dignity',
      'Assistance in road traffic accidents',
    ],
    'contact-title': 'Contact',
    'contact-address-label': 'Address:',
    'contact-address': 'Bd. Decebal 11/A, Chișinău, Moldova',
    'contact-phonefax-label': 'Phone/Fax:',
    'contact-mobile-label': 'Mobile:',
    'contact-form-title': 'Send me a message',
    'form-name-label': 'Name',
    'form-email-label': 'Email',
    'form-message-label': 'Message',
    'form-submit': 'Send',
  },
};

/* ----------------- Translation logic ----------------- */
const langButtons = document.querySelectorAll('.lang-btn');
const elements = document.querySelectorAll('[data-i18n]');

function updateContent(lang) {
  document.documentElement.lang = lang;
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (Array.isArray(value)) {
      el.innerHTML = value.map((item) => `<li>${item}</li>`).join('');
    } else if (value !== undefined) {
      el.innerHTML = value;
    }
  });
}

// default language
updateContent('ro');

// click on language button
langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    langButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    updateContent(btn.value);
  });
});