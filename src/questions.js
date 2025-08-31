// Вопросы по DocHub
export const dochubQuestions = [
  {
    id: 1,
    question: "Что такое DocHub?",
    options: [
      "Система управления базами данных",
      "Инструмент описания архитектуры через код (Architecture as a code)",
      "Облачное хранилище документов",
      "Система контроля версий"
    ],
    correct: 1,
    explanation: "DocHub - это инструмент описания архитектуры через код (Architecture as a code). Код архитектуры представляет собой ансамбль файлов на языках, решающих задачу описания архитектуры системы."
  },
  {
    id: 2,
    question: "Какие языки описания поддерживает DocHub?",
    options: [
      "Только Markdown и PlantUML",
      "Markdown, PlantUML, BPMN, Mermaid, Swagger, AsyncAPI",
      "Только JSON и YAML",
      "HTML и CSS"
    ],
    correct: 1,
    explanation: "DocHub поддерживает множество языков: Markdown (разметка текста), PlantUML (диаграммы), BPMN (бизнес-процессы), Mermaid (диаграммы через код), Swagger (HTTP API), AsyncAPI (событийные контракты), SmartAnts (презентация архитектуры) и манифесты YAML/JSON."
  },
  {
    id: 3,
    question: "Что означает принцип 'Архитектура как данные' в DocHub?",
    options: [
      "Архитектура хранится в базе данных",
      "Можно получать ценные сведения из архитектуры, используя язык запросов JSONata",
      "Архитектура описывается только в JSON формате",
      "Данные архитектуры нельзя изменять"
    ],
    correct: 1,
    explanation: "Принцип 'Архитектура как данные' означает, что вы можете получать ценные для себя сведения из архитектуры, используя язык запросов JSONata. Простейшим примером этого подхода являются табличные документы."
  },
  {
    id: 4,
    question: "Какая система управления версиями используется в DocHub по умолчанию?",
    options: [
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Azure DevOps"
    ],
    correct: 1,
    explanation: "DocHub использует GitLab в качестве системы управления версиями. Это позволяет развивать кодовую базу архитектуры аналогично кодовой базе приложений."
  },
  {
    id: 5,
    question: "Что такое SmartAnts в контексте DocHub?",
    options: [
      "Искусственный интеллект для анализа архитектуры",
      "Продвинутый инструмент презентации архитектуры",
      "Система автоматического тестирования",
      "Плагин для IDE"
    ],
    correct: 1,
    explanation: "SmartAnts - это продвинутый инструмент презентации архитектуры в DocHub. Он позволяет создавать интерактивные презентации архитектурных решений."
  },
  {
    id: 6,
    question: "Какие IDE поддерживают плагины для DocHub?",
    options: [
      "Только IntelliJ IDEA",
      "Только Visual Studio Code",
      "IntelliJ IDEA и Visual Studio Code",
      "Eclipse и NetBeans"
    ],
    correct: 2,
    explanation: "DocHub имеет плагины для IntelliJ IDEA (доступен в JetBrains Marketplace) и Visual Studio Code. Плагин для IDEA также доступен в официальном проекте."
  },
  {
    id: 7,
    question: "Какая лицензия используется для DocHub?",
    options: [
      "MIT License",
      "GPL v3",
      "Apache License 2.0",
      "BSD License"
    ],
    correct: 2,
    explanation: "DocHub распространяется под лицензией Apache License 2.0 Open source license. Это FOSS (Free and Open-Source Software) продукт."
  },
  {
    id: 8,
    question: "Что такое манифесты в DocHub?",
    options: [
      "Конфигурационные файлы для сервера",
      "Структурированные файлы в формате YAML/JSON для описания архитектурных объектов",
      "Файлы с метаданными о проекте",
      "Документация по API"
    ],
    correct: 1,
    explanation: "Манифесты в DocHub - это структурированные файлы в формате YAML/JSON для описания архитектурных объектов. Они являются одним из поддерживаемых языков описания архитектуры."
  },
  {
    id: 9,
    question: "Какая основная проблема решается децентрализованным управлением архитектурой в DocHub?",
    options: [
      "Медленная работа системы",
      "Управление архитектурой в Agile-ориентированных компаниях",
      "Сложность установки",
      "Отсутствие визуализации"
    ],
    correct: 1,
    explanation: "Децентрализованное управление архитектурой решает проблему управления в Agile-ориентированных компаниях, где команды должны действовать независимо, но в сотрудничестве друг с другом."
  },
  {
    id: 10,
    question: "Как можно развернуть DocHub локально?",
    options: [
      "Только через npm",
      "Только через Docker",
      "Через Docker (docker-compose up --build) или через npm (npm ci && npm run build)",
      "Только через готовые исполняемые файлы"
    ],
    correct: 2,
    explanation: "DocHub можно развернуть локально двумя способами: через Docker с командой 'docker-compose up --build' или как VueJS приложение через npm командами 'npm ci' и 'npm run build'."
  },
  {
    id: 11,
    question: "Что необходимо для работы с GitLab в DocHub?",
    options: [
      "Только логин и пароль",
      "Персональный токен GitLab",
      "SSH ключи",
      "API ключ администратора"
    ],
    correct: 1,
    explanation: "Для работы с GitLab в DocHub необходимо создать персональный токен в Profile->Preferences->Access Tokens и указать его в переменной VUE_APP_DOCHUB_PERSONAL_TOKEN в файле .env."
  },
  {
    id: 12,
    question: "Что такое 'архитектурные фасады' в DocHub?",
    options: [
      "Красивый интерфейс системы",
      "Портал документации",
      "Система авторизации",
      "Внешние API"
    ],
    correct: 1,
    explanation: "Архитектурные фасады в DocHub - это порталы документации. DocHub хорошо решает задачу создания публичного портала документации архитектуры."
  },
  {
    id: 13,
    question: "Какой язык запросов используется для анализа архитектуры в DocHub?",
    options: [
      "SQL",
      "GraphQL",
      "JSONata",
      "XPath"
    ],
    correct: 2,
    explanation: "Для анализа архитектуры в DocHub используется язык запросов JSONata. Это ключевая часть принципа 'Архитектура как данные'."
  },
  {
    id: 14,
    question: "Какое расширение файлов используется для корневого манифеста в DocHub?",
    options: [
      ".json",
      ".xml",
      ".yaml",
      ".txt"
    ],
    correct: 2,
    explanation: "Корневой манифест в DocHub обычно имеет расширение .yaml, как указано в примере переменной VUE_APP_DOCHUB_ROOT_MANIFEST=workspace/repo/root.yaml."
  },
  {
    id: 15,
    question: "Что означает BPMN в контексте DocHub?",
    options: [
      "Business Process Model Notation - нотация описания бизнес-процессов",
      "Binary Process Management Network",
      "Basic Programming Model Notation",
      "Business Project Management Notes"
    ],
    correct: 0,
    explanation: "BPMN расшифровывается как Business Process Model Notation - нотация описания бизнес-процессов. В DocHub поддерживается BPMN нотация с использованием bpmnjs."
  },
  {
    id: 16,
    question: "Какой порт по умолчанию используется для локального развертывания DocHub?",
    options: [
      "3000",
      "8000",
      "8080",
      "9000"
    ],
    correct: 2,
    explanation: "По умолчанию DocHub развертывается на порту 8080 и становится доступен по адресу http://localhost:8080/main."
  },
  {
    id: 17,
    question: "Что такое 'экосистема' в контексте DocHub?",
    options: [
      "Набор инструментов разработки",
      "Среда, где продукты взаимосвязаны, но развиваются автономно",
      "Облачная инфраструктура",
      "Команда разработчиков"
    ],
    correct: 1,
    explanation: "В контексте DocHub экосистема - это среда, где продукты взаимосвязаны, но развиваются автономно. DocHub позволяет создать единое информационное пространство для такой экосистемы."
  },
  {
    id: 18,
    question: "Какую версию Node.js требует DocHub для развертывания?",
    options: [
      "16.x.x",
      "18.x.x",
      "20.x.x",
      "22.x.x"
    ],
    correct: 2,
    explanation: "Для развертывания DocHub требуется Node.js версии 20.x.x и npm версии не ниже 8.1.x."
  },
  {
    id: 19,
    question: "Что такое 'контроль консистентности' в DocHub?",
    options: [
      "Проверка правописания в документации",
      "Поиск проблем в описании архитектуры и контроль определенных правил",
      "Синхронизация с внешними системами",
      "Резервное копирование данных"
    ],
    correct: 1,
    explanation: "Контроль консистентности в DocHub - это возможность находить проблемы в описании архитектуры и контролировать определенные вами правила архитектуры."
  },
  {
    id: 20,
    question: "Какая папка используется для локального развертывания архитектурных репозиториев?",
    options: [
      "/src/workspace",
      "/public/workspace",
      "/docs/workspace",
      "/app/workspace"
    ],
    correct: 1,
    explanation: "Для локального развертывания архитектурных репозиториев используется папка '/public/workspace'. Эта папка входит в .gitignore и предназначена для локальной разработки."
  },
  {
    id: 21,
    question: "Что означает расширяемая метамодель в DocHub?",
    options: [
      "Возможность добавлять новые функции только разработчикам",
      "Возможность модифицировать существующие сущности и создавать собственные",
      "Автоматическое обновление модели данных",
      "Импорт моделей из других систем"
    ],
    correct: 1,
    explanation: "Расширяемая метамодель DocHub означает, что есть возможность как модифицировать уже существующие сущности, так и создавать собственные по вашему желанию."
  },
  {
    id: 22,
    question: "Какая технология используется для frontend DocHub?",
    options: [
      "React",
      "Angular",
      "VueJS",
      "Svelte"
    ],
    correct: 2,
    explanation: "DocHub является VueJS SPA (Single Page Application) приложением. В качестве backend используется GitLab."
  },
  {
    id: 23,
    question: "Что такое AsyncAPI в контексте DocHub?",
    options: [
      "Асинхронная обработка запросов",
      "Язык описания событийных контрактов",
      "Протокол передачи данных",
      "Система кеширования"
    ],
    correct: 1,
    explanation: "AsyncAPI - это язык описания событийных контрактов, который поддерживается в DocHub наряду с другими языками описания архитектуры."
  },
  {
    id: 24,
    question: "Начиная с какой версии в DocHub введен комьюнити-взнос?",
    options: [
      "v3.12.0",
      "v3.13.1",
      "v3.14.0",
      "v4.0.0"
    ],
    correct: 1,
    explanation: "Начиная с релиза v3.13.1, в дополнение к лицензии Apache 2.0 вводится комьюнити-взнос в развитие DocHub, который заключается в обязательстве не скрывать использование DocHub."
  },
  {
    id: 25,
    question: "Какой веб-сервер рекомендуется для публикации статических файлов DocHub?",
    options: [
      "Apache",
      "nginx",
      "IIS",
      "Tomcat"
    ],
    correct: 1,
    explanation: "Для публикации статических файлов DocHub после сборки рекомендуется использовать веб-сервер nginx."
  },
  {
    id: 26,
    question: "Какая функция DocHub помогает обнаруживать ошибки и отклонения в архитектурном описании?",
    options: [
      "Контроль консистентности",
      "Проверка орфографии",
      "Резервное копирование",
      "Сравнение версий"
    ],
    correct: 0,
    explanation: "Контроль консистентности позволяет находить проблемы в описании архитектуры и контролировать соблюдение ваших правил."
  },
  {
    id: 27,
    question: "Что такое «децентрализованное управление архитектурой» в DocHub?",
    options: [
      "Упрощённое администрирование",
      "Архитектура хранится в одной точке",
      "Описание архитектуры из разных репозиториев и команд",
      "Централизованный контроль"
    ],
    correct: 2,
    explanation: "DocHub консолидирует архитектуру из разных источников (репозиториев), поддерживая независимость команд при совместной работе."
  },
  {
    id: 28,
    question: "Что подразумевается под расширяемой метамоделью в DocHub?",
    options: [
      "Нельзя изменять модель",
      "Можно только добавлять сущности",
      "Можно модифицировать существующие и создавать свои entities",
      "Модель только для чтения"
    ],
    correct: 2,
    explanation: "Расширяемая метамодель означает, что можно модифицировать сущности и добавлять собственные."
  },
  {
    id: 29,
    question: "В какую папку DocHub помещает статические файлы после 'npm run build'?",
    options: ["/build", "/dist", "/out", "/public"],
    correct: 1,
    explanation: "После сборки статические файлы лежат в каталоге /dist и их рекомендуется отдавать, например, через nginx."
  },
  {
    id: 30,
    question: "Какую минимальную версию npm рекомендует DocHub для сборки из исходников?",
    options: ["6.x", "8.1.x и выше", "10.x", "7.0.0"],
    correct: 1,
    explanation: "Для сборки из исходников DocHub рекомендует npm версии не ниже 8.1.x (при Node.js 20.x.x)."
  },
  {
    id: 31,
    question: "Где найти примеры использования DocHub, поддерживаемые сообществом?",
    options: ["В реестре npm", "В репозитории DocHubExamples", "В Docker Hub", "В GitLab Wiki"],
    correct: 1,
    explanation: "Примеры собраны в отдельном репозитории DocHubExamples, который развивает комьюнити."
  },
  {
    id: 32,
    question: "Какая переменная окружения задаёт URL вашего GitLab для DocHub?",
    options: ["VUE_APP_DOCHUB_GITLAB_URL", "VUE_APP_GIT_URL", "DOCHUB_GITLAB_BACKEND", "GITLAB_API_URL"],
    correct: 0,
    explanation: "Адрес GitLab указывается в переменной окружения VUE_APP_DOCHUB_GITLAB_URL."
  },
  {
    id: 33,
    question: "Какой URL по умолчанию используется для локального портала DocHub после 'docker-compose up --build'?",
    options: ["http://localhost:3000", "http://localhost:8080/main", "http://127.0.0.1:8000", "http://localhost:8080/dochub"],
    correct: 1,
    explanation: "После запуска docker-compose портал доступен на http://localhost:8080/main."
  },
  {
    id: 34,
    question: "Как называется файл манифеста архитектурного пакета для публикации в реестре DocHub?",
    options: ["package.json", "archpkg.yaml", "dochub.yaml", "manifest.json"],
    correct: 2,
    explanation: "Для публикации пакета в реестре DocHub в корне репозитория должен лежать файл dochub.yaml."
  },
  {
    id: 35,
    question: "Какой шаблонизатор используется в DocHub для генерации документов из результатов JSONata-запросов?",
    options: ["Handlebars", "Mustache", "Jinja2", "EJS"],
    correct: 1,
    explanation: "Шаблоны DocHub строятся на mustache и заполняются данными из JSONata-запросов."
  },
  {
    id: 36,
    question: "Что в DocHub называют 'Таблицами (Table)'?",
    options: [
      "Конструктор схем базы данных",
      "Документ для отображения данных в табличной форме",
      "Сервис кэширования данных",
      "Плагин для рисования диаграмм"
    ],
    correct: 1,
    explanation: "Таблицы — это документы DocHub для представления данных (в т.ч. из JSONata) в табличном виде."
  },
  {
    id: 37,
    question: "Что умеет плагин DocHub для drawio?",
    options: [
      "Только отображать PNG",
      "Отображать xml/svg/png и поддерживать параметризацию файла перед отображением",
      "Конвертировать диаграммы в PlantUML",
      "Автоматически генерировать BPMN из кода"
    ],
    correct: 1,
    explanation: "Плагин drawio показывает диаграммы в форматах xml/svg/png и позволяет параметризовать файл как шаблон."
  },
  {
    id: 38,
    question: "Какой роутер используется во фронтенде DocHub как SPA?",
    options: ["React Router", "Vue Router", "Angular Router", "Ember Router"],
    correct: 1,
    explanation: "DocHub — VueJS SPA, навигацию обеспечивает Vue Router."
  },
  {
    id: 39,
    question: "Где находится активное сообщество DocHub?",
    options: ["Telegram", "Slack", "IRC", "Facebook Groups"],
    correct: 0,
    explanation: "Основное комьюнити DocHub общается в Telegram-группе DocHubTeam."
  },
  {
    id: 40,
    question: "Где можно установить плагин DocHub для IntelliJ IDEA?",
    options: ["JetBrains Marketplace", "Chrome Web Store", "npm", "Docker Hub"],
    correct: 0,
    explanation: "Плагин для IntelliJ IDEA доступен в JetBrains Marketplace (а также в проекте репозитория)."
  },
  {
    id: 41,
    question: "Что в DocHub подразумевается под 'адаптивной метамоделью'?",
    options: [
      "Метамодель фиксирована и не изменяется",
      "Метамодель — артефакт предметной области, который может расширяться и эволюционировать по мере зрелости",
      "Метамодель — это схема базы данных",
      "Метамодель — набор UML-диаграмм"
    ],
    correct: 1,
    explanation: "Идея адаптивной метамодели: она растёт вместе с доменом — можно расширять существующие сущности и добавлять новые."
  },
  {
    id: 42,
    question: "Как DocHub позволяет использовать внешние данные в табличных документах?",
    options: [
      "Никак — доступны только данные манифеста",
      "Можно подключить внешние данные и сопоставить их с данными архитектуры",
      "Только через прямые SQL-запросы к БД",
      "Только через REST-вызовы из браузера без манифестов"
    ],
    correct: 1,
    explanation: "Таблицы DocHub могут подтягивать внешние данные и мэппить их на данные архитектуры перед отображением."
  },
  {
    id: 43,
    question: "Для чего предназначен раздел entities (сущности) расширенной метамодели?",
    options: [
      "Для настройки OAuth2",
      "Для создания уникальных сущностей метамодели или расширения существующих",
      "Для конфигурации веб-сервера",
      "Для хранения Markdown-файлов"
    ],
    correct: 1,
    explanation: "Раздел entities позволяет создавать собственные сущности метамодели и расширять уже имеющиеся."
  },
  {
    id: 44,
    question: "Что дополнительно умеет Markdown-документ в DocHub?",
    options: [
      "Запускать контейнеры Docker",
      "Добавлять ссылки на архитектурные объекты DocHub",
      "Генерировать BPMN-диаграммы",
      "Автоматически публиковать документацию в GitLab Wiki"
    ],
    correct: 1,
    explanation: "Markdown в DocHub умеет добавлять ссылки на объекты архитектуры (специальный синтаксис ссылок)."
  },
  {
    id: 45,
    question: "Как называется раздел портала DocHub, где собраны найденные валидаторами ошибки/предупреждения?",
    options: ["Problems (Проблемы)", "Logs", "Insights", "Quality"],
    correct: 0,
    explanation: "Раздел Problems отображает отклонения/ошибки и предупреждения, найденные валидаторами."
  },
  {
    id: 46,
    question: "Какая переменная окружения указывает путь к корневому манифесту при локальной разработке?",
    options: ["DOC_ROOT", "VUE_APP_DOCHUB_ROOT_MANIFEST", "DOCHUB_MAIN_MANIFEST", "ROOT_YAML_PATH"],
    correct: 1,
    explanation: "Путь к корневому манифесту задаётся переменной VUE_APP_DOCHUB_ROOT_MANIFEST (например, workspace/repo/root.yaml)."
  },
  {
    id: 47,
    question: "Какие переменные окружения используются для интеграции с GitLab OAuth2 в продакшен-окружении DocHub?",
    options: [
      "GITLAB_OAUTH_ID и GITLAB_OAUTH_SECRET",
      "VUE_APP_DOCHUB_APP_ID и VUE_APP_DOCHUB_CLIENT_SECRET",
      "VUE_APP_DOCHUB_PERSONAL_TOKEN и VUE_APP_DOCHUB_GITLAB_URL",
      "OAUTH_CLIENT и OAUTH_SECRET"
    ],
    correct: 1,
    explanation: "В продакшене настраиваются OAuth2-параметры GitLab: VUE_APP_DOCHUB_APP_ID и VUE_APP_DOCHUB_CLIENT_SECRET."
  },
  {
    id: 48,
    question: "Какой командой устанавливаются зависимости перед сборкой DocHub из исходников?",
    options: ["npm i", "npm ci", "yarn install", "pnpm install"],
    correct: 1,
    explanation: "Рекомендуется использовать 'npm ci' для детерминированной установки зависимостей перед 'npm run build'."
  },
  {
    id: 49,
    question: "Что такое SmartAnts в DocHub?",
    options: [
      "Панель аналитики",
      "Продвинутый инструмент презентации архитектуры",
      "Автоматический билд-сервер",
      "Система контроля версий"
    ],
    correct: 1,
    explanation: "SmartAnts — это инструмент презентации архитектуры, позволяющий визуализировать архитектуру в интерактивной форме."
  },
  {
    id: 50,
    question: "Что такое архитектурный фасад (Facade) в контексте DocHub?",
    options: [
      "Шаблон проектирования Facade",
      "Публичный портал документации архитектуры",
      "Модуль авторизации",
      "Фасад UI-компонентов"
    ],
    correct: 1,
    explanation: "Архитектурный фасад — это публичный портал документации, благодаря которому архитектура доступна для внешнего восприятия."
  },
  {
    id: 51,
    question: "DocHub поддерживает консолидацию архитектуры из различных Git-репозиториев. Это пример чего?",
    options: [
      "Централизованного управления",
      "Agile-управления архитектурой",
      "Децентрализованного управления",
      "Монолитной архитектуры"
    ],
    correct: 2,
    explanation: "DocHub позволяет консолидировать архитектуру из разных репозиториев — пример децентрализованного управления."
  },
  {
    id: 52,
    question: "Как называется подход, позволяющий анализировать архитектуру как данные с помощью JSONata?",
    options: [
      "Architecture as Data",
      "Infrastructure as Code",
      "Architecture as Code",
      "Design as Data"
    ],
    correct: 0,
    explanation: "Принцип «Архитектура как данные» предполагает возможность анализа архитектуры с помощью JSONata-запросов."
  },
  {
    id: 53,
    question: "DocHub предоставляет возможность проверки соответствия архитектурных описаний заранее заданным правилам. Как это называется?",
    options: [
      "Linting",
      "Контроль консистентности",
      "Unit-тестирование",
      "Сравнение с эталоном"
    ],
    correct: 1,
    explanation: "DocHub умеет находить проблемы в архитектуре и проверять соответствие правилам — это контроль консистентности."
  },
  {
    id: 54,
    question: "Что означает 'расширяемая метамодель' в DocHub?",
    options: [
      "Статичная модель, которую нельзя менять",
      "Возможность модифицировать и создавать новые сущности",
      "Модель автоматически генерируется",
      "Только чтение архитектуры"
    ],
    correct: 1,
    explanation: "Метамодель DocHub можно расширять — модифицировать сущности и создавать новые."
  },
  {
    id: 55,
    question: "Где можно найти репозиторий с примерами использования DocHub?",
    options: [
      "npm registry",
      "Специальный репозиторий DocHubExamples",
      "Docker Hub",
      "GitLab Marketplace"
    ],
    correct: 1,
    explanation: "Примеры использования собраны в отдельном репозитории DocHubExamples, развиваемом сообществом." 
  },
  {
    id: 56,
    question: "Какая лицензия используется в проекте DocHub?",
    options: [
      "MIT",
      "GPLv3",
      "Apache-2.0",
      "BSD"
    ],
    correct: 2,
    explanation: "DocHub распространяется под лицензией Apache License 2.0."
  },
  {
    id: 57,
    question: "Какие плагины доступны для интеграции с IDE?",
    options: [
      "В IntelliJ IDEA и VSCode",
      "Только IntelliJ IDEA",
      "Только VSCode",
      "Нет плагинов"
    ],
    correct: 0,
    explanation: "Плагины доступны и для IntelliJ IDEA (в Marketplace), и для Visual Studio Code."
  },
  {
    id: 58,
    question: "Как называется страница с roadmap проектных задач DocHub?",
    options: [
      "Plan.md",
      "RoadMap",
      "Backlog",
      "Milestones"
    ],
    correct: 1,
    explanation: "В README представлен раздел 'Plan of product development' с встроенной диаграммой Gantt — это RoadMap."
  },
  {
    id: 59,
    question: "Какая версия проекта DocHub является последней по состоянию на август 2025?",
    options: ["v3.13.1", "v4.0.0", "v3.15.0", "v3.14.0"],
    correct: 2,
    explanation: "Последний релиз — v3.15.0, опубликован 10 августа 2025."
  },
  {
    id: 60,
    question: "DocHub позволяет развивать архитектуру «инкрементально» как кодовую базу. Это часть какого подхода?",
    options: [
      "Architecture as Code",
      "Continuous Deployment",
      "Упрощённого REST-API",
      "Scripted Documentation"
    ],
    correct: 0,
    explanation: "Инкрементальное развитие архитектуры как кодовую базу — часть подхода 'Architecture as Code'."
  },
  {
    id: 61,
    question: "Какие форматы описания архитектуры поддерживает DocHub?",
    options: [
      "Только Markdown и YAML",
      "Markdown, PlantUML, BPMN, Mermaid, Swagger, AsyncAPI, SmartAnts, манифесты",
      "Только HTML и CSS",
      "SVG и PDF"
    ],
    correct: 1,
    explanation: "Поддерживаются Markdown, PlantUML, BPMN, Mermaid, Swagger, AsyncAPI, SmartAnts и манифесты (YAML/JSON)."
  },
  {
    id: 62,
    question: "Какая команда запускает проект DocHub локально через Docker?",
    options: [
      "docker run dochub",
      "docker-compose up --build",
      "npm start",
      "npm run serve"
    ],
    correct: 1,
    explanation: "Для локального запуска применяют команду docker-compose up --build."
  },
  {
    id: 63,
    question: "Какие шаги базового локального workflow с манифестом в DocHub?",
    options: [
      "Клонировать, задать .env, запустить docker-compose",
      "Создать Dockerfile вручную",
      "Запустить из IDE без настроек",
      "Собрать jar и запустить"
    ],
    correct: 0,
    explanation: "Workflow: клонировать репозиторий, создать .env (причём по примеру example.env), указать манифест, затем docker-compose up --build."
  },
  {
    id: 64,
    question: "Как задаётся URL GitLab для локального Docker-развертывания DocHub?",
    options: [
      "GITLAB_URL",
      "VUE_APP_DOCHUB_GITLAB_URL",
      "DOCHUB_URL",
      "GIT_URL"
    ],
    correct: 1,
    explanation: "Адрес GitLab указывается в переменной VUE_APP_DOCHUB_GITLAB_URL в файле .env."
  },
  {
    id: 65,
    question: "Какая технология используется во фронтенде DocHub?",
    options: [
      "React",
      "Angular",
      "VueJS SPA",
      "Svelte"
    ],
    correct: 2,
    explanation: "DocHub — VueJS SPA приложение."
  },
  {
    id: 66,
    question: "Что такое example.env в проекте DocHub?",
    options: [
      "Файл с рабочим примером архитектуры",
      "Шаблон для переменных окружения",
      "Docker образ",
      "UI-дизайн"
    ],
    correct: 1,
    explanation: "example.env — это шаблон env-файла с примерами переменных для локального и продакшн-развертывания."
  },
  {
    id: 67,
    question: "Какая технология backend используется в DocHub?",
    options: [
      "Node.js API",
      "GitLab",
      "Firebase",
      "REST-сервис"
    ],
    correct: 1,
    explanation: "В качестве backend DocHub использует GitLab."
  },
  {
    id: 68,
    question: "Где развивается активное сообщество DocHub?",
    options: [
      "GitHub Discussions",
      "Telegram (группа DocHubTeam)",
      "Stack Overflow",
      "Reddit"
    ],
    correct: 1,
    explanation: "Комьюнити общается в Telegram-группе DocHubTeam."
  },
  {
    id: 69,
    question: "Зачем используется CI/CD при работе с DocHub?",
    options: [
      "Для создания резервных копий Git-репозиториев",
      "Для автоматизации проверки, сборки и публикации архитектуры",
      "Для интеграции с IDE",
      "Для ускорения работы JSONata-запросов"
    ],
    correct: 1,
    explanation: "CI/CD обеспечивает автоматическую проверку манифестов, генерацию документации и публикацию обновлённых моделей архитектуры."
  },
  {
    id: 70,
    question: "Что можно автоматически проверить с помощью CI/CD в DocHub?",
    options: [
      "Наличие интернет-соединения",
      "Корректность моделей и соответствие правилам",
      "Качество исходного кода приложения",
      "Уровень нагрузки сервера"
    ],
    correct: 1,
    explanation: "В CI/CD пайплайне можно запускать валидацию моделей, проверку консистентности и тестирование правил."
  },
  {
    id: 71,
    question: "Для чего DocHub интегрируется с реестрами пакетов (например, GitLab Package Registry)?",
    options: [
      "Для хранения журналов логов",
      "Для версионирования и распространения архитектурных артефактов",
      "Для анализа производительности системы",
      "Для ускорения JSONata-запросов"
    ],
    correct: 1,
    explanation: "Интеграция с реестром пакетов позволяет хранить и версионировать артефакты архитектуры, делая их доступными разным командам."
  },
  {
    id: 72,
    question: "Что является основным преимуществом версионирования архитектуры в реестре пакетов?",
    options: [
      "Архитектура становится неизменяемой",
      "Легче отслеживать изменения и откатываться к стабильным версиям",
      "Архитектура публикуется на внешнем сайте",
      "Отключается контроль консистентности"
    ],
    correct: 1,
    explanation: "Версионирование позволяет безопасно управлять изменениями, тестировать новые версии и при необходимости возвращаться к стабильным."
  },
  {
    id: 73,
    question: "Что такое Mutators в DocHub?",
    options: [
      "Скрипты для преобразования или дополнения моделей",
      "Функция резервного копирования данных",
      "Модуль для интеграции с IDE",
      "Набор правил проверки безопасности"
    ],
    correct: 0,
    explanation: "Mutators — это расширения, которые позволяют программно модифицировать архитектурные модели до публикации или анализа."
  },
  {
    id: 74,
    question: "Какой язык чаще всего используется для написания Mutators в DocHub?",
    options: [
      "Python",
      "JavaScript",
      "Go",
      "Ruby"
    ],
    correct: 1,
    explanation: "Mutators чаще всего пишутся на JavaScript, что позволяет гибко изменять модели и добавлять пользовательскую логику."
  },
  {
    id: 75,
    question: "Для чего используется экспорт в Excalidraw из DocHub?",
    options: [
      "Для автоматического тестирования моделей",
      "Для совместной визуализации архитектуры и командного редактирования",
      "Для интеграции с IDE",
      "Для запуска JSONata-запросов"
    ],
    correct: 1,
    explanation: "Экспорт в Excalidraw позволяет визуализировать архитектурные модели и редактировать их в интерактивном режиме."
  },
  {
    id: 76,
    question: "Какое преимущество даёт экспорт диаграмм в Excalidraw?",
    options: [
      "Полностью автоматизирует CI/CD",
      "Позволяет командам в реальном времени работать над архитектурой",
      "Повышает производительность JSONata-запросов",
      "Заменяет Git-репозитории"
    ],
    correct: 1,
    explanation: "В Excalidraw можно совместно редактировать диаграммы, улучшая коммуникацию между архитекторами и разработчиками."
  },
  {
    id: 77,
    question: "Как Event Storming помогает при работе с DocHub?",
    options: [
      "Позволяет создавать автоматические тесты",
      "Помогает визуализировать бизнес-события и их взаимосвязи",
      "Оптимизирует работу CI/CD",
      "Обновляет версии пакетов"
    ],
    correct: 1,
    explanation: "Event Storming помогает командам выявить ключевые события и процессы домена, которые затем можно зафиксировать в DocHub."
  },
  {
    id: 78,
    question: "Какой результат Event Storming можно использовать в DocHub?",
    options: [
      "Список багов и ошибок",
      "Модель событий и агрегатов для архитектурной модели",
      "Резервные копии базы данных",
      "Конфигурацию сервера"
    ],
    correct: 1,
    explanation: "Результаты Event Storming помогают построить корректные модели домена и привязать их к архитектурным сущностям в DocHub."
  },
  {
    id: 79,
    question: "В чём преимущество SaaS-развёртывания DocHub для компании?",
    options: [
      "Нет необходимости настраивать CI/CD",
      "Более простое масштабирование и управление доступами",
      "Невозможность интеграции с Git",
      "Архитектура становится статичной"
    ],
    correct: 1,
    explanation: "SaaS-развёртывание упрощает управление пользователями, масштабирование и интеграцию в инфраструктуру компании."
  },
  {
    id: 80,
    question: "Что важно учитывать при корпоративном SaaS-развёртывании DocHub?",
    options: [
      "Наличие выделенного домена и интеграции с корпоративной аутентификацией",
      "Запрет на использование Mutators",
      "Отключение CI/CD",
      "Отсутствие интеграции с Excalidraw"
    ],
    correct: 0,
    explanation: "Для корпоративных SaaS-развёртываний важно настроить SSO и другие механизмы безопасности."
  },
  {
    id: 81,
    question: "Для чего используются JSONata-запросы в DocHub?",
    options: [
      "Для написания CI/CD скриптов",
      "Для анализа и фильтрации данных архитектурной модели",
      "Для обновления Git-репозиториев",
      "Для оптимизации работы Excalidraw"
    ],
    correct: 1,
    explanation: "JSONata-запросы позволяют строить выборки и отчёты по данным архитектурных моделей."
  },
  {
    id: 82,
    question: "Как DocHub помогает контролировать консистентность архитектуры?",
    options: [
      "С помощью ручной проверки всех моделей",
      "С помощью правил валидации и автоматизированных проверок",
      "Путём отключения изменений",
      "Через интеграцию с IDE"
    ],
    correct: 1,
    explanation: "Правила валидации и автоматические проверки позволяют гарантировать консистентность архитектуры в разных командах."
  },
  {
    id: 83,
    question: "Что такое DocHub SDK (System Development Kit)?",
    options: ["IDE плагин", "Набор утилит для разработки плагинов", "Docker-образ", "Фреймворк UI"],
    correct: 1,
    explanation: "DocHub SDK — это набор утилит и интерфейсов для разработки плагинов DocHub."
  },
  {
    id: 84,
    question: "Под какой лицензией распространяется DocHub SDK?",
    options: ["Apache-2.0", "MIT", "GPL-3.0", "BSD"],
    correct: 2,
    explanation: "DocHub SDK распространяется под лицензией GPL-3.0."
  },
  {
    id: 85,
    question: "Что такое архитектурный фасад в DocHub?",
    options: ["Портал документации", "Тип манифеста", "CI-пайплайн", "Vue-компонент"],
    correct: 0,
    explanation: "Архитектурный фасад — публичный портал документации архитектуры, доступный внешним пользователям."
  },
  {
    id: 86,
    question: "Какой файл используется как шаблон конфигурации при развёртывании DocHub?",
    options: [".config", "example.env", ".env.template", "settings.yaml"],
    correct: 1,
    explanation: "Файл example.env используется в качестве шаблона переменных окружения при развёртывании. Его называют .env."
  },
  {
    id: 87,
    question: "Какой backend используется DocHub?",
    options: ["GitHub", "GitLab", "Self-hosted API", "Bitbucket"],
    correct: 1,
    explanation: "DocHub использует GitLab в качестве backend и системы аутентификации."
  },
  {
    id: 88,
    question: "Какие инструменты требуются для сборки DocHub через Docker?",
    options: ["docker и docker-compose", "kubectl и helm", "npm и yarn", "git и maven"],
    correct: 0,
    explanation: "Для Docker-сборки нужны docker (>= 20) и docker-compose (>= 2.2.3)."
  },
  {
    id: 89,
    question: "Какие технологии фронтенда использует DocHub?",
    options: ["Vue.js SPA с Vue Router", "React SPA с React Router", "Angular", "jQuery"],
    correct: 0,
    explanation: "DocHub — Vue.js SPA-приложение с использованием Vue Router."
  },
  {
    id: 90,
    question: "Что нужно настроить для интеграции OAuth2 с GitLab?",
    options: ["Client ID и Secret", "SSH key", "Personal access token", "Webhooks"],
    correct: 0,
    explanation: "Для интеграции через OAuth2 необходимо настроить Client ID и Client Secret в GitLab и указать их в .env."
  },
  {
    id: 91,
    question: "Какие языки описания поддерживает DocHub?",
    options: ["Markdown, PlantUML, BPMN, Mermaid, Swagger, AsyncAPI, SmartAnts", "Только Markdown и YAML", "HTML и CSS", "Только JSON и XML"],
    correct: 0,
    explanation: "DocHub поддерживает Markdown, PlantUML, BPMN, Mermaid, Swagger, AsyncAPI, SmartAnts и манифесты."
  },
  {
    id: 92,
    question: "DocHub подходит для управления архитектурой какого типа?",
    options: ["Монолитной", "Экосистемной, где продукты автономны, но взаимосвязаны", "Маленькой однофункциональной", "Только API-архитектуры"],
    correct: 1,
    explanation: "DocHub создан для архитектуры экосистем, в которой продукты развиваются автономно, но связаны между собой."
  },
  {
    id: 93,
    question: "Какую IDE поддерживает официальный плагин DocHub Architecture as Code?",
    options: ["Eclipse", "JetBrains IDEs", "Visual Studio", "NetBeans"],
    correct: 1,
    explanation: "DocHub Architecture as Code предоставляет плагин для среды JetBrains IDEs."
  },
  {
    id: 94,
    question: "Какие IDE дополнительно поддерживает форк плагина DocHub Architecture as Code?",
    options: ["Visual Studio Code", "Sublime Text", "JetBrains IDEs (форк)", "Atom"],
    correct: 2,
    explanation: "Существует форк плагина DocHub Architecture as Code, также поддерживающий JetBrains IDEs."
  },
  {
    id: 95,
    question: "Какой браузер получает документ DocHub через расширение для ускоренного доступа?",
    options: ["Firefox", "Safari", "Chrome", "Internet Explorer"],
    correct: 2,
    explanation: "DocHub предлагает расширение для Chrome, позволяющее открывать PDF прямо из браузера."
  },
  {
    id: 96,
    question: "Какие интеграции с платформами хранения и письма предлагает DocHub?",
    options: ["Google Drive, Gmail, Dropbox, Box, OneDrive", "Only Google Drive", "Only Dropbox", "Only OneDrive"],
    correct: 0,
    explanation: "DocHub интегрируется с Google Drive, Gmail, Dropbox, Box, OneDrive и другими."
  },
  {
    id: 97,
    question: "Что предлагает DocHub в качестве AI-ассистента?",
    options: ["AI-автозаполнение форм", "AI-асистент для помощи с документами", "AI-генерация архитектуры", "AI-валидация JSONata"],
    correct: 1,
    explanation: "DocHub предлагает встроенного AI-ассистента, доступного при работе с документом."
  },
  {
    id: 98,
    question: "Как DocHub подключается к Google Drive для быстрого открытия документов?",
    options: ["Через API ключ", "Через кнопку 'Open With' в интерфейсе", "Через email-интеграцию", "Только вручную загрузкой"],
    correct: 1,
    explanation: "DocHub подключается к Google Drive через кнопку «Open With», упрощая открытие документов."
  },
  {
    id: 99,
    question: "Когда был запущен сервис DocHub — online PDF annotator и signing платформа?",
    options: ["2018", "2020", "2014", "2016"],
    correct: 2,
    explanation: "DocHub был запущен в октябре 2014 года как онлайн инструмент для аннотирования и подписания PDF."
  },
  {
    id: 100,
    question: "Как называется пакет на npm, предоставляющий core-функции DocHub для работы с архитектурой как кодом?",
    options: ["dochub-core", "dochubcore", "dochub-main", "docu-core"],
    correct: 1,
    explanation: "Пакет называется dochubcore и предоставляет основные возможности DocHub, включая поддержку PlantUML, Mermaid, Swagger и др."
  },
  {
    id: 101,
    question: "Какие языки и форматы описания поддерживает пакет dochubcore?",
    options: [
      "Только Markdown и YAML",
      "Markdown, PlantUML, Mermaid, Swagger, AsyncAPI, SmartAnts, манифесты",
      "HTML, CSS, JavaScript",
      "Только JSON и XML"
    ],
    correct: 1,
    explanation: "Согласно пакету dochubcore, DocHub поддерживает Markdown, PlantUML, Mermaid, Swagger, AsyncAPI, SmartAnts и манифесты."
  },
  {
    id: 102,
    question: "Какая интеграция с API по-умолчанию доступна в DocHub?",
    options: [
      "Task API",
      "API Nation",
      "CA API Gateway",
      "Все перечисленные"
    ],
    correct: 3,
    explanation: "DocHub предлагает интеграции с API Nation, Task API и CA API Gateway, хотя они могут быть ещё в разработке."
  },
  {
    id: 103,
    question: "DocHub поддерживает интеграцию с Gmail и Google Drive. Как она реализована?",
    options: [
      "Через сторонний сервис",
      "Нативная интеграция в Google Workspace",
      "Через CSV-файлы",
      "Через WebDAV"
    ],
    correct: 1,
    explanation: "Интеграция реализована нативно: DocHub доступен через Google Workspace (Drive, Gmail и др.)."
  },
  {
    id: 104,
    question: "Какие платформы интеграции с хранилищем документов поддерживаются DocHub?",
    options: [
      "Google Drive и Dropbox",
      "Google Drive, Dropbox, Box, OneDrive",
      "Только Google Workspace",
      "Только Box"
    ],
    correct: 1,
    explanation: "DocHub интегрируется с Google Drive, Dropbox, Box и OneDrive."
  },
  {
    id: 105,
    question: "Какой год указан как год запуска онлайн-сервиса DocHub для PDF-аннотаций и подписей?",
    options: ["2014", "2016", "2018", "2020"],
    correct: 0,
    explanation: "Сервис DocHub появился в октябре 2014 года как онлайн-инструмент для аннотирования и подписания PDF-документов."
  },
  // Добавить в dochubQuestions (id продолжаются от 26)
  {
    id: 106,
    question: "Какой файл является корневым примером в репозитории DocHubExamples?",
    options: ["root.yaml", "dochub.yaml", "example.yaml", "manifest.json"],
    correct: 1,
    explanation: "В репозитории примеров корневой файл примера называется dochub.yaml — в нём подключаются отдельные примеры (см. README репозитория примеров)."
  },
  {
    id: 107,
    question: "Какая лицензия используется в репозитории DocHubExamples (примеры)?",
    options: ["Apache-2.0", "GPLv3", "MIT", "BSD"],
    correct: 2,
    explanation: "Репозиторий DocHubExamples публикуется под MIT-лицензией, что упрощает повторное использование примеров."
  },
  {
    id: 108,
    question: "Что нужно сделать, чтобы включить пример из DocHubExamples в локальной копии?",
    options: [
      "Запустить npm i внутри примера",
      "Распаковать архив в /public",
      "Отключить все плагины",
      "Раскомментировать импорт примера в файле ./dochub.yaml"
    ],
    correct: 3,
    explanation: "Инструкция в репозитории примеров рекомендует раскомментировать строку импорта нужного примера в корневом файле ./dochub.yaml."
  },
  {
    id: 109,
    question: "Какой пакет на npm содержит 'core' функциональность DocHub (поддержка языков и рендеринга)?",
    options: ["dochub-core", "dochubcore", "docu-core", "dochub-main"],
    correct: 1,
    explanation: "В экосистеме есть пакет dochubcore (npm), предоставляющий ключевые функции DocHub (поддержка PlantUML, Mermaid, Swagger и др.)."
  },
  {
    id: 110,
    question: "Какая библиотека используется DocHub для отображения BPMN-диаграмм?",
    options: ["bpmnjs", "Camunda Modeler", "Flowable", "BPMN.io (не библиотека)"],
    correct: 0,
    explanation: "DocHub использует bpmnjs (bpmn.io) для отображения и работы с BPMN-диаграммами."
  },
  {
    id: 111,
    question: "Что такое SmartAnts в DocHub?",
    options: [
      "Инструмент линтинга метамодели",
      "Продвинутый инструмент презентации архитектуры с анимацией",
      "Модуль аутентификации",
      "CI-плагин для GitLab"
    ],
    correct: 1,
    explanation: "SmartAnts — это инструмент презентации архитектуры, позволяющий визуализировать и проигрывать презентационные сценарии архитектуры."
  },
  {
    id: 112,
    question: "Какая функция была отмечена в RoadMap как выполненная в Q1 2023?",
    options: ["Export to Excalidraw", "Time Machine", "Web DocHub IDE", "ArchiMate modeler"],
    correct: 0,
    explanation: "В RoadMap проекта указано, что функциональность 'Export to Excalidraw' была выполнена в Q1 2023."
  },
  {
    id: 113,
    question: "Что такое 'mutators' в контексте развития DocHub (по RoadMap)?",
    options: [
      "Скрипты/плагины для автоматического изменения/трансформации манифестов",
      "Тип метамодели",
      "Набор UI-виджетов",
      "Группа тестов для CI"
    ],
    correct: 0,
    explanation: "В RoadMap отмечены POC и MVP mutators — это возможность программно трансформировать архитектурные модели до публикации/анализа."
  },
  {
    id: 114,
    question: "Что подразумевается под 'public metamodel repository' в RoadMap DocHub?",
    options: [
      "Репозиторий публичных исходников DocHub UI",
      "Общее хранилище готовых метамоделей, которыми может пользоваться сообщество",
      "Репозиторий Docker образов",
      "Бэкап серверной части"
    ],
    correct: 1,
    explanation: "RoadMap содержит пункт о публичном репозитории метамоделей — централизованном месте для обмена готовыми/стандартными метамоделями."
  },
  {
    id: 115,
    question: "Какая папка в локальной сборке DocHub служит для размещения локальных архитектурных репозиториев (workspace)?",
    options: ["/app/workspace", "/public/workspace", "/src/workspace", "/workspace"],
    correct: 1,
    explanation: "Для локальной разработки DocHub рекомендует использовать папку /public/workspace — в неё клонируют архитектурные репозитории."
  },
  {
    id: 116,
    question: "Какое имя переменной окружения задаёт URL GitLab для локального развёртывания DocHub?",
    options: [
      "GITLAB_URL",
      "VUE_APP_DOCHUB_GITLAB_URL",
      "DOCHUB_GITLAB_BACKEND",
      "GITLAB_API"
    ],
    correct: 1,
    explanation: "В конфиг-шаблоне используется VUE_APP_DOCHUB_GITLAB_URL для указания адреса GitLab (локально или в продакшене)."
  },
  {
    id: 117,
    question: "Какая переменная в .env используется для личного токена GitLab при локальной разработке DocHub?",
    options: [
      "GITLAB_PERSONAL_TOKEN",
      "VUE_APP_DOCHUB_PERSONAL_TOKEN",
      "DOCHUB_TOKEN",
      "PERSONAL_GITLAB_KEY"
    ],
    correct: 1,
    explanation: "Для локальной разработки в .env указывают VUE_APP_DOCHUB_PERSONAL_TOKEN — персональный токен GitLab."
  },
  {
    id: 118,
    question: "Какие переменные нужно указать для OAuth2 интеграции с GitLab в продакшене?",
    options: [
      "VUE_APP_DOCHUB_APP_ID и VUE_APP_DOCHUB_CLIENT_SECRET",
      "GITLAB_OAUTH_ID и GITLAB_OAUTH_SECRET",
      "DOCHUB_OAUTH_CLIENT и DOCHUB_OAUTH_SECRET",
      "VUE_APP_CLIENT_ID и VUE_APP_CLIENT_SECRET"
    ],
    correct: 0,
    explanation: "Документация рекомендует настроить OAuth2-приложение в GitLab и указать VUE_APP_DOCHUB_APP_ID и VUE_APP_DOCHUB_CLIENT_SECRET в .env."
  },
  {
    id: 119,
    question: "Какой файл служит шаблоном переменных окружения в репозитории DocHub?",
    options: ["example.env", ".env.sample", "env.template", "dochub.env"],
    correct: 0,
    explanation: "В репозитории присутствует example.env — шаблон, который переименовывается в .env для локального развёртывания."
  },
  {
    id: 120,
    question: "Куда складываются статические файлы после сборки DocHub (npm run build)?",
    options: ["/build", "/dist", "/out", "/public/dist"],
    correct: 1,
    explanation: "После сборки Vue SPA статические файлы генерируются в папке /dist и затем публикуются через веб-сервер (например, nginx)."
  },
  {
    id: 121,
    question: "Какой веб-сервер проект рекомендует для публикации сгенерированных статических файлов?",
    options: ["IIS", "nginx", "Tomcat", "Apache TomEE"],
    correct: 1,
    explanation: "В инструкции рекомендуется отдавать /dist через web-сервер — например, nginx."
  },
  {
    id: 122,
    question: "По какому URL по умолчанию доступен локально поднятый DocHub через docker-compose?",
    options: [
      "http://localhost:3000",
      "http://localhost:8080/main",
      "http://127.0.0.1:8000/dochub",
      "http://localhost:8080"
    ],
    correct: 1,
    explanation: "После запуска docker-compose проект доступен по адресу http://localhost:8080/main (по умолчанию)."
  },
  {
    id: 123,
    question: "Какие команды рекомендуются для сборки DocHub из исходников (npm)?",
    options: [
      "npm install && npm start",
      "npm ci && npm run build",
      "yarn install && yarn build",
      "pnpm install && pnpm build"
    ],
    correct: 1,
    explanation: "Рекомендуемый порядок для продакшен-сборки: 'npm ci' (детерминированная установка) и 'npm run build'."
  },
  {
    id: 124,
    question: "Какая минимальная версия Node.js указана в документации для сборки DocHub?",
    options: ["14.x", "16.x", "18.x", "20.x"],
    correct: 3,
    explanation: "В документации указывается Node.js версии 20.x.x (и npm не ниже 8.1.x) для сборки продакшен-артефактов."
  },
  {
    id: 125,
    question: "Что такое 'табличные документы' (Tables) в DocHub?",
    options: [
      "Механизм отображения данных архитектуры в табличной форме (с JSONata + шаблонами)",
      "Таблицы в базе данных проекта",
      "Административная панель пользователей",
      "Модуль аутентификации"
    ],
    correct: 0,
    explanation: "Table — это документ DocHub для представления данных (включая результаты JSONata-запросов) в табличном виде."
  },
  {
    id: 126,
    question: "Какая технология/язык используется для выборок и трансформаций данных архитетауры в DocHub?",
    options: ["SQL", "GraphQL", "JSONata", "XPath"],
    correct: 2,
    explanation: "DocHub применяет JSONata как язык выражений для выборок и трансформаций архитектурных данных (подход 'архитектура как данные')."
  },
  {
    id: 127,
    question: "Какой шаблонизатор обычно применяется для генерации документов (например, таблиц) в DocHub?",
    options: ["Handlebars", "Mustache", "EJS", "Twig"],
    correct: 1,
    explanation: "DocHub использует шаблоны в стиле mustache для генерации документов на основе данных (включая результаты JSONata)."
  },
  {
    id: 128,
    question: "Что означает 'архитектура как данные' (architecture as data) в контексте DocHub?",
    options: [
      "Архитектура хранится исключительно в БД",
      "Архитектура описывается в машинно-читаемых форматах и может анализироваться/запрашиваться",
      "Архитектура выводится как PDF",
      "Архитектура кодируется в SQL"
    ],
    correct: 1,
    explanation: "Идея — описывать архитектуру в структурированных файлах (YAML/JSON/etc.) и получать по ним аналитические выборки (JSONata) — т.е. работать с архитектурой как с данными."
  },
  {
    id: 129,
    question: "Какая страница/ресурс рекомендуется как первоисточник документации DocHub?",
    options: ["dochub.com", "dochub.info", "npmjs.com/dochubcore", "GitHub Wiki (неофициально)"],
    correct: 1,
    explanation: "Официальная документация по 'Architecture as Code' ведётся на сайте dochub.info, а основной код — на GitHub (DocHubTeam/DocHub)."
  },
  {
    id: 130,
    question: "Что делает плагин drawio в DocHub (по функционалу в документации)?",
    options: [
      "Конвертирует drawio в PlantUML",
      "Отображает xml/svg/png drawio-файлов и поддерживает параметризацию шаблона",
      "Автоматически генерирует диаграммы из YAML",
      "Заменяет SmartAnts"
    ],
    correct: 1,
    explanation: "Плагин drawio позволяет показывать диаграммы в форматах xml/svg/png и поддерживает параметризацию файлов как шаблонов."
  },
  {
    id: 131,
    question: "Для чего используется Export to Excalidraw в DocHub?",
    options: [
      "Чтобы превратить архитектуру в PDF",
      "Чтобы экспортировать диаграммы в формат, пригодный для совместного редактирования в Excalidraw",
      "Для конвертации YAML в JSON",
      "Для отображения BPMN в 3D"
    ],
    correct: 1,
    explanation: "Export to Excalidraw позволяет экспортировать диаграммы DocHub в формат Excalidraw для совместной правки/редактирования."
  },
  {
    id: 132,
    question: "Каким образом DocHub рекомендует развивать архитектуру в больших Agile-командах?",
    options: [
      "Централизованно через одну команду архитекторов",
      "Децентрализованно — консолидируя описания из разных репозиториев",
      "Только через документы Word",
      "Через единый monorepo без разделения контекстов"
    ],
    correct: 1,
    explanation: "DocHub проектировался для децентрализованного управления архитектурой — команды работают автономно, а DocHub консолидирует описания из разных репозиториев."
  },
  {
    id: 133,
    question: "Что такое 'архитектурный фасад' (architectural facade) в DocHub?",
    options: [
      "Модуль аутентификации",
      "Публичный портал документации архитектуры (видимая 'витрина')",
      "Специальный тип метамодели",
      "CI-шаблон"
    ],
    correct: 1,
    explanation: "Архитектурный фасад — это портал/публичная витрина, где публикуется и презентуется архитектура."
  },
  {
    id: 134,
    question: "Какая лицензия самого проекта DocHub (Architecture as Code)?",
    options: ["GPLv3", "Apache License 2.0", "MIT", "Proprietary"],
    correct: 1,
    explanation: "Основной репозиторий DocHub распространяется под Apache License 2.0 (FOSS)."
  },
  {
    id: 135,
    question: "Что такое 'Time Machine' в RoadMap DocHub (коротко)?",
    options: [
      "Инструмент для отладки CI-скриптов",
      "Механизм навигации/просмотра истории и состояний архитектурных моделей",
      "Сервис резервного копирования",
      "Плагин для VSCode"
    ],
    correct: 1,
    explanation: "В RoadMap упоминается Time Machine — фича, ориентированная на работу с историей/состояниями моделей (time-travel по архитектуре)."
  },
  {
    id: 136,
    question: "Какие преимущества даёт публикация архитектуры в реестр пакетов (package registry)?",
    options: [
      "Автоматическое тестирование",
      "Версионирование и удобное распространение артефактов архитектуры между командами",
      "Уменьшение размера репозиториев",
      "Ускорение JSONata-запросов"
    ],
    correct: 1,
    explanation: "Реестр пакетов позволяет версионировать архитектурные артефакты и распространять их между проектами и командами."
  },
  {
    id: 137,
    question: "Куда сообщество DocHub советует писать о своём использовании DocHub (community-contribution)?",
    options: ["issues в GitHub", "писать на r.piontik@mail.ru и/или в сообщество", "форумы StackOverflow", "GitLab Tickets"],
    correct: 1,
    explanation: "В README указано, что информацию о компаниях/кейcах использования можно направлять на указанный почтовый адрес и делиться в сообществе (Telegram), как вклад в прозрачность FOSS."
  },
  {
    id: 138,
    question: "Что такое 'Web DocHub IDE' по RoadMap?",
    options: [
      "Веб-IDE для работы с архитектурным кодом в браузере",
      "Плагин для IntelliJ",
      "CLI-утилита",
      "Docker-образ"
    ],
    correct: 0,
    explanation: "Web DocHub IDE — это пункт RoadMap, отвечающий за web-основанную IDE для удобной работы с архитектурной кодовой базой."
  },
  {
    id: 139,
    question: "Какие компоненты обычно проверяются в автоматических валидациях (контроль консистентности) DocHub?",
    options: [
      "Только формат YAML",
      "Согласованность моделей, соблюдение правил метамодели и обнаружение проблем в описании",
      "Наличие тестов в репозитории",
      "Совместимость с браузерами"
    ],
    correct: 1,
    explanation: "Контроль консистентности нацелен на проверку архитектурных описаний: соответствие правилам, выявление ошибок и предупреждений."
  },
  {
    id: 140,
    question: "Как сообщество DocHub предпочитает общаться (официально указано в README)?",
    options: ["Slack", "Telegram-группа DocHubTeam", "Discord", "Mailing list"],
    correct: 1,
    explanation: "В README проекта указана Telegram-группа DocHubTeam как основной канал общения сообщества."
  },
  {
    id: 141,
    question: "Какая стратегия лицензирования/прозрачности введена начиная с релиза v3.13.1?",
    options: [
      "Полный переход на проприетарную лицензию",
      "Введение обязательства не скрывать использование DocHub (community-disclosure) при сохранении Apache-2.0)",
      "Переход на MIT",
      "Отмена лицензии"
    ],
    correct: 1,
    explanation: "Начиная с v3.13.1 введён community-взнос: обязательство не скрывать факт использования DocHub — при этом код остаётся под Apache-2.0."
  },
  {
    id: 142,
    question: "Какая цель проекта DocHub согласно README?",
    options: [
      "Стать PDF-редактором уровня Google",
      "Предоставить инструмент для развития архитектуры как кода (AaaC) и управления экосистемной архитектурой",
      "Создать CRM-систему",
      "Разработать новый язык программирования"
    ],
    correct: 1,
    explanation: "DocHub создан как инструмент 'Architecture as Code' — для управления архитектурой экосистем и поддержки децентрализованного развития."
  },
  {
    id: 143,
    question: "Какие методы публикации и распространения документации DocHub рекомендуются?",
    options: [
      "Публикация статических файлов через веб-сервер (nginx) или интеграция с GitLab Pages",
      "Только печать PDF",
      "Отправлять по email каждому участнику",
      "Использовать FTP"
    ],
    correct: 0,
    explanation: "После сборки /dist файлы рекомендуется публиковать через веб-сервер (например, nginx); также возможны CI/CD-варианты публикации."
  },
  {
    id: 144,
    question: "Какие ключевые элементы RoadMap указаны для 2024–2025 (важные расширения)?",
    options: [
      "MVP mutators, Process Designer (BPMN), Web DocHub IDE, SaaS version, Time Machine",
      "Только улучшение UI и перевод на Angular",
      "Полная миграция на Java",
      "Удаление поддержки PlantUML"
    ],
    correct: 0,
    explanation: "В RoadMap перечислены MVP mutators, Process Designer (BPMN), Web DocHub IDE, SaaS-версия, Time Machine и другие расширения."
  },
  {
    id: 145,
    question: "Где лучше всего искать рабочие примеры, инструкции и шаблоны для DocHub (как рекомендовано в README)?",
    options: ["Docker Hub", "DocHubExamples на GitHub и dochub.info", "npm registry", "Stack Overflow"],
    correct: 1,
    explanation: "README рекомендует изучать сайт документации (dochub.info) и репозиторий DocHubExamples на GitHub для практических примеров и шаблонов."
  },
  {
    id: 146,
    question: "Как в DocHub используется JSONata?",
    options: [
      "Для валидации JWT-токенов",
      "Для трансформации и выборки данных в схемах и workflow",
      "Для рендеринга UI-компонентов",
      "Для написания юнит-тестов"
    ],
    correct: 1,
    explanation: "JSONata в DocHub применяется для трансформации данных, выборки нужных фрагментов из JSON и подготовки данных для последующих шагов в workflow."
  },
  {
    id: 147,
    question: "Какой синтаксис используется для подстановки значений переменных в шаблонах DocHub?",
    options: [
      "{{variable}}",
      "[[variable]]",
      "%variable%",
      "<variable>"
    ],
    correct: 0,
    explanation: "DocHub использует шаблонизатор Mustache, где переменные обрамляются двойными фигурными скобками: `{{variable}}`."
  },
  {
    id: 148,
    question: "Какой основной принцип работы mutator в DocHub?",
    options: [
      "Он выполняет трансформацию данных на основе JSONata-выражений",
      "Он валидирует схему манифеста",
      "Он генерирует тестовую документацию",
      "Он добавляет визуальные элементы в диаграмму"
    ],
    correct: 0,
    explanation: "Mutator в DocHub применяет JSONata-выражения для трансформации данных в процессе workflow."
  },
  {
    id: 149,
    question: "Что произойдет, если в шаблоне Mustache указать несуществующую переменную?",
    options: [
      "Будет выброшена ошибка",
      "Будет подставлена пустая строка",
      "Подставится значение null",
      "Подставится текст {{variable}} без изменений"
    ],
    correct: 1,
    explanation: "Mustache в DocHub, как и в классической реализации, при отсутствии значения переменной подставляет пустую строку."
  },
  {
    id: 150,
    question: "Как объединяются JSONata и Mustache в workflow DocHub?",
    options: [
      "Сначала данные подготавливаются через JSONata, а потом шаблон рендерится через Mustache",
      "Mustache генерирует JSONata-запросы на лету",
      "Они не используются совместно",
      "Mustache обрабатывает JSONata-выражения как переменные"
    ],
    correct: 0,
    explanation: "В typical workflow: JSONata фильтрует или трансформирует данные, а Mustache использует результат для подстановки в шаблоны."
  },
  {
    id: 151,
    question: "Как проверить JSONata-выражение перед использованием в DocHub?",
    options: [
      "Встроенный тестировщик JSONata в DocHub",
      "Внешние песочницы JSONata (например, try.jsonata.org)",
      "С помощью интеграции с Node.js-модулем jsonata",
      "Все перечисленное"
    ],
    correct: 3,
    explanation: "JSONata можно проверять как встроенными средствами DocHub, так и во внешних песочницах или через модуль jsonata в Node.js."
  },
  {
    id: 152,
    question: "Какой пример использования mutator корректен?",
    options: [
      "Преобразование списка сервисов в отсортированный массив для последующего отображения",
      "Создание нового проекта в GitLab",
      "Генерация UI-дизайна на фронтенде",
      "Подключение новых API без кода"
    ],
    correct: 0,
    explanation: "Mutator используется для преобразования данных, например сортировки массива сервисов или добавления вычисляемых полей."
  },
  {
    id: 153,
    question: "Для чего используется ключевое слово `$map` в JSONata в контексте DocHub?",
    options: [
      "Для объединения нескольких массивов",
      "Для итерации по массиву и трансформации его элементов",
      "Для фильтрации по условию",
      "Для вызова внешнего API"
    ],
    correct: 1,
    explanation: "`$map` позволяет пройтись по массиву и изменить каждый элемент в соответствии с логикой, указанной в выражении."
  },
  {
    id: 154,
    question: "Как лучше отлаживать сложный workflow с использованием JSONata и mutators?",
    options: [
      "Добавлять промежуточные шаги логирования",
      "Использовать встроенные подсказки и валидатор DocHub",
      "Тестировать выражения в отдельных песочницах",
      "Все перечисленное"
    ],
    correct: 3,
    explanation: "Оптимальная отладка — сочетание логирования, встроенных подсказок DocHub и тестирования JSONata-выражений во внешних песочницах."
  },
  {
    id: 155,
    question: "Что вернёт этот JSONata-запрос: `$filter(services, function($s){$s.type='db'})`?",
    options: [
      "Первый сервис с типом 'db'",
      "Список всех сервисов с типом 'db'",
      "Количество сервисов с типом 'db'",
      "Ошибку из-за некорректного синтаксиса"
    ],
    correct: 1,
    explanation: "Функция `$filter` в JSONata возвращает массив всех элементов, удовлетворяющих условию. В данном случае — все сервисы с `type = 'db'`."
  },
  {
    id: 156,
    question: "В шаблоне Mustache указано: `{{service.name}}`. Что произойдёт, если в данных `service` не определён?",
    options: [
      "Подставится строка 'undefined'",
      "Подставится пустая строка",
      "Шаблон выдаст ошибку рендеринга",
      "Подставится 'null'"
    ],
    correct: 1,
    explanation: "Mustache по умолчанию подставляет пустую строку для несуществующих переменных."
  },
  {
    id: 157,
    question: "Как JSONata выражение `$map(services, function($s){$uppercase($s.name)})` преобразует массив `services`?",
    options: [
      "Создаст новый массив с названиями сервисов в верхнем регистре",
      "Удалит все сервисы с пустыми именами",
      "Объединит все названия сервисов в строку",
      "Сгруппирует сервисы по первой букве имени"
    ],
    correct: 0,
    explanation: "`$map` выполняет итерацию по массиву и возвращает новый массив. В этом случае — список имён в верхнем регистре."
  },
  {
    id: 158,
    question: "Какой будет результат рендеринга Mustache-шаблона `{{#services}}{{name}},{{/services}}` для массива `[ {name: 'A'}, {name: 'B'} ]`?",
    options: [
      "A,B,",
      "A,B",
      "name,name,",
      "Ошибка из-за некорректного синтаксиса"
    ],
    correct: 0,
    explanation: "Блок `{{#services}}...{{/services}}` повторяется для каждого элемента массива, подставляя его значения. Результат: 'A,B,'."
  },
  {
    id: 159,
    question: "Для чего используется `$merge([$a, $b])` в JSONata внутри mutator?",
    options: [
      "Для объединения массивов в строку",
      "Для объединения двух объектов в один",
      "Для сравнения значений",
      "Для клонирования объекта"
    ],
    correct: 1,
    explanation: "`$merge` объединяет объекты. Например, можно взять текущие параметры и добавить новые, формируя итоговую структуру."
  },
  {
    id: 160,
    question: "Как лучше протестировать сложное выражение JSONata перед использованием в mutator?",
    options: [
      "Встроенный предпросмотр DocHub",
      "Внешняя песочница try.jsonata.org",
      "Написать юнит-тест через Node.js с модулем jsonata",
      "Все перечисленное"
    ],
    correct: 3,
    explanation: "Оптимально комбинировать встроенные средства DocHub и внешние инструменты для надёжной отладки сложных выражений."
  },
  {
    id: 161,
    question: "В mutator используется выражение `$map(services, function($s){$s.port := 8080})`. Что произойдёт?",
    options: [
      "Будет создан новый массив с добавленным полем `port` = 8080 для каждого сервиса",
      "Только первый сервис получит порт 8080",
      "Произойдёт ошибка трансформации",
      "Заменится только массив, но не значения внутри объектов"
    ],
    correct: 0,
    explanation: "`:=` в JSONata создаёт или изменяет свойство объекта, возвращая обновлённый массив с добавленным значением `port`."
  },
  {
    id: 162,
    question: "Как можно объединить Mustache и JSONata для формирования текстового отчёта?",
    options: [
      "Сначала отобрать и трансформировать данные JSONata, затем подставить их в Mustache-шаблон",
      "Сначала рендерить Mustache, потом фильтровать JSONata",
      "Они не совместимы",
      "Нужен сторонний инструмент"
    ],
    correct: 0,
    explanation: "Рекомендованный подход: JSONata готовит данные, а Mustache выполняет шаблонизацию для финального отчёта."
  },
  {
    id: 163,
    question: "Для какой IDE доступен официальный плагин 'DocHub Architecture as Code'?",
    options: ["Eclipse", "JetBrains IDEs", "Visual Studio", "NetBeans"],
    correct: 1,
    explanation: "Официальный плагин DocHub Architecture as Code существует для JetBrains IDEs, включая IntelliJ IDEA."  
  },
  {
    id: 164,
    question: "Что представляет собой форк плагина 'DocHub Architecture as Code' на JetBrains Marketplace?",
    options: ["Интеграция с Eclipse", "Ветка с поддержкой дополнительных функций", "Версия для VSCode", "Устаревшая официальная версия"],
    correct: 1,
    explanation: "Существует форк плагина на Marketplace JetBrains с дополнительными функциями (или модификациями)."  
  },
  {
    id: 165,
    question: "Какие платформы для интеграции с DocHub ещё НЕ реализованы, но страница ожидает запросов (результат со страницы Integrations)?",
    options: ["API Nation и Task API", "Google Drive и Dropbox", "Box и OneDrive", "Chrome Extension и Gmail"],
    correct: 0,
    explanation: "Страницы интеграции с API Nation и Task API отмечены как нерелизованные — они созданы для оценки спроса."
  },
  {
    id: 166,
    question: "Какие, помимо API, инструменты встроены в DocHub для работы с документами (например, PDF)?",
    options: ["Text2API", "Online PDF-API converter", "Template-to-PDF API", "API from PDF tool"],
    correct: 3,
    explanation: "В DocHub доступен инструмент 'Create API from PDF' (online tool), позволяющий преобразовывать PDF в API."
  },
  {
    id: 167,
    question: "Какие хранилища и платформы поддерживает интеграция DocHub (через браузер-расширение и Google Workspace)?",
    options: [
      "Google Drive, Dropbox, Box, OneDrive",
      "Только Google Drive и Gmail",
      "Только Box и OneDrive",
      "Только FTP-серверы"
    ],
    correct: 0,
    explanation: "DocHub интегрируется с Google Drive, Gmail, Dropbox, Box, OneDrive через расширения и Google Workspace приложения."
  },
  {
    id: 168,
    question: "Что позволяет расширение DocHub-Chrome Extension?",
    options: [
      "Редактировать документы прямо в браузере",
      "Создать новый плагин",
      "Экспортировать JSONata выражения",
      "Запускать mutators"
    ],
    correct: 0,
    explanation: "Расширение для Chrome позволяет открывать, редактировать, подписывать и управлять документами прямо из браузера."
  },
  {
    id: 169,
    question: "Как называется npm-пакет с ядром функционала DocHub (рендеринг и поддержка языков)?",
    options: ["dochub-core", "dochubcore", "dochub-main", "architecture-core"],
    correct: 1,
    explanation: "Пакет называется dochubcore и содержит основные функции: поддержку Markdown, PlantUML, Mermaid, Swagger, AsyncAPI, SmartAnts и манифестов."
  },
  {
    id: 170,
    question: "DocHub поддерживает расширяемую метамодель — что это означает?",
    options: [
      "Метамодель фиксирована и неизменяема",
      "Можно модифицировать существующие и добавлять новые сущности",
      "Метамодель автоматически генерируется",
      "Она хранится только в GitLab"
    ],
    correct: 1,
    explanation: "Расширяемая метамодель позволяет модифицировать существующие сущности и создавать собственные."
  },
  {
    id: 171,
    question: "Где официально размещён код и RoadMap развития DocHub?",
    options: [
      "npm registry",
      "dochub.info",
      "GitHub (репозиторий DocHubTeam/DocHub)",
      "JetBrains Marketplace"
    ],
    correct: 2,
    explanation: "Официальный репозиторий DocHub находится на GitHub (DocHubTeam/DocHub) и содержит README, RoadMap и инструкции."
  }  
];

// Вопросы по DDD
export const dddQuestions = [
  {
    id: 1,
    question: "Что такое Domain-Driven Design (DDD)?",
    options: [
      "Метод проектирования баз данных",
      "Подход к разработке ПО, ставящий бизнес-домен в центр принятия решений",
      "Паттерн проектирования интерфейсов",
      "Методология управления проектами"
    ],
    correct: 1,
    explanation: "DDD - это подход к разработке программного обеспечения, который ставит бизнес-домен, а не базы данных или фреймворки, в центр принятия решений. Он требует глубокого сотрудничества инженеров с экспертами предметной области."
  },
  {
    id: 2,
    question: "Чем отличаются Core, Supporting и Generic поддомены?",
    options: [
      "Только сложностью реализации",
      "Core - уникальность бизнеса, Supporting - вспомогательные процессы, Generic - универсальные решения",
      "Только размером команды разработки",
      "Только технологическим стеком"
    ],
    correct: 1,
    explanation: "Core (основной) поддомен обеспечивает конкурентное преимущество компании. Supporting (вспомогательный) - поддерживает основную деятельность, но не дает преимуществ. Generic (универсальный) - решения, одинаковые для всех компаний."
  },
  {
    id: 3,
    question: "Что такое Bounded Context (Ограниченный контекст)?",
    options: [
      "Ограничение по времени выполнения",
      "Зона, где термины и бизнес-модель имеют чёткое, непротиворечивое значение",
      "Технические ограничения системы",
      "Ограничение доступа пользователей"
    ],
    correct: 1,
    explanation: "Bounded Context - это зона, в которой термины и бизнес-модель имеют чёткое, непротиворечивое значение. Например, 'Клиент' в отделе продаж и в бухгалтерии может иметь разные значения, поэтому нужны разные контексты."
  },
  {
    id: 4,
    question: "Что такое Ubiquitous Language (Единый язык)?",
    options: [
      "Язык программирования для домена",
      "Общий словарь терминов для команды и бизнеса без технического жаргона",
      "Международный стандарт документации",
      "Язык запросов к базе данных"
    ],
    correct: 1,
    explanation: "Ubiquitous Language - это общий язык бизнеса, состоящий только из понятий предметной области без технического жаргона. Он должен быть четко выраженным и согласованным без синонимов и неоднозначностей."
  },
  {
    id: 5,
    question: "Что такое Entity (Сущность) в DDD?",
    options: [
      "Неизменяемый объект без идентификации",
      "Объект с уникальным идентификатором и жизненным циклом",
      "Функция для обработки данных",
      "Таблица в базе данных"
    ],
    correct: 1,
    explanation: "Entity (Сущность) - это объект с уникальным идентификатором и жизненным циклом. Сущности изменяются со временем, но сохраняют свою идентичность на протяжении всего жизненного цикла."
  },
  {
    id: 6,
    question: "Что такое Value Object (Объект-значение)?",
    options: [
      "Объект с уникальным идентификатором",
      "Неизменяемый объект без идентичности, определяемый своими атрибутами",
      "Изменяемый объект для хранения данных",
      "Объект для работы с базой данных"
    ],
    correct: 1,
    explanation: "Value Object - это неизменяемый объект без идентичности, который определяется исключительно своими атрибутами. Примеры: адрес, деньги, координаты. Два объекта-значения равны, если равны все их атрибуты."
  },
  {
    id: 7,
    question: "Что такое Aggregate (Агрегат) в DDD?",
    options: [
      "Сумма всех данных в системе",
      "Кластер связанных сущностей и объектов-значений, обеспечивающий согласованность",
      "Отчет по данным",
      "Группа микросервисов"
    ],
    correct: 1,
    explanation: "Aggregate - это кластер связанных сущностей и объектов-значений, которые рассматриваются как единое целое для обеспечения согласованности данных. У агрегата есть Aggregate Root - главная сущность, через которую происходит доступ."
  },
  {
    id: 8,
    question: "Что такое Domain Service (Доменный сервис)?",
    options: [
      "Веб-сервис для внешних интеграций",
      "Сервис, содержащий доменную логику, которая не помещается в сущности или объекты-значения",
      "Сервис для работы с базой данных",
      "Сервис для аутентификации"
    ],
    correct: 1,
    explanation: "Domain Service содержит доменную логику, которая не может быть естественным образом размещена в сущностях или объектах-значениях. Например, логика, которая работает с несколькими агрегатами."
  },
  {
    id: 9,
    question: "В чем разница между поддоменом и ограниченным контекстом?",
    options: [
      "Это одно и то же",
      "Поддомен - 'что' мы моделируем, Контекст - 'как' мы это делаем",
      "Поддомен технический, контекст бизнесовый",
      "Различий нет, это синонимы"
    ],
    correct: 1,
    explanation: "Поддомен - это 'что' мы моделируем (область деятельности), а ограниченный контекст - 'как' мы это делаем (модель в коде). Один поддомен может быть реализован в нескольких контекстах."
  },
  {
    id: 10,
    question: "Какие паттерны интеграции контекстов существуют в DDD?",
    options: [
      "Только синхронные вызовы",
      "Partnership, Shared Kernel, Conformist, Anticorruption Layer, Open-host Service, Separate Ways",
      "Только через базу данных",
      "Только REST API"
    ],
    correct: 1,
    explanation: "В DDD существуют стратегические паттерны интеграции: Partnership (партнерство), Shared Kernel (общее ядро), Conformist (конформист), Anticorruption Layer (защитный слой), Open-host Service (открытый сервис), Separate Ways (разные пути)."
  },
  {
    id: 11,
    question: "Что такое Anticorruption Layer?",
    options: [
      "Защита от вирусов в коде",
      "Слой, который защищает модель контекста от влияния внешних систем",
      "Система логирования ошибок",
      "Защита базы данных"
    ],
    correct: 1,
    explanation: "Anticorruption Layer - это защитный слой, который изолирует внутреннюю модель домена от внешних систем, переводя внешние модели в термины локального контекста и предотвращая 'загрязнение' доменной модели."
  },
  {
    id: 12,
    question: "Что означает принцип 'Tell, Don't Ask' в DDD?",
    options: [
      "Не задавать вопросы пользователям",
      "Объекты должны выполнять операции, а не отдавать данные для обработки вовне",
      "Не использовать интерактивные интерфейсы",
      "Скрывать всю информацию от пользователей"
    ],
    correct: 1,
    explanation: "Принцип 'Tell, Don't Ask' означает, что вместо получения данных из объекта и их обработки снаружи, лучше сказать объекту, что нужно сделать. Это помогает инкапсулировать поведение внутри доменных объектов."
  },
  {
    id: 13,
    question: "Что такое Repository в DDD?",
    options: [
      "Git-репозиторий для кода",
      "Интерфейс для доступа к агрегатам, скрывающий детали хранения данных",
      "Класс для работы с файлами",
      "Система резервного копирования"
    ],
    correct: 1,
    explanation: "Repository в DDD - это интерфейс, который обеспечивает доступ к агрегатам, скрывая детали их хранения. Он представляет коллекцию объектов в памяти, абстрагируясь от конкретной технологии хранения."
  },
  {
    id: 14,
    question: "Что такое Domain Event (Доменное событие)?",
    options: [
      "Ошибка в работе системы",
      "Событие, которое произошло в домене и важно для бизнеса",
      "Событие пользовательского интерфейса",
      "Системное событие сервера"
    ],
    correct: 1,
    explanation: "Domain Event - это событие, которое произошло в предметной области и представляет интерес для бизнеса. Например, 'Заказ размещен', 'Платеж обработан'. Используется для связи между агрегатами и контекстами."
  },
  {
    id: 15,
    question: "В чем заключается идея Clean Architecture в контексте DDD?",
    options: [
      "Чистый код без комментариев",
      "Разделение на слои, где бизнес-логика независима от инфраструктуры",
      "Удаление неиспользуемого кода",
      "Стандартизация именования переменных"
    ],
    correct: 1,
    explanation: "Clean Architecture разделяет систему на слои, где внутренние слои (доменная логика) не зависят от внешних (UI, БД, фреймворки). Зависимости направлены от внешних слоев к внутренним, что обеспечивает гибкость и тестируемость."
  },
  {
    id: 16,
    question: "В каких случаях особенно целесообразно применять DDD?",
    options: [
      "Для простых CRUD-приложений",
      "Для проектов с простой логикой",
      "Для сложных, меняющихся во времени доменов",
      "Когда нет бизнес-аналитика"
    ],
    correct: 2,
    explanation: "DDD особенно подходит для сложных доменов, где простого CRUD-подхода недостаточно."
  },
  {
      "id": 17,
      "question": "Что такое Context Map в DDD?",
      "options": [
        "Диаграмма классов",
        "Карта взаимосвязей между ограниченными контекстами",
        "Схема базы данных",
        "Документирование REST API"
      ],
      "correct": 1,
      "explanation": "Context Map показывает, как разные ограниченные контексты взаимодействуют друг с другом, включая типы интеграции и зависимости."
    },
    {
      "id": 18,
      "question": "Какую роль играют Domain Experts в DDD?",
      "options": [
        "Пишут код для доменных объектов",
        "Определяют бизнес-логику и термины домена",
        "Тестируют систему",
        "Проектируют инфраструктуру"
      ],
      "correct": 1,
      "explanation": "Domain Experts — это эксперты предметной области, которые помогают разработчикам точно моделировать бизнес-логику и определять термины для единого языка."
    },
    {
      "id": 19,
      "question": "Что такое Event Storming?",
      "options": [
        "Метод визуализации бизнес-событий для выявления процессов и агрегатов",
        "Тестирование производительности системы",
        "Генерация кода на основе событий",
        "Системный лог мониторинга"
      ],
      "correct": 0,
      "explanation": "Event Storming — это collaborative метод, позволяющий выявить бизнес-события, процессы и агрегаты, используя визуальные нотации на стене или доске."
    },
    {
      "id": 20,
      "question": "Что такое Saga в контексте DDD и микросервисов?",
      "options": [
        "Модуль авторизации пользователей",
        "Паттерн управления долгими транзакциями между агрегатами",
        "Объект-значение для финансовых операций",
        "Тестовый сценарий для событий"
      ],
      "correct": 1,
      "explanation": "Saga — это последовательность локальных транзакций в разных агрегатах или микросервисах, координируемая для обеспечения согласованности данных без монолитных транзакций."
    },
    {
      "id": 21,
      "question": "Что такое Policy (Политика) в DDD?",
      "options": [
        "Правила безопасности системы",
        "Бизнес-правила, которые реагируют на события домена",
        "Политика конфиденциальности пользователей",
        "Конфигурация сетевого доступа"
      ],
      "correct": 1,
      "explanation": "Policy — это набор бизнес-правил, которые срабатывают при определенных событиях домена и инициируют действия или процессы в системе."
    },
    {
      "id": 22,
      "question": "Что такое Application Service в DDD?",
      "options": [
        "Сервис, предоставляющий UI для пользователей",
        "Слой, orchestrating доменные объекты и сервисы, не содержащий бизнес-логики",
        "Веб-сервис для внешней интеграции",
        "Объект-значение для хранения данных"
      ],
      "correct": 1,
      "explanation": "Application Service координирует действия доменных объектов и сервисов, управляет транзакциями и взаимодействием с инфраструктурой, но не содержит собственную бизнес-логику."
    },
    {
      "id": 23,
      "question": "Что такое Domain Layer в многослойной архитектуре?",
      "options": [
        "Слой для работы с базой данных",
        "Слой, содержащий все сущности, объекты-значения, агрегаты и доменные сервисы",
        "Слой интерфейса пользователя",
        "Слой интеграции с внешними API"
      ],
      "correct": 1,
      "explanation": "Domain Layer — это центральный слой системы, где сосредоточена вся бизнес-логика, включая сущности, объекты-значения, агрегаты и доменные сервисы."
    },
    {
      "id": 24,
      "question": "Что такое Factory в DDD?",
      "options": [
        "Инструмент сборки приложения",
        "Объект или сервис для создания сложных агрегатов и сущностей",
        "Сервис для логирования ошибок",
        "Класс для хранения данных"
      ],
      "correct": 1,
      "explanation": "Factory используется для создания сложных агрегатов или сущностей, инкапсулируя процесс их конструирования и обеспечивая целостность создаваемых объектов."
    },
    {
      "id": 25,
      "question": "В чем смысл разделения Read Model и Write Model (CQRS) в контексте DDD?",
      "options": [
        "Для ускорения работы базы данных",
        "Для разделения команд на изменение состояния и запросов на чтение",
        "Для работы с разными пользователями",
        "Для генерации отчетов"
      ],
      "correct": 1,
      "explanation": "CQRS (Command Query Responsibility Segregation) разделяет модель на команды, изменяющие состояние (Write Model), и запросы, получающие данные (Read Model), что повышает масштабируемость и упрощает согласованность."
    },
    {
        "id": 26,
        "question": "Что такое Anti-Corruption Layer в микросервисной архитектуре?",
        "options": [
          "Слой для кэширования данных",
          "Слой для изоляции внутренней модели от внешних сервисов",
          "Слой авторизации пользователей",
          "Слой логирования ошибок"
        ],
        "correct": 1,
        "explanation": "Anti-Corruption Layer позволяет взаимодействовать с внешними системами, переводя их модели в термины внутреннего контекста, чтобы не 'загрязнять' доменную модель."
      },
      {
        "id": 27,
        "question": "Какой принцип лежит в основе стратегического проектирования DDD?",
        "options": [
          "Выделение узких мест в коде",
          "Определение поддоменов и их взаимодействий",
          "Модульное тестирование",
          "Минимизация числа сервисов"
        ],
        "correct": 1,
        "explanation": "Стратегическое проектирование DDD фокусируется на выявлении поддоменов, определении Core, Supporting и Generic поддоменов и проектировании их взаимодействий."
      },
      {
        "id": 28,
        "question": "Что такое Layered Architecture в контексте DDD?",
        "options": [
          "Разделение на UI, Application, Domain, Infrastructure слои",
          "Разделение на микросервисы",
          "Разделение на классы и интерфейсы",
          "Разделение на репозитории и базы данных"
        ],
        "correct": 0,
        "explanation": "Layered Architecture подразумевает структурирование приложения на слои: Presentation/UI, Application, Domain и Infrastructure, где внутренние слои не зависят от внешних."
      },
      {
        "id": 29,
        "question": "Что такое Shared Kernel?",
        "options": [
          "Общее ядро между двумя Bounded Contexts",
          "Библиотека для тестирования",
          "Сервис авторизации",
          "База данных для нескольких контекстов"
        ],
        "correct": 0,
        "explanation": "Shared Kernel — это общий минимальный набор доменных элементов, используемых в нескольких ограниченных контекстах для согласованности и предотвращения дублирования."
      },
      {
        "id": 30,
        "question": "Что такое Conformist в интеграции контекстов?",
        "options": [
          "Контекст, полностью адаптирующийся к модели другого контекста",
          "Сервис для аутентификации пользователей",
          "Отдельная база данных для каждого контекста",
          "Шаблон проектирования интерфейсов"
        ],
        "correct": 0,
        "explanation": "Conformist — это паттерн, при котором один контекст принимает модель другого контекста без изменений, чтобы упростить интеграцию."
      },
      {
        "id": 31,
        "question": "Что такое Open-Host Service?",
        "options": [
          "Публичный API для взаимодействия с другим контекстом",
          "Сервис публикации новостей",
          "Внутренний инструмент для тестирования",
          "Сервис кэширования"
        ],
        "correct": 0,
        "explanation": "Open-Host Service предоставляет явный API для других контекстов, позволяя безопасно интегрироваться и избегать непреднамеренного влияния на внутреннюю модель."
      },
      {
        "id": 32,
        "question": "Что такое Separate Ways в интеграции контекстов?",
        "options": [
          "Контексты, которые не взаимодействуют между собой",
          "Сервис для авторизации",
          "Шаблон проектирования БД",
          "Паттерн логирования"
        ],
        "correct": 0,
        "explanation": "Separate Ways — это стратегия, когда контексты полностью независимы и не имеют общей модели или интеграции."
      },
      {
        "id": 33,
        "question": "Как DDD помогает управлять сложными доменами?",
        "options": [
          "Создает отдельную базу данных для каждого домена",
          "Позволяет моделировать бизнес-домен через понятия и события, управляя сложностью через контексты и агрегаты",
          "Использует только микросервисы",
          "Упрощает UI"
        ],
        "correct": 1,
        "explanation": "DDD управляет сложностью, выделяя поддомены, ограниченные контексты, агрегаты и события, обеспечивая ясность и согласованность модели."
      },
      {
        "id": 34,
        "question": "Что такое Consistency Boundary (Граница согласованности)?",
        "options": [
          "Граница между командами разработки",
          "Граница агрегата, внутри которой обеспечивается согласованность данных",
          "Граница базы данных",
          "Граница API"
        ],
        "correct": 1,
        "explanation": "Consistency Boundary определяет область, в пределах которой гарантируется согласованность данных, обычно вокруг агрегата."
      },
      {
        "id": 35,
        "question": "Что означает принцип 'Model First' в DDD?",
        "options": [
          "Сначала проектируем базу данных",
          "Сначала создаем доменную модель, а уже потом реализуем инфраструктуру",
          "Сначала пишем UI",
          "Сначала пишем интеграции"
        ],
        "correct": 1,
        "explanation": "Model First подразумевает, что разработка начинается с глубокой проработки доменной модели совместно с экспертами предметной области, а уже затем реализуются слои инфраструктуры и интерфейса."
      },
      {
        "id": 36,
        "question": "Какие типы доменных событий существуют в DDD?",
        "options": [
          "Internal, External, Integration",
          "CRUD, Read, Write",
          "UI, API, DB",
          "Error, Log, Alert"
        ],
        "correct": 0,
        "explanation": "Доменные события могут быть внутренними (Internal), внешними (External) и интеграционными (Integration), в зависимости от их области действия и влияния на систему."
      },
      {
        "id": 37,
        "question": "Что такое Domain Model Refactoring?",
        "options": [
          "Изменение структуры БД",
          "Изменение доменной модели без нарушения бизнес-логики",
          "Изменение UI",
          "Изменение API"
        ],
        "correct": 1,
        "explanation": "Domain Model Refactoring — это улучшение структуры модели, устранение дублирования и уточнение терминологии, при этом поведение бизнес-логики остается неизменным."
      },
      {
        "id": 38,
        "question": "Что такое Temporal Decoupling в DDD?",
        "options": [
          "Отложенная интеграция контекстов через события",
          "Запланированное время разработки",
          "Кэширование данных",
          "Асинхронная авторизация пользователей"
        ],
        "correct": 0,
        "explanation": "Temporal Decoupling означает, что контексты могут обмениваться событиями асинхронно, не требуя синхронного взаимодействия и строгой зависимости по времени."
      },
      {
        "id": 39,
        "question": "Что такое Domain-Driven Design tactical patterns?",
        "options": [
          "Сущности, объекты-значения, агрегаты, доменные сервисы, фабрики, репозитории",
          "Слои UI и Infrastructure",
          "Тестовые шаблоны",
          "Паттерны безопасности"
        ],
        "correct": 0,
        "explanation": "Tactical patterns — это конкретные элементы DDD, которые помогают организовать модель домена: сущности, объекты-значения, агрегаты, доменные сервисы, фабрики и репозитории."
      },
      {
        "id": 40,
        "question": "Почему важно ограничивать жизненный цикл агрегатов?",
        "options": [
          "Чтобы ускорить тестирование",
          "Чтобы управлять транзакционной согласованностью и целостностью данных",
          "Чтобы уменьшить количество сервисов",
          "Чтобы улучшить UI"
        ],
        "correct": 1,
        "explanation": "Ограничение жизненного цикла агрегатов обеспечивает транзакционную согласованность, предотвращает рассогласование данных и упрощает управление сложными объектами."
      },
      {
        "id": 41,
        "question": "Что такое Context Mapping Patterns?",
        "options": [
          "Паттерны визуализации зависимостей между контекстами",
          "Шаблоны тестирования",
          "Модели баз данных",
          "UI шаблоны"
        ],
        "correct": 0,
        "explanation": "Context Mapping Patterns — это паттерны, описывающие стратегические взаимодействия между ограниченными контекстами: Shared Kernel, Conformist, Anticorruption Layer и др."
      },
      {
        "id": 42,
        "question": "Что такое Domain-Driven Design Core Domain?",
        "options": [
          "Любой поддомен системы",
          "Ключевой поддомен, обеспечивающий конкурентное преимущество бизнеса",
          "Поддомен для инфраструктуры",
          "Поддомен для тестов"
        ],
        "correct": 1,
        "explanation": "Core Domain — это уникальный для бизнеса поддомен, который несет основную ценность и конкурентное преимущество, и требует максимального внимания при проектировании."
      },
      {
        "id": 43,
        "question": "Как DDD способствует уменьшению технического долга?",
        "options": [
          "Использует только микросервисы",
          "Четкое разделение контекстов и сосредоточение на бизнес-логике предотвращает хаотичную архитектуру и дублирование",
          "Пишет меньше кода",
          "Автоматически генерирует документацию"
        ],
        "correct": 1,
        "explanation": "DDD способствует уменьшению технического долга за счет строгого разделения контекстов, ясных моделей и концентрации на бизнес-ценности, что снижает дублирование и сложность кода."
      },
      {
        "id": 44,
        "question": "Что такое Domain Policy и как она отличается от Domain Service?",
        "options": [
          "Policy — правила реагирования на события, Service — логика, выполняемая по запросу",
          "Policy — UI элемент, Service — база данных",
          "Policy — микросервис, Service — объект-значение",
          "Нет разницы, это синонимы"
        ],
        "correct": 0,
        "explanation": "Policy — это реакция на доменные события (event-driven), а Domain Service выполняет операции по запросу и содержит бизнес-логику, которая не относится к конкретным сущностям."
      },
      {
        "id": 45,
        "question": "Что такое Domain Layer Isolation?",
        "options": [
          "Отделение UI и инфраструктуры от доменной логики",
          "Разделение команд разработчиков",
          "Отделение базы данных от сервера",
          "Отделение тестов от кода"
        ],
        "correct": 0,
        "explanation": "Domain Layer Isolation подразумевает, что доменный слой не зависит от UI, инфраструктуры и внешних сервисов, что делает бизнес-логику независимой и тестируемой."
      },
      {
          "id": 46,
          "question": "Что такое Domain Event Choreography?",
          "options": [
            "Оркестрация микросервисов через события без центрального контроллера",
            "Синхронный вызов REST API",
            "Тестирование событий",
            "Логирование событий"
          ],
          "correct": 0,
          "explanation": "Domain Event Choreography — это подход, при котором микросервисы или агрегаты взаимодействуют через события, реагируя на них самостоятельно, без централизованного оркестратора."
        },
        {
          "id": 47,
          "question": "Что такое Domain Event Orchestration?",
          "options": [
            "Централизованное управление событиями через оркестратор",
            "Асинхронная очередь сообщений",
            "Сервис логирования",
            "Event Storming"
          ],
          "correct": 0,
          "explanation": "Domain Event Orchestration подразумевает наличие центрального компонента, который управляет порядком обработки доменных событий между агрегатами или сервисами."
        },
        {
          "id": 48,
          "question": "Что такое Aggregate Root в DDD?",
          "options": [
            "Главная сущность агрегата через которую происходит доступ и изменения",
            "Любая сущность системы",
            "Объект-значение",
            "Сервис для интеграции"
          ],
          "correct": 0,
          "explanation": "Aggregate Root — это сущность агрегата, через которую осуществляется доступ к его внутренним объектам, гарантируя согласованность и инкапсуляцию."
        },
        {
          "id": 49,
          "question": "Что такое Event Sourcing?",
          "options": [
            "Хранение всех изменений состояния системы как последовательности событий",
            "Кэширование событий",
            "Асинхронная обработка событий",
            "Тестирование событий"
          ],
          "correct": 0,
          "explanation": "Event Sourcing предполагает, что текущее состояние агрегата восстанавливается из последовательности всех произошедших событий, обеспечивая полную историю изменений."
        },
        {
          "id": 50,
          "question": "Как Event Storming помогает выявить Bounded Contexts?",
          "options": [
            "Путем визуализации потоков событий и группирования связанных действий",
            "Путем написания тестов",
            "Путем генерации кода",
            "Путем анализа базы данных"
          ],
          "correct": 0,
          "explanation": "Event Storming позволяет наглядно выявить процессы и события, после чего можно группировать их по зонам ответственности и определять границы ограниченных контекстов."
        },
        {
          "id": 51,
          "question": "Что такое CQRS в контексте Event Sourcing?",
          "options": [
            "Разделение моделей чтения и записи, часто в сочетании с хранением событий для воспроизведения состояния",
            "Микросервис для логирования",
            "Сервис аутентификации",
            "Шаблон UI"
          ],
          "correct": 0,
          "explanation": "CQRS разделяет модели на Read и Write, а Event Sourcing обеспечивает возможность воспроизводить состояние через события, упрощая согласованность и масштабирование."
        },
        {
          "id": 52,
          "question": "Что такое Process Manager в DDD?",
          "options": [
            "Компонент, управляющий последовательностью действий между агрегатами при сложных процессах",
            "Объект-значение",
            "Сущность",
            "Сервис интеграции с внешними API"
          ],
          "correct": 0,
          "explanation": "Process Manager координирует долгие бизнес-процессы, реагируя на события и инициируя действия в агрегатах, обеспечивая правильный порядок и согласованность."
        },
        {
          "id": 53,
          "question": "Что такое Domain Event Versioning?",
          "options": [
            "Управление версиями событий для поддержания совместимости при эволюции модели",
            "Версионирование кода",
            "Версионирование базы данных",
            "Версионирование UI"
          ],
          "correct": 0,
          "explanation": "Domain Event Versioning позволяет безопасно изменять структуру событий, сохраняя совместимость с уже существующими обработчиками и историей событий."
        },
        {
          "id": 54,
          "question": "Что такое Tactical DDD Patterns?",
          "options": [
            "Паттерны, применяемые внутри Bounded Context для организации модели домена",
            "Паттерны UI",
            "Паттерны инфраструктуры",
            "Паттерны тестирования"
          ],
          "correct": 0,
          "explanation": "Tactical DDD Patterns включают Entity, Value Object, Aggregate, Domain Service, Repository, Factory и другие элементы, применяемые внутри ограниченного контекста."
        },
        {
          "id": 55,
          "question": "Что такое Strategic DDD Patterns?",
          "options": [
            "Паттерны, применяемые для разделения системы на поддомены и контексты и управления их взаимодействием",
            "Паттерны UI",
            "Паттерны тестирования",
            "Паттерны логирования"
          ],
          "correct": 0,
          "explanation": "Strategic DDD Patterns включают выделение поддоменов, определение Core/Supporting/Generic, контекстное картирование (Context Mapping) и интеграционные паттерны между контекстами."
        },
        {
          "id": 56,
          "question": "Что такое Domain Event Notification?",
          "options": [
            "Механизм уведомления заинтересованных компонентов о произошедшем событии",
            "Система логирования ошибок",
            "Асинхронная очередь сообщений",
            "UI уведомления"
          ],
          "correct": 0,
          "explanation": "Domain Event Notification информирует другие агрегаты, сервисы или контексты о событиях, которые произошли в домене, чтобы инициировать последующие действия."
        },
        {
          "id": 57,
          "question": "Что такое Eventual Consistency в DDD?",
          "options": [
            "Состояние системы станет согласованным спустя некоторое время после событий",
            "Мгновенная синхронизация всех данных",
            "Состояние базы данных в момент деплоя",
            "Тестирование согласованности"
          ],
          "correct": 0,
          "explanation": "Eventual Consistency означает, что после выполнения асинхронных операций и обработки событий система со временем приходит в согласованное состояние, без мгновенной синхронизации."
        },
        {
          "id": 58,
          "question": "Что такое Integration Event в DDD?",
          "options": [
            "Событие, предназначенное для коммуникации между разными контекстами или системами",
            "Событие UI",
            "Событие базы данных",
            "Внутреннее событие агрегата"
          ],
          "correct": 0,
          "explanation": "Integration Event используется для обмена информацией между ограниченными контекстами или внешними системами, обеспечивая безопасную интеграцию."
        },
        {
          "id": 59,
          "question": "Как Event Storming помогает выявить агрегаты?",
          "options": [
            "Группируя события и сущности по транзакционной согласованности",
            "Путем генерации кода",
            "Путем тестирования",
            "Путем анализа UI"
          ],
          "correct": 0,
          "explanation": "Во время Event Storming выявляют связанные события и объекты, после чего можно определить границы агрегатов для обеспечения согласованности данных."
        },
        {
          "id": 60,
          "question": "Что такое Process Orchestration в контексте DDD?",
          "options": [
            "Централизованное управление сложными бизнес-процессами через Process Manager или Orchestrator",
            "Асинхронная очередь сообщений",
            "Объект-значение",
            "Тестирование событий"
          ],
          "correct": 0,
          "explanation": "Process Orchestration управляет последовательностью действий между агрегатами и сервисами при сложных процессах, обеспечивая соблюдение бизнес-правил и целостности данных."
        }     
];

// Вопросы по архитектуре
export const architectureQuestions = [
  {
    id: 1,
    question: "Что такое архитектура программного обеспечения?",
    options: [
      "Только структура кода",
      "Фундаментальная структура системы, включающая компоненты, их отношения и принципы проектирования",
      "Диаграммы в документации",
      "Выбор технологий"
    ],
    correct: 1,
    explanation: "Архитектура ПО - это фундаментальная структура системы, включающая её компоненты, их отношения друг с другом и с окружением, а также принципы, которыми руководствуются при проектировании и развитии системы."
  },
  {
    id: 2,
    question: "В чем заключаются основные задачи архитектора ПО?",
    options: [
      "Только написание кода",
      "Принятие архитектурных решений, управление техническими рисками, обеспечение качественных атрибутов",
      "Только управление командой",
      "Только документирование"
    ],
    correct: 1,
    explanation: "Архитектор ПО принимает ключевые архитектурные решения, управляет техническими рисками, обеспечивает достижение качественных атрибутов системы (производительность, надежность, масштабируемость) и направляет техническое развитие проекта."
  },
  {
    "id": 3,
    "question": "Какой принцип обеспечивает разделение фронтенда и бэкенда в вашей архитектуре?",
    "options": [
      "Монолитная архитектура",
      "Клиент-сервер и REST API",
      "Событийно-ориентированная архитектура",
      "CQRS"
    ],
    "correct": 1,
    "explanation": "Фронтенд на React/React Native взаимодействует с backend через REST API, что реализует принцип клиент-сервер и разделение слоев."
  },
  {
    "id": 4,
    "question": "Для чего используется RabbitMQ в вашей архитектуре?",
    "options": [
      "Для кэширования данных",
      "Для управления очередями сообщений и событий между компонентами",
      "Для хранения аналитики",
      "Для генерации отчетов"
    ],
    "correct": 1,
    "explanation": "RabbitMQ обеспечивает асинхронную коммуникацию, регистрируя события и позволяя consumer'ам их обрабатывать."
  },
  {
    "id": 5,
    "question": "Как микросервисы на C# взаимодействуют с внешними системами?",
    "options": [
      "Прямо через SQL-запросы",
      "Через Web API и интеграционные интерфейсы",
      "Через frontend",
      "Через файловые системы"
    ],
    "correct": 1,
    "explanation": "Микросервисы используют Web API для интеграции с внешними системами, обеспечивая стандартизированный и безопасный доступ."
  },
  {
    "id": 6,
    "question": "Какая роль общей базы данных Microsoft SQL Server?",
    "options": [
      "Хранение всех логов и аналитических данных",
      "Хранение данных клиентов, договоров, транзакций и интеграция с вебом и сервисами",
      "Только хранение конфигурации",
      "Хранение UI-компонентов"
    ],
    "correct": 1,
    "explanation": "Общая база служит централизованным хранилищем для всех ключевых данных системы и предоставляет API для веба и сервисов."
  },
  {
    "id": 7,
    "question": "Для чего используется Percona в вашей архитектуре?",
    "options": [
      "Для основной базы веб-бэкенда",
      "Для хранения микросервисных данных",
      "Для хранения логов RabbitMQ",
      "Для аналитики"
    ],
    "correct": 0,
    "explanation": "Percona используется как база данных веб-бэкенда (PHP/Laravel), обеспечивая хранение данных сайта и мобильного приложения."
  },
  {
    "id": 8,
    "question": "Как микросервисы обеспечивают масштабируемость?",
    "options": [
      "Путем увеличения количества баз данных",
      "Путем горизонтального масштабирования отдельных сервисов",
      "Путем использования одного монолитного сервиса",
      "Путем кэширования UI"
    ],
    "correct": 1,
    "explanation": "Микросервисы масштабируются независимо друг от друга, что позволяет обрабатывать рост нагрузки без изменений всей системы."
  },
  {
    "id": 9,
    "question": "Как обеспечивается асинхронность в обработке событий?",
    "options": [
      "Через прямые SQL-запросы",
      "Через очереди RabbitMQ и consumer'ы",
      "Через REST API синхронные вызовы",
      "Через фронтенд"
    ],
    "correct": 1,
    "explanation": "RabbitMQ регистрирует события, которые асинхронно забираются consumer'ами для дальнейшей обработки без блокировки источника событий."
  },
  {
    "id": 10,
    "question": "Какая архитектурная модель используется для микросервисов?",
    "options": [
      "Монолит",
      "Событийно-ориентированная микросервисная архитектура",
      "MVC только",
      "Serverless Functions"
    ],
    "correct": 1,
    "explanation": "Микросервисы на C# используют событийно-ориентированную архитектуру, взаимодействуя через события и Web API."
  },
  {
    "id": 11,
    "question": "Для чего используется Blazor в сервисах на C#?",
    "options": [
      "Для фронтенда веба",
      "Для построения UI внутри микросервисов",
      "Для обработки событий RabbitMQ",
      "Для базы данных"
    ],
    "correct": 1,
    "explanation": "Blazor используется для создания пользовательского интерфейса в рамках микросервисов, особенно для внутренних админ-панелей."
  },
  {
    "id": 12,
    "question": "Почему у микросервисов своя база данных PostgreSQL?",
    "options": [
      "Для изоляции данных и независимости микросервисов",
      "Для совместного хранения с вебом",
      "Для кэширования RabbitMQ",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Каждый микросервис управляет своей базой, что обеспечивает автономность, упрощает масштабирование и уменьшает зависимости."
  },
  {
    "id": 13,
    "question": "Как веб-бэкенд на Laravel взаимодействует с микросервисами?",
    "options": [
      "Через SQL-запросы напрямую",
      "Через web API router и события",
      "Через файловую систему",
      "Через Power BI"
    ],
    "correct": 1,
    "explanation": "Web backend обращается к микросервисам через стандартизированный API router, а события обрабатываются через RabbitMQ."
  },
  {
    "id": 14,
    "question": "Для чего используется Bitrix24?",
    "options": [
      "Корпоративный портал и CRM",
      "Хранилище аналитики",
      "UI микросервисов",
      "Очередь сообщений"
    ],
    "correct": 0,
    "explanation": "Bitrix24 обеспечивает корпоративный портал, управление клиентами и интеграцию с другими системами компании."
  },
  {
    "id": 15,
    "question": "Для чего используется Infinity Call Center?",
    "options": [
      "Для управления телефонией и обработкой звонков",
      "Для логирования RabbitMQ",
      "Для мониторинга сервисов",
      "Для аналитики клиентов"
    ],
    "correct": 0,
    "explanation": "Infinity Call Center управляет телефонией, соединяется с CRM и другими компонентами для обработки звонков."
  },
  {
    "id": 16,
    "question": "Как обеспечивается интеграция между вебом и общей базой?",
    "options": [
      "Через прямой доступ к таблицам SQL Server",
      "Через API общей базы",
      "Через файлы CSV",
      "Через Power BI"
    ],
    "correct": 1,
    "explanation": "Веб и сервисы взаимодействуют с общей базой через API, что обеспечивает централизованный доступ и контроль согласованности данных."
  },
  {
    "id": 17,
    "question": "Для чего используются consumer'ы в RabbitMQ?",
    "options": [
      "Для обработки событий и выполнения бизнес-логики",
      "Для отправки email",
      "Для хранения данных",
      "Для кэширования"
    ],
    "correct": 0,
    "explanation": "Consumer'ы получают события из очередей RabbitMQ и выполняют соответствующие действия, обеспечивая асинхронность и масштабируемость."
  },
  {
    "id": 18,
    "question": "Как обеспечивается мониторинг состояния сервисов?",
    "options": [
      "Через Zabbix, Grafana и Power BI",
      "Через Access",
      "Через RabbitMQ напрямую",
      "Через SQL Server Reporting Services"
    ],
    "correct": 0,
    "explanation": "Сервисы и веб-модули мониторятся через Zabbix и визуализируются в Grafana/Power BI для контроля производительности и состояния."
  },
  {
    "id": 19,
    "question": "Почему используется отдельная база для микросервисов, а не общая?",
    "options": [
      "Для изоляции сервисов, уменьшения зависимостей и независимого масштабирования",
      "Для упрощения кода фронтенда",
      "Для хранения логов RabbitMQ",
      "Для UI"
    ],
    "correct": 0,
    "explanation": "Каждый микросервис управляет своей базой, что обеспечивает независимость, автономность и безопасность данных."
  },
  {
    "id": 20,
    "question": "Как обеспечивается отказоустойчивость микросервисов?",
    "options": [
      "Горизонтальное масштабирование, очереди сообщений, повторные попытки обработки событий",
      "Через Power BI",
      "Через SQL Server Agent",
      "Через Access frontend"
    ],
    "correct": 0,
    "explanation": "Архитектура микросервисов использует механизмы повторных попыток, очереди и горизонтальное масштабирование для устойчивости к сбоям."
  },
  {
    "id": 21,
    "question": "Для чего используются хранимые процедуры в общей базе?",
    "options": [
      "Для реализации бизнес-логики и оптимизации сложных операций с данными",
      "Для кэширования RabbitMQ",
      "Для UI микросервисов",
      "Для мониторинга"
    ],
    "correct": 0,
    "explanation": "Хранимые процедуры обеспечивают выполнение сложных бизнес-операций непосредственно на уровне SQL Server, повышая производительность и консистентность."
  },
  {
    "id": 22,
    "question": "Как обеспечивается взаимодействие с внешними API?",
    "options": [
      "Через микросервисы на C# и web API router",
      "Прямо через фронтенд",
      "Через Access",
      "Через SQL Server"
    ],
    "correct": 0,
    "explanation": "Микросервисы и backend используют web API router для интеграции с внешними системами, обеспечивая стандартизированный и безопасный доступ."
  },
  {
    "id": 23,
    "question": "Как обеспечивается логирование и трассировка событий в системе?",
    "options": [
      "Через Zabbix и встроенные механизмы логирования сервисов",
      "Через Access frontend",
      "Через Power BI",
      "Через PostgreSQL только"
    ],
    "correct": 0,
    "explanation": "Сервисы логируют события и состояния, а Zabbix используется для мониторинга и алертинга при сбоях или аномалиях."
  },
  {
    "id": 24,
    "question": "Что такое Event-Driven Architecture в контексте вашей системы?",
    "options": [
      "Архитектура, где компоненты взаимодействуют через события и очереди сообщений",
      "Архитектура монолита",
      "Только REST API",
      "Только синхронные запросы"
    ],
    "correct": 0,
    "explanation": "События регистрируются в RabbitMQ и обрабатываются consumer'ами, что позволяет компонентам работать асинхронно и быть слабо связанными."
  },
  {
    "id": 25,
    "question": "Как обеспечивается консистентность данных между микросервисами и общей базой?",
    "options": [
      "Через API общей базы и событийные механизмы RabbitMQ",
      "Через прямое подключение к PostgreSQL",
      "Через фронтенд",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Согласованность достигается через API общей базы и обработку событий через RabbitMQ, что гарантирует актуальность данных между компонентами."
  },
  {
    "id": 26,
    "question": "Как обеспечивается интеграция с уведомлениями (push, SMS, email) в системе?",
    "options": [
      "Микросервисы генерируют события, которые обрабатываются отдельными сервисами уведомлений",
      "Через фронтенд напрямую",
      "Через Access",
      "Через SQL Server"
    ],
    "correct": 0,
    "explanation": "Отдельные микросервисы получают события и рассылают уведомления в разные каналы, обеспечивая асинхронность и масштабируемость."
  },
  {
    "id": 27,
    "question": "Для чего используется Power BI в вашей архитектуре?",
    "options": [
      "Для визуализации данных и построения аналитических отчетов",
      "Для хранения основной бизнес-логики",
      "Для очередей сообщений",
      "Для фронтенда сайта"
    ],
    "correct": 0,
    "explanation": "Power BI подключается к базам данных и источникам данных для построения аналитических панелей и отчетов для бизнеса."
  },
  {
    "id": 28,
    "question": "Как обеспечивается масштабирование фронтенда?",
    "options": [
      "Через React/React Native, CDN и распределение нагрузки",
      "Через PostgreSQL",
      "Через RabbitMQ",
      "Через SQL Server"
    ],
    "correct": 0,
    "explanation": "Фронтенд масштабируется за счет использования React, React Native, CDN для статики и балансировщиков нагрузки для обработки большого числа пользователей."
  },
  {
    "id": 29,
    "question": "Что такое API Router в вашем веб-бэкенде?",
    "options": [
      "Компонент, который маршрутизирует запросы от фронтенда к нужным микросервисам",
      "Очередь сообщений RabbitMQ",
      "Фронтенд компонент",
      "Система мониторинга"
    ],
    "correct": 0,
    "explanation": "API Router направляет запросы от фронтенда к соответствующим микросервисам и обеспечивает согласованность маршрутов."
  },
  {
    "id": 30,
    "question": "Как микросервисы обрабатывают внешние интеграции?",
    "options": [
      "Через Web API и event-driven подход",
      "Через прямые SQL-запросы",
      "Через Access frontend",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Микросервисы используют Web API для синхронного доступа и события для асинхронной интеграции с внешними системами."
  },
  {
    "id": 31,
    "question": "Для чего используется Microsoft Access в вашей архитектуре?",
    "options": [
      "Для внутреннего интерфейса и работы с общей базой",
      "Для фронтенда сайта",
      "Для очередей RabbitMQ",
      "Для аналитики Power BI"
    ],
    "correct": 0,
    "explanation": "Microsoft Access предоставляет локальный интерфейс для работы с общей базой, облегчая управление данными для сотрудников."
  },
  {
    "id": 32,
    "question": "Как обеспечивается отказоустойчивость общей базы данных?",
    "options": [
      "Через репликацию, бэкапы и управление транзакциями",
      "Через фронтенд",
      "Через микросервисы PostgreSQL",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Для общей базы используется репликация и резервное копирование, что позволяет обеспечивать отказоустойчивость и консистентность данных."
  },
  {
    "id": 33,
    "question": "Что такое Consumer в контексте RabbitMQ?",
    "options": [
      "Компонент, который забирает события из очередей и обрабатывает их",
      "Очередь сообщений",
      "Фронтенд компонент",
      "Сервис мониторинга"
    ],
    "correct": 0,
    "explanation": "Consumer получает события из очередей RabbitMQ и выполняет бизнес-логику асинхронно, не блокируя источник события."
  },
  {
    "id": 34,
    "question": "Почему микросервисы используют PostgreSQL вместо общей базы?",
    "options": [
      "Для автономности, изоляции данных и независимого масштабирования",
      "Для кэширования RabbitMQ",
      "Для UI",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Независимые базы данных микросервисов обеспечивают автономность и позволяют каждому сервису эволюционировать без влияния на других."
  },
  {
    "id": 35,
    "question": "Что такое Event-Driven Integration?",
    "options": [
      "Интеграция компонентов через события и очереди сообщений",
      "Прямая интеграция через SQL-запросы",
      "Через фронтенд",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Event-Driven Integration позволяет системам обмениваться событиями асинхронно, обеспечивая слабую связанность и масштабируемость."
  },
  {
    "id": 36,
    "question": "Как обеспечивается масштабирование RabbitMQ?",
    "options": [
      "Через кластеры, зеркалирование очередей и балансировку нагрузки",
      "Через Power BI",
      "Через PostgreSQL",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "RabbitMQ масштабируется с помощью кластеров и зеркалирования, что позволяет обрабатывать большие объемы сообщений."
  },
  {
    "id": 37,
    "question": "Для чего используется Grafana?",
    "options": [
      "Для визуализации метрик и состояния системы",
      "Для очередей сообщений",
      "Для базы данных",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Grafana визуализирует метрики мониторинга, собираемые из сервисов и систем, облегчая анализ производительности."
  },
  {
    "id": 38,
    "question": "Что такое Bounded Context в вашей архитектуре?",
    "options": [
      "Область, где компоненты имеют согласованную модель данных и бизнес-логики",
      "Отдельная база данных",
      "Очередь RabbitMQ",
      "Power BI отчет"
    ],
    "correct": 0,
    "explanation": "Bounded Context определяет границы согласованной модели, что помогает управлять сложностью системы и изоляцией микросервисов."
  },
  {
    "id": 39,
    "question": "Как обеспечивается интеграция с телефонией?",
    "options": [
      "Через Infinity Call Center API и события",
      "Через Access frontend",
      "Через Power BI",
      "Через PostgreSQL"
    ],
    "correct": 0,
    "explanation": "Система обрабатывает события телефонии через API Infinity Call Center, интегрируя звонки с вебом и микросервисами."
  },
  {
    "id": 40,
    "question": "Для чего используется мониторинг Zabbix?",
    "options": [
      "Для отслеживания состояния сервисов, серверов и инфраструктуры",
      "Для очередей RabbitMQ",
      "Для Power BI",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Zabbix мониторит работу сервисов и серверов, генерирует алерты при сбоях и позволяет оперативно реагировать на проблемы."
  },
  {
    "id": 41,
    "question": "Что такое API-first подход в вашей архитектуре?",
    "options": [
      "Проектирование API как первичного интерфейса для всех клиентов и сервисов",
      "Создание базы данных перед логикой",
      "Мониторинг через Zabbix",
      "Front-end разработка сначала"
    ],
    "correct": 0,
    "explanation": "API-first означает, что все интеграции строятся через API, обеспечивая стандартизированный доступ для веба, микросервисов и внешних систем."
  },
  {
    "id": 42,
    "question": "Как обеспечивается безопасный доступ к данным?",
    "options": [
      "Через аутентификацию, авторизацию, роли и права в сервисах и API",
      "Через прямые SQL-запросы фронтенда",
      "Через Access",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Безопасность достигается через механизмы аутентификации и авторизации, разграничение ролей и контроль доступа к API и базам данных."
  },
  {
    "id": 43,
    "question": "Как обеспечивается согласованность данных при асинхронной обработке событий?",
    "options": [
      "Через event-driven подход и eventual consistency",
      "Через прямые SQL-запросы",
      "Через Access frontend",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Event-driven архитектура с eventual consistency позволяет системе быть согласованной со временем, даже при асинхронной обработке событий."
  },
  {
    "id": 44,
    "question": "Для чего используется PostgreSQL в микросервисах?",
    "options": [
      "Для хранения локальных данных сервисов и обеспечения автономности",
      "Для общей базы данных",
      "Для Power BI",
      "Для RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Каждый микросервис хранит свои данные в PostgreSQL, что обеспечивает изоляцию, независимое масштабирование и автономность."
  },
  {
    "id": 45,
    "question": "Что такое Service-Oriented Integration?",
    "options": [
      "Интеграция компонентов через сервисы и API с явным контрактом",
      "Прямая интеграция через SQL",
      "Через фронтенд",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Service-Oriented Integration строится на API и сервисах, что обеспечивает стандартизированную и управляемую интеграцию между компонентами."
  },
  {
    "id": 46,
    "question": "Как обеспечивается масштабирование веб-бэкенда на Laravel?",
    "options": [
      "Через балансировщики нагрузки, горизонтальное масштабирование и кэширование",
      "Через Power BI",
      "Через Access",
      "Через PostgreSQL"
    ],
    "correct": 0,
    "explanation": "Web backend масштабируется горизонтально с использованием балансировщиков нагрузки и кэширования для обработки роста числа пользователей."
  },
  {
    "id": 47,
    "question": "Что такое CQRS в контексте вашей архитектуры?",
    "options": [
      "Разделение моделей чтения и записи, часто в сочетании с event-driven подходом",
      "Монолитная база данных",
      "Сервис логирования",
      "Access frontend"
    ],
    "correct": 0,
    "explanation": "CQRS разделяет операции чтения и записи, что повышает масштабируемость и упрощает обработку событий в системе."
  },
  {
    "id": 48,
    "question": "Как обеспечивается отказоустойчивость микросервисов при сбое одного из сервисов?",
    "options": [
      "Через очереди RabbitMQ, повторные попытки и горизонтальное масштабирование",
      "Через Power BI",
      "Через Access",
      "Через фронтенд"
    ],
    "correct": 0,
    "explanation": "Очереди сообщений и повторные попытки обработки событий позволяют системе работать даже при сбое отдельных микросервисов."
  },
  {
    "id": 49,
    "question": "Для чего используются кэширование и очереди сообщений в вашей архитектуре?",
    "options": [
      "Для повышения производительности и уменьшения нагрузки на базы данных",
      "Для построения отчетов Power BI",
      "Для фронтенда",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Кэширование уменьшает количество обращений к базе данных, а очереди сообщений позволяют асинхронно обрабатывать события, повышая производительность системы."
  },
  {
    "id": 50,
    "question": "Как обеспечивается аналитика большого объёма данных?",
    "options": [
      "Через интеграцию с Power BI и подключение к общей базе",
      "Через фронтенд сайта",
      "Через RabbitMQ",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Power BI подключается к общей базе и другим источникам, позволяя строить отчеты и визуализации для анализа большого объема данных."
  },
  {
    "id": 51,
    "question": "Что такое horizontal scaling в контексте вашей архитектуры?",
    "options": [
      "Добавление новых экземпляров сервисов или фронтенда для увеличения производительности",
      "Увеличение мощности одного сервера",
      "Увеличение размера базы данных",
      "Масштабирование Power BI"
    ],
    "correct": 0,
    "explanation": "Горизонтальное масштабирование добавляет новые экземпляры компонентов, распределяя нагрузку и повышая отказоустойчивость."
  },
  {
    "id": 52,
    "question": "Как обеспечивается безопасность передачи данных между сервисами и внешними системами?",
    "options": [
      "Через HTTPS, токены и аутентификацию API",
      "Через прямой SQL-запрос",
      "Через Access",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Использование HTTPS и API-токенов обеспечивает безопасный и аутентифицированный доступ между сервисами и внешними системами."
  },
  {
    "id": 53,
    "question": "Как обеспечивается консистентность данных при асинхронной обработке RabbitMQ?",
    "options": [
      "Через eventual consistency и механизмы подтверждения сообщений",
      "Через прямое обновление фронтенда",
      "Через Access",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Eventual consistency и подтверждение обработки сообщений гарантируют, что система достигнет согласованного состояния после всех операций."
  },
  {
    "id": 54,
    "question": "Для чего используется зеркалирование очередей в RabbitMQ?",
    "options": [
      "Для обеспечения отказоустойчивости и надежности доставки сообщений",
      "Для кэширования данных",
      "Для построения отчетов",
      "Для UI микросервисов"
    ],
    "correct": 0,
    "explanation": "Зеркалирование очередей позволяет сохранять копии сообщений на нескольких узлах, обеспечивая надежность при сбоях."
  },
  {
    "id": 55,
    "question": "Что такое read/write separation в архитектуре баз данных?",
    "options": [
      "Разделение операций чтения и записи для повышения производительности и масштабируемости",
      "Создание двух баз данных",
      "Использование Access для чтения",
      "Использование Power BI для записи"
    ],
    "correct": 0,
    "explanation": "Read/write separation позволяет направлять операции записи в основной сервер, а чтение — в реплики, что повышает производительность и масштабируемость."
  },
  {
    "id": 56,
    "question": "Как обеспечивается интеграция между аналитикой и операционной системой?",
    "options": [
      "Через ETL-процессы и API общей базы данных",
      "Через прямое редактирование таблиц PostgreSQL",
      "Через Access",
      "Через фронтенд сайта"
    ],
    "correct": 0,
    "explanation": "ETL-процессы и API позволяют получать данные из операционных систем для аналитики в Power BI и других инструментах."
  },
  {
    "id": 57,
    "question": "Для чего используются хранимые процедуры в общей базе при масштабировании системы?",
    "options": [
      "Для оптимизации выполнения сложных запросов и бизнес-логики на уровне базы данных",
      "Для очередей сообщений",
      "Для Access",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Хранимые процедуры выполняют сложные операции непосредственно в базе, снижая нагрузку на приложения и улучшая производительность при масштабировании."
  },
  {
    "id": 58,
    "question": "Что такое Saga pattern в микросервисной архитектуре?",
    "options": [
      "Оркестрация долгих бизнес-транзакций через последовательность локальных транзакций",
      "Тип базы данных",
      "Событийная очередь",
      "Фронтенд паттерн"
    ],
    "correct": 0,
    "explanation": "Saga pattern позволяет разбивать долгие бизнес-транзакции на серию локальных транзакций с возможностью компенсации при сбое, обеспечивая согласованность данных."
  },
  {
    "id": 59,
    "question": "Для чего используется Circuit Breaker в микросервисах?",
    "options": [
      "Для защиты сервисов от каскадных сбоев и временного отключения проблемных сервисов",
      "Для логирования событий",
      "Для хранения данных",
      "Для фронтенда"
    ],
    "correct": 0,
    "explanation": "Circuit Breaker временно блокирует обращения к сервису, если он нестабилен, предотвращая каскадные сбои и повышая отказоустойчивость системы."
  },
  {
    "id": 60,
    "question": "Что такое API Gateway и зачем он нужен?",
    "options": [
      "Централизованный вход для всех внешних и внутренних API-запросов с маршрутизацией, аутентификацией и агрегацией",
      "База данных микросервисов",
      "Очередь сообщений",
      "Мониторинг"
    ],
    "correct": 0,
    "explanation": "API Gateway упрощает доступ к микросервисам, управляет аутентификацией, маршрутизацией и агрегацией ответов, предоставляя единый вход в систему."
  },
  {
    "id": 61,
    "question": "Что такое Anti-Corruption Layer (ACL) в интеграции систем?",
    "options": [
      "Слой, который защищает внутреннюю модель от внешних изменений и несовместимостей",
      "Система мониторинга",
      "Очередь RabbitMQ",
      "UI фронтенда"
    ],
    "correct": 0,
    "explanation": "ACL изолирует внутренние модели от внешних систем, трансформируя данные и предотвращая «загрязнение» доменной логики внешними структурами."
  },
  {
    "id": 62,
    "question": "Что такое CQRS и как он используется в архитектуре микросервисов?",
    "options": [
      "Разделение моделей чтения и записи для повышения масштабируемости и упрощения обработки событий",
      "Монолитная архитектура",
      "Event-driven очередь",
      "Front-end паттерн"
    ],
    "correct": 0,
    "explanation": "CQRS позволяет иметь отдельные модели для чтения и записи, улучшая производительность, упрощая масштабирование и обработку событий."
  },
  {
    "id": 63,
    "question": "Для чего используется Sharding в базе данных?",
    "options": [
      "Для горизонтального разделения данных между несколькими серверами для повышения масштабируемости",
      "Для создания резервной копии",
      "Для очередей RabbitMQ",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Sharding позволяет распределять данные между несколькими узлами, уменьшая нагрузку на отдельный сервер и повышая производительность."
  },
  {
    "id": 64,
    "question": "Что такое Event Sourcing?",
    "options": [
      "Хранение всех изменений состояния системы как последовательности событий",
      "Хранение только текущего состояния",
      "Очередь RabbitMQ",
      "Мониторинг"
    ],
    "correct": 0,
    "explanation": "Event Sourcing фиксирует каждое изменение состояния как отдельное событие, позволяя восстановить состояние системы в любой момент и строить аудит."
  },
  {
    "id": 65,
    "question": "Для чего применяются Health Checks в микросервисах?",
    "options": [
      "Для проверки доступности сервисов и их компонентов",
      "Для логирования сообщений",
      "Для построения отчетов",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Health Checks проверяют состояние сервисов, базы данных и внешних интеграций, помогая системе реагировать на сбои и поддерживать отказоустойчивость."
  },
  {
    "id": 66,
    "question": "Что такое eventual consistency?",
    "options": [
      "Подход, при котором данные станут согласованными через некоторое время после обновления",
      "Мгновенная синхронная консистентность",
      "Кэширование RabbitMQ",
      "Front-end синхронизация"
    ],
    "correct": 0,
    "explanation": "Eventual consistency используется в распределенных системах, когда данные могут быть временно несогласованными, но с течением времени придут в согласованное состояние."
  },
  {
    "id": 67,
    "question": "Для чего применяются индексы в базах данных?",
    "options": [
      "Для ускорения поиска и выборки данных",
      "Для резервного копирования",
      "Для очередей сообщений",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Индексы позволяют значительно ускорить операции поиска и выборки данных, повышая производительность запросов."
  },
  {
    "id": 68,
    "question": "Что такое Separation of Concerns в архитектуре ПО?",
    "options": [
      "Разделение системы на независимые слои и модули с четкими обязанностями",
      "Объединение всех функций в один модуль",
      "Только фронтенд паттерн",
      "Только база данных"
    ],
    "correct": 0,
    "explanation": "Separation of Concerns помогает уменьшить связность компонентов, облегчить поддержку и масштабирование системы."
  },
  {
    "id": 69,
    "question": "Что такое CQRS в сочетании с Event Sourcing?",
    "options": [
      "Использование отдельных моделей чтения и записи вместе с хранением всех изменений как событий",
      "Монолитная база данных",
      "Только REST API",
      "Фронтенд паттерн"
    ],
    "correct": 0,
    "explanation": "CQRS + Event Sourcing позволяет масштабировать чтение и запись, хранить аудит событий и восстанавливать состояние системы по событиям."
  },
  {
    "id": 70,
    "question": "Для чего используется индексирование JSON и XML в базах данных?",
    "options": [
      "Для быстрого поиска и фильтрации структурированных данных внутри полей",
      "Для очередей RabbitMQ",
      "Для Power BI",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Индексирование JSON/XML позволяет ускорить операции поиска по вложенным структурам данных, повышая производительность запросов."
  },
  {
    "id": 71,
    "question": "Что такое idempotency в API?",
    "options": [
      "Свойство запроса давать один и тот же результат при повторных вызовах",
      "Тип базы данных",
      "Событийная очередь",
      "Мониторинг"
    ],
    "correct": 0,
    "explanation": "Idempotent API гарантирует, что повторное выполнение запроса не приведет к нежелательным последствиям или дублированию данных."
  },
  {
    "id": 72,
    "question": "Для чего применяются компрессия и сжатие данных в архитектуре микросервисов?",
    "options": [
      "Для уменьшения объема передаваемых данных и ускорения передачи по сети",
      "Для Power BI",
      "Для очередей RabbitMQ",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Сжатие данных снижает нагрузку на сеть и ускоряет обмен данными между сервисами, особенно при больших объемах информации."
  },
  {
    "id": 73,
    "question": "Что такое Saga Orchestration vs Choreography?",
    "options": [
      "Orchestration — централизованное управление транзакциями, Choreography — распределенная обработка событий",
      "Orchestration — база данных, Choreography — очередь сообщений",
      "Orchestration — фронтенд, Choreography — backend",
      "Orchestration — RabbitMQ, Choreography — Power BI"
    ],
    "correct": 0,
    "explanation": "Orchestration использует центральный сервис для управления транзакциями, а Choreography распределяет логику через события между сервисами."
  },
  {
    "id": 74,
    "question": "Как обеспечивается наблюдаемость (observability) микросервисов?",
    "options": [
      "Через метрики, логи и трассировки (metrics, logs, traces)",
      "Через Power BI",
      "Через Access",
      "Через фронтенд"
    ],
    "correct": 0,
    "explanation": "Observability позволяет отслеживать внутреннее состояние системы с помощью метрик, логов и распределённых трассировок, что важно для диагностики и отладки."
  },
  {
    "id": 75,
    "question": "Что такое Backpressure в event-driven системах?",
    "options": [
      "Механизм управления потоком сообщений при высокой нагрузке",
      "Свойство базы данных",
      "Мониторинг через Zabbix",
      "Фронтенд паттерн"
    ],
    "correct": 0,
    "explanation": "Backpressure предотвращает переполнение очередей сообщений, позволяя системе регулировать скорость обработки событий и избегать сбоев."
  },
  {
    "id": 76,
    "question": "Для чего используются Retry и Dead Letter Queue в RabbitMQ?",
    "options": [
      "Для повторной обработки неудачных сообщений и изоляции неудачных сообщений",
      "Для кэширования данных",
      "Для Power BI",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Retry позволяет повторно обрабатывать сообщения при временных сбоях, а Dead Letter Queue сохраняет сообщения, которые не удалось обработать, для дальнейшего анализа."
  },
  {
    "id": 77,
    "question": "Что такое Load Balancer и зачем он нужен?",
    "options": [
      "Для распределения нагрузки между несколькими экземплярами сервисов или серверов",
      "Для очередей сообщений",
      "Для Power BI",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Load Balancer распределяет входящие запросы, повышая доступность, отказоустойчивость и масштабируемость системы."
  },
  {
    "id": 78,
    "question": "Для чего используется индексация и оптимизация запросов в MS SQL и PostgreSQL?",
    "options": [
      "Для ускорения выполнения запросов и снижения нагрузки на базу",
      "Для фронтенда",
      "Для Power BI",
      "Для RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Оптимизация запросов и правильная индексация позволяют ускорить выборку данных и снизить нагрузку на сервер базы данных."
  },
  {
    "id": 79,
    "question": "Как обеспечивается мониторинг производительности микросервисов?",
    "options": [
      "Через метрики, логи, трассировки и Zabbix",
      "Через Access",
      "Через Power BI только",
      "Через SQL Server"
    ],
    "correct": 0,
    "explanation": "Метрики, логи и трассировки вместе с Zabbix позволяют отслеживать производительность и выявлять узкие места."
  },
  {
    "id": 80,
    "question": "Для чего используется кэширование на уровне приложения и базы данных?",
    "options": [
      "Для снижения нагрузки и ускорения доступа к часто используемым данным",
      "Для резервного копирования",
      "Для Power BI",
      "Для RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Кэширование уменьшает количество обращений к базам данных и ускоряет отклик системы."
  },
  {
    "id": 81,
    "question": "Что такое Hot/Cold path в аналитике данных?",
    "options": [
      "Hot path — быстрые данные для оперативного принятия решений, Cold path — исторические данные для аналитики",
      "Hot path — горячая база, Cold path — резервная база",
      "Hot path — RabbitMQ очередь, Cold path — Power BI",
      "Hot path — фронтенд, Cold path — backend"
    ],
    "correct": 0,
    "explanation": "Разделение потоков данных позволяет оптимизировать обработку: быстрые данные обрабатываются мгновенно, исторические — с задержкой."
  },
  {
    "id": 82,
    "question": "Как обеспечивается алертинг при сбоях и перегрузках?",
    "options": [
      "Через Zabbix, мониторинг метрик и уведомления",
      "Через Access",
      "Через Power BI",
      "Через PostgreSQL"
    ],
    "correct": 0,
    "explanation": "Zabbix отслеживает метрики и состояния сервисов, формируя уведомления о проблемах."
  },
  {
    "id": 83,
    "question": "Для чего используется horizontal partitioning в базе данных?",
    "options": [
      "Для распределения данных по таблицам или серверам для повышения масштабируемости",
      "Для индексации",
      "Для очередей RabbitMQ",
      "Для Power BI"
    ],
    "correct": 0,
    "explanation": "Horizontal partitioning (шардинг) разделяет данные по таблицам или серверам, облегчая масштабирование и обработку больших объемов данных."
  },
  {
    "id": 84,
    "question": "Как обеспечивается контроль версий API в микросервисной архитектуре?",
    "options": [
      "Через версионирование URL или заголовков, чтобы не ломать клиентов",
      "Через базу данных",
      "Через Power BI",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Версионирование API позволяет обновлять сервисы без нарушения работы клиентов и интеграций."
  },
  {
    "id": 85,
    "question": "Для чего используется агрегирование метрик?",
    "options": [
      "Для анализа состояния системы и построения сводных панелей в Grafana",
      "Для очередей RabbitMQ",
      "Для SQL Server",
      "Для фронтенда"
    ],
    "correct": 0,
    "explanation": "Агрегирование метрик позволяет видеть общую картину работы системы и выявлять узкие места."
  },
  {
    "id": 86,
    "question": "Что такое throttling в API и микросервисах?",
    "options": [
      "Ограничение количества запросов в единицу времени для защиты сервисов",
      "Ускорение обработки данных",
      "Для Power BI",
      "Для RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Throttling предотвращает перегрузку сервисов и очередей сообщений, обеспечивая стабильность работы системы."
  },
  {
    "id": 87,
    "question": "Как обеспечивается репликация баз данных для отказоустойчивости?",
    "options": [
      "Через мастер-слейв или мастер-мастер репликацию с синхронизацией данных",
      "Через фронтенд",
      "Через RabbitMQ",
      "Через Power BI"
    ],
    "correct": 0,
    "explanation": "Репликация позволяет иметь копии базы для резервного использования и повышения доступности данных."
  },
  {
    "id": 88,
    "question": "Для чего используется аналитика логов?",
    "options": [
      "Для выявления проблем, аномалий и улучшения производительности системы",
      "Для Power BI",
      "Для Access",
      "Для PostgreSQL"
    ],
    "correct": 0,
    "explanation": "Анализ логов помогает отслеживать ошибки, производительность и пользовательские действия для оптимизации работы системы."
  },
  {
    "id": 89,
    "question": "Что такое backfill в системах обработки данных?",
    "options": [
      "Заполнение или пересчет исторических данных для аналитики",
      "Очередь RabbitMQ",
      "Фронтенд процесс",
      "Power BI отчет"
    ],
    "correct": 0,
    "explanation": "Backfill используется для пересчета исторических данных после изменения логики или исправления ошибок, чтобы аналитика оставалась корректной."
  },
  {
    "id": 90,
    "question": "Для чего используются rate limiting и quota в сервисах?",
    "options": [
      "Для управления нагрузкой, защиты от перегрузки и злоупотреблений",
      "Для фронтенда",
      "Для Power BI",
      "Для Access"
    ],
    "correct": 0,
    "explanation": "Rate limiting и квоты ограничивают количество запросов, предотвращая перегрузку сервисов и обеспечивая стабильную работу системы."
  },
  {
    "id": 91,
    "question": "Какой паттерн вы примените, если нужно обеспечить надежную обработку платежей с возможностью отката при ошибках в нескольких микросервисах?",
    "options": [
      "Saga pattern",
      "CQRS",
      "API Gateway",
      "Circuit Breaker"
    ],
    "correct": 0,
    "explanation": "Saga pattern позволяет разбивать долгие транзакции на локальные операции с возможностью компенсации при сбое."
  },
  {
    "id": 92,
    "question": "Как поступить, если один из микросервисов постоянно перегружен и вызывает сбои у соседних сервисов?",
    "options": [
      "Использовать Circuit Breaker и throttling",
      "Добавить больше Power BI отчетов",
      "Создать дополнительный Access фронтенд",
      "Удалить RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Circuit Breaker и throttling помогут изолировать проблемный сервис и предотвратить каскадные сбои."
  },
  {
    "id": 93,
    "question": "Каким образом можно интегрировать внешнюю CRM с внутренними микросервисами, не нарушая доменную модель?",
    "options": [
      "Через Anti-Corruption Layer",
      "Через прямой SQL-запрос",
      "Через Power BI",
      "Через Access"
    ],
    "correct": 0,
    "explanation": "Anti-Corruption Layer изолирует внутреннюю модель от внешней системы, трансформируя данные в локальный формат."
  },
  {
    "id": 94,
    "question": "Как лучше организовать хранение истории изменений данных для аналитики и аудита?",
    "options": [
      "Использовать Event Sourcing",
      "Создать таблицы в Access",
      "Отправлять все данные в Power BI",
      "Хранить только текущие значения в PostgreSQL"
    ],
    "correct": 0,
    "explanation": "Event Sourcing хранит все события изменения состояния, что позволяет восстановить историю и проводить аудит."
  },
  {
    "id": 95,
    "question": "Как действовать, если нужно поддерживать высокую доступность веб-бэкенда при резком росте пользователей?",
    "options": [
      "Горизонтальное масштабирование и использование Load Balancer",
      "Добавить больше хранимых процедур в MSSQL",
      "Создать дополнительный фронтенд на Access",
      "Увеличить размер очередей RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Горизонтальное масштабирование и балансировщики нагрузки обеспечивают устойчивую работу при пиковых нагрузках."
  },
  {
    "id": 96,
    "question": "Как избежать блокировок и конфликтов при параллельной обработке транзакций?",
    "options": [
      "Использовать eventual consistency и оптимистичное управление версиями",
      "Использовать только синхронные транзакции",
      "Запретить несколько потоков",
      "Все операции делать через Access"
    ],
    "correct": 0,
    "explanation": "Eventual consistency и оптимистичные версии позволяют обрабатывать параллельные изменения без блокировок."
  },
  {
    "id": 97,
    "question": "Как обеспечить быструю доставку уведомлений (push, SMS, email) при большом объеме событий?",
    "options": [
      "Использовать event-driven архитектуру с очередями сообщений",
      "Отправлять напрямую из фронтенда",
      "Использовать только Power BI",
      "Использовать хранимые процедуры в MSSQL"
    ],
    "correct": 0,
    "explanation": "Очереди сообщений позволяют асинхронно обрабатывать и рассылать уведомления без блокировки сервисов."
  },
  {
    "id": 98,
    "question": "Что делать, если внешняя интеграция периодически недоступна?",
    "options": [
      "Реализовать повторные попытки, Dead Letter Queue и Circuit Breaker",
      "Отключить сервис",
      "Отправлять все запросы в Power BI",
      "Создать дополнительный Access интерфейс"
    ],
    "correct": 0,
    "explanation": "Повторные попытки, Dead Letter Queue и Circuit Breaker позволяют продолжать работу системы и безопасно обрабатывать недоступные сервисы."
  },
  {
    "id": 99,
    "question": "Как лучше хранить часто используемые справочные данные для быстрого доступа?",
    "options": [
      "Использовать кэширование и in-memory хранилища",
      "Хранить только в основной MSSQL базе",
      "Отправлять все данные в RabbitMQ",
      "Сохранять в Access"
    ],
    "correct": 0,
    "explanation": "Кэширование снижает нагрузку на базу и ускоряет доступ к часто используемым данным."
  },
  {
    "id": 100,
    "question": "Как организовать обработку ошибок и логирование для всех микросервисов централизованно?",
    "options": [
      "Собрать логи в централизованную систему (например, Grafana/Loki, ELK)",
      "Логировать только в локальные файлы",
      "Отправлять в Power BI",
      "Использовать Access"
    ],
    "correct": 0,
    "explanation": "Централизованная система логирования позволяет анализировать ошибки, производительность и поведение системы в одном месте."
  },
  {
    "id": 101,
    "question": "Как повысить производительность аналитических запросов без влияния на операционную систему?",
    "options": [
      "Использовать ETL в отдельную аналитическую базу или data warehouse",
      "Запускать все запросы напрямую в основной базе",
      "Использовать Access",
      "Отправлять запросы через RabbitMQ"
    ],
    "correct": 0,
    "explanation": "Отдельная аналитическая база позволяет выполнять тяжелые запросы без блокировки основной операционной системы."
  },
  {
    "id": 102,
    "question": "Как обеспечить корректную работу систем при изменении структуры базы данных?",
    "options": [
      "Использовать миграции, версионирование и тесты на совместимость",
      "Редактировать таблицы вручную",
      "Использовать Access",
      "Отправлять данные напрямую в Power BI"
    ],
    "correct": 0,
    "explanation": "Миграции, версионирование и автоматические тесты позволяют безопасно изменять структуру базы без нарушения работы системы."
  }
];
