import{_ as e,a as t,b as n,c as r,d as i,f as a,g as o,h as s,l as c,m as l,n as u,o as d,p as f,s as p,t as m,u as ee,v as h,y as g}from"./modules-9jOzS9F5.js";var te=Object.defineProperty,ne=(e,t)=>{let n={};for(var r in e)te(n,r,{get:e[r],enumerable:!0});return t||te(n,Symbol.toStringTag,{value:`Module`}),n},re=`Your session ended. Please sign in again.`,ie=/^[0-9]+-[a-z0-9]+\.apps\.googleusercontent\.com$/;function ae(e){return typeof e==`string`&&ie.test(e.trim())?e.trim():null}var oe=[`admin`,`member`,`granted`];function se(e){return oe.includes(e)?`mock.${e}.token`:null}var ce=2147483647,le=3e4,ue=6e3,de=`Still signing in. Google can take up to half a minute after a quiet spell.`,fe=`Google did not answer in time. Please try again.`,pe=`Could not reach the server. Check your connection and try again.`;function me(e){let t=e&&e.code;return t===`timeout`||t===`bad_response`?fe:t===`network`?pe:e&&e.message||`Sign-in failed. Please try again.`}function he({api:e,now:t=()=>Date.now(),setTimer:n=setTimeout,clearTimer:r=clearTimeout,signInTimeoutMs:i=le}){let a={status:e.session.get()?`checking`:`signedOut`,slow:!1,member:null,expiresAt:null,message:``},o=null,s=new Set,c=()=>s.forEach(e=>e(a));function l(e){o&&r(o),o=null;let i=Date.parse(e);if(Number.isNaN(i))return;let a=i-t();if(a<=0)return f();o=n(f,Math.min(a,ce))}function u(e){a.status=`signedIn`,a.slow=!1,a.member=e.member||null,a.expiresAt=e.expiresAt||null,a.message=``,l(a.expiresAt),c()}function d(t=``){o&&r(o),o=null,e.session.clear(),a.status=`signedOut`,a.slow=!1,a.member=null,a.expiresAt=null,a.message=t,c()}function f(){a.status===`signedOut`&&!e.session.get()?(a.message=re,c()):d(re)}async function p(){if(!e.session.get())return d(``);a.status=`checking`,c();try{u(await e.call(`auth.me`))}catch(e){if(e.code===`unauthorised`||e.code===`forbidden`)return d(re);a.status=`signedOut`,a.message=`Could not check your sign-in. Check your connection and reload.`,c()}}async function m(t){if(!t)return;a.status=`signingIn`,a.slow=!1,a.message=``,c();let o=n(()=>{a.status===`signingIn`&&(a.slow=!0,c())},ue);try{let n=await e.call(`auth.signIn`,{idToken:t},{retry:!0,timeoutMs:i});e.session.set(n.session),u(n)}catch(e){d(me(e))}finally{r(o)}}function ee(){let t=e.session.get()?e.call(`auth.signOut`,{},{quiet:!0}):null;d(``),t&&t.catch(()=>{})}return{state:a,restore:p,signIn:m,signOut:ee,ended:f,subscribe:e=>(s.add(e),()=>s.delete(e))}}var ge=`https://accounts.google.com/gsi/client`,_e=null;function ve(){return window.google&&window.google.accounts&&window.google.accounts.id?Promise.resolve(window.google):(_e||=new Promise((e,t)=>{let n=document.createElement(`script`);n.src=ge,n.async=!0,n.defer=!0,n.onload=()=>e(window.google),n.onerror=()=>{_e=null,t(Error(`Could not load Google sign-in`))},document.head.appendChild(n)}),_e)}var ye=null;async function be(e,{clientId:t,onCredential:n,dark:r}){let i=await ve();ye!==t&&(i.accounts.id.initialize({client_id:t,callback:e=>n(e&&e.credential),auto_select:!1,use_fedcm_for_prompt:!0,cancel_on_tap_outside:!0,context:`signin`,ux_mode:`popup`}),ye=t),e.replaceChildren(),i.accounts.id.renderButton(e,{type:`standard`,theme:r?`filled_black`:`outline`,size:`large`,text:`signin_with`,shape:`pill`,logo_alignment:`left`,width:Math.min(320,Math.max(200,Math.floor(e.clientWidth||280)))})}function xe(){window.google&&window.google.accounts&&window.google.accounts.id&&window.google.accounts.id.disableAutoSelect()}var Se=[`id`,`created_at`,`updated_at`,`updated_by`],Ce=e=>Se.includes(e),we=`en-GB`,Te=(e,t)=>String(e.label).localeCompare(String(t.label),we,{sensitivity:`base`}),_=e=>Array.isArray(e)?e:e==null||e===``?[]:[e];function Ee(e,{wrap:t=e=>e}={}){let n=t({year:null,tabs:{},lists:{},listInfo:null});function r(e){if(n.tabs[e])return n.tabs[e];let t=e.startsWith(`system/`)?e.slice(7):`system/${e}`;return n.tabs[t]||null}let i=0;async function a(t){let r=i,a=await e.call(`records.list`,{tabs:t});if(r!==i)return a;n.year=a.year??n.year;for(let[e,t]of Object.entries(a.tabs||{}))n.tabs[e]={canWrite:!!t.canWrite,canRemove:!!t.canRemove,columns:t.columns||[],rows:t.rows||[],removed:t.removed||[],removedLabels:t.removedLabels||{},keptYearly:!!t.keptYearly};return a.lists&&(n.lists=a.lists),a.listInfo&&(n.listInfo=a.listInfo),a}let o=e=>r(e)?r(e).rows:[],s=e=>r(e)&&r(e).removed||[],c=e=>r(e)?r(e).columns:[],l=(e,t)=>c(e).find(e=>e.name===t)||null,u=e=>!!(r(e)&&r(e).canWrite),d=e=>!!(r(e)&&r(e).canRemove),f=e=>!!(r(e)&&r(e).keptYearly),p=e=>e.every(e=>!!r(e)),m=(e,t)=>o(e).find(e=>e.id===t)||null;function ee(e,t){if(t==null||t===``)return``;let n=m(e,t);return n?n._label||n.id:r(e)&&r(e).removedLabels&&r(e).removedLabels[t]||String(t)}let h=e=>n.lists[e]||[],g=()=>n.listInfo;function te(e,t){if(t==null||t===``)return``;let n=h(e).find(e=>e.value===t);return n?n.label||n.value:String(t)}function ne(e,t){let n=h(e),r=new Set(_(t)),i=n.filter(e=>e.active!==!1||r.has(e.value)).map(e=>({value:e.value,label:e.label||e.value,active:e.active!==!1}));for(let e of r)n.some(t=>t.value===e)||i.push({value:e,label:String(e),active:!1});return i}function re(e,t){let n=new Set(_(t)),r=o(e).filter(e=>e.active!==!1||n.has(e.id)).map(e=>({value:e.id,label:e._label||e.id})).sort(Te);for(let e of n)r.some(t=>t.value===e)||r.push({value:e,label:String(e)});return r}function ie(e,t){let n=r(e);if(!n||!t||!t.id)return;let i=n.rows.findIndex(e=>e.id===t.id);i>=0?n.rows.splice(i,1,t):n.rows.push(t)}async function ae(t,n,r){let i={tab:t,values:n};if(r){i.id=r;let e=m(t,r);e&&e.updated_at&&(i.updatedAt=e.updated_at)}try{let n=await e.call(`records.save`,i);return ie(t,n.row),n}catch(n){if(n&&n.code===`conflict`&&r){let i=n.details&&n.details.row;if(!i)try{i=(await e.call(`records.get`,{tab:t,id:r})).row}catch{i=null}i&&(ie(t,i),n.row=i)}throw n}}function oe(e,t){let n=r(e);n&&t&&t.id&&(n.rows=n.rows.filter(e=>e.id!==t.id),n.removed=(n.removed||[]).filter(e=>e.id!==t.id),t.removed?(n.canRemove&&n.removed.push(t),n.removedLabels={...n.removedLabels||{},[t.id]:t._label||t.id}):n.rows.push(t))}async function se(t,n){let r=m(t,n),i={tab:t,id:n};r&&r.updated_at&&(i.updatedAt=r.updated_at);let a=await e.call(`records.remove`,i);return oe(t,a.row),a}async function ce(t,n){let r=await e.call(`records.restore`,{tab:t,id:n});return oe(t,r.row),r}let le=(t,n)=>e.call(`records.history`,{tab:t,id:n});function ue(){i+=1,n.year=null,n.tabs={},n.lists={},n.listInfo=null}return{state:n,load:a,has:p,rows:o,removedRows:s,columns:c,column:l,canWrite:u,canRemove:d,keptYearly:f,byId:m,label:ee,list:h,listInfo:g,listLabel:te,options:ne,refOptions:re,put:ie,save:ae,remove:se,restore:ce,history:le,clear:ue}}function De(e){let t=String(e||``).replace(/_member_id$/,``).replace(/_(id|ids|pence)$/,``).replace(/_/g,` `).trim();return t?t[0].toUpperCase()+t.slice(1):``}var Oe=e=>e&&e.label||De(e&&e.name);function ke(e){let t=String(e&&e.description||``).trim();return!t||t.toLowerCase()===Oe(e).toLowerCase()?``:t.replace(/^TRUE:\s*/,`Ticked: `).replace(/^FALSE:\s*/,`Unticked: `)}var Ae=e=>De(String(e??``))||``,je=/^(-)?£?(-)?(\d{1,3}(?:,\d{3})+|\d+)?(?:\.(\d{1,2}))?$/;function Me(e){if(typeof e==`number`)return Number.isFinite(e)?Math.round(e*100):NaN;let t=String(e??``).replace(/\s+/g,``);if(!t)return null;let n=je.exec(t);if(!n||n[1]&&n[2]||!n[3]&&!n[4])return NaN;let r=n[3]?Number(n[3].replace(/,/g,``)):0,i=n[4]?Number(n[4].padEnd(2,`0`)):0,a=r*100+i;return Number.isSafeInteger(a)?n[1]||n[2]?-a:a:NaN}var Ne=new Intl.NumberFormat(we,{style:`currency`,currency:`GBP`});function Pe(e){return e==null||e===``||!Number.isFinite(Number(e))?``:Ne.format(Number(e)/100)}function Fe(e){if(e==null||e===``||!Number.isFinite(Number(e)))return``;let t=Number(e),n=t<0?`-`:``,r=Math.abs(t),i=Math.floor(r/100),a=r%100;return a?`${n}${i}.${String(a).padStart(2,`0`)}`:`${n}${i}`}var Ie=/^(\d{4})-(\d{2})-(\d{2})$/,Le=/^([01]\d|2[0-3]):([0-5]\d)$/;function Re(e){let t=Ie.exec(e);if(!t)return!1;let n=new Date(Date.UTC(+t[1],t[2]-1,+t[3]));return n.getUTCFullYear()===+t[1]&&n.getUTCMonth()===t[2]-1&&n.getUTCDate()===+t[3]}function ze(e,t,n={}){if(!e)return t==null?``:String(t);let r=n.listLabel||((e,t)=>t),i=n.refLabel||((e,t)=>t);switch(e.type){case`pence`:return Pe(t);case`int`:return t==null||t===``?``:new Intl.NumberFormat(we).format(Number(t));case`bool`:return t?`Yes`:`No`;case`date`:return h(t);case`datetime`:return g(t,n.timeZone);case`time`:return typeof t==`string`?t.slice(0,5):``;case`list`:return t==null||t===``?``:r(e.list,t)||``;case`lists`:return _(t).map(t=>r(e.list,t)).join(`, `);case`ref`:return t?i(e.ref,t):``;case`refs`:return _(t).map(t=>i(e.ref,t)).join(`, `);case`enum`:return t?Ae(t):``;case`json`:return t==null?``:JSON.stringify(t);default:return t==null?``:String(t)}}function Be(e,t){if(!e||typeof t!=`string`||!t.trim())return null;let n=t.trim();if(e.type===`email`)return/^[^\s@]+@[^\s@]+$/.test(n)?`mailto:${n}`:null;if(e.type===`url`||e.type===`drive_file`){if(/^https?:\/\//i.test(n))return n;if(e.type===`drive_file`&&/^[A-Za-z0-9_-]{20,}$/.test(n))return`https://drive.google.com/open?id=${n}`}return null}function Ve(e,t){switch(e.type){case`pence`:return Fe(t);case`int`:return t==null?``:String(t);case`bool`:return!!t;case`lists`:case`refs`:return _(t).slice();case`json`:return t==null?``:JSON.stringify(t,null,2);case`datetime`:return He(t);default:return t==null?``:String(t)}}function He(e){let t=Date.parse(e);if(typeof e!=`string`||Number.isNaN(t))return``;let n=new Date(t),r=e=>String(e).padStart(2,`0`);return`${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}T${r(n.getHours())}:${r(n.getMinutes())}`}var v={value:null},y=e=>({error:e});function Ue(e,t){let n=typeof t==`string`?t.trim():t;switch(e.type){case`bool`:return{value:!!t};case`lists`:case`refs`:return{value:_(t).map(String).filter(e=>e.trim())};case`int`:{if(n==null||n===``)return v;let e=String(n).replace(/,/g,``);return/^-?\d+$/.test(e)&&Number.isSafeInteger(Number(e))?{value:Number(e)}:y(`Enter a whole number.`)}case`pence`:{let e=Me(n);return e===null?v:Number.isNaN(e)?y(`Enter an amount in pounds, like 1,250.50`):{value:e}}case`date`:return n?Re(n)?{value:n}:y(`Enter a date.`):v;case`time`:return n?Le.test(n)?{value:n}:y(`Enter a time, like 18:30.`):v;case`datetime`:{if(!n)return v;let e=Date.parse(n);return Number.isNaN(e)?y(`Enter a date and time.`):{value:new Date(e).toISOString()}}case`json`:if(!n)return v;try{return{value:JSON.parse(n)}}catch{return y(`This is not valid JSON.`)}case`email`:return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?{value:n}:y(`Enter an email address.`):v;case`url`:return n?/^https?:\/\/\S+$/i.test(n)?{value:n}:y(`Enter a web address starting with https://`):v;default:return n==null||n===``?v:{value:String(n)}}}var We=e=>e==null||e===``||Array.isArray(e)&&!e.length,Ge=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t??null);function Ke(e,t,n){let r={},i={};for(let a of e){if(!a.writable||Ce(a.name)||a.name.startsWith(`_`))continue;let e=Ue(a,t[a.name]);e.error?i[a.name]=e.error:a.required&&a.type!==`bool`&&We(e.value)?i[a.name]=`Please fill this in.`:n&&Ge(e.value,qe(a,n[a.name]))||(r[a.name]=e.value)}return{values:r,errors:i}}function qe(e,t){return e.type===`bool`?!!t:e.type===`lists`||e.type===`refs`?_(t):t===``?null:t}function Je(e,t={}){let n={};for(let r of e)n[r.name]=Ve(r,t[r.name]??null);return n}function Ye(e,t){let n={};for(let r of e)n[r.name]=Ve(r,t?t[r.name]:null);return n}var Xe=`All years`,Ze=e=>/^system\//.test(String(e||``));function Qe(e,t){return e?Xe:t==null||t===``?``:String(t)}var $e=(e,t)=>Qe(Ze(e),t),et=[`sponsors`,`suppliers`,`files`,`settings`],tt=(e,t)=>!e||et.includes(e)?``:Qe(!1,t);function nt(e){return`Changes the ${String(e||``).trim().toLowerCase()||`record`} in every year`}var rt=e=>`Viewing ${e}, read only`,it=e=>`Back to ${e}`;function at(e,t){return(e||[]).map(e=>({value:Number(e.year),label:Number(e.year)===Number(t)?`${e.year}, this year`:`${e.year}, read only`}))}function ot(e,t){let n=Number(e);return e==null||e===``||!Number.isInteger(n)||n===Number(t)?null:n}function st(e){if(!e)return e;let t={};for(let[n,r]of Object.entries(e.levels||{}))t[n]=!r||r===`none`?`none`:`view`;return{...e,admin:!1,levels:t}}function ct({api:e,records:t,fallbackYear:n=()=>null,onSwitch:r=()=>{}}={}){return{current:null,viewing:null,years:[],status:`idle`,pastSettings:null,get shown(){return this.viewing??this.current??n()??null},get past(){return this.viewing!=null},get options(){return at(this.years,this.current)},get canPick(){return this.years.length>1},get bandText(){return this.past?rt(this.viewing):``},get backText(){return this.current==null?`Back`:it(this.current)},async load(){this.status=`loading`;try{let t=await e.call(`years.list`,{});this.current=t.current??null,this.years=t.years||[],this.status=`ready`}catch{this.status=`error`}},async pick(n){let i=ot(n,this.current);if(i===this.viewing)return!1;if(e.year.set(i),t.clear(),this.viewing=i,this.pastSettings=null,r(i),i!=null)try{let t=await e.call(`settings.public`,{});this.viewing===i&&(this.pastSettings=t)}catch{}return!0},back(){return this.pick(null)},reset(){let t=this.viewing;e.year.set(null),this.viewing=null,this.pastSettings=null,this.years=[],this.current=null,this.status=`idle`,t!=null&&r(null)}}}var b=Ee(a,{wrap:e=>n.reactive(e)}),x=n.reactive({member:null}),lt=new Set;n.store(`years`,ct({api:a,records:b,fallbackYear:()=>b.state.year||((n.store(`ball`)||{}).settings||{}).year||null,onSwitch:e=>lt.forEach(t=>t(e))}));var S=n.store(`years`);function ut(e){return lt.add(e),()=>lt.delete(e)}var dt=12e3,ft=4e3,pt=4e3;function mt({setTimer:e=setTimeout,clearTimer:t=clearTimeout}={}){let n=null,r=null,i=()=>{n&&t(n),n=null};return{shown:!1,text:``,canUndo:!1,busy:!1,seq:0,show(t,a=null,o=a?dt:pt){i(),this.text=t,r=typeof a==`function`?a:null,this.canUndo=!!r,this.busy=!1,this.shown=!0,this.seq+=1;let s=this.seq;n=e(()=>{this.seq===s&&this.dismiss()},o)},hold(){i()},release(){if(!this.shown||this.busy||n)return;let t=this.seq;n=e(()=>{this.seq===t&&this.dismiss()},ft)},dismiss(){i(),this.shown=!1,this.canUndo=!1,r=null},async undo(){if(!r||this.busy)return;let e=r;i(),this.busy=!0;try{await e(),this.show(`Undone.`)}catch(e){this.show(e&&e.message||`Could not undo. Please try again.`)}}}}var ht=`
  <section>
    <div class="card"><div class="empty">
      <div class="ic" x-html="icon(current.icon)"></div>
      <h3 x-text="current.title"></h3>
      <p class="muted" x-text="'Built in ' + current.epic + '.'"></p>
    </div></div>
  </section>`,gt=`__none`,_t=e=>e==null||e===``||Array.isArray(e)&&!e.length,vt=e=>String(e??``).toLocaleLowerCase(`en-GB`).normalize(`NFD`).replace(/[̀-ͯ]/g,``);function yt(e,t,n){let r=vt(t).split(/\s+/).filter(Boolean);return r.length?e.filter(e=>{let t=vt(n(e));return r.every(e=>t.includes(e))}):e}var C=e=>Array.isArray(e)?e:e===``||e==null?[]:[e];function bt(e,t,n){let r=Object.entries(t||{}).map(([e,t])=>[e,C(t)]).filter(([,e])=>e.length);if(!r.length)return e;let i=e=>((n||[]).find(t=>t.name===e)||{}).type,a=(e,t,n)=>{let r=e[t],a=i(t);return n===`__none`?_t(r)||a===`bool`&&!r:a===`bool`?String(!!r)===String(n):Array.isArray(r)?r.includes(n):r===n};return e.filter(e=>r.every(([t,n])=>n.some(n=>a(e,t,n))))}function xt(e,t,{text:n,listOrder:r}={}){let i=t[e.name];if(_t(i)&&e.type!==`bool`)return null;switch(e.type){case`int`:case`pence`:return Number(i);case`bool`:return+!!i;case`date`:case`time`:case`datetime`:return String(i);case`list`:{let t=r?r(e.list).indexOf(i):-1;return t>=0?t:1e6}default:return vt(n?n(t,e):i)}}function St(e,t,n=`asc`,r={}){if(!t)return e.slice();let i=n===`desc`?-1:1,a=e.map((e,n)=>({r:e,i:n,k:xt(t,e,r)}));return a.sort((e,t)=>e.k===null||t.k===null?e.k===t.k?e.i-t.i:e.k===null?1:-1:e.k<t.k?-i:e.k>t.k?i:e.i-t.i),a.map(e=>e.r)}function Ct(e,t,n){let r=n.map(e=>({value:e.value,label:e.label,rows:[]})),i=e=>r.find(t=>t.value===e),a=null;for(let n of e){let e=n[t];if(_t(e)){a||={value:gt,label:`Not set`,rows:[]},a.rows.push(n);continue}let o=i(e);o||(o={value:e,label:String(e),rows:[]},r.push(o)),o.rows.push(n)}return a?r.concat(a):r}var wt={string:`input`,email:`input`,url:`input`,color:`input`,drive_file:`input`,text:`textarea`,int:`number`,pence:`money`,date:`date`,time:`time`,datetime:`datetime`,bool:`check`,list:`select`,enum:`select`,lists:`checks`,ref:`ref`,refs:`checks`,json:`textarea`};function Tt(e){return!e||!e.writable?`readonly`:wt[e.type]||`input`}var Et={email:`email`,url:`url`};function Dt(e){if(!e||!e.tab)throw Error("record screen: `tab` missing");let t=e.noun||`record`;return{tab:e.tab,load:e.load&&e.load.length?e.load.slice():[e.tab],list:e.list&&e.list.length?e.list.slice():[`_label`],form:e.form?e.form.slice():null,filters:e.filters?e.filters.slice():[],sort:e.sort||e.list&&e.list[0]||`_label`,dir:e.dir===`desc`?`desc`:`asc`,groupBy:e.groupBy||null,ownList:!!e.ownList,ownTasks:!!e.ownTasks,statusCol:e.statusCol||null,groupable:e.groupable?e.groupable.slice():null,noun:t,nouns:e.nouns||`${t}s`,defaults:{...e.defaults||{}},empty:e.empty||`No ${e.nouns||`${t}s`} yet.`,computedFilters:(e.computedFilters||[]).filter(e=>e&&e.name&&typeof e.test==`function`),fieldLinks:{...e.fieldLinks||{}},noNew:!!e.noNew,menuItems:(e.menuItems||[]).filter(e=>e&&typeof e.run==`function`),removeWords:e.removeWords&&typeof e.removeWords.button==`function`&&typeof e.removeWords.done==`function`?e.removeWords:null}}function Ot(e,t,n,r){let i=(t||[]).map(e=>[e,C(n&&n[e.name])]).filter(([,e])=>e.length);return i.length?e.filter(e=>i.every(([t,n])=>t.test.call(r,e,n))):e}function kt(e,t){let n=new Set((t||[]).map(e=>e.name));return Object.fromEntries(Object.entries(e||{}).filter(([e])=>!n.has(e)))}var At=e=>Object.values(e||{}).filter(e=>C(e).length).length,jt=(e,t,n)=>`Show ${e} ${e===1?t:n}`;function Mt(e,t,n){if(!e||!e.writable||!n||!e.list||e.type!==`list`&&e.type!==`lists`)return!1;if(!t||!t.items)return!0;let r=t.items[e.list];return!!r&&r.fixed!==!0}var Nt={name:`_label`,label:`Name`,type:`string`,writable:!1};function w(e,t){return(e||[]).map(e=>e===`_label`?Nt:t.find(t=>t.name===e)).filter(Boolean)}var Pt=[`bool`,`int`,`pence`,`date`,`time`,`datetime`],Ft={enum:`12rem`,list:`12rem`,ref:`14rem`},It={lists:[`8rem`,1.3],refs:[`8rem`,1.3],email:[`10rem`,1.6],url:[`8rem`,1.3],text:[`10rem`,1.8],string:[`6.5rem`,1.1]},Lt=[`9rem`,2.2];function Rt(e,t=!1){let n=e&&e.type;if(!t&&Pt.includes(n))return`max-content`;if(!t&&Ft[n])return`fit-content(${Ft[n]})`;let[r,i]=t?Lt:It[n]||It.string;return`minmax(${r},${i}fr)`}var zt=`2.25rem`,Bt=(e,t=!1)=>e.map((e,t)=>Rt(e,t===0)).concat(t?[zt]:[]).join(` `),Vt=[`int`,`pence`,`date`,`datetime`,`time`],Ht=e=>!!e&&Vt.includes(e.type),Ut=7340032,Wt=41943040,Gt=1600,Kt=.85,qt={Outreach:`file_kind_sponsors`,SupplierYear:`file_kind_suppliers`,Meetings:`file_kind_meetings`},Jt=`Images`,Yt=12e4,T={"image/jpeg":{kind:`image`,ext:[`jpg`,`jpeg`]},"image/png":{kind:`image`,ext:[`png`]},"image/webp":{kind:`image`,ext:[`webp`]},"image/gif":{kind:`image`,ext:[`gif`]},"application/pdf":{kind:`document`,ext:[`pdf`]},"application/msword":{kind:`document`,ext:[`doc`]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{kind:`document`,ext:[`docx`]},"application/vnd.ms-excel":{kind:`document`,ext:[`xls`]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{kind:`document`,ext:[`xlsx`]},"application/vnd.ms-powerpoint":{kind:`document`,ext:[`ppt`]},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{kind:`document`,ext:[`pptx`]},"text/plain":{kind:`document`,ext:[`txt`]},"text/csv":{kind:`document`,ext:[`csv`]}},Xt=e=>{let t=/\.([A-Za-z0-9]{1,5})$/.exec(String(e||``));return t?t[1].toLowerCase():``};function Zt(e){let t=String(e&&e.type||``).toLowerCase();if(T[t])return t;let n=Xt(e&&e.name);return Object.keys(T).find(e=>T[e].ext.includes(n))||t}var Qt=e=>T[e]?T[e].kind:null,$t=e=>!!e&&(e.name===`folder`||/_folder$/.test(e.name));function en(e,t){return!e||e.type!==`drive_file`||!e.writable||$t(e)?null:t===`Images`?`images`:`all`}function tn(e){let t=Object.keys(T).filter(t=>e===`all`||T[t].kind===`image`);return t.concat(t.flatMap(e=>T[e].ext.map(e=>`.${e}`))).join(`,`)}function nn(e,t=!0){let n=t?`, or paste a Google Drive link`:``;return e===`all`?`Upload a picture or a document (PDF, Word, Excel, PowerPoint, text or CSV, up to 7 MB)${n}.`:e===`images`?`Upload a picture (JPEG, PNG, WebP or GIF)${n}.`:``}var rn=e=>`${Math.round(e/1048576*10)/10} MB`;function an(e,t){if(!e)return{error:`Choose a file first.`};let n=Zt(e),r=Qt(n);if(!r)return{error:`This kind of file cannot be uploaded. Use a picture (JPEG, PNG, WebP, GIF), a PDF, or a Word, Excel, PowerPoint, text or CSV file.`};if(!t)return{error:`You cannot upload here.`};if(r===`document`&&t!==`all`)return{error:`Only pictures can be uploaded here.`};if(!e.size)return{error:`The file is empty.`};let i=r===`image`&&n!==`image/gif`?Wt:Ut;return e.size>i?{error:`The file is ${rn(e.size)}. The most is ${rn(i)}.`}:{mimeType:n,kind:r}}function on(e,t,n=Gt){let r=Math.max(1,Math.round(e)),i=Math.max(1,Math.round(t)),a=Math.min(1,n/Math.max(r,i));return{width:Math.max(1,Math.round(r*a)),height:Math.max(1,Math.round(i*a)),scaled:a<1}}function sn(e,t){let n=String(e||``).split(/[\\/]/).pop().trim()||`file`,r=(T[t]||{}).ext||[],i=Xt(n);return!r.length||r.includes(i)?n:`${(i?n.slice(0,-(i.length+1)):n)||`file`}.${r[0]}`}function cn(e,t,n){if(e&&typeof e.put==`function`){e.put(t,n);return}let r=e&&e.state&&e.state.tabs;if(!r||!n||!n.id)return;let i=r[r[t]?t:t.startsWith(`system/`)?t.slice(7):`system/${t}`];if(!i)return;let a=i.rows.findIndex(e=>e.id===n.id);a>=0?i.rows.splice(a,1,n):i.rows.push(n)}async function ln(e){if(typeof createImageBitmap==`function`)try{return await createImageBitmap(e,{imageOrientation:`from-image`})}catch{}let t=URL.createObjectURL(e);try{let e=new Image;return e.src=t,await e.decode(),e}finally{URL.revokeObjectURL(t)}}function un(e,t,n){let r=e.getImageData(0,0,t,n).data;for(let e=3;e<r.length;e+=4)if(r[e]<255)return!0;return!1}var dn=(e,t,n)=>new Promise((r,i)=>{e.toBlob(e=>e?r(e):i(Error(`The picture could not be prepared.`)),t,n)});async function fn(e,t){if(Qt(t)!==`image`||t===`image/gif`){if(e.size>7340032)throw Error(`The file is ${rn(e.size)}. The most is ${rn(Ut)}.`);return{blob:e,mimeType:t,name:sn(e.name,t)}}let n;try{n=await ln(e)}catch{throw Error(`This picture could not be opened. Try saving it as a JPEG first.`)}let r=on(n.width,n.height),i=document.createElement(`canvas`);i.width=r.width,i.height=r.height;let a=i.getContext(`2d`);a.drawImage(n,0,0,r.width,r.height),typeof n.close==`function`&&n.close();let o=t!==`image/jpeg`&&un(a,r.width,r.height),s=o?`image/png`:`image/jpeg`,c=await dn(i,s,o?void 0:Kt);if(!r.scaled&&e.size<=7340032&&e.size<=c.size)return{blob:e,mimeType:t,name:sn(e.name,t)};if(c.size>7340032)throw Error(`This picture is still too large after shrinking. Try a smaller one.`);return{blob:c,mimeType:s,name:sn(e.name,s)}}async function pn(e){let t=new Uint8Array(await e.arrayBuffer()),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode.apply(null,t.subarray(e,e+32768));return btoa(n)}async function mn({api:e,records:t,file:n,kind:r,target:i,onStage:a=()=>{}}){let o=an(n,r);if(o.error)throw Object.assign(Error(o.error),{code:`bad_request`});a(`Getting the file ready...`);let s=await fn(n,o.mimeType),c=await pn(s.blob);a(`Uploading...`);let l={...i,fileName:s.name,mimeType:s.mimeType,dataBase64:c};Object.keys(l).forEach(e=>{(l[e]==null||l[e]===``)&&delete l[e]});try{let n=await e.call(`files.upload`,l,{retry:!1,timeoutMs:Yt});return cn(t,i.tab,n.row),n}catch(e){throw e&&e.code===`conflict`&&e.details&&e.details.row&&cn(t,i.tab,e.details.row),e}}async function hn({api:e,title:t,comment:n,link:r,file:i,onStage:a=()=>{}}){let o={title:t,comment:n};if(!i)return e.call(`files.addOther`,{...o,link:r},{retry:!1});let s=an(i,`all`);if(s.error)throw Object.assign(Error(s.error),{code:`bad_request`});a(`Getting the file ready...`);let c=await fn(i,s.mimeType),l=await pn(c.blob);return a(`Uploading...`),e.call(`files.addOther`,{...o,fileName:c.name,mimeType:c.mimeType,dataBase64:l},{retry:!1,timeoutMs:Yt})}var gn=e=>String(e||``).replace(/^system\//,``),_n={Outreach:`Company this year`,Contacts:`Company`,ContactPeople:`Contact person`,Tiers:`Tier`,SupplierYear:`Supplier booking`,Suppliers:`Supplier`,Meetings:`Meeting`,Prizes:`Prize`,Lots:`Lot`,Tasks:`Task`},vn=e=>_n[gn(e)]||`Record`,yn={Outreach:{screen:`sponsors`,part:`year`,words:`Open in Sponsors`},Contacts:{screen:`sponsors`,part:`all`,words:`Open in Sponsors`},Tiers:{screen:`sponsors`,part:`tiers`,words:`Open in Sponsors`},SupplierYear:{screen:`suppliers`,part:`year`,words:`Open in Suppliers`},Suppliers:{screen:`suppliers`,part:`all`,words:`Open in Suppliers`},Tasks:{screen:`tasks`,part:``,words:`Open in Tasks`}},bn=e=>yn[gn(e)]||null,E=n.reactive({wanted:null});function xn(e,t){let n=bn(e);n&&t&&(E.wanted={tab:gn(e),id:t,screen:n.screen,part:n.part},(location.hash||``).replace(/^#\/?/,``).split(/[/?]/)[0]!==n.screen&&(location.hash=n.screen))}function Sn(e){let t=E.wanted;return!t||t.tab!==gn(e)?null:(E.wanted=null,t)}var Cn=e=>E.wanted&&E.wanted.screen===e?E.wanted.part:``,D=[`Lists`,`system/Lists`],wn={year:`year`,all_years:`system`},Tn=`To change what a value means, retire it and add a new one: records keep the old one.`,En=`Shared by every year: a change here shows in all years, past ones too.`;function Dn(e,t,n){if(!e||!e.items)return[];let r=e=>(e===`system`?n:t)||[];return(e.screens||[]).map(t=>({id:t.id,label:t.label,lists:Object.entries(e.items).filter(([,e])=>e.screen===t.id).map(([e,t])=>{let n=wn[t.scope]||`year`;return{name:e,sheet:n,title:t.title,help:t.help||``,fixed:t.fixed===!0,allYears:t.scope===`all_years`,count:r(n).filter(t=>String(t.list_name).trim()===e&&t.active!==!1).length}})})).filter(e=>e.lists.length)}var On=(e,t)=>e.flatMap(e=>e.lists).find(e=>e.name===t)||null;function kn(e,t,n=[],r=!1){let i=new Set(n.filter(e=>e.locked).map(e=>e.value));return e.filter(e=>String(e.list_name).trim()===t).map(e=>({id:e.id,value:String(e.value),label:String(e.label||e.value),order:Number(e.sort_order)||0,active:e.active!==!1,locked:r||i.has(String(e.value))})).sort((e,t)=>e.order-t.order||e.label.localeCompare(t.label,`en-GB`))}function An(e,t,n){if(!e)return``;let r=e[t]||0;return n?r?r===1?`Used once`:`Used ${r} times`:`Not used yet`:r?`Still on ${r===1?`one record`:`${r} records`}`:``}var jn=(e,t)=>!!e&&!t.locked&&!(e[t.value]>0);function Mn(e,t,n){let r=e.map(e=>e.id),i=r.indexOf(t),a=i+n;return i<0||a<0||a>=r.length?null:([r[i],r[a]]=[r[a],r[i]],r)}var Nn=`Tasks`,Pn=`done`,Fn=`todo`,In=[{tab:`Outreach`,label:`Company`,plural:`Companies`},{tab:`SupplierYear`,label:`Supplier`,plural:`Suppliers`},{tab:`Meetings`,label:`Meeting`,plural:`Meetings`},{tab:`Prizes`,label:`Prize`,plural:`Prizes`}],Ln=e=>(In.find(t=>t.tab===e)||{}).label||String(e||``),Rn=e=>String(e).padStart(2,`0`),zn=e=>`${e.getFullYear()}-${Rn(e.getMonth()+1)}-${Rn(e.getDate())}`;function Bn(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||``));return t?new Date(Date.UTC(+t[1],t[2]-1,+t[3])):null}var Vn=e=>e.toISOString().slice(0,10);function Hn(e,t){let n=Bn(e);return n?(n.setUTCDate(n.getUTCDate()+t),Vn(n)):``}function Un(e){let t=Bn(e);return t?Hn(e,7-(t.getUTCDay()||7)):``}var O=e=>String(e).slice(0,7);function Wn(e){let[t,n]=e.split(`-`).map(Number);return n===12?`${t+1}-01`:`${t}-${Rn(n+1)}`}function Gn(e){let[t,n]=e.split(`-`).map(Number);return new Intl.DateTimeFormat(`en-GB`,{month:`long`,year:`numeric`,timeZone:`UTC`}).format(new Date(Date.UTC(t,n-1,1)))}function Kn(e,t){return!e||!e.due||e.status===`done`||!t?``:e.due<t?`overdue`:e.due<=Hn(t,7)?`soon`:``}var qn=(e=new Date)=>({status:Pn,done_at:e.toISOString()});function Jn(e,t=new Date){return e?e.status===`done`&&!e.done_at?{done_at:t.toISOString()}:e.status!==`done`&&e.done_at?{done_at:null}:null:null}function Yn(e,t){let n={status:Fn};if(!e||!e.id)return n;let r=(t||[]).find(t=>t.id===e.id);return r&&(n.owner_member_id=r.id),n}function Xn(e,t,n){if(!n)return``;switch(t){case`Outreach`:return e.label(`system/Contacts`,n.contact_id)||n._label||n.id;case`SupplierYear`:{let r=e.label(`system/Suppliers`,n.supplier_id)||n.id,i=e.column(t,`area`),a=n.area?e.listLabel(i&&i.list||`supplier_area`,n.area):``;return a?`${r} (${a})`:r}case`Meetings`:return[h(n.date),n.location].filter(Boolean).join(`, `)||n.id;case`Prizes`:return n.title||n._label||n.id;default:return n._label||n.id}}function Zn(e,t){if(!t||!t.linked_tab)return``;let n=Ln(t.linked_tab);if(!t.linked_id)return n;let r=e.byId(t.linked_tab,t.linked_id);return r?`${n}: ${Xn(e,t.linked_tab,r)}`:e.columns(t.linked_tab).length?`${n}: record not found`:n}function Qn(e,t,{current:n=``,query:r=``}={}){if(!t)return[];let i=e.rows(t).slice();t===`Meetings`&&i.sort((e,t)=>String(e.date||``).localeCompare(String(t.date||``)));let a=i.map(n=>({value:n.id,label:Xn(e,t,n)}));t!==`Meetings`&&a.sort((e,t)=>e.label.localeCompare(t.label,`en-GB`,{sensitivity:`base`}));let o=String(r||``).trim().toLowerCase();return o&&(a=a.filter(e=>e.value===n||e.label.toLowerCase().includes(o))),n&&!a.some(e=>e.value===n)&&a.unshift({value:n,label:`Record not found`}),a}function $n(e,t,n){let r=(e||[]).filter(e=>e.status!==Pn),i=Un(t),a=O(t),o=r.filter(e=>e.due&&e.due>i).map(e=>O(e.due)).sort(),s=n&&/^\d{4}-\d{2}/.test(n)?O(n):o[o.length-1]||a;s<a&&(s=o[o.length-1]||a);let c={key:`overdue`,label:`Overdue`,rows:[]},l={key:`week`,label:`This week`,rows:[]},u={key:`month`,label:`This month`,rows:[]},d=[];for(let e=Wn(a);e<=s;e=Wn(e))d.push({key:e,label:Gn(e),rows:[]});let f={key:`later`,label:`Later`,rows:[]},p={key:`none`,label:`No date`,rows:[]};for(let e of r)e.due?e.due<t?c.rows.push(e):e.due<=i?l.rows.push(e):O(e.due)===a?u.rows.push(e):(d.find(t=>t.key===O(e.due))||f).rows.push(e):p.rows.push(e);let m=(e,t)=>String(e.due||``).localeCompare(String(t.due||``)),ee=[c,l,u,...d,f,p];ee.forEach(e=>e.rows.sort(m));let h=O(Hn(i,1))!==a,g=[c,f,p].concat(h?[u]:[]);return ee.filter(e=>e.rows.length||!g.includes(e))}var er=[`list`,`lists`,`enum`,`ref`,`refs`,`bool`],tr=[`list`,`enum`,`ref`,`bool`],nr=`__all`,rr=80,ir=0,ar=(e,t)=>{let n=t?b.byId(e,t):null;return n?Xn(b,String(e).replace(/^system\//,``),n):b.label(e,t)},or={listLabel:(e,t)=>b.listLabel(e,t),refLabel:ar},sr=e=>Object.keys(e||{}),cr=()=>({name:``,status:`idle`,error:``,busy:!1,renaming:null,renameText:``,newLabel:``,usage:null}),lr=[`active`,`removed`],ur=e=>!lr.includes(e.name),k=()=>n.store(`toast`),A=e=>`"${e}"`,dr={added:`Added`,removed:`Removed`,restored:`Brought back`,inactive:`Made inactive`,active:`Made active again`},fr=[`Outreach`,`SupplierYear`,`Meetings`,`Prizes`],j=e=>String(e||``).replace(/^system\//,``),pr=e=>String(e??``).toLocaleLowerCase(`en-GB`).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``),mr=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t??null)||(e==null||e===``||Array.isArray(e)&&!e.length)&&(t==null||t===``||Array.isArray(t)&&!t.length);function hr(e){return e===`int`||e===`pence`?[`Lowest first`,`Highest first`]:e===`date`||e===`datetime`||e===`time`?[`Earliest first`,`Latest first`]:e===`list`?[`In list order`,`Reverse order`]:e===`bool`?[`No first`,`Yes first`]:[`A to Z`,`Z to A`]}function M(e){let t=Dt(e),n={cfg:t,uid:++ir,status:`loading`,loadError:``,q:``,filters:Object.fromEntries([...t.filters,...t.computedFilters.map(e=>e.name)].map(e=>[e,[]])),sortCol:t.sort,sortDir:t.dir,group:t.groupBy||``,folded:{},panel:{open:!1,mode:`view`,id:null},form:{},errors:{},message:``,saving:!1,showInactive:!1,removedOpen:!1,hist:{id:null,status:`idle`,entries:[],removeBlocked:``,error:``},putBack:null,acting:!1,menu:{row:null,mode:`row`,style:{}},pick:{key:``,q:``,i:0},peeks:[],sheetOpen:!1,listEd:cr(),noteField:``,init(){this.reload(),this.$watch(()=>E.wanted,()=>this.openWanted()),this.closeMenuOnMove=e=>{e.target&&e.target.closest&&e.target.closest(`.amenu`)||this.closeMenu()},window.addEventListener(`scroll`,this.closeMenuOnMove,!0),window.addEventListener(`resize`,this.closeMenuOnMove)},destroy(){window.removeEventListener(`scroll`,this.closeMenuOnMove,!0),window.removeEventListener(`resize`,this.closeMenuOnMove)},async reload(){let e=b.has(t.load);this.status=e?`ready`:`loading`;try{await b.load(t.load),this.status=`ready`,this.openWanted()}catch(t){if(e)return;this.loadError=t.message||`Could not load.`,this.status=`error`}},tagFor(e){return $e(e,S.shown)},get generalNoteText(){return Ze(t.tab)?nt(vn(t.tab)):``},get canWrite(){return b.canWrite(t.tab)},get cols(){return b.columns(t.tab)},get listCols(){return w(t.list,this.cols).filter(ur)},get formCols(){return w(t.form||this.cols.map(e=>e.name),this.cols).filter(e=>!Ce(e.name)&&e.name!==`_label`&&ur(e))},get fieldCols(){return e.ownField?this.formCols.filter(t=>!e.ownField(t.name)):this.formCols},get editCols(){return this.fieldCols.filter(e=>e.writable||this.panel.id)},get filterCols(){return w(t.filters,this.cols).filter(e=>er.includes(e.type)&&ur(e))},get filterDefs(){return this.filterCols.map(e=>({name:e.name,label:this.label(e),options:this.filterOptions(e)})).concat(t.computedFilters.map(e=>({name:e.name,label:e.label,options:e.options||[]})))},get filterOn(){return At(this.filters)},get sheetShowText(){return jt(this.rows.length,t.noun,t.nouns)},clearAllFilters(){for(let e of sr(this.filters))this.filters[e]=[]},get groupCol(){return this.group&&this.groupableCols.find(e=>e.name===this.group)||null},get groupableCols(){let e=t.groupable||[...t.filters,...t.list,...t.groupBy?[t.groupBy]:[]];return w([...new Set(e)],this.cols).filter(e=>tr.includes(e.type)&&!e.computed&&ur(e))},label:Oe,hint:ke,filterValues:C,cell(e,t){return!e||!t?``:t.name===`_label`?this.rowLabel(e):ze(t,e[t.name],or)},link(e,t){return t?Be(e,t[e.name]):null},rowLabel(n){return e.rowLabel&&e.rowLabel(n)||Xn(b,j(t.tab),n)},get activeCol(){return this.cols.find(e=>e.name===`active`)||null},get canInactive(){return!!(this.activeCol&&this.activeCol.writable)},isInactive(e){return!!e&&e.active===!1},get inactiveCount(){return this.activeCol?b.rows(t.tab).filter(e=>e.active===!1).length:0},get baseRows(){let e=b.rows(t.tab);return this.activeCol&&!this.showInactive?e.filter(e=>e.active!==!1):e},get removedList(){return[...b.removedRows(t.tab)].sort((e,t)=>String(this.rowLabel(e)).localeCompare(String(this.rowLabel(t)),`en-GB`))},removedText(e){let t=this.who(e.updated_by);return`Removed${t?` by ${t}`:``}${e.updated_at?`, ${g(e.updated_at)}`:``}`},get canRemoveHere(){return!b.canRemove(t.tab)||!this.record?!1:!b.keptYearly(t.tab)||this.hist.id===this.record.id&&this.hist.status===`ready`&&!this.hist.removeBlocked},get removeText(){return t.removeWords?t.removeWords.button.call(this):`Remove`},removeDoneText(e){let n=A(this.rowLabel(e));return t.removeWords?t.removeWords.done.call(this,n):`Removed ${n}.`},async removeRecord(e=this.record){if(this.closeMenu(),e&&!this.acting){this.acting=!0,this.message=``;try{await b.remove(t.tab,e.id),this.panel.id===e.id&&(this.panel.open=!1,this.panel.mode=`view`),k().show(this.removeDoneText(e),async()=>{await b.restore(t.tab,e.id)})}catch(t){this.problem(e,t.message||`Could not remove. Please try again.`)}finally{this.acting=!1}}},async restoreRecord(e){if(!this.acting){this.acting=!0;try{await b.restore(t.tab,e.id),k().show(`Brought back ${A(this.rowLabel(e))}.`,async()=>{await b.remove(t.tab,e.id)})}catch(e){k().show(e.message||`Could not bring it back. Please try again.`)}finally{this.acting=!1}}},async toggleActive(e=this.record){if(this.closeMenu(),!e||this.acting)return;let n=e.active===!1;this.acting=!0,this.message=``;try{await b.save(t.tab,{active:n},e.id);let r=A(this.rowLabel(e));k().show(n?`Made ${r} active again.`:`Made ${r} inactive.`,async()=>{await b.save(t.tab,{active:!n},e.id),this.historyAfterUndo(e.id)}),this.historyAfterUndo(e.id)}catch(t){this.problem(e,t.message||`Could not change it. Please try again.`)}finally{this.acting=!1}},problem(e,t){this.panel.open&&this.panel.id===e.id&&this.panel.mode===`view`&&!this.peeks.length?this.message=t:k().show(t)},get hasMenu(){return this.canWrite||b.canRemove(t.tab)},get canRemoveTab(){return b.canRemove(t.tab)},get statusCol(){let e=t.statusCol||`status`,n=this.cols.find(t=>t.name===e);return n&&(n.type===`list`||n.type===`enum`)?n:null},get canStatus(){return!!(this.canWrite&&this.statusCol&&this.statusCol.writable)},isStatusCol(e){return!!(e&&this.statusCol&&e.name===this.statusCol.name)},isStatusField(e){return!!(e&&this.canStatus&&e.name===this.statusCol.name)},get statusOptions(){let e=this.statusCol;return e?e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Ae(e)})):b.options(e.list,this.menu.row?this.menu.row[e.name]:void 0):[]},statusText(e){return e&&this.statusCol?ze(this.statusCol,e[this.statusCol.name],or)||`Not set`:``},openMenu(e,t,n=`row`){let r=this.menu.row&&this.menu.row.id===e.id&&this.menu.mode===n;if(this.closeMenu(),r)return;let i=t.currentTarget.getBoundingClientRect(),a=n===`status`?{left:`${Math.max(8,i.left)}px`}:{right:`${Math.max(8,window.innerWidth-i.right)}px`},o=window.innerHeight-i.bottom;o<320&&i.top>o?a.bottom=`${window.innerHeight-i.top+4}px`:a.top=`${i.bottom+4}px`,this.menu={row:e,mode:n,style:a},this.$nextTick(()=>{let e=this.$root.querySelector(`.amenu button:not([disabled])`);e&&e.focus()})},closeMenu(){this.menu.row&&(this.menu={row:null,mode:`row`,style:{}})},menuOpen(){let e=this.menu.row;this.closeMenu(),e&&this.open(e)},get menuExtras(){let e=this.menu.row;return e?t.menuItems.map((e,t)=>({i:t,m:e})).filter(({m:t})=>!t.show||t.show.call(this,e)).map(({i:t,m:n})=>({i:t,text:typeof n.text==`function`?n.text.call(this,e):String(n.text||``)})):[]},runMenuItem(e){let n=this.menu.row,r=t.menuItems[e];this.closeMenu(),n&&r&&r.run.call(this,n)},menuEdit(){let e=this.menu.row;this.closeMenu(),e&&(this.open(e),this.edit())},async setStatus(n,r){this.closeMenu();let i=this.statusCol;if(!n||!i||this.acting||n[i.name]===r)return;let a=e.statusValues?e.statusValues(n,r):{[i.name]:r},o=Object.fromEntries(sr(a).map(e=>[e,n[e]??null]));this.acting=!0;try{let{row:s}=await b.save(t.tab,a,n.id);k().show(`${A(this.rowLabel(s))} is now ${ze(i,r,or)}.`,async()=>{await b.save(t.tab,o,n.id),this.historyAfterUndo(n.id)}),this.historyAfterUndo(n.id),e.afterSave&&await e.afterSave.call(this,s,!1)}catch(e){this.problem(n,e.message||`Could not change the status. Please try again.`)}finally{this.acting=!1}},pickCol(e){return this.formCols.find(t=>t.name===e)||null},pickOptions(e){let t=this.pickCol(e);return t?b.refOptions(t.ref,this.form[e]):[]},pickValue(e){return this.form[e]??``},pickSet(e,t){this.form[e]=t},pickLabel(e){let t=this.pickValue(e);if(!t)return``;let n=this.pickOptions(e).find(e=>e.value===t);return n?n.label:String(t)},pickMatches(e){let t=pr(this.pick.key===e?this.pick.q:``).split(/\s+/).filter(Boolean),n=this.pickOptions(e).filter(e=>t.every(t=>pr(e.label).includes(t))),r=null;return n.slice(0,rr).map(e=>{let t=!!e.group&&e.group!==r;return r=e.group,{...e,head:t}})},pickText(e){return this.pick.key===e?this.pick.q:this.pickLabel(e)},pickOpen(e){this.pick={key:e,q:``,i:0}},pickClose(e){this.pick.key===e&&(this.pick={key:``,q:``,i:0})},pickInput(e,t){this.pick={key:e,q:t.target.value,i:0}},pickChoose(e,t,n){if(this.pickSet(e,t),this.pick={key:``,q:``,i:0},n&&n.target&&n.target.closest){let e=n.target.closest(`.combo`)&&n.target.closest(`.combo`).querySelector(`input`);e&&e.blur()}},pickClear(e){this.pickSet(e,``)},pickKey(e,t){if(this.pick.key!==e){t.key===`ArrowDown`&&this.pickOpen(e);return}let n=this.pickMatches(e).length;if(t.key===`ArrowDown`)t.preventDefault(),this.pick.i=Math.min(n-1,this.pick.i+1);else if(t.key===`ArrowUp`)t.preventDefault(),this.pick.i=Math.max(0,this.pick.i-1);else if(t.key===`Enter`){t.preventDefault();let n=this.pickMatches(e)[this.pick.i];n&&this.pickChoose(e,n.value,t)}else t.key===`Escape`&&(t.stopPropagation(),this.pickClose(e))},refTarget(e,t){if(!e||!t)return null;if(e.name===`linked_tab`){let e=t.linked_tab;return e&&t.linked_id&&b.byId(e,t.linked_id)?{tab:e,id:t.linked_id}:null}if(e.type!==`ref`||j(e.ref)===`Members`)return null;let n=t[e.name];return n&&b.byId(e.ref,n)?{tab:e.ref,id:n}:null},get peekTop(){return this.peeks.length?this.peeks[this.peeks.length-1]:null},get peekRow(){return this.peekTop?b.byId(this.peekTop.tab,this.peekTop.id):null},get peekNoun(){return this.peekTop?vn(this.peekTop.tab):``},get peekTitle(){return this.peekTop?ar(this.peekTop.tab,this.peekTop.id):``},get backTo(){if(this.peeks.length>1){let e=this.peeks[this.peeks.length-2];return ar(e.tab,e.id)||vn(e.tab).toLowerCase()}return this.panelTitle||t.noun},get peekCols(){let e=this.peekTop,t=this.peekRow;return!e||!t?[]:b.columns(e.tab).filter(e=>!Ce(e.name)&&ur(e)&&e.name!==`_label`&&e.name!==`linked_id`&&e.type!==`drive_file`&&e.type!==`json`&&!(t[e.name]==null||t[e.name]===``||Array.isArray(t[e.name])&&!t[e.name].length))},peekCell(e){let t=this.peekTop,n=this.peekRow;if(!t||!n)return``;if(e.name===`linked_tab`){let t=this.refTarget(e,n);return t?`${vn(t.tab)}: ${ar(t.tab,t.id)}`:vn(n.linked_tab)}return ze(e,n[e.name],or)},get peekOpenIn(){let e=this.peekTop,t=e&&bn(e.tab);return t&&p(m.find(e=>e.id===t.screen),x.member)?t:null},async peek(e,n){if(!e||!n||this.panel.mode===`view`&&!this.peeks.length&&j(e)===j(t.tab)&&n===this.panel.id)return;this.closeMenu(),this.peeks=[...this.peeks,{tab:e,id:n}];let r=b.columns(e).filter(e=>e.type===`ref`&&j(e.ref)!==`Members`).map(e=>e.ref),i=[...new Set([...r,...fr.includes(j(e))?[`Tasks`]:[]])].filter(e=>!b.has([e])&&(e!==`Tasks`||this.canSeeTasks));for(let e of i)await b.load([e]).catch(()=>{})},back(){this.peeks=this.peeks.slice(0,-1)},openPeekElsewhere(){let e=this.peekTop;if(e&&this.peekOpenIn){if(this.panel.open=!1,this.peeks=[],j(e.tab)===j(t.tab)){let n=b.byId(t.tab,e.id);n&&this.open(n)}else xn(e.tab,e.id)}},get canSeeTasks(){return p(m.find(e=>e.id===`tasks`),x.member)},relatedTasks(e,t){let n=j(e);return!t||!fr.includes(n)||!b.has([`Tasks`])?[]:b.rows(`Tasks`).filter(e=>e.linked_tab===n&&e.linked_id===t||n===`Meetings`&&e.meeting_id===t).sort((e,t)=>String(e.due||`9999`).localeCompare(String(t.due||`9999`)))},taskLine(e){return[b.listLabel(`task_status`,e.status),e.due?`due ${h(e.due)}`:``].filter(Boolean).join(`, `)},loadRelatedTasks(){!e.ownTasks&&fr.includes(j(t.tab))&&!b.has([`Tasks`])&&this.canSeeTasks&&b.load([`Tasks`]).catch(()=>{})},async loadHistory(){let e=this.panel.id;if(e){this.hist.id!==e&&(this.hist={id:e,status:`loading`,entries:[],removeBlocked:``,error:``});try{let n=await b.history(t.tab,e);if(this.panel.id!==e)return;this.hist={id:e,status:`ready`,entries:n.entries||[],removeBlocked:n.removeBlocked||``,error:``}}catch(t){if(this.panel.id!==e)return;this.hist={id:e,status:`error`,entries:[],removeBlocked:``,error:t.message||`Could not load the history.`}}}},historyAfterUndo(e){this.panel.open&&this.panel.id===e&&this.loadHistory()},histCol(e){return this.cols.find(t=>t.name===e.field)||null},histValue(e,t){let n=this.histCol(e),r=n?ze(n,t,or):t==null?``:String(t);return r===``?`empty`:A(r)},histWho(e){return`${e.by||`Someone`}, ${g(e.at)}`},histText(e){return e.kind===`changed`?`${e.label||e.field}: ${this.histValue(e,e.old)} to ${this.histValue(e,e.new)}`:dr[e.kind]||``},canPutBack(e){let t=this.histCol(e);return e.kind===`changed`&&this.canWrite&&!!(t&&t.writable)&&!!this.record&&!mr(this.record[e.field],e.old)},putBackText(e){let t=this.record?this.record[e.field]:null,n=!mr(t,e.new);return`Put ${String(e.label||e.field||`it`).toLowerCase()} back to ${this.histValue(e,e.old)}? `+(n?`It has changed again since: it is now ${this.histValue(e,t)}.`:`It is now ${this.histValue(e,t)}.`)},async doPutBack(e){let n=this.record;if(!n||this.acting)return;let r=n[e.field];this.acting=!0,this.message=``;try{await b.save(t.tab,{[e.field]:e.old},n.id),this.putBack=null,k().show(`Put ${String(e.label||e.field||`it`).toLowerCase()} back on ${A(this.rowLabel(n))}.`,async()=>{await b.save(t.tab,{[e.field]:r},n.id),this.historyAfterUndo(n.id)}),this.loadHistory()}catch(e){this.message=e.message||`Could not put it back. Please try again.`}finally{this.acting=!1}},get rows(){let n=bt(this.baseRows,kt(this.filters,t.computedFilters),this.cols);n=Ot(n,t.computedFilters,this.filters,this),e.where&&(n=n.filter(t=>e.where.call(this,t))),n=yt(n,this.q,e=>this.listCols.map(t=>this.cell(e,t)).join(` `));let r=w([this.sortCol],this.cols)[0];return St(n,r,this.sortDir,{text:(e,t)=>this.cell(e,t),listOrder:e=>b.list(e).map(e=>e.value)})},get total(){return this.baseRows.length},get countText(){let e=this.rows.length;return e===this.total?`${e} ${(e=>e===1?t.noun:t.nouns)(e)}`:`Showing ${e} of ${this.total} ${t.nouns}`},get gridStyle(){return{"--cols":Bt(this.listCols,this.hasMenu)}},isNumber(e){return Ht(e)},get listGroups(){let e=this.groupCol;if(!e)return[{value:nr,label:``,rows:this.rows}];let t;t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Ae(e)})):e.type===`bool`?[{value:!0,label:`Yes`},{value:!1,label:`No`}]:e.type===`ref`?b.refOptions(e.ref):b.options(e.list);let n=e.type===`bool`?this.rows.map(t=>({r:t,k:!!t[e.name]})):null;return(n?t.map(e=>({value:String(e.value),label:e.label,rows:n.filter(t=>t.k===e.value).map(e=>e.r)})):Ct(this.rows,e.name,t)).filter(e=>e.rows.length)},get grouped(){return!!this.groupCol},isFolded(e){return!!this.folded[e.value]},fold(e){this.folded[e.value]=!this.folded[e.value]},filterOptions(e){let t;return e.type===`bool`?[{value:`true`,label:`Yes`},{value:`false`,label:`No`}]:(t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Ae(e)})):e.type===`ref`||e.type===`refs`?b.refOptions(e.ref):b.list(e.list).map(e=>({value:e.value,label:e.label||e.value})),t.concat({value:gt,label:`Not set`}))},picked(e,t){return C(this.filters[e.name]).includes(t)},togglePick(e,t){let n=C(this.filters[e.name]);this.filters[e.name]=n.includes(t)?n.filter(e=>e!==t):[...n,t]},clearPick(e){this.filters[e.name]=[]},filterText(e){let t=C(this.filters[e.name]),n=e.options?e.label:this.label(e);if(!t.length)return`${n}: all`;if(t.length>1)return`${n}: ${t.length} chosen`;let r=(e.options||this.filterOptions(e)).find(e=>e.value===t[0]);return`${n}: ${r?r.label:t[0]}`},get sortOptions(){return this.listCols},sortBy(e){this.sortCol===e?this.sortDir=this.sortDir===`asc`?`desc`:`asc`:(this.sortCol=e,this.sortDir=`asc`)},flipSort(){this.sortDir=this.sortDir===`asc`?`desc`:`asc`},get sortDirText(){let e=w([this.sortCol],this.cols)[0];return hr(e&&e.type)[this.sortDir===`asc`?0:1]},get filtered(){return!!this.q.trim()||Object.values(this.filters).some(e=>C(e).length)},clearFilters(){this.q=``;for(let e of sr(this.filters))this.filters[e]=[]},get record(){return this.panel.id?b.byId(t.tab,this.panel.id):null},get panelTitle(){return this.panel.id?this.record?this.rowLabel(this.record):``:`New ${t.noun}`},get stamp(){let e=this.record;if(!e||!e.updated_at)return``;let t=this.who(e.updated_by);return`Last changed ${g(e.updated_at)}${t?` by ${t}`:``}`},who(e){if(!e)return``;let t=b.rows(`Members`).find(t=>t.id===e||t.google_email===e);return t&&t._label||e},reset(){this.errors={},this.message=``,this.pick={key:``,q:``,i:0},this.listEd=cr()},fieldLink(e,n){let r=e&&n?t.fieldLinks[e.name]:null;return r&&(!r.show||r.show.call(this,n))?r:null},runFieldLink(e,t){let n=this.fieldLink(e,t);n&&n.run&&n.run.call(this,t)},get mayChangeLists(){return d(x.member,`settings`,`edit`)},canEditList(e){return Mt(e,b.listInfo(),this.mayChangeLists)},prepareLists(){this.mayChangeLists&&!b.listInfo()&&b.load(D).catch(()=>{})},get listEdItem(){let e=b.listInfo();return this.listEd.name&&e&&e.items&&e.items[this.listEd.name]||null},get listEdTab(){return this.listEdItem&&wn[this.listEdItem.scope]===`system`?`system/Lists`:`Lists`},get listEdSheet(){return this.listEdTab===`system/Lists`?`system`:`year`},get listEdTitle(){return this.listEdItem?this.listEdItem.title:`List`},get listEdHelp(){return this.listEdItem&&this.listEdItem.help||``},get listEdAllYears(){return!!(this.listEdItem&&this.listEdItem.scope===`all_years`)},get listEdFixed(){return!!(this.listEdItem&&this.listEdItem.fixed)},get listEdCanEdit(){return!!this.listEdItem&&!this.listEdFixed&&b.canWrite(this.listEdTab)},get listEdValues(){if(!this.listEdItem)return[];let e=kn(b.rows(this.listEdTab),this.listEd.name,b.list(this.listEd.name),this.listEdFixed);return[...e.filter(e=>e.active),...e.filter(e=>!e.active)]},listEdUse(e){return An(this.listEd.usage,e.value,e.active)},listEdRenamable(e){return jn(this.listEd.usage,e)},async openListEd(e){if(!e||!e.list)return;this.pick={key:``,q:``,i:0},this.listEd={...cr(),name:e.list,status:b.has(D)&&b.listInfo()?`ready`:`loading`};let t=e.list;try{await b.load(D),this.listEd.name===t&&(this.listEd.status=`ready`)}catch(e){this.listEd.name===t&&(this.listEd.status=`error`,this.listEd.error=e.message||`Could not load the list.`);return}this.listEdCount()},closeListEd(){this.listEd.busy||(this.listEd=cr())},async listEdCount(){let e=this.listEd.name;try{let t=await a.call(`lists.usage`,{list_name:e});this.listEd.name===e&&(this.listEd.usage=t.counts||{})}catch{}},async listEdRun(e){this.listEd.busy=!0,this.listEd.error=``;try{return await a.call(`lists.save`,{sheet:this.listEdSheet,...e}),await b.load(D),!0}catch(e){return this.listEd.error=e.message||`That did not save.`,e.code===`conflict`&&await b.load(D).catch(()=>{}),!1}finally{this.listEd.busy=!1}},async listEdAdd(){let e=this.listEd.newLabel;e.trim()&&await this.listEdRun({list_name:this.listEd.name,label:e})&&(this.listEd.newLabel=``,k().show(`Added ${A(e.trim())} to ${this.listEdTitle.toLowerCase()}.`))},listEdStartRename(e){this.listEd.renaming=e.id,this.listEd.renameText=e.label},listEdCancelRename(){this.listEd.renaming=null,this.listEd.renameText=``},async listEdSaveRename(e){this.listEd.renameText.trim()===e.label||await this.listEdRun({id:e.id,label:this.listEd.renameText})?this.listEdCancelRename():this.listEdCount()},listEdSetActive(e,t){return this.listEdRun({id:e.id,active:t})},open(e){this.reset(),this.putBack=null,this.peeks=[],this.closeMenu(),this.panel={open:!0,mode:`view`,id:e.id},this.loadMoreFiles(),this.loadHistory(),this.loadRelatedTasks()},openWanted(){if(this.status!==`ready`)return;let e=Sn(t.tab),n=e&&b.byId(t.tab,e.id);n&&this.open(n)},moreFiles:[],async loadMoreFiles(){this.moreFiles=[];let e=this.panel.id;if(e&&qt[t.tab])try{let n=await a.call(`files.forRecord`,{tab:t.tab,id:e});this.panel.id===e&&(this.moreFiles=n.files||[])}catch{}},create(){this.reset(),this.panel={open:!0,mode:`edit`,id:null},this.form=Je(this.formCols,t.defaults),this.prepareLists()},edit(){this.canWrite&&this.record&&(this.reset(),this.form=Ye(this.formCols,this.record),this.panel.mode=`edit`,this.prepareLists())},get dirty(){if(this.panel.mode!==`edit`)return!1;let e=this.panel.id?Ye(this.formCols,this.record):Je(this.formCols,t.defaults);return JSON.stringify(this.form)!==JSON.stringify(e)},cancel(){this.saving||(this.reset(),this.panel.id?this.panel.mode=`view`:this.panel.open=!1)},close(){this.saving||(this.peeks=[],this.listEd=cr(),(!this.dirty||window.confirm(`Close without saving your changes?`))&&(this.panel.open=!1,this.panel.mode=`view`))},async save(){if(this.saving)return;let n=this.panel.id?this.record:null,{values:r,errors:i}=Ke(this.formCols,this.form,n);if(this.errors=i,this.message=``,sr(i).length)this.message=`Please check the highlighted fields.`;else if(n&&!sr(r).length)this.panel.mode=`view`;else{this.saving=!0;try{let i=!this.panel.id,a=n?Object.fromEntries(sr(r).map(e=>[e,n[e]??null])):null,{row:o,notice:s}=await b.save(t.tab,r,this.panel.id);this.panel.id=o.id,this.panel.mode=`view`;let c=A(this.rowLabel(o));i?k().show(`Added ${c}.`,b.canRemove(t.tab)?async()=>{await b.remove(t.tab,o.id)}:null):k().show(`Saved ${c}.`,async()=>{await b.save(t.tab,a,o.id),this.historyAfterUndo(o.id)}),this.loadHistory(),s&&(this.message=s),e.afterSave&&await e.afterSave.call(this,o,i)}catch(e){e.code===`conflict`?(this.record&&(this.form=Ye(this.formCols,this.record)),this.message=e.message||`Someone else changed this record. It has been reloaded.`):e.details&&e.details.fields?(this.errors={...e.details.fields},this.message=e.message||`Please check the highlighted fields.`):this.message=e.message||`Could not save. Please try again.`}finally{this.saving=!1}}},widget:Tt,inputType(e){return Et[e.type]||`text`},fid(e){return`f${this.uid}-${e.name}`},fieldOptions(e){let t=this.form[e.name];return e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Ae(e)})):e.type===`list`||e.type===`lists`?b.options(e.list,t):b.refOptions(e.ref,t)},uploads:{},replaceFlags:{},uploadKindOf(e){return en(e,t.tab)},uploadAcceptOf(e){return tn(this.uploadKindOf(e))},uploadHintOf(e){return nn(this.uploadKindOf(e))},uploadOf(e){return this.uploads[`${this.panel.id}:${e.name}`]||{}},async uploadPicked(e,n){let r=n.target.files&&n.target.files[0];if(n.target.value=``,!r||!this.panel.id)return;let i=`${this.panel.id}:${e.name}`;this.uploads[i]={busy:!0,text:``,error:``};let o=this.uploads[i],s={tab:t.tab,id:this.panel.id,column:e.name};this.form[e.name]&&this.replaceFlags[i]&&(s.replace=!0),this.record&&this.record.updated_at&&(s.updatedAt=this.record.updated_at);try{let t=await mn({api:a,records:b,file:r,kind:this.uploadKindOf(e),target:s,onStage:e=>{o.text=e}});t.attached?(o.text=`Uploaded and kept next to the current file (under More files).`,this.loadMoreFiles()):(this.form[e.name]=t.fileId,o.text=`Uploaded and saved on this record.`),this.replaceFlags[i]=!1}catch(e){e.code===`conflict`&&this.record&&(this.form=Ye(this.formCols,this.record)),o.text=``,o.error=e.message||`Could not upload. Please try again.`}finally{o.busy=!1}}};return e.extend&&Object.defineProperties(n,Object.getOwnPropertyDescriptors(e.extend)),n}var gr=`
  <div class="rtop">
    <p class="rcount m-0" x-show="status === 'ready' && total" x-text="countText"></p>
    <span class="grow"></span>
    <button class="btn pri" type="button" x-show="canWrite && !cfg.noNew" @click="create()" x-text="'New ' + cfg.noun"></button>
  </div>`,_r=`
  <div class="rtools">
    <input class="inp rsearch" type="search" placeholder="Search" aria-label="Search" x-model.debounce.150ms="q">
    <div class="rfilters">
      <template x-for="f in filterDefs" :key="f.name">
        <details class="msel" @click.outside="$el.open = false" @keydown.escape="$el.open = false">
          <summary class="inp rsel" :class="{ on: filterValues(filters[f.name]).length }" :aria-label="'Filter by ' + f.label" x-text="filterText(f)"></summary>
          <div class="mpop">
            <template x-for="o in f.options" :key="o.value">
              <label class="fcheck"><input type="checkbox" :checked="picked(f, o.value)" @change="togglePick(f, o.value)"><span x-text="o.label"></span></label>
            </template>
            <button class="btn sm" type="button" x-show="filterValues(filters[f.name]).length" @click="clearPick(f)">Show all</button>
          </div>
        </details>
      </template>
    </div>
    <button type="button" class="btn sm rfbtn" :class="{ on: filterOn }" x-show="filterDefs.length" @click="sheetOpen = true" aria-haspopup="dialog">
      Filters <span class="rfn" x-show="filterOn" x-text="filterOn"></span>
    </button>
    <label class="fcheck rinact" x-show="activeCol && inactiveCount"><input type="checkbox" x-model="showInactive"><span x-text="'Show inactive (' + inactiveCount + ')'"></span></label>
    <select class="inp rsel" x-model="group" aria-label="Group by" x-show="groupableCols.length">
      <option value="">No grouping</option>
      <template x-for="c in groupableCols" :key="c.name"><option :value="c.name" x-text="'Group by ' + label(c).toLowerCase()" :selected="group === c.name"></option></template>
    </select>
    <div class="rsort narrow-only">
      <select class="inp rsel" x-model="sortCol" aria-label="Sort by">
        <template x-for="c in sortOptions" :key="c.name"><option :value="c.name" x-text="'Sort: ' + label(c)" :selected="sortCol === c.name"></option></template>
      </select>
      <button class="btn sm" type="button" @click="flipSort()" :aria-label="'Order: ' + sortDirText + '. Click to reverse.'" x-text="sortDirText"></button>
    </div>
    <!--slot:toolbar-->
  </div>`,vr=`
  <div class="scrim fscrim" x-show="sheetOpen" @click="sheetOpen = false"></div>
  <div class="fsheet" role="dialog" aria-modal="true" aria-label="Filters" x-show="sheetOpen" @keydown.escape.window="sheetOpen && (sheetOpen = false)">
    <div class="fsh-h">
      <h3>Filters</h3>
      <button type="button" class="plink" x-show="filterOn" @click="clearAllFilters()">Clear all</button>
    </div>
    <div class="fsh-b">
      <template x-for="f in filterDefs" :key="f.name">
        <div class="fgrp" role="group" :aria-label="f.label">
          <span class="lbl" x-text="f.label"></span>
          <div class="fchips">
            <template x-for="o in f.options" :key="o.value">
              <button type="button" class="fchip" :aria-pressed="String(picked(f, o.value))" @click="togglePick(f, o.value)" x-text="o.label"></button>
            </template>
          </div>
        </div>
      </template>
    </div>
    <button type="button" class="btn pri fsh-go" @click="sheetOpen = false" x-text="sheetShowText"></button>
  </div>`,yr=`
  <button type="button" class="rgroup" x-show="grouped" @click="fold(g)" :aria-expanded="String(!isFolded(g))">
    <svg class="rgarrow" :class="{ folded: isFolded(g) }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span x-text="g.label"></span><b class="num" x-text="g.rows.length"></b>
  </button>`,br=`
  <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
  <div class="banner" role="alert" x-show="status === 'error'">
    <span x-text="loadError"></span>
    <button class="btn sm" type="button" @click="reload()">Try again</button>
  </div>
  <div class="rnone" x-show="status === 'ready' && !rows.length">
    <p class="m-0" x-text="filtered ? 'Nothing matches.' : cfg.empty"></p>
    <button class="btn sm" type="button" x-show="filtered" @click="clearFilters()">Clear search and filters</button>
  </div>`,xr=e=>`
            <button type="button" class="rdots" x-show="hasMenu" @click.stop="openMenu(${e}, $event)" aria-haspopup="menu"
              :aria-expanded="String(Boolean(menu.row && menu.row.id === ${e}.id))" :aria-label="'Actions: ' + rowLabel(${e})">&#8943;</button>`,Sr=(e=``)=>`
    <div class="rhead">
      <template x-for="c in listCols" :key="c.name">
        <button type="button" :class="{ sorted: sortCol === c.name }" :disabled="Boolean(c.computed)" :title="c.computed ? label(c) : 'Sort by ' + label(c)" @click="sortBy(c.name)" :aria-sort="sortCol === c.name ? (sortDir === 'asc' ? 'ascending' : 'descending') : null">
          <span x-text="label(c)"></span><span class="rarrow" x-show="!c.computed" x-text="sortCol === c.name ? (sortDir === 'asc' ? '↑' : '↓') : '↕'"></span>
        </button>
      </template>${e}
    </div>`,Cr=`
  <div class="rlist" x-show="status === 'ready' && rows.length && !cfg.ownList" :style="gridStyle">
    ${Sr(`<span x-show="hasMenu"></span>`)}
    <template x-for="g in listGroups" :key="g.value">
      <div class="contents">
        ${yr}
        <template x-for="r in (isFolded(g) ? [] : g.rows)" :key="r.id">
          <div class="rrow cursor-pointer" :class="{ dim: isInactive(r) }" @click="open(r)">
            <button type="button" class="rc first text-left" @click.stop="open(r)" :title="cell(r, listCols[0]) || null"><span x-text="cell(r, listCols[0])"></span><span class="ltag rtag" x-show="isInactive(r)">Inactive</span></button>
            <template x-for="c in listCols.slice(1)" :key="c.name">
              <span class="rc" :class="{ blank: !cell(r, c), num: isNumber(c), ingroup: grouped && c.name === group, rstat: isStatusCol(c) }" :data-l="label(c)" :title="cell(r, c) || null" x-text="cell(r, c)"></span>
            </template>
            ${xr(`r`)}
          </div>
        </template>
      </div>
    </template>
  </div>`,wr=`
  <div class="rremoved" x-show="status === 'ready' && removedList.length">
    <button type="button" class="rgroup" @click="removedOpen = !removedOpen" :aria-expanded="String(removedOpen)">
      <svg class="rgarrow" :class="{ folded: !removedOpen }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Removed</span><b class="num" x-text="removedList.length"></b>
    </button>
    <template x-for="r in (removedOpen ? removedList : [])" :key="r.id">
      <div class="rgone">
        <span class="rgone-t"><b x-text="rowLabel(r)"></b><small class="muted" x-text="removedText(r)"></small></span>
        <button class="btn sm" type="button" :disabled="acting" @click="restoreRecord(r)">Bring back</button>
      </div>
    </template>
  </div>`,Tr=`
  <section class="phist" aria-label="History">
    <div class="lbl">History</div>
    <p class="muted m-0" x-show="hist.status === 'loading'">Loading...</p>
    <p class="ferr m-0" x-show="hist.status === 'error'" x-text="hist.error"></p>
    <p class="muted m-0" x-show="hist.status === 'ready' && !hist.entries.length">No changes recorded yet.</p>
    <template x-for="e in hist.entries" :key="e.id">
      <div class="hrow">
        <span class="hwho" x-text="histWho(e)"></span>
        <span class="hwhat" x-text="histText(e)"></span>
        <button class="btn sm" type="button" x-show="canPutBack(e) && putBack !== e.id" @click="putBack = e.id">Put back</button>
        <div class="hconfirm" x-show="putBack === e.id">
          <span x-text="putBackText(e)"></span>
          <span class="flex gap-2">
            <button class="btn sm pri" type="button" :disabled="acting" @click="doPutBack(e)">Put back</button>
            <button class="btn sm" type="button" @click="putBack = null">Cancel</button>
          </span>
        </div>
      </div>
    </template>
  </section>`,Er=(e,t,n)=>`
        <div class="combo">
          <input class="inp" type="text" role="combobox" autocomplete="off" spellcheck="false" :id="${t}" aria-autocomplete="list"
            :aria-expanded="String(pick.key === ${e})" :aria-invalid="Boolean(errors[${e}])"
            :placeholder="pick.key === ${e} && pickLabel(${e}) ? pickLabel(${e}) : ${n}"
            :value="pickText(${e})" @focus="pickOpen(${e})" @input="pickInput(${e}, $event)" @keydown="pickKey(${e}, $event)" @blur="pickClose(${e})">
          <button type="button" class="combo-x" x-show="pickValue(${e}) && pick.key !== ${e}" @mousedown.prevent @click="pickClear(${e})" aria-label="Clear">&times;</button>
          <div class="clist" role="listbox" x-show="pick.key === ${e}" @mousedown.prevent>
            <template x-for="(o, n) in pickMatches(${e})" :key="o.value">
              <div class="contents">
                <div class="ch" x-show="o.head" x-text="o.group"></div>
                <button type="button" role="option" tabindex="-1" :aria-selected="String(o.value === pickValue(${e}))" :class="{ on: n === pick.i, cur: o.value === pickValue(${e}) }" @click="pickChoose(${e}, o.value, $event)" x-text="o.label"></button>
              </div>
            </template>
            <p class="none m-0" x-show="!pickMatches(${e}).length">Nothing matches. Try fewer letters.</p>
          </div>
        </div>`,Dr=`
  <template x-for="c in editCols" :key="c.name">
    <div class="field" :class="{ bad: errors[c.name] }" @focusin="noteField = c.name" @focusout="noteField = ''">
      <label class="flab" :for="fid(c)"><span x-text="label(c)"></span><small x-show="c.required && c.writable">required</small><button type="button" class="flist" x-show="canEditList(c)" @click.prevent="openListEd(c)">Edit list</button></label>
      <template x-if="widget(c) === 'readonly'"><div class="fro" :id="fid(c)" x-text="cell(record, c) || 'Not set'"></div></template>
      <template x-if="widget(c) === 'input' && c.type !== 'drive_file'"><input class="inp" :id="fid(c)" :type="inputType(c)" autocomplete="off" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></template>
      <template x-if="widget(c) === 'input' && c.type === 'drive_file'">
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center gap-2">
            <input class="inp min-w-0 flex-1" :id="fid(c)" type="text" autocomplete="off" placeholder="Paste a Google Drive link" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])">
            <template x-if="uploadKindOf(c)">
              <span class="contents">
                <button class="btn sm shrink-0" type="button" :disabled="!panel.id || Boolean(uploadOf(c).busy)" @click="$el.nextElementSibling.click()" x-text="uploadOf(c).busy ? 'Uploading...' : 'Upload'"></button>
                <input type="file" hidden :accept="uploadAcceptOf(c)" @change="uploadPicked(c, $event)">
              </span>
            </template>
          </div>
          <a class="text-[12.5px] text-accent-ink" x-show="link(c, form)" :href="link(c, form)" target="_blank" rel="noopener">Open the file in Google Drive</a>
          <label class="flex items-start gap-2 text-[12.5px]" x-show="uploadKindOf(c) && panel.id && form[c.name]">
            <input type="checkbox" class="mt-0.5" x-model="replaceFlags[panel.id + ':' + c.name]">
            <span>Replace the current file when I upload (it goes to the Drive Bin). Not ticked: the upload is kept next to it.</span>
          </label>
          <p class="fhelp" x-show="uploadKindOf(c)" x-text="panel.id ? uploadHintOf(c) : 'Save first, then you can upload a file here, or paste a Google Drive link now.'"></p>
          <p class="fhelp" role="status" x-show="uploadOf(c).text" x-text="uploadOf(c).text"></p>
          <p class="ferr" role="alert" x-show="uploadOf(c).error" x-text="uploadOf(c).error"></p>
        </div>
      </template>
      <template x-if="widget(c) === 'textarea'"><textarea class="inp" rows="4" :id="fid(c)" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></textarea></template>
      <template x-if="widget(c) === 'number'"><input class="inp" :id="fid(c)" type="text" inputmode="numeric" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></template>
      <template x-if="widget(c) === 'money'"><div class="money"><span aria-hidden="true">£</span><input class="inp" :id="fid(c)" type="text" inputmode="decimal" placeholder="0.00" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></div></template>
      <template x-if="widget(c) === 'date'"><input class="inp" :id="fid(c)" type="date" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></template>
      <template x-if="widget(c) === 'time'"><input class="inp" :id="fid(c)" type="time" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></template>
      <template x-if="widget(c) === 'datetime'"><input class="inp" :id="fid(c)" type="datetime-local" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])"></template>
      <template x-if="widget(c) === 'check'"><label class="fcheck"><input type="checkbox" :id="fid(c)" x-model="form[c.name]"><span>Yes</span></label></template>
      <template x-if="widget(c) === 'select'">
        <select class="inp" :id="fid(c)" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])">
          <option value="">Choose...</option>
          <template x-for="o in fieldOptions(c)" :key="o.value"><option :value="o.value" x-text="o.label" :selected="form[c.name] === o.value"></option></template>
        </select>
      </template>
      <template x-if="widget(c) === 'ref'">${Er(`c.name`,`fid(c)`,`'Type to search'`)}</template>
      <template x-if="widget(c) === 'checks'">
        <div class="fchecks" role="group" :id="fid(c)">
          <template x-for="o in fieldOptions(c)" :key="o.value">
            <label class="fcheck"><input type="checkbox" :value="o.value" x-model="form[c.name]"><span x-text="o.label"></span></label>
          </template>
        </div>
      </template>
      <p class="fhelp" x-show="c.writable && hint(c)" x-text="hint(c)"></p>
      <p class="fhelp fnote" x-show="c.writable && generalNoteText && noteField === c.name">${ee(`info`)}<span x-text="generalNoteText"></span></p>
      <p class="ferr" x-show="errors[c.name]" x-text="errors[c.name]"></p>
    </div>
  </template>`,Or=(e,t)=>`
                <template x-if="isStatusField(${e})">
                  <button type="button" class="pill" @click="openMenu(${t}, $event, 'status')" aria-haspopup="menu" :aria-label="'Status: ' + statusText(${t}) + '. Change it.'">
                    <span x-text="statusText(${t})"></span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                </template>
                <template x-if="!(isStatusField(${e})) && refTarget(${e}, ${t})">
                  <button type="button" class="plink" @click="peek(refTarget(${e}, ${t}).tab, refTarget(${e}, ${t}).id)" x-text="cell(${t}, ${e})"></button>
                </template>
                <template x-if="!(isStatusField(${e})) && !refTarget(${e}, ${t}) && link(${e}, ${t})"><a :href="link(${e}, ${t})" target="_blank" rel="noopener" x-text="cell(${t}, ${e})"></a></template>
                <template x-if="!(isStatusField(${e})) && !refTarget(${e}, ${t}) && !link(${e}, ${t})"><span :class="{ muted: !cell(${t}, ${e}) }" x-text="cell(${t}, ${e}) || 'Not set'"></span></template>`,kr=(e,t)=>`
                <template x-if="fieldLink(${e}, ${t})"><button type="button" class="plink flink" :disabled="acting" @click="runFieldLink(${e}, ${t})" x-text="fieldLink(${e}, ${t}).text"></button></template>`,Ar=`
    <div class="pb" x-show="listEd.name">
      <p class="muted m-0" x-show="listEdHelp" x-text="listEdHelp"></p>
      <p class="fhelp m-0" x-show="listEdAllYears">${En}</p>
      <p class="muted m-0" x-show="listEd.status === 'loading'">Loading...</p>
      <div class="banner" role="alert" x-show="listEd.error" x-text="listEd.error"></div>
      <ul class="lvals" x-show="listEd.status === 'ready'">
        <template x-for="v in listEdValues" :key="v.id">
          <li class="lval" :class="{ retired: !v.active }">
            <template x-if="listEd.renaming !== v.id">
              <span class="lname">
                <span x-text="v.label"></span>
                <span class="ltag" x-show="!v.active">Retired</span>
                <span class="ltag app" x-show="v.locked && !listEdFixed" title="The app relies on this value: it cannot be renamed or retired">Used by the app</span>
                <span class="luse" x-text="listEdUse(v)"></span>
              </span>
            </template>
            <template x-if="listEd.renaming === v.id">
              <form class="flex gap-2 flex-1 min-w-0" @submit.prevent="listEdSaveRename(v)">
                <input class="inp" x-model="listEd.renameText" maxlength="60" aria-label="New name" x-init="$nextTick(() => $el.focus())" @keydown.escape.stop="listEdCancelRename()">
                <button class="btn sm pri" type="submit" :disabled="Boolean(listEd.busy)">Save</button>
                <button class="btn sm" type="button" @click="listEdCancelRename()">Cancel</button>
              </form>
            </template>
            <span class="lacts" x-show="listEdCanEdit && listEd.renaming !== v.id">
              <button class="btn sm" type="button" x-show="v.active && listEdRenamable(v)" :disabled="Boolean(listEd.busy)" @click="listEdStartRename(v)">Rename</button>
              <button class="btn sm" type="button" x-show="v.active && !v.locked" :disabled="Boolean(listEd.busy)" @click="listEdSetActive(v, false)">Retire</button>
              <button class="btn sm" type="button" x-show="!v.active" :disabled="Boolean(listEd.busy)" @click="listEdSetActive(v, true)">Bring back</button>
            </span>
          </li>
        </template>
      </ul>
      <p class="fhelp m-0" x-show="listEd.status === 'ready' && listEdCanEdit">${Tn}</p>
      <p class="muted m-0 text-[13px]" x-show="listEd.status === 'ready' && !listEdCanEdit">This list cannot be changed here.</p>
      <form class="flex gap-2" x-show="listEd.status === 'ready' && listEdCanEdit" @submit.prevent="listEdAdd()">
        <input class="inp" x-model="listEd.newLabel" maxlength="60" placeholder="New value" aria-label="New value">
        <button class="btn pri shrink-0" type="submit" :disabled="Boolean(listEd.busy) || !listEd.newLabel.trim()">Add</button>
      </form>
    </div>`,jr=(e,t)=>`
        <section class="prel" x-show="relatedTasks(${e}, ${t}).length">
          <div class="lbl"><span x-text="'Tasks about this (' + relatedTasks(${e}, ${t}).length + ')'"></span><span class="ytag" x-text="tagFor('Tasks')"></span></div>
          <template x-for="t in relatedTasks(${e}, ${t})" :key="t.id">
            <div class="flex flex-col"><button type="button" class="plink" @click="peek('Tasks', t.id)" x-text="t.title"></button><small x-text="taskLine(t)"></small></div>
          </template>
        </section>`,Mr=`
    <div class="pb" x-show="peekTop">
      <template x-if="peekRow">
        <dl class="pkv">
          <template x-for="c in peekCols" :key="c.name">
            <div>
              <dt x-text="label(c)"></dt>
              <dd>
                <template x-if="refTarget(c, peekRow)"><button type="button" class="plink" @click="peek(refTarget(c, peekRow).tab, refTarget(c, peekRow).id)" x-text="peekCell(c)"></button></template>
                <template x-if="!refTarget(c, peekRow) && link(c, peekRow)"><a :href="link(c, peekRow)" target="_blank" rel="noopener" x-text="peekCell(c)"></a></template>
                <template x-if="!refTarget(c, peekRow) && !link(c, peekRow)"><span x-text="peekCell(c)"></span></template>
              </dd>
            </div>
          </template>
        </dl>
      </template>
      <p class="muted m-0" x-show="peekTop && !peekRow">This record is not available.</p>
      <template x-if="peekRow">${jr(`peekTop.tab`,`peekTop.id`)}</template>
    </div>`,Nr=`
  <div class="amenu" role="menu" x-show="menu.row" :style="menu.style" @click.outside="closeMenu()" @keydown.escape.stop="closeMenu()">
    <template x-if="menu.row">
      <div class="contents">
        <template x-if="menu.mode === 'row'">
          <div class="contents">
            <button type="button" role="menuitem" @click="menuOpen()">Open</button>
            <button type="button" role="menuitem" x-show="canWrite" @click="menuEdit()">Edit</button>
            <template x-for="x in menuExtras" :key="x.i">
              <button type="button" role="menuitem" :disabled="acting" @click="runMenuItem(x.i)" x-text="x.text"></button>
            </template>
          </div>
        </template>
        <template x-if="canStatus">
          <div class="contents">
            <div class="sep" x-show="menu.mode === 'row'"></div>
            <div class="mh">Status</div>
            <template x-for="o in statusOptions" :key="o.value">
              <button type="button" role="menuitemradio" :aria-checked="String(menu.row[statusCol.name] === o.value)" :disabled="acting" @click="setStatus(menu.row, o.value)">
                <span class="tick" aria-hidden="true" x-text="menu.row[statusCol.name] === o.value ? '✓' : ''"></span><span x-text="o.label"></span>
              </button>
            </template>
          </div>
        </template>
        <template x-if="menu.mode === 'row' && (canInactive || canRemoveTab)">
          <div class="contents">
            <div class="sep"></div>
            <button type="button" role="menuitem" x-show="canInactive" :disabled="acting" @click="toggleActive(menu.row)" x-text="isInactive(menu.row) ? 'Make active again' : 'Make inactive'"></button>
            <button type="button" role="menuitem" class="warn" x-show="canRemoveTab" :disabled="acting" @click="removeRecord(menu.row)" x-text="removeText"></button>
          </div>
        </template>
      </div>
    </template>
  </div>`,Pr=`
  <div class="scrim pscrim" x-show="panel.open" @click="close()"></div>
  <aside class="panel" :class="{ open: panel.open }" role="dialog" aria-modal="true" :aria-label="panelTitle" :inert="!panel.open" @keydown.escape.window="panel.open && !menu.row && !sheetOpen && (listEd.name ? closeListEd() : close())">
    <header class="ph" x-show="!peekTop && !listEd.name">
      <div class="min-w-0 grow">
        <div class="lbl"><span x-text="panel.mode === 'edit' ? (panel.id ? 'Editing' : 'Adding') : cfg.noun"></span><span class="ytag" x-text="tagFor(cfg.tab)"></span></div>
        <h2><span x-text="panelTitle"></span> <span class="ltag" x-show="panel.mode === 'view' && isInactive(record)">Inactive</span></h2>
      </div>
      <button class="btn sm" type="button" @click="close()">Close</button>
    </header>
    <header class="ph flex-wrap" x-show="peekTop">
      <button type="button" class="pback basis-full text-left" @click="back()" x-text="'\u2039 Back to ' + backTo"></button>
      <div class="min-w-0 grow">
        <div class="lbl"><span x-text="peekNoun"></span><span class="ytag" x-text="peekTop ? tagFor(peekTop.tab) : ''"></span></div>
        <h2 x-text="peekTitle"></h2>
      </div>
      <button class="btn sm" type="button" @click="close()">Close</button>
    </header>
    <header class="ph flex-wrap" x-show="listEd.name">
      <button type="button" class="pback basis-full text-left" @click="closeListEd()" x-text="'\u2039 Back to ' + (panelTitle || cfg.noun)"></button>
      <div class="min-w-0 grow">
        <div class="lbl">List</div>
        <h2 x-text="listEdTitle"></h2>
      </div>
    </header>
    ${Mr}
    ${Ar}
    <div class="pb" x-show="!peekTop && !listEd.name">
      <div class="banner" role="alert" x-show="message" x-text="message"></div>
      <template x-if="panel.mode === 'view' && record">
        <dl class="pkv">
          <template x-for="c in fieldCols" :key="c.name">
            <div>
              <dt x-text="label(c)"></dt>
              <dd>${Or(`c`,`record`)}${kr(`c`,`record`)}</dd>
            </div>
          </template>
        </dl>
      </template>
      <template x-if="panel.mode === 'view' && record && !cfg.ownTasks">${jr(`cfg.tab`,`record.id`)}</template>
      <template x-if="panel.mode === 'view' && record && moreFiles.length">
        <div class="flex flex-col gap-1">
          <div class="lbl">More files</div>
          <template x-for="f in moreFiles" :key="f.attachmentId">
            <a class="text-[13.5px] text-accent-ink" :href="f.url" target="_blank" rel="noopener" x-text="f.columnLabel + (f.fileName ? ': ' + f.fileName : '')"></a>
          </template>
        </div>
      </template>
      <template x-if="panel.mode === 'view' && record"><div class="pextra"><!--slot:panelView--></div></template>
      <template x-if="panel.mode === 'view' && record">
        <div class="flex flex-col gap-3">
          <p class="note m-0" x-show="hist.removeBlocked && !isInactive(record)" x-text="hist.removeBlocked"></p>
          ${Tr}
        </div>
      </template>
      <template x-if="panel.mode === 'edit'">
        <form class="pform" :id="'rform' + uid" novalidate @submit.prevent="save()">${Dr}<!--slot:panelEdit--></form>
      </template>
    </div>
    <footer class="pf" x-show="peekTop">
      <span class="grow"></span>
      <button class="btn pri" type="button" x-show="peekOpenIn" @click="openPeekElsewhere()" x-text="peekOpenIn ? peekOpenIn.words : ''"></button>
    </footer>
    <footer class="pf" x-show="listEd.name">
      <span class="grow"></span>
      <button class="btn pri" type="button" :disabled="Boolean(listEd.busy)" @click="closeListEd()" x-text="'Back to ' + (panelTitle || cfg.noun)"></button>
    </footer>
    <footer class="pf" x-show="!peekTop && !listEd.name">
      <small class="muted" x-text="stamp"></small>
      <span class="grow"></span>
      <button class="btn" type="button" x-show="panel.mode === 'view' && record && canInactive" :disabled="acting" @click="toggleActive()" x-text="isInactive(record) ? 'Make active again' : 'Make inactive'"></button>
      <button class="btn warn" type="button" x-show="panel.mode === 'view' && canRemoveHere" :disabled="acting" @click="removeRecord()" x-text="removeText"></button>
      <button class="btn pri" type="button" x-show="panel.mode === 'view' && canWrite && record" @click="edit()">Edit</button>
      <button class="btn" type="button" x-show="panel.mode === 'edit'" :disabled="saving" @click="cancel()">Cancel</button>
      <button class="btn pri" type="submit" x-show="panel.mode === 'edit'" :form="'rform' + uid" :disabled="saving" x-text="saving ? 'Saving...' : 'Save'"></button>
    </footer>
  </aside>`;function N({title:e=``,intro:t=``,toolbarHtml:n=``,aboveListHtml:r=``,panelViewHtml:i=``,panelEditHtml:a=``}={}){return`<div class="card rec">${e?`<div class="card-h"><h2>${e}<span class="ytag" x-text="tagFor(cfg.tab)"></span></h2></div>`:``}<div class="card-b rec-b">${t?`<p class="muted m-0">${t}</p>`:``}${gr}${_r.replace(`<!--slot:toolbar-->`,n)}${r}${br}${Cr}${wr}</div></div>${vr}${Pr.replace(`<!--slot:panelView-->`,i).replace(`<!--slot:panelEdit-->`,a)}${Nr}`}var Fr=[`agreed`,`invoiced`,`paid`],Ir=`paid`,Lr=[`promised`,`confirmed`,`received`],Rr=`received`,zr=`withdrawn`,Br={logo_received:`Upload logo`,ad_artwork_received:`Upload artwork`},Vr=[{value:`sponsorship`,label:`Sponsorship`},{value:`donation`,label:`Donation`},{value:`nothing`,label:`Nothing yet`}],Hr=[{value:`not_invoiced`,label:`Not invoiced`},{value:`invoiced`,label:`Invoiced`},{value:`paid`,label:`Paid`}],Ur=e=>Array.isArray(e)?e:e==null||e===``?[]:[e],P=e=>e==null||e===``,Wr=(e,t)=>String(e).localeCompare(String(t),`en-GB`,{sensitivity:`base`}),F=e=>P(e)?0:Number(e)||0,I=e=>!(!e||P(e.tier_id)),L=e=>I(e)?Fr.includes(e.sponsor_step)?e.sponsor_step:Fr[0]:``,Gr=(e,t)=>I(e)&&Fr.indexOf(t)<=Fr.indexOf(L(e));function Kr(e,t){return e?(t||[]).filter(t=>t.tier_id===e).length:0}function qr(e,t){return e?(t||[]).filter(t=>t.tier_id===e&&L(t)===`paid`).length:0}function Jr(e,t){if(!e||P(e.available))return`No limit`;let n=Number(e.available)-t;return n<=0?`Secured`:`${n} left`}function Yr(e,t){return[...e||[]].filter(e=>e.active!==!1).sort((e,t)=>F(e.sort_order)-F(t.sort_order)||Wr(e.name,t.name)).map(e=>{let n=Kr(e.id,t),r=P(e.available)?null:Number(e.available);return{id:e.id,name:e.name,taken:n,of:r,paid:qr(e.id,t),secured:r!=null&&n>=r}})}var Xr=e=>e.of==null?`${e.name} ${e.taken}`:`${e.name} ${e.taken} of ${e.of}`;function Zr(e,t){return e?(t||[]).filter(t=>t.contact_id===e).sort((e,t)=>Number(e.status===`withdrawn`)-Number(t.status===`withdrawn`)||Wr(e.title||``,t.title||``)):[]}var Qr=e=>e.filter(e=>e.status!==zr),$r=(e,t)=>!!e&&e.status!==`withdrawn`&&Lr.indexOf(t)<=Lr.indexOf(e.status);function ei(e,t){let n=[];return I(e)&&n.push(`sponsorship`),Qr(t||[]).length&&n.push(`donation`),n.length?n:[`nothing`]}function ti(e){let t=L(e);return t?t===`agreed`?`not_invoiced`:t:``}function ni(e,t,n,r){return I(e)?`${[t,P(e.amount_pence)?``:r(e.amount_pence)].filter(Boolean).join(`, `)} · ${n(L(e))}`:``}function ri(e,t){let n=Qr(e||[]);if(!n.length)return``;if(n.length===1)return`${n[0].title} · ${t(n[0].status)}`;let r=n.filter(e=>e.status===Rr).length;return`${n.length} donations · ${r} received`}function ii(e,t){return(t||[]).map(t=>({value:t.value,label:t.label,n:(e||[]).filter(e=>e.status===t.value).length}))}function ai(e,t){let n=(e||[]).filter(I),r=new Set((e||[]).map(e=>e.contact_id)),i=Qr((t||[]).filter(e=>r.has(e.contact_id)));return{sponsors:n.length,agreed:n.reduce((e,t)=>e+F(t.amount_pence),0),paid:n.filter(e=>L(e)===Ir).reduce((e,t)=>e+(P(t.paid_pence)?F(t.amount_pence):F(t.paid_pence)),0),donations:i.length,received:i.filter(e=>e.status===Rr).length}}function R(e,t){return(t||[]).find(t=>t.contact_id===e)||null}function oi(e){if(!e)return`Not asked`;let t=e.statusValue===void 0?e.status:e.statusValue,n=F(e.prizes),r=[];return e.tier&&r.push(`${e.tier} sponsor`),n&&r.push(n===1?`donation`:`${n} donations`),r.length?r.join(`, `).replace(/^./,e=>e.toUpperCase()):t===`no`?`Said no`:t?`Asked, nothing given`:`Not asked`}var si=e=>!!(e&&(e.tier||F(e.prizes)));function ci(e,t){if(!e)return[];let n=[];if(e.tier){let r=[e.tier,P(e.amount_pence)?``:t(e.amount_pence),e.sponsor_step?String(e.sponsor_step).toLowerCase():``];n.push(`Sponsorship: ${r.filter(Boolean).join(`, `)}`)}(e.prizes||[]).forEach(e=>{let r=[e.title,P(e.value_pence)?``:t(e.value_pence)];n.push(`Donation: ${r.filter(Boolean).join(`, `)}`)});let r=e.statusValue===void 0?e.status:e.statusValue;return n.length||n.push(r===`no`?`Said no`:r?`Asked, nothing given`:`Not asked`),n}function li(e,t,n=[]){let r=e=>{let t=n.indexOf(e);return t<0?1e6:t};return(t||[]).filter(t=>t.outreach_id===e).sort((e,t)=>r(e.benefit)-r(t.benefit)||Wr(e.benefit,t.benefit))}function ui(e,t,n){if(!e)return[];let r=new Set((t||[]).map(e=>e.benefit));return Ur(e.benefits).filter(e=>!r.has(e)&&(!n||n.includes(e)))}function di(e,t,n,r){return!e||!t?!1:ui(t,n,r).length?!0:P(e.amount_pence)&&!P(t.price_pence)}function fi(e,t,n){return e?{done:!0,done_on:n,done_by_member_id:t||null}:{done:!1,done_on:null,done_by_member_id:null}}function pi(e,t){return e?(t||[]).filter(t=>t.contact_id===e&&t.active!==!1).sort((e,t)=>Number(!!t.preferred)-Number(!!e.preferred)||Wr(e._label||``,t._label||``)):[]}function mi(e=new Date){let t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function hi(e){let t=String(e||``).trim();if(!t)return null;if(/^https?:\/\//i.test(t))return t;let n=t.replace(/^@/,``);return/^[A-Za-z0-9._]{1,30}$/.test(n)?`https://www.instagram.com/${n}/`:null}function gi(e,t=e=>e){if(!e)return[];let n=[e.address_line1,e.address_line2,e.town,e.postcode].filter(e=>!P(e)).join(`, `);return[{label:`Category`,text:e.category?t(e.category):``,href:null},{label:`Website`,text:e.website,href:e.website&&/^https?:\/\//i.test(e.website)?e.website:null},{label:`Business email`,text:e.email,href:e.email?`mailto:${e.email}`:null},{label:`Phone`,text:e.phone,href:e.phone?`tel:${String(e.phone).replace(/[^\d+]/g,``)}`:null},{label:`Address`,text:n,href:null},{label:`Instagram`,text:e.instagram,href:hi(e.instagram)},{label:`Notes`,text:e.notes,href:null}].filter(e=>!P(e.text))}function _i(e){let t=Math.max(0,...(e||[]).map(e=>Number(e.sort_order)||0));return Math.floor(t/10)*10+10}var z=()=>x.member&&x.member.id||``;function B(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this,r,...e)}}function V(e,t){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function vi(e,t){e.label=e=>e&&t[e.name]||Oe(e)}function yi(e=`owner_member_id`){return function(t){return!this.mine||t[e]===z()}}function bi(e){let t=Object.getOwnPropertyDescriptor(e,`filtered`).get;V(e,{mine:!1,get myId(){return z()},get filtered(){return this.mine||t.call(this)}}),B(e,`clearFilters`,function(e){this.mine=!1,e.call(this)})}var xi=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine" x-show="myId">Mine</button>`;function Si(e){B(e,`fieldOptions`,function(e,t){let n=e.call(this,t);return t.name!==`contact_person_id`||!this.form.contact_id?n:n.filter(e=>e.value===this.form.contact_person_id||(b.byId(`system/ContactPeople`,e.value)||{}).contact_id===this.form.contact_id)})}function Ci(e,t){let n=e=>Object.prototype.hasOwnProperty.call(t,e);V(e,{get listCols(){return this.cfg.list.map(e=>n(e)?{name:e,label:t[e].label,type:t[e].type||`string`,writable:!1,computed:!0}:w([e],this.cols)[0]).filter(Boolean)},get sortOptions(){return this.listCols.filter(e=>!e.computed)}}),B(e,`cell`,function(e,r,i){return r&&i&&n(i.name)?t[i.name].text.call(this,r):e.call(this,r,i)}),B(e,`sortBy`,function(e,t){n(t)||e.call(this,t)})}var wi=e=>`
  <dl class="pkv">
    <template x-for="f in ${e}" :key="f.label">
      <div>
        <dt x-text="f.label"></dt>
        <dd>
          <template x-if="f.href"><a :href="f.href" target="_blank" rel="noopener" x-text="f.text"></a></template>
          <template x-if="!f.href"><span x-text="f.text"></span></template>
        </dd>
      </div>
    </template>
  </dl>`,H=`Outreach`,U=()=>n.store(`toast`),Ti=e=>`"${e}"`,W=e=>Pe(e).replace(/\.00$/,``),Ei=e=>b.label(`system/Contacts`,e.contact_id),Di=()=>b.rows(`Prizes`),Oi=e=>t=>b.listLabel(e,t),ki=[`status`,`owner_member_id`,`contact_person_id`,`last_contacted`,`checked`],Ai={tab:H,load:[`Outreach`,`system/Contacts`,`system/ContactPeople`,`Members`,`Tiers`,`Benefits`],list:[`_label`,`status`,`_spon`,`_dons`,`owner_member_id`,`last_contacted`],form:[...ki,`tier_id`,`amount_pence`,`sponsor_step`,`invoice_number`,`invoice_date`,`invoice_due`,`invoice_file`,`paid_on`,`paid_pence`,`notes`],filters:[`status`,`owner_member_id`],sort:`_label`,noun:`company`,nouns:`companies`,noNew:!0,empty:`No companies on this year's list yet. Add them from the Company database.`,rowLabel:Ei,where:yi(),computedFilters:[{name:`gives`,label:`Gives`,options:Vr,test(e,t){return ei(e,Zr(e.contact_id,Di())).some(e=>t.includes(e))}},{name:`money`,label:`Money`,options:Hr,test(e,t){return t.includes(ti(e))}}],fieldLinks:{owner_member_id:{text:`Assign to me`,show(e){return this.canWrite&&!!z()&&e&&e.owner_member_id!==z()},run(e){return this.assignToMe(e)}}},menuItems:[{text:`Assign to me`,show(e){return this.canWrite&&!!z()&&e&&e.owner_member_id!==z()},run(e){return this.assignToMe(e)}}],removeWords:{button(){return`Remove from the ${b.state.year||`this year's`} list`},done(e){return`${e} is off the ${b.state.year||`this year's`} list. It stays in the Company database.`}},afterSave(e){return this.syncBenefits(e,`Saved, but the benefit checklist was not updated`)}},ji={_label:`Company`,status:`Status`,owner_member_id:`Who approaches`,contact_person_id:`We speak to`,last_contacted:`Last contact`,checked:`Details checked this year`,tier_id:`Sponsorship tier`,amount_pence:`Amount agreed`,sponsor_step:`Sponsorship step`,paid_pence:`Amount received`},Mi=()=>({open:!1,more:!1,busy:!1,error:``,form:{title:``,value:``,format:``,quantity:`1`,can_split:!1,description:``,expires_on:``,fixed_dates:``,redemption_notes:``,restrictions:``,storage:``}});function Ni(){let e=M(Ai);vi(e,ji),bi(e),Si(e),Ci(e,{_spon:{label:`Sponsorship`,text(e){return ni(e,b.label(`Tiers`,e.tier_id),Oi(`sponsor_step`),W)}},_dons:{label:`Donations`,text(e){return ri(Zr(e.contact_id,Di()),Oi(`prize_status`))}}});let t=Object.getOwnPropertyDescriptor(e,`fieldCols`).get;return V(e,{get fieldCols(){let e=t.call(this);return this.panel.mode===`view`?e.filter(e=>ki.includes(e.name)):e}}),B(e,`reload`,async function(e){return b.load([`Prizes`]).catch(()=>{}),e.call(this)}),B(e,`open`,function(e,t){e.call(this,t),this.spon={open:!1,tierId:``,busy:!1},this.don=Mi(),this.confirmClose=!1,this.loadPast(t.contact_id)}),V(e,{busy:!1,spon:{open:!1,tierId:``,busy:!1},don:Mi(),confirmClose:!1,past:{contactId:null,status:`idle`,years:[],error:``},get statusList(){return b.list(`outreach_status`).filter(e=>e.active!==!1)},get counts(){return ii(b.rows(H),this.statusList)},countOn(e){return C(this.filters.status).includes(e)},toggleCount(e){let t=C(this.filters.status);this.filters.status=t.includes(e)?t.filter(t=>t!==e):[...t,e]},get summary(){return ai(b.rows(H),Di())},get summaryText(){let e=this.summary;return{spon:`${e.sponsors} agreed, ${W(e.agreed)}`,paid:`(${W(e.paid)} paid)`,dons:String(e.donations),got:`(${e.received} received)`}},get hasPrizes(){return b.has([`Prizes`])},get places(){return Yr(b.rows(`Tiers`),b.rows(H))},placeText:Xr,showTiers(){this.part=`tiers`},async assignToMe(e=this.record){if(!e||!z()||this.acting)return;let t=e.owner_member_id||null;this.acting=!0;try{await b.save(H,{owner_member_id:z()},e.id),U().show(`You now approach ${Ti(this.rowLabel(e))}.`,async()=>{await b.save(H,{owner_member_id:t},e.id)}),this.historyAfterUndo(e.id)}catch(t){this.problem(e,t.message||`Could not save. Please try again.`)}finally{this.acting=!1}},get company(){return this.record?b.byId(`system/Contacts`,this.record.contact_id):null},get facts(){return gi(this.company,Oi(`contact_category`))},get people(){return this.record?pi(this.record.contact_id,b.rows(`system/ContactPeople`)):[]},editCompany(){this.record&&(this.panel.open=!1,xn(`system/Contacts`,this.record.contact_id))},get hasSpon(){return I(this.record)},get tier(){return this.record&&this.record.tier_id?b.byId(`Tiers`,this.record.tier_id):null},get sponLine(){let e=this.record;return this.hasSpon?[this.tier?this.tier.name:b.label(`Tiers`,e.tier_id),e.amount_pence==null?``:W(e.amount_pence)].filter(Boolean).join(`, `):``},get steps(){return b.list(`sponsor_step`).filter(e=>Fr.includes(e.value))},stepDone(e){return Gr(this.record,e)},get canSpon(){return this.canWrite&&b.canWrite(`Benefits`)&&b.columns(`Tiers`).length>0},get tierChoices(){let e=b.rows(H);return[...b.rows(`Tiers`)].filter(e=>e.active!==!1).sort((e,t)=>(Number(e.sort_order)||0)-(Number(t.sort_order)||0)).map(t=>{let n=Jr(t,Kr(t.id,e));return{value:t.id,label:`${t.name}, ${W(t.price_pence)} (${n===`Secured`?`secured`:n.toLowerCase()})`,full:n===`Secured`}})},openSpon(){let e=this.tierChoices.find(e=>!e.full);this.spon={open:!0,tierId:e?e.value:``,busy:!1}},async addSponsorship(){let e=this.record;if(!e||!this.spon.tierId||this.spon.busy)return;let t={tier_id:e.tier_id??null,amount_pence:e.amount_pence??null,sponsor_step:e.sponsor_step??null,status:e.status};this.spon.busy=!0,this.message=``;try{await a.call(`sponsors.setSponsorship`,{id:e.id,tierId:this.spon.tierId}),await b.load([H,`Benefits`]),this.spon={open:!1,tierId:``,busy:!1};let n=b.label(`Tiers`,this.record?this.record.tier_id:``);U().show(`Sponsorship added: ${n}, agreed. ${Ti(this.rowLabel(e))} said yes.`,async()=>{await b.save(H,t,e.id),this.historyAfterUndo(e.id)}),this.loadHistory()}catch(e){this.spon.busy=!1,this.message=e.message||`Could not add the sponsorship. Please try again.`}},async setStep(e){let t=this.record;if(!t||this.acting||!this.canWrite||t.sponsor_step===e)return;let n=t.sponsor_step??null;this.acting=!0;try{await b.save(H,{sponsor_step:e},t.id),U().show(`${Ti(this.rowLabel(t))}: sponsorship ${b.listLabel(`sponsor_step`,e).toLowerCase()}.`,async()=>{await b.save(H,{sponsor_step:n},t.id),this.historyAfterUndo(t.id)}),this.loadHistory()}catch(e){this.problem(t,e.message||`Could not save. Please try again.`)}finally{this.acting=!1}},get offered(){return b.list(`sponsor_benefit`).filter(e=>e.active!==!1).map(e=>e.value)},get benefits(){return this.record?li(this.record.id,b.rows(`Benefits`),b.list(`sponsor_benefit`).map(e=>e.value)):[]},get missing(){return ui(this.tier,this.benefits,this.offered)},get canTick(){return b.canWrite(`Benefits`)},benefitLabel(e){return b.listLabel(`sponsor_benefit`,e.benefit)},doneText(e){if(!e.done)return``;let t=e.done_by_member_id?b.label(`Members`,e.done_by_member_id):``;return[h(e.done_on),t&&`by ${t}`].filter(Boolean).join(` `)},uploadWords(e){return Br[e.benefit]||``},fileUrl(e){return e&&Be({type:`drive_file`},e.file)||``},uploading:{},async tick(e,t){let n=()=>!!(b.byId(`Benefits`,e.id)||e).done;if(this.busy)t.checked=n();else{this.busy=!0,this.message=``;try{await b.save(`Benefits`,fi(t.checked,z(),mi()),e.id)}catch(e){t.checked=n(),this.message=e.message||`Could not save the tick. Please try again.`}finally{this.busy=!1}}},async uploadBenefit(e,t){let n=t.target.files&&t.target.files[0];if(t.target.value=``,n&&this.uploading[e.id]!==`Uploading...`){this.uploading[e.id]=`Uploading...`;try{let t=b.byId(`Benefits`,e.id)||e;await mn({api:a,records:b,file:n,kind:`all`,target:{tab:`Benefits`,id:e.id,column:`file`,replace:!!t.file,updatedAt:t.updated_at},onStage:t=>{this.uploading[e.id]=t}});let r=b.byId(`Benefits`,e.id);r&&!r.done&&await b.save(`Benefits`,fi(!0,z(),mi()),e.id),this.uploading[e.id]=``,U().show(`${this.benefitLabel(e)}: file saved and ticked.`)}catch(t){this.uploading[e.id]=t.message||`Could not upload. Please try again.`}}},async syncBenefits(e,t){if(e&&b.canWrite(`Benefits`)&&di(e,e.tier_id?b.byId(`Tiers`,e.tier_id):null,li(e.id,b.rows(`Benefits`)),this.offered)){this.busy=!0;try{await a.call(`sponsors.syncBenefits`,{id:e.id}),await b.load([H,`Benefits`])}catch(e){this.message=`${t}: ${e.message||`please try again.`}`}finally{this.busy=!1}}},get donations(){return this.record?Zr(this.record.contact_id,Di()):[]},get canDonate(){return b.canWrite(`Prizes`)},get prizeSteps(){return b.list(`prize_status`).filter(e=>Lr.includes(e.value))},prizeStepDone:$r,isWithdrawn(e){return e.status===zr},prizeLine(e){let t=e.format?b.listLabel(`prize_format`,e.format):``,n=e.quantity!=null&&Number(e.quantity)!==1?`${e.quantity} of them`:``;return[e.value_pence==null?``:W(e.value_pence),t,n,e.can_split?`can be split`:``].filter(Boolean).join(` · `)},get formats(){return b.list(`prize_format`).filter(e=>e.active!==!1)},openDonation(){this.don={...Mi(),open:!0}},closeDonation(){this.don.busy||(this.don=Mi())},async addDonation(){let e=this.record,t=this.don.form;if(!e||this.don.busy)return;if(!String(t.title).trim()){this.don.error=`Say what they give.`;return}let n=Me(t.value);if(Number.isNaN(n)){this.don.error=`The value should be an amount in pounds, like 90 or 45.50.`;return}let r=String(t.quantity).trim()===``?1:Number(t.quantity);if(!Number.isInteger(r)||r<1){this.don.error=`How many should be a whole number, 1 or more.`;return}let i={title:String(t.title).trim(),quantity:r,can_split:!!t.can_split};n!=null&&(i.value_pence=n);for(let e of[`format`,`description`,`expires_on`,`fixed_dates`,`redemption_notes`,`restrictions`,`storage`])String(t[e]??``).trim()&&(i[e]=String(t[e]).trim());let o=e.status;this.don.busy=!0,this.don.error=``;try{let t=await a.call(`sponsors.addDonation`,{contactId:e.contact_id,values:i});await b.load([`Prizes`,H]),this.don=Mi();let n=t&&t.prize&&t.prize.id,r=n&&b.canRemove(`Prizes`)?async()=>{await b.remove(`Prizes`,n),o!==`yes`&&await b.save(H,{status:o},e.id)}:null;U().show(`Donation added: ${Ti(i.title)}.${o===`yes`?``:` Status: Said yes.`}`,r),this.loadHistory()}catch(e){this.don.busy=!1,this.don.error=e.message||`Could not add the donation. Please try again.`}},async setPrizeStatus(e,t){if(!e||this.acting||!this.canDonate||e.status===t)return;let n=e.status;this.acting=!0;try{await b.save(`Prizes`,{status:t},e.id),U().show(`${Ti(e.title)}: ${b.listLabel(`prize_status`,t).toLowerCase()}.`,async()=>{await b.save(`Prizes`,{status:n},e.id)})}catch(e){U().show(e.message||`Could not save. Please try again.`)}finally{this.acting=!1}},async loadPast(e){if(e&&(this.past.contactId!==e||this.past.status!==`ready`)){this.past={contactId:e,status:`loading`,years:[],error:``};try{let t=await a.call(`sponsors.pastYears`,{contactId:e});if(this.past.contactId!==e)return;this.past={contactId:e,status:`ready`,years:t.years||[],error:``}}catch(t){if(this.past.contactId!==e)return;this.past={contactId:e,status:`error`,years:[],error:t.message||`Could not load past years.`}}}},pastLines(e){return ci(e,W)},get canClose(){return this.canWrite&&b.canWrite(`system/Contacts`)&&this.company&&this.company.active!==!1},async closeForGood(){let e=this.record;if(!e||this.acting)return;let t=e.status,n=e.contact_id,r=this.rowLabel(e);this.acting=!0,this.message=``;try{await a.call(`sponsors.closeForGood`,{contactId:n}),await b.load([`system/Contacts`,H]),this.confirmClose=!1,U().show(`${Ti(r)} is inactive in every year from now on.`,async()=>{await b.save(`system/Contacts`,{active:!0},n),t!==`no`&&await b.save(H,{status:t},e.id)}),this.loadHistory()}catch(e){this.message=e.message||`Could not save. Please try again.`}finally{this.acting=!1}}}),e}var Pi=`
  <div class="spsum" x-show="status === 'ready'">
    <div class="spcounts" role="group" aria-label="Companies by status">
      <template x-for="o in counts" :key="o.value">
        <button type="button" class="spcount" :aria-pressed="String(countOn(o.value))" @click="toggleCount(o.value)">
          <b x-text="o.n"></b><span x-text="o.label"></span>
        </button>
      </template>
    </div>
    <p class="spline m-0">
      <span>Sponsorship: <b x-text="summaryText.spon"></b> <span x-text="summaryText.paid"></span></span>
      <span x-show="hasPrizes">Donations: <b x-text="summaryText.dons"></b> <span x-text="summaryText.got"></span></span>
    </p>
    <p class="spline m-0" x-show="places.length">
      <span>Places:</span>
      <template x-for="(p, i) in places" :key="p.id">
        <span><span x-show="i" aria-hidden="true">· </span><b x-text="placeText(p)"></b><span class="spsec" x-show="p.secured">, secured</span><span x-show="p.taken" x-text="' (' + p.paid + ' paid)'"></span></span>
      </template>
      <span>· <button type="button" class="plink" @click="showTiers()">Tiers</button></span>
    </p>
  </div>${N({toolbarHtml:xi,panelViewHtml:`
  <section class="psec">
    <h3 class="lbl m-0">Sponsorship<span class="ytag" x-text="tagFor('Outreach')"></span></h3>
    <template x-if="hasSpon">
      <div class="flex flex-col gap-2">
        <b class="font-semibold" x-text="sponLine"></b>
        <div class="spsteps" role="group" aria-label="Sponsorship steps">
          <template x-for="s in steps" :key="s.value">
            <button type="button" class="spstep" :class="{ done: stepDone(s.value) }" :disabled="!canWrite || acting" :aria-pressed="String(stepDone(s.value))" @click="setStep(s.value)">
              <span x-show="stepDone(s.value)" aria-hidden="true">&#10003; </span><span x-text="s.label"></span>
            </button>
          </template>
        </div>
        <div class="flex flex-col">
          <template x-for="b in benefits" :key="b.id">
            <div class="spben">
              <label class="fcheck grow">
                <input type="checkbox" :checked="Boolean(b.done)" :disabled="!canTick || busy" @change="tick(b, $event.target)">
                <span><span x-text="benefitLabel(b)"></span> <small class="muted" x-text="doneText(b)"></small></span>
              </label>
              <a class="plink" x-show="b.file" :href="fileUrl(b)" target="_blank" rel="noopener">Open the file</a>
              <template x-if="uploadWords(b) && canTick">
                <span class="contents">
                  <button type="button" class="plink" :disabled="uploading[b.id] === 'Uploading...'" @click="$el.nextElementSibling.click()" x-text="b.file ? 'Replace' : uploadWords(b)"></button>
                  <input type="file" hidden accept="image/*,.pdf" @change="uploadBenefit(b, $event)">
                </span>
              </template>
              <small class="spup" x-show="uploading[b.id]" x-text="uploading[b.id]"></small>
            </div>
          </template>
          <p class="muted m-0" x-show="!benefits.length">No benefits listed yet.</p>
          <div x-show="canTick && missing.length"><button class="btn sm" type="button" :disabled="busy" @click="syncBenefits(record, 'The benefit checklist was not updated')">Add the tier's benefits</button></div>
        </div>
      </div>
    </template>
    <template x-if="!hasSpon">
      <div class="flex flex-col gap-2">
        <p class="muted m-0" x-show="!spon.open">No sponsorship. <button type="button" class="plink" x-show="canSpon" @click="openSpon()">Add sponsorship</button></p>
        <div class="spmini" x-show="spon.open">
          <label class="flab" :for="'sp-tier' + uid">Tier</label>
          <select class="inp" :id="'sp-tier' + uid" x-model="spon.tierId">
            <template x-for="t in tierChoices" :key="t.value"><option :value="t.value" :disabled="Boolean(t.full)" x-text="t.label" :selected="spon.tierId === t.value"></option></template>
          </select>
          <p class="fhelp m-0">Starts at Agreed and makes the benefit checklist from the tier. The status becomes Said yes.</p>
          <div class="flex gap-2">
            <button class="btn pri sm" type="button" :disabled="Boolean(spon.busy || !spon.tierId)" @click="addSponsorship()" x-text="spon.busy ? 'Adding...' : 'Add sponsorship'"></button>
            <button class="btn sm" type="button" :disabled="Boolean(spon.busy)" @click="spon.open = false">Cancel</button>
          </div>
        </div>
      </div>
    </template>
  </section>

  <section class="psec" x-show="hasPrizes">
    <h3 class="lbl m-0 flex items-center gap-2"><span class="grow">Donations<span class="ytag" x-text="tagFor('Prizes')"></span></span>
      <button type="button" class="plink spnorm" x-show="canDonate && !don.open" @click="openDonation()">Add a donation</button></h3>
    <template x-for="p in donations" :key="p.id">
      <div class="spdon" :class="{ muted: isWithdrawn(p) }">
        <b x-text="p.title"></b>
        <small class="muted" x-show="prizeLine(p)" x-text="prizeLine(p)"></small>
        <div class="spsteps" x-show="!isWithdrawn(p)">
          <template x-for="s in prizeSteps" :key="s.value">
            <button type="button" class="spstep" :class="{ done: prizeStepDone(p, s.value) }" :disabled="!canDonate || acting" :aria-pressed="String(prizeStepDone(p, s.value))" @click="setPrizeStatus(p, s.value)">
              <span x-show="prizeStepDone(p, s.value)" aria-hidden="true">&#10003; </span><span x-text="s.label"></span>
            </button>
          </template>
          <button type="button" class="plink spwd" x-show="canDonate" :disabled="acting" @click="setPrizeStatus(p, 'withdrawn')">Withdrawn</button>
        </div>
        <p class="m-0 text-[12.5px]" x-show="isWithdrawn(p)">Withdrawn. <button type="button" class="plink" x-show="canDonate" @click="setPrizeStatus(p, 'promised')">Promised again</button></p>
      </div>
    </template>
    <p class="muted m-0" x-show="!donations.length && !don.open">None yet.</p>
    <form class="spmini" x-show="don.open" novalidate @submit.prevent="addDonation()">
      <div class="banner" role="alert" x-show="don.error" x-text="don.error"></div>
      <div class="field"><label class="flab" :for="'dn-t' + uid">What they give <small>required</small></label><input class="inp" :id="'dn-t' + uid" type="text" autocomplete="off" x-model="don.form.title"></div>
      <div class="sptwo">
        <div class="field"><label class="flab" :for="'dn-v' + uid">Value</label><div class="money"><span aria-hidden="true">£</span><input class="inp" :id="'dn-v' + uid" type="text" inputmode="decimal" placeholder="0.00" x-model="don.form.value"></div></div>
        <div class="field"><label class="flab" :for="'dn-f' + uid">Format</label>
          <select class="inp" :id="'dn-f' + uid" x-model="don.form.format"><option value="">Choose...</option><template x-for="o in formats" :key="o.value"><option :value="o.value" x-text="o.label"></option></template></select></div>
      </div>
      <div class="sptwo">
        <div class="field"><label class="flab" :for="'dn-q' + uid">How many</label><input class="inp" :id="'dn-q' + uid" type="text" inputmode="numeric" x-model="don.form.quantity"></div>
        <label class="fcheck self-end pb-2"><input type="checkbox" x-model="don.form.can_split"><span>Can be split</span></label>
      </div>
      <button type="button" class="plink self-start" @click="don.more = !don.more" :aria-expanded="String(don.more)" x-text="don.more ? 'Fewer details' : 'More details'"></button>
      <div class="flex flex-col gap-3" x-show="don.more">
        <div class="field"><label class="flab" :for="'dn-d' + uid">Description, for the booklet</label><textarea class="inp" rows="3" :id="'dn-d' + uid" x-model="don.form.description"></textarea></div>
        <div class="sptwo">
          <div class="field"><label class="flab" :for="'dn-e' + uid">Use by</label><input class="inp" :id="'dn-e' + uid" type="date" x-model="don.form.expires_on"></div>
          <div class="field"><label class="flab" :for="'dn-x' + uid">Fixed dates</label><input class="inp" :id="'dn-x' + uid" type="text" x-model="don.form.fixed_dates"></div>
        </div>
        <div class="field"><label class="flab" :for="'dn-r' + uid">How to redeem</label><input class="inp" :id="'dn-r' + uid" type="text" x-model="don.form.redemption_notes"></div>
        <div class="field"><label class="flab" :for="'dn-s' + uid">Restrictions</label><input class="inp" :id="'dn-s' + uid" type="text" x-model="don.form.restrictions"></div>
        <div class="field"><label class="flab" :for="'dn-k' + uid">Kept where</label><input class="inp" :id="'dn-k' + uid" type="text" x-model="don.form.storage"></div>
      </div>
      <p class="fhelp m-0">Anything left empty can be filled in later. It becomes a prize for the auction, and the status becomes Said yes.</p>
      <div class="flex gap-2">
        <button class="btn pri sm" type="submit" :disabled="Boolean(don.busy)" x-text="don.busy ? 'Adding...' : 'Add donation'"></button>
        <button class="btn sm" type="button" :disabled="Boolean(don.busy)" @click="closeDonation()">Cancel</button>
      </div>
    </form>
  </section>

  <section class="psec">
    <h3 class="lbl m-0 flex items-center gap-2"><span class="grow">Company<span class="ytag" x-text="tagFor('system/Contacts')"></span></span>
      <button type="button" class="plink spnorm" x-show="company && !$store.years.past" @click="editCompany()">Edit details</button></h3>
    ${wi(`facts`)}
    <p class="muted m-0" x-show="!facts.length">No details yet.</p>
    <template x-for="p in people" :key="p.id">
      <div class="flex flex-col text-[13.5px]">
        <span><b x-text="p._label"></b><span class="muted" x-show="p.job_title" x-text="', ' + p.job_title"></span>
          <span class="ml-1 rounded bg-accent-soft px-2 text-[11px] font-semibold text-accent-ink" x-show="p.preferred">Approach first</span></span>
        <a class="text-accent-ink" x-show="p.email" :href="'mailto:' + p.email" x-text="p.email"></a>
        <span x-show="p.phone" x-text="p.phone"></span>
      </div>
    </template>
    <p class="fhelp m-0">Details belong to the company: a change shows in every year.</p>
  </section>

  <section class="psec">
    <h3 class="lbl m-0">Past years</h3>
    <p class="muted m-0" x-show="past.status === 'loading'">Loading...</p>
    <p class="ferr m-0" x-show="past.status === 'error'" x-text="past.error"></p>
    <p class="muted m-0" x-show="past.status === 'ready' && !past.years.length">No earlier years in the app yet. Last year's ball shows here once it is brought in.</p>
    <template x-for="y in past.years" :key="y.year">
      <div class="spyear"><b x-text="y.year"></b><div class="flex flex-col"><template x-for="(l, i) in pastLines(y)" :key="i"><span x-text="l"></span></template></div></div>
    </template>
  </section>

  <section class="psec" x-show="canClose">
    <div x-show="!confirmClose"><button class="btn sm warn" type="button" :disabled="acting" @click="confirmClose = true">Closed for good</button></div>
    <div class="hconfirm" x-show="confirmClose">
      <b x-text="rowLabel(record) + ' has closed for good?'"></b>
      <span>It becomes inactive in every year from now on: not offered for future lists, kept for the record. On this year's list it moves to Not this year. Make it active again any time from the Company database.</span>
      <span class="flex gap-2">
        <button class="btn sm pri" type="button" :disabled="acting" @click="closeForGood()">Yes, closed for good</button>
        <button class="btn sm" type="button" @click="confirmClose = false">Cancel</button>
      </span>
    </div>
  </section>`})}`,Fi=()=>n.store(`toast`),Ii=()=>b.rows(`Outreach`),Li=`1.5rem`,Ri={tab:`system/Contacts`,load:[`system/Contacts`,`system/ContactPeople`,`Outreach`,`Members`],list:[`name`,`category`,`town`,`_year`,`_last`],form:[`name`,`kind`,`category`,`website`,`email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`instagram`,`notes`],filters:[`category`],sort:`name`,ownList:!0,noun:`company`,nouns:`companies`,defaults:{kind:`business`,active:!0},empty:`No companies yet.`,where(e){return this.scope===`off`?!R(e.id,Ii()):this.scope!==`on`||!!R(e.id,Ii())}},zi={email:`Business email`,address_line1:`Address`,address_line2:`Address, second line`,active:`Approach again`},Bi=[`first_name`,`last_name`,`job_title`,`email`,`phone`,`preferred`,`active`,`notes`],Vi={preferred:`Approach first`,active:`Still works there`},G=()=>({open:!1,id:null,form:{},errors:{},message:``,saving:!1});function Hi(){let e=M(Ri);vi(e,zi),Ci(e,{_year:{label:`This year`,text(e){let t=R(e.id,Ii());return t?`On the list: ${b.listLabel(`outreach_status`,t.status)}`:e.active===!1?`Inactive, every year`:`Not on the list`}},_last:{label:`Last year`,text(e){return this.lastYearCell(e)}}});let t=Object.getOwnPropertyDescriptor(e,`listCols`).get;V(e,{get listCols(){return t.call(this).filter(e=>e.name!==`_last`||this.last.year)}});for(let t of[`open`,`create`,`close`])B(e,t,function(e,...t){return this.person=G(),e.apply(this,t)});return B(e,`open`,function(e,t){e.call(this,t),this.loadPast(t.id)}),B(e,`reload`,async function(e){return this.loadLastYear(),e.call(this)}),V(e,{scope:`every`,ticked:{},adding:!1,person:G(),last:{year:null,byContact:{}},lastLoaded:!1,past:{contactId:null,status:`idle`,years:[],error:``},get year(){return b.state.year||``},get offCount(){return b.rows(`system/Contacts`).filter(e=>e.active!==!1&&!R(e.id,Ii())).length},get gridStyle(){return{"--cols":`${Li} ${Bt(this.listCols,this.hasMenu)}`}},lastYearCell(e){return this.lastLoaded&&this.last.year?oi(this.last.byContact[e.id]):``},async loadLastYear(){try{let e=await a.call(`sponsors.lastYear`,{});this.last={year:e.year||null,byContact:e.byContact||{}}}catch{this.last={year:null,byContact:{}}}this.lastLoaded=!0},label(e){return e&&e.name===`_last`&&this.last.year?String(this.last.year):e&&e.name===`_year`&&this.year?String(this.year):e&&zi[e.name]||Oe(e)},get canAdd(){return b.canWrite(`Outreach`)},canPick(e){return this.canAdd&&e.active!==!1&&!R(e.id,Ii())},get tickedIds(){return Object.keys(this.ticked).filter(e=>this.ticked[e]&&this.canPick(b.byId(`system/Contacts`,e)||{}))},toggleTicked(e){this.ticked={...this.ticked,[e.id]:!this.ticked[e.id]}},untick(){this.ticked={}},tickGivers(){let e={...this.ticked};b.rows(`system/Contacts`).forEach(t=>{this.canPick(t)&&si(this.last.byContact[t.id])&&(e[t.id]=!0)}),this.ticked=e,this.scope=`off`},tickAll(){let e={...this.ticked};this.rows.forEach(t=>{this.canPick(t)&&(e[t.id]=!0)}),this.ticked=e},async addTicked(e=this.tickedIds){if(e.length&&!this.adding){this.adding=!0;try{let t=await a.call(`sponsors.addToYear`,{contactIds:e});await b.load([`Outreach`]),this.ticked={};let n=(t.rows||[]).map(e=>e.id),r=n.length,i=(t.skipped||[]).length,o=`${r===1?`1 company`:`${r} companies`} added to the ${this.year} list, To contact.${i?` ${i} left out (already there or inactive).`:``}`,s=r&&b.canRemove(`Outreach`)?async()=>{for(let e of n)await b.remove(`Outreach`,e)}:null;Fi().show(o,s)}catch(e){Fi().show(e.message||`Could not add them. Please try again.`)}finally{this.adding=!1}}},get spy(){return this.record?R(this.record.id,Ii()):null},get spyText(){let e=this.spy;if(!e)return``;let t=e.owner_member_id?`, ${b.label(`Members`,e.owner_member_id)} approaching`:`, nobody approaching yet`;return`${b.listLabel(`outreach_status`,e.status)}${t}`},get facts(){return gi(this.record,e=>b.listLabel(`contact_category`,e)).filter(e=>e.label!==`Category`)},showOnList(){this.spy&&(this.panel.open=!1,xn(`Outreach`,this.spy.id))},async loadPast(e){if(e&&(this.past.contactId!==e||this.past.status!==`ready`)){this.past={contactId:e,status:`loading`,years:[],error:``};try{let t=await a.call(`sponsors.pastYears`,{contactId:e});this.past.contactId===e&&(this.past={contactId:e,status:`ready`,years:t.years||[],error:``})}catch(t){this.past.contactId===e&&(this.past={contactId:e,status:`error`,years:[],error:t.message||`Could not load past years.`})}}},pastLines(e){return ci(e,W)},get people(){if(!this.record)return[];let e=b.rows(`system/ContactPeople`),t=e.filter(e=>e.contact_id===this.record.id&&e.active===!1);return pi(this.record.id,e).concat(t)},get personCols(){return w(Bi,b.columns(`system/ContactPeople`))},get canEditPeople(){return b.canWrite(`system/ContactPeople`)},plabel(e){return Vi[e.name]||Oe(e)},pfid(e){return`p${this.uid}-${e.name}`},newPerson(){this.person={...G(),open:!0,form:Je(this.personCols,{active:!0,preferred:!this.people.length})}},editPerson(e){this.person={...G(),open:!0,id:e.id,form:Ye(this.personCols,e)}},cancelPerson(){this.person.saving||(this.person=G())},async savePerson(){let e=this.person;if(e.saving||!this.record)return;let t=e.id?b.byId(`system/ContactPeople`,e.id):null,{values:n,errors:r}=Ke(this.personCols,e.form,t);if(e.errors=r,e.message=``,Object.keys(r).length)e.message=`Please check the highlighted fields.`;else if(t&&!Object.keys(n).length)this.person=G();else{e.id||(n.contact_id=this.record.id),e.saving=!0;try{await b.save(`system/ContactPeople`,n,e.id),this.person=G()}catch(n){n.code===`conflict`&&t&&(e.form=Ye(this.personCols,b.byId(`system/ContactPeople`,e.id))),n.details&&n.details.fields&&(e.errors={...n.details.fields}),e.message=n.message||`Could not save. Please try again.`}finally{e.saving=!1}}}}),e}var Ui=N({toolbarHtml:`
  <div class="seg" role="group" aria-label="Show">
    <button type="button" :aria-pressed="scope === 'every'" @click="scope = 'every'">Everyone</button>
    <button type="button" :aria-pressed="scope === 'off'" @click="scope = 'off'" x-text="'Not on the ' + year + ' list (' + offCount + ')'"></button>
    <button type="button" :aria-pressed="scope === 'on'" @click="scope = 'on'">On the list</button>
  </div>`,aboveListHtml:`
  <p class="spline m-0" x-show="status === 'ready' && canAdd">
    <span>Tick:</span>
    <button type="button" class="plink" x-show="lastLoaded && last.year" @click="tickGivers()" x-text="'last year\\'s givers not on the list'"></button>
    <button type="button" class="plink" @click="tickAll()">everyone shown not on the list</button>
  </p>
  <div class="spbulk" x-show="tickedIds.length" role="region" aria-label="Ticked companies">
    <b x-text="tickedIds.length + ' ticked'"></b><span class="grow"></span>
    <button type="button" class="btn sm" @click="untick()">Clear</button>
    <button type="button" class="btn sm pri" :disabled="adding" @click="addTicked()" x-text="adding ? 'Adding...' : 'Add to the ' + year + ' list'"></button>
  </div>
  <div class="rlist sptick" x-show="status === 'ready' && rows.length" :style="gridStyle">
    ${Sr(`<span x-show="hasMenu"></span>`).replace(`<div class="rhead">`,`<div class="rhead"><span></span>`)}
    <template x-for="r in rows" :key="r.id">
      <div class="rrow cursor-pointer" :class="{ dim: isInactive(r) }" @click="open(r)">
        <span class="sptbox" :class="{ spnone: !canPick(r) }" @click.stop>
          <input type="checkbox" x-show="canPick(r)" :checked="Boolean(ticked[r.id])" @change="toggleTicked(r)" :aria-label="'Tick ' + r.name">
        </span>
        <button type="button" class="rc first text-left" @click.stop="open(r)" :title="r.name"><span x-text="r.name"></span><span class="ltag rtag" x-show="isInactive(r)">Inactive</span></button>
        <template x-for="c in listCols.slice(1)" :key="c.name">
          <span class="rc" :class="{ blank: !cell(r, c), rstat: c.name === '_year' }" :data-l="label(c)" :title="cell(r, c) || null" x-text="cell(r, c)"></span>
        </template>
        ${xr(`r`)}
      </div>
    </template>
  </div>`,panelViewHtml:`
  <section class="psec">
    <h3 class="lbl m-0"><span x-text="year ? year + ' list' : 'This year'"></span><span class="ytag" x-text="tagFor('Outreach')"></span></h3>
    <template x-if="spy">
      <div class="flex flex-wrap items-center gap-2">
        <span x-text="spyText"></span>
        <button class="btn sm" type="button" @click="showOnList()">Open on the list</button>
      </div>
    </template>
    <template x-if="!spy">
      <div class="flex flex-wrap items-center gap-2">
        <span class="muted" x-text="isInactive(record) ? 'Inactive: not offered for any year until made active again.' : 'Not on this year\\'s list.'"></span>
        <button class="btn sm" type="button" x-show="canPick(record)" :disabled="adding" @click="addTicked([record.id])" x-text="'Add to the ' + year + ' list'"></button>
      </div>
    </template>
    <p class="fhelp m-0" x-show="canInactive">Make inactive when the company has closed or must not be asked again: it stays inactive in every year until made active again.</p>
  </section>

  <section class="psec">
    <h3 class="lbl m-0">Contact people<span class="ytag" x-text="tagFor('system/ContactPeople')"></span></h3>
    <template x-for="p in people" :key="p.id">
      <div class="flex items-start gap-2">
        <div class="flex min-w-0 grow flex-col text-[13.5px]" :class="{ muted: p.active === false }">
          <span><b x-text="p._label"></b><span class="muted" x-show="p.job_title" x-text="', ' + p.job_title"></span>
            <span class="ml-1 rounded bg-accent-soft px-2 text-[11px] font-semibold text-accent-ink" x-show="p.preferred && p.active !== false">Approach first</span>
            <span class="ml-1 text-xs" x-show="p.active === false">(no longer there)</span></span>
          <a class="text-accent-ink" x-show="p.email" :href="'mailto:' + p.email" x-text="p.email"></a>
          <span x-show="p.phone" x-text="p.phone"></span>
        </div>
        <button class="btn sm" type="button" x-show="canEditPeople && !person.open" @click="editPerson(p)">Edit</button>
      </div>
    </template>
    <p class="muted m-0" x-show="!people.length">No one recorded yet.</p>
    <div x-show="canEditPeople && !person.open"><button class="btn sm" type="button" @click="newPerson()">Add a person</button></div>
    
  <form class="pform rounded-lg border border-line p-3" novalidate x-show="person.open" @submit.prevent="savePerson()">
    <div class="banner" role="alert" x-show="person.message" x-text="person.message"></div>
    <template x-for="c in personCols" :key="c.name">
      <div class="field">
        <template x-if="c.type === 'bool'">
          <label class="fcheck"><input type="checkbox" :id="pfid(c)" x-model="person.form[c.name]"><span x-text="plabel(c)"></span></label>
        </template>
        <template x-if="c.type !== 'bool'">
          <div class="field">
            <label class="flab" :for="pfid(c)"><span x-text="plabel(c)"></span><small x-show="c.required">required</small></label>
            <template x-if="c.type === 'text'"><textarea class="inp" rows="3" :id="pfid(c)" x-model="person.form[c.name]" :aria-invalid="Boolean(person.errors[c.name])"></textarea></template>
            <template x-if="c.type !== 'text'"><input class="inp" :id="pfid(c)" :type="c.type === 'email' ? 'email' : 'text'" autocomplete="off" x-model="person.form[c.name]" :aria-invalid="Boolean(person.errors[c.name])"></template>
          </div>
        </template>
        <p class="ferr" x-show="person.errors[c.name]" x-text="person.errors[c.name]"></p>
      </div>
    </template>
    <div class="flex gap-2">
      <button class="btn pri sm" type="submit" :disabled="Boolean(person.saving)" x-text="person.saving ? 'Saving...' : 'Save person'"></button>
      <button class="btn sm" type="button" :disabled="Boolean(person.saving)" @click="cancelPerson()">Cancel</button>
    </div>
  </form>
  </section>

  <section class="psec">
    <h3 class="lbl m-0">Past years</h3>
    <p class="muted m-0" x-show="past.status === 'loading'">Loading...</p>
    <p class="ferr m-0" x-show="past.status === 'error'" x-text="past.error"></p>
    <p class="muted m-0" x-show="past.status === 'ready' && !past.years.length">No earlier years in the app yet. Last year's ball shows here once it is brought in.</p>
    <template x-for="y in past.years" :key="y.year">
      <div class="spyear"><b x-text="y.year"></b><div class="flex flex-col"><template x-for="(l, i) in pastLines(y)" :key="i"><span x-text="l"></span></template></div></div>
    </template>
  </section>`}),Wi=()=>b.rows(`Outreach`),Gi={tab:`Tiers`,load:[`Tiers`,`Outreach`,`system/Contacts`,`Members`],list:[`name`,`price_pence`,`available`,`_taken`,`_paid`,`_left`,`sort_order`],form:[`name`,`price_pence`,`available`,`benefits`,`benefits_text`,`ad_size`,`sort_order`],sort:`sort_order`,noun:`tier`,defaults:{active:!0},empty:`No tiers yet. Someone who can change sponsorship prices adds them.`},Ki={price_pence:`Price`,available:`How many`,benefits_text:`Benefits as written`,sort_order:`Order`,active:`Offered`};function qi(){let e=M(Gi);return vi(e,Ki),Ci(e,{_taken:{label:`Taken`,type:`int`,text:e=>String(Kr(e.id,Wi()))},_paid:{label:`Paid`,type:`int`,text:e=>String(qr(e.id,Wi()))},_left:{label:`Left`,type:`int`,text:e=>Jr(e,Kr(e.id,Wi()))}}),B(e,`create`,function(e){this.cfg.defaults.sort_order=_i(b.rows(`Tiers`)),e.call(this)}),V(e,{get onTier(){return this.record?Wi().filter(e=>e.tier_id===this.record.id).map(e=>({id:e.id,name:b.label(`system/Contacts`,e.contact_id),step:b.listLabel(`sponsor_step`,L(e)),paid:L(e)===`paid`})).sort((e,t)=>Number(e.paid)-Number(t.paid)||e.name.localeCompare(t.name,`en-GB`)):[]},get placesText(){let e=this.record;if(!e)return``;let t=Kr(e.id,Wi()),n=qr(e.id,Wi());return e.available==null?`${t} taken (${n} paid), no limit`:`${t} of ${e.available} taken (${n} paid). ${Jr(e,t)}.`},showOnList(e){this.panel.open=!1,xn(`Outreach`,e)}}),e}var Ji=N({panelViewHtml:`
  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Places<span class="ytag" x-text="tagFor('Tiers')"></span></h3>
    <p class="m-0" x-text="placesText"></p>
    <p class="muted m-0 text-xs">A place is taken once a company agrees to the tier.</p>
    <template x-for="s in onTier" :key="s.id">
      <button type="button" class="btn sm justify-between" @click="showOnList(s.id)">
        <span x-text="s.name"></span><span class="muted" x-text="s.step"></span>
      </button>
    </template>
  </section>`}),Yi=ne({PARTS:()=>Xi,html:()=>Zi,setup:()=>Qi}),Xi=[{id:`year`,data:`sponsorsYear`,html:Pi},{id:`all`,data:`sponsorsCompanies`,html:Ui},{id:`tiers`,data:`sponsorsTiers`,html:Ji}],Zi=`
  <section class="flex flex-col gap-4" x-data="sponsorsPage">
    <div class="flex flex-wrap items-center gap-3">
      <div class="seg" role="group" aria-label="Show">
        <button type="button" :aria-pressed="String(part === 'year' || part === 'tiers')" @click="part = 'year'" x-text="yearText"></button>
        <button type="button" :aria-pressed="String(part === 'all')" @click="part = 'all'"><span x-text="allText"></span><span class="ytag">${Xe}</span></button>
      </div>
      <button type="button" class="plink text-[13px]" x-show="part === 'tiers'" @click="part = 'year'" x-text="'‹ Back to the ' + year + ' list'"></button>
    </div>${Xi.map(e=>`
    <template x-if="part === '${e.id}'"><div class="contents" x-data="${e.data}">${e.html}</div></template>`).join(``)}
  </section>`;function Qi(e){e.data(`sponsorsPage`,()=>({part:`year`,get year(){return b.state.year||`this year's`},get yearText(){let e=b.rows(`Outreach`).length;return`${b.state.year||`This year`} list${b.has([`Outreach`])?` (${e})`:``}`},get allText(){let e=b.rows(`system/Contacts`).filter(e=>e.active!==!1).length;return`Company database${b.has([`system/Contacts`])?` (${e})`:``}`},init(){let e=()=>{let e=Cn(`sponsors`);e&&Xi.some(t=>t.id===e)&&(this.part=e)};e(),this.$watch(()=>E.wanted,e)}})),e.data(`sponsorsYear`,Ni),e.data(`sponsorsCompanies`,Hi),e.data(`sponsorsTiers`,qi)}var K=`system/Suppliers`,q=e=>e!=null&&e!==``;function $i(e,t){return[e,t].filter(e=>q(e)).join(` / `)}function ea(e){let t=[`SupplierYear`,K];return d(e,`members`,`view`)&&t.push(`Members`),d(e,`planning`,`view`)&&t.push(`Tasks`),d(e,`money`,`view`)&&t.push(`Budget`),t}function ta(t,n,r=new Date,i){if(n||!q(t))return``;let a=e(t,r,i);return a===null?``:a<0?`overdue`:a<=14?`soon`:``}function na(e,t=new Date,n){let r=e||{},i=(e,r,i)=>({amount:q(e)?Number(e):null,due:q(r)?r:null,paid:!!i,state:q(e)||q(r)?ta(r,i,t,n):``}),a=i(r.deposit_pence,r.deposit_due,r.deposit_paid),o=i(r.balance_pence,r.balance_due,r.balance_paid),s=a.amount!==null||o.amount!==null,c=e=>e.amount!==null&&!e.paid?e.amount:0;return{quote:q(r.quote_pence)?Number(r.quote_pence):null,deposit:a,balance:o,left:s?c(a)+c(o):null}}function ra(e,t,n,r=`done`){let i=(e||[]).filter(e=>e.linked_tab===t&&e.linked_id===n),a=e=>[+(e.status===r),e.due||`9999-99-99`];return i.slice().sort((e,t)=>{let[n,r]=a(e),[i,o]=a(t);return n-i||(r<o?-1:+(r>o))})}function ia(e,t){return(e||[]).filter(e=>e.supplier_year_id===t)}function aa(e){return e?[e.address_line1,e.address_line2,e.town,e.postcode].map(e=>q(e)?String(e).trim():``).filter(Boolean).join(`, `):``}function oa(e){if(!q(e))return null;let t=String(e).replace(/[^\d+]/g,``);return t.length>=3?`tel:${t}`:null}function sa(e,t,n){return(e||[]).find(e=>e.supplier_id===t&&e.area===n)||null}function ca(e,t){return(e||[]).filter(e=>e.supplier_id===t)}function la(e,t){let n=(e&&Array.isArray(e.areas)?e.areas:[]).filter(Boolean);return t&&n.includes(t)?t:n[0]||``}function ua(e,t){let n=t&&t.venue_supplier_id;return q(e)&&q(n)&&String(n)===String(e)}var da=ne({ALL:()=>va,YEAR:()=>_a,html:()=>ka,setup:()=>Na}),fa=()=>n.store(`ball`)&&n.store(`ball`).settings||{},pa=()=>fa().timezone||void 0,ma=e=>b.listLabel(`supplier_area`,e),ha=()=>(b.options(`supplier_status`)[0]||{}).value||``,ga=[`quote_pence`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`],_a={tab:`SupplierYear`,list:[`supplier_id`,`area`,`status`,`owner_member_id`,`quote_pence`,`deposit_due`,`balance_due`],form:[`supplier_id`,`area`,`status`,`owner_member_id`,`idea`,`quote_pence`,`quote_file`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`,`folder`,`notes`],filters:[`area`,`status`,`owner_member_id`],sort:`supplier_id`,ownTasks:!0,noun:`supplier this year`,nouns:`suppliers this year`,empty:`No suppliers for this year yet. Add one here, or open one under All suppliers.`},va={tab:K,load:[K,`SupplierYear`,`Members`],list:[`_label`,`areas`,`email`,`phone`],form:[`name`,`areas`,`website`,`email`,`events_email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`maps_url`,`notes`],filters:[`areas`],sort:`_label`,noun:`supplier`,defaults:{active:!0},empty:`No suppliers yet. Add the venue and anyone else you use, they are kept from year to year.`},ya=`m-0 text-[13px] font-semibold`,ba=`inline-block rounded px-2 text-[11.5px] font-semibold leading-5`,xa=`${ba} bg-accent-soft text-accent-ink`,Sa={soon:`text-warn`,overdue:`text-bad`},Ca={soon:`${ba} bg-[var(--warn-soft)] text-warn`,overdue:`${ba} bg-[var(--bad-soft)] text-bad`},wa={soon:`Due soon`,overdue:`Overdue`},Ta=`
  <div x-show="venue(record.supplier_id)"><span class="${xa}">This year's venue</span></div>

  <section class="flex flex-col gap-2" aria-label="Supplier details">
    <div class="flex items-center justify-between gap-2">
      <h3 class="${ya}">Supplier details<span class="ytag" x-text="tagFor('${K}')"></span></h3>
      <button class="btn sm" type="button" x-show="supplier && canEditSuppliers" @click="showSupplier()">Edit details</button>
    </div>
    <dl class="kv" x-show="details.length">
      <template x-for="d in details" :key="d.k">
        <div class="contents">
          <dt x-text="d.k"></dt>
          <dd class="min-w-0 [overflow-wrap:anywhere]">
            <template x-if="d.href"><a class="text-accent-ink" :href="d.href" :target="d.ext ? '_blank' : null" rel="noopener" x-text="d.v"></a></template>
            <template x-if="!d.href"><span class="whitespace-pre-line" x-text="d.v"></span></template>
          </dd>
        </div>
      </template>
    </dl>
    <p class="muted m-0 text-[13px]" x-show="!supplier">The supplier's record could not be found.</p>
    <p class="muted m-0 text-[13px]" x-show="supplier && !details.length">No contact details yet.</p>
  </section>

  <section class="flex flex-col gap-2" aria-label="Money this year">
    <h3 class="${ya}">Money this year<span class="ytag" x-text="tagFor('SupplierYear')"></span></h3>
    <dl class="kv num">
      <dt>Quote</dt><dd x-text="pounds(money.quote) || 'Not set'"></dd>
      <template x-for="p in moneyParts" :key="p.k">
        <div class="contents">
          <dt x-text="p.k"></dt>
          <dd class="flex flex-wrap items-center gap-x-2" :class="stateClass(p.state)">
            <span x-text="partText(p)"></span>
            <span :class="statePill(p.state)" x-show="p.state" x-text="stateText(p.state)"></span>
          </dd>
        </div>
      </template>
      <dt>Left to pay</dt>
      <dd class="font-semibold" x-text="money.left === null ? 'Add the deposit and balance to see this' : pounds(money.left)"></dd>
    </dl>
    <p class="muted m-0 text-[12px]" x-show="!canMarkPaid">You cannot mark a payment as paid. Ask an Admin if you need to.</p>
  </section>

  <section class="flex flex-col gap-2" aria-label="Tasks">
    <h3 class="${ya}">Tasks<span class="ytag" x-text="tagFor('Tasks')"></span></h3>
    <ul class="m-0 p-0 list-none flex flex-col" x-show="tasks.length">
      <template x-for="t in tasks" :key="t.id">
        <li class="py-2 border-t border-line flex flex-col gap-0.5">
          <button type="button" class="plink font-medium" @click="peek('Tasks', t.id)" x-text="t._label || t.title"></button>
          <span class="text-[12.5px]" :class="taskLate(t) ? 'text-bad' : 'text-muted'" x-text="taskLine(t)"></span>
        </li>
      </template>
    </ul>
    <p class="muted m-0 text-[13px]" x-show="!tasks.length">No tasks linked to this supplier yet. Tasks are added on the Tasks screen.</p>
  </section>

  <template x-if="showBudget">
    <section class="flex flex-col gap-2" aria-label="Budget lines">
      <h3 class="${ya}">Budget lines<span class="ytag" x-text="tagFor('Budget')"></span></h3>
      <ul class="m-0 p-0 list-none flex flex-col" x-show="budget.length">
        <template x-for="b in budget" :key="b.id">
          <li class="py-2 border-t border-line flex flex-col gap-0.5">
            <span class="font-medium" x-text="b._label || b.line"></span>
            <span class="text-[12.5px] text-muted num" x-text="budgetLine(b)"></span>
          </li>
        </template>
      </ul>
      <p class="muted m-0 text-[13px]" x-show="!budget.length">No budget lines linked to this supplier yet.</p>
    </section>
  </template>`,Ea=`
  <span hidden x-effect="suggestArea()"></span>
  <p class="note m-0" x-show="!panel.id">Not in the supplier list? Add them under All suppliers first, then come back here.</p>`,Da=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine">Mine</button>`,Oa=`
  <div x-show="venue(record.id)"><span class="${xa}">This year's venue</span></div>
  <p class="note m-0" x-show="record.active === false">Marked as not to use again.</p>

  <section class="flex flex-col gap-2" aria-label="This year">
    <h3 class="${ya}">This year<span class="ytag" x-text="tagFor('SupplierYear')"></span></h3>
    <div class="flex flex-wrap gap-2" x-show="thisYear.length">
      <template x-for="r in thisYear" :key="r.id">
        <button class="btn sm" type="button" @click="showYear(r.id)" x-text="yearChip(r)"></button>
      </template>
    </div>
    <p class="muted m-0 text-[13px]" x-show="!thisYear.length">Not on this year's list yet.</p>
    <div class="flex flex-wrap items-center gap-2" x-show="canAdd">
      <template x-if="(record.areas || []).length > 1">
        <select class="inp rsel" aria-label="Which area" @change="pick[record.id] = $event.target.value">
          <template x-for="a in record.areas" :key="a"><option :value="a" :selected="a === addArea" x-text="areaLabel(a)"></option></template>
        </select>
      </template>
      <button class="btn pri sm" type="button" :disabled="adding" @click="addToYear()" x-text="addButtonText"></button>
    </div>
    <p class="ferr" x-show="addError" x-text="addError"></p>
  </section>`,ka=`
  <section class="flex flex-col gap-4" x-data="suppliersScreen">
    <div class="seg self-start" role="group" aria-label="Show">
      <button type="button" :aria-pressed="supTab === 'year'" @click="supTab = 'year'">This year<span class="ytag" x-text="$store.years.shown"></span></button>
      <button type="button" :aria-pressed="supTab === 'all'" @click="supTab = 'all'">All suppliers<span class="ytag">${Xe}</span></button>
    </div>
    <div class="contents" x-data="supplierYearScreen" x-show="supTab === 'year'" @supplier-year-open.window="openYear($event.detail.id)">${N({intro:`Suppliers we are talking to or have booked for this ball, by where they stand. Open one for its details, money and tasks.`,toolbarHtml:Da,panelViewHtml:Ta,panelEditHtml:Ea})}</div>
    <div class="contents" x-data="supplierListScreen" x-show="supTab === 'all'" @supplier-open.window="openSupplier($event.detail.id)">${N({intro:`Every supplier we have used or considered, kept from year to year. Open one to add it to this year.`,panelViewHtml:Oa})}</div>
  </section>`;function Aa(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this),r.apply(this,e)}}function ja(){let e=M({..._a,load:ea(x.member),rowLabel:e=>$i(b.label(K,e.supplier_id),ma(e.area)),where(e){return!this.mine||x.member&&e.owner_member_id===x.member.id},extend:{mine:!1,formFull:!1,suggested:``,get filtered(){return this.mine||!!this.q.trim()||Object.values(this.filters).some(e=>C(e).length)},clearFilters(){this.mine=!1,this.q=``;for(let e of Object.keys(this.filters))this.filters[e]=[]},get formCols(){let e=w(this.cfg.form,this.cols).filter(e=>!Ce(e.name)&&e.name!==`_label`);return this.panel.mode===`view`&&!this.formFull?e.filter(e=>!ga.includes(e.name)):e},get supplier(){return this.record?b.byId(K,this.record.supplier_id):null},get canEditSuppliers(){return b.canWrite(K)},get canMarkPaid(){let e=b.column(`SupplierYear`,`deposit_paid`);return!!(e&&e.writable)},get details(){let e=this.supplier;if(!e)return[];let t=e=>Be({type:`url`},e),n=e=>Be({type:`email`},e);return[{k:`Website`,v:e.website,href:t(e.website),ext:!0},{k:`Map`,v:e.maps_url?`Open the map`:``,href:t(e.maps_url),ext:!0},{k:`Email`,v:e.email,href:n(e.email)},{k:`Events email`,v:e.events_email,href:n(e.events_email)},{k:`Phone`,v:e.phone,href:oa(e.phone)},{k:`Address`,v:aa(e)},{k:`Notes`,v:e.notes}].filter(e=>e.v)},get money(){return na(this.record,new Date,pa())},get moneyParts(){let e=this.money;return[{k:`Deposit`,...e.deposit},{k:`Balance`,...e.balance}]},partText(e){if(e.amount===null&&!e.due)return`Not set`;let t=[e.amount===null?`Amount not set`:Pe(e.amount)];return e.due&&t.push(`due ${h(e.due)}`),t.push(e.paid?`paid`:`not paid`),t.join(`, `)},stateClass:e=>Sa[e]||``,statePill:e=>Ca[e]||``,stateText:e=>wa[e]||``,pounds:Pe,get tasks(){return this.record?ra(b.rows(`Tasks`),`SupplierYear`,this.record.id):[]},taskLine(e){return[b.listLabel(`task_status`,e.status),e.due?`due ${h(e.due)}`:``,e.owner_member_id?b.label(`Members`,e.owner_member_id):``].filter(Boolean).join(`, `)},taskLate(e){return e.status!==`done`&&ta(e.due,!1,new Date,pa())===`overdue`},get showBudget(){return b.columns(`Budget`).length>0},get budget(){return this.record?ia(b.rows(`Budget`),this.record.id):[]},budgetLine(e){let t=[[`planned`,e.planned_pence],[`committed`,e.committed_pence],[`paid out`,e.actual_pence]].filter(([,e])=>e!=null).map(([e,t])=>`${e} ${Pe(t)}`);return[b.listLabel(`budget_category`,e.category),...t,e.paid?`paid`:`not paid`].filter(Boolean).join(`, `)},venue:e=>ua(e,fa()),suggestArea(){if(this.panel.id||this.panel.mode!==`edit`)return;let e=b.byId(K,this.form.supplier_id),t=e&&Array.isArray(e.areas)&&e.areas[0]||``;t&&(!this.form.area||this.form.area===this.suggested)&&(this.form.area=t,this.suggested=t)},openYear(e){let t=b.byId(`SupplierYear`,e);t&&this.open(t)},showSupplier(){let e=this.record&&this.record.supplier_id;e&&(this.panel.open=!1,this.supTab=`all`,window.dispatchEvent(new CustomEvent(`supplier-open`,{detail:{id:e}})))}}});Aa(e,`reload`,function(){this.cfg.load=ea(x.member)}),Aa(e,`create`,function(){this.suggested=``,this.cfg.defaults.status=ha(),this.cfg.defaults.owner_member_id=x.member&&x.member.id||null});let t=e.edit;return e.edit=function(){this.formFull=!0;try{t.call(this)}finally{this.formFull=!1}},e}function Ma(){let e=M({...va,rowLabel:e=>ua(e.id,fa())?`${e._label||e.name} (this year's venue)`:e._label||e.name,extend:{started:!1,pick:{},adding:!1,addError:``,init(){this.supTab===`all`?this.start():this.$watch(`supTab`,e=>{e===`all`&&this.start()})},start(){this.started||(this.started=!0,this.reload())},venue:e=>ua(e,fa()),areaLabel:ma,get thisYear(){return this.record?ca(b.rows(`SupplierYear`),this.record.id):[]},yearChip(e){return`${ma(e.area)}: ${b.listLabel(`supplier_status`,e.status)||`No status`}`},get addArea(){return this.record?la(this.record,this.pick[this.record.id]):``},get canAdd(){let e=this.record;return!!(e&&e.active!==!1&&this.addArea&&b.canWrite(`SupplierYear`))},get addButtonText(){return this.adding?`Adding...`:this.record&&sa(b.rows(`SupplierYear`),this.record.id,this.addArea)?`Open in this year`:`Add to this year`},async addToYear(){let e=this.record,t=this.addArea;if(!e||!t||this.adding)return;this.addError=``;let n=sa(b.rows(`SupplierYear`),e.id,t);if(!n){this.adding=!0;try{let r={supplier_id:e.id,area:t,status:ha()};x.member&&x.member.id&&(r.owner_member_id=x.member.id),{row:n}=await b.save(`SupplierYear`,r)}catch(e){this.addError=e.message||`Could not add. Please try again.`;return}finally{this.adding=!1}}this.showYear(n.id)},showYear(e){this.panel.open=!1,this.supTab=`year`,window.dispatchEvent(new CustomEvent(`supplier-year-open`,{detail:{id:e}}))},openSupplier(e){this.supTab=`all`;let t=b.byId(K,e);t&&this.open(t)}}});return Aa(e,`open`,function(){this.addError=``}),e}function Na(e){e.data(`suppliersScreen`,()=>({supTab:`year`,init(){let e=()=>{let e=Cn(`suppliers`);(e===`year`||e===`all`)&&(this.supTab=e)};e(),this.$watch(()=>E.wanted,e)}})),e.data(`supplierYearScreen`,ja),e.data(`supplierListScreen`,Ma)}var Pa=ne({TASKS:()=>Ba,html:()=>Ua,setup:()=>Wa,tasksScreen:()=>Ha}),Fa=[`Tasks`,`Members`,`Meetings`,`Outreach`,`SupplierYear`,`system/Contacts`,`system/Suppliers`],Ia=[`Prizes`],La=[`linked_tab`,`linked_id`],Ra={owner_member_id:`Owner`,linked_tab:`Linked to`},za=`linked`,Ba={tab:Nn,load:Fa,list:[`title`,`owner_member_id`,`area`,`due`,`status`,`linked_tab`],form:[`title`,`details`,`owner_member_id`,`area`,`due`,`status`,...La],filters:[`status`,`owner_member_id`,`area`],sort:`due`,ownList:!0,noun:`task`,defaults:{status:`todo`},empty:`No tasks yet. Add the first one with New task.`},Va=()=>zn(new Date);function Ha(){let e=M({...Ba,where(e){return this.hideDone&&e.status===`done`&&!C(this.filters.status).includes(`done`)?!1:this.scope===`mine`&&x.member?e.owner_member_id===x.member.id:!0},statusValues(e,t){return t===`done`?qn():{status:t,done_at:null}},async afterSave(e){let t=Jn(e);t&&await b.save(Nn,t,e.id)}}),t=Object.getOwnPropertyDescriptors(e),n=(e,n,...r)=>t[e].value.apply(n,r),r=(e,n)=>t[e].get.call(n);return Object.defineProperties(e,Object.getOwnPropertyDescriptors({tview:`list`,scope:`mine`,hideDone:!0,fullForm:!1,init(){n(`init`,this),S.past&&(this.scope=`all`,this.hideDone=!1),this.$watch(`filters.owner_member_id`,e=>{C(e).length&&(this.scope=`all`)})},async reload(){return b.load(Ia).catch(()=>{}),n(`reload`,this)},setScope(e){this.scope=e,e===`mine`&&(this.filters.owner_member_id=[])},get allCount(){return b.rows(Nn).length},get filtered(){return r(`filtered`,this)||this.allCount>0&&(this.scope===`mine`||this.hideDone)},clearFilters(){n(`clearFilters`,this),this.scope=`all`,this.hideDone=!1},label(e){return e&&Ra[e.name]||n(`label`,this,e)},cell(e,t){return t&&t.name===`linked_tab`?this.linkText(e):n(`cell`,this,e,t)},linkText(e){return Zn(b,e)},ownerName(e){return e&&e.owner_member_id?b.label(`Members`,e.owner_member_id):``},dueState(e){return Kn(e,Va())},dueClass(e){let t=this.dueState(e);return t===`overdue`?`text-bad font-semibold`:t===`soon`?`text-warn font-semibold`:``},dueText(e){if(!e||!e.due)return``;let t=h(e.due);return this.dueState(e)===`overdue`?`${t}, overdue`:t},listCell(e,t){return t.name===`due`?h(e.due):this.cell(e,t)},get timeline(){let e=this.$store.ball&&this.$store.ball.settings||{};return $n(this.rows,Va(),e.event_date||``)},get formCols(){let e=r(`formCols`,this);return this.fullForm||this.panel.mode===`edit`?e:e.filter(e=>e.name!==`linked_id`)},get editCols(){return r(`editCols`,this).filter(e=>!La.includes(e.name))},edit(){this.fullForm=!0;try{n(`edit`,this)}finally{this.fullForm=!1}},create(){this.cfg.defaults={...Ba.defaults,...Yn(x.member,b.rows(`Members`))},n(`create`,this)},pickOptions(e){return e===za?In.filter(e=>b.columns(e.tab).length||e.tab===this.form.linked_tab).flatMap(e=>{let t=e.tab===this.form.linked_tab?this.form.linked_id:``;return Qn(b,e.tab,{current:t}).map(t=>({value:`${e.tab}|${t.value}`,label:t.label,group:e.plural,kind:e.label}))}):n(`pickOptions`,this,e)},pickValue(e){return e===za?this.form.linked_tab&&this.form.linked_id?`${this.form.linked_tab}|${this.form.linked_id}`:``:n(`pickValue`,this,e)},pickSet(e,t){if(e!==za)return n(`pickSet`,this,e,t);let[r,i]=String(t||``).split(`|`);this.form.linked_tab=i?r:``,this.form.linked_id=i||``},pickLabel(e){if(e!==za)return n(`pickLabel`,this,e);let t=this.pickValue(za),r=t?this.pickOptions(za).find(e=>e.value===t):null;return r?`${r.label} (${r.kind})`:``},doneAtText(e){return e&&e.done_at?g(e.done_at):``},meetingLinked(e){return!!(e&&e.meeting_id&&b.byId(`Meetings`,e.meeting_id))},meetingText(e){let t=e&&e.meeting_id?b.byId(`Meetings`,e.meeting_id):null;return t?h(t.date)||t.id:``}})),e}var Ua=`
  <section class="flex flex-col gap-4">
    <div class="contents" x-data="tasksScreen">${N({intro:`Who is doing what, and by when. Overdue tasks are in red, tasks due in the next 7 days in amber.`,toolbarHtml:`
  <div class="seg" role="group" aria-label="Whose tasks">
    <button type="button" :aria-pressed="scope === 'mine'" @click="setScope('mine')">My tasks</button>
    <button type="button" :aria-pressed="scope === 'all'" @click="setScope('all')">Everyone's</button>
  </div>
  <label class="fcheck text-[13px]"><input type="checkbox" x-model="hideDone"><span>Hide done</span></label>
  <div class="seg" role="group" aria-label="Show as">
    <button type="button" :aria-pressed="tview === 'list'" @click="tview = 'list'">List</button>
    <button type="button" :aria-pressed="tview === 'timeline'" @click="tview = 'timeline'">Timeline</button>
  </div>`,aboveListHtml:`${`
  <div class="rlist" x-show="status === 'ready' && rows.length && tview === 'list'" :style="gridStyle">
    ${Sr(`<span x-show="hasMenu"></span>`)}
    <template x-for="g in listGroups" :key="g.value">
      <div class="contents">
        ${yr}
        <template x-for="r in (isFolded(g) ? [] : g.rows)" :key="r.id">
          <div class="rrow cursor-pointer" @click="open(r)">
            <button type="button" class="rc first text-left" @click.stop="open(r)" :title="r.title" x-text="r.title"></button>
            <template x-for="c in listCols.slice(1)" :key="c.name">
              <span class="rc" :class="[c.name === 'due' ? dueClass(r) : '', listCell(r, c) ? '' : 'blank', grouped && c.name === group ? 'ingroup' : '', isNumber(c) ? 'num' : '', isStatusCol(c) ? 'rstat' : '']" :data-l="label(c)" :title="(c.name === 'due' ? dueText(r) : listCell(r, c)) || null"><span x-text="listCell(r, c)"></span><span class="narrow-only" x-show="c.name === 'due' && dueState(r) === 'overdue'">, overdue</span></span>
            </template>
            ${xr(`r`)}
          </div>
        </template>
      </div>
    </template>
  </div>`}
  <div class="flex flex-col gap-4" x-show="status === 'ready' && rows.length && tview === 'timeline'">
    <p class="muted m-0 text-[12.5px]">Open tasks by when they are due. Done tasks are not shown here.</p>
    <template x-for="g in timeline" :key="g.key">
      <section class="flex flex-col gap-1.5">
        <h3 class="lbl m-0 flex items-baseline gap-2" :class="g.key === 'overdue' ? 'text-bad' : ''">
          <span x-text="g.label"></span><span class="num font-semibold" x-show="g.rows.length" x-text="g.rows.length"></span>
        </h3>
        <div class="border border-line rounded-[10px] bg-surface overflow-hidden" x-show="g.rows.length">
          <template x-for="r in g.rows" :key="r.id">
            <button type="button" class="flex flex-wrap items-baseline w-full text-left gap-x-3 gap-y-0.5 px-3 py-2 border-t border-line first-of-type:border-t-0 hover:bg-surface-2" @click="open(r)">
              <span class="w-[5.5rem] shrink-0 text-[12.5px] num" :class="dueClass(r) || 'text-muted'" x-text="r.due ? dueText(r) : 'No date'"></span>
              <span class="flex-1 min-w-[10rem] font-semibold text-[13.5px]" x-text="r.title"></span>
              <span class="text-[12.5px] text-muted" x-text="ownerName(r)"></span>
              <span class="basis-full md:basis-auto text-[12.5px] text-muted" x-show="r.linked_tab" x-text="linkText(r)"></span>
            </button>
          </template>
        </div>
        <p class="m-0 text-[12.5px] text-muted" x-show="!g.rows.length">Nothing due.</p>
      </section>
    </template>
  </div>`,panelViewHtml:`
  <p class="m-0 text-bad font-semibold" x-show="dueState(record) === 'overdue'">Overdue</p>
  <p class="m-0 text-warn font-semibold" x-show="dueState(record) === 'soon'">Due in the next 7 days</p>
  <dl class="pkv">
    <div x-show="record.done_at"><dt>Done on</dt><dd x-text="doneAtText(record)"></dd></div>
    <div x-show="record.meeting_id"><dt>From the meeting on</dt><dd>
      <button type="button" class="plink" x-show="meetingLinked(record)" @click="peek('Meetings', record.meeting_id)" x-text="meetingText(record)"></button>
      <span x-show="!meetingLinked(record)" x-text="meetingText(record)"></span>
    </dd></div>
  </dl>`,panelEditHtml:`
  <div class="field" :class="{ bad: errors.linked_id }">
    <label class="flab" :for="'f' + uid + '-linked'">Linked to</label>
    ${Er(`'linked'`,`'f' + uid + '-linked'`,`'Type a company, supplier, meeting...'`)}
    <p class="fhelp">The company, supplier, meeting or prize this task is about. Leave it empty if none.</p>
    <p class="ferr" x-show="errors.linked_id" x-text="errors.linked_id"></p>
  </div>`})}</div>
  </section>`;function Wa(e){e.data(`tasksScreen`,Ha)}var Ga=[{key:`Outreach`,tab:`Outreach`,label:`Sponsors`,group:`sponsors`,load:[`Outreach`,`system/Contacts`],kindList:qt.Outreach},{key:`SupplierYear`,tab:`SupplierYear`,label:`Suppliers`,group:`suppliers`,load:[`SupplierYear`,`system/Suppliers`],kindList:qt.SupplierYear},{key:`Meetings`,tab:`Meetings`,label:`Meetings`,group:`planning`,load:[`Meetings`],kindList:qt.Meetings},{key:`Prizes`,tab:Jt,recordTab:`Prizes`,label:`Prizes (pictures)`,group:`prizes`,load:[`Prizes`,Jt]},{key:`Lots`,tab:Jt,recordTab:`Lots`,label:`Lots (pictures)`,group:`prizes`,load:[`Lots`,Jt]}];function Ka(e){let t=Ga.filter(t=>d(e,t.group,`edit`)).flatMap(e=>e.load);return[...new Set(t)]}var qa=e=>d(e,`files`,`edit`),Ja=e=>qa(e)||Ka(e).length>0,Ya=`en-GB`,Xa=(e,t)=>String(e).localeCompare(String(t),Ya,{sensitivity:`base`,numeric:!0}),Za=e=>/^\d{4}-\d{2}-\d{2}$/.test(String(e))?h(e):String(e??``);function Qa(e,t,n){if(!n)return``;if(n._label&&n._label!==n.id)return Za(n._label);let r=e.columns(t).find(e=>e.type===`ref`&&e.required);return r&&n[r.name]?e.label(r.ref,n[r.name]):n.id}var $a={key:`other`,label:`Other (not for one record)`},eo=e=>!!e&&e.tab===`OtherFiles`;function to(e){return e.slice().sort((e,t)=>Xa(e.tabLabel,t.tabLabel)||Xa(Za(e.recordLabel),Za(t.recordLabel))||Xa(e.columnLabel,t.columnLabel))}function no(e){return[...new Set(e.map(e=>e.tabLabel))].sort(Xa)}function ro(e,{q:t=``,area:n=``}={}){let r=String(t).toLowerCase().split(/\s+/).filter(Boolean);return e.filter(e=>{if(n&&e.tabLabel!==n)return!1;let t=[e.tabLabel,Za(e.recordLabel),e.columnLabel,e.comment||``,e.addedBy||``].join(` `).toLowerCase();return r.every(e=>t.includes(e))})}function io(e){return eo(e)?[e.kind===`link`?`Link`:`File`,e.comment].filter(Boolean).join(`: `):e.kind===`image`?`Picture`:e.kind===`folder`?`${e.columnLabel} (folder)`:e.columnLabel}function ao(e,t){if(!t)return[];if(t.recordTab){let n=e.column(Jt,`file`);return!e.canWrite(t.recordTab)||!en(n,`Images`)?[]:[{name:`file`,label:`Picture`,kind:`images`}]}let n=e.columns(t.tab).map(e=>({name:e.name,label:e.label,kind:en(e,t.tab)})).filter(e=>e.kind);if(!t.kindList||!e.canWrite(t.tab))return n;let r=e.list(t.kindList).filter(e=>e.active!==!1).map(e=>({name:`kind:${e.value}`,label:e.label,kind:`all`,listKind:e.value}));return n.concat(r)}function oo(e,t,n,r){if(!t||t.recordTab||!r||r.listKind||!n)return``;let i=e.byId(t.tab,n);return i&&i[r.name]?String(i[r.name]):``}function so(e){return Ga.filter(t=>ao(e,t).length)}function co(e,t){if(!t)return[];let n=t.recordTab||t.tab;return e.rows(n).map(t=>({value:t.id,label:Qa(e,n,t)})).sort((e,t)=>Xa(e.label,t.label))}function lo(e,t,n,{replace:r=!1}={}){return e.recordTab?{tab:Jt,recordTab:e.recordTab,recordId:t}:String(n).startsWith(`kind:`)?{tab:e.tab,id:t,kind:String(n).slice(5)}:r?{tab:e.tab,id:t,column:n,replace:!0}:{tab:e.tab,id:t,column:n}}var uo=ne({filesScreen:()=>mo,html:()=>ho,setup:()=>go}),fo={"--cols":Bt([{type:`string`},{type:`list`},{type:`string`}],!0)},po=()=>({open:!1,area:``,recordId:``,column:``,file:null,busy:!1,stage:``,error:``,done:null,title:``,comment:``,how:`file`,link:``,replace:!1});function mo(){return{status:`loading`,loadError:``,files:[],q:``,area:``,grid:fo,up:po(),folderUrl:``,formStatus:`idle`,formError:``,removeError:``,menu:{f:null,style:{}},init(){this.reload(),this.closeMenuOnMove=e=>{e.target&&e.target.closest&&e.target.closest(`.amenu`)||this.closeMenu()},window.addEventListener(`scroll`,this.closeMenuOnMove,!0),window.addEventListener(`resize`,this.closeMenuOnMove)},destroy(){window.removeEventListener(`scroll`,this.closeMenuOnMove,!0),window.removeEventListener(`resize`,this.closeMenuOnMove)},menuKey:e=>e?e.tab+e.recordId+e.column+e.fileId:``,openMenu(e,t){let n=this.menu.f&&this.menuKey(this.menu.f)===this.menuKey(e);if(this.closeMenu(),n)return;let r=t.currentTarget.getBoundingClientRect(),i={right:`${Math.max(8,window.innerWidth-r.right)}px`},a=window.innerHeight-r.bottom;a<200&&r.top>a?i.bottom=`${window.innerHeight-r.top+4}px`:i.top=`${r.bottom+4}px`,this.menu={f:e,style:i},this.$nextTick(()=>{let e=this.$root.querySelector(`.amenu a, .amenu button`);e&&e.focus()})},closeMenu(){this.menu.f&&(this.menu={f:null,style:{}})},recordScreen(e){return e&&!eo(e)?bn(e.tab):null},openRecord(e){this.closeMenu(),xn(e.tab,e.recordId)},async reload(){this.status=`loading`;try{let e=await a.call(`files.list`,{});this.files=e.files||[],this.folderUrl=e.folderUrl||``,this.status=`ready`}catch(e){this.loadError=e.message||`Could not load.`,this.status=`error`}},get canAddOther(){return qa(x.member)},get mayUpload(){return Ja(x.member)},get areas(){return no(this.files)},get shown(){return to(ro(this.files,{q:this.q,area:this.area}))},get filtered(){return!!(this.q.trim()||this.area)},get countText(){let e=this.shown.length,t=this.files.length;return e===t?`${t} ${t===1?`file`:`files`}`:`Showing ${e} of ${t} files`},clearFilters(){this.q=``,this.area=``},nice:Za,what:io,other:eo,async remove(e){this.closeMenu(),this.removeError=``;try{await a.call(`files.removeOther`,{id:e.recordId}),this.files=this.files.filter(t=>!(eo(t)&&t.recordId===e.recordId)),n.store(`toast`).show(`Removed "${e.recordLabel}".`,async()=>{await a.call(`records.restore`,{tab:`OtherFiles`,id:e.recordId}),await this.reload()})}catch(e){this.removeError=e.message||`Could not remove it.`}},async openUpload(){if(this.up={...po(),open:!0},this.formStatus!==`ready`&&this.formStatus!==`loading`){this.formStatus=`loading`;try{let e=Ka(x.member);e.length&&await b.load(e),this.formStatus=`ready`}catch(e){this.formError=e.message||`Could not load.`,this.formStatus=`error`}}},closeUpload(){this.up.busy||(this.up.open=!1)},another(){let{area:e,how:t}=this.up;this.up={...po(),open:!0,area:e,how:t},this.pickArea(),this.$refs.upFile&&(this.$refs.upFile.value=``)},get upAreas(){return this.formStatus===`ready`?this.canAddOther?[...so(b),$a]:so(b):[]},get upOther(){return this.up.area===$a.key},get upArea(){return Ga.find(e=>e.key===this.up.area)||null},get upRecords(){return co(b,this.upArea)},get upFields(){return ao(b,this.upArea)},get upField(){return this.upFields.find(e=>e.name===this.up.column)||null},get upAccept(){return this.upField?tn(this.upField.kind):``},get upCurrent(){return oo(b,this.upArea,this.up.recordId,this.upField)},get upHint(){return this.upField?nn(this.upField.kind,!1):``},get otherAccept(){return tn(`all`)},get otherHint(){return nn(`all`,!1)},get canSend(){return this.up.busy?!1:this.upOther?!!(this.up.title.trim()&&(this.up.how===`file`?this.up.file:this.up.link.trim())):!!(this.upArea&&this.up.recordId&&this.upField&&this.up.file)},pickArea(){this.up.recordId=``,this.up.replace=!1;let e=this.upFields;this.up.column=e.length===1?e[0].name:``,this.up.error=``},picked(e){this.up.file=e.target.files&&e.target.files[0]||null,this.up.error=``},async sendOther(){this.up.busy=!0,this.up.error=``;try{let e=await hn({api:a,title:this.up.title,comment:this.up.comment,link:this.up.how===`link`?this.up.link.trim():``,file:this.up.how===`file`?this.up.file:null,onStage:e=>{this.up.stage=e}});this.up.done={url:e.entry?e.entry.url:``,text:`Added "${this.up.title.trim()}" to Other.`},this.reload()}catch(e){this.up.error=e.message||`Could not add it. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}},async send(){if(!this.canSend)return;if(this.upOther){await this.sendOther();return}let e=this.upArea,t=this.upField;this.up.busy=!0,this.up.error=``;try{let n=await mn({api:a,records:b,file:this.up.file,kind:t.kind,target:lo(e,this.up.recordId,t.name,{replace:this.up.replace}),onStage:e=>{this.up.stage=e}}),r=co(b,e).find(e=>e.value===this.up.recordId),i=`${r?r.label:`the record`} (${t.label.toLowerCase()})`;this.up.done={url:n.url,text:n.attached?`Added to ${i}, next to the files already there.`:`Uploaded to ${i}.`},this.reload()}catch(e){this.up.error=e.message||`Could not upload. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}}}}var ho=`
  <section class="flex flex-col gap-4" x-data="filesScreen">
    <div class="card rec">
      <div class="card-h"><h2>Files</h2></div>
      <div class="card-b rec-b">
        <p class="muted m-0">Every file attached to a sponsor, supplier, meeting, prize or lot, and other files and links for the whole committee. Click one to open it.</p>
        <div class="rtools">
          <input class="inp rsearch" type="search" placeholder="Search" aria-label="Search" x-model.debounce.150ms="q">
          <select class="inp rsel" x-model="area" aria-label="Filter by area">
            <option value="">Area: all</option>
            <template x-for="a in areas" :key="a"><option :value="a" x-text="a" :selected="area === a"></option></template>
          </select>
          <span class="grow"></span>
          <a class="btn no-underline" :href="folderUrl" target="_blank" rel="noopener" x-show="folderUrl">Open the folder in Google Drive</a>
          <button class="btn pri" type="button" x-show="mayUpload" @click="openUpload()">Upload a file</button>
        </div>
        <p class="rcount m-0" x-show="status === 'ready' && files.length" x-text="countText"></p>
        <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
        <div class="banner" role="alert" x-show="status === 'error'">
          <span x-text="loadError"></span>
          <button class="btn sm" type="button" @click="reload()">Try again</button>
        </div>
        <div class="banner" role="alert" x-show="removeError" x-text="removeError"></div>
        <div class="rnone" x-show="status === 'ready' && !shown.length">
          <p class="m-0" x-text="filtered ? 'Nothing matches.' : 'No files yet. Upload one, or paste a Google Drive link into a record.'"></p>
          <button class="btn sm" type="button" x-show="filtered" @click="clearFilters()">Clear search and filter</button>
        </div>
        
  <div class="rlist" x-show="status === 'ready' && shown.length" :style="grid">
    <div class="rhead text-[10.5px] font-bold tracking-[.1em] uppercase text-[var(--on-head)]"><span>Record</span><span>Area</span><span>File</span><span></span></div>
    <template x-for="f in shown" :key="f.tab + f.recordId + f.column + f.fileId">
      <div class="contents">
        <div class="rrow cursor-pointer" @click="$el.querySelector('a.first').click()">
          <a class="rc first no-underline text-inherit" :href="f.url" target="_blank" rel="noopener" @click.stop :title="other(f) ? f.recordLabel : nice(f.recordLabel)" x-text="other(f) ? f.recordLabel : nice(f.recordLabel)"></a>
          <span class="rc" data-l="Area" :title="other(f) ? (f.addedBy ? 'Added by ' + f.addedBy : '') : f.tabLabel" x-text="other(f) ? (f.addedBy ? 'Other, by ' + f.addedBy : 'Other') : f.tabLabel"></span>
          <span class="rc" data-l="File" :title="what(f)" x-text="what(f)"></span>
          <button type="button" class="rdots" @click.stop="openMenu(f, $event)" aria-haspopup="menu" :aria-expanded="String(menuKey(menu.f) === menuKey(f))" :aria-label="'Actions: ' + f.recordLabel">&#8943;</button>
        </div>
      </div>
    </template>
  </div>
      </div>
    </div>
    <p class="note m-0">
      Anyone who can change a sponsor, supplier, meeting, prize or lot can upload a picture or a
      document to it, or paste a Google Drive link into its file field instead. Under Other, people
      who can change files add a file or a link for the whole committee; removing one needs full
      access to files. Pictures can be seen by anyone with the link; documents open only for people
      the Files folder is shared with.
    </p>
    
  <div class="scrim pscrim" x-show="up.open" @click="closeUpload()"></div>
  <aside class="panel" :class="{ open: up.open }" role="dialog" aria-modal="true" aria-label="Upload a file" :inert="!up.open" @keydown.escape.window="up.open && closeUpload()">
    <header class="ph">
      <div class="min-w-0 grow"><div class="lbl">Files</div><h2>Upload a file</h2></div>
      <button class="btn sm" type="button" @click="closeUpload()">Close</button>
    </header>
    <div class="pb">
      <p class="muted m-0" x-show="formStatus === 'loading'">Loading...</p>
      <div class="banner" role="alert" x-show="formStatus === 'error'"><span x-text="formError"></span></div>
      <template x-if="up.done">
        <div class="flex flex-col gap-3" role="status">
          <p class="m-0 font-semibold" x-text="up.done.text"></p>
          <a class="text-accent-ink" :href="up.done.url" target="_blank" rel="noopener">Open it in Google Drive</a>
        </div>
      </template>
      <form class="pform" id="filesUpload" novalidate x-show="formStatus === 'ready' && !up.done" @submit.prevent="send()">
        <div class="field">
          <label class="flab" for="fu-area">Area</label>
          <select class="inp" id="fu-area" x-model="up.area" @change="pickArea()" :disabled="Boolean(up.busy)">
            <option value="">Choose...</option>
            <template x-for="a in upAreas" :key="a.key"><option :value="a.key" x-text="a.label" :selected="up.area === a.key"></option></template>
          </select>
        </div>
        <template x-if="upOther">
          <div class="flex flex-col gap-4">
            <div class="field">
              <label class="flab" for="fu-title">Title</label>
              <input class="inp" id="fu-title" x-model="up.title" maxlength="200" :disabled="Boolean(up.busy)" placeholder="For example: Hotel floor plan">
            </div>
            <div class="field">
              <label class="flab" for="fu-comment">Comment</label>
              <textarea class="inp" id="fu-comment" x-model="up.comment" maxlength="2000" :disabled="Boolean(up.busy)"></textarea>
            </div>
            <div class="seg self-start" role="group" aria-label="File or link">
              <button type="button" :aria-pressed="up.how === 'file'" @click="up.how = 'file'" :disabled="Boolean(up.busy)">Upload a file</button>
              <button type="button" :aria-pressed="up.how === 'link'" @click="up.how = 'link'" :disabled="Boolean(up.busy)">Paste a link</button>
            </div>
            <div class="field" x-show="up.how === 'file'">
              <label class="flab" for="fu-ofile">File</label>
              <input class="inp" id="fu-ofile" type="file" :accept="otherAccept" @change="picked($event)" :disabled="Boolean(up.busy)">
              <p class="fhelp" x-text="otherHint"></p>
            </div>
            <div class="field" x-show="up.how === 'link'">
              <label class="flab" for="fu-link">Link</label>
              <input class="inp" id="fu-link" type="url" x-model="up.link" :disabled="Boolean(up.busy)" placeholder="https://">
              <p class="fhelp">A Google Drive, Docs or Sheets link, or any web page.</p>
            </div>
          </div>
        </template>
        <div class="field" x-show="upArea">
          <label class="flab" for="fu-record">Which one</label>
          <select class="inp" id="fu-record" x-model="up.recordId" @change="up.replace = false" :disabled="Boolean(up.busy)">
            <option value="">Choose...</option>
            <template x-for="r in upRecords" :key="r.value"><option :value="r.value" x-text="r.label" :selected="up.recordId === r.value"></option></template>
          </select>
          <p class="fhelp" x-show="upArea && !upRecords.length">Nothing here yet. Add it on its own screen first.</p>
        </div>
        <div class="field" x-show="upArea && upFields.length > 1">
          <label class="flab" for="fu-field">File field</label>
          <select class="inp" id="fu-field" x-model="up.column" @change="up.replace = false" :disabled="Boolean(up.busy)">
            <option value="">Choose...</option>
            <template x-for="f in upFields" :key="f.name"><option :value="f.name" x-text="f.label" :selected="up.column === f.name"></option></template>
          </select>
        </div>
        <div class="field" x-show="upField && up.recordId">
          <template x-if="upCurrent">
            <div class="flex flex-col gap-1">
              <label class="flex items-start gap-2 text-[13.5px]">
                <input type="checkbox" class="mt-0.5" x-model="up.replace" :disabled="Boolean(up.busy)">
                <span>Replace the current file</span>
              </label>
              <p class="fhelp" x-text="up.replace ? 'The current file goes to the Drive Bin, where it can be restored for 30 days.' : 'Not ticked: the new file is added next to the current one.'"></p>
            </div>
          </template>
          <p class="fhelp" x-show="!upCurrent && upField && upField.listKind">Added as an extra file on this record.</p>
        </div>
        <div class="field" x-show="upField">
          <label class="flab" for="fu-file">File</label>
          <input class="inp" id="fu-file" type="file" x-ref="upFile" :accept="upAccept" @change="picked($event)" :disabled="Boolean(up.busy)">
          <p class="fhelp" x-text="upHint"></p>
        </div>
        <p class="fhelp m-0" role="status" x-show="up.stage" x-text="up.stage"></p>
        <p class="ferr" role="alert" x-show="up.error" x-text="up.error"></p>
      </form>
    </div>
    <footer class="pf">
      <span class="grow"></span>
      <template x-if="!up.done">
        <div class="flex gap-2">
          <button class="btn" type="button" :disabled="Boolean(up.busy)" @click="closeUpload()">Cancel</button>
          <button class="btn pri" type="submit" form="filesUpload" :disabled="!canSend" x-text="up.busy ? (up.stage || 'Saving...') : (upOther && up.how === 'link' ? 'Add' : 'Upload')"></button>
        </div>
      </template>
      <template x-if="up.done">
        <div class="flex gap-2">
          <button class="btn" type="button" @click="another()">Upload another</button>
          <button class="btn pri" type="button" @click="closeUpload()">Done</button>
        </div>
      </template>
    </footer>
  </aside>
  <div class="amenu" role="menu" x-show="menu.f" :style="menu.style" @click.outside="closeMenu()" @keydown.escape.stop="closeMenu()">
    <template x-if="menu.f">
      <div class="contents">
        <a role="menuitem" :href="menu.f.url" target="_blank" rel="noopener" @click="closeMenu()">Open the file</a>
        <button type="button" role="menuitem" x-show="recordScreen(menu.f)" @click="openRecord(menu.f)" x-text="recordScreen(menu.f) ? recordScreen(menu.f).words : ''"></button>
        <template x-if="other(menu.f) && menu.f.canRemove && !$store.years.past">
          <div class="contents"><div class="sep"></div><button type="button" role="menuitem" class="warn" @click="remove(menu.f)">Remove</button></div>
        </template>
      </div>
    </template>
  </div>
  </section>`;function go(e){e.data(`filesScreen`,mo)}var _o={none:`None`,view:`View`,edit:`Edit`,full:`Full`},vo=[`none`,`view`,`edit`],yo=`Everyone is what each person gets. Click a person to give them more: each click goes up a level, and after Full back to what everyone has. View sees, Edit also adds and changes, Full can also remove.`,bo=`Admin: can do everything, including members and permissions.`,J=e=>t.indexOf(e),xo=e=>_o[e]||_o.none,So=e=>e===`admin`||/^can_/.test(String(e)),Y=e=>e&&e.column||`can_${e&&e.id}`;function Co(e,t){return!!t&&J(t)>J(e.default)}function wo(e,t){return t?t.admin===!0?`full`:Co(e,t[Y(e)])?t[Y(e)]:e.default:e.default}function To(e,t){return(e||[]).map(e=>{let n=wo(e,t);return{id:e.id,label:e.label,level:n,levelLabel:xo(n),grant:!(t&&t.admin===!0)&&Co(e,t&&t[Y(e)])}})}var Eo=e=>Object.fromEntries((e||[]).map(e=>[e.id,e.default]));function Do(e,t){let n={};for(let r of e||[]){let e=t&&t[r.id];vo.includes(e)&&e!==r.default&&(n[r.id]=e)}return n}var Oo=[`members`],ko=e=>vo.filter(t=>!(t===`none`&&Oo.includes(e))).map(e=>({value:e,label:xo(e)})),Ao={none:`Cannot see it`,view:`Can see it`,edit:`View, plus add and change`,full:`Edit, plus remove`};function jo(e,n){let r=To(e,n);return t.map(e=>({level:e,label:xo(e),help:Ao[e],items:r.filter(t=>t.level===e)}))}var Mo=(e,n)=>t.includes(n)&&J(n)>=J(e.default),No=(e,t)=>J(t)>J(e.default)?t:``;function Po(e,t,n){return e?Mo(e,n)?n===wo(e,t)?`here`:`target`:`locked`:``}function Fo(e,t){let n=ko(e).map(e=>e.value);return n[(n.indexOf(t)+1)%n.length]}function Io(e,n){let r=[``,...t.filter(t=>J(t)>J(e.default))];return r[(r.indexOf(Co(e,n)?n:``)+1)%r.length]}function Lo(e,t){if(t&&t.admin===!0)return{level:`full`,kind:`admin`};let n=wo(e,t);return{level:n,kind:n===e.default?`same`:`more`}}function Ro(e,t,n){let r=Y(e),i={...n&&n[t.id]||{}},a=Co(e,t[r])?t[r]:``,o=Io(e,r in i?i[r]:t[r]);o===a?delete i[r]:i[r]=o;let s={...n||{}};return Object.keys(i).length?s[t.id]=i:delete s[t.id],s}function zo(e,t){return Object.entries(t||{}).map(([t,n])=>{let r={};for(let[t,i]of Object.entries(n)){let n=(e||[]).find(e=>Y(e)===t);n&&(r[t]=Co(n,i)?i:``)}return{id:t,values:r}}).filter(e=>Object.keys(e.values).length)}var Bo=`A new version of the app sometimes needs changes in the database, such as a new tab or a list moved. Each change below is safe to run again. Nothing is deleted: anything moved keeps its values.`,Vo=`Up to date. The database has every change this version of the app needs.`;function Ho(e){return e?e===1?`1 change is waiting.`:`${e} changes are waiting.`:Vo}function Uo(e){return e?`Here the changes also run by themselves on the first use after an update.`:`Here the changes run only when an Admin presses the button.`}function Wo(e){return(e||[]).map(e=>({key:e.id,title:e.title||e.id,ok:e.ok===!0,text:e.ok===!0?(e.lines||[]).join(` `):`Did not finish: ${e.error||`an error`}. Nothing after it ran.`}))}function Go(e,t){let n=(e||[]).filter(e=>e.ok===!0).length,r=(e||[]).some(e=>e.ok!==!0);return!e||!e.length?`Nothing needed doing.`:r?`${n} of ${n+(t||1)} done. One stopped with an error: try again, or ask for help.`:n===1?`Done: 1 upgrade ran.`:`Done: ${n} upgrades ran.`}var Ko=`Brings the 2026 ball into the app from the 2026 files, which are only read, never changed. Preview a step to see what it would do, then apply it. Steps can run again: nothing is doubled, and anything changed in the app since is kept.`,qo=`First make the import sheet. It holds the file list, your answers and the values typed from the documents.`,Jo=[[`created`,`new`],[`updated`,`changed`],[`unchanged`,`unchanged`],[`conflict`,`kept as changed in the app`],[`waiting`,`waiting for an earlier step`],[`skipped`,`skipped`]];function Yo(e){let t=String(e||``),n=t.startsWith(`system/`),r=(n?t.slice(7):t).replace(/([a-z])([A-Z])/g,`$1 $2`),i=r.charAt(0)+r.slice(1).toLowerCase();return n?`${i} (all years)`:i}function Xo(e){let t=Jo.filter(([t])=>e&&e[t]).map(([t,n])=>`${e[t]} ${n}`);return t.length?t.join(`, `):`nothing`}function Zo(e){let t={created:0,updated:0,unchanged:0,conflict:0,waiting:0,skipped:0};return Object.values(e&&e.counts||{}).forEach(e=>{Object.keys(t).forEach(n=>{t[n]+=Number(e[n])||0})}),t}function Qo(e){if(!e)return null;let t=Zo(e),n=e.status===`applied`?`Applied`:`Preview`,r=e.done===!1?`${n}: part done, carrying on...`:`${n}: ${Xo(t)}.`,i=[];e.review&&i.push(e.review===1?`1 question for you.`:`${e.review} questions for you.`),e.noLongerInSource&&i.push(`${e.noLongerInSource} earlier import row(s) are no longer in the files (left as they are).`),(e.missingListValues||[]).forEach(e=>i.push(`List ${e.list} has no value "${e.value}" (${e.count} row(s)).`)),e.notice&&i.push(e.notice);let a=e=>[e.file,e.tab,e.row?`row ${e.row}`:``].filter(Boolean).join(`, `);return{title:r,tabs:Object.keys(e.counts||{}).sort().map(t=>({tab:t,label:Yo(t),text:Xo(e.counts[t])})),skipped:(e.skipped||[]).map((e,t)=>({key:`s${t}`,where:a(e),reason:e.reason||``})),conflicts:(e.conflicts||[]).map((e,t)=>({key:`c${t}`,where:a(e),reason:e.reason||``})),checks:(e.checks||[]).map((e,t)=>({key:`k${t}`,label:e.label,text:`${e.got} of ${e.expected}`,ok:e.ok===!0})),notes:i}}function $o(e){return(e&&e.steps||[]).map(e=>{let t=e.last,n=`Not run yet.`;return t&&t.running?n=`An apply did not finish: apply again to carry on.`:t&&(n=`${t.status===`applied`?`Applied`:`Previewed`} ${t.at?t.at.slice(0,16).replace(`T`,` `):``}`.trim()+`.`),{id:e.id,title:e.title,order:e.order,lastText:n,report:t&&t.report?t.report:null}})}function es(e){return(e&&e.files||[]).map(e=>{let t=[];return e.error?t.push(e.error):e.expectedTitle&&e.title!==e.expectedTitle&&t.push(`Opened "${e.title}", expected "${e.expectedTitle}".`),(e.tabs||[]).forEach(e=>{let n=e.header?`, header row ${e.header}`:``;if(!e.exists)t.push(`${e.tab}: missing.`);else if(e.missingHeaders&&e.missingHeaders.length){let r=e.headerCells&&e.headerCells.length?` The header row has ${e.headerCells.map(e=>`"${e}"`).join(`, `)}.`:``;t.push(`${e.tab}${n}: ${e.rows} rows, no column ${e.missingHeaders.map(e=>`"${e}"`).join(`, `)}.${r}`)}else t.push(`${e.tab}${n}: ${e.rows} rows.`)}),e.otherTabs&&e.otherTabs.length&&t.push(`Not read: ${e.otherTabs.map(e=>`"${e}"`).join(`, `)}.`),{key:e.key,title:e.title||e.key,ok:e.ok===!0,lines:t}})}function ts(e,t){let n=[];return(e||[]).forEach(e=>(e.items||[]).forEach(r=>{let i=`${e.list}\u0000${r.key}`;if(!Object.prototype.hasOwnProperty.call(t||{},i))return;let a=String(t[i]===null||t[i]===void 0?``:t[i]).trim();a!==String(r.target||``).trim()&&n.push({list:e.list,key:r.key,target:a})})),n}function ns(e){let t={company_merge:`Same company?`,individual_donor:`A person or a business?`,member:`Who is this on the 2026 committee?`,orderless_guest:`Guests without an order`};if(t[e])return t[e];let n=String(e||``).replace(/[_:]+/g,` `).trim();return n.charAt(0).toUpperCase()+n.slice(1)}function rs(e){return(e||[]).reduce((e,t)=>e+(t.items||[]).filter(e=>!String(e.target||``).trim()).length,0)}async function is(e,t,n,r,i=20){let a={};for(let o of t)try{let t=await e(n,{step:o}),s=1;for(;n===`import.apply`&&t&&t.done===!1&&s<i;)r&&r(o,t),t=await e(n,{step:o}),s++;if(a[o]=t,r&&r(o,t),t&&t.done===!1)return{reports:a,error:{step:o,message:`Still not finished after many rounds. Apply again.`}}}catch(e){return{reports:a,error:{step:o,message:e&&e.message||`That did not finish.`}}}return{reports:a,error:null}}function as(e){return(e&&e.years||[]).map(e=>({year:e.year,exists:e.exists===!0,locked:e.locked===!0,text:e.exists?e.locked?`${e.year} is locked: read only in the app, the import can still run again.`:`${e.year} is open.`:`No ${e.year} sheet yet.`}))}var os=ne({MEMBERS:()=>ss,html:()=>ws,setup:()=>Ds}),ss={tab:`Members`,list:[`_label`,`admin`],form:[`first_name`,`last_name`,`google_email`,`phone`],filters:[`admin`],sort:`_label`,noun:`member`,defaults:{active:!0,admin:!1},empty:`No members yet. Add the committee so they can sign in.`},X=n.reactive({status:`idle`,error:``,groups:[]}),cs=null;function ls(e=!1){return cs&&(e?X.status===`loading`:X.status!==`error`)||(X.status=`loading`,cs=a.call(`permissions.get`,{}).then(e=>{X.groups=e.groups||[],X.status=`ready`},e=>{X.error=e.message||`Could not load the permissions.`,X.status=`error`})),cs}var us=()=>!!(x.member&&x.member.admin===!0),ds=(e,t)=>`
    <div class="lvls">
      <template x-for="l in permLevels(${e}, ${t})" :key="l.level">
        <div class="lvg"${t?` :class="permBoxClass(l.level)" @click="permMove(l.level)"
          @dragover="permDragOver($event, l.level)" @dragleave="permOver = ''" @drop.prevent="permMove(l.level)"`:``}>
          <h4><span x-text="l.label"></span><small x-text="l.help"></small>${t?`
            <button type="button" class="btn sm" x-show="permState(l.level) === 'target'" @click.stop="permMove(l.level)">Move here</button>`:``}</h4>
          <div class="chips">
            <template x-for="p in l.items" :key="p.id">${t?`
              <button type="button" class="pchip" :class="{ more: p.grant }" draggable="true" :aria-pressed="String(permPick === p.id)"
                :disabled="!permCol(permColumnOf(p.id)).writable" @click.stop="permToggle(p.id)"
                @dragstart="permPick = p.id" @dragend="permPick = null; permOver = ''" x-text="p.label"></button>`:`
              <span class="pchip" :class="{ more: p.grant }" x-text="p.label"></span>`}
            </template>
            <em x-show="!l.items.length">Nothing</em>
          </div>
        </div>
      </template>
    </div>`,fs=`
  <section class="flex flex-col gap-2" aria-label="Permissions">
    <h3 class="m-0 text-[13px] font-semibold" x-text="'What ' + (record.first_name || 'this member') + ' can do'"></h3>
    <p class="muted m-0 text-[13px]" x-show="perms.status === 'loading'">Loading...</p>
    <p class="muted m-0 text-[13px]" x-show="perms.status === 'error'" x-text="perms.error"></p>
    <p class="m-0 text-[13.5px]" x-show="record.admin === true">${bo}</p>
    <template x-if="perms.status === 'ready' && record.admin !== true">
      <div class="flex flex-col gap-2">
        <p class="fhelp m-0">Dark parts are more than everyone has.</p>${ds(`record`,!1)}
      </div>
    </template>
  </section>`,ps=`
  <section class="flex flex-col gap-2" aria-label="Permissions" x-show="permCols.length">
    <h3 class="m-0 text-[13px] font-semibold" x-text="'What ' + (form.first_name || 'this member') + ' can do'"></h3>
    <template x-if="permCol('admin')">
      <label class="fcheck"><input type="checkbox" x-model="form.admin" :disabled="!permCol('admin').writable"><span>Admin: can do everything, including members and permissions</span></label>
    </template>
    <p class="muted m-0 text-[13px]" x-show="!form.admin && perms.status === 'loading'">Loading...</p>
    <p class="ferr" x-show="!form.admin && perms.status === 'error'" x-text="perms.error"></p>
    <template x-if="!form.admin && perms.status === 'ready'">
      <div class="flex flex-col gap-2">
        <p class="fhelp m-0" role="status" x-text="permHint()"></p>${ds(`form`,!0)}
      </div>
    </template>
  </section>`;function ms(){let e=M({...ss,ownField:So,extend:{perms:X,get formCols(){return w([...this.cfg.form,...this.cols.filter(e=>So(e.name)).map(e=>e.name)],this.cols).filter(e=>!Ce(e.name)&&e.name!==`_label`)},get permCols(){return this.cols.filter(e=>So(e.name))},permCol(e){return this.cols.find(t=>t.name===e)||{writable:!1}},get permGroups(){return X.groups.filter(e=>this.cols.some(t=>t.name===Y(e)))},permPick:null,permOver:``,permLevels(e,t){return jo(t?this.permGroups:X.groups,e)},permGroup(e){return X.groups.find(t=>t.id===e)||null},permColumnOf(e){return Y(this.permGroup(e))},permState(e){return this.permPick?Po(this.permGroup(this.permPick),this.form,e):``},permBoxClass(e){let t=this.permState(e);return{target:t===`target`,locked:t===`locked`,over:this.permOver===e}},permToggle(e){this.permPick=this.permPick===e?null:e},permMove(e){if(this.permState(e)!==`target`)return;let t=this.permGroup(this.permPick);this.form[Y(t)]=No(t,e),this.permPick=null,this.permOver=``},permDragOver(e,t){this.permState(t)===`target`&&(e.preventDefault(),this.permOver=t)},permHint(){let e=this.permPick&&this.permGroup(this.permPick);return e?`Now pick the level for ${e.label}. It cannot go below what everyone has (${xo(e.default)}).`:`Tap a part, then the level it should have. Dark parts are more than everyone has.`}}}),t=e.init;return e.init=function(){return ls(),t.call(this)},e}var hs=`
  <div class="card" x-show="admin">
    <div class="card-h"><h2>Who can do what</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0">${yo}</p>
      <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
      <div class="banner" role="alert" x-show="status === 'error'">
        <span x-text="error"></span><button class="btn sm" type="button" @click="reload()">Try again</button>
      </div>
      <template x-if="status === 'ready'">
        <form class="flex flex-col gap-3" @submit.prevent="save()">
          <div class="wlegend" aria-hidden="true">
            <span class="wbox more lv-none">None</span><span class="wbox more lv-view">View</span><span class="wbox more lv-edit">Edit</span><span class="wbox more lv-full">Full</span>
            <span class="muted">Filled: more than everyone. Plain: as everyone.</span><span class="wbox pending">Black</span><span class="muted">not saved yet.</span>
          </div>
          <p class="fhelp m-0" x-show="adminNames">Admins can do everything: <span x-text="adminNames"></span>.</p>
          <div class="wcd">
            <div class="wcd-g" :style="'--n:' + (people.length + 1)">
              <span class="wh wn">Part of the app</span>
              <span class="wh">Everyone</span>
              <template x-for="m in people" :key="m.id"><span class="wh"><span x-text="m.first_name || m._label"></span><small x-show="m.admin === true">Admin</small></span></template>
              <template x-for="g in groups" :key="g.id">
                <div class="contents">
                  <span class="wn" x-text="g.label"></span>
                  <span class="wc"><button type="button" class="wbox ev" :class="everyoneLook(g)" :disabled="busy" @click="defaults[g.id] = nextDefault(g.id, defaults[g.id])"
                    :aria-label="'Everyone, ' + g.label + ': ' + levelLabel(g.default)" x-text="levelLabel(g.default)"></button></span>
                  <template x-for="m in people" :key="m.id">
                    <span class="wc"><button type="button" class="wbox" :class="look(g, m)" :disabled="busy || m.admin === true" @click="step(g, m)"
                      :aria-label="(m.first_name || m._label) + ', ' + g.label + ': ' + levelLabel(cell(g, m).level)" x-text="levelLabel(cell(g, m).level)"></button></span>
                  </template>
                </div>
              </template>
            </div>
          </div>
          <ul class="perms wcd-list">
            <template x-for="g in groups" :key="g.id">
              <li class="perm wcd-row">
                <span class="pname" x-text="g.label"></span>
                <div class="seg" role="group" :aria-label="'Everyone, ' + g.label">
                  <template x-for="o in options(g.id)" :key="o.value">
                    <button type="button" :aria-pressed="String(defaults[g.id] === o.value)" :class="defaults[g.id] === o.value && everyonePending(g) ? 'pending' : ''" :disabled="busy" @click="defaults[g.id] = o.value" x-text="o.label"></button>
                  </template>
                </div>
                <p class="fhelp m-0" x-show="moreFor(g)" x-text="'More: ' + moreFor(g)"></p>
              </li>
            </template>
          </ul>
          <p class="fhelp m-0 wcd-list">To give one person more on a phone, open them in Members.</p>
          <div class="banner" role="alert" x-show="error" x-text="error"></div>
          <p class="fhelp m-0" role="status" x-show="done" x-text="done"></p>
          <div class="flex gap-2">
            <button class="btn pri" type="submit" :disabled="busy || !changed" x-text="busy ? 'Saving...' : 'Save'"></button>
            <button class="btn" type="button" x-show="changed" :disabled="busy" @click="reset()">Cancel</button>
          </div>
        </form>
      </template>
    </div>
  </div>`;function gs(){return{perms:X,status:`loading`,error:``,done:``,busy:!1,defaults:{},edits:{},options:ko,levelLabel:xo,nextDefault:Fo,get admin(){return us()},get groups(){return X.groups.map(e=>({...e,default:this.defaults[e.id]||e.default}))},get people(){return b.rows(`Members`).filter(e=>e.active!==!1).map(e=>this.edits[e.id]?{...e,...this.edits[e.id]}:e)},get adminNames(){return this.people.filter(e=>e.admin===!0).map(e=>e.first_name||e._label).join(`, `)},get changed(){return Object.keys(Do(X.groups,this.defaults)).length>0||Object.keys(this.edits).length>0},init(){this.admin&&this.reload()},async reload(){this.status=`loading`;try{if(await Promise.all([ls(!0),b.load([`Members`])]),X.status===`error`)throw Error(X.error);this.reset(),this.status=`ready`}catch(e){this.error=e.message||`Could not load who can do what.`,this.status=`error`}},reset(){this.defaults=Eo(X.groups),this.edits={},this.error=``},cell(e,t){return Lo(e,t)},look(e,t){let n=Lo(e,t),r=!!(this.edits[t.id]&&Y(e)in this.edits[t.id]);return`lv-${n.level} ${r?`pending`:n.kind}${r&&this.busy?` saving`:``}`},everyonePending(e){let t=X.groups.find(t=>t.id===e.id);return!!(t&&t.default!==e.default)},everyoneLook(e){let t=this.everyonePending(e);return`lv-${e.default}${t?` pending`:``}${t&&this.busy?` saving`:``}`},step(e,t){if(t.admin===!0)return;let n=b.byId(`Members`,t.id)||t;this.edits=Ro(e,n,this.edits)},moreFor(e){return this.people.filter(t=>Lo(e,t).kind===`more`).map(t=>`${t.first_name||t._label} (${xo(Lo(e,t).level)})`).join(`, `)},async save(){if(this.busy||!this.changed)return;this.busy=!0,this.error=``,this.done=``;let e=Do(X.groups,this.defaults),t=zo(this.groups,this.edits),n=[];try{Object.keys(e).length&&(X.groups=(await a.call(`permissions.saveDefaults`,{defaults:e})).groups||X.groups,this.defaults=Eo(X.groups));let r={...this.edits};for(let e of t)try{await b.save(`Members`,e.values,e.id),delete r[e.id]}catch(t){let r=b.byId(`Members`,e.id);n.push(`${r?r.first_name||r._label:e.id}: ${t.message||`did not save`}`)}this.edits=n.length?r:{},n.length?this.error=`Not saved for ${n.join(`; `)}`:this.done=`Saved. People get it from their next click.`}catch(e){this.error=e.message||`That did not save.`}finally{this.busy=!1}}}}var _s=`People sign in with the Google account listed here. Only active members can sign in. Only an Admin adds or changes members and what they can do.`,vs=`The choices in every dropdown, grouped by the screen they belong to. Reorder, retire or add values. Records keep what they hold: a retired value stays on them but is no longer offered. Values marked "Used by the app" stay as they are, because the app's rules depend on them.`,ys=`
  <div class="card" x-show="canSee">
    <div class="card-h"><h2>Lists</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0" x-text="intro"></p>
      <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
      <div class="banner" role="alert" x-show="status === 'error'">
        <span x-text="error"></span><button class="btn sm" type="button" @click="load()">Try again</button>
      </div>
      <template x-if="status === 'ready'">
        <div class="lcard" :class="{ picked: Boolean(which) }">
          <nav class="lnav" aria-label="Lists">
            <template x-for="g in groups" :key="g.id">
              <div class="lgrp">
                <span class="lbl" x-text="g.label"></span>
                <template x-for="l in g.lists" :key="l.name">
                  <button type="button" class="lit" :aria-current="String(which === l.name)" @click="pick(l.name)">
                    <span class="lit-t"><span x-text="l.title"></span><span class="ytag" x-text="l.allYears ? 'All years' : $store.years.shown"></span></span>
                    <small class="lit-h" x-text="l.help"></small>
                    <small class="lit-n" x-text="l.count"></small>
                  </button>
                </template>
              </div>
            </template>
          </nav>
          <section class="lmain" x-show="choice">
            <button class="btn sm lback" type="button" @click="back()">&larr; All lists</button>
            <h3 class="lhead"><span x-text="choice && choice.title"></span><span class="ytag" x-show="choice" x-text="choice && choice.allYears ? 'All years' : $store.years.shown"></span></h3>
            <p class="muted m-0" x-text="choice && choice.help"></p>
            <p class="fhelp m-0" x-show="choice && choice.allYears">${En}</p>
            <div class="banner" role="alert" x-show="error" x-text="error"></div>
            <ul class="lvals">
              <template x-for="(v, i) in values" :key="v.id">
                <li class="lval" :class="{ retired: !v.active }">
                  <template x-if="renaming !== v.id">
                    <span class="lname">
                      <span x-text="v.label"></span>
                      <span class="ltag" x-show="!v.active">Retired</span>
                      <span class="ltag app" x-show="v.locked && !fixed" title="The app relies on this value: it cannot be renamed or retired">Used by the app</span>
                      <span class="luse" x-text="use(v)"></span>
                    </span>
                  </template>
                  <template x-if="renaming === v.id">
                    <form class="flex gap-2 flex-1 min-w-0" @submit.prevent="saveRename(v)">
                      <input class="inp" x-model="renameText" maxlength="60" aria-label="New name" x-init="$nextTick(() => $el.focus())" @keydown.escape="cancelRename()">
                      <button class="btn sm pri" type="submit" :disabled="busy">Save</button>
                      <button class="btn sm" type="button" @click="cancelRename()">Cancel</button>
                    </form>
                  </template>
                  <span class="lacts" x-show="canEdit && renaming !== v.id">
                    <button class="btn sm" type="button" x-show="v.active" :disabled="busy || i === 0" @click="move(v, -1)" :aria-label="'Move ' + v.label + ' up'">↑</button>
                    <button class="btn sm" type="button" x-show="v.active" :disabled="busy || !values[i + 1] || !values[i + 1].active" @click="move(v, 1)" :aria-label="'Move ' + v.label + ' down'">↓</button>
                    <button class="btn sm" type="button" x-show="v.active && renamable(v)" :disabled="busy" @click="startRename(v)">Rename</button>
                    <button class="btn sm" type="button" x-show="canRetire && v.active && !v.locked" :disabled="busy" @click="setActive(v, false)">Retire</button>
                    <button class="btn sm" type="button" x-show="canRetire && !v.active" :disabled="busy" @click="setActive(v, true)">Bring back</button>
                  </span>
                </li>
              </template>
            </ul>
            <p class="fhelp m-0" x-show="canEdit && !fixed">${Tn}</p>
            <p class="muted m-0 text-[13px]" x-show="!fixed && !canEdit">You can see the lists but not change them.</p>
            <form class="flex gap-2 max-w-md" x-show="canEdit" @submit.prevent="add()">
              <input class="inp" x-model="newLabel" maxlength="60" placeholder="New value" aria-label="New value">
              <button class="btn pri shrink-0" type="submit" :disabled="busy || !newLabel.trim()">Add</button>
            </form>
          </section>
        </div>
      </template>
    </div>
  </div>`,bs=`
  <div class="card" x-show="admin">
    <div class="card-h"><h2>Upgrade database</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0" x-show="status === 'loading'">Checking...</p>
      <div class="banner" role="alert" x-show="status === 'error'">
        <span x-text="error"></span><button class="btn sm" type="button" @click="load()">Try again</button>
      </div>
      <template x-if="status === 'ready'">
        <div class="flex flex-col gap-3">
          <p class="m-0 text-[13.5px]" x-text="pendingText(pending.length)"></p>
          <p class="muted m-0 text-[13px]" x-show="pending.length">${Bo}</p>
          <ol class="upg" x-show="pending.length">
            <template x-for="p in pending" :key="p.id">
              <li>
                <b x-text="p.title"></b>
                <span class="muted" x-text="p.what"></span>
                <template x-for="d in p.details" :key="d"><span class="upg-d" x-text="d"></span></template>
                <span class="upg-err" x-show="p.lastError" x-text="'Last try stopped: ' + p.lastError"></span>
              </li>
            </template>
          </ol>
          <div class="flex flex-wrap items-center gap-2" x-show="pending.length">
            <button class="btn pri" type="button" :disabled="busy" @click="run()" x-text="busy ? 'Upgrading...' : 'Upgrade database'"></button>
          </div>
          <div class="flex flex-col gap-2" x-show="result.length" role="status">
            <p class="m-0 text-[13px] font-semibold" x-text="summary"></p>
            <ul class="upg done">
              <template x-for="r in result" :key="r.key">
                <li :class="{ bad: !r.ok }"><b x-text="r.title"></b><span class="muted" x-text="r.text"></span></li>
              </template>
            </ul>
          </div>
          <p class="fhelp m-0" x-text="autoText(auto)"></p>
        </div>
      </template>
    </div>
  </div>`;function xs(){return{status:`loading`,error:``,busy:!1,auto:!1,pending:[],result:[],summary:``,pendingText:Ho,autoText:Uo,get admin(){return us()},init(){this.admin&&this.load()},async load(){this.status=`loading`;try{let e=await a.call(`upgrades.preview`,{});this.auto=e.auto===!0,this.pending=e.pending||[],this.status=`ready`}catch(e){this.error=e.message||`Could not check the database.`,this.status=`error`}},async run(){if(!this.busy){this.busy=!0,this.result=[],this.summary=``;try{let e=await a.call(`upgrades.run`,{});this.auto=e.auto===!0,this.pending=e.pending||[],this.result=Wo(e.ran),this.summary=Go(e.ran,this.pending.length)}catch(e){this.result=[{key:`error`,title:`Upgrade database`,ok:!1,text:e.message||`That did not finish.`}],this.summary=`Nothing was confirmed. Check the list again.`,this.load()}finally{this.busy=!1}}}}}var Z={timeoutMs:3e5,retry:!1},Ss=`
  <div class="card" x-show="admin">
    <div class="card-h"><h2>Import 2026</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0" x-show="status === 'loading'">Checking...</p>
      <div class="banner" role="alert" x-show="error">
        <span x-text="error"></span><button class="btn sm" type="button" @click="load()">Try again</button>
      </div>
      <template x-if="status === 'ready'">
        <div class="flex flex-col gap-3">
          <p class="muted m-0 text-[13px]">${Ko}</p>
          <template x-if="!info.configured">
            <div class="flex flex-col gap-2">
              <p class="m-0 text-[13.5px]">${qo}</p>
              <div><button class="btn pri" type="button" :disabled="busy" @click="setup()" x-text="busy ? 'Making...' : 'Make the import sheet'"></button></div>
            </div>
          </template>
          <template x-if="info.configured">
            <div class="flex flex-col gap-3">
              <p class="m-0 text-[13.5px]"><a :href="info.configUrl" target="_blank" rel="noopener">Open the import sheet</a>
                <span class="muted">: files, your answers and the values typed from the documents.</span></p>
              <div class="flex flex-wrap items-center gap-2">
                <button class="btn" type="button" :disabled="busy" @click="check()">Check sources</button>
                <button class="btn" type="button" :disabled="busy" @click="all('import.preview')">Preview all</button>
                <button class="btn pri" type="button" :disabled="busy" @click="all('import.apply')">Apply all</button>
                <span class="muted text-[13px]" x-show="working" x-text="working"></span>
              </div>
              <ul class="upg done" x-show="checked.length">
                <template x-for="f in checked" :key="f.key">
                  <li :class="{ bad: !f.ok }"><b x-text="f.title"></b>
                    <template x-for="l in f.lines" :key="l"><span class="muted" x-text="l"></span></template></li>
                </template>
              </ul>
              <ol class="upg">
                <template x-for="s in steps" :key="s.id">
                  <li>
                    <b x-text="s.title"></b>
                    <span class="muted" x-text="s.lastText"></span>
                    <div class="flex flex-wrap gap-2 mt-1">
                      <button class="btn sm" type="button" :disabled="busy" @click="one('import.preview', s.id)">Preview</button>
                      <button class="btn sm pri" type="button" :disabled="busy" @click="one('import.apply', s.id)">Apply</button>
                    </div>
                    ${(e=>`
  <template x-if="${e}">
    <div class="flex flex-col gap-1 text-[13px]">
      <b class="font-semibold" x-text="${e}.title"></b>
      <template x-for="t in ${e}.tabs" :key="t.tab"><span><span x-text="t.label"></span>: <span class="muted" x-text="t.text"></span></span></template>
      <template x-for="c in ${e}.checks" :key="c.key"><span :class="c.ok ? 'muted' : 'upg-err'" x-text="c.label + ': ' + c.text"></span></template>
      <template x-for="n in ${e}.notes" :key="n"><span class="upg-d" x-text="n"></span></template>
      <details x-show="${e}.skipped.length || ${e}.conflicts.length">
        <summary class="muted" x-text="(${e}.skipped.length + ${e}.conflicts.length) + ' row(s) to look at'"></summary>
        <ul class="upg done">
          <template x-for="s in ${e}.conflicts" :key="s.key"><li class="bad"><b x-text="s.where"></b><span class="muted" x-text="s.reason"></span></li></template>
          <template x-for="s in ${e}.skipped" :key="s.key"><li class="bad"><b x-text="s.where"></b><span class="muted" x-text="s.reason"></span></li></template>
        </ul>
      </details>
    </div>
  </template>`)(`view(s.id)`)}
                  </li>
                </template>
              </ol>
              <section class="flex flex-col gap-2" x-show="review.length">
                <h3 class="m-0 text-[14px] font-semibold">Questions for you <span class="muted font-normal" x-text="'(' + open + ' open)'"></span></h3>
                <template x-for="l in review" :key="l.list">
                  <div class="flex flex-col gap-2">
                    <b class="text-[13.5px]" x-text="listTitle(l.list)"></b>
                    <template x-for="it in l.items" :key="it.key">
                      <label class="flex flex-col gap-1 text-[13px]">
                        <span x-text="it.text || it.key"></span>
                        <template x-if="it.choices">
                          <select class="inp" :value="answer(l.list, it)" @change="edit(l.list, it.key, $event.target.value)">
                            <option value="">Not answered yet</option>
                            <template x-for="c in it.choices" :key="c.value"><option :value="c.value" x-text="c.label" :selected="answer(l.list, it) === c.value"></option></template>
                          </select>
                        </template>
                        <template x-if="!it.choices">
                          <input class="inp" maxlength="200" :value="answer(l.list, it)" @input="edit(l.list, it.key, $event.target.value)">
                        </template>
                      </label>
                    </template>
                  </div>
                </template>
                <div><button class="btn pri" type="button" :disabled="busy || !changed.length" @click="saveReview()"
                  x-text="changed.length ? 'Save ' + changed.length + ' answer(s)' : 'Save answers'"></button></div>
                <p class="fhelp m-0">Answers are kept in the import sheet. Preview again to see what they change.</p>
              </section>
              <div class="flex flex-col gap-2">
                <template x-for="y in locks" :key="y.year">
                  <div class="flex flex-wrap items-center gap-2 text-[13px]">
                    <span x-text="y.text"></span>
                    <button class="btn sm" type="button" x-show="y.exists && !y.locked" :disabled="busy" @click="lock(y.year)" x-text="'Lock ' + y.year"></button>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>`;function Cs(){return{status:`loading`,error:``,busy:!1,working:``,info:{},steps:[],reports:{},checked:[],review:[],edits:{},locks:[],listTitle:ns,get admin(){return us()},get open(){return rs(this.review.map(e=>({list:e.list,items:e.items.map(t=>({...t,target:this.answer(e.list,t)}))})))},get changed(){return ts(this.review,this.edits)},init(){this.admin&&this.load()},view(e){return Qo(this.reports[e]||(this.steps.find(t=>t.id===e)||{}).report||null)},answer(e,t){let n=`${e}\u0000${t.key}`;return Object.prototype.hasOwnProperty.call(this.edits,n)?this.edits[n]:t.target||``},edit(e,t,n){this.edits={...this.edits,[`${e}\u0000${t}`]:n}},show(e){this.info=e,this.steps=$o(e),this.locks=as(e)},async load(){this.status=this.status===`ready`?`ready`:`loading`,this.error=``;try{this.show(await a.call(`import.status`,{},Z)),this.info.configured&&await this.loadReview(),this.status=`ready`}catch(e){this.error=e.message||`Could not load the import.`,this.status=this.status===`ready`?`ready`:`error`}},async loadReview(){let e=await a.call(`import.review`,{},Z);this.review=e.lists||[],this.edits={}},async act(e){if(!this.busy){this.busy=!0,this.error=``;try{await e()}catch(e){this.error=e.message||`That did not finish.`}finally{this.busy=!1,this.working=``}}},setup(){return this.act(async()=>{this.show(await a.call(`import.setup`,{},Z)),await this.loadReview()})},check(){return this.act(async()=>{this.checked=es(await a.call(`import.check`,{},Z))})},one(e,t){return this.run(e,[t])},all(e){return this.run(e,this.steps.map(e=>e.id))},run(e,t){return this.act(async()=>{let n=await is((e,t)=>a.call(e,t,Z),t,e,(t,n)=>{this.reports={...this.reports,[t]:n},this.working=`${e===`import.apply`?`Applying`:`Previewing`} ${t}...`});n.error&&(this.error=`${n.error.step}: ${n.error.message}`),this.show(await a.call(`import.status`,{},Z)),await this.loadReview()})},saveReview(){return this.act(async()=>{let e=await a.call(`import.saveReview`,{answers:this.changed},Z);this.review=e.lists||[],this.edits={}})},lock(e){return this.act(async()=>{this.show(await a.call(`import.lock`,{year:e},Z))})}}}var ws=`
  <section class="flex flex-col gap-4" x-data="settingsPage">
    <template x-if="showMembers">
      <div class="contents" x-data="membersCard">${N({title:`Members`,intro:_s,panelViewHtml:fs,panelEditHtml:ps})}</div>
    </template>
    <div class="contents" x-data="whoCard">${hs}</div>
    <div class="contents" x-data="listsCard">${ys}</div>
    <div class="contents" x-data="upgradeCard">${bs}</div>
    <div class="contents" x-data="importCard">${Ss}</div>
    <p class="note m-0">Event settings and years will be added to this page later.</p>
  </section>`,Ts=()=>typeof window<`u`&&window.matchMedia&&window.matchMedia(`(min-width: 768px)`).matches;function Es(){return{intro:vs,status:`loading`,error:``,which:``,busy:!1,renaming:null,renameText:``,newLabel:``,usage:{},get canSee(){return d(x.member,`settings`,`view`)},get groups(){return Dn(b.listInfo(),b.rows(`Lists`),b.rows(`system/Lists`))},get choice(){return this.which?On(this.groups,this.which):null},get tab(){return this.choice&&this.choice.sheet===`system`?`system/Lists`:`Lists`},get fixed(){return!!(this.choice&&this.choice.fixed)},get canEdit(){return!!this.choice&&!this.fixed&&b.canWrite(this.tab)},get canRetire(){return this.canEdit},get values(){let e=this.choice;if(!e)return[];let t=kn(b.rows(this.tab),e.name,b.list(e.name),e.fixed);return[...t.filter(e=>e.active),...t.filter(e=>!e.active)]},use(e){return An(this.usage[this.which],e.value,e.active)},renamable(e){return jn(this.usage[this.which],e)},init(){this.canSee&&this.load()},async load(){this.status=b.has(D)&&b.listInfo()?`ready`:`loading`;try{await b.load(D),!this.which&&Ts()&&this.groups.length&&this.pick(this.groups[0].lists[0].name),this.status=`ready`}catch(e){this.error=e.message||`Could not load the lists.`,this.status=`error`}},pick(e){this.which=e,this.cancelRename(),this.error=``,this.count(e),this.toTop()},back(){this.which=``,this.toTop()},toTop(){!Ts()&&this.$root&&this.$root.scrollIntoView&&this.$nextTick(()=>this.$root.scrollIntoView({block:`start`}))},async count(e){try{let t=await a.call(`lists.usage`,{list_name:e});this.usage={...this.usage,[e]:t.counts||{}}}catch{}},async run(e,t){this.busy=!0,this.error=``;try{return await a.call(e,{sheet:this.choice.sheet,...t}),await b.load(D),!0}catch(e){return this.error=e.message||`That did not save.`,e.code===`conflict`&&await b.load(D).catch(()=>{}),!1}finally{this.busy=!1}},startRename(e){this.renaming=e.id,this.renameText=e.label},cancelRename(){this.renaming=null,this.renameText=``},async saveRename(e){this.renameText.trim()===e.label||await this.run(`lists.save`,{id:e.id,label:this.renameText})?this.cancelRename():this.count(this.which)},setActive(e,t){return this.run(`lists.save`,{id:e.id,active:t})},move(e,t){let n=Mn(this.values,e.id,t);return n?this.run(`lists.reorder`,{list_name:this.which,ids:n}):null},async add(){await this.run(`lists.save`,{list_name:this.which,label:this.newLabel})&&(this.newLabel=``)}}}function Ds(e){e.data(`settingsPage`,()=>({get showMembers(){return d(x.member,`members`,`view`)}})),e.data(`membersCard`,ms),e.data(`whoCard`,gs),e.data(`listsCard`,Es),e.data(`upgradeCard`,xs),e.data(`importCard`,Cs)}var Os={sponsors:Yi,suppliers:da,tasks:Pa,files:uo,settings:os};function ks(e){return Os[e]?Os[e].html:ht}function As(e){for(let t of Object.values(Os))typeof t.setup==`function`&&t.setup(e)}var js=m.map(e=>e.id),Ms=`dashboard`,Q=he({api:a});l(()=>Q.ended());var Ns=e=>e&&S.past?st(e):e||null,Ps=null;Q.subscribe(e=>{x.member=e.status===`signedIn`?Ns(e.member):null,e.status===`signedIn`?e.member&&Ps!==e.member.id&&(Ps=e.member.id,S.load()):(Ps=null,S.reset(),b.clear(),n.store(`toast`)&&n.store(`toast`).dismiss())}),As(n),n.store(`toast`,mt());var $={host:null,box:null},Fs=()=>{};ut(e=>{typeof document<`u`&&document.documentElement.toggleAttribute(`data-past-year`,e!=null),x.member=Q.state.status===`signedIn`?Ns(Q.state.member):null,n.store(`toast`)&&n.store(`toast`).dismiss(),Fs()}),n.data(`committeeApp`,()=>({hash:f(js,Ms),sideOpen:!1,moreOpen:!1,icon:ee,env:i,auth:{...Q.state},googleError:``,googleFor:``,init(){window.addEventListener(`hashchange`,()=>{this.hash=f(js,Ms)}),Q.subscribe(e=>{this.auth={...e}}),this.$watch(`route`,()=>this.showScreen()),Fs=()=>{Q.state.status===`signedIn`&&this.showScreen(!0)},Q.restore().then(()=>{i.mock&&this.auth.status===`signedOut`&&/[?&]preview=1/.test(location.search)&&this.mockSignIn(`admin`)})},get modules(){return c(m,this.member)},get groups(){return r(this.modules)},get tabs(){return u.map(e=>this.modules.find(t=>t.id===e)).filter(Boolean)},get moreItems(){return this.modules.filter(e=>!u.includes(e.id))},get route(){let e=m.find(e=>e.id===this.hash);return p(e,this.member)?this.hash:Ms},mountHost(e){$.host=e,$.box=null,queueMicrotask(()=>this.showScreen())},showScreen(e=!1){let{host:t}=$;if(!t||!t.isConnected)return;let r=this.route;if(!e&&$.box&&$.box.dataset.screen===r&&$.box.isConnected)return;$.box&&n.destroyTree($.box);let i=document.createElement(`div`);i.className=`contents`,i.dataset.screen=r,i.innerHTML=ks(r),t.replaceChildren(i),$.box=i,n.initTree(i)},go(e){this.sideOpen=!1,this.moreOpen=!1,location.hash=`#/${e}`,window.scrollTo({top:0})},get current(){return m.find(e=>e.id===this.route)},get titleTag(){return tt(this.route,S.shown)},get eventInfo(){return S.pastSettings?o(S.pastSettings):this.$store.ball.event},get eventLine(){let e=this.eventInfo;return[e.name,e.dateLong,e.venueName].filter(Boolean).join(` / `)},pickYear(e){this.moreOpen=!1,S.pick(e)},backToCurrent(){S.back()},SIGN_IN_SLOW:de,mockLogins:[[`admin`,`Admin`],[`member`,`Member`],[`granted`,`Member with grants`]],get showShell(){return this.auth.status===`signedIn`},get member(){return this.auth.member||{}},get memberKind(){return this.member.admin?`Admin`:`Member`},get clientId(){return ae(this.$store.ball.settings&&this.$store.ball.settings.google_client_id)},isMoreRoute(){return!u.includes(this.route)},mountGoogle(e,t){if(i.mock||!t)return;let n=t;this.googleFor===n&&e.childElementCount||(this.googleFor=n,this.googleError=``,be(e,{clientId:t,onCredential:e=>Q.signIn(e)}).catch(e=>{this.googleError=e.message,this.googleFor=``}))},mockSignIn(e){i.mock&&se(e)&&Q.signIn(se(e))},signOut(){this.sideOpen=!1,a.year.set(null),xe(),Q.signOut(),this.googleFor=``}})),s({app:`committee`}),n.start();