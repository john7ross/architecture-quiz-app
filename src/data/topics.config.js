/**
 * Конфигурация тем квиза
 * Каждая тема имеет метаданные и путь к JSON файлу с вопросами
 */

export const topics = [
  {
    id: 'dochub',
    name: 'DocHub',
    description: 'Architecture as Code: языки описания, JSONata, манифесты, интеграции',
    icon: 'Book',
    color: '#3b82f6', // blue
    file: 'dochub.json',
    difficulty: 'intermediate',
    tags: ['architecture', 'documentation', 'jsonata', 'yaml']
  },
  {
    id: 'ddd',
    name: 'Domain-Driven Design',
    description: 'Bounded Context, Aggregates, Value Objects, Domain Events, Context Mapping',
    icon: 'Layers',
    color: '#10b981', // green
    file: 'ddd.json',
    difficulty: 'advanced',
    tags: ['ddd', 'architecture', 'domain-modeling', 'patterns']
  },
  {
    id: 'architecture',
    name: 'Software Architecture',
    description: 'Паттерны, микросервисы, CQRS, Event Sourcing, CAP, Clean Architecture',
    icon: 'Building',
    color: '#8b5cf6', // purple
    file: 'architecture.json',
    difficulty: 'advanced',
    tags: ['architecture', 'patterns', 'microservices', 'design']
  },
  {
    id: 'ai',
    name: 'AI и Автоматизация',
    description: 'Нейросети, ML, агенты, MCP, transformers, RAG, fine-tuning',
    icon: 'Sparkles',
    color: '#f59e0b', // amber
    file: 'ai.json',
    totalQuestions: 200,
    difficulty: 'intermediate',
    tags: ['ai', 'ml', 'agents', 'automation', 'neural-networks'],
    comingSoon: true // будет добавлено позже
  },
  {
    id: 'cs',
    name: 'Computer Science',
    description: 'Алгоритмы, структуры данных, паттерны, SOLID, ООП, функциональное программирование',
    icon: 'Code',
    color: '#ec4899', // pink
    file: 'computer-science.json',
    totalQuestions: 200,
    difficulty: 'beginner-advanced',
    tags: ['algorithms', 'data-structures', 'patterns', 'solid', 'oop', 'fp'],
    comingSoon: true
  }
];

/**
 * Получить тему по ID
 */
export const getTopicById = (id) => {
  return topics.find(topic => topic.id === id);
};

/**
 * Получить все активные темы (без comingSoon)
 */
export const getActiveTopics = () => {
  return topics.filter(topic => !topic.comingSoon);
};

/**
 * Получить все темы включая будущие
 */
export const getAllTopics = () => {
  return topics;
};

/**
 * Загрузить количество вопросов для темы из JSON файла
 */
export const loadTopicQuestionCount = async (topicId) => {
  try {
    const module = await import(`./topics/${topicId}.json`);
    const data = module.default || module;
    return data.questions?.length || 0;
  } catch (error) {
    console.error(`Failed to load question count for ${topicId}:`, error);
    return 0;
  }
};

/**
 * Загрузить количество вопросов для всех тем
 */
export const loadAllTopicQuestionCounts = async () => {
  const topicsWithCounts = await Promise.all(
    topics.map(async (topic) => {
      if (topic.comingSoon) {
        return { ...topic, totalQuestions: 0 };
      }
      const count = await loadTopicQuestionCount(topic.file.replace('.json', ''));
      return { ...topic, totalQuestions: count };
    })
  );
  return topicsWithCounts;
};

/**
 * Цветовая палитра для темной темы
 */
export const colorPalette = {
  light: {
    background: '#ffffff',
    surface: '#f3f4f6',
    text: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    primary: '#3b82f6',
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b'
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    border: '#334155',
    primary: '#60a5fa',
    success: '#34d399',
    error: '#f87171',
    warning: '#fbbf24'
  }
};
