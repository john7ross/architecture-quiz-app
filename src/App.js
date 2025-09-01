// Скопируйте весь код из dochub-quiz-app.tsx и замените export default на обычный export
import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CheckCircle, XCircle, BarChart3, Book, Code, Settings, Layers, Building, ArrowLeft } from 'lucide-react';
import { dochubQuestions, dddQuestions, architectureQuestions } from './questions';

// Reducer для управления состоянием квиза
const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_QUIZ':
      return {
        ...state,
        selectedQuiz: action.payload,
        started: false,
        currentQuestion: 0,
        answers: [],
        showResult: false,
        finished: false
      };
    case 'START_QUIZ':
      return {
        ...state,
        started: true,
        currentQuestion: 0,
        answers: [],
        showResult: false,
        finished: false
      };
    case 'ANSWER_QUESTION':
      const newAnswers = [...state.answers, action.payload];
      const currentQuestions = getCurrentQuestions(state.selectedQuiz);
      const isFinished = newAnswers.length === currentQuestions.length;
      return {
        ...state,
        answers: newAnswers,
        showResult: true,
        finished: isFinished,
        currentQuestion: isFinished ? state.currentQuestion : state.currentQuestion + 1
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        showResult: false
      };
    case 'RESTART_QUIZ':
      return {
        ...state,
        started: false,
        currentQuestion: 0,
        answers: [],
        showResult: false,
        finished: false
      };
    case 'BACK_TO_MENU':
      return {
        selectedQuiz: null,
        started: false,
        currentQuestion: 0,
        answers: [],
        showResult: false,
        finished: false
      };
    default:
      return state;
  }
};

const getCurrentQuestions = (quizType) => {
  switch (quizType) {
    case 'dochub': return dochubQuestions;
    case 'ddd': return dddQuestions;
    case 'architecture': return architectureQuestions;
    default: return [];
  }
};

const initialState = {
  selectedQuiz: null,
  started: false,
  currentQuestion: 0,
  answers: [],
  showResult: false,
  finished: false
};

function ArchitectureQuizApp() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [showArchitectHelper, setShowArchitectHelper] = useState(false);

  const handleAnswer = (answerIndex) => {
    const questions = getCurrentQuestions(state.selectedQuiz);
    const currentQ = questions[state.currentQuestion];
    const isCorrect = answerIndex === currentQ.correct;
    
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        questionId: currentQ.id,
        answer: answerIndex,
        correct: isCorrect,
        question: currentQ.question
      }
    });
  };

  const getResults = () => {
    const correct = state.answers.filter(a => a.correct).length;
    const total = state.answers.length;
    const percentage = Math.round((correct / total) * 100);
    
    return { correct, total, percentage };
  };

  const questions = getCurrentQuestions(state.selectedQuiz);
  const currentQuestion = questions[state.currentQuestion];

  // Главная страница с выбором теста
  if (!state.selectedQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="mb-12">
              <Code className="mx-auto h-20 w-20 text-indigo-600 mb-4" />
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Architecture Learning Platform
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Платформа для изучения и тестирования знаний по архитектуре программного обеспечения, 
                DocHub и Domain-Driven Design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Квиз по DocHub */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-6 h-48">
                  <Book className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">DocHub</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Тестирование знаний по инструменту описания архитектуры через код
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-blue-600">{dochubQuestions.length}</div>
                  <div className="text-sm text-gray-600">вопросов</div>
                </div>
                <div className="mt-auto">
                <button
                  onClick={() => dispatch({ type: 'SELECT_QUIZ', payload: 'dochub' })}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
                >
                  Начать тест
                </button>
                </div>
              </div>

              {/* Квиз по DDD */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-6 h-48">
                  <Layers className="mx-auto h-16 w-16 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Domain-Driven Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Проверка знаний по DDD: домены, контексты, тактические паттерны
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-green-600">{dddQuestions.length}</div>
                  <div className="text-sm text-gray-600">вопросов</div>
                </div>
                <div className="mt-auto">
                <button
                  onClick={() => dispatch({ type: 'SELECT_QUIZ', payload: 'ddd' })}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
                >
                  Начать тест
                </button>
                </div>
              </div>

              {/* Квиз по архитектуре */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-6 h-48">
                  <Building className="mx-auto h-16 w-16 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Проектирование архитектуры</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Основы архитектуры ПО и принципы проектирования систем
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-purple-600">{architectureQuestions.length}</div>
                  <div className="text-sm text-gray-600">вопросов</div>
                </div>
                <div className="mt-auto">
                <button
                  onClick={() => dispatch({ type: 'SELECT_QUIZ', payload: 'architecture' })}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
                >
                  Начать тест
                </button>
                </div>
              </div>
            </div>

            {/* Помощник архитектора */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Инструменты</h3>
              <button
                onClick={() => setShowArchitectHelper(true)}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-4 px-8 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-200 border-2 border-gray-300"
              >
                <Settings className="inline-block mr-2 h-5 w-5" />
                Помощник архитектора (скоро)
              </button>
            </div>

            <div className="text-sm text-gray-500 max-w-xl mx-auto mt-8">
              <p className="mb-2">
                Платформа для изучения современных подходов к архитектуре ПО, включая DocHub и Domain-Driven Design.
              </p>
              <p>
                Основано на официальной документации: 
                <a href="https://dochub.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline ml-1">
                  dochub.info
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Страница помощника архитектора
  if (showArchitectHelper) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-3xl mx-auto py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <Settings className="mx-auto h-20 w-20 text-gray-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Помощник архитектора
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Эта функция находится в разработке и будет добавлена в ближайшем обновлении.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">Планируемые возможности:</h3>
              <ul className="text-blue-700 space-y-2 text-left">
                <li>• Помощь в составлении архитектурных диаграмм</li>
                <li>• Рекомендации по best practices DDD</li>
                <li>• Генерация шаблонов манифестов DocHub</li>
                <li>• Анализ архитектурных решений</li>
                <li>• Проверка соответствия принципам чистой архитектуры</li>
              </ul>
            </div>
            <button
              onClick={() => setShowArchitectHelper(false)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Вернуться назад
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Страница выбранного теста
  if (!state.started) {
    const quizConfig = {
      'dochub': {
        title: 'Тест по DocHub',
        description: 'Проверьте свои знания об инструменте описания архитектуры через код',
        icon: Book,
        color: 'blue',
        questions: dochubQuestions
      },
      'ddd': {
        title: 'Тест по Domain-Driven Design',
        description: 'Углубите знания по DDD: стратегическое и тактическое проектирование',
        icon: Layers,
        color: 'green',
        questions: dddQuestions
      },
      'architecture': {
        title: 'Тест по проектированию архитектуры',
        description: 'Основы архитектуры ПО и принципы проектирования систем',
        icon: Building,
        color: 'purple',
        questions: architectureQuestions
      }
    };

    const config = quizConfig[state.selectedQuiz];
    const IconComponent = config.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <button
              onClick={() => dispatch({ type: 'BACK_TO_MENU' })}
              className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8 mx-auto transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Вернуться к выбору тестов
            </button>

            <div className="mb-8">
              <IconComponent className={`mx-auto h-20 w-20 text-${config.color}-600 mb-4`} />
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                {config.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {config.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                <div className={`bg-${config.color}-50 rounded-lg p-4`}>
                  <Book className={`mx-auto h-8 w-8 text-${config.color}-600 mb-2`} />
                  <div className={`text-2xl font-bold text-${config.color}-600`}>{config.questions.length}</div>
                  <div className="text-sm text-gray-600">вопросов</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <CheckCircle className="mx-auto h-8 w-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">правильный ответ</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <BarChart3 className="mx-auto h-8 w-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-purple-600">∞</div>
                  <div className="text-sm text-gray-600">попыток</div>
                </div>
              </div>

              <button
                onClick={() => dispatch({ type: 'START_QUIZ' })}
                className={`w-full bg-gradient-to-r from-${config.color}-600 to-${config.color}-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-${config.color}-700 hover:to-${config.color}-800 transition-all duration-200 transform hover:scale-105 shadow-lg`}
              >
                Начать тестирование
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Результаты теста
  if (state.finished) {
    const { correct, total, percentage } = getResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-3xl mx-auto py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-8">
              {percentage >= 80 ? (
                <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-4" />
              ) : percentage >= 60 ? (
                <BarChart3 className="mx-auto h-20 w-20 text-yellow-500 mb-4" />
              ) : (
                <XCircle className="mx-auto h-20 w-20 text-red-500 mb-4" />
              )}
              
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Тест завершен!
              </h2>
              
              <div className="text-6xl font-bold mb-2">
                <span className={`${percentage >= 80 ? 'text-green-500' : percentage >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {percentage}%
                </span>
              </div>
              
              <p className="text-xl text-gray-600 mb-8">
                Правильных ответов: <span className="font-bold text-green-600">{correct}</span> из <span className="font-bold">{total}</span>
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ваш результат:</h3>
              {percentage >= 90 && <p className="text-green-600 font-medium">🎉 Превосходно! У вас отличные знания!</p>}
              {percentage >= 80 && percentage < 90 && <p className="text-green-600 font-medium">✅ Отлично! Хорошие знания по теме!</p>}
              {percentage >= 70 && percentage < 80 && <p className="text-yellow-600 font-medium">👍 Хорошо! Есть небольшие пробелы в знаниях.</p>}
              {percentage >= 60 && percentage < 70 && <p className="text-yellow-600 font-medium">📚 Неплохо, но стоит изучить материал глубже.</p>}
              {percentage < 60 && <p className="text-red-600 font-medium">📖 Рекомендуем изучить тему более внимательно.</p>}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => dispatch({ type: 'RESTART_QUIZ' })}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
              >
                Пройти тест заново
              </button>
              
              <button
                onClick={() => dispatch({ type: 'BACK_TO_MENU' })}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-8 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Другие тесты
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Процесс прохождения теста
  const lastAnswer = state.answers[state.answers.length - 1];
  const lastAnsweredQuestion = lastAnswer
    ? questions.find(q => q.id === lastAnswer.questionId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Кнопка выхода на главную */}
        <div className="mb-6">
          <button
            onClick={() => dispatch({ type: 'BACK_TO_MENU' })}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Выйти на главную
          </button>
        </div>

        {/* Шкала прогресса */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Прогресс</span>
            <span>{state.currentQuestion + 1} из {questions.length}</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((state.currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!state.showResult ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-indigo-100 flex items-center justify-center mr-4 text-sm font-semibold text-gray-600 group-hover:text-indigo-600">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800 group-hover:text-gray-900">
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                {lastAnswer.correct ? (
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                ) : (
                  <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
                )}

                <h3 className={`text-3xl font-bold mb-4 ${lastAnswer.correct ? 'text-green-600' : 'text-red-600'}`}>
                  {lastAnswer.correct ? 'Правильно!' : 'Неправильно!'}
                </h3>
              </div>

              {!lastAnswer.correct && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">Правильный ответ:</h4>
                  <p className="text-red-700 font-medium mb-3">
                    {String.fromCharCode(65 + lastAnsweredQuestion.correct)}. {lastAnsweredQuestion.options[lastAnsweredQuestion.correct]}
                  </p>
                  <div className="text-left">
                    <h5 className="font-semibold text-red-800 mb-2">Объяснение:</h5>
                    <p className="text-red-700 text-sm leading-relaxed">
                      {lastAnsweredQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}

              {lastAnswer.correct && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                  <div className="text-left">
                    <h5 className="font-semibold text-green-800 mb-2">Пояснение:</h5>
                    <p className="text-green-700 text-sm leading-relaxed">
                      {lastAnsweredQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}

              {!state.finished && (
                <button
                  onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Следующий вопрос
                </button>
              )}
            </div>
          )}
        </div>

        {/* Навигация по вопросам */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Вопрос {state.currentQuestion + 1} из {questions.length}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ArchitectureQuizApp />} />
      </Routes>
    </Router>
  );
}

export default App;