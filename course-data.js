export const vowels = ['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','ஔ'];
export const vowelSounds = ['a','aa','i','ii','u','uu','e','ee','ai','o','oo','au'];
export const roots = ['க','ங','ச','ஞ','ட','ண','த','ந','ப','ம','ய','ர','ல','வ','ழ','ள','ற','ன'];
export const vowelMarks = ['','ா','ி','ீ','ு','ூ','ெ','ே','ை','ொ','ோ','ௌ'];
export const consonants = roots.map(x => x + '்');
export const compounds = roots.flatMap(x => vowelMarks.map(m => x + m));
export const letterGroups = {vowels, consonants, compounds, aytham:['ஃ']};
export const allLetters = [...vowels, ...consonants, ...compounds, 'ஃ'];
export const words = [
 {text:'அம்மா',parts:['அ','ம்','மா'],meaning:'Mother'},
 {text:'அப்பா',parts:['அ','ப்','பா'],meaning:'Father'},
 {text:'மரம்',parts:['ம','ர','ம்'],meaning:'Tree'},
 {text:'மலர்',parts:['ம','ல','ர்'],meaning:'Flower'},
 {text:'பல்',parts:['ப','ல்'],meaning:'Tooth'},
 {text:'பழம்',parts:['ப','ழ','ம்'],meaning:'Fruit'},
 {text:'நீர்',parts:['நீ','ர்'],meaning:'Water'},
 {text:'வீடு',parts:['வீ','டு'],meaning:'House'},
 {text:'நாய்',parts:['நா','ய்'],meaning:'Dog'},
 {text:'பூ',parts:['பூ'],meaning:'Flower'},
 {text:'மீன்',parts:['மீ','ன்'],meaning:'Fish'},
 {text:'கண்',parts:['க','ண்'],meaning:'Eye'}
];
export const sentences = [
 {text:'நான் தமிழ் படிக்கிறேன்.',parts:['நான்','தமிழ்','படிக்கிறேன்.'],meaning:'I study Tamil.'},
 {text:'இது ஒரு மலர்.',parts:['இது','ஒரு','மலர்.'],meaning:'This is a flower.'},
 {text:'இது என் வீடு.',parts:['இது','என்','வீடு.'],meaning:'This is my house.'},
 {text:'நாய் ஓடுகிறது.',parts:['நாய்','ஓடுகிறது.'],meaning:'The dog is running.'},
 {text:'நான் நீர் குடிக்கிறேன்.',parts:['நான்','நீர்','குடிக்கிறேன்.'],meaning:'I drink water.'}
];
export const lessons = [
 {id:'vowels-1',title:'Our first four vowels',group:'vowels',items:vowels.slice(0,4),week:'Week 1',tip:'Say அ briefly and hold ஆ a little longer. Do the same with இ and ஈ. Listen to an adult and notice how your mouth moves.'},
 {id:'vowels-2',title:'Four more vowel friends',group:'vowels',items:vowels.slice(4,8),week:'Week 2',tip:'Round your lips for உ and ஊ. Listen carefully to the shorter எ and longer ஏ. Do not rush the long sounds.'},
 {id:'vowels-3',title:'Finish the vowel garden',group:'vowels',items:vowels.slice(8),week:'Week 3',tip:'Explore ஐ and ஔ with an adult. Compare short ஒ and long ஓ. Then revisit all twelve vowels.'},
 {id:'consonants-1',title:'Strong consonants',group:'consonants',items:['க்','ச்','ட்','த்','ப்','ற்'],week:'Week 4',tip:'The dot is called pulli. These are consonants without a vowel. Listen to an adult; do not add an extra “uh” at the end.'},
 {id:'consonants-2',title:'Gentle consonants',group:'consonants',items:['ங்','ஞ்','ண்','ந்','ம்','ன்'],week:'Week 5',tip:'These sounds use the nose. Ask an adult to demonstrate ண், ந் and ன் in familiar words; their tongue positions differ.'},
 {id:'consonants-3',title:'The in-between sounds',group:'consonants',items:['ய்','ர்','ல்','வ்','ழ்','ள்'],week:'Week 6',tip:'Pay special attention to ல், ள் and ழ். They are distinct sounds. Listen and copy an adult slowly without forcing your tongue.'},
 ...roots.map((root,i)=>({id:`family-${i}`,title:`The ${root} letter family`,group:'compounds',items:vowelMarks.map(m=>root+m),week:`Week ${7+Math.floor(i/3)}`,tip:`${root}் + அ = ${root}. ${root}் + ஆ = ${root}ா. Notice how the vowel sign changes. Learn four combinations at a time, then practise all twelve.`})),
 {id:'aytham',title:'Meet the special letter',group:'aytham',items:['ஃ'],week:'Week 12',tip:'ஃ is called ஆய்த எழுத்து. It is a special letter, not another vowel. Ask a Tamil teacher to explain its use in context; avoid treating it as a stand-alone English “h”.'},
 {id:'words-family',title:'Words for our family',group:'words',items:['அம்மா','அப்பா'],week:'Week 13',tip:'Build each word, read it, and say it to someone in your family. Notice the doubled consonant.'},
 {id:'words-nature',title:'Words around us',group:'words',items:['மரம்','மலர்','பழம்','நீர்','பூ','மீன்'],week:'Weeks 14–15',tip:'Point to a real object or a picture. Build its word and say it. Listen for short and long vowels.'},
 {id:'words-everyday',title:'Everyday word explorers',group:'words',items:['பல்','வீடு','நாய்','கண்'],week:'Week 16',tip:'Find these words around you. Read the whole word after reading each part. Ask an adult to check the sounds.'},
 {id:'sentence-1',title:'Name things in a sentence',group:'sentences',items:sentences.slice(1,3).map(s=>s.text),week:'Weeks 17–18',tip:'Start with “இது” (this), then say what it is. Put the words in order and read the full sentence.'},
 {id:'sentence-2',title:'Tell someone what happens',group:'sentences',items:[sentences[0].text,...sentences.slice(3).map(s=>s.text)],week:'Weeks 19–20',tip:'Find who the sentence is about and what they do. Tamil commonly places the action word at the end.'},
 {id:'speech-greetings',title:'Hello, thank you, and me',group:'speech',items:['வணக்கம்','நன்றி','என் பெயர்'],week:'Weeks 21–22',tip:'Greet someone and say your name after “என் பெயர்”. Take turns with an adult. Speech recognition may not recognize an unfinished phrase.'},
 {id:'speech-story',title:'My little Tamil story',group:'speech',items:sentences.map(s=>s.text),week:'Weeks 23–24',tip:'Say two or three sentences about your day with an adult. Compare formal reading with the Tamil your family speaks.'}
];
export function makeQuestion(pool, random=Math.random) {
 const unique=[...new Set(pool)];
 if(unique.length<2) throw new Error('A quiz needs at least two distinct choices.');
 const mix=items=>items.map(v=>({v,key:random()})).sort((a,b)=>a.key-b.key).map(x=>x.v);
 const answer=unique[Math.floor(random()*unique.length)];
 return {answer,options:mix([answer,...mix(unique.filter(x=>x!==answer)).slice(0,3)])};
}
