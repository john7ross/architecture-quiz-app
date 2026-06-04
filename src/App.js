import React, { useState, useEffect, useCallback } from 'react';
import {
  Book, Layers, Building, Sparkles, Code, BookOpen,
  Sun, Moon, ArrowLeft, Check, X, RotateCcw, Home
} from 'lucide-react';
import {
  getAllTopics, loadAllTopicQuestionCounts, loadTopicQuestions
} from './data/topics.config';

// Сопоставление имени иконки из конфига с компонентом lucide-react.
// Неизвестное имя получает запасную иконку — добавление новой темы не ломает UI.
const ICONS = { Book, Layers, Building, Sparkles, Code };
const iconFor = (name) => ICONS[name] || BookOpen;

const DIFFICULTY_LABELS = {
  beginner: 'Начальный',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
  'beginner-advanced': 'Любой уровень'
};

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('quiz-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) { /* localStorage недоступен */ }
  if (typeof window !== 'undefined' && window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

function Footer() {
  return (
    <footer className="app-footer">
      Architecture Quiz App © {new Date().getFullYear()}
    </footer>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title="Сменить тему"
      aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function ArchitectureQuizApp() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [topics, setTopics] = useState(
    () => getAllTopics().map((t) => ({ ...t, totalQuestions: null }))
  );
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | ready | error
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null); // выбранный вариант текущего вопроса
  const [finished, setFinished] = useState(false);

  // Применяем тему к <html> (CSS-селекторы вида :root[data-theme="..."]).
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('quiz-theme', theme); } catch (e) { /* no-op */ }
  }, [theme]);

  // Подгружаем число вопросов для плиток.
  useEffect(() => {
    let active = true;
    loadAllTopicQuestionCounts()
      .then((list) => { if (active) setTopics(list); })
      .catch((e) => console.error('Не удалось загрузить счётчики тем:', e));
    return () => { active = false; };
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []
  );

  const resetQuiz = () => {
    setStarted(false);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
  };

  const backToMenu = () => {
    resetQuiz();
    setSelectedTopic(null);
    setQuestions([]);
    setStatus('idle');
  };

  const openTopic = async (topic) => {
    setSelectedTopic(topic);
    setStatus('loading');
    resetQuiz();
    try {
      const qs = await loadTopicQuestions(topic.file);
      if (!qs.length) throw new Error('Пустой набор вопросов');
      setQuestions(qs);
      setStatus('ready');
    } catch (e) {
      console.error(`Ошибка загрузки темы «${topic.file}»:`, e);
      setStatus('error');
    }
  };

  const startQuiz = () => { resetQuiz(); setStarted(true); };
  const restartQuiz = () => { resetQuiz(); setStarted(true); };

  const answerQuestion = (optionIndex) => {
    if (selected !== null) return; // уже отвечено
    const q = questions[currentIndex];
    setSelected(optionIndex);
    setAnswers((prev) => [
      ...prev,
      { questionId: q.id, answer: optionIndex, correct: optionIndex === q.correct }
    ]);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const wrap = (content) => (
    <div className="quiz-app">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {content}
      <Footer />
    </div>
  );

  // --- Экран выбора темы -----------------------------------------------------
  if (!selectedTopic) {
    return wrap(
      <div className="topic-selector">
        <div className="header">
          <h1 className="title">
            <Code className="title-icon" size={36} />
            Architecture Quiz
          </h1>
          <p className="subtitle">
            Интерактивная платформа для проверки и получения новых знаний
            архитекторами информационных систем. Выберите тему, чтобы начать.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic) => {
            const Icon = iconFor(topic.icon);
            return (
              <button
                key={topic.id}
                className="topic-card"
                style={{ '--topic-color': topic.color, textAlign: 'left', font: 'inherit', width: '100%' }}
                onClick={() => openTopic(topic)}
              >
                <div className="topic-card-header">
                  <div className="topic-icon" style={{ background: topic.color, color: '#fff' }}>
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="topic-name">{topic.name}</h3>
                <p className="topic-description">{topic.description}</p>
                <div className="topic-meta">
                  <span className="question-count">
                    {topic.totalQuestions == null ? 'загрузка…' : `${topic.totalQuestions} вопросов`}
                  </span>
                  <span className={`difficulty difficulty-${topic.difficulty}`}>
                    {DIFFICULTY_LABELS[topic.difficulty] || topic.difficulty}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // --- Загрузка / ошибка -----------------------------------------------------
  if (status === 'loading') {
    return wrap(<div className="loading">Загрузка вопросов…</div>);
  }

  if (status === 'error') {
    return wrap(
      <div className="start-screen">
        <div className="start-content">
          <h2 className="start-title">Не удалось загрузить тему</h2>
          <p className="start-description">
            Файл «{selectedTopic.file}» не найден или повреждён. Проверьте, что он
            находится в <code>src/data/topics</code> и указан в конфигурации тем.
          </p>
          <button className="button-secondary" onClick={backToMenu}>
            <ArrowLeft size={18} /> К выбору тем
          </button>
        </div>
      </div>
    );
  }

  // --- Результаты ------------------------------------------------------------
  if (finished) {
    const correct = answers.filter((a) => a.correct).length;
    const total = answers.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const circ = 2 * Math.PI * 90;
    const stroke = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--error)';
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    const message =
      pct >= 90 ? 'Превосходно! Отличное знание темы.'
      : pct >= 80 ? 'Отличный результат!'
      : pct >= 60 ? 'Неплохо, но есть что подтянуть.'
      : 'Стоит изучить тему внимательнее.';

    return wrap(
      <div className="results-view">
        <div className="results-content">
          <div className="results-emoji">{emoji}</div>
          <h2 className="results-title">Тест завершён</h2>
          <div className="results-score">
            <div className="score-circle">
              <svg viewBox="0 0 200 200">
                <circle className="score-bg" cx="100" cy="100" r="90" />
                <circle
                  className="score-progress" cx="100" cy="100" r="90"
                  style={{ stroke, strokeDasharray: `${(pct / 100) * circ} ${circ}` }}
                />
              </svg>
              <div className="score-text">
                <span className="score-percentage">{pct}%</span>
                <span className="score-fraction">{correct} из {total}</span>
              </div>
            </div>
          </div>
          <p className="start-description">{message}</p>
          <div className="results-actions">
            <button className="button-primary" onClick={restartQuiz}>
              <RotateCcw size={18} /> Пройти заново
            </button>
            <button className="button-secondary" onClick={backToMenu}>
              <Home size={18} /> Другие тесты
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Стартовый экран темы --------------------------------------------------
  if (!started) {
    const Icon = iconFor(selectedTopic.icon);
    return wrap(
      <div className="start-screen">
        <button className="back-button" onClick={backToMenu}>
          <ArrowLeft size={16} /> К выбору тем
        </button>
        <div className="start-content">
          <div className="topic-icon-large" style={{ background: selectedTopic.color, color: '#fff' }}>
            <Icon size={40} />
          </div>
          <h1 className="start-title">{selectedTopic.name}</h1>
          <p className="start-description">{selectedTopic.description}</p>
          <div className="start-stats">
            <div className="stat">
              <span className="stat-value">{questions.length}</span>
              <span className="stat-label">вопросов</span>
            </div>
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">варианта</span>
            </div>
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">попыток</span>
            </div>
          </div>
          <button className="start-button" onClick={startQuiz}>Начать тест</button>
        </div>
      </div>
    );
  }

  // --- Прохождение теста -----------------------------------------------------
  const q = questions[currentIndex];
  const answered = selected !== null;
  const isLast = currentIndex + 1 >= questions.length;
  const progress = ((currentIndex + (answered ? 1 : 0)) / questions.length) * 100;
  const lastCorrect = answered && selected === q.correct;

  return wrap(
    <div className="question-view">
      <div className="question-header">
        <button className="back-button" onClick={backToMenu}>
          <ArrowLeft size={16} /> Выйти
        </button>
        <div className="progress-info">
          <span className="progress-text">
            Вопрос {currentIndex + 1} из {questions.length}
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="question-content">
        <h2 className="question-text">{q.question}</h2>
        <div className="options-grid">
          {q.options.map((opt, i) => {
            let cls = 'option-card';
            if (answered && i === q.correct) cls += ' correct';
            else if (answered && i === selected) cls += ' incorrect';
            return (
              <button
                key={i}
                className={cls}
                disabled={answered}
                onClick={() => answerQuestion(i)}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
                {answered && i === q.correct && <Check className="option-icon" size={20} />}
                {answered && i === selected && i !== q.correct && (
                  <X className="option-icon" size={20} />
                )}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`explanation ${lastCorrect ? 'correct' : 'incorrect'}`}>
            <h4>
              {lastCorrect
                ? 'Верно!'
                : `Правильный ответ: ${String.fromCharCode(65 + q.correct)}`}
            </h4>
            <p>{q.explanation}</p>
            <button className="next-button" onClick={nextQuestion}>
              {isLast ? 'Показать результат' : 'Следующий вопрос'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return <ArchitectureQuizApp />;
}
