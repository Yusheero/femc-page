/** Данные планов для блока PlansView */
type PlansData = {
  status: string;
  title: string;
  text: string;
  date: string;
};

export const plansData: PlansData[] = [
  {
    "title": "Собрать комьюнити FEMC",
    "text": "Стабильный онлайн и 100 активных участников чата",
    "status": "В процессе",
    "date": "В процессе"
  },
  {
    "title": "Финальная версия сайта",
    "text": "Привести сайт к финальному виду",
    "status": "В процессе",
    "date": "В процессе"
  },
  {
    "title": "Запустить Eventus",
    "text": "Запустить сервер Eventus и убедиться в его работоспособности",
    "status": "status",
    "date": "date"
  },
];