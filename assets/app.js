/* 梅島動物醫院 — shared behaviour: i18n toggle, nav ramp, scroll reveals, glass carousel.
   ZH source lives in each page's markup (data-i18n). EN lives in the dict below (union of all pages).
   Missing EN key falls back to the ZH source. */
const I18N = { en:{
  /* nav + CTAs */
  "nav.services":"Services","nav.about":"About","nav.visit":"Visit","nav.home":"Home",
  "cta.book":"Book on LINE","cta.call":"Call us","cta.tel":"04-2462-6616",
  /* home hero + card */
  "hero.photo":"TODO · clinic / pet photography","hero.display":"ENTRUSTED CARE","hero.sub":"Your pet's family doctor · Xitun, Taichung",
  "hero.body":"Led by a Japan-trained director, with the quiet, careful, precise Japanese way of caring for every pet in Xitun. Medicine, grooming and boarding, all in one place.",
  "card.k":"Trusted care","card.s1":"20 years in Xitun, caring for countless families' pets.","card.s2":"Japan-trained director — consults in Chinese, English & Japanese.","card.s3":"Medicine, grooming and boarding — all under one roof.",
  /* home pet scroll-film */
  "pet.kicker":"Everyday at 梅島","pet.h2":"Here, every pet feels right at home","pet.sub":"Dogs and cats boarded separately, watched closely by the medical team — so every stay stays calm and warm.",
  /* home 院所環境 split */
  "scene.kicker":"Our space","scene.h":"A calm space that feels like home","scene.p1":"Bright, quiet, spotless consult and boarding areas — so pets start to relax the moment they walk in.","scene.p2":"Dogs and cats kept separate, watched closely by the medical team, keeping every stay warm and gentle.",
  "scene.c1":"Dog / cat separated","scene.c2":"Medical team nearby","scene.c3":"Low-stress",
  /* home services teaser */
  "services.kicker":"Services","services.h2":"One animal hospital for a lifetime of care",
  "svc.med.t":"General Medicine","svc.med.d":"Full equipment — X-ray, ultrasound, blood analysis, surgery, gas anaesthesia, ultrasonic dental scaling — with meticulous Japanese-style process.","svc.med.tag":"Internal · Surgery · Imaging · Dental",
  "svc.groom.t":"Pet Grooming","svc.groom.d":"Led by a Class-B certified groomer, kept separate from the medical flow, balancing styling with skin health.","svc.groom.tag":"Certified groomer · medical-separated",
  "svc.bo9.t":"Boarding","svc.bo9.d":"Dogs and cats boarded separately to reduce stress, watched closely by the medical team.","svc.bo9.tag":"Dog/cat separated · staff nearby",
  /* home story */
  "story.kicker":"About · From the director","story.h2":"Bringing Japan back to Xitun,<br>one visit at a time",
  "story.p1":"Dr. Tu, our director, trained in Japan and speaks both English and Japanese — drawing expat families from across the city.",
  "story.p2":"He brings a <span class='em'>refined, quiet, attentive</span> Japanese standard into the consult room, returning to Japan regularly to bring back newer techniques and medicines for Xitun's pets.",
  /* vaccine LINE CTA */
  "vacc.kicker":"LINE health reminders","vacc.h2":"Add us on LINE — never miss<br>a vaccine or recheck",
  "vacc.p":"Once your pet is linked, we'll proactively remind you on LINE before rabies vaccines, regular rechecks and grooming packages expire.",
  "vacc.cta":"Add LINE for reminders","vacc.l1":"Reminded 30 days before due","vacc.l2":"Never miss a chronic recheck","vacc.l3":"Notified 14 days before expiry",
  /* visit / hours */
  "visit.kicker":"Visit us","visit.h2":"Booking welcome","visit.addrk":"Address","visit.telk":"Phone","visit.hrk":"Mon–Sat","visit.sunk":"Sunday","visit.sunv":"Closed","visit.map":"Open in Google Maps",
  /* footer */
  "foot.tag":"Xitun, Taichung · 20 years of refined Japanese care<br>Medicine · Grooming · Boarding","foot.contact":"Contact","foot.hours":"Hours","foot.hr1":"Mon–Sat　09:00 – 21:30","foot.hr2":"Sunday　Closed","foot.note":"Site not yet live · content pending clinic approval",

  /* ===== SERVICES page ===== */
  "sp.kicker":"Services","sp.h1":"Complete care, under one roof","sp.sub":"From everyday medicine to grooming and boarding — equipped and staffed for a pet's whole life.",
  "sm.h":"General Medicine","sm.p1":"Internal and surgical care backed by full in-house equipment, so diagnosis and treatment happen in one place.","sm.p2":"The director keeps every step on a meticulous Japanese-style flow — careful, calm, precise.","sm.fig":"TODO · consult room / equipment photo",
  "sm.c1":"Digital X-ray","sm.c2":"Ultrasound","sm.c3":"Blood analyser","sm.c4":"Surgery","sm.c5":"Gas anaesthesia","sm.c6":"Ultrasonic dental scaling",
  "sg.h":"Pet Grooming","sg.p1":"Led by a Class-B certified groomer, with a strict medical/grooming separation so a grooming visit never crosses with sick patients.","sg.p2":"Wash, cut and finish are balanced with skin and coat health — not styling alone.","sg.fig":"TODO · grooming room photo",
  "sg.c1":"Class-B certified","sg.c2":"Medical / grooming separated","sg.c3":"Skin & coat health",
  "sb.h":"Boarding","sb.p1":"Dogs and cats board in separate areas to cut cross-stress and keep the stay calm.","sb.p2":"The medical team is right next door, so anything unusual is caught early.","sb.fig":"TODO · boarding area photo",
  "sb.c1":"Dog / cat separated","sb.c2":"Medical team nearby","sb.c3":"Calm, low-stress",

  /* ===== ABOUT page ===== */
  "ap.kicker":"About 梅島","ap.h1":"A Japanese standard of care, in Xitun","ap.sub":"Twenty years caring for the neighbourhood's pets, led by a Japan-trained director.",
  "ab.h":"Bringing Japan back to every visit","ab.p1":"Dr. Tu, our director, trained in Japan and consults in Chinese, English and Japanese — which is why expat families across the city find their way here.",
  "ab.p2":"He brings a <span class='em'>refined, quiet, attentive</span> Japanese standard into the consult room, and returns to Japan regularly to bring back newer techniques and medicines.",
  "ab.p3":"Twenty years in, that same standard now sits behind every diagnosis, every surgery, and every grooming and boarding stay.",
  "ph.k":"Our standard","ph.h":"Three things we never rush",
  "ph1.t":"Careful","ph1.p":"Small signs matter. We examine thoroughly and explain what we find, plainly.",
  "ph2.t":"Calm","ph2.p":"A quiet clinic is a kinder clinic. We keep stress low for pet and owner alike.",
  "ph3.t":"Precise","ph3.p":"Full in-house equipment and a disciplined Japanese flow keep every step exact.",
  "at.k":"Equipped in-house","at.h":"The tools to decide on the spot","at.p":"X-ray, ultrasound, blood analyser, a surgical suite with gas anaesthesia, and ultrasonic dental scaling — so most answers come the same visit, not days later.",

  /* ===== CONTACT page ===== */
  "cp.kicker":"Visit & Contact","cp.h1":"Come see us","cp.sub":"Booking is by LINE or phone — message us and we'll confirm a time.",
  "cb.h":"Book the easy way — on LINE","cb.p":"Add our LINE official account, tell us your pet and a preferred time, and we'll confirm. Prefer to talk? Just call.",
  "cb.cta":"Book on LINE","cn.h":"Before your first visit","cn.p":"If you have them, bring your pet's <b>past records and vaccination history</b>. For boarding or grooming, message us ahead so we can hold a slot.",
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

/* hero + scroll reveals */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const heroEl=document.querySelector(".hero");
if(heroEl)requestAnimationFrame(()=>heroEl.classList.add("in"));
if(!reduce){
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.18});
  document.querySelectorAll(".r,.story").forEach(el=>io.observe(el));
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
      `<div class="m-line"><a class="line" href="#" data-line>${lineT}</a>`+
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
})();

/* glass social-proof carousel */
(function(){
  const slides=[...document.querySelectorAll("#glass .gs")];
  const wrap=document.getElementById("dots");
  if(!slides.length||!wrap)return;
  let ci=0,timer=null;
  slides.forEach((_,i)=>{const b=document.createElement("button");if(i===0)b.className="on";
    b.setAttribute("aria-label","顯示第 "+(i+1)+" 則");b.addEventListener("click",()=>{show(i);restart()});wrap.appendChild(b)});
  const dots=[...wrap.children];
  function show(i){ci=i;slides.forEach((s,j)=>s.hidden=j!==i);dots.forEach((d,j)=>d.classList.toggle("on",j===i))}
  function adv(){show((ci+1)%slides.length)}
  function restart(){if(timer){clearInterval(timer);timer=setInterval(adv,4500)}}
  if(!reduce)timer=setInterval(adv,4500);
})();
