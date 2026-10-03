export const emptyProgress=()=>({stars:0,learned:[],quizzes:0,lessons:[],results:[]});
export function cleanProgress(value){
 const p=value&&typeof value==='object'?value:{};
 const count=x=>Number.isSafeInteger(x)&&x>=0?x:0;
 const strings=x=>Array.isArray(x)?[...new Set(x.filter(i=>typeof i==='string'))].slice(0,500):[];
 return {stars:count(p.stars),quizzes:count(p.quizzes),learned:strings(p.learned),lessons:strings(p.lessons),results:Array.isArray(p.results)?p.results.filter(r=>r&&typeof r.group==='string'&&typeof r.mode==='string'&&Number.isInteger(r.score)&&r.score>=0&&r.score<=10&&typeof r.date==='string').slice(-50):[]};
}
export function readProgress(storage){try{return cleanProgress(JSON.parse(storage.getItem('tamil-progress')))}catch{return emptyProgress()}}
export function writeProgress(storage,p){try{storage.setItem('tamil-progress',JSON.stringify(cleanProgress(p)));return true}catch{return false}}
export function mergeProgress(local,remote){const a=cleanProgress(local),b=cleanProgress(remote);return cleanProgress({stars:Math.max(a.stars,b.stars),quizzes:Math.max(a.quizzes,b.quizzes),learned:[...a.learned,...b.learned],lessons:[...a.lessons,...b.lessons],results:[...new Map([...b.results,...a.results].map(r=>[JSON.stringify(r),r])).values()].sort((a,b)=>a.date.localeCompare(b.date))})}
