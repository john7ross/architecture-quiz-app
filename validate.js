const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'new_questions.js');
const content = fs.readFileSync(filePath, 'utf-8');

// Split by section comments
const sections = content.split(/^\/\/ -+$/m);
const dochubSection = sections.find(s => s.includes('Дополнительные вопросы по DoChub'));
const dddSection = sections.find(s => s.includes('Дополнительные вопросы по DDD'));
const archSection = sections.find(s => s.includes('Дополнительные вопросы по архитектуре'));

function countIdsInSection(section) {
  if (!section) return 0;
  const ids = [...section.matchAll(/"id":\s*(\d+)/g)].map(m => parseInt(m[1]));
  return ids.length;
}

function getMaxIdInSection(section) {
  if (!section) return 0;
  const ids = [...section.matchAll(/"id":\s*(\d+)/g)].map(m => parseInt(m[1]));
  return ids.length > 0 ? Math.max(...ids) : 0;
}

function checkIdRange(section, expectedStart, name) {
  if (!section) return;
  const ids = [...section.matchAll(/"id":\s*(\d+)/g)].map(m => parseInt(m[1]));
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  console.log(`\n=== ${name} ===`);
  console.log(`Количество вопросов: ${ids.length}`);
  console.log(`Диапазон ID: ${ids.length > 0 ? Math.min(...ids) : '-'} - ${maxId}`);
  console.log(`Ожидаемый старт: ${expectedStart}`);
  
  // Check for duplicates
  const uniqueIds = new Set(ids);
  if (uniqueIds.size !== ids.length) {
    console.log(`  ✗ Найдены дубликаты ID`);
  } else {
    console.log(`  ✓ ID уникальны`);
  }
  
  // Check overlap with old IDs
  let overlap = 0;
  for (const id of ids) {
    if (id <= expectedStart - 1) {
      overlap++;
      console.log(`  ⚠ ID ${id} пересекается с существующими (ожидалось >= ${expectedStart})`);
    }
  }
  if (overlap === 0) {
    console.log(`  ✓ Нет пересечений с существующими ID`);
  }
}

checkIdRange(dochubSection, 172, 'DoChub (ожидалось id >= 172)');
checkIdRange(dddSection, 61, 'DDD (ожидалось id >= 61)');
checkIdRange(archSection, 103, 'Архитектура (ожидалось id >= 103)');

const dochubNew = countIdsInSection(dochubSection);
const dddNew = countIdsInSection(dddSection);
const archNew = countIdsInSection(archSection);

const oldTotal = 171 + 60 + 102;
const newTotal = dochubNew + dddNew + archNew;

console.log(`\n=== ИТОГО ===`);
console.log(`Старое количество: ${oldTotal} (171 + 60 + 102)`);
console.log(`Новое количество:  ${newTotal} (${dochubNew} + ${dddNew} + ${archNew})`);
console.log(`Общее после объединения: ${oldTotal + newTotal}`);
console.log(`\nDoChub: 171 + ${dochubNew} = ${171 + dochubNew}`);
console.log(`DDD:     60 + ${dddNew} = ${60 + dddNew}`);
console.log(`Архитектура: 102 + ${archNew} = ${102 + archNew}`);
