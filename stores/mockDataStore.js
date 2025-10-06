import { defineStore } from 'pinia';

const initialEvents = [
  {
    _id: 1,
    month: 'Январь',
    place: 'Домбай',
    date: '12 — 19 января 2025',
    isList: false,
    leader_name: 'Александр Погодин',
    leader_responsibilities: [
      'Организация трансфера и проживания',
      'Ежедневные тренировки на склоне',
      'Подбор экипировки для новичков'
    ],
    requirements_equipment: ['Лыжи', 'Шлем', 'Защита'],
    requirements_skills: 'Уверенный начинающий',
    cost_amount: 38000,
    cost_currency: 'RUB',
    cost_additional_services: 'Прокат оборудования по запросу',
    start_date: '2025-01-12'
  },
  {
    _id: 2,
    month: 'Февраль',
    place: 'Красная Поляна',
    date: '9 — 16 февраля 2025',
    isList: false,
    leader_name: 'Мария Орлова',
    leader_responsibilities: [
      'Разработка тренировочной программы',
      'Контроль безопасности на трассах',
      'Организация вечерних мероприятий'
    ],
    requirements_equipment: ['Лыжи', 'Маска', 'Перчатки'],
    requirements_skills: 'Средний уровень катания',
    cost_amount: 44500,
    cost_currency: 'RUB',
    cost_additional_services: 'Групповые занятия включены',
    start_date: '2025-02-09'
  },
  {
    _id: 3,
    month: 'Март',
    place: 'Шерегеш',
    date: '5 — 12 марта 2025',
    isList: false,
    leader_name: 'Дмитрий Соколов',
    leader_responsibilities: [
      'Обучение фрирайду',
      'Маршрутизация и навигация',
      'Фото- и видеосопровождение'
    ],
    requirements_equipment: ['Сноуборд', 'Шлем', 'Маска'],
    requirements_skills: 'Продвинутый уровень',
    cost_amount: 51200,
    cost_currency: 'RUB',
    cost_additional_services: 'Ски-пасс и проживание включены',
    start_date: '2025-03-05'
  }
];

const initialSkiCourses = [
  {
    id: 1,
    category: 'Лыжи',
    title: 'Интенсив для начинающих',
    image: '/img/ski-beginner.jpg',
    price: '35 000 ₽',
    description: 'Пятидневный курс с теорией и практикой для тех, кто ни разу не стоял на лыжах.',
    detailed:
      'Занятия в мини-группах по 4 человека, утренняя разминка, отработка базовой техники, первое катание на трассе.',
    showDetails: false
  },
  {
    id: 2,
    category: 'Лыжи',
    title: 'Улучшение техники',
    image: '/img/ski-progress.jpg',
    price: '41 500 ₽',
    description: 'Для тех, кто уверенно катается, но хочет прогрессировать и работать над скоростью.',
    detailed:
      'Сплит по уровням, анализ видео, обучение работе на жестком и мягком склоне, индивидуальная работа с инструктором.',
    showDetails: false
  },
  {
    id: 3,
    category: 'Лыжи',
    title: 'Семейный лагерь',
    image: '/img/ski-family.jpg',
    price: '65 000 ₽',
    description: 'Катание всей семьёй с детской программой и развлечениями после склонов.',
    detailed:
      'Детские инструкторы, отдельные трассы, анимация, групповое катание родителей, фото- и видеосъёмка.',
    showDetails: false
  }
];

const initialSnowboardCourses = [
  {
    id: 11,
    category: 'Сноуборд',
    title: 'Первые шаги на сноуборде',
    image: '/img/snb-start.jpg',
    price: '33 000 ₽',
    description: 'Обучение с нуля, постановка стойки, базовые техники спуска и поворотов.',
    detailed:
      'Разминка, подбор стойки, падения и безопасность, переход от скольжения к первым независимым спускам.',
    showDetails: false
  },
  {
    id: 12,
    category: 'Сноуборд',
    title: 'Парковый прогресс',
    image: '/img/snowboard_basic.jpg',
    price: '46 000 ₽',
    description: 'Работа в сноупарке: прыжки, боксы, правильная техника и контроль скорости.',
    detailed:
      'Подготовка к трамплинам, базовые и продвинутые трюки, отработка приземлений, работа с видео-анализом.',
    showDetails: false
  },
  {
    id: 13,
    category: 'Сноуборд',
    title: 'Backcountry-курс',
    image: '/img/snb-backcountry.jpg',
    price: '59 000 ₽',
    description: 'Фрирайд в малолюдных локациях, безопасность, работа с лавинным оборудованием.',
    detailed:
      'Лавинная безопасность, чтение рельефа, техника в целине, сопровождение гидов, катание вне трасс.',
    showDetails: false
  }
];

const initialMagazineItems = [
  {
    id: 21,
    category: 'Экипировка',
    title: 'Горные лыжи StartLine',
    image: '/img/snowboard_basic.jpg',
    price: '27 900 ₽',
    description: 'Легкие универсальные лыжи для уверенного прогресса на подготовленных склонах.',
    detailed:
      'Деревянный сердечник, усиление карбоном, устойчивость на высокой скорости, в комплекте с креплениями.',
    showDetails: false
  },
  {
    id: 22,
    category: 'Экипировка',
    title: 'Шлем NordSafe',
    image: '/img/snowboard_group15.jpg',
    price: '7 400 ₽',
    description: 'Лёгкий и тёплый шлем с регулировкой посадки и съёмными наушниками.',
    detailed:
      'Технология in-mold, сертификат безопасности EN1077, вентиляция, мягкая микрофлисовая подкладка.',
    showDetails: false
  },
  {
    id: 23,
    category: 'Аксессуары',
    title: 'Перчатки SnowGrip Pro',
    image: '/img/snowboard_individual2.jpg',
    price: '4 300 ₽',
    description: 'Водонепроницаемые перчатки с тёплой подкладкой и цепким покрытием ладоней.',
    detailed:
      'Мембрана 10к/10к, усиливающие вставки, фиксация на запястье, сенсорные вставки на пальцах.',
    showDetails: false
  }
];

const initialApplications = [
  {
    _id: 1001,
    name: 'Анна',
    phone: '79211234567',
    course: 'Интенсив для начинающих',
    date: '12.09.2024 10:30',
    source: 'order'
  },
  {
    _id: 1002,
    name: 'Максим',
    phone: '79214445566',
    course: 'Первые шаги на сноуборде',
    date: '25.09.2024 15:45',
    source: 'call'
  }
];

const splitAndTrim = (value) =>
  Array.isArray(value)
    ? value
    : String(value || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

const formatDateTime = () => {
  const now = new Date();
  return now
    .toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    .replace(',', '');
};

export const useMockDataStore = defineStore('mockData', {
  state: () => ({
    events: [...initialEvents],
    skiCourses: [...initialSkiCourses],
    snowboardCourses: [...initialSnowboardCourses],
    magazineItems: [...initialMagazineItems],
    applications: [...initialApplications]
  }),
  getters: {
    nearestEvent(state) {
      const today = new Date();
      const upcoming = state.events
        .map((event) => ({
          ...event,
          startDateObject: new Date(event.start_date)
        }))
        .filter((event) => event.startDateObject >= today)
        .sort((a, b) => a.startDateObject - b.startDateObject);

      return upcoming[0] || null;
    }
  },
  actions: {
    addEvent(payload) {
      const idCandidate = Number(payload._id);
      const generatedId =
        Number.isFinite(idCandidate) && idCandidate > 0
          ? idCandidate
          : Math.max(0, ...this.events.map((event) => Number(event._id) || 0)) + 1;

      this.events.push({
        _id: generatedId,
        month: payload.month || '',
        place: payload.place || '',
        date: payload.date || '',
        isList: Boolean(payload.isList),
        leader_name: payload.leader_name || '',
        leader_responsibilities: splitAndTrim(payload.leader_responsibilities),
        requirements_equipment: splitAndTrim(payload.requirements_equipment),
        requirements_skills: payload.requirements_skills || '',
        cost_amount: Number(payload.cost_amount) || 0,
        cost_currency: payload.cost_currency || 'RUB',
        cost_additional_services: payload.cost_additional_services || '',
        start_date: payload.start_date || new Date().toISOString().slice(0, 10)
      });
    },
    deleteEvent(id) {
      this.events = this.events.filter((event) => event._id !== id);
    },
    toggleEventDetails(id) {
      this.events = this.events.map((event) =>
        event._id === id ? { ...event, isList: !event.isList } : event
      );
    },
    toggleCourseDetails(collection, id) {
      if (!['skiCourses', 'snowboardCourses', 'magazineItems'].includes(collection)) {
        return;
      }

      this[collection] = this[collection].map((item) =>
        item.id === id ? { ...item, showDetails: !item.showDetails } : item
      );
    },
    registerApplication(payload) {
      const courseLabel =
        payload.course ||
        (payload.items && payload.items.length > 0
          ? payload.items.map((item) => item.title).join(', ')
          : 'Не указано');

      this.applications.unshift({
        _id: Date.now(),
        name: payload.name || 'Гость',
        phone: payload.phone || '',
        course: courseLabel,
        items: payload.items || [],
        source: payload.source || 'form',
        date: formatDateTime()
      });
    }
  }
});
