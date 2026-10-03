import test from 'node:test';
import assert from 'node:assert/strict';
import {allLetters,lessons,letterGroups,words,sentences,makeQuestion} from '../course-data.js';
import {readProgress,writeProgress,mergeProgress,cleanProgress} from '../progress.js';

test('the lessons cover each of the 247 distinct Tamil letters',()=>{
 assert.equal(allLetters.length,247);
 assert.equal(new Set(allLetters).size,247);
 const covered=new Set(lessons.filter(l=>letterGroups[l.group]).flatMap(l=>l.items));
 assert.deepEqual([...covered].sort(),[...allLetters].sort());
});
test('word and sentence activities can reconstruct their target text',()=>{
 for(const item of words)assert.equal(item.parts.join(''),item.text);
 for(const item of sentences)assert.equal(item.parts.join(' '),item.text);
});
test('quiz answers and distractors stay inside the chosen lesson',()=>{
 for(const lesson of lessons.filter(l=>letterGroups[l.group]&&l.items.length>1)){
  for(let i=0;i<20;i++){
   const q=makeQuestion(lesson.items);
   assert.ok(q.options.includes(q.answer));
   assert.equal(q.options.length,new Set(q.options).size);
   assert.ok(q.options.every(x=>lesson.items.includes(x)));
  }
 }
 assert.throws(()=>makeQuestion(['ஃ']));
});
test('blocked or damaged local storage does not prevent learning',()=>{
 const blocked={getItem(){throw new Error('denied')},setItem(){throw new Error('denied')}};
 assert.equal(readProgress(blocked).stars,0);
 assert.equal(writeProgress(blocked,readProgress(blocked)),false);
 assert.deepEqual(cleanProgress({stars:-3,learned:'broken',lessons:[1,'vowels-1']}),{stars:0,quizzes:0,learned:[],lessons:['vowels-1'],results:[]});
});
test('cloud merge preserves local practice and deduplicates quiz history',()=>{
 const result={group:'vowels',mode:'identify',score:8,date:'2026-10-03T00:00:00.000Z'};
 const merged=mergeProgress({stars:4,learned:['அ'],lessons:['vowels-1'],results:[result]}, {stars:10,learned:['ஆ'],results:[result]});
 assert.equal(merged.stars,10);
 assert.deepEqual(merged.learned,['அ','ஆ']);
 assert.deepEqual(merged.lessons,['vowels-1']);
 assert.equal(merged.results.length,1);
});
