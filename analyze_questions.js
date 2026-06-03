// Скрипт анализа вопросов квиза
const fs = require('fs');
const path = require('path');

// Импорт вопросов
const questionsPath = path.join(__dirname, 'src', 'questions.js');
const questionsContent = fs.readFileSync(questionsPath, 'utf-8');

// Парсинг вопросов из файла
const dochubMatch = questionsContent.match(/export const dochubQuestions = (\[[\s\S]*?\]);/);
const dddMatch = questionsContent.match(/export const dddQuestions = (\[[\s\S]*?\]);/);
const architectureMatch = questionsContent.match(/export const architectureQuestions = (\[[\s\S]*?\]);/);

let dochubQuestions = [], dddQuestions = [], architectureQuestions = [];

try {
  if (dochubMatch) dochubQuestions = eval(dochubMatch[1]);
  if (dddMatch) dddQuestions = eval(dddMatch[1]);
  if (architectureMatch) architectureQuestions = eval(architectureMatch[1]);
} catch (e) {
  console.error('Ошибка парсинга:', e.message);
  process.exit(1);
}

// Объединение всех вопросов
const allQuestions = [
  ...dochubQuestions.map(q => ({...q, category: 'DocHub'})),
  ...dddQuestions.map(q => ({...q, category: 'DDD'})),
  ...architectureQuestions.map(q => ({...q, category: 'Architecture'}))
];

console.log('='.repeat(80));
console.log('АНАЛИЗ ВОПРОСОВ КВИЗА');
console.log('='.repeat(80));
console.log(`\nВсего вопросов: ${allQuestions.length}`);
console.log(`  - DocHub: ${dochubQuestions.length}`);
console.log(`  - DDD: ${dddQuestions.length}`);
console.log(`  - Architecture: ${architectureQuestions.length}`);

// 1. Проверка уникальности ID
console.log('\n' + '='.repeat(80));
console.log('1. ПРОВЕРКА УНИКАЛЬНОСТИ ID');
console.log('='.repeat(80));

const idMap = new Map();
const duplicateIds = [];

allQuestions.forEach(q => {
  const key = `${q.category}-${q.id}`;
  if (idMap.has(key)) {
    duplicateIds.push({
      id: q.id,
      category: q.category,
      questions: [idMap.get(key), q.question]
    });
  } else {
    idMap.set(key, q.question);
  }
});

if (duplicateIds.length === 0) {
  console.log('✓ Все ID уникальны в пределах своих категорий');
} else {
  console.log(`✗ Найдено ${duplicateIds.length} дублирующихся ID:`);
  duplicateIds.forEach(dup => {
    console.log(`  ID ${dup.id} (${dup.category}):`);
    dup.questions.forEach((q, i) => console.log(`    ${i+1}. ${q.substring(0, 60)}...`));
  });
}

// 2. Проверка дублей вопросов
console.log('\n' + '='.repeat(80));
console.log('2. ПРОВЕРКА ДУБЛЕЙ ВОПРОСОВ');
console.log('='.repeat(80));

const questionTexts = new Map();
const duplicateQuestions = [];

allQuestions.forEach(q => {
  const normalized = q.question.toLowerCase().trim();
  if (questionTexts.has(normalized)) {
    duplicateQuestions.push({
      question: q.question,
      occurrences: [questionTexts.get(normalized), `${q.category} ID:${q.id}`]
    });
  } else {
    questionTexts.set(normalized, `${q.category} ID:${q.id}`);
  }
});

if (duplicateQuestions.length === 0) {
  console.log('✓ Дублирующихся вопросов не найдено');
} else {
  console.log(`✗ Найдено ${duplicateQuestions.length} дублирующихся вопросов:`);
  duplicateQuestions.slice(0, 10).forEach(dup => {
    console.log(`  "${dup.question.substring(0, 60)}..."`);
    console.log(`    Встречается в: ${dup.occurrences.join(', ')}`);
  });
  if (duplicateQuestions.length > 10) {
    console.log(`  ... и ещё ${duplicateQuestions.length - 10} дублей`);
  }
}

// 3. Проверка полноты объяснений
console.log('\n' + '='.repeat(80));
console.log('3. ПРОВЕРКА ПОЛНОТЫ ОБЪЯСНЕНИЙ');
console.log('='.repeat(80));

const minExplanationLength = 50;
const shortExplanations = allQuestions.filter(q =>
  !q.explanation || q.explanation.length < minExplanationLength
);

if (shortExplanations.length === 0) {
  console.log(`✓ Все объяснения имеют достаточную длину (>= ${minExplanationLength} символов)`);
} else {
  console.log(`✗ Найдено ${shortExplanations.length} вопросов с недостаточным объяснением (<${minExplanationLength} символов):`);
  shortExplanations.slice(0, 10).forEach(q => {
    console.log(`  ${q.category} ID:${q.id} (${q.explanation?.length || 0} символов)`);
    console.log(`    Вопрос: ${q.question.substring(0, 60)}...`);
    console.log(`    Объяснение: ${q.explanation?.substring(0, 60) || 'ОТСУТСТВУЕТ'}...`);
  });
  if (shortExplanations.length > 10) {
    console.log(`  ... и ещё ${shortExplanations.length - 10} вопросов`);
  }
}

// 4. Проверка корректности индексов правильных ответов
console.log('\n' + '='.repeat(80));
console.log('4. ПРОВЕРКА КОРРЕКТНОСТИ ПРАВИЛЬНЫХ ОТВЕТОВ');
console.log('='.repeat(80));

const invalidCorrect = allQuestions.filter(q =>
  typeof q.correct !== 'number' ||
  q.correct < 0 ||
  q.correct >= q.options.length
);

if (invalidCorrect.length === 0) {
  console.log('✓ Все индексы правильных ответов корректны');
} else {
  console.log(`✗ Найдено ${invalidCorrect.length} вопросов с некорректным индексом ответа:`);
  invalidCorrect.forEach(q => {
    console.log(`  ${q.category} ID:${q.id}`);
    console.log(`    Вопрос: ${q.question.substring(0, 60)}...`);
    console.log(`    Индекс: ${q.correct}, Количество вариантов: ${q.options.length}`);
  });
}

// 5. Проверка количества вариантов ответов
console.log('\n' + '='.repeat(80));
console.log('5. ПРОВЕРКА КОЛИЧЕСТВА ВАРИАНТОВ ОТВЕТОВ');
console.log('='.repeat(80));

const invalidOptions = allQuestions.filter(q =>
  !q.options || q.options.length < 2 || q.options.length > 6
);

if (invalidOptions.length === 0) {
  console.log('✓ Все вопросы имеют от 2 до 6 вариантов ответов');
} else {
  console.log(`✗ Найдено ${invalidOptions.length} вопросов с нестандартным количеством вариантов:`);
  invalidOptions.forEach(q => {
    console.log(`  ${q.category} ID:${q.id} (${q.options?.length || 0} вариантов)`);
    console.log(`    Вопрос: ${q.question.substring(0, 60)}...`);
  });
}

// 6. Статистика по длине объяснений
console.log('\n' + '='.repeat(80));
console.log('6. СТАТИСТИКА ПО ОБЪЯСНЕНИЯМ');
console.log('='.repeat(80));

const explanationLengths = allQuestions.map(q => q.explanation?.length || 0);
const avgLength = explanationLengths.reduce((a, b) => a + b, 0) / explanationLengths.length;
const minLength = Math.min(...explanationLengths);
const maxLength = Math.max(...explanationLengths);

console.log(`  Средняя длина: ${Math.round(avgLength)} символов`);
console.log(`  Минимальная: ${minLength} символов`);
console.log(`  Максимальная: ${maxLength} символов`);

const lengthRanges = [
  { range: '0-50', count: explanationLengths.filter(l => l < 50).length },
  { range: '50-100', count: explanationLengths.filter(l => l >= 50 && l < 100).length },
  { range: '100-200', count: explanationLengths.filter(l => l >= 100 && l < 200).length },
  { range: '200-300', count: explanationLengths.filter(l => l >= 200 && l < 300).length },
  { range: '300+', count: explanationLengths.filter(l => l >= 300).length }
];

console.log('\n  Распределение по длине:');
lengthRanges.forEach(r => {
  const percent = ((r.count / allQuestions.length) * 100).toFixed(1);
  console.log(`    ${r.range} символов: ${r.count} (${percent}%)`);
});

// 7. Проверка семантических дублей (похожие вопросы)
console.log('\n' + '='.repeat(80));
console.log('7. ПОИСК СЕМАНТИЧЕСКИ ПОХОЖИХ ВОПРОСОВ');
console.log('='.repeat(80));

const similarQuestions = [];
const threshold = 0.7; // порог схожести

function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  if (longer.length === 0) return 1.0;
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Проверка только первых 200 вопросов для скорости
for (let i = 0; i < Math.min(allQuestions.length, 200); i++) {
  for (let j = i + 1; j < Math.min(allQuestions.length, 200); j++) {
    const sim = similarity(allQuestions[i].question, allQuestions[j].question);
    if (sim > threshold && sim < 1.0) {
      similarQuestions.push({
        q1: allQuestions[i],
        q2: allQuestions[j],
        similarity: sim
      });
    }
  }
}

if (similarQuestions.length === 0) {
  console.log('✓ Значительно похожих вопросов не найдено (проверено первые 200)');
} else {
  console.log(`Найдено ${similarQuestions.length} пар похожих вопросов (схожесть > ${threshold}):`);
  similarQuestions.slice(0, 5).forEach(pair => {
    console.log(`\n  Схожесть: ${(pair.similarity * 100).toFixed(1)}%`);
    console.log(`    1. ${pair.q1.category} ID:${pair.q1.id}`);
    console.log(`       "${pair.q1.question.substring(0, 60)}..."`);
    console.log(`    2. ${pair.q2.category} ID:${pair.q2.id}`);
    console.log(`       "${pair.q2.question.substring(0, 60)}..."`);
  });
  if (similarQuestions.length > 5) {
    console.log(`\n  ... и ещё ${similarQuestions.length - 5} пар`);
  }
}

// ИТОГОВЫЙ ОТЧЁТ
console.log('\n' + '='.repeat(80));
console.log('ИТОГОВЫЙ ОТЧЁТ');
console.log('='.repeat(80));

const issues = [
  { name: 'Дублирующиеся ID', count: duplicateIds.length },
  { name: 'Дублирующиеся вопросы', count: duplicateQuestions.length },
  { name: 'Слишком короткие объяснения', count: shortExplanations.length },
  { name: 'Некорректные индексы ответов', count: invalidCorrect.length },
  { name: 'Некорректное количество вариантов', count: invalidOptions.length },
  { name: 'Похожие вопросы', count: similarQuestions.length }
];

const totalIssues = issues.reduce((sum, issue) => sum + issue.count, 0);

console.log(`\nВсего найдено проблем: ${totalIssues}\n`);
issues.forEach(issue => {
  const status = issue.count === 0 ? '✓' : '✗';
  console.log(`  ${status} ${issue.name}: ${issue.count}`);
});

if (totalIssues === 0) {
  console.log('\n✓✓✓ ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ УСПЕШНО! ✓✓✓');
} else {
  console.log('\n⚠ ТРЕБУЕТСЯ ИСПРАВЛЕНИЕ НАЙДЕННЫХ ПРОБЛЕМ');
}

console.log('\n' + '='.repeat(80));
