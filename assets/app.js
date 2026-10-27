/* 梅島動物醫院 — shared behaviour: i18n toggle, nav ramp, scroll reveals, glass carousel.
   ZH source lives in each page's markup (data-i18n). EN lives in the dict below (union of all pages).
   Missing EN key falls back to the ZH source. */
const I18N = { en:{
  /* nav + CTAs */
  "nav.services":"Services","nav.about":"About","nav.visit":"Visit","nav.home":"Home",
  "cta.book":"Book on LINE","cta.call":"Call us","cta.tel":"04-2462-6616",
  /* home hero + card */
  "hero.display":"ENTRUSTED CARE","hero.sub":"Your pet's family doctor · Xitun, Taichung",
  "hero.body":"Led by a Japan-trained director, we support pets through diagnosis, treatment, surgery, preventive care and long-term follow-up with calm, careful clinical care.",
  "card.k":"Trusted care","card.s1":"20 years in Xitun, caring for countless families' pets.","card.s2":"Japan-trained director — consults in Chinese, English & Japanese.","card.s3":"Diagnosis, treatment and follow-up care in one clinic.",
  "hero.t1":"in Xitun","hero.t2":"3 languages","hero.t3":"medical care","hero.b1u":" yrs","hero.b2":"ZH · EN · JA","hero.b3":"Exam · Test · Follow-up","vacc.b1":"Rabies","vacc.b2":"Recheck","vacc.b3":"Prevention",
  /* home pet scroll-film */
  "pet.kicker":"Everyday at 梅島","pet.h2":"Here, every visit stays calm","pet.sub":"A quiet clinic flow, careful observation and clear follow-up guidance help pets receive care with less stress.",
  /* home 院所環境 split */
  "scene.kicker":"Our space","scene.h":"A calm clinic for diagnosis and follow-up","scene.p1":"Bright, quiet consult rooms and in-house equipment support examination, diagnosis and treatment without unnecessary transfers.","scene.p2":"The team keeps each visit steady and low-stress, with clear explanations for follow-up care at home.",
  "scene.c1":"Consult rooms","scene.c2":"In-house equipment","scene.c3":"Low-stress care",
  /* home services teaser */
  "services.kicker":"Clinical care","services.h2":"Medical care for each life stage",
  "svc.med.t":"General Medicine","svc.med.d":"Consultation, diagnosis, imaging, bloodwork, surgery, anaesthesia and dental scaling with structured follow-up.","svc.med.tag":"Diagnosis · Surgery · Imaging · Dental",
  "svc.groom.t":"Skin & Coat Care","svc.groom.d":"Skin and coat care is handled with medical separation and observation, so cleaning and trimming support comfort and health.","svc.groom.tag":"Skin observation · separated flow",
  "svc.rx.t":"Medication & Follow-up","svc.rx.d":"In-house dispensing, medication guidance and follow-up consultation help long-term and senior-pet care stay consistent.","svc.rx.tag":"Medication · Recheck · Senior care",
  /* home story */
  "story.kicker":"About · From the director","story.h2":"Bringing Japan back to Xitun,<br>one visit at a time",
  "story.p1":"Dr. Tu, our director, trained in Japan and speaks both English and Japanese — drawing expat families from across the city.",
  "story.p2":"He brings a <span class='em'>refined, quiet, attentive</span> Japanese standard into the consult room, returning to Japan regularly to bring back newer techniques and medicines for Xitun's pets.",
  /* vaccine LINE CTA */
  "vacc.kicker":"LINE health reminders","vacc.h2":"Add us on LINE — never miss<br>a vaccine or recheck",
  "vacc.p":"Once your pet is linked, we'll proactively remind you on LINE before rabies vaccines, preventive care and regular rechecks.",
  "vacc.cta":"Add LINE for reminders","vacc.l1":"Reminded 30 days before due","vacc.l2":"Never miss a chronic recheck","vacc.l3":"Preventive care follow-up",
  /* visit / hours */
  "visit.kicker":"Visit us","visit.h2":"Booking welcome","visit.addrk":"Address","visit.telk":"Phone","visit.hrk":"Mon–Sat","visit.sunk":"Sunday","visit.sunv":"Closed","visit.map":"Open in Google Maps",
  /* footer */
  "foot.tag":"Xitun, Taichung · 20 years of refined Japanese care<br>Diagnosis · Surgery · Preventive care","foot.contact":"Contact","foot.hours":"Hours","foot.hr1":"Mon–Sat　09:00 – 21:30","foot.hr2":"Sunday　Closed","foot.note":"Umesima Animal Hospital",

  /* ===== SERVICES page ===== */
  "sp.kicker":"Clinical care","sp.h1":"Diagnosis, treatment and long-term care","sp.sub":"From routine consultation to surgery, dental care, preventive care and follow-up, we support each pet's health over time.",
  "sm.h":"General Medicine","sm.p1":"Internal medicine, imaging, bloodwork and surgery experience are supported by in-house equipment, so diagnosis and treatment can move efficiently.","sm.p2":"The director keeps each clinical step careful and calm, with clear explanations and follow-up plans for home care.",
  "sm.c1":"Digital X-ray","sm.c2":"Ultrasound","sm.c3":"Blood analyser","sm.c4":"Surgery","sm.c5":"Gas anaesthesia","sm.c6":"Ultrasonic dental scaling",
  "sg.h":"Skin & Coat Care","sg.p1":"Cleaning and trimming are arranged with a separated clinical flow, reducing contact with sick patients and keeping skin observation in view.","sg.p2":"Care focuses on skin condition, coat hygiene and comfort, with medical consultation recommended when symptoms are found.",
  "sg.c1":"Skin observation","sg.c2":"Separated flow","sg.c3":"Care guidance",
  "sd.h":"Medication & Follow-up","sd.p1":"In-house dispensing supports treatment after consultation, with medication instructions based on each pet's condition and weight.","sd.p2":"For chronic disease, senior-pet care or post-surgery recovery, follow-up consultation helps the care plan stay consistent.","sd.c1":"In-house dispensing","sd.c2":"Recheck guidance","sd.c3":"Senior-pet care",

  /* ===== ABOUT page ===== */
  "ap.kicker":"About 梅島","ap.h1":"A Japanese standard of care, in Xitun","ap.sub":"Twenty years caring for the neighbourhood's pets, led by a Japan-trained director.",
  "ab.h":"Bringing Japan back to every visit","ab.p1":"Dr. Tu, our director, trained in Japan and consults in Chinese, English and Japanese — which is why expat families across the city find their way here.",
  "ab.p2":"He brings a <span class='em'>refined, quiet, attentive</span> Japanese standard into the consult room, and returns to Japan regularly to bring back newer techniques and medicines.",
  "ab.p3":"Twenty years in, that same standard now sits behind every diagnosis, every surgery, every recheck and every long-term health plan.",
  "ph.k":"Our standard","ph.h":"Three things we never rush",
  "ph1.t":"Careful","ph1.p":"Small signs matter. We examine thoroughly and explain what we find, plainly.",
  "ph2.t":"Calm","ph2.p":"A quiet clinic is a kinder clinic. We keep stress low for pet and owner alike.",
  "ph3.t":"Precise","ph3.p":"Full in-house equipment and a disciplined Japanese flow keep every step exact.",
  "at.k":"Equipped in-house","at.h":"The tools to decide on the spot","at.p":"X-ray, ultrasound, blood analyser, a surgical suite with gas anaesthesia, and ultrasonic dental scaling — so most answers come the same visit, not days later.",

  /* ===== CONTACT page ===== */
  "cp.kicker":"Visit & Contact","cp.h1":"Come see us","cp.sub":"Booking is by LINE or phone — message us and we'll confirm a time.",
  "cb.h":"Book the easy way — on LINE","cb.p":"Add our LINE official account, tell us your pet and a preferred time, and we'll confirm. Prefer to talk? Just call.",
  "cb.cta":"Book on LINE","cn.h":"Before your first visit","cn.p":"If you have them, bring your pet's <b>past records, medication list and vaccination history</b>. For follow-up consultation, please share the current symptoms and previous test results in advance.",
  "contact.fbk":"Find us on Facebook"
}};

const langBtn=document.getElementById("langBtn");
const ZH={}; document.querySelectorAll("[data-i18n]").forEach(el=>ZH[el.dataset.i18n]=el.innerHTML);
function setLang(l){
  const html=document.documentElement;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(l==="en"&&I18N.en[k]!=null)el.innerHTML=I18N.en[k];
    else if(ZH[k]!=null)el.innerHTML=ZH[k];
  });
  html.lang=l==="en"?"en":"zh-Hant"; html.dataset.lang=l;
  if(langBtn)langBtn.textContent=l==="en"?"中文":"EN";
  try{localStorage.setItem("meidao_lang",l)}catch(e){}
}
if(langBtn)langBtn.addEventListener("click",()=>setLang(document.documentElement.dataset.lang==="en"?"zh":"en"));
try{const s=localStorage.getItem("meidao_lang");if(s==="en")setLang("en")}catch(e){}

/* nav scroll ramp */
const nav=document.getElementById("nav");
if(nav){const onScroll=()=>nav.classList.toggle("scrolled",window.scrollY>40);onScroll();
  window.addEventListener("scroll",onScroll,{passive:true});}

const mbar=document.querySelector(".mbar");
if(mbar){
  const onMbar=()=>{
    const threshold=Math.min(560,window.innerHeight*.62);
    mbar.classList.toggle("show",window.innerWidth<=880&&window.scrollY>threshold);
  };
  onMbar();
  window.addEventListener("scroll",onMbar,{passive:true});
  window.addEventListener("resize",onMbar);
}

/* hero + scroll reveals */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const heroEl=document.querySelector(".hero");
if(heroEl)requestAnimationFrame(()=>heroEl.classList.add("in"));
if(!reduce&&"IntersectionObserver" in window){
  document.documentElement.classList.add("reveal");
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -5% 0px"});
  document.querySelectorAll(".r,.story").forEach(el=>io.observe(el));
  // self-heal: never leave content hidden if the observer misses (mobile flings, bfcache restore, throttled tabs)
  addEventListener("load",()=>setTimeout(()=>document.querySelectorAll(".r:not(.in),.story:not(.in)").forEach(el=>el.classList.add("in")),1800));
}else{document.querySelectorAll(".r,.story").forEach(el=>el.classList.add("in"))}

/* mobile menu — inject hamburger + panel (keeps all 4 pages' markup DRY) */
(function(){
  const navR=document.querySelector(".nav-r");
  const links=document.querySelector(".nav-links");
  const navEl=document.getElementById("nav");
  if(!navR||!links||!navEl)return;
  const btn=document.createElement("button");
  btn.className="nav-toggle";btn.setAttribute("aria-label","選單 / menu");
  btn.setAttribute("aria-expanded","false");btn.setAttribute("aria-controls","mMenu");
  btn.innerHTML="<span></span>";navR.appendChild(btn);
  const menu=document.createElement("div");menu.className="m-menu";menu.id="mMenu";
  document.body.appendChild(menu);
  function build(){
    const items=[...links.querySelectorAll("a")]
      .map(a=>`<a href="${a.getAttribute("href")}">${a.textContent}<span class="ar" aria-hidden="true">→</span></a>`).join("");
    const mb=document.querySelectorAll(".mbar a span");
    const lineT=mb[0]?mb[0].textContent:"LINE";
    const callT=mb[1]?mb[1].textContent:"Tel";
    menu.innerHTML=items+
      `<div class="m-line"><a class="line" href="https://lin.ee/q2NhyMW" data-line>${lineT}</a>`+
      `<a class="call" href="tel:+886424626616">${callT}</a></div>`;
    menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
  }
  function open(){build();menu.classList.add("open");btn.classList.add("open");navEl.classList.add("menu-open");
    btn.setAttribute("aria-expanded","true");document.body.style.overflow="hidden";}
  function close(){menu.classList.remove("open");btn.classList.remove("open");navEl.classList.remove("menu-open");
    btn.setAttribute("aria-expanded","false");document.body.style.overflow="";}
  btn.addEventListener("click",()=>menu.classList.contains("open")?close():open());
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("open"))close()});
  addEventListener("resize",()=>{if(innerWidth>880&&menu.classList.contains("open"))close()});
  if(langBtn)langBtn.addEventListener("click",()=>{if(menu.classList.contains("open"))build()});
})();

/* glass social-proof carousel: auto-advance, swipe/tap/keys to switch */
(function(){
  const slides=[...document.querySelectorAll("#glass .gs")];
  if(!slides.length)return;
  let ci=0,timer=null,startX=0,startY=0,dragging=false,lastAction=0;
  function show(i){ci=i;slides.forEach((s,j)=>s.hidden=j!==i)}
  function next(){show((ci+1)%slides.length)}
  function prev(){show((ci-1+slides.length)%slides.length)}
  function adv(){next()}
  function restart(){if(timer){clearInterval(timer);timer=setInterval(adv,3200)}}
  function begin(x,y){dragging=true;startX=x;startY=y}
  function finish(x,y){
    if(!dragging)return false;
    dragging=false;
    const dx=x-startX,dy=y-startY;
    if(Math.abs(dx)>36&&Math.abs(dx)>Math.abs(dy)){dx<0?next():prev();restart();lastAction=Date.now();return true}
    if(Math.abs(dx)<8&&Math.abs(dy)<8){next();restart();lastAction=Date.now();return true}
    return false;
  }
  const glass=document.getElementById("glass");
  if(glass){
    glass.setAttribute("role","button");
    glass.setAttribute("tabindex","0");
    glass.setAttribute("aria-label","滑動或點一下切換院所資訊");
    glass.addEventListener("pointerdown",e=>begin(e.clientX,e.clientY));
    glass.addEventListener("pointerup",e=>{
      if(!dragging)return;
      finish(e.clientX,e.clientY);
    });
    glass.addEventListener("pointercancel",()=>{dragging=false});
    glass.addEventListener("touchstart",e=>{
      if(!e.changedTouches.length)return;
      const t=e.changedTouches[0];begin(t.clientX,t.clientY);
    },{passive:true});
    glass.addEventListener("touchend",e=>{
      if(!e.changedTouches.length||Date.now()-lastAction<120)return;
      const t=e.changedTouches[0];finish(t.clientX,t.clientY);
    },{passive:true});
    glass.addEventListener("click",e=>{
      if(Date.now()-lastAction<120)return;
      next();restart();lastAction=Date.now();
    });
    glass.addEventListener("keydown",e=>{
      if(e.key==="ArrowRight"||e.key===" "||e.key==="Enter"){e.preventDefault();next();restart()}
      if(e.key==="ArrowLeft"){e.preventDefault();prev();restart()}
    });
  }
  if(!reduce)timer=setInterval(adv,3200);
})();
