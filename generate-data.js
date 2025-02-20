const fs = require("fs");
const { faker } = require("@faker-js/faker");

// Количество материалов для генерации
const numberOfMaterials = 50;

// Генерация массива материалов
const materials = Array.from({ length: numberOfMaterials }, () => ({
  id: faker.string.uuid(), // Уникальный ID
  title: faker.lorem.words(3).replace(/\s+/g, " ").trim(), // Название материала (3 слова)
  content: generateContent(), // Содержимое материала
  category: faker.helpers.arrayElement([
    "React",
    "Hooks",
    "State",
    "Props",
    "Lifecycle",
    "Routing",
    "Forms",
  ]), // Категория
  createdAt: faker.date.recent().toISOString(), // Дата создания
}));

// Массив хуков React
const hooks = [
  {
    name: "useState",
    description: "Хук для управления состоянием в функциональных компонентах.",
    officialDocLink: "https://reactjs.org/docs/hooks-state.html",
  },
  {
    name: "useEffect",
    description:
      "Хук для выполнения побочных эффектов в функциональных компонентах.",
    officialDocLink: "https://reactjs.org/docs/hooks-effect.html",
  },
  {
    name: "useContext",
    description: "Хук для работы с контекстом React.",
    officialDocLink: "https://reactjs.org/docs/hooks-context.html",
  },
  {
    name: "useReducer",
    description:
      "Хук для управления сложным состоянием с использованием reducer.",
    officialDocLink: "https://reactjs.org/docs/hooks-reference.html#usereducer",
  },
  {
    name: "useCallback",
    description:
      "Хук для мемоизации функций, чтобы избежать их пересоздания при каждом рендере.",
    officialDocLink: "https://reactjs.org/docs/hooks-reference.html#usecallback",
  },
  {
    name: "useMemo",
    description:
      "Хук для кэширования значений, которые дорого вычисляются.",
    officialDocLink: "https://reactjs.org/docs/hooks-reference.html#usememo",
  },
  {
    name: "useRef",
    description:
      "Хук для создания постоянной ссылки на DOM-элемент или сохранения значения между рендерами.",
    officialDocLink: "https://reactjs.org/docs/hooks-reference.html#useref",
  },
  {
    name: "useImperativeHandle",
    description:
      "Хук для настройки экземпляра ref, передаваемого родительскому компоненту.",
    officialDocLink:
      "https://reactjs.org/docs/hooks-reference.html#useimperativehandle",
  },
  {
    name: "useLayoutEffect",
    description:
      "Хук для выполнения побочных эффектов синхронно после рендера.",
    officialDocLink:
      "https://reactjs.org/docs/hooks-reference.html#uselayouteffect",
  },
  {
    name: "useDebugValue",
    description:
      "Хук для отображения дополнительной информации в DevTools.",
    officialDocLink: "https://reactjs.org/docs/hooks-reference.html#usedebugvalue",
  },
];

// Функция для генерации содержимого материала
function generateContent() {
  return `
# ${faker.lorem.words(3)}
Привет, будущий программист! Рад видеть тебя здесь. Добро пожаловать в учебник по ${faker.lorem.word()}. В этом учебнике ты будешь изучать ${faker.lorem.word()}, шаг за шагом, чтобы ты мог освоить его и создавать веб-приложения.
Давай начнем с рассказа о некоторых особенностях ${faker.lorem.word()}.
## ${faker.lorem.words(2)}
…**библиотека** JavaScript для создания UI (user interface), разработанная командой ${faker.company.name()}, и она уже давно завоевала популярность среди разработчиков по всему миру.
[${faker.lorem.word()}](https://${faker.internet.domainName()})
## Что делает ${faker.lorem.word()} таким особенным?
Одной из главных особенностей является **его компонентный подход**. ${faker.lorem.word()} позволяет разбивать пользовательский интерфейс на небольшие, независимые компоненты. Каждый компонент имеет **свою логику, состояние и представление**, что делает код **более организованным и легко поддерживаемым**.
![${faker.lorem.words(2)}](https://picsum.photos/600/400)
## Основные понятия и аббревиатуры
- **SPA**: Single Page Application.
- **CRA**: Create React App.
- **JSX**: Синтаксис расширения JavaScript.
- **NPM**: Node Package Manager.
- **UI**: User Interface.
- **CRUD**: Create, Read, Update, Delete.
`;
}

// Запись данных в db.json
const db = {
  materials,
  hooks, // Добавляем массив хуков
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
console.log(`${numberOfMaterials} материалов успешно сгенерировано.`);
console.log(`${hooks.length} хуков успешно добавлено.`);