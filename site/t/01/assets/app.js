/**
 * ZISTSHAHR / The Productive Living City — Exhibition Prototype V01
 * 2026. Research-grounded narrative; the Three.js environment is an original
 * conceptual visualization and must not be mistaken for a built masterplan.
 */
const chapters = [
  {
    label:'PROLOGUE / A DIFFERENT POSSIBILITY', kicker:'A VISION IN EIGHT MOVEMENTS',
    title:'What if a city<br>could <em>give more</em><br>than it takes?',
    description:'A new way to imagine the relationship between people, place, nature and production.',
    insight:'THE CITY BEGINS WITH A QUESTION — NOT A BLUEPRINT.',
    note:'The most important question in urbanism is not how to build more. It is how to live better.',
    source:'https://zistshahr.com/', sceneTitle:'THE LIVING CITY / CONCEPT STUDY',
    action:'BEGIN THE JOURNEY', short:'The question', target:[38,37,41], look:[0,0,0], duration:20000
  },
  {
    label:'01 / THE PREMISE', kicker:'BEFORE FORM, PURPOSE',
    title:'Every city is<br>a <em>theory of life.</em>',
    description:'Urban form does more than arrange buildings. It makes certain ways of living, meeting, working and caring easier—and others harder.',
    insight:'DESIGN THE CONDITIONS. PEOPLE SHAPE WHAT FOLLOWS.',
    note:'The research asks planners to begin with human and cultural aspirations, rather than allowing technique alone to determine the goal.',
    source:'https://zistshahr.com/6247/', sceneTitle:'SOCIAL LIFE / THE PURPOSE OF SPACE',
    action:'SEE THE FOUR LOGICS', short:'Purpose before form', target:[31,24,38], look:[1,1,0], duration:21000
  },
  {
    label:'02 / THE SOCIAL FOUNDATIONS', kicker:'FOUR MODELS · ONE FUNDAMENTAL QUESTION',
    title:'Power. Profit.<br>Cooperation.<br><em>Human dignity.</em>',
    description:'The research compares domination, market society, anarchist cooperation and the prophetic Ummah—four proposed ways of understanding how people are motivated and social order is formed.',
    insight:'A COMPARATIVE FRAMEWORK, NOT FOUR BOXES FOR ALL HUMANITY.',
    note:'The supplied social-theory matrix contrasts motivations, mechanisms of order and criteria for allocating responsibility. The typology is the project’s analytical proposal.',
    source:'https://zistshahr.com/6264/', sceneTitle:'SOCIAL THEORY / FROM IDEAS TO SPACE',
    action:'ENTER THE NEIGHBORHOOD', short:'Social foundations', target:[28,20,26], look:[0,0,0], duration:23500
  },
  {
    label:'03 / THE NEIGHBORHOOD', kicker:'SMALL-SCALE LIFE. MEANINGFUL CONNECTION.',
    title:'A neighborhood<br>that <em>knows</em><br>its neighbors.',
    description:'Shared courtyards, intimate public spaces and walkable local services can create more opportunities for trust, everyday encounters, privacy and mutual support.',
    insight:'BELONGING IS AN URBAN DESIGN QUESTION.',
    note:'Zistshahr’s neighborhood model studies the relation between social aims, physical proximity and the everyday spaces in which ties are formed.',
    source:'https://zistshahr.com/6278/', sceneTitle:'NEIGHBORHOODS / COURTYARDS & COMMON GROUND',
    action:'DISCOVER THE PRODUCTIVE HOME', short:'The neighborhood', target:[12,13,19], look:[8,0,-8], duration:21000
  },
  {
    label:'04 / PRODUCTIVE LIVING', kicker:'WHEN A HOME BECOMES A SOURCE OF LIFE',
    title:'What if home<br>could <em>create,</em><br>not just consume?',
    description:'A home can be a place to dwell, learn, garden and make. Small-scale food production and distributed livelihoods reconnect household life to meaningful work.',
    insight:'LIVING + MAKING + GROWING / REIMAGINED AS ONE SYSTEM.',
    note:'Recent Zistshahr writing examines productive homes and small-scale agriculture through reference cases such as dachas and kibbutzim. These are comparisons, not proof of universal feasibility.',
    source:'https://zistshahr.com/6293/', sceneTitle:'PRODUCTIVE HOMES / THE HUMAN SCALE OF MAKING',
    action:'FOLLOW THE LOCAL NETWORKS', short:'The productive home', target:[17,14,10], look:[-9,0,7], duration:23500
  },
  {
    label:'05 / THE COMMONS', kicker:'EVERY HOUSEHOLD IS PART OF A BIGGER WHOLE',
    title:'From isolated<br>transactions to<br><em>shared prosperity.</em>',
    description:'Local markets, support workshops, learning spaces and cooperative networks can connect individual initiative with collective resilience—and make more room for care.',
    insight:'AN ECONOMY CAN BE EFFICIENT WITHOUT BECOMING IMPERSONAL.',
    note:'The research distinguishes local enterprise and mutual support from the assumption that all social relations must be organized through centralized power or anonymous competition.',
    source:'https://zistshahr.com/6264/', sceneTitle:'COMMONS / PRODUCTION & SOCIAL EXCHANGE',
    action:'TRACE THE LIVING SYSTEMS', short:'The commons', target:[11,13,16], look:[0,1,0], duration:23000
  },
  {
    label:'06 / LIVING SYSTEMS', kicker:'THE ECOLOGY OF EVERYDAY LIFE',
    title:'Let water, food<br>and energy <em>flow<br>in circles.</em>',
    description:'Water recovery, green spaces, local food systems, distributed energy and thoughtful technology are considered together—not as separate decorative features.',
    insight:'THE CITY AS A METABOLISM, NOT AN ASSEMBLY OF PARTS.',
    note:'The project investigates rainwater and greywater reuse, decentralized production, ecological landscapes and appropriate technology. Each proposal needs site-specific assessment.',
    source:'https://zistshahr.com/', sceneTitle:'ECOLOGY / WATER, FOOD & ENERGY CYCLES',
    action:'SEE THE BIGGER PICTURE', short:'Living systems', target:[16,25,31], look:[-10,0,-3], duration:22000
  },
  {
    label:'07 / AN OPEN INVITATION', kicker:'RESEARCH INTO A POSSIBILITY',
    title:'The future is<br>not a city we find.<br><em>It is one we make.</em>',
    description:'A research-led proposal for productive cities—residential, agricultural, scientific, industrial and coastal. An invitation to question, prototype, measure and design together.',
    insight:'THE NEXT CHAPTER NEEDS THINKERS, BUILDERS AND COMMUNITIES.',
    note:'This experience offers a conceptual interpretation of Zistshahr research, not an engineering plan or evidence that every proposed component has been implemented.',
    source:'https://zistshahr.com/', sceneTitle:'THE HORIZON / A CITY WORTH LIVING IN',
    action:'OPEN THE RESEARCH ATLAS', short:'The invitation', target:[47,43,47], look:[0,1,0], duration:26000
  }
];
const $ = id => document.getElementById(id);
let active = 0, autoplay = true, timer, typingFrame, lastFocus, modalWasPlaying = false;
let reducedMotion = !!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const dom = { title:$('story-title'), story:$('storyText'), description:$('storyDescription'), label:$('chapterLabel'), kicker:$('storyKicker'), insight:$('insightText'), action:$('discoverLabel'), hint:$('readingHint'), note:$('noteText'), noteCounter:$('noteCounter'), noteLink:$('noteLink'), sceneCaptionTitle:$('sceneCaptionTitle'), captionSub:$('sceneCaptionSub'), number:$('currentNumber'), timeline:$('timeline'), playIcon:$('playIcon'), mode:$('modeLabel'), atlas:$('atlas'), atlasChapters:$('atlasChapters') };
function textTyping(html, done){
  if(typingFrame) clearTimeout(typingFrame);
  dom.title.innerHTML = html;
  const walker = document.createTreeWalker(dom.title, NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()){const node=walker.currentNode;if(node.textContent.trim())nodes.push({node, full:node.textContent});}
  if(reducedMotion){done?.();return;}
  for(const n of nodes)n.node.textContent='';
  const cursor=document.createElement('span');cursor.className='caret';cursor.setAttribute('aria-hidden','true');dom.title.appendChild(cursor);
  let pos=0,nodeIndex=0;
  const add=()=>{
    if(nodeIndex>=nodes.length){cursor.remove();done?.();return;}
    const item=nodes[nodeIndex];item.node.textContent+=item.full[pos++];
    if(pos>=item.full.length){nodeIndex++;pos=0;}
    typingFrame=setTimeout(add, 23 + Math.random()*19);
  };
  add();
}
function buildTimeline(){
  dom.timeline.replaceChildren();
  chapters.forEach((c,i)=>{const button=document.createElement('button');button.type='button';button.className='timeline-item';button.setAttribute('aria-label',`Go to chapter ${i+1}: ${c.short}`);button.title=`${String(i+1).padStart(2,'0')} · ${c.short}`;button.innerHTML='<span></span>';button.addEventListener('click',()=>goTo(i,true));dom.timeline.appendChild(button);});
  dom.atlasChapters.replaceChildren();
  chapters.forEach((c,i)=>{const button=document.createElement('button');button.type='button';button.className='atlas-chapter';button.innerHTML=`<small>${String(i+1).padStart(2,'0')} / 08</small><strong>${c.short}</strong><span>↗</span>`;button.addEventListener('click',()=>{closeAtlas();goTo(i,true);});dom.atlasChapters.appendChild(button);});
}
let setCameraChapter = ()=>{};
function goTo(index, fromUser=false){
  clearTimeout(timer);clearTimeout(typingFrame);
  active=(index+chapters.length)%chapters.length;
  const c=chapters[active];
  dom.story.classList.remove('is-changing');void dom.story.offsetWidth;dom.story.classList.add('is-changing');
  dom.label.textContent=c.label;dom.kicker.textContent=c.kicker;dom.description.textContent=c.description;dom.insight.textContent=c.insight;
  dom.action.textContent=c.action;dom.hint.textContent=active===0?'AN IMMERSIVE, SELF-GUIDED EXPERIENCE':active===chapters.length-1?'READ THE ORIGINAL PROJECT MATERIALS':'AUTO-NARRATIVE · FULLY NAVIGABLE';
  dom.note.textContent=c.note;dom.noteCounter.textContent=`${String(active+1).padStart(3,'0')} / 008`;
  dom.noteLink.href=c.source;dom.sceneCaptionTitle.textContent=c.sceneTitle;dom.number.textContent=String(active+1).padStart(2,'0');
  [...dom.timeline.children].forEach((el,i)=>{el.classList.toggle('active',i===active);el.classList.toggle('completed',i<active);el.setAttribute('aria-current',i===active?'step':'false');});
  $('announcement').textContent=`Chapter ${active+1} of eight: ${c.short}. ${c.description}`;
  setCameraChapter(active);
  textTyping(c.title,()=>{});
  scheduleChapter();
}
function scheduleChapter(){clearTimeout(timer);if(autoplay&&!dom.atlas.open){timer=setTimeout(()=>goTo(active+1),chapters[active].duration);}}
function setAutoplay(value){autoplay=!!value;dom.playIcon.textContent=autoplay?'Ⅱ':'▶';$('playPause').setAttribute('aria-label',autoplay?'Pause automatic chapters':'Resume automatic chapters');dom.mode.textContent=autoplay?'AUTOPLAY ON':'AUTOPLAY PAUSED';scheduleChapter();}
function next(){goTo(active+1,true)}function previous(){goTo(active-1,true)}
function openAtlas(){modalWasPlaying=autoplay;clearTimeout(timer);lastFocus=document.activeElement;dom.atlas.showModal();$('openAtlas').setAttribute('aria-expanded','true');}
function closeAtlas(){dom.atlas.close();$('openAtlas').setAttribute('aria-expanded','false');if(modalWasPlaying&&autoplay)scheduleChapter();lastFocus?.focus?.();}
$('previous').addEventListener('click',previous);$('next').addEventListener('click',next);$('playPause').addEventListener('click',()=>setAutoplay(!autoplay));
$('discoverButton').addEventListener('click',()=>active===chapters.length-1?openAtlas():next());
$('openAtlas').addEventListener('click',openAtlas);$('toggleDetails').addEventListener('click',openAtlas);$('closeAtlas').addEventListener('click',closeAtlas);
dom.atlas.addEventListener('click',(e)=>{if(e.target===dom.atlas)closeAtlas();});
dom.atlas.addEventListener('close',()=>{ $('openAtlas').setAttribute('aria-expanded','false');scheduleChapter(); });
document.addEventListener('keydown',e=>{if(dom.atlas.open)return;if(['ArrowRight','ArrowDown'].includes(e.key)){e.preventDefault();next();}else if(['ArrowLeft','ArrowUp'].includes(e.key)){e.preventDefault();previous();}else if(e.code==='Space'&&!['INPUT','TEXTAREA','BUTTON','A'].includes(document.activeElement?.tagName)){e.preventDefault();setAutoplay(!autoplay);}});
let touchX=0,touchY=0;
document.addEventListener('touchstart',e=>{if(!dom.atlas.open&&e.touches.length===1){touchX=e.touches[0].clientX;touchY=e.touches[0].clientY;}},{passive:true});
document.addEventListener('touchend',e=>{if(dom.atlas.open||!e.changedTouches.length)return;let dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;if(Math.abs(dx)>90&&Math.abs(dx)>Math.abs(dy)*1.5){dx<0?next():previous();}},{passive:true});
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else scheduleChapter();});

/** Gentle deterministic generator: stable shapes between page loads. */
function seeded(){let x=541201;return ()=>{x=(Math.imul(1664525,x)+1013904223)|0;return(x>>>0)/4294967296;};}
async function launchWorld(){
  if(reducedMotion){$('loadingIndicator').classList.remove('visible');return;}
  const load=$('loadingIndicator');load.classList.add('visible');
  try{
    const THREE=await import('https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js');
    const canvas=$('cityCanvas'),wrap=$('sceneWrap'),rand=seeded();
    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
    renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.65;
    const scene=new THREE.Scene();scene.background=new THREE.Color(0x071d1c);scene.fog=new THREE.FogExp2(0x071d1c,0.0125);
    const camera=new THREE.PerspectiveCamera(42,wrap.clientWidth/wrap.clientHeight,.2,350);
    const currentPos=new THREE.Vector3(...chapters[0].target),targetPos=currentPos.clone(),focus=new THREE.Vector3(0,0,0),targetFocus=new THREE.Vector3(0,0,0);
    camera.position.copy(currentPos);camera.lookAt(0,0,0);
    const hemi=new THREE.HemisphereLight(0xc5e6e6,0x1c281b,2.25);scene.add(hemi);
    const sun=new THREE.DirectionalLight(0xffe0a1,3.3);sun.position.set(-25,45,15);scene.add(sun);
    const rim=new THREE.DirectionalLight(0x68d1b2,1.8);rim.position.set(27,21,-38);scene.add(rim);
    const root=new THREE.Group();scene.add(root);
    const mats={ground:new THREE.MeshStandardMaterial({color:0x193e35,roughness:1}),road:new THREE.MeshStandardMaterial({color:0x36544a,roughness:1}),soil:new THREE.MeshStandardMaterial({color:0x525644,roughness:1}),garden:new THREE.MeshStandardMaterial({color:0x3d7960,roughness:1}),leaf:new THREE.MeshStandardMaterial({color:0x7eb99b,roughness:.95}),leaf2:new THREE.MeshStandardMaterial({color:0x335e4c,roughness:1}),light:new THREE.MeshStandardMaterial({color:0xc5d5a3,emissive:0x678e5d,emissiveIntensity:.2,roughness:.7}),house:new THREE.MeshStandardMaterial({color:0xe2c9a0,roughness:.94}),house2:new THREE.MeshStandardMaterial({color:0xb4c5a9,roughness:.95}),house3:new THREE.MeshStandardMaterial({color:0xbd9976,roughness:.94}),roof:new THREE.MeshStandardMaterial({color:0x8b6251,roughness:.9}),roof2:new THREE.MeshStandardMaterial({color:0xd3b187,roughness:.9}),glass:new THREE.MeshStandardMaterial({color:0x8fddc8,metalness:.13,roughness:.22,transparent:true,opacity:.7,emissive:0x1c5f59,emissiveIntensity:.3}),water:new THREE.MeshPhysicalMaterial({color:0x2aa79d,roughness:.18,metalness:.2,transparent:true,opacity:.85,emissive:0x00605c,emissiveIntensity:.15}),path:new THREE.LineBasicMaterial({color:0x9ec5a2,transparent:true,opacity:.22})};
    function mesh(geometry,material,pos,group=root){const m=new THREE.Mesh(geometry,material);m.position.set(...pos);group.add(m);return m;}
    function box(w,h,d,mat,x,y,z,g=root){return mesh(new THREE.BoxGeometry(w,h,d),mat,[x,y,z],g);}
    function disc(r,mat,x,y,z,g=root){const m=mesh(new THREE.CylinderGeometry(r,r,.055,32),mat,[x,y,z],g);return m;}
    // Land: a layered island of neighborhoods with a pale circular boundary.
    mesh(new THREE.CylinderGeometry(55,58,1.1,96),mats.ground,[0,-.64,0]);
    mesh(new THREE.CylinderGeometry(56,56,.02,96),new THREE.MeshStandardMaterial({color:0x30534d,transparent:true,opacity:.28}),[0,-.05,0]);
    const outer=new THREE.Mesh(new THREE.TorusGeometry(54.9,.13,7,240),new THREE.MeshBasicMaterial({color:0x77aa86,transparent:true,opacity:.58}));outer.rotation.x=Math.PI/2;root.add(outer);
    // A gridded village network—not a photorealistic or implemented masterplan.
    for(let i=-6;i<=6;i++){
      box(104,.035,.55,mats.road,0,.02,i*7.25);
      box(.55,.035,104,mats.road,i*7.25,.02,0);
    }
    const roofMaterials=[mats.roof,mats.roof2];const homeMaterials=[mats.house,mats.house2,mats.house3];
    const treeSpheres=[new THREE.IcosahedronGeometry(.74,0),new THREE.IcosahedronGeometry(.96,1),new THREE.IcosahedronGeometry(.6,0)];
    const treeTrunk=new THREE.CylinderGeometry(.08,.12,.74,5);
    const trunkMat=new THREE.MeshStandardMaterial({color:0x867a57,roughness:1});
    function tree(x,z,s=1){const g=new THREE.Group();g.position.set(x,0,z);root.add(g);const stem=mesh(treeTrunk,trunkMat,[0,.4*s,0],g);stem.scale.set(s,s,s);const crown=mesh(treeSpheres[Math.floor(rand()*3)],rand()>.4?mats.leaf:mats.leaf2,[0,1.08*s,0],g);crown.scale.set(s,s,s);return g;}
    const gardenRows=new THREE.MeshStandardMaterial({color:0x87a970,roughness:1});
    const gardenRowGeo=new THREE.BoxGeometry(.085,.045,2.4);
    function house(x,z,k){
      const scale=.75+rand()*.47,h=.85+rand()*1.0;
      const g=new THREE.Group();g.position.set(x,0,z);g.scale.setScalar(scale);root.add(g);
      disc(2.15,mats.soil,0,.02,0,g);
      box(2.36,h,2.55,homeMaterials[k%3],-.22,h/2,0,g);
      box(2.7,.16,2.8,roofMaterials[k%2],-.22,h+.12,0,g);
      box(.65,h*.51,.025,mats.glass,0,.55,1.29,g);
      box(.48,.66,.03,mats.roof,-.98,.39,1.3,g);
      // Tiny productive garden rows adjacent to the house.
      for(let j=0;j<3;j++){
        const row=mesh(gardenRowGeo,gardenRows,[1.3,.15,-.8+j*.65],g);row.rotation.y=Math.PI/2;row.scale.z=.48;
      }
      if(rand()>.63){const panel=box(.95,.045,1.04,mats.glass,-.65,h+.24,-.2,g);panel.rotation.z=-.09;}
    }
    for(let x=-42;x<=42;x+=7.25){for(let z=-42;z<=42;z+=7.25){
      const r=Math.sqrt(x*x+z*z);
      if(r<9||r>49||rand()<.23)continue;
      const xx=x+(rand()-.5)*1.5,zz=z+(rand()-.5)*1.5;
      if(rand()>.12)house(xx,zz,Math.round(rand()*20));else {disc(2.45,mats.garden,xx,.025,zz);for(let j=0;j<4;j++)tree(xx+(rand()-.5)*3.4,zz+(rand()-.5)*3.4,.75);}
      if(rand()>.61)tree(xx+3.4,zz+2.3,.6+rand()*.4);
    }}
    // Public core: a permeable civic building and a shared, landscaped courtyard.
    disc(8.9,mats.soil,0,.055,0);disc(7.6,mats.garden,0,.08,0);
    const plazaRing=new THREE.Mesh(new THREE.TorusGeometry(7.3,.065,6,96),new THREE.MeshBasicMaterial({color:0xdde1aa,transparent:true,opacity:.68}));plazaRing.rotation.x=Math.PI/2;plazaRing.position.y=.13;root.add(plazaRing);
    const pavilionMat=new THREE.MeshStandardMaterial({color:0xdacfae,roughness:.65,metalness:.05});
    disc(3.4,pavilionMat,0,.18,0);
    const columns=[];for(let a=0;a<12;a++){let theta=a*Math.PI/6;const x=Math.cos(theta)*2.75,z=Math.sin(theta)*2.75;columns.push(mesh(new THREE.CylinderGeometry(.105,.11,2.65,6),pavilionMat,[x,1.51,z]));}
    const canopy=mesh(new THREE.CylinderGeometry(3.65,3.9,.24,12),pavilionMat,[0,2.91,0]);
    mesh(new THREE.CylinderGeometry(.54,.64,1.6,8),mats.glass,[0,1.3,0]);
    for(let a=0;a<19;a++){let t=a*Math.PI*2/19;tree(Math.cos(t)*6.15,Math.sin(t)*6.15,.48+.20*rand());}
    // Urban farms: a productive landscape with terraces and garden rows.
    for(const [cx,cz] of [[-28,14],[-22,24],[26,-21],[17,30]]){
      box(10,.07,8.5,mats.garden,cx,.06,cz);
      for(let row=0;row<9;row++){box(.17,.05,6.4,gardenRows,cx-4+row,.14,cz);}
      for(let t=0;t<5;t++)tree(cx-5+rand()*10,cz+4.6,.5);
    }
    // Water channel: two flowing lines draw an ecological infrastructure across the city.
    const waterPoints=[[-43,-28],[-30,-25],[-18,-28],[-4,-23],[8,-25],[19,-30],[33,-26],[46,-32]];
    const waterSpline=new THREE.CatmullRomCurve3(waterPoints.map(p=>new THREE.Vector3(p[0],.11,p[1])));
    const stream=mesh(new THREE.TubeGeometry(waterSpline,120,.48,7,false),mats.water,[0,0,0]);
    const streamEdge=mesh(new THREE.TubeGeometry(waterSpline,120,.64,6,false),new THREE.MeshStandardMaterial({color:0x9baf80,transparent:true,opacity:.4}),[0,-.06,0]);
    // Soft luminous circulation networks connected to the community center.
    const linkMat=new THREE.LineBasicMaterial({color:0xbfdca8,transparent:true,opacity:.36});
    for(let i=0;i<24;i++){
      const a=i/24*Math.PI*2;const len=16+rand()*26;const x=Math.cos(a)*len,z=Math.sin(a)*len;
      const p=new THREE.CatmullRomCurve3([new THREE.Vector3(0,1.6,0),new THREE.Vector3(x*.47,2.9+rand()*1.6,z*.47),new THREE.Vector3(x,.4,z)]);
      const geo=new THREE.BufferGeometry().setFromPoints(p.getPoints(40));root.add(new THREE.Line(geo,linkMat));
    }
    const microDots=new THREE.Group();root.add(microDots);
    const dotsMat=new THREE.MeshBasicMaterial({color:0xe6dba8});
    const dotGeo=new THREE.SphereGeometry(.11,5,4);
    for(let i=0;i<60;i++){
      const a=rand()*Math.PI*2,r=12+rand()*34;
      const dot=mesh(dotGeo,dotsMat,[Math.cos(a)*r,.25+rand()*2.2,Math.sin(a)*r],microDots);
      dot.scale.setScalar(.5+rand());
    }
    // Air particles for distance and spatial depth.
    const particlePos=[];for(let i=0;i<430;i++){let a=rand()*Math.PI*2,r=13+rand()*90;particlePos.push(Math.cos(a)*r,4+rand()*60,Math.sin(a)*r);}
    const particleGeo=new THREE.BufferGeometry();particleGeo.setAttribute('position',new THREE.Float32BufferAttribute(particlePos,3));
    const particles=new THREE.Points(particleGeo,new THREE.PointsMaterial({color:0xc7d8a8,size:.13,transparent:true,opacity:.34,sizeAttenuation:true}));scene.add(particles);
    const camStates=chapters.map(c=>({position:new THREE.Vector3(...c.target),focus:new THREE.Vector3(...c.look)}));
    setCameraChapter=(i)=>{targetPos.copy(camStates[i].position);targetFocus.copy(camStates[i].focus);};
    let px=0,py=0;
    window.addEventListener('pointermove',e=>{px=(e.clientX/window.innerWidth-.5);py=(e.clientY/window.innerHeight-.5);},{passive:true});
    const clock=new THREE.Clock();let frame=0,raf;
    function animate(){
      raf=requestAnimationFrame(animate);const dt=Math.min(clock.getDelta(),.06),t=clock.elapsedTime;
      currentPos.lerp(targetPos,1-Math.pow(.963,dt*60));focus.lerp(targetFocus,1-Math.pow(.965,dt*60));
      camera.position.set(currentPos.x+px*.55,currentPos.y-py*.4,currentPos.z+px*.26);camera.lookAt(focus);
      root.rotation.y=Math.sin(t*.06)*.012;microDots.rotation.y=t*.015;
      plazaRing.material.opacity=.52+.24*Math.sin(t*1.1);
      linkMat.opacity=.20+.14*Math.sin(t*.65);
      particles.rotation.y=t*.0009;
      renderer.render(scene,camera);frame++;
    }
    const resize=()=>{const w=Math.max(1,wrap.clientWidth),h=Math.max(1,wrap.clientHeight);camera.aspect=w/h;camera.fov=w<700?52:42;camera.updateProjectionMatrix();renderer.setSize(w,h,false);};
    window.addEventListener('resize',resize,{passive:true});resize();animate();
    canvas.classList.add('ready');$('sceneFallback').style.opacity='0';$('sceneFallback').style.transition='opacity 1.5s';
  }catch(err){console.warn('3D visualization unavailable; the static exhibition view remains accessible.',err);}
  finally{load.classList.remove('visible');}
}
buildTimeline();goTo(0);launchWorld();