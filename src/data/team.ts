/** Данные планов для блока PlansView */
type TeamData = {
  title: string;
  text: string;
  skin: string;
  tag: string;
};

export const teamData: TeamData[] = [
  {
    "title": "Yusheero",
    "text": "Люди - это набор данных. Аденин, цитозин, гуанин и тимин. 4 символа, из них состоит алфавит человека. А мой из двух. Единица и ноль",
    "skin": new URL('../assets/images/textures/yusheero.png', import.meta.url).href,
    "tag": "Созидатель",
  },
  {
    "title": "Zondermainy",
    "text": "Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится",
    "skin": new URL('../assets/images/textures/zondermainy.png', import.meta.url).href,
    "tag": "Созидатель",
  },
  {
    "title": "Rinki",
    "text": "Моргенштерн на коннекте, Москва на коннекте, Скриптонит на коннекте, делаем биг рексы",
    "skin": new URL('../assets/images/textures/rinki.png', import.meta.url).href,
    "tag": "Якутский репер",
  },
  {
    "title": "Inkognito",
    "text": "0JIg0LrQvtC80LjRgdGP0LfQvdCw0YfQtdC90LjQtSDQuCDQvNCw0LPRgyDQv9GA0LjQutC+0LvRiyDQtNC10LvQsNC10YIg0LrQsNC60LjQvNGD0L3QsCDQvdC+INC30LDRgNC10LzQuNC90LA=",
    "skin": new URL('../assets/images/textures/nikitareptile.png', import.meta.url).href,
    "tag": "Рука закона",
  },
];