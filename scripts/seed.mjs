import fs from 'fs';
import path from 'path';
const base = path.join(process.cwd(),'data');
const write=(f,obj)=>{const p=path.join(base,f);fs.mkdirSync(path.dirname(p),{recursive:true});if(!fs.existsSync(p))fs.writeFileSync(p,JSON.stringify(obj,null,2));};
write('brand/settings.json',{autonomyLevel:1,activeMode:'Showcase Portfolio',emergencyPause:false,approvalPolicy:'Manual Approval Required'});
write('calendar/posts.json',[
{id:'p1',date:'2026-05-10',platform:'instagram',status:'Awaiting Approval',title:'Logo redesign before/after',caption:'Swipe through transformation.',cta:'Book a brand refresh call.',hashtags:['#graphicdesign','#branding'],approvalDeadline:'2026-05-09T18:00:00Z'},
{id:'p2',date:'2026-05-11',platform:'tiktok',status:'Draft',title:'3-second hook: Bad kerning fixes',caption:'Fix typography fast.',cta:'Follow for daily design tips.',hashtags:['#designtips','#tiktokdesign']},
{id:'p3',date:'2026-05-12',platform:'facebook',status:'Scheduled',title:'Client testimonial spotlight',caption:'How we increased recognition with visual consistency.',cta:'Message me for a free consult.',hashtags:['#smallbusiness','#design']}
]);
write('logs/audit.json',[{timestamp:'2026-05-08T04:00:00Z',action:'generated',platform:'instagram',postId:'p1',source:'system',autonomyLevel:1,result:'success'}]);
console.log('Seed complete');
