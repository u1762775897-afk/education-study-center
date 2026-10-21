(()=>{
const docs=window.studyArchive||[];
const topics={
'德育':[
['德育概述','德育的内涵','广义德育包括思想、政治、道德、法治与心理健康等方面的教育；狭义德育主要指道德教育。','辨析：德育不是只讲道德知识。'],
['德育概述','德育任务与内容','形成正确思想观念、良好道德品质与行为习惯；内容可涉及理想信念、爱国主义、集体主义、劳动、法治等。','结合教材及地区考试大纲记忆具体分类。'],
['德育过程','基本矛盾','教育者提出的德育要求与受教育者已有品德水平之间的矛盾。','基本矛盾≠学生内部知与行的矛盾。'],
['德育过程','知情意行','知：道德认识（基础）；情：道德情感（动力）；意：道德意志（保障）；行：道德行为（关键、外在表现）。','德育可以从知、情、意、行任何一个环节切入。'],
['德育过程','活动与交往','德育过程是组织学生的活动与交往、统一多方面教育影响的过程。','重视实践，不是单纯灌输。'],
['德育过程','长期性与反复性','思想品德发展是长期、反复、逐步提高的过程。','反复性是正常规律，不代表德育失败。'],
['德育原则','导向性原则','坚持正确的思想政治方向与价值导向。','关键词：方向、目标、理想。'],
['德育原则','疏导原则','循循善诱、以理服人、启发自觉，正面引导。','问“原则”选疏导；问“方法”可能选说服教育法。'],
['德育原则','尊重学生与严格要求相结合','尊重、信任、爱护学生，同时提出合理而严格的要求。','马卡连柯：尽可能多地要求一个人，也尽可能多地尊重一个人。'],
['德育原则','教育影响一致性与连贯性','学校、家庭、社会等教育力量协调一致，前后要求保持连贯。','关键词：家校社协同、教育合力。'],
['德育原则','因材施教','“视其所以，观其所由，察其所安”强调全面了解学生、针对差异施教。','易错：不是知行统一。'],
['德育原则','知行统一','“力行近乎仁”强调身体力行、实践践行；认识与行动相结合。','易错：不是因材施教。'],
['德育原则','正面教育与纪律约束相结合','正面引导与必要的纪律约束结合。','正面教育不等于没有纪律。'],
['德育原则','依靠积极因素克服消极因素','发现并发扬学生优点，以积极因素促进消极因素转化。','关键词：长善救失、扬长避短。'],
['德育方法','说服教育法','讲解、谈话、讨论、报告等方式，提高道德认识。','以理服人、讲事实摆道理。'],
['德育方法','榜样示范法','以榜样人物的思想、行为影响学生。','关键词：言传身教、模范人物。'],
['德育方法','实际锻炼法','通过实践活动、行为训练形成良好行为习惯。','关键词：亲身实践。'],
['德育方法','情感陶冶法','利用环境、艺术、情境等潜移默化地感染学生。','关键词：春风化雨、环境熏陶。'],
['德育方法','品德评价法','奖励、惩罚、评比、操行评定等。','区别学生自我反省的道德修养法。'],
['德育方法','道德修养法','引导学生自我反省、自我评价、自我控制。','关键词：慎独、座右铭、自省。'],
['德育模式','认知发展模式','皮亚杰、科尔伯格；道德两难故事讨论促进道德判断发展。','科尔伯格的道德发展阶段理论常考。'],
['德育模式','体谅模式','麦克费尔：关怀他人、理解他人、移情和角色扮演。','关键词：体谅、关怀。'],
['德育模式','社会学习模式','班杜拉：观察学习、模仿和榜样作用。','区别榜样示范法与社会学习理论。'],
['教师影响','罗森塔尔效应','教师期望通过关注、鼓励、反馈影响学生表现，又称皮格马利翁效应。','关键词：教师期望—反馈—进步。']
],
'课程':[
['课程基本概念','国家课程','国家课程的典型特征：统一性、基础性、强制性。','多样性不是国家课程的典型特征。'],
['课程目标','体验性目标与表现性目标','体验性：经历、感受；表现性：开放表达、创作。','表现性目标允许不同的成果呈现。'],
['课程模式','目标模式','泰勒：科学取向，强调目标、可测量与评价。','泰勒原理：目标、经验、组织、评价。'],
['课程模式','过程模式','思想源头：卢梭；代表：斯滕豪斯，重视课程实践过程。','不以预设行为目标为唯一标准。'],
['课程内容组织','泰勒组织原则','连续性、顺序性、整合性。','连续＝反复出现；顺序＝逐步加深；整合＝横向联系。'],
['课程内容组织','螺旋式课程','布鲁纳：学科基本结构、发现学习、螺旋式课程。','小学测量三角形内角和，中学再证明，属于螺旋式组织。'],
['课程流派','要素主义','巴格莱：重基础知识、基本技能。','与永恒主义的经典名著区分。'],
['课程流派','永恒主义','赫钦斯、阿德勒：经典名著、永恒真理。','与要素主义的基础知识区分。'],
['课程实施','课程实施取向','忠实取向、相互适应取向、创生取向。','教师按情境调整课程＝相互适应取向。'],
['小学课程','小学阶段课程特点','普及性、基础性、发展性。','不要误记为“科学性、普及性、发展性”。']
],
'教育制度':[
['学校教育制度','广义教育制度','包括教育考试制度、教育领导体制、各级各类学校制度等。','教材是教学内容载体，不属于制度。'],
['学制史','壬寅学制','1902年颁布，但未实行。','与癸卯学制区别。'],
['学制史','癸卯学制','1904年正式实施；中学为体、西学为用。','与1922年壬戌学制区别。'],
['学制史','壬戌学制','1922年，六三三学制；强调平民教育精神与个性发展。','易混：不是中学为体、西学为用。'],
['教育制度发展','三个阶段','前制度化→制度化→非制度化。','非制度化不是取消教育。'],
['教育思想','伊里奇','《非学校化社会》，主张学习网络，属于非制度化教育。','学习网络不单指互联网网课。'],
['终身教育','四大支柱','学会认知、学会做事、学会共同生活、学会生存。','与终身教育理念联系记忆。']
],
'学生与教师':[
['学生发展','学生主观能动性','主要表现为自觉性、独立性、创造性。','自觉性、独立性、创造性需一起背。'],
['教师影响','罗森塔尔效应','教师期望—积极反馈—学生表现改善。','又称皮格马利翁效应。']
]
};
const groups=['德育','教育制度','学生与教师','课程','教学基本概念','教学过程','教学原则','教学方法','教学模式','教学组织形式','教学常规','教学评价','教育思想'];
let section='知识总览',chapter='德育',term='',state={};try{state=JSON.parse(localStorage.getItem('study_v4')||'{}')}catch(e){}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const css=`*{box-sizing:border-box}body{margin:0;background:#f8fafc;color:#20324c;font:15px/1.75 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}button,input{font:inherit}button{cursor:pointer}.wrap{max-width:1180px;margin:auto;padding:0 22px}.hero{background:#fff;border-bottom:1px solid #e5ebf2}.hero .wrap{padding-top:27px;padding-bottom:24px}.eyebrow{font-size:11px;letter-spacing:2px;font-weight:800;color:#5579b4}.hero h1{font-size:29px;margin:4px 0 6px;color:#1c355d}.hero p{color:#7b8ba3;font-size:13px;margin:0}.tabs{display:flex;gap:6px;overflow:auto;padding:14px 0;scrollbar-width:none}.tabs button{background:transparent;border:0;color:#647791;border-radius:9px;padding:10px 17px;white-space:nowrap;font-weight:700}.tabs button.on{background:#eaf1ff;color:#2756ae}.topnav{background:#fff;border-bottom:1px solid #e8edf4;position:sticky;top:0;z-index:4}.layout{display:grid;grid-template-columns:196px 1fr;gap:25px;padding-top:24px}.sidebar{height:max-content;position:sticky;top:80px}.side-label{font-size:11px;font-weight:800;letter-spacing:1.3px;color:#a2aec0;margin:5px 0 10px 12px}.side-btn{display:block;width:100%;text-align:left;border:0;background:transparent;color:#718199;padding:10px 14px;border-radius:9px}.side-btn.on{background:#e9f0ff;color:#2b56ad;font-weight:800}.main{min-width:0;padding-bottom:40px}.heading{display:flex;align-items:flex-end;justify-content:space-between;gap:15px;margin:0 0 18px}.heading h2{font-size:23px;margin:0}.heading p{color:#8493a7;font-size:12px;margin:2px 0}.count{font-size:12px;color:#7791b7}.search{width:100%;border:1px solid #e0e7f1;background:#fff;border-radius:10px;padding:12px 15px;outline:none;margin-bottom:18px}.search:focus{border-color:#7099e6}.map{background:#fff;border:1px solid #e4eaf3;border-radius:17px;padding:24px 27px;box-shadow:0 5px 22px #24395907}.map-center{text-align:center;background:#264f96;color:white;border-radius:12px;padding:15px 22px;font-weight:800;margin:0 auto 22px;max-width:360px}.branch{display:grid;grid-template-columns:155px 1fr;gap:16px;margin:0 0 13px;align-items:stretch}.branch-name{background:#eaf1fe;border-left:4px solid #4877ce;color:#2d569f;border-radius:9px;padding:15px 12px;font-weight:800;display:flex;align-items:center}.branch-items{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:9px}.node{background:#f9fbff;border:1px solid #e1e9f5;border-radius:9px;padding:11px 13px}.node strong{font-size:13px;color:#304d78}.node span{display:block;color:#6b7f9c;font-size:12px;line-height:1.65;margin-top:5px}.note{background:#fff;border:1px solid #e5eaf2;border-radius:13px;margin-bottom:12px;padding:20px 22px;box-shadow:0 4px 14px #29406006}.note-top{display:flex;justify-content:space-between;gap:10px;align-items:center}.label{font-size:11px;color:#5578b2;background:#edf3ff;border-radius:50px;padding:3px 10px}.note h3{font-size:17px;margin:10px 0 9px;color:#203c67}.answer{font-size:15px;line-height:1.9;color:#293d59;margin:8px 0}.warning{font-size:13px;color:#84613b;background:#fff8eb;border-left:3px solid #e6b45f;border-radius:5px;padding:9px 12px;margin-top:13px}.actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px}.action{border:1px solid #dce5f3;border-radius:8px;background:#f5f8ff;color:#4266a2;font-size:12px;padding:7px 11px}.action.done{background:#e9f6f1;border-color:#c8e8db;color:#2e7860}.quiz{margin-top:13px;border-top:1px dashed #dce4ee;padding-top:12px}.quiz summary{color:#426db6;font-size:13px;font-weight:700;cursor:pointer}.archive{white-space:pre-wrap;word-break:break-word;font-size:13px;line-height:1.95;background:#f7f9fd;padding:15px;border-radius:9px;margin-top:12px}.document{background:#fff;border:1px solid #e5eaf2;border-radius:12px;padding:18px;margin:12px 0}.document summary{cursor:pointer;color:#365e9f;font-weight:700}.document p{color:#8291a7;font-size:12px}.empty{padding:45px 20px;text-align:center;color:#8c9aaf;background:white;border-radius:12px}.foot{text-align:center;color:#99a7ba;font-size:12px;padding:28px}.help{font-size:13px;color:#7588a3;margin:0 0 18px}.archive-alert{background:#fff8e8;color:#80602d;padding:12px;border-radius:9px;font-size:12px}@media(max-width:760px){.wrap{padding:0 13px}.hero .wrap{padding-top:20px;padding-bottom:17px}.hero h1{font-size:23px}.layout{display:block;padding-top:16px}.sidebar{position:static;display:flex;overflow:auto;gap:4px;margin-bottom:16px}.side-label{display:none}.side-btn{width:auto;white-space:nowrap;font-size:12px;padding:8px 12px}.map{padding:16px 12px}.branch{grid-template-columns:1fr;gap:6px}.branch-name{padding:9px 12px}.branch-items{grid-template-columns:1fr 1fr}.note{padding:16px}.heading h2{font-size:20px}}@media(max-width:390px){.branch-items{grid-template-columns:1fr}}@media print{.hero,.topnav,.sidebar,.search,.actions{display:none!important}.layout{display:block}.note,.branch{break-inside:avoid}}`;
document.head.innerHTML='<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>教育学 · 高效背诵工作台</title><style>'+css+'</style>';
document.body.innerHTML='<header class="hero"><div class="wrap"><div class="eyebrow">TEACHER EXAM / STUDY DESK</div><h1>教育学 · 高效背诵工作台</h1><p>先看完整知识框架，再背人物与高频考点，错题紧贴笔记复盘</p></div></header><nav class="topnav"><div class="wrap tabs" id="tabs"></div></nav><div class="wrap layout"><aside class="sidebar" id="sidebar"></aside><main class="main"><div class="heading"><div><h2 id="heading"></h2><p id="description"></p></div><span class="count" id="count"></span></div><input class="search" id="search" placeholder="搜索人物、概念、考点、易错辨析"><div id="content"></div></main></div><div class="foot">所有知识框架直接展开 · 学习记录仅保存在本机</div>';
function save(){localStorage.setItem('study_v4',JSON.stringify(state))}
function docCards(){return docs.map(d=>'<div class="document"><details><summary>'+esc(d.title)+'</summary><p>'+esc(d.source)+'</p><div class="archive">'+esc(d.text)+'</div></details></div>').join('')}
function render(){document.getElementById('tabs').innerHTML=['知识总览','背诵笔记＋错题','原始错题库','资料管理'].map(t=>'<button class="'+(t===section?'on':'')+'" data-tab="'+t+'">'+t+'</button>').join('');document.getElementById('sidebar').innerHTML='<div class="side-label">学习章节</div>'+groups.map(g=>'<button class="side-btn '+(g===chapter?'on':'')+'" data-chapter="'+g+'">'+g+'</button>').join('');document.getElementById('heading').textContent=chapter+' · '+section;document.getElementById('description').textContent=section==='知识总览'?'所有知识分支全部展开，不需要逐个点击。':section==='背诵笔记＋错题'?'完整答案直接可见，人物、概念、易错点放在一起背。':section==='原始错题库'?'保留原PDF解析文字，避免丢失题目和解释。':'三份历史资料及学习记录。';let q=term.toLowerCase(),data=(topics[chapter]||[]).filter(x=>x.join(' ').toLowerCase().includes(q));document.getElementById('count').textContent=data.length+' 个整理考点';let box=document.getElementById('content');if(section==='知识总览'){let branches={};data.forEach(x=>(branches[x[0]]??=[]).push(x));box.innerHTML='<p class="help">无需点击：每个分支、人物与记忆关键词已全部展开。</p><div class="map"><div class="map-center">'+esc(chapter)+' · 完整知识框架</div>'+Object.entries(branches).map(([g,items])=>'<div class="branch"><div class="branch-name">'+esc(g)+'</div><div class="branch-items">'+items.map(x=>'<div class="node"><strong>'+esc(x[1])+'</strong><span>'+esc(x[2])+'</span></div>').join('')+'</div></div>').join('')+(data.length?'':'<div class="empty">本章完整思维框架仍需补充，原始错题资料可在资料管理查看。</div>')+'</div>'}else if(section==='背诵笔记＋错题'){box.innerHTML='<p class="help">先直接背诵蓝色重点，再看黄色易错辨析；下面附原始错题全文。</p>'+data.map((x,i)=>{let id=chapter+'-'+x[1];return '<div class="note"><div class="note-top"><span class="label">'+esc(x[0])+'</span><span class="count">重点 '+String(i+1).padStart(2,'0')+'</span></div><h3>'+esc(x[1])+'</h3><div class="answer">'+esc(x[2])+'</div><div class="warning">易错辨析｜'+esc(x[3])+'</div><div class="actions"><button class="action '+(state[id]?'done':'')+'" data-master="'+esc(id)+'">'+(state[id]?'✓ 已掌握':'○ 标记掌握')+'</button></div></div>'}).join('')+'<h3>原始错题资料（全文）</h3>'+docCards()}else if(section==='原始错题库'){box.innerHTML='<p class="help">原始资料已全文归档。注意：PDF解析文字仍有排版错位，尚未逐题精修。</p>'+docCards()}else{box.innerHTML='<p class="help">原始资料均已归档为文本。学习进度可以导出，换设备时导入。</p>'+docs.map(d=>'<div class="document"><strong>'+esc(d.source)+'</strong><p>'+d.text.length+' 字符 · 已归档</p></div>').join('')+'<button class="action" id="export">导出学习进度</button><button class="action" id="import">导入学习进度</button><input type="file" id="upload" accept=".json" hidden><p class="archive-alert">原始PDF文件尚未上传网站，目前保留的是PDF文字解析版本。</p>'}}
document.addEventListener('click',e=>{let b=e.target.closest('button');if(!b)return;if(b.dataset.tab){section=b.dataset.tab;render()}else if(b.dataset.chapter){chapter=b.dataset.chapter;term='';document.getElementById('search').value='';render()}else if(b.dataset.master){state[b.dataset.master]=!state[b.dataset.master];save();render()}else if(b.id==='export'){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(state)],{type:'application/json'}));a.download='教育学背诵进度.json';a.click()}else if(b.id==='import'){document.getElementById('upload').click()}});
document.getElementById('search').addEventListener('input',e=>{term=e.target.value;render()});document.addEventListener('change',e=>{if(e.target.id==='upload'&&e.target.files[0]){let r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);save();render()}catch(err){alert('文件格式错误')}};r.readAsText(e.target.files[0])}});
render();
})();