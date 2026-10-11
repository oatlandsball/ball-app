import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,l as s,m as c,n as l,o as u,p as d,s as f,t as p,u as ee,v as m,y as h}from"./modules-C4g3OxJl.js";var te=Object.defineProperty,g=(e,t)=>{let n={};for(var r in e)te(n,r,{get:e[r],enumerable:!0});return t||te(n,Symbol.toStringTag,{value:`Module`}),n},ne=`Your session ended. Please sign in again.`,re=/^[0-9]+-[a-z0-9]+\.apps\.googleusercontent\.com$/;function ie(e){return typeof e==`string`&&re.test(e.trim())?e.trim():null}var ae=[`admin`,`member`,`granted`];function oe(e){return ae.includes(e)?`mock.${e}.token`:null}var se=2147483647,ce=3e4,le=6e3,ue=`Still signing in. Google can take up to half a minute after a quiet spell.`,de=`Google did not answer in time. Please try again.`,fe=`Could not reach the server. Check your connection and try again.`;function pe(e){let t=e&&e.code;return t===`timeout`||t===`bad_response`?de:t===`network`?fe:e&&e.message||`Sign-in failed. Please try again.`}function me({api:e,now:t=()=>Date.now(),setTimer:n=setTimeout,clearTimer:r=clearTimeout,signInTimeoutMs:i=ce}){let a={status:e.session.get()?`checking`:`signedOut`,slow:!1,member:null,expiresAt:null,message:``},o=null,s=new Set,c=()=>s.forEach(e=>e(a));function l(e){o&&r(o),o=null;let i=Date.parse(e);if(Number.isNaN(i))return;let a=i-t();if(a<=0)return f();o=n(f,Math.min(a,se))}function u(e){a.status=`signedIn`,a.slow=!1,a.member=e.member||null,a.expiresAt=e.expiresAt||null,a.message=``,l(a.expiresAt),c()}function d(t=``){o&&r(o),o=null,e.session.clear(),a.status=`signedOut`,a.slow=!1,a.member=null,a.expiresAt=null,a.message=t,c()}function f(){a.status===`signedOut`&&!e.session.get()?(a.message=ne,c()):d(ne)}async function p(){if(!e.session.get())return d(``);a.status=`checking`,c();try{u(await e.call(`auth.me`))}catch(e){if(e.code===`unauthorised`||e.code===`forbidden`)return d(ne);a.status=`signedOut`,a.message=`Could not check your sign-in. Check your connection and reload.`,c()}}async function ee(t){if(!t)return;a.status=`signingIn`,a.slow=!1,a.message=``,c();let o=n(()=>{a.status===`signingIn`&&(a.slow=!0,c())},le);try{let n=await e.call(`auth.signIn`,{idToken:t},{retry:!0,timeoutMs:i});e.session.set(n.session),u(n)}catch(e){d(pe(e))}finally{r(o)}}function m(){let t=e.session.get()?e.call(`auth.signOut`,{},{quiet:!0}):null;d(``),t&&t.catch(()=>{})}return{state:a,restore:p,signIn:ee,signOut:m,ended:f,subscribe:e=>(s.add(e),()=>s.delete(e))}}var he=`https://accounts.google.com/gsi/client`,ge=null;function _e(){return window.google&&window.google.accounts&&window.google.accounts.id?Promise.resolve(window.google):(ge||=new Promise((e,t)=>{let n=document.createElement(`script`);n.src=he,n.async=!0,n.defer=!0,n.onload=()=>e(window.google),n.onerror=()=>{ge=null,t(Error(`Could not load Google sign-in`))},document.head.appendChild(n)}),ge)}var ve=null;async function ye(e,{clientId:t,onCredential:n,dark:r}){let i=await _e();ve!==t&&(i.accounts.id.initialize({client_id:t,callback:e=>n(e&&e.credential),auto_select:!1,use_fedcm_for_prompt:!0,cancel_on_tap_outside:!0,context:`signin`,ux_mode:`popup`}),ve=t),e.replaceChildren(),i.accounts.id.renderButton(e,{type:`standard`,theme:r?`filled_black`:`outline`,size:`large`,text:`signin_with`,shape:`pill`,logo_alignment:`left`,width:Math.min(320,Math.max(200,Math.floor(e.clientWidth||280)))})}function be(){window.google&&window.google.accounts&&window.google.accounts.id&&window.google.accounts.id.disableAutoSelect()}var xe=[`id`,`created_at`,`updated_at`,`updated_by`],Se=e=>xe.includes(e),Ce=`en-GB`,we=(e,t)=>String(e.label).localeCompare(String(t.label),Ce,{sensitivity:`base`}),_=e=>Array.isArray(e)?e:e==null||e===``?[]:[e];function Te(e,{wrap:t=e=>e}={}){let n=t({year:null,tabs:{},lists:{},listInfo:null});function r(e){if(n.tabs[e])return n.tabs[e];let t=e.startsWith(`system/`)?e.slice(7):`system/${e}`;return n.tabs[t]||null}async function i(t){let r=await e.call(`records.list`,{tabs:t});n.year=r.year??n.year;for(let[e,t]of Object.entries(r.tabs||{}))n.tabs[e]={canWrite:!!t.canWrite,canRemove:!!t.canRemove,columns:t.columns||[],rows:t.rows||[],removed:t.removed||[],removedLabels:t.removedLabels||{},keptYearly:!!t.keptYearly};return r.lists&&(n.lists=r.lists),r.listInfo&&(n.listInfo=r.listInfo),r}let a=e=>r(e)?r(e).rows:[],o=e=>r(e)&&r(e).removed||[],s=e=>r(e)?r(e).columns:[],c=(e,t)=>s(e).find(e=>e.name===t)||null,l=e=>!!(r(e)&&r(e).canWrite),u=e=>!!(r(e)&&r(e).canRemove),d=e=>!!(r(e)&&r(e).keptYearly),f=e=>e.every(e=>!!r(e)),p=(e,t)=>a(e).find(e=>e.id===t)||null;function ee(e,t){if(t==null||t===``)return``;let n=p(e,t);return n?n._label||n.id:r(e)&&r(e).removedLabels&&r(e).removedLabels[t]||String(t)}let m=e=>n.lists[e]||[],h=()=>n.listInfo;function te(e,t){if(t==null||t===``)return``;let n=m(e).find(e=>e.value===t);return n?n.label||n.value:String(t)}function g(e,t){let n=m(e),r=new Set(_(t)),i=n.filter(e=>e.active!==!1||r.has(e.value)).map(e=>({value:e.value,label:e.label||e.value,active:e.active!==!1}));for(let e of r)n.some(t=>t.value===e)||i.push({value:e,label:String(e),active:!1});return i}function ne(e,t){let n=new Set(_(t)),r=a(e).filter(e=>e.active!==!1||n.has(e.id)).map(e=>({value:e.id,label:e._label||e.id})).sort(we);for(let e of n)r.some(t=>t.value===e)||r.push({value:e,label:String(e)});return r}function re(e,t){let n=r(e);if(!n||!t||!t.id)return;let i=n.rows.findIndex(e=>e.id===t.id);i>=0?n.rows.splice(i,1,t):n.rows.push(t)}async function ie(t,n,r){let i={tab:t,values:n};if(r){i.id=r;let e=p(t,r);e&&e.updated_at&&(i.updatedAt=e.updated_at)}try{let n=await e.call(`records.save`,i);return re(t,n.row),n}catch(n){if(n&&n.code===`conflict`&&r){let i=n.details&&n.details.row;if(!i)try{i=(await e.call(`records.get`,{tab:t,id:r})).row}catch{i=null}i&&(re(t,i),n.row=i)}throw n}}function ae(e,t){let n=r(e);n&&t&&t.id&&(n.rows=n.rows.filter(e=>e.id!==t.id),n.removed=(n.removed||[]).filter(e=>e.id!==t.id),t.removed?(n.canRemove&&n.removed.push(t),n.removedLabels={...n.removedLabels||{},[t.id]:t._label||t.id}):n.rows.push(t))}async function oe(t,n){let r=p(t,n),i={tab:t,id:n};r&&r.updated_at&&(i.updatedAt=r.updated_at);let a=await e.call(`records.remove`,i);return ae(t,a.row),a}async function se(t,n){let r=await e.call(`records.restore`,{tab:t,id:n});return ae(t,r.row),r}let ce=(t,n)=>e.call(`records.history`,{tab:t,id:n});function le(){n.year=null,n.tabs={},n.lists={},n.listInfo=null}return{state:n,load:i,has:f,rows:a,removedRows:o,columns:s,column:c,canWrite:l,canRemove:u,keptYearly:d,byId:p,label:ee,list:m,listInfo:h,listLabel:te,options:g,refOptions:ne,put:re,save:ie,remove:oe,restore:se,history:ce,clear:le}}function Ee(e){let t=String(e||``).replace(/_member_id$/,``).replace(/_(id|ids|pence)$/,``).replace(/_/g,` `).trim();return t?t[0].toUpperCase()+t.slice(1):``}var v=e=>e&&e.label||Ee(e&&e.name);function De(e){let t=String(e&&e.description||``).trim();return!t||t.toLowerCase()===v(e).toLowerCase()?``:t.replace(/^TRUE:\s*/,`Ticked: `).replace(/^FALSE:\s*/,`Unticked: `)}var Oe=e=>Ee(String(e??``))||``,ke=/^(-)?£?(-)?(\d{1,3}(?:,\d{3})+|\d+)?(?:\.(\d{1,2}))?$/;function Ae(e){if(typeof e==`number`)return Number.isFinite(e)?Math.round(e*100):NaN;let t=String(e??``).replace(/\s+/g,``);if(!t)return null;let n=ke.exec(t);if(!n||n[1]&&n[2]||!n[3]&&!n[4])return NaN;let r=n[3]?Number(n[3].replace(/,/g,``)):0,i=n[4]?Number(n[4].padEnd(2,`0`)):0,a=r*100+i;return Number.isSafeInteger(a)?n[1]||n[2]?-a:a:NaN}var je=new Intl.NumberFormat(Ce,{style:`currency`,currency:`GBP`});function Me(e){return e==null||e===``||!Number.isFinite(Number(e))?``:je.format(Number(e)/100)}function Ne(e){if(e==null||e===``||!Number.isFinite(Number(e)))return``;let t=Number(e),n=t<0?`-`:``,r=Math.abs(t),i=Math.floor(r/100),a=r%100;return a?`${n}${i}.${String(a).padStart(2,`0`)}`:`${n}${i}`}var Pe=/^(\d{4})-(\d{2})-(\d{2})$/,Fe=/^([01]\d|2[0-3]):([0-5]\d)$/;function Ie(e){let t=Pe.exec(e);if(!t)return!1;let n=new Date(Date.UTC(+t[1],t[2]-1,+t[3]));return n.getUTCFullYear()===+t[1]&&n.getUTCMonth()===t[2]-1&&n.getUTCDate()===+t[3]}function y(t,n,r={}){if(!t)return n==null?``:String(n);let i=r.listLabel||((e,t)=>t),a=r.refLabel||((e,t)=>t);switch(t.type){case`pence`:return Me(n);case`int`:return n==null||n===``?``:new Intl.NumberFormat(Ce).format(Number(n));case`bool`:return n?`Yes`:`No`;case`date`:return e(n);case`datetime`:return m(n,r.timeZone);case`time`:return typeof n==`string`?n.slice(0,5):``;case`list`:return n==null||n===``?``:i(t.list,n)||``;case`lists`:return _(n).map(e=>i(t.list,e)).join(`, `);case`ref`:return n?a(t.ref,n):``;case`refs`:return _(n).map(e=>a(t.ref,e)).join(`, `);case`enum`:return n?Oe(n):``;case`json`:return n==null?``:JSON.stringify(n);default:return n==null?``:String(n)}}function Le(e,t){if(!e||typeof t!=`string`||!t.trim())return null;let n=t.trim();if(e.type===`email`)return/^[^\s@]+@[^\s@]+$/.test(n)?`mailto:${n}`:null;if(e.type===`url`||e.type===`drive_file`){if(/^https?:\/\//i.test(n))return n;if(e.type===`drive_file`&&/^[A-Za-z0-9_-]{20,}$/.test(n))return`https://drive.google.com/open?id=${n}`}return null}function Re(e,t){switch(e.type){case`pence`:return Ne(t);case`int`:return t==null?``:String(t);case`bool`:return!!t;case`lists`:case`refs`:return _(t).slice();case`json`:return t==null?``:JSON.stringify(t,null,2);case`datetime`:return ze(t);default:return t==null?``:String(t)}}function ze(e){let t=Date.parse(e);if(typeof e!=`string`||Number.isNaN(t))return``;let n=new Date(t),r=e=>String(e).padStart(2,`0`);return`${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}T${r(n.getHours())}:${r(n.getMinutes())}`}var b={value:null},x=e=>({error:e});function Be(e,t){let n=typeof t==`string`?t.trim():t;switch(e.type){case`bool`:return{value:!!t};case`lists`:case`refs`:return{value:_(t).map(String).filter(e=>e.trim())};case`int`:{if(n==null||n===``)return b;let e=String(n).replace(/,/g,``);return/^-?\d+$/.test(e)&&Number.isSafeInteger(Number(e))?{value:Number(e)}:x(`Enter a whole number.`)}case`pence`:{let e=Ae(n);return e===null?b:Number.isNaN(e)?x(`Enter an amount in pounds, like 1,250.50`):{value:e}}case`date`:return n?Ie(n)?{value:n}:x(`Enter a date.`):b;case`time`:return n?Fe.test(n)?{value:n}:x(`Enter a time, like 18:30.`):b;case`datetime`:{if(!n)return b;let e=Date.parse(n);return Number.isNaN(e)?x(`Enter a date and time.`):{value:new Date(e).toISOString()}}case`json`:if(!n)return b;try{return{value:JSON.parse(n)}}catch{return x(`This is not valid JSON.`)}case`email`:return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?{value:n}:x(`Enter an email address.`):b;case`url`:return n?/^https?:\/\/\S+$/i.test(n)?{value:n}:x(`Enter a web address starting with https://`):b;default:return n==null||n===``?b:{value:String(n)}}}var Ve=e=>e==null||e===``||Array.isArray(e)&&!e.length,He=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t??null);function Ue(e,t,n){let r={},i={};for(let a of e){if(!a.writable||Se(a.name)||a.name.startsWith(`_`))continue;let e=Be(a,t[a.name]);e.error?i[a.name]=e.error:a.required&&a.type!==`bool`&&Ve(e.value)?i[a.name]=`Please fill this in.`:n&&He(e.value,We(a,n[a.name]))||(r[a.name]=e.value)}return{values:r,errors:i}}function We(e,t){return e.type===`bool`?!!t:e.type===`lists`||e.type===`refs`?_(t):t===``?null:t}function Ge(e,t={}){let n={};for(let r of e)n[r.name]=Re(r,t[r.name]??null);return n}function S(e,t){let n={};for(let r of e)n[r.name]=Re(r,t?t[r.name]:null);return n}var C=Te(i,{wrap:e=>h.reactive(e)}),w=h.reactive({member:null}),Ke=12e3,qe=4e3,Je=4e3;function Ye({setTimer:e=setTimeout,clearTimer:t=clearTimeout}={}){let n=null,r=null,i=()=>{n&&t(n),n=null};return{shown:!1,text:``,canUndo:!1,busy:!1,seq:0,show(t,a=null,o=a?Ke:Je){i(),this.text=t,r=typeof a==`function`?a:null,this.canUndo=!!r,this.busy=!1,this.shown=!0,this.seq+=1;let s=this.seq;n=e(()=>{this.seq===s&&this.dismiss()},o)},hold(){i()},release(){if(!this.shown||this.busy||n)return;let t=this.seq;n=e(()=>{this.seq===t&&this.dismiss()},qe)},dismiss(){i(),this.shown=!1,this.canUndo=!1,r=null},async undo(){if(!r||this.busy)return;let e=r;i(),this.busy=!0;try{await e(),this.show(`Undone.`)}catch(e){this.show(e&&e.message||`Could not undo. Please try again.`)}}}}var Xe=`
  <section>
    <div class="card"><div class="empty">
      <div class="ic" x-html="icon(current.icon)"></div>
      <h3 x-text="current.title"></h3>
      <p class="muted" x-text="'Built in ' + current.epic + '.'"></p>
    </div></div>
  </section>`,Ze=`__none`,Qe=e=>e==null||e===``||Array.isArray(e)&&!e.length,$e=e=>String(e??``).toLocaleLowerCase(`en-GB`).normalize(`NFD`).replace(/[̀-ͯ]/g,``);function et(e,t,n){let r=$e(t).split(/\s+/).filter(Boolean);return r.length?e.filter(e=>{let t=$e(n(e));return r.every(e=>t.includes(e))}):e}var T=e=>Array.isArray(e)?e:e===``||e==null?[]:[e];function tt(e,t,n){let r=Object.entries(t||{}).map(([e,t])=>[e,T(t)]).filter(([,e])=>e.length);if(!r.length)return e;let i=e=>((n||[]).find(t=>t.name===e)||{}).type,a=(e,t,n)=>{let r=e[t],a=i(t);return n===`__none`?Qe(r)||a===`bool`&&!r:a===`bool`?String(!!r)===String(n):Array.isArray(r)?r.includes(n):r===n};return e.filter(e=>r.every(([t,n])=>n.some(n=>a(e,t,n))))}function nt(e,t,{text:n,listOrder:r}={}){let i=t[e.name];if(Qe(i)&&e.type!==`bool`)return null;switch(e.type){case`int`:case`pence`:return Number(i);case`bool`:return+!!i;case`date`:case`time`:case`datetime`:return String(i);case`list`:{let t=r?r(e.list).indexOf(i):-1;return t>=0?t:1e6}default:return $e(n?n(t,e):i)}}function rt(e,t,n=`asc`,r={}){if(!t)return e.slice();let i=n===`desc`?-1:1,a=e.map((e,n)=>({r:e,i:n,k:nt(t,e,r)}));return a.sort((e,t)=>e.k===null||t.k===null?e.k===t.k?e.i-t.i:e.k===null?1:-1:e.k<t.k?-i:e.k>t.k?i:e.i-t.i),a.map(e=>e.r)}function it(e,t,n){let r=n.map(e=>({value:e.value,label:e.label,rows:[]})),i=e=>r.find(t=>t.value===e),a=null;for(let n of e){let e=n[t];if(Qe(e)){a||={value:Ze,label:`Not set`,rows:[]},a.rows.push(n);continue}let o=i(e);o||(o={value:e,label:String(e),rows:[]},r.push(o)),o.rows.push(n)}return a?r.concat(a):r}var at={string:`input`,email:`input`,url:`input`,color:`input`,drive_file:`input`,text:`textarea`,int:`number`,pence:`money`,date:`date`,time:`time`,datetime:`datetime`,bool:`check`,list:`select`,enum:`select`,lists:`checks`,ref:`ref`,refs:`checks`,json:`textarea`};function ot(e){return!e||!e.writable?`readonly`:at[e.type]||`input`}var st={email:`email`,url:`url`};function ct(e){if(!e||!e.tab)throw Error("record screen: `tab` missing");let t=e.noun||`record`;return{tab:e.tab,load:e.load&&e.load.length?e.load.slice():[e.tab],list:e.list&&e.list.length?e.list.slice():[`_label`],form:e.form?e.form.slice():null,filters:e.filters?e.filters.slice():[],sort:e.sort||e.list&&e.list[0]||`_label`,dir:e.dir===`desc`?`desc`:`asc`,groupBy:e.groupBy||null,ownList:!!e.ownList,ownTasks:!!e.ownTasks,statusCol:e.statusCol||null,groupable:e.groupable?e.groupable.slice():null,noun:t,nouns:e.nouns||`${t}s`,defaults:{...e.defaults||{}},empty:e.empty||`No ${e.nouns||`${t}s`} yet.`}}var lt={name:`_label`,label:`Name`,type:`string`,writable:!1};function E(e,t){return(e||[]).map(e=>e===`_label`?lt:t.find(t=>t.name===e)).filter(Boolean)}var ut=[`bool`,`int`,`pence`,`date`,`time`,`datetime`],dt={enum:`12rem`,list:`12rem`,ref:`14rem`},ft={lists:[`8rem`,1.3],refs:[`8rem`,1.3],email:[`10rem`,1.6],url:[`8rem`,1.3],text:[`10rem`,1.8],string:[`6.5rem`,1.1]},pt=[`9rem`,2.2];function mt(e,t=!1){let n=e&&e.type;if(!t&&ut.includes(n))return`max-content`;if(!t&&dt[n])return`fit-content(${dt[n]})`;let[r,i]=t?pt:ft[n]||ft.string;return`minmax(${r},${i}fr)`}var ht=`2.25rem`,gt=(e,t=!1)=>e.map((e,t)=>mt(e,t===0)).concat(t?[ht]:[]).join(` `),_t=[`int`,`pence`,`date`,`datetime`,`time`],vt=e=>!!e&&_t.includes(e.type),yt=7340032,bt=41943040,xt=1600,St=.85,Ct={SponsorYear:`file_kind_sponsors`,SupplierYear:`file_kind_suppliers`,Meetings:`file_kind_meetings`},D=`Images`,wt=12e4,O={"image/jpeg":{kind:`image`,ext:[`jpg`,`jpeg`]},"image/png":{kind:`image`,ext:[`png`]},"image/webp":{kind:`image`,ext:[`webp`]},"image/gif":{kind:`image`,ext:[`gif`]},"application/pdf":{kind:`document`,ext:[`pdf`]},"application/msword":{kind:`document`,ext:[`doc`]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{kind:`document`,ext:[`docx`]},"application/vnd.ms-excel":{kind:`document`,ext:[`xls`]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{kind:`document`,ext:[`xlsx`]},"application/vnd.ms-powerpoint":{kind:`document`,ext:[`ppt`]},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{kind:`document`,ext:[`pptx`]},"text/plain":{kind:`document`,ext:[`txt`]},"text/csv":{kind:`document`,ext:[`csv`]}},Tt=e=>{let t=/\.([A-Za-z0-9]{1,5})$/.exec(String(e||``));return t?t[1].toLowerCase():``};function Et(e){let t=String(e&&e.type||``).toLowerCase();if(O[t])return t;let n=Tt(e&&e.name);return Object.keys(O).find(e=>O[e].ext.includes(n))||t}var Dt=e=>O[e]?O[e].kind:null,Ot=e=>!!e&&(e.name===`folder`||/_folder$/.test(e.name));function kt(e,t){return!e||e.type!==`drive_file`||!e.writable||Ot(e)?null:t===`Images`?`images`:`all`}function At(e){let t=Object.keys(O).filter(t=>e===`all`||O[t].kind===`image`);return t.concat(t.flatMap(e=>O[e].ext.map(e=>`.${e}`))).join(`,`)}function jt(e,t=!0){let n=t?`, or paste a Google Drive link`:``;return e===`all`?`Upload a picture or a document (PDF, Word, Excel, PowerPoint, text or CSV, up to 7 MB)${n}.`:e===`images`?`Upload a picture (JPEG, PNG, WebP or GIF)${n}.`:``}var Mt=e=>`${Math.round(e/1048576*10)/10} MB`;function Nt(e,t){if(!e)return{error:`Choose a file first.`};let n=Et(e),r=Dt(n);if(!r)return{error:`This kind of file cannot be uploaded. Use a picture (JPEG, PNG, WebP, GIF), a PDF, or a Word, Excel, PowerPoint, text or CSV file.`};if(!t)return{error:`You cannot upload here.`};if(r===`document`&&t!==`all`)return{error:`Only pictures can be uploaded here.`};if(!e.size)return{error:`The file is empty.`};let i=r===`image`&&n!==`image/gif`?bt:yt;return e.size>i?{error:`The file is ${Mt(e.size)}. The most is ${Mt(i)}.`}:{mimeType:n,kind:r}}function Pt(e,t,n=xt){let r=Math.max(1,Math.round(e)),i=Math.max(1,Math.round(t)),a=Math.min(1,n/Math.max(r,i));return{width:Math.max(1,Math.round(r*a)),height:Math.max(1,Math.round(i*a)),scaled:a<1}}function Ft(e,t){let n=String(e||``).split(/[\\/]/).pop().trim()||`file`,r=(O[t]||{}).ext||[],i=Tt(n);return!r.length||r.includes(i)?n:`${(i?n.slice(0,-(i.length+1)):n)||`file`}.${r[0]}`}function It(e,t,n){if(e&&typeof e.put==`function`){e.put(t,n);return}let r=e&&e.state&&e.state.tabs;if(!r||!n||!n.id)return;let i=r[r[t]?t:t.startsWith(`system/`)?t.slice(7):`system/${t}`];if(!i)return;let a=i.rows.findIndex(e=>e.id===n.id);a>=0?i.rows.splice(a,1,n):i.rows.push(n)}async function Lt(e){if(typeof createImageBitmap==`function`)try{return await createImageBitmap(e,{imageOrientation:`from-image`})}catch{}let t=URL.createObjectURL(e);try{let e=new Image;return e.src=t,await e.decode(),e}finally{URL.revokeObjectURL(t)}}function Rt(e,t,n){let r=e.getImageData(0,0,t,n).data;for(let e=3;e<r.length;e+=4)if(r[e]<255)return!0;return!1}var zt=(e,t,n)=>new Promise((r,i)=>{e.toBlob(e=>e?r(e):i(Error(`The picture could not be prepared.`)),t,n)});async function Bt(e,t){if(Dt(t)!==`image`||t===`image/gif`){if(e.size>7340032)throw Error(`The file is ${Mt(e.size)}. The most is ${Mt(yt)}.`);return{blob:e,mimeType:t,name:Ft(e.name,t)}}let n;try{n=await Lt(e)}catch{throw Error(`This picture could not be opened. Try saving it as a JPEG first.`)}let r=Pt(n.width,n.height),i=document.createElement(`canvas`);i.width=r.width,i.height=r.height;let a=i.getContext(`2d`);a.drawImage(n,0,0,r.width,r.height),typeof n.close==`function`&&n.close();let o=t!==`image/jpeg`&&Rt(a,r.width,r.height),s=o?`image/png`:`image/jpeg`,c=await zt(i,s,o?void 0:St);if(!r.scaled&&e.size<=7340032&&e.size<=c.size)return{blob:e,mimeType:t,name:Ft(e.name,t)};if(c.size>7340032)throw Error(`This picture is still too large after shrinking. Try a smaller one.`);return{blob:c,mimeType:s,name:Ft(e.name,s)}}async function Vt(e){let t=new Uint8Array(await e.arrayBuffer()),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode.apply(null,t.subarray(e,e+32768));return btoa(n)}async function Ht({api:e,records:t,file:n,kind:r,target:i,onStage:a=()=>{}}){let o=Nt(n,r);if(o.error)throw Object.assign(Error(o.error),{code:`bad_request`});a(`Getting the file ready...`);let s=await Bt(n,o.mimeType),c=await Vt(s.blob);a(`Uploading...`);let l={...i,fileName:s.name,mimeType:s.mimeType,dataBase64:c};Object.keys(l).forEach(e=>{(l[e]==null||l[e]===``)&&delete l[e]});try{let n=await e.call(`files.upload`,l,{retry:!1,timeoutMs:wt});return It(t,i.tab,n.row),n}catch(e){throw e&&e.code===`conflict`&&e.details&&e.details.row&&It(t,i.tab,e.details.row),e}}async function Ut({api:e,title:t,comment:n,link:r,file:i,onStage:a=()=>{}}){let o={title:t,comment:n};if(!i)return e.call(`files.addOther`,{...o,link:r},{retry:!1});let s=Nt(i,`all`);if(s.error)throw Object.assign(Error(s.error),{code:`bad_request`});a(`Getting the file ready...`);let c=await Bt(i,s.mimeType),l=await Vt(c.blob);return a(`Uploading...`),e.call(`files.addOther`,{...o,fileName:c.name,mimeType:c.mimeType,dataBase64:l},{retry:!1,timeoutMs:wt})}var Wt=e=>String(e||``).replace(/^system\//,``),Gt={SponsorYear:`Sponsor`,Contacts:`Company`,ContactPeople:`Contact person`,Tiers:`Tier`,Donations:`Donation`,SupplierYear:`Supplier booking`,Suppliers:`Supplier`,Meetings:`Meeting`,Prizes:`Prize`,Lots:`Lot`,Tasks:`Task`},Kt=e=>Gt[Wt(e)]||`Record`,qt={SponsorYear:{screen:`sponsors`,part:`year`,words:`Open in Sponsors`},Contacts:{screen:`sponsors`,part:`companies`,words:`Open in Sponsors`},Tiers:{screen:`sponsors`,part:`tiers`,words:`Open in Sponsors`},Donations:{screen:`sponsors`,part:`donations`,words:`Open in Sponsors`},SupplierYear:{screen:`suppliers`,part:`year`,words:`Open in Suppliers`},Suppliers:{screen:`suppliers`,part:`all`,words:`Open in Suppliers`},Tasks:{screen:`tasks`,part:``,words:`Open in Tasks`}},Jt=e=>qt[Wt(e)]||null,k=h.reactive({wanted:null});function Yt(e,t){let n=Jt(e);n&&t&&(k.wanted={tab:Wt(e),id:t,screen:n.screen,part:n.part},(location.hash||``).replace(/^#\/?/,``).split(/[/?]/)[0]!==n.screen&&(location.hash=n.screen))}function Xt(e){let t=k.wanted;return!t||t.tab!==Wt(e)?null:(k.wanted=null,t)}var Zt=e=>k.wanted&&k.wanted.screen===e?k.wanted.part:``,Qt=`Tasks`,$t=`done`,en=`todo`,tn=[{tab:`SponsorYear`,label:`Sponsor`},{tab:`SupplierYear`,label:`Supplier`},{tab:`Donations`,label:`Donation`},{tab:`Meetings`,label:`Meeting`},{tab:`Prizes`,label:`Prize`}],nn=e=>(tn.find(t=>t.tab===e)||{}).label||String(e||``),rn=e=>String(e).padStart(2,`0`),an=e=>`${e.getFullYear()}-${rn(e.getMonth()+1)}-${rn(e.getDate())}`;function on(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||``));return t?new Date(Date.UTC(+t[1],t[2]-1,+t[3])):null}var sn=e=>e.toISOString().slice(0,10);function cn(e,t){let n=on(e);return n?(n.setUTCDate(n.getUTCDate()+t),sn(n)):``}function ln(e){let t=on(e);return t?cn(e,7-(t.getUTCDay()||7)):``}var A=e=>String(e).slice(0,7);function un(e){let[t,n]=e.split(`-`).map(Number);return n===12?`${t+1}-01`:`${t}-${rn(n+1)}`}function dn(e){let[t,n]=e.split(`-`).map(Number);return new Intl.DateTimeFormat(`en-GB`,{month:`long`,year:`numeric`,timeZone:`UTC`}).format(new Date(Date.UTC(t,n-1,1)))}function fn(e,t){return!e||!e.due||e.status===`done`||!t?``:e.due<t?`overdue`:e.due<=cn(t,7)?`soon`:``}var pn=(e=new Date)=>({status:$t,done_at:e.toISOString()});function mn(e,t=new Date){return e?e.status===`done`&&!e.done_at?{done_at:t.toISOString()}:e.status!==`done`&&e.done_at?{done_at:null}:null:null}function hn(e,t){let n={status:en};if(!e||!e.id)return n;let r=(t||[]).find(t=>t.id===e.id);return r&&(n.owner_member_id=r.id),n}var gn=(e,t)=>e.length>t?`${e.slice(0,t-1).trimEnd()}...`:e;function _n(t,n,r){if(!r)return``;switch(n){case`SponsorYear`:return t.label(`system/Contacts`,r.contact_id)||r._label||r.id;case`SupplierYear`:{let e=t.label(`system/Suppliers`,r.supplier_id)||r.id,i=t.column(n,`area`),a=r.area?t.listLabel(i&&i.list||`supplier_area`,r.area):``;return a?`${e} (${a})`:e}case`Donations`:return[r.contact_id?t.label(`system/Contacts`,r.contact_id):``,gn(String(r.what||``).trim(),40)].filter(Boolean).join(`, `)||r.id;case`Meetings`:return[e(r.date),r.location].filter(Boolean).join(`, `)||r.id;case`Prizes`:return r.title||r._label||r.id;default:return r._label||r.id}}function vn(e,t){if(!t||!t.linked_tab)return``;let n=nn(t.linked_tab);if(!t.linked_id)return n;let r=e.byId(t.linked_tab,t.linked_id);return r?`${n}: ${_n(e,t.linked_tab,r)}`:e.columns(t.linked_tab).length?`${n}: record not found`:n}function yn(e,t,{current:n=``,query:r=``}={}){if(!t)return[];let i=e.rows(t).slice();t===`Meetings`&&i.sort((e,t)=>String(e.date||``).localeCompare(String(t.date||``)));let a=i.map(n=>({value:n.id,label:_n(e,t,n)}));t!==`Meetings`&&a.sort((e,t)=>e.label.localeCompare(t.label,`en-GB`,{sensitivity:`base`}));let o=String(r||``).trim().toLowerCase();return o&&(a=a.filter(e=>e.value===n||e.label.toLowerCase().includes(o))),n&&!a.some(e=>e.value===n)&&a.unshift({value:n,label:`Record not found`}),a}function bn(e,t,n){let r=(e||[]).filter(e=>e.status!==$t),i=ln(t),a=A(t),o=r.filter(e=>e.due&&e.due>i).map(e=>A(e.due)).sort(),s=n&&/^\d{4}-\d{2}/.test(n)?A(n):o[o.length-1]||a;s<a&&(s=o[o.length-1]||a);let c={key:`overdue`,label:`Overdue`,rows:[]},l={key:`week`,label:`This week`,rows:[]},u={key:`month`,label:`This month`,rows:[]},d=[];for(let e=un(a);e<=s;e=un(e))d.push({key:e,label:dn(e),rows:[]});let f={key:`later`,label:`Later`,rows:[]},p={key:`none`,label:`No date`,rows:[]};for(let e of r)e.due?e.due<t?c.rows.push(e):e.due<=i?l.rows.push(e):A(e.due)===a?u.rows.push(e):(d.find(t=>t.key===A(e.due))||f).rows.push(e):p.rows.push(e);let ee=(e,t)=>String(e.due||``).localeCompare(String(t.due||``)),m=[c,l,u,...d,f,p];m.forEach(e=>e.rows.sort(ee));let h=A(cn(i,1))!==a,te=[c,f,p].concat(h?[u]:[]);return m.filter(e=>e.rows.length||!te.includes(e))}var xn=[`list`,`lists`,`enum`,`ref`,`refs`,`bool`],Sn=[`list`,`enum`,`ref`,`bool`],Cn=`__all`,wn=80,Tn=0,En=(e,t)=>{let n=t?C.byId(e,t):null;return n?_n(C,String(e).replace(/^system\//,``),n):C.label(e,t)},j={listLabel:(e,t)=>C.listLabel(e,t),refLabel:En},M=e=>Object.keys(e||{}),Dn=[`active`,`removed`],N=e=>!Dn.includes(e.name),P=()=>h.store(`toast`),F=e=>`"${e}"`,On={added:`Added`,removed:`Removed`,restored:`Brought back`,inactive:`Made inactive`,active:`Made active again`},kn=[`SponsorYear`,`SupplierYear`,`Donations`,`Meetings`,`Prizes`],I=e=>String(e||``).replace(/^system\//,``),An=e=>String(e??``).toLocaleLowerCase(`en-GB`).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``),jn=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t??null)||(e==null||e===``||Array.isArray(e)&&!e.length)&&(t==null||t===``||Array.isArray(t)&&!t.length);function Mn(e){return e===`int`||e===`pence`?[`Lowest first`,`Highest first`]:e===`date`||e===`datetime`||e===`time`?[`Earliest first`,`Latest first`]:e===`list`?[`In list order`,`Reverse order`]:e===`bool`?[`No first`,`Yes first`]:[`A to Z`,`Z to A`]}function L(t){let n=ct(t),r={cfg:n,uid:++Tn,status:`loading`,loadError:``,q:``,filters:Object.fromEntries(n.filters.map(e=>[e,[]])),sortCol:n.sort,sortDir:n.dir,group:n.groupBy||``,folded:{},panel:{open:!1,mode:`view`,id:null},form:{},errors:{},message:``,saving:!1,showInactive:!1,removedOpen:!1,hist:{id:null,status:`idle`,entries:[],removeBlocked:``,error:``},putBack:null,acting:!1,menu:{row:null,mode:`row`,style:{}},pick:{key:``,q:``,i:0},peeks:[],init(){this.reload(),this.$watch(()=>k.wanted,()=>this.openWanted()),this.closeMenuOnMove=e=>{e.target&&e.target.closest&&e.target.closest(`.amenu`)||this.closeMenu()},window.addEventListener(`scroll`,this.closeMenuOnMove,!0),window.addEventListener(`resize`,this.closeMenuOnMove)},destroy(){window.removeEventListener(`scroll`,this.closeMenuOnMove,!0),window.removeEventListener(`resize`,this.closeMenuOnMove)},async reload(){let e=C.has(n.load);this.status=e?`ready`:`loading`;try{await C.load(n.load),this.status=`ready`,this.openWanted()}catch(t){if(e)return;this.loadError=t.message||`Could not load.`,this.status=`error`}},get canWrite(){return C.canWrite(n.tab)},get cols(){return C.columns(n.tab)},get listCols(){return E(n.list,this.cols).filter(N)},get formCols(){return E(n.form||this.cols.map(e=>e.name),this.cols).filter(e=>!Se(e.name)&&e.name!==`_label`&&N(e))},get fieldCols(){return t.ownField?this.formCols.filter(e=>!t.ownField(e.name)):this.formCols},get editCols(){return this.fieldCols.filter(e=>e.writable||this.panel.id)},get filterCols(){return E(n.filters,this.cols).filter(e=>xn.includes(e.type)&&N(e))},get groupCol(){return this.group&&this.groupableCols.find(e=>e.name===this.group)||null},get groupableCols(){let e=n.groupable||[...n.filters,...n.list,...n.groupBy?[n.groupBy]:[]];return E([...new Set(e)],this.cols).filter(e=>Sn.includes(e.type)&&!e.computed&&N(e))},label:v,hint:De,filterValues:T,cell(e,t){return!e||!t?``:t.name===`_label`?this.rowLabel(e):y(t,e[t.name],j)},link(e,t){return t?Le(e,t[e.name]):null},rowLabel(e){return t.rowLabel&&t.rowLabel(e)||_n(C,I(n.tab),e)},get activeCol(){return this.cols.find(e=>e.name===`active`)||null},get canInactive(){return!!(this.activeCol&&this.activeCol.writable)},isInactive(e){return!!e&&e.active===!1},get inactiveCount(){return this.activeCol?C.rows(n.tab).filter(e=>e.active===!1).length:0},get baseRows(){let e=C.rows(n.tab);return this.activeCol&&!this.showInactive?e.filter(e=>e.active!==!1):e},get removedList(){return[...C.removedRows(n.tab)].sort((e,t)=>String(this.rowLabel(e)).localeCompare(String(this.rowLabel(t)),`en-GB`))},removedText(e){let t=this.who(e.updated_by);return`Removed${t?` by ${t}`:``}${e.updated_at?`, ${m(e.updated_at)}`:``}`},get canRemoveHere(){return!C.canRemove(n.tab)||!this.record?!1:!C.keptYearly(n.tab)||this.hist.id===this.record.id&&this.hist.status===`ready`&&!this.hist.removeBlocked},async removeRecord(e=this.record){if(this.closeMenu(),e&&!this.acting){this.acting=!0,this.message=``;try{await C.remove(n.tab,e.id),this.panel.id===e.id&&(this.panel.open=!1,this.panel.mode=`view`),P().show(`Removed ${F(this.rowLabel(e))}.`,async()=>{await C.restore(n.tab,e.id)})}catch(t){this.problem(e,t.message||`Could not remove. Please try again.`)}finally{this.acting=!1}}},async restoreRecord(e){if(!this.acting){this.acting=!0;try{await C.restore(n.tab,e.id),P().show(`Brought back ${F(this.rowLabel(e))}.`,async()=>{await C.remove(n.tab,e.id)})}catch(e){P().show(e.message||`Could not bring it back. Please try again.`)}finally{this.acting=!1}}},async toggleActive(e=this.record){if(this.closeMenu(),!e||this.acting)return;let t=e.active===!1;this.acting=!0,this.message=``;try{await C.save(n.tab,{active:t},e.id);let r=F(this.rowLabel(e));P().show(t?`Made ${r} active again.`:`Made ${r} inactive.`,async()=>{await C.save(n.tab,{active:!t},e.id),this.historyAfterUndo(e.id)}),this.historyAfterUndo(e.id)}catch(t){this.problem(e,t.message||`Could not change it. Please try again.`)}finally{this.acting=!1}},problem(e,t){this.panel.open&&this.panel.id===e.id&&this.panel.mode===`view`&&!this.peeks.length?this.message=t:P().show(t)},get hasMenu(){return this.canWrite||C.canRemove(n.tab)},get canRemoveTab(){return C.canRemove(n.tab)},get statusCol(){let e=n.statusCol||`status`,t=this.cols.find(t=>t.name===e);return t&&(t.type===`list`||t.type===`enum`)?t:null},get canStatus(){return!!(this.canWrite&&this.statusCol&&this.statusCol.writable)},isStatusCol(e){return!!(e&&this.statusCol&&e.name===this.statusCol.name)},isStatusField(e){return!!(e&&this.canStatus&&e.name===this.statusCol.name)},get statusOptions(){let e=this.statusCol;return e?e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Oe(e)})):C.options(e.list,this.menu.row?this.menu.row[e.name]:void 0):[]},statusText(e){return e&&this.statusCol?y(this.statusCol,e[this.statusCol.name],j)||`Not set`:``},openMenu(e,t,n=`row`){let r=this.menu.row&&this.menu.row.id===e.id&&this.menu.mode===n;if(this.closeMenu(),r)return;let i=t.currentTarget.getBoundingClientRect(),a=n===`status`?{left:`${Math.max(8,i.left)}px`}:{right:`${Math.max(8,window.innerWidth-i.right)}px`},o=window.innerHeight-i.bottom;o<320&&i.top>o?a.bottom=`${window.innerHeight-i.top+4}px`:a.top=`${i.bottom+4}px`,this.menu={row:e,mode:n,style:a},this.$nextTick(()=>{let e=this.$root.querySelector(`.amenu button:not([disabled])`);e&&e.focus()})},closeMenu(){this.menu.row&&(this.menu={row:null,mode:`row`,style:{}})},menuOpen(){let e=this.menu.row;this.closeMenu(),e&&this.open(e)},menuEdit(){let e=this.menu.row;this.closeMenu(),e&&(this.open(e),this.edit())},async setStatus(e,r){this.closeMenu();let i=this.statusCol;if(!e||!i||this.acting||e[i.name]===r)return;let a=t.statusValues?t.statusValues(e,r):{[i.name]:r},o=Object.fromEntries(M(a).map(t=>[t,e[t]??null]));this.acting=!0;try{let{row:s}=await C.save(n.tab,a,e.id);P().show(`${F(this.rowLabel(s))} is now ${y(i,r,j)}.`,async()=>{await C.save(n.tab,o,e.id),this.historyAfterUndo(e.id)}),this.historyAfterUndo(e.id),t.afterSave&&await t.afterSave.call(this,s,!1)}catch(t){this.problem(e,t.message||`Could not change the status. Please try again.`)}finally{this.acting=!1}},pickCol(e){return this.formCols.find(t=>t.name===e)||null},pickOptions(e){let t=this.pickCol(e);return t?C.refOptions(t.ref,this.form[e]):[]},pickValue(e){return this.form[e]??``},pickSet(e,t){this.form[e]=t},pickLabel(e){let t=this.pickValue(e);if(!t)return``;let n=this.pickOptions(e).find(e=>e.value===t);return n?n.label:String(t)},pickMatches(e){let t=An(this.pick.key===e?this.pick.q:``).split(/\s+/).filter(Boolean),n=this.pickOptions(e).filter(e=>t.every(t=>An(e.label).includes(t))),r=null;return n.slice(0,wn).map(e=>{let t=!!e.group&&e.group!==r;return r=e.group,{...e,head:t}})},pickText(e){return this.pick.key===e?this.pick.q:this.pickLabel(e)},pickOpen(e){this.pick={key:e,q:``,i:0}},pickClose(e){this.pick.key===e&&(this.pick={key:``,q:``,i:0})},pickInput(e,t){this.pick={key:e,q:t.target.value,i:0}},pickChoose(e,t,n){if(this.pickSet(e,t),this.pick={key:``,q:``,i:0},n&&n.target&&n.target.closest){let e=n.target.closest(`.combo`)&&n.target.closest(`.combo`).querySelector(`input`);e&&e.blur()}},pickClear(e){this.pickSet(e,``)},pickKey(e,t){if(this.pick.key!==e){t.key===`ArrowDown`&&this.pickOpen(e);return}let n=this.pickMatches(e).length;if(t.key===`ArrowDown`)t.preventDefault(),this.pick.i=Math.min(n-1,this.pick.i+1);else if(t.key===`ArrowUp`)t.preventDefault(),this.pick.i=Math.max(0,this.pick.i-1);else if(t.key===`Enter`){t.preventDefault();let n=this.pickMatches(e)[this.pick.i];n&&this.pickChoose(e,n.value,t)}else t.key===`Escape`&&(t.stopPropagation(),this.pickClose(e))},refTarget(e,t){if(!e||!t)return null;if(e.name===`linked_tab`){let e=t.linked_tab;return e&&t.linked_id&&C.byId(e,t.linked_id)?{tab:e,id:t.linked_id}:null}if(e.type!==`ref`||I(e.ref)===`Members`)return null;let n=t[e.name];return n&&C.byId(e.ref,n)?{tab:e.ref,id:n}:null},get peekTop(){return this.peeks.length?this.peeks[this.peeks.length-1]:null},get peekRow(){return this.peekTop?C.byId(this.peekTop.tab,this.peekTop.id):null},get peekNoun(){return this.peekTop?Kt(this.peekTop.tab):``},get peekTitle(){return this.peekTop?En(this.peekTop.tab,this.peekTop.id):``},get backTo(){if(this.peeks.length>1){let e=this.peeks[this.peeks.length-2];return En(e.tab,e.id)||Kt(e.tab).toLowerCase()}return this.panelTitle||n.noun},get peekCols(){let e=this.peekTop,t=this.peekRow;return!e||!t?[]:C.columns(e.tab).filter(e=>!Se(e.name)&&N(e)&&e.name!==`_label`&&e.name!==`linked_id`&&e.type!==`drive_file`&&e.type!==`json`&&!(t[e.name]==null||t[e.name]===``||Array.isArray(t[e.name])&&!t[e.name].length))},peekCell(e){let t=this.peekTop,n=this.peekRow;if(!t||!n)return``;if(e.name===`linked_tab`){let t=this.refTarget(e,n);return t?`${Kt(t.tab)}: ${En(t.tab,t.id)}`:Kt(n.linked_tab)}return y(e,n[e.name],j)},get peekOpenIn(){let e=this.peekTop,t=e&&Jt(e.tab);return t&&f(p.find(e=>e.id===t.screen),w.member)?t:null},async peek(e,t){if(!e||!t||this.panel.mode===`view`&&!this.peeks.length&&I(e)===I(n.tab)&&t===this.panel.id)return;this.closeMenu(),this.peeks=[...this.peeks,{tab:e,id:t}];let r=C.columns(e).filter(e=>e.type===`ref`&&I(e.ref)!==`Members`).map(e=>e.ref),i=[...new Set([...r,...kn.includes(I(e))?[`Tasks`]:[]])].filter(e=>!C.has([e])&&(e!==`Tasks`||this.canSeeTasks));for(let e of i)await C.load([e]).catch(()=>{})},back(){this.peeks=this.peeks.slice(0,-1)},openPeekElsewhere(){let e=this.peekTop;if(e&&this.peekOpenIn){if(this.panel.open=!1,this.peeks=[],I(e.tab)===I(n.tab)){let t=C.byId(n.tab,e.id);t&&this.open(t)}else Yt(e.tab,e.id)}},get canSeeTasks(){return f(p.find(e=>e.id===`tasks`),w.member)},relatedTasks(e,t){let n=I(e);return!t||!kn.includes(n)||!C.has([`Tasks`])?[]:C.rows(`Tasks`).filter(e=>e.linked_tab===n&&e.linked_id===t||n===`Meetings`&&e.meeting_id===t).sort((e,t)=>String(e.due||`9999`).localeCompare(String(t.due||`9999`)))},taskLine(t){return[C.listLabel(`task_status`,t.status),t.due?`due ${e(t.due)}`:``].filter(Boolean).join(`, `)},loadRelatedTasks(){!t.ownTasks&&kn.includes(I(n.tab))&&!C.has([`Tasks`])&&this.canSeeTasks&&C.load([`Tasks`]).catch(()=>{})},async loadHistory(){let e=this.panel.id;if(e){this.hist.id!==e&&(this.hist={id:e,status:`loading`,entries:[],removeBlocked:``,error:``});try{let t=await C.history(n.tab,e);if(this.panel.id!==e)return;this.hist={id:e,status:`ready`,entries:t.entries||[],removeBlocked:t.removeBlocked||``,error:``}}catch(t){if(this.panel.id!==e)return;this.hist={id:e,status:`error`,entries:[],removeBlocked:``,error:t.message||`Could not load the history.`}}}},historyAfterUndo(e){this.panel.open&&this.panel.id===e&&this.loadHistory()},histCol(e){return this.cols.find(t=>t.name===e.field)||null},histValue(e,t){let n=this.histCol(e),r=n?y(n,t,j):t==null?``:String(t);return r===``?`empty`:F(r)},histWho(e){return`${e.by||`Someone`}, ${m(e.at)}`},histText(e){return e.kind===`changed`?`${e.label||e.field}: ${this.histValue(e,e.old)} to ${this.histValue(e,e.new)}`:On[e.kind]||``},canPutBack(e){let t=this.histCol(e);return e.kind===`changed`&&this.canWrite&&!!(t&&t.writable)&&!!this.record&&!jn(this.record[e.field],e.old)},putBackText(e){let t=this.record?this.record[e.field]:null,n=!jn(t,e.new);return`Put ${(e.label||e.field).toLowerCase()} back to ${this.histValue(e,e.old)}? `+(n?`It has changed again since: it is now ${this.histValue(e,t)}.`:`It is now ${this.histValue(e,t)}.`)},async doPutBack(e){let t=this.record;if(!t||this.acting)return;let r=t[e.field];this.acting=!0,this.message=``;try{await C.save(n.tab,{[e.field]:e.old},t.id),this.putBack=null,P().show(`Put ${(e.label||e.field).toLowerCase()} back on ${F(this.rowLabel(t))}.`,async()=>{await C.save(n.tab,{[e.field]:r},t.id),this.historyAfterUndo(t.id)}),this.loadHistory()}catch(e){this.message=e.message||`Could not put it back. Please try again.`}finally{this.acting=!1}},get rows(){let e=tt(this.baseRows,this.filters,this.cols);t.where&&(e=e.filter(e=>t.where.call(this,e))),e=et(e,this.q,e=>this.listCols.map(t=>this.cell(e,t)).join(` `));let n=E([this.sortCol],this.cols)[0];return rt(e,n,this.sortDir,{text:(e,t)=>this.cell(e,t),listOrder:e=>C.list(e).map(e=>e.value)})},get total(){return this.baseRows.length},get countText(){let e=this.rows.length;return e===this.total?`${e} ${(e=>e===1?n.noun:n.nouns)(e)}`:`Showing ${e} of ${this.total} ${n.nouns}`},get gridStyle(){return{"--cols":gt(this.listCols,this.hasMenu)}},isNumber(e){return vt(e)},get listGroups(){let e=this.groupCol;if(!e)return[{value:Cn,label:``,rows:this.rows}];let t;t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Oe(e)})):e.type===`bool`?[{value:!0,label:`Yes`},{value:!1,label:`No`}]:e.type===`ref`?C.refOptions(e.ref):C.options(e.list);let n=e.type===`bool`?this.rows.map(t=>({r:t,k:!!t[e.name]})):null;return(n?t.map(e=>({value:String(e.value),label:e.label,rows:n.filter(t=>t.k===e.value).map(e=>e.r)})):it(this.rows,e.name,t)).filter(e=>e.rows.length)},get grouped(){return!!this.groupCol},isFolded(e){return!!this.folded[e.value]},fold(e){this.folded[e.value]=!this.folded[e.value]},filterOptions(e){let t;return e.type===`bool`?[{value:`true`,label:`Yes`},{value:`false`,label:`No`}]:(t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Oe(e)})):e.type===`ref`||e.type===`refs`?C.refOptions(e.ref):C.list(e.list).map(e=>({value:e.value,label:e.label||e.value})),t.concat({value:Ze,label:`Not set`}))},picked(e,t){return T(this.filters[e.name]).includes(t)},togglePick(e,t){let n=T(this.filters[e.name]);this.filters[e.name]=n.includes(t)?n.filter(e=>e!==t):[...n,t]},clearPick(e){this.filters[e.name]=[]},filterText(e){let t=T(this.filters[e.name]);if(!t.length)return`${v(e)}: all`;if(t.length>1)return`${v(e)}: ${t.length} chosen`;let n=this.filterOptions(e).find(e=>e.value===t[0]);return`${v(e)}: ${n?n.label:t[0]}`},get sortOptions(){return this.listCols},sortBy(e){this.sortCol===e?this.sortDir=this.sortDir===`asc`?`desc`:`asc`:(this.sortCol=e,this.sortDir=`asc`)},flipSort(){this.sortDir=this.sortDir===`asc`?`desc`:`asc`},get sortDirText(){let e=E([this.sortCol],this.cols)[0];return Mn(e&&e.type)[this.sortDir===`asc`?0:1]},get filtered(){return!!this.q.trim()||Object.values(this.filters).some(e=>T(e).length)},clearFilters(){this.q=``;for(let e of M(this.filters))this.filters[e]=[]},get record(){return this.panel.id?C.byId(n.tab,this.panel.id):null},get panelTitle(){return this.panel.id?this.record?this.rowLabel(this.record):``:`New ${n.noun}`},get stamp(){let e=this.record;if(!e||!e.updated_at)return``;let t=this.who(e.updated_by);return`Last changed ${m(e.updated_at)}${t?` by ${t}`:``}`},who(e){if(!e)return``;let t=C.rows(`Members`).find(t=>t.id===e||t.google_email===e);return t&&t._label||e},reset(){this.errors={},this.message=``,this.pick={key:``,q:``,i:0}},open(e){this.reset(),this.putBack=null,this.peeks=[],this.closeMenu(),this.panel={open:!0,mode:`view`,id:e.id},this.loadMoreFiles(),this.loadHistory(),this.loadRelatedTasks()},openWanted(){if(this.status!==`ready`)return;let e=Xt(n.tab),t=e&&C.byId(n.tab,e.id);t&&this.open(t)},moreFiles:[],async loadMoreFiles(){this.moreFiles=[];let e=this.panel.id;if(e&&Ct[n.tab])try{let t=await i.call(`files.forRecord`,{tab:n.tab,id:e});this.panel.id===e&&(this.moreFiles=t.files||[])}catch{}},create(){this.reset(),this.panel={open:!0,mode:`edit`,id:null},this.form=Ge(this.formCols,n.defaults)},edit(){this.canWrite&&this.record&&(this.reset(),this.form=S(this.formCols,this.record),this.panel.mode=`edit`)},get dirty(){if(this.panel.mode!==`edit`)return!1;let e=this.panel.id?S(this.formCols,this.record):Ge(this.formCols,n.defaults);return JSON.stringify(this.form)!==JSON.stringify(e)},cancel(){this.saving||(this.reset(),this.panel.id?this.panel.mode=`view`:this.panel.open=!1)},close(){this.saving||(this.peeks=[],(!this.dirty||window.confirm(`Close without saving your changes?`))&&(this.panel.open=!1,this.panel.mode=`view`))},async save(){if(this.saving)return;let e=this.panel.id?this.record:null,{values:r,errors:i}=Ue(this.formCols,this.form,e);if(this.errors=i,this.message=``,M(i).length)this.message=`Please check the highlighted fields.`;else if(e&&!M(r).length)this.panel.mode=`view`;else{this.saving=!0;try{let i=!this.panel.id,a=e?Object.fromEntries(M(r).map(t=>[t,e[t]??null])):null,{row:o,notice:s}=await C.save(n.tab,r,this.panel.id);this.panel.id=o.id,this.panel.mode=`view`;let c=F(this.rowLabel(o));i?P().show(`Added ${c}.`,C.canRemove(n.tab)?async()=>{await C.remove(n.tab,o.id)}:null):P().show(`Saved ${c}.`,async()=>{await C.save(n.tab,a,o.id),this.historyAfterUndo(o.id)}),this.loadHistory(),s&&(this.message=s),t.afterSave&&await t.afterSave.call(this,o,i)}catch(e){e.code===`conflict`?(this.record&&(this.form=S(this.formCols,this.record)),this.message=e.message||`Someone else changed this record. It has been reloaded.`):e.details&&e.details.fields?(this.errors={...e.details.fields},this.message=e.message||`Please check the highlighted fields.`):this.message=e.message||`Could not save. Please try again.`}finally{this.saving=!1}}},widget:ot,inputType(e){return st[e.type]||`text`},fid(e){return`f${this.uid}-${e.name}`},fieldOptions(e){let t=this.form[e.name];return e.type===`enum`?(e.values||[]).map(e=>({value:e,label:Oe(e)})):e.type===`list`||e.type===`lists`?C.options(e.list,t):C.refOptions(e.ref,t)},uploads:{},replaceFlags:{},uploadKindOf(e){return kt(e,n.tab)},uploadAcceptOf(e){return At(this.uploadKindOf(e))},uploadHintOf(e){return jt(this.uploadKindOf(e))},uploadOf(e){return this.uploads[`${this.panel.id}:${e.name}`]||{}},async uploadPicked(e,t){let r=t.target.files&&t.target.files[0];if(t.target.value=``,!r||!this.panel.id)return;let a=`${this.panel.id}:${e.name}`;this.uploads[a]={busy:!0,text:``,error:``};let o=this.uploads[a],s={tab:n.tab,id:this.panel.id,column:e.name};this.form[e.name]&&this.replaceFlags[a]&&(s.replace=!0),this.record&&this.record.updated_at&&(s.updatedAt=this.record.updated_at);try{let t=await Ht({api:i,records:C,file:r,kind:this.uploadKindOf(e),target:s,onStage:e=>{o.text=e}});t.attached?(o.text=`Uploaded and kept next to the current file (under More files).`,this.loadMoreFiles()):(this.form[e.name]=t.fileId,o.text=`Uploaded and saved on this record.`),this.replaceFlags[a]=!1}catch(e){e.code===`conflict`&&this.record&&(this.form=S(this.formCols,this.record)),o.text=``,o.error=e.message||`Could not upload. Please try again.`}finally{o.busy=!1}}};return t.extend&&Object.defineProperties(r,Object.getOwnPropertyDescriptors(t.extend)),r}var Nn=`
  <div class="rtop">
    <p class="rcount m-0" x-show="status === 'ready' && total" x-text="countText"></p>
    <span class="grow"></span>
    <button class="btn pri" type="button" x-show="canWrite" @click="create()" x-text="'New ' + cfg.noun"></button>
  </div>`,Pn=`
  <div class="rtools">
    <input class="inp rsearch" type="search" placeholder="Search" aria-label="Search" x-model.debounce.150ms="q">
    <template x-for="c in filterCols" :key="c.name">
      <details class="msel" @click.outside="$el.open = false" @keydown.escape="$el.open = false">
        <summary class="inp rsel" :class="{ on: filterValues(filters[c.name]).length }" :aria-label="'Filter by ' + label(c)" x-text="filterText(c)"></summary>
        <div class="mpop">
          <template x-for="o in filterOptions(c)" :key="o.value">
            <label class="fcheck"><input type="checkbox" :checked="picked(c, o.value)" @change="togglePick(c, o.value)"><span x-text="o.label"></span></label>
          </template>
          <button class="btn sm" type="button" x-show="filterValues(filters[c.name]).length" @click="clearPick(c)">Show all</button>
        </div>
      </details>
    </template>
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
  </div>`,Fn=`
  <button type="button" class="rgroup" x-show="grouped" @click="fold(g)" :aria-expanded="String(!isFolded(g))">
    <svg class="rgarrow" :class="{ folded: isFolded(g) }" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span x-text="g.label"></span><b class="num" x-text="g.rows.length"></b>
  </button>`,In=`
  <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
  <div class="banner" role="alert" x-show="status === 'error'">
    <span x-text="loadError"></span>
    <button class="btn sm" type="button" @click="reload()">Try again</button>
  </div>
  <div class="rnone" x-show="status === 'ready' && !rows.length">
    <p class="m-0" x-text="filtered ? 'Nothing matches.' : cfg.empty"></p>
    <button class="btn sm" type="button" x-show="filtered" @click="clearFilters()">Clear search and filters</button>
  </div>`,Ln=e=>`
            <button type="button" class="rdots" x-show="hasMenu" @click.stop="openMenu(${e}, $event)" aria-haspopup="menu"
              :aria-expanded="String(Boolean(menu.row && menu.row.id === ${e}.id))" :aria-label="'Actions: ' + rowLabel(${e})">&#8943;</button>`,Rn=(e=``)=>`
    <div class="rhead">
      <template x-for="c in listCols" :key="c.name">
        <button type="button" :class="{ sorted: sortCol === c.name }" :disabled="Boolean(c.computed)" :title="c.computed ? label(c) : 'Sort by ' + label(c)" @click="sortBy(c.name)" :aria-sort="sortCol === c.name ? (sortDir === 'asc' ? 'ascending' : 'descending') : null">
          <span x-text="label(c)"></span><span class="rarrow" x-show="!c.computed" x-text="sortCol === c.name ? (sortDir === 'asc' ? '↑' : '↓') : '↕'"></span>
        </button>
      </template>${e}
    </div>`,zn=`
  <div class="rlist" x-show="status === 'ready' && rows.length && !cfg.ownList" :style="gridStyle">
    ${Rn(`<span x-show="hasMenu"></span>`)}
    <template x-for="g in listGroups" :key="g.value">
      <div class="contents">
        ${Fn}
        <template x-for="r in (isFolded(g) ? [] : g.rows)" :key="r.id">
          <div class="rrow cursor-pointer" :class="{ dim: isInactive(r) }" @click="open(r)">
            <button type="button" class="rc first text-left" @click.stop="open(r)" :title="cell(r, listCols[0]) || null"><span x-text="cell(r, listCols[0])"></span><span class="ltag rtag" x-show="isInactive(r)">Inactive</span></button>
            <template x-for="c in listCols.slice(1)" :key="c.name">
              <span class="rc" :class="{ blank: !cell(r, c), num: isNumber(c), ingroup: grouped && c.name === group, rstat: isStatusCol(c) }" :data-l="label(c)" :title="cell(r, c) || null" x-text="cell(r, c)"></span>
            </template>
            ${Ln(`r`)}
          </div>
        </template>
      </div>
    </template>
  </div>`,Bn=`
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
  </div>`,Vn=`
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
  </section>`,Hn=(e,t,n)=>`
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
        </div>`,Un=`
  <template x-for="c in editCols" :key="c.name">
    <div class="field" :class="{ bad: errors[c.name] }">
      <label class="flab" :for="fid(c)"><span x-text="label(c)"></span><small x-show="c.required && c.writable">required</small></label>
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
      <template x-if="widget(c) === 'ref'">${Hn(`c.name`,`fid(c)`,`'Type to search'`)}</template>
      <template x-if="widget(c) === 'checks'">
        <div class="fchecks" role="group" :id="fid(c)">
          <template x-for="o in fieldOptions(c)" :key="o.value">
            <label class="fcheck"><input type="checkbox" :value="o.value" x-model="form[c.name]"><span x-text="o.label"></span></label>
          </template>
        </div>
      </template>
      <p class="fhelp" x-show="c.writable && hint(c)" x-text="hint(c)"></p>
      <p class="ferr" x-show="errors[c.name]" x-text="errors[c.name]"></p>
    </div>
  </template>`,Wn=(e,t)=>`
                <template x-if="isStatusField(${e})">
                  <button type="button" class="pill" @click="openMenu(${t}, $event, 'status')" aria-haspopup="menu" :aria-label="'Status: ' + statusText(${t}) + '. Change it.'">
                    <span x-text="statusText(${t})"></span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                </template>
                <template x-if="!(isStatusField(${e})) && refTarget(${e}, ${t})">
                  <button type="button" class="plink" @click="peek(refTarget(${e}, ${t}).tab, refTarget(${e}, ${t}).id)" x-text="cell(${t}, ${e})"></button>
                </template>
                <template x-if="!(isStatusField(${e})) && !refTarget(${e}, ${t}) && link(${e}, ${t})"><a :href="link(${e}, ${t})" target="_blank" rel="noopener" x-text="cell(${t}, ${e})"></a></template>
                <template x-if="!(isStatusField(${e})) && !refTarget(${e}, ${t}) && !link(${e}, ${t})"><span :class="{ muted: !cell(${t}, ${e}) }" x-text="cell(${t}, ${e}) || 'Not set'"></span></template>`,Gn=(e,t)=>`
        <section class="prel" x-show="relatedTasks(${e}, ${t}).length">
          <div class="lbl" x-text="'Tasks about this (' + relatedTasks(${e}, ${t}).length + ')'"></div>
          <template x-for="t in relatedTasks(${e}, ${t})" :key="t.id">
            <div class="flex flex-col"><button type="button" class="plink" @click="peek('Tasks', t.id)" x-text="t.title"></button><small x-text="taskLine(t)"></small></div>
          </template>
        </section>`,Kn=`
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
      <template x-if="peekRow">${Gn(`peekTop.tab`,`peekTop.id`)}</template>
    </div>`,qn=`
  <div class="amenu" role="menu" x-show="menu.row" :style="menu.style" @click.outside="closeMenu()" @keydown.escape.stop="closeMenu()">
    <template x-if="menu.row">
      <div class="contents">
        <template x-if="menu.mode === 'row'">
          <div class="contents">
            <button type="button" role="menuitem" @click="menuOpen()">Open</button>
            <button type="button" role="menuitem" x-show="canWrite" @click="menuEdit()">Edit</button>
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
            <button type="button" role="menuitem" class="warn" x-show="canRemoveTab" :disabled="acting" @click="removeRecord(menu.row)">Remove</button>
          </div>
        </template>
      </div>
    </template>
  </div>`,Jn=`
  <div class="scrim pscrim" x-show="panel.open" @click="close()"></div>
  <aside class="panel" :class="{ open: panel.open }" role="dialog" aria-modal="true" :aria-label="panelTitle" :inert="!panel.open" @keydown.escape.window="panel.open && !menu.row && close()">
    <header class="ph" x-show="!peekTop">
      <div class="min-w-0 grow">
        <div class="lbl" x-text="panel.mode === 'edit' ? (panel.id ? 'Editing' : 'Adding') : cfg.noun"></div>
        <h2><span x-text="panelTitle"></span> <span class="ltag" x-show="panel.mode === 'view' && isInactive(record)">Inactive</span></h2>
      </div>
      <button class="btn sm" type="button" @click="close()">Close</button>
    </header>
    <header class="ph flex-wrap" x-show="peekTop">
      <button type="button" class="pback basis-full text-left" @click="back()" x-text="'\u2039 Back to ' + backTo"></button>
      <div class="min-w-0 grow">
        <div class="lbl" x-text="peekNoun"></div>
        <h2 x-text="peekTitle"></h2>
      </div>
      <button class="btn sm" type="button" @click="close()">Close</button>
    </header>
    ${Kn}
    <div class="pb" x-show="!peekTop">
      <div class="banner" role="alert" x-show="message" x-text="message"></div>
      <template x-if="panel.mode === 'view' && record">
        <dl class="pkv">
          <template x-for="c in fieldCols" :key="c.name">
            <div>
              <dt x-text="label(c)"></dt>
              <dd>${Wn(`c`,`record`)}</dd>
            </div>
          </template>
        </dl>
      </template>
      <template x-if="panel.mode === 'view' && record && !cfg.ownTasks">${Gn(`cfg.tab`,`record.id`)}</template>
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
          ${Vn}
        </div>
      </template>
      <template x-if="panel.mode === 'edit'">
        <form class="pform" :id="'rform' + uid" novalidate @submit.prevent="save()">${Un}<!--slot:panelEdit--></form>
      </template>
    </div>
    <footer class="pf" x-show="peekTop">
      <span class="grow"></span>
      <button class="btn pri" type="button" x-show="peekOpenIn" @click="openPeekElsewhere()" x-text="peekOpenIn ? peekOpenIn.words : ''"></button>
    </footer>
    <footer class="pf" x-show="!peekTop">
      <small class="muted" x-text="stamp"></small>
      <span class="grow"></span>
      <button class="btn" type="button" x-show="panel.mode === 'view' && record && canInactive" :disabled="acting" @click="toggleActive()" x-text="isInactive(record) ? 'Make active again' : 'Make inactive'"></button>
      <button class="btn warn" type="button" x-show="panel.mode === 'view' && canRemoveHere" :disabled="acting" @click="removeRecord()">Remove</button>
      <button class="btn pri" type="button" x-show="panel.mode === 'view' && canWrite && record" @click="edit()">Edit</button>
      <button class="btn" type="button" x-show="panel.mode === 'edit'" :disabled="saving" @click="cancel()">Cancel</button>
      <button class="btn pri" type="submit" x-show="panel.mode === 'edit'" :form="'rform' + uid" :disabled="saving" x-text="saving ? 'Saving...' : 'Save'"></button>
    </footer>
  </aside>`;function R({title:e=``,intro:t=``,toolbarHtml:n=``,aboveListHtml:r=``,panelViewHtml:i=``,panelEditHtml:a=``}={}){return`<div class="card rec">${e?`<div class="card-h"><h2>${e}</h2></div>`:``}<div class="card-b rec-b">${t?`<p class="muted m-0">${t}</p>`:``}${Nn}${Pn.replace(`<!--slot:toolbar-->`,n)}${r}${In}${zn}${Bn}</div></div>${Jn.replace(`<!--slot:panelView-->`,i).replace(`<!--slot:panelEdit-->`,a)}${qn}`}var Yn=[`agreed`,`invoiced`,`paid`],Xn=e=>Array.isArray(e)?e:e==null||e===``?[]:[e],z=e=>e==null||e===``,Zn=(e,t)=>String(e).localeCompare(String(t),`en-GB`,{sensitivity:`base`});function Qn(e,t){return e?(t||[]).filter(t=>t.tier_id===e&&Yn.includes(t.status)).length:0}function $n(e,t){if(!e||z(e.available))return`No limit`;let n=Number(e.available)-t;return n<=0?`Secured`:`${n} left`}function er(e,t,n=[]){let r=e=>{let t=n.indexOf(e);return t<0?1e6:t};return(t||[]).filter(t=>t.sponsor_year_id===e).sort((e,t)=>r(e.benefit)-r(t.benefit)||Zn(e.benefit,t.benefit))}function tr(e,t,n){if(!e)return[];let r=new Set((t||[]).map(e=>e.benefit));return Xn(e.benefits).filter(e=>!r.has(e)&&(!n||n.includes(e)))}function nr(e,t,n,r){return!e||!t?!1:tr(t,n,r).length?!0:z(e.amount_pence)&&!z(t.price_pence)}function rr(e,t){return e?(t||[]).filter(t=>t.contact_id===e&&t.active!==!1).sort((e,t)=>Number(!!t.preferred)-Number(!!e.preferred)||Zn(e._label||``,t._label||``)):[]}function ir(e,t){return(t||[]).find(t=>t.contact_id===e)||null}function ar(e=new Date){let t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function or(e,t,n){return e?{done:!0,done_on:n,done_by_member_id:t||null}:{done:!1,done_on:null,done_by_member_id:null}}function sr(e){let t=String(e||``).trim();if(!t)return null;if(/^https?:\/\//i.test(t))return t;let n=t.replace(/^@/,``);return/^[A-Za-z0-9._]{1,30}$/.test(n)?`https://www.instagram.com/${n}/`:null}function cr(e,t=e=>e){if(!e)return[];let n=[e.address_line1,e.address_line2,e.town,e.postcode].filter(e=>!z(e)).join(`, `);return[{label:`Website`,text:e.website,href:e.website&&/^https?:\/\//i.test(e.website)?e.website:null},{label:`Business email`,text:e.email,href:e.email?`mailto:${e.email}`:null},{label:`Phone`,text:e.phone,href:e.phone?`tel:${String(e.phone).replace(/[^\d+]/g,``)}`:null},{label:`Address`,text:n,href:null},{label:`Instagram`,text:e.instagram,href:sr(e.instagram)},{label:`Category`,text:e.category?t(e.category):``,href:null},{label:`Notes`,text:e.notes,href:null}].filter(e=>!z(e.text))}function lr(e){let t=Math.max(0,...(e||[]).map(e=>Number(e.sort_order)||0));return Math.floor(t/10)*10+10}var B=()=>w.member&&w.member.id||``;function V(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this,r,...e)}}function H(e,t){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function ur(e,t){e.label=e=>e&&t[e.name]||v(e)}function dr(e,t=`owner_member_id`){V(e,`create`,function(e){this.cfg.defaults[t]=B()||null,e.call(this)})}function fr(e=`owner_member_id`){return function(t){return!this.mine||t[e]===B()}}function pr(e){let t=Object.getOwnPropertyDescriptor(e,`filtered`).get;H(e,{mine:!1,get myId(){return B()},get filtered(){return this.mine||t.call(this)}}),V(e,`clearFilters`,function(e){this.mine=!1,e.call(this)})}var mr=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine" x-show="myId">Mine</button>`;function hr(e){V(e,`fieldOptions`,function(e,t){let n=e.call(this,t);return t.name!==`contact_person_id`||!this.form.contact_id?n:n.filter(e=>e.value===this.form.contact_person_id||(C.byId(`system/ContactPeople`,e.value)||{}).contact_id===this.form.contact_id)})}function gr(e,t){let n=e=>Object.prototype.hasOwnProperty.call(t,e);H(e,{get listCols(){return this.cfg.list.map(e=>n(e)?{name:e,label:t[e].label,type:t[e].type||`string`,writable:!1,computed:!0}:E([e],this.cols)[0]).filter(Boolean)},get sortOptions(){return this.listCols.filter(e=>!e.computed)}}),V(e,`cell`,function(e,r,i){return r&&i&&n(i.name)?t[i.name].text.call(this,r):e.call(this,r,i)}),V(e,`sortBy`,function(e,t){n(t)||e.call(this,t)})}var _r=e=>`
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
  </dl>`,vr={tab:`SponsorYear`,load:[`SponsorYear`,`system/Contacts`,`system/ContactPeople`,`Members`,`Tiers`,`Benefits`],list:[`_label`,`status`,`tier_id`,`owner_member_id`,`amount_pence`,`last_contacted`],form:[`contact_id`,`contact_person_id`,`owner_member_id`,`status`,`tier_id`,`amount_pence`,`last_contacted`,`listed_on_tickets`,`logo_file`,`ad_file`,`paid`,`paid_on`,`paid_pence`,`notes`],filters:[`status`,`owner_member_id`,`tier_id`],sort:`_label`,noun:`sponsor`,defaults:{status:`to_contact`},empty:`No sponsors this year yet. Add one here, or add a company from Companies.`,rowLabel:e=>C.label(`system/Contacts`,e.contact_id),where:fr(),afterSave(e){return this.syncBenefits(e,`Saved, but the benefit checklist was not updated`)}},yr={_label:`Company`,contact_id:`Company`,owner_member_id:`Who approaches`,tier_id:`Tier`,listed_on_tickets:`On the ticket page`,logo_file:`Logo`,ad_file:`Advert artwork`,paid_pence:`Amount received`};function br(){let t=L(vr);ur(t,yr),dr(t),pr(t),hr(t),V(t,`fieldOptions`,function(e,t){let n=e.call(this,t);if(t.name!==`contact_id`)return n;let r=new Set(C.rows(`SponsorYear`).filter(e=>e.id!==this.panel.id).map(e=>e.contact_id));return n.filter(e=>e.value===this.form.contact_id||!r.has(e.value))}),V(t,`init`,function(e){this.$watch(`form.tier_id`,e=>this.tierChosen(e)),this.$watch(`status`,e=>{e===`ready`&&this.openPending()}),e.call(this)});for(let e of[`create`,`edit`])V(t,e,function(e){e.call(this),this.lastTier=this.form.tier_id});return H(t,{busy:!1,lastTier:``,tierChosen(e){if(this.panel.mode!==`edit`||e===this.lastTier)return;this.lastTier=e;let t=e?C.byId(`Tiers`,e):null;t&&t.price_pence!=null&&!String(this.form.amount_pence??``).trim()&&(this.form.amount_pence=Ne(t.price_pence))},openPending(){let e=this.pendingSponsor;if(!e)return;this.pendingSponsor=null;let t=C.byId(`SponsorYear`,e);t&&this.open(t)},get company(){return this.record?C.byId(`system/Contacts`,this.record.contact_id):null},get facts(){return cr(this.company,e=>C.listLabel(`contact_category`,e))},get people(){return this.record?rr(this.record.contact_id,C.rows(`system/ContactPeople`)):[]},get tier(){return this.record&&this.record.tier_id?C.byId(`Tiers`,this.record.tier_id):null},get offered(){return C.list(`sponsor_benefit`).filter(e=>e.active!==!1).map(e=>e.value)},get benefits(){return this.record?er(this.record.id,C.rows(`Benefits`),C.list(`sponsor_benefit`).map(e=>e.value)):[]},get missing(){return tr(this.tier,this.benefits,this.offered)},get canTick(){return C.canWrite(`Benefits`)},get canAssign(){return this.canWrite&&this.myId&&this.record&&this.record.owner_member_id!==this.myId},benefitLabel(e){return C.listLabel(`sponsor_benefit`,e.benefit)},doneText(t){if(!t.done)return``;let n=t.done_by_member_id?C.label(`Members`,t.done_by_member_id):``;return[e(t.done_on),n&&`by ${n}`].filter(Boolean).join(` `)},async assignToMe(){let e=this.record;if(e&&B()&&!this.busy){if(e.owner_member_id&&e.owner_member_id!==B()){let t=C.label(`Members`,e.owner_member_id);if(!window.confirm(`${t} is approaching ${this.rowLabel(e)}. Take it over?`))return}this.busy=!0,this.message=``;try{await C.save(`SponsorYear`,{owner_member_id:B()},e.id)}catch(e){this.message=e.message||`Could not save. Please try again.`}finally{this.busy=!1}}},async tick(e,t){let n=()=>!!(C.byId(`Benefits`,e.id)||e).done;if(this.busy)t.checked=n();else{this.busy=!0,this.message=``;try{await C.save(`Benefits`,or(t.checked,B(),ar()),e.id)}catch(e){t.checked=n(),this.message=e.message||`Could not save the tick. Please try again.`}finally{this.busy=!1}}},async syncBenefits(e,t){if(e&&C.canWrite(`Benefits`)&&nr(e,e.tier_id?C.byId(`Tiers`,e.tier_id):null,er(e.id,C.rows(`Benefits`)),this.offered)){this.busy=!0;try{await i.call(`sponsors.syncBenefits`,{id:e.id}),await C.load([`SponsorYear`,`Benefits`])}catch(e){this.message=`${t}: ${e.message||`please try again.`}`}finally{this.busy=!1}}}}),t}var xr=R({toolbarHtml:mr,panelViewHtml:`
  <div x-show="canAssign">
    <button class="btn sm" type="button" :disabled="busy" @click="assignToMe()">Assign to me</button>
  </div>

  <section class="flex flex-col gap-2" x-show="company">
    <h3 class="lbl m-0">Company</h3>
    ${_r(`facts`)}
    <p class="muted m-0" x-show="!facts.length">No details yet. Add them in Companies.</p>
  </section>

  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Contact people</h3>
    <template x-for="p in people" :key="p.id">
      <div class="flex flex-col">
        <span><b x-text="p._label"></b><span class="muted" x-show="p.job_title" x-text="', ' + p.job_title"></span>
          <span class="ml-1 rounded bg-accent-soft px-2 text-[11px] font-semibold text-accent-ink" x-show="p.preferred">Approach first</span></span>
        <a class="text-accent-ink" x-show="p.email" :href="'mailto:' + p.email" x-text="p.email"></a>
        <a class="text-accent-ink" x-show="p.phone" :href="'tel:' + String(p.phone || '').replace(/[^0-9+]/g, '')" x-text="p.phone"></a>
      </div>
    </template>
    <p class="muted m-0" x-show="!people.length">No one recorded yet. Add people in Companies.</p>
  </section>

  <section class="flex flex-col gap-1">
    <h3 class="lbl m-0">Benefits</h3>
    <template x-for="b in benefits" :key="b.id">
      <label class="fcheck">
        <input type="checkbox" :checked="Boolean(b.done)" :disabled="!canTick || busy" @change="tick(b, $event.target)">
        <span><span x-text="benefitLabel(b)"></span> <small class="muted" x-text="doneText(b)"></small></span>
      </label>
    </template>
    <p class="muted m-0" x-show="!benefits.length" x-text="record.tier_id ? 'No benefits listed yet.' : 'Choose a tier to make the checklist.'"></p>
    <div x-show="canTick && missing.length">
      <button class="btn sm" type="button" :disabled="busy" @click="syncBenefits(record, 'The benefit checklist was not updated')">Add the tier's benefits</button>
    </div>
  </section>

  <p class="muted m-0 text-xs">Past years appear here once the 2026 ball is brought in.</p>`}),Sr={tab:`system/Contacts`,load:[`system/Contacts`,`system/ContactPeople`,`SponsorYear`,`Members`],list:[`name`,`category`,`town`,`_year`],form:[`name`,`kind`,`category`,`website`,`email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`instagram`,`checked`,`notes`],filters:[`category`],sort:`name`,noun:`company`,nouns:`companies`,defaults:{kind:`business`,active:!0},empty:`No companies yet.`},Cr={email:`Business email`,address_line1:`Address`,address_line2:`Address, second line`,checked:`Details checked`,active:`Approach again`},wr=[`first_name`,`last_name`,`job_title`,`email`,`phone`,`preferred`,`active`,`notes`],Tr={preferred:`Approach first`,active:`Still works there`},U=()=>({open:!1,id:null,form:{},errors:{},message:``,saving:!1});function Er(){let e=L(Sr);ur(e,Cr),gr(e,{_year:{label:`This year`,type:`list`,text(e){let t=ir(e.id,C.rows(`SponsorYear`));return t?C.listLabel(`sponsor_status`,t.status):``}}});for(let t of[`open`,`create`,`close`])V(e,t,function(e,...t){return this.person=U(),e.apply(this,t)});return H(e,{person:U(),adding:!1,get spy(){return this.record?ir(this.record.id,C.rows(`SponsorYear`)):null},get spyText(){let e=this.spy;if(!e)return``;let t=e.owner_member_id?`, ${C.label(`Members`,e.owner_member_id)} approaching`:`, no one approaching yet`;return`${C.listLabel(`sponsor_status`,e.status)}${t}`},get canAddToYear(){return C.canWrite(`SponsorYear`)&&this.record&&!this.spy},async addToYear(){if(this.record&&!this.adding){this.adding=!0,this.message=``;try{let e={contact_id:this.record.id,status:`to_contact`};B()&&(e.owner_member_id=B());let{row:t}=await C.save(`SponsorYear`,e);this.panel.open=!1,this.openSponsor(t.id)}catch(e){this.message=e.message||`Could not add it. Please try again.`}finally{this.adding=!1}}},showSponsor(){this.spy&&(this.panel.open=!1,this.openSponsor(this.spy.id))},get people(){if(!this.record)return[];let e=C.rows(`system/ContactPeople`),t=e.filter(e=>e.contact_id===this.record.id&&e.active===!1);return rr(this.record.id,e).concat(t)},get personCols(){return E(wr,C.columns(`system/ContactPeople`))},get canEditPeople(){return C.canWrite(`system/ContactPeople`)},plabel(e){return Tr[e.name]||v(e)},pfid(e){return`p${this.uid}-${e.name}`},newPerson(){this.person={...U(),open:!0,form:Ge(this.personCols,{active:!0,preferred:!this.people.length})}},editPerson(e){this.person={...U(),open:!0,id:e.id,form:S(this.personCols,e)}},cancelPerson(){this.person.saving||(this.person=U())},async savePerson(){let e=this.person;if(e.saving||!this.record)return;let t=e.id?C.byId(`system/ContactPeople`,e.id):null,{values:n,errors:r}=Ue(this.personCols,e.form,t);if(e.errors=r,e.message=``,Object.keys(r).length)e.message=`Please check the highlighted fields.`;else if(t&&!Object.keys(n).length)this.person=U();else{e.id||(n.contact_id=this.record.id),e.saving=!0;try{await C.save(`system/ContactPeople`,n,e.id),this.person=U()}catch(n){n.code===`conflict`&&t&&(e.form=S(this.personCols,C.byId(`system/ContactPeople`,e.id))),n.details&&n.details.fields&&(e.errors={...n.details.fields}),e.message=n.message||`Could not save. Please try again.`}finally{e.saving=!1}}}}),e}var Dr=R({panelViewHtml:`
  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">This year</h3>
    <template x-if="spy">
      <div class="flex flex-wrap items-center gap-2">
        <span x-text="spyText"></span>
        <button class="btn sm" type="button" @click="showSponsor()">Open in This year</button>
      </div>
    </template>
    <template x-if="!spy">
      <div class="flex flex-wrap items-center gap-2">
        <span class="muted">Not on this year's sponsor list.</span>
        <button class="btn sm" type="button" x-show="canAddToYear" :disabled="adding" @click="addToYear()">Add to this year</button>
      </div>
    </template>
  </section>

  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Contact people</h3>
    <template x-for="p in people" :key="p.id">
      <div class="flex items-start gap-2">
        <div class="flex min-w-0 grow flex-col" :class="{ muted: p.active === false }">
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
  </section>`}),Or=()=>C.rows(`SponsorYear`),kr={tab:`Tiers`,load:[`Tiers`,`SponsorYear`,`system/Contacts`,`Members`],list:[`name`,`price_pence`,`available`,`_taken`,`_left`,`sort_order`],form:[`name`,`price_pence`,`available`,`benefits`,`benefits_text`,`ad_size`,`sort_order`],sort:`sort_order`,noun:`tier`,defaults:{active:!0},empty:`No tiers yet. Someone who can change sponsorship prices adds them.`},Ar={price_pence:`Price`,available:`How many`,benefits_text:`Benefits as written`,sort_order:`Order`,active:`Offered`};function jr(){let e=L(kr);return ur(e,Ar),gr(e,{_taken:{label:`Taken`,type:`int`,text:e=>String(Qn(e.id,Or()))},_left:{label:`Left`,type:`int`,text:e=>$n(e,Qn(e.id,Or()))}}),V(e,`create`,function(e){this.cfg.defaults.sort_order=lr(C.rows(`Tiers`)),e.call(this)}),H(e,{get onTier(){if(!this.record)return[];let e=e=>+!Yn.includes(e.status);return Or().filter(e=>e.tier_id===this.record.id).map(t=>({id:t.id,name:C.label(`system/Contacts`,t.contact_id),status:C.listLabel(`sponsor_status`,t.status),held:e(t)})).sort((e,t)=>e.held-t.held||e.name.localeCompare(t.name,`en-GB`))},get placesText(){let e=this.record;if(!e)return``;let t=Qn(e.id,Or());return e.available==null?`${t} taken, no limit`:`${t} of ${e.available} taken. ${$n(e,t)}.`},showSponsor(e){this.panel.open=!1,this.openSponsor(e)}}),e}var Mr=R({panelViewHtml:`
  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Places</h3>
    <p class="m-0" x-text="placesText"></p>
    <p class="muted m-0 text-xs">A place counts as taken once the sponsor has agreed, been invoiced or paid.</p>
    <template x-for="s in onTier" :key="s.id">
      <button type="button" class="btn sm justify-between" @click="showSponsor(s.id)">
        <span x-text="s.name"></span><span class="muted" x-text="s.status"></span>
      </button>
    </template>
  </section>`}),Nr={tab:`Donations`,load:[`Donations`,`system/Contacts`,`system/ContactPeople`,`Members`],list:[`_label`,`what`,`status`,`owner_member_id`,`value_pence`,`asked_on`],form:[`contact_id`,`contact_person_id`,`owner_member_id`,`what`,`status`,`value_pence`,`asked_on`,`received_on`,`notes`],filters:[`status`,`owner_member_id`],sort:`_label`,noun:`donation`,defaults:{status:`to_ask`},empty:`No donations yet.`,rowLabel:e=>C.label(`system/Contacts`,e.contact_id)},Pr={_label:`Company`,contact_id:`Company`,owner_member_id:`Who asks`,what:`What they give`,value_pence:`Value`};function Fr(){let e=L(Nr);return ur(e,Pr),dr(e),hr(e),e}var Ir=R(),Lr=g({PARTS:()=>Rr,html:()=>zr,setup:()=>Br}),Rr=[{id:`year`,label:`This year`,data:`sponsorsYear`,html:xr},{id:`companies`,label:`Companies`,data:`sponsorsCompanies`,html:Dr},{id:`tiers`,label:`Tiers`,data:`sponsorsTiers`,html:Mr},{id:`donations`,label:`Donations`,data:`sponsorsDonations`,html:Ir}],zr=`
  <section class="flex flex-col gap-4" x-data="sponsorsPage">
    <div class="seg flex-wrap self-start" role="group" aria-label="Show">
      <template x-for="p in parts" :key="p.id">
        <button type="button" :aria-pressed="part === p.id" @click="part = p.id" x-text="p.label"></button>
      </template>
    </div>${Rr.map(e=>`
    <template x-if="part === '${e.id}'"><div class="contents" x-data="${e.data}">${e.html}</div></template>`).join(``)}
  </section>`;function Br(e){e.data(`sponsorsPage`,()=>({part:`year`,parts:Rr.map(({id:e,label:t})=>({id:e,label:t})),pendingSponsor:null,init(){let e=()=>{let e=Zt(`sponsors`);e&&this.parts.some(t=>t.id===e)&&(this.part=e)};e(),this.$watch(()=>k.wanted,e)},openSponsor(e){this.pendingSponsor=e,this.part=`year`}})),e.data(`sponsorsYear`,br),e.data(`sponsorsCompanies`,Er),e.data(`sponsorsTiers`,jr),e.data(`sponsorsDonations`,Fr)}var W=`system/Suppliers`,G=e=>e!=null&&e!==``;function Vr(e,t){return[e,t].filter(e=>G(e)).join(` / `)}function Hr(e){let t=[`SupplierYear`,W];return u(e,`members`,`view`)&&t.push(`Members`),u(e,`planning`,`view`)&&t.push(`Tasks`),u(e,`money`,`view`)&&t.push(`Budget`),t}function Ur(e,t,n=new Date,r){if(t||!G(e))return``;let i=a(e,n,r);return i===null?``:i<0?`overdue`:i<=14?`soon`:``}function Wr(e,t=new Date,n){let r=e||{},i=(e,r,i)=>({amount:G(e)?Number(e):null,due:G(r)?r:null,paid:!!i,state:G(e)||G(r)?Ur(r,i,t,n):``}),a=i(r.deposit_pence,r.deposit_due,r.deposit_paid),o=i(r.balance_pence,r.balance_due,r.balance_paid),s=a.amount!==null||o.amount!==null,c=e=>e.amount!==null&&!e.paid?e.amount:0;return{quote:G(r.quote_pence)?Number(r.quote_pence):null,deposit:a,balance:o,left:s?c(a)+c(o):null}}function Gr(e,t,n,r=`done`){let i=(e||[]).filter(e=>e.linked_tab===t&&e.linked_id===n),a=e=>[+(e.status===r),e.due||`9999-99-99`];return i.slice().sort((e,t)=>{let[n,r]=a(e),[i,o]=a(t);return n-i||(r<o?-1:+(r>o))})}function Kr(e,t){return(e||[]).filter(e=>e.supplier_year_id===t)}function qr(e){return e?[e.address_line1,e.address_line2,e.town,e.postcode].map(e=>G(e)?String(e).trim():``).filter(Boolean).join(`, `):``}function Jr(e){if(!G(e))return null;let t=String(e).replace(/[^\d+]/g,``);return t.length>=3?`tel:${t}`:null}function Yr(e,t,n){return(e||[]).find(e=>e.supplier_id===t&&e.area===n)||null}function Xr(e,t){return(e||[]).filter(e=>e.supplier_id===t)}function Zr(e,t){let n=(e&&Array.isArray(e.areas)?e.areas:[]).filter(Boolean);return t&&n.includes(t)?t:n[0]||``}function Qr(e,t){let n=t&&t.venue_supplier_id;return G(e)&&G(n)&&String(n)===String(e)}var $r=g({ALL:()=>oi,YEAR:()=>ai,html:()=>gi,setup:()=>bi}),ei=()=>h.store(`ball`)&&h.store(`ball`).settings||{},ti=()=>ei().timezone||void 0,ni=e=>C.listLabel(`supplier_area`,e),ri=()=>(C.options(`supplier_status`)[0]||{}).value||``,ii=[`quote_pence`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`],ai={tab:`SupplierYear`,list:[`supplier_id`,`area`,`status`,`owner_member_id`,`quote_pence`,`deposit_due`,`balance_due`],form:[`supplier_id`,`area`,`status`,`owner_member_id`,`idea`,`quote_pence`,`quote_file`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`,`folder`,`notes`],filters:[`area`,`status`,`owner_member_id`],sort:`supplier_id`,ownTasks:!0,noun:`supplier this year`,nouns:`suppliers this year`,empty:`No suppliers for this year yet. Add one here, or open one under All suppliers.`},oi={tab:W,load:[W,`SupplierYear`,`Members`],list:[`_label`,`areas`,`email`,`phone`],form:[`name`,`areas`,`website`,`email`,`events_email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`maps_url`,`notes`],filters:[`areas`],sort:`_label`,noun:`supplier`,defaults:{active:!0},empty:`No suppliers yet. Add the venue and anyone else you use, they are kept from year to year.`},K=`m-0 text-[13px] font-semibold`,si=`inline-block rounded px-2 text-[11.5px] font-semibold leading-5`,ci=`${si} bg-accent-soft text-accent-ink`,li={soon:`text-warn`,overdue:`text-bad`},ui={soon:`${si} bg-[var(--warn-soft)] text-warn`,overdue:`${si} bg-[var(--bad-soft)] text-bad`},di={soon:`Due soon`,overdue:`Overdue`},fi=`
  <div x-show="venue(record.supplier_id)"><span class="${ci}">This year's venue</span></div>

  <section class="flex flex-col gap-2" aria-label="Supplier details">
    <div class="flex items-center justify-between gap-2">
      <h3 class="${K}">Supplier details</h3>
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
    <h3 class="${K}">Money this year</h3>
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
    <h3 class="${K}">Tasks</h3>
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
      <h3 class="${K}">Budget lines</h3>
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
  </template>`,pi=`
  <span hidden x-effect="suggestArea()"></span>
  <p class="note m-0" x-show="!panel.id">Not in the supplier list? Add them under All suppliers first, then come back here.</p>`,mi=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine">Mine</button>`,hi=`
  <div x-show="venue(record.id)"><span class="${ci}">This year's venue</span></div>
  <p class="note m-0" x-show="record.active === false">Marked as not to use again.</p>

  <section class="flex flex-col gap-2" aria-label="This year">
    <h3 class="${K}">This year</h3>
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
  </section>`,gi=`
  <section class="flex flex-col gap-4" x-data="suppliersScreen">
    <div class="seg self-start" role="group" aria-label="Show">
      <button type="button" :aria-pressed="supTab === 'year'" @click="supTab = 'year'">This year</button>
      <button type="button" :aria-pressed="supTab === 'all'" @click="supTab = 'all'">All suppliers</button>
    </div>
    <div class="contents" x-data="supplierYearScreen" x-show="supTab === 'year'" @supplier-year-open.window="openYear($event.detail.id)">${R({intro:`Suppliers we are talking to or have booked for this ball, by where they stand. Open one for its details, money and tasks.`,toolbarHtml:mi,panelViewHtml:fi,panelEditHtml:pi})}</div>
    <div class="contents" x-data="supplierListScreen" x-show="supTab === 'all'" @supplier-open.window="openSupplier($event.detail.id)">${R({intro:`Every supplier we have used or considered, kept from year to year. Open one to add it to this year.`,panelViewHtml:hi})}</div>
  </section>`;function _i(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this),r.apply(this,e)}}function vi(){let t=L({...ai,load:Hr(w.member),rowLabel:e=>Vr(C.label(W,e.supplier_id),ni(e.area)),where(e){return!this.mine||w.member&&e.owner_member_id===w.member.id},extend:{mine:!1,formFull:!1,suggested:``,get filtered(){return this.mine||!!this.q.trim()||Object.values(this.filters).some(e=>T(e).length)},clearFilters(){this.mine=!1,this.q=``;for(let e of Object.keys(this.filters))this.filters[e]=[]},get formCols(){let e=E(this.cfg.form,this.cols).filter(e=>!Se(e.name)&&e.name!==`_label`);return this.panel.mode===`view`&&!this.formFull?e.filter(e=>!ii.includes(e.name)):e},get supplier(){return this.record?C.byId(W,this.record.supplier_id):null},get canEditSuppliers(){return C.canWrite(W)},get canMarkPaid(){let e=C.column(`SupplierYear`,`deposit_paid`);return!!(e&&e.writable)},get details(){let e=this.supplier;if(!e)return[];let t=e=>Le({type:`url`},e),n=e=>Le({type:`email`},e);return[{k:`Website`,v:e.website,href:t(e.website),ext:!0},{k:`Map`,v:e.maps_url?`Open the map`:``,href:t(e.maps_url),ext:!0},{k:`Email`,v:e.email,href:n(e.email)},{k:`Events email`,v:e.events_email,href:n(e.events_email)},{k:`Phone`,v:e.phone,href:Jr(e.phone)},{k:`Address`,v:qr(e)},{k:`Notes`,v:e.notes}].filter(e=>e.v)},get money(){return Wr(this.record,new Date,ti())},get moneyParts(){let e=this.money;return[{k:`Deposit`,...e.deposit},{k:`Balance`,...e.balance}]},partText(t){if(t.amount===null&&!t.due)return`Not set`;let n=[t.amount===null?`Amount not set`:Me(t.amount)];return t.due&&n.push(`due ${e(t.due)}`),n.push(t.paid?`paid`:`not paid`),n.join(`, `)},stateClass:e=>li[e]||``,statePill:e=>ui[e]||``,stateText:e=>di[e]||``,pounds:Me,get tasks(){return this.record?Gr(C.rows(`Tasks`),`SupplierYear`,this.record.id):[]},taskLine(t){return[C.listLabel(`task_status`,t.status),t.due?`due ${e(t.due)}`:``,t.owner_member_id?C.label(`Members`,t.owner_member_id):``].filter(Boolean).join(`, `)},taskLate(e){return e.status!==`done`&&Ur(e.due,!1,new Date,ti())===`overdue`},get showBudget(){return C.columns(`Budget`).length>0},get budget(){return this.record?Kr(C.rows(`Budget`),this.record.id):[]},budgetLine(e){let t=[[`planned`,e.planned_pence],[`committed`,e.committed_pence],[`paid out`,e.actual_pence]].filter(([,e])=>e!=null).map(([e,t])=>`${e} ${Me(t)}`);return[C.listLabel(`budget_category`,e.category),...t,e.paid?`paid`:`not paid`].filter(Boolean).join(`, `)},venue:e=>Qr(e,ei()),suggestArea(){if(this.panel.id||this.panel.mode!==`edit`)return;let e=C.byId(W,this.form.supplier_id),t=e&&Array.isArray(e.areas)&&e.areas[0]||``;t&&(!this.form.area||this.form.area===this.suggested)&&(this.form.area=t,this.suggested=t)},openYear(e){let t=C.byId(`SupplierYear`,e);t&&this.open(t)},showSupplier(){let e=this.record&&this.record.supplier_id;e&&(this.panel.open=!1,this.supTab=`all`,window.dispatchEvent(new CustomEvent(`supplier-open`,{detail:{id:e}})))}}});_i(t,`reload`,function(){this.cfg.load=Hr(w.member)}),_i(t,`create`,function(){this.suggested=``,this.cfg.defaults.status=ri(),this.cfg.defaults.owner_member_id=w.member&&w.member.id||null});let n=t.edit;return t.edit=function(){this.formFull=!0;try{n.call(this)}finally{this.formFull=!1}},t}function yi(){let e=L({...oi,rowLabel:e=>Qr(e.id,ei())?`${e._label||e.name} (this year's venue)`:e._label||e.name,extend:{started:!1,pick:{},adding:!1,addError:``,init(){this.supTab===`all`?this.start():this.$watch(`supTab`,e=>{e===`all`&&this.start()})},start(){this.started||(this.started=!0,this.reload())},venue:e=>Qr(e,ei()),areaLabel:ni,get thisYear(){return this.record?Xr(C.rows(`SupplierYear`),this.record.id):[]},yearChip(e){return`${ni(e.area)}: ${C.listLabel(`supplier_status`,e.status)||`No status`}`},get addArea(){return this.record?Zr(this.record,this.pick[this.record.id]):``},get canAdd(){let e=this.record;return!!(e&&e.active!==!1&&this.addArea&&C.canWrite(`SupplierYear`))},get addButtonText(){return this.adding?`Adding...`:this.record&&Yr(C.rows(`SupplierYear`),this.record.id,this.addArea)?`Open in this year`:`Add to this year`},async addToYear(){let e=this.record,t=this.addArea;if(!e||!t||this.adding)return;this.addError=``;let n=Yr(C.rows(`SupplierYear`),e.id,t);if(!n){this.adding=!0;try{let r={supplier_id:e.id,area:t,status:ri()};w.member&&w.member.id&&(r.owner_member_id=w.member.id),{row:n}=await C.save(`SupplierYear`,r)}catch(e){this.addError=e.message||`Could not add. Please try again.`;return}finally{this.adding=!1}}this.showYear(n.id)},showYear(e){this.panel.open=!1,this.supTab=`year`,window.dispatchEvent(new CustomEvent(`supplier-year-open`,{detail:{id:e}}))},openSupplier(e){this.supTab=`all`;let t=C.byId(W,e);t&&this.open(t)}}});return _i(e,`open`,function(){this.addError=``}),e}function bi(e){e.data(`suppliersScreen`,()=>({supTab:`year`,init(){let e=()=>{let e=Zt(`suppliers`);(e===`year`||e===`all`)&&(this.supTab=e)};e(),this.$watch(()=>k.wanted,e)}})),e.data(`supplierYearScreen`,vi),e.data(`supplierListScreen`,yi)}var xi=g({TASKS:()=>Ei,html:()=>ki,setup:()=>Ai,tasksScreen:()=>Oi}),Si=[`Tasks`,`Members`,`Meetings`,`SponsorYear`,`SupplierYear`,`Donations`,`system/Contacts`,`system/Suppliers`],Ci=[`Prizes`],wi=[`linked_tab`,`linked_id`],Ti={owner_member_id:`Owner`,linked_tab:`Linked to`},q=`linked`,Ei={tab:Qt,load:Si,list:[`title`,`owner_member_id`,`area`,`due`,`status`,`linked_tab`],form:[`title`,`details`,`owner_member_id`,`area`,`due`,`status`,...wi],filters:[`status`,`owner_member_id`,`area`],sort:`due`,ownList:!0,noun:`task`,defaults:{status:`todo`},empty:`No tasks yet. Add the first one with New task.`},Di=()=>an(new Date);function Oi(){let t=L({...Ei,where(e){return this.hideDone&&e.status===`done`&&!T(this.filters.status).includes(`done`)?!1:this.scope===`mine`&&w.member?e.owner_member_id===w.member.id:!0},statusValues(e,t){return t===`done`?pn():{status:t,done_at:null}},async afterSave(e){let t=mn(e);t&&await C.save(Qt,t,e.id)}}),n=Object.getOwnPropertyDescriptors(t),r=(e,t,...r)=>n[e].value.apply(t,r),i=(e,t)=>n[e].get.call(t);return Object.defineProperties(t,Object.getOwnPropertyDescriptors({tview:`list`,scope:`mine`,hideDone:!0,fullForm:!1,init(){r(`init`,this),this.$watch(`filters.owner_member_id`,e=>{T(e).length&&(this.scope=`all`)})},async reload(){return C.load(Ci).catch(()=>{}),r(`reload`,this)},setScope(e){this.scope=e,e===`mine`&&(this.filters.owner_member_id=[])},get allCount(){return C.rows(Qt).length},get filtered(){return i(`filtered`,this)||this.allCount>0&&(this.scope===`mine`||this.hideDone)},clearFilters(){r(`clearFilters`,this),this.scope=`all`,this.hideDone=!1},label(e){return e&&Ti[e.name]||r(`label`,this,e)},cell(e,t){return t&&t.name===`linked_tab`?this.linkText(e):r(`cell`,this,e,t)},linkText(e){return vn(C,e)},ownerName(e){return e&&e.owner_member_id?C.label(`Members`,e.owner_member_id):``},dueState(e){return fn(e,Di())},dueClass(e){let t=this.dueState(e);return t===`overdue`?`text-bad font-semibold`:t===`soon`?`text-warn font-semibold`:``},dueText(t){if(!t||!t.due)return``;let n=e(t.due);return this.dueState(t)===`overdue`?`${n}, overdue`:n},listCell(t,n){return n.name===`due`?e(t.due):this.cell(t,n)},get timeline(){let e=this.$store.ball&&this.$store.ball.settings||{};return bn(this.rows,Di(),e.event_date||``)},get formCols(){let e=i(`formCols`,this);return this.fullForm||this.panel.mode===`edit`?e:e.filter(e=>e.name!==`linked_id`)},get editCols(){return i(`editCols`,this).filter(e=>!wi.includes(e.name))},edit(){this.fullForm=!0;try{r(`edit`,this)}finally{this.fullForm=!1}},create(){this.cfg.defaults={...Ei.defaults,...hn(w.member,C.rows(`Members`))},r(`create`,this)},pickOptions(e){return e===q?tn.filter(e=>C.columns(e.tab).length||e.tab===this.form.linked_tab).flatMap(e=>{let t=e.tab===this.form.linked_tab?this.form.linked_id:``;return yn(C,e.tab,{current:t}).map(t=>({value:`${e.tab}|${t.value}`,label:t.label,group:`${e.label}s`}))}):r(`pickOptions`,this,e)},pickValue(e){return e===q?this.form.linked_tab&&this.form.linked_id?`${this.form.linked_tab}|${this.form.linked_id}`:``:r(`pickValue`,this,e)},pickSet(e,t){if(e!==q)return r(`pickSet`,this,e,t);let[n,i]=String(t||``).split(`|`);this.form.linked_tab=i?n:``,this.form.linked_id=i||``},pickLabel(e){if(e!==q)return r(`pickLabel`,this,e);let t=this.pickValue(q),n=t?this.pickOptions(q).find(e=>e.value===t):null;return n?`${n.label} (${n.group.slice(0,-1)})`:``},doneAtText(e){return e&&e.done_at?m(e.done_at):``},meetingLinked(e){return!!(e&&e.meeting_id&&C.byId(`Meetings`,e.meeting_id))},meetingText(t){let n=t&&t.meeting_id?C.byId(`Meetings`,t.meeting_id):null;return n?e(n.date)||n.id:``}})),t}var ki=`
  <section class="flex flex-col gap-4">
    <div class="contents" x-data="tasksScreen">${R({intro:`Who is doing what, and by when. Overdue tasks are in red, tasks due in the next 7 days in amber.`,toolbarHtml:`
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
    ${Rn(`<span x-show="hasMenu"></span>`)}
    <template x-for="g in listGroups" :key="g.value">
      <div class="contents">
        ${Fn}
        <template x-for="r in (isFolded(g) ? [] : g.rows)" :key="r.id">
          <div class="rrow cursor-pointer" @click="open(r)">
            <button type="button" class="rc first text-left" @click.stop="open(r)" :title="r.title" x-text="r.title"></button>
            <template x-for="c in listCols.slice(1)" :key="c.name">
              <span class="rc" :class="[c.name === 'due' ? dueClass(r) : '', listCell(r, c) ? '' : 'blank', grouped && c.name === group ? 'ingroup' : '', isNumber(c) ? 'num' : '', isStatusCol(c) ? 'rstat' : '']" :data-l="label(c)" :title="(c.name === 'due' ? dueText(r) : listCell(r, c)) || null"><span x-text="listCell(r, c)"></span><span class="narrow-only" x-show="c.name === 'due' && dueState(r) === 'overdue'">, overdue</span></span>
            </template>
            ${Ln(`r`)}
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
    ${Hn(`'linked'`,`'f' + uid + '-linked'`,`'Type a sponsor, supplier, meeting...'`)}
    <p class="fhelp">The sponsor, supplier, donation, meeting or prize this task is about. Leave it empty if none.</p>
    <p class="ferr" x-show="errors.linked_id" x-text="errors.linked_id"></p>
  </div>`})}</div>
  </section>`;function Ai(e){e.data(`tasksScreen`,Oi)}var ji=[{key:`SponsorYear`,tab:`SponsorYear`,label:`Sponsors`,group:`sponsors`,load:[`SponsorYear`,`system/Contacts`],kindList:Ct.SponsorYear},{key:`SupplierYear`,tab:`SupplierYear`,label:`Suppliers`,group:`suppliers`,load:[`SupplierYear`,`system/Suppliers`],kindList:Ct.SupplierYear},{key:`Meetings`,tab:`Meetings`,label:`Meetings`,group:`planning`,load:[`Meetings`],kindList:Ct.Meetings},{key:`Prizes`,tab:D,recordTab:`Prizes`,label:`Prizes (pictures)`,group:`prizes`,load:[`Prizes`,D]},{key:`Lots`,tab:D,recordTab:`Lots`,label:`Lots (pictures)`,group:`prizes`,load:[`Lots`,D]}];function Mi(e){let t=ji.filter(t=>u(e,t.group,`edit`)).flatMap(e=>e.load);return[...new Set(t)]}var Ni=e=>u(e,`files`,`edit`),Pi=e=>Ni(e)||Mi(e).length>0,Fi=`en-GB`,Ii=(e,t)=>String(e).localeCompare(String(t),Fi,{sensitivity:`base`,numeric:!0}),Li=t=>/^\d{4}-\d{2}-\d{2}$/.test(String(t))?e(t):String(t??``);function Ri(e,t,n){if(!n)return``;if(n._label&&n._label!==n.id)return Li(n._label);let r=e.columns(t).find(e=>e.type===`ref`&&e.required);return r&&n[r.name]?e.label(r.ref,n[r.name]):n.id}var zi={key:`other`,label:`Other (not for one record)`},Bi=e=>!!e&&e.tab===`OtherFiles`;function Vi(e){return e.slice().sort((e,t)=>Ii(e.tabLabel,t.tabLabel)||Ii(Li(e.recordLabel),Li(t.recordLabel))||Ii(e.columnLabel,t.columnLabel))}function Hi(e){return[...new Set(e.map(e=>e.tabLabel))].sort(Ii)}function Ui(e,{q:t=``,area:n=``}={}){let r=String(t).toLowerCase().split(/\s+/).filter(Boolean);return e.filter(e=>{if(n&&e.tabLabel!==n)return!1;let t=[e.tabLabel,Li(e.recordLabel),e.columnLabel,e.comment||``,e.addedBy||``].join(` `).toLowerCase();return r.every(e=>t.includes(e))})}function Wi(e){return Bi(e)?[e.kind===`link`?`Link`:`File`,e.comment].filter(Boolean).join(`: `):e.kind===`image`?`Picture`:e.kind===`folder`?`${e.columnLabel} (folder)`:e.columnLabel}function Gi(e,t){if(!t)return[];if(t.recordTab){let n=e.column(D,`file`);return!e.canWrite(t.recordTab)||!kt(n,`Images`)?[]:[{name:`file`,label:`Picture`,kind:`images`}]}let n=e.columns(t.tab).map(e=>({name:e.name,label:e.label,kind:kt(e,t.tab)})).filter(e=>e.kind);if(!t.kindList||!e.canWrite(t.tab))return n;let r=e.list(t.kindList).filter(e=>e.active!==!1).map(e=>({name:`kind:${e.value}`,label:e.label,kind:`all`,listKind:e.value}));return n.concat(r)}function Ki(e,t,n,r){if(!t||t.recordTab||!r||r.listKind||!n)return``;let i=e.byId(t.tab,n);return i&&i[r.name]?String(i[r.name]):``}function qi(e){return ji.filter(t=>Gi(e,t).length)}function Ji(e,t){if(!t)return[];let n=t.recordTab||t.tab;return e.rows(n).map(t=>({value:t.id,label:Ri(e,n,t)})).sort((e,t)=>Ii(e.label,t.label))}function Yi(e,t,n,{replace:r=!1}={}){return e.recordTab?{tab:D,recordTab:e.recordTab,recordId:t}:String(n).startsWith(`kind:`)?{tab:e.tab,id:t,kind:String(n).slice(5)}:r?{tab:e.tab,id:t,column:n,replace:!0}:{tab:e.tab,id:t,column:n}}var Xi=g({filesScreen:()=>$i,html:()=>ea,setup:()=>ta}),Zi={"--cols":gt([{type:`string`},{type:`list`},{type:`string`}],!0)},Qi=()=>({open:!1,area:``,recordId:``,column:``,file:null,busy:!1,stage:``,error:``,done:null,title:``,comment:``,how:`file`,link:``,replace:!1});function $i(){return{status:`loading`,loadError:``,files:[],q:``,area:``,grid:Zi,up:Qi(),folderUrl:``,formStatus:`idle`,formError:``,removeError:``,menu:{f:null,style:{}},init(){this.reload(),this.closeMenuOnMove=e=>{e.target&&e.target.closest&&e.target.closest(`.amenu`)||this.closeMenu()},window.addEventListener(`scroll`,this.closeMenuOnMove,!0),window.addEventListener(`resize`,this.closeMenuOnMove)},destroy(){window.removeEventListener(`scroll`,this.closeMenuOnMove,!0),window.removeEventListener(`resize`,this.closeMenuOnMove)},menuKey:e=>e?e.tab+e.recordId+e.column+e.fileId:``,openMenu(e,t){let n=this.menu.f&&this.menuKey(this.menu.f)===this.menuKey(e);if(this.closeMenu(),n)return;let r=t.currentTarget.getBoundingClientRect(),i={right:`${Math.max(8,window.innerWidth-r.right)}px`},a=window.innerHeight-r.bottom;a<200&&r.top>a?i.bottom=`${window.innerHeight-r.top+4}px`:i.top=`${r.bottom+4}px`,this.menu={f:e,style:i},this.$nextTick(()=>{let e=this.$root.querySelector(`.amenu a, .amenu button`);e&&e.focus()})},closeMenu(){this.menu.f&&(this.menu={f:null,style:{}})},recordScreen(e){return e&&!Bi(e)?Jt(e.tab):null},openRecord(e){this.closeMenu(),Yt(e.tab,e.recordId)},async reload(){this.status=`loading`;try{let e=await i.call(`files.list`,{});this.files=e.files||[],this.folderUrl=e.folderUrl||``,this.status=`ready`}catch(e){this.loadError=e.message||`Could not load.`,this.status=`error`}},get canAddOther(){return Ni(w.member)},get mayUpload(){return Pi(w.member)},get areas(){return Hi(this.files)},get shown(){return Vi(Ui(this.files,{q:this.q,area:this.area}))},get filtered(){return!!(this.q.trim()||this.area)},get countText(){let e=this.shown.length,t=this.files.length;return e===t?`${t} ${t===1?`file`:`files`}`:`Showing ${e} of ${t} files`},clearFilters(){this.q=``,this.area=``},nice:Li,what:Wi,other:Bi,async remove(e){this.closeMenu(),this.removeError=``;try{await i.call(`files.removeOther`,{id:e.recordId}),this.files=this.files.filter(t=>!(Bi(t)&&t.recordId===e.recordId)),h.store(`toast`).show(`Removed "${e.recordLabel}".`,async()=>{await i.call(`records.restore`,{tab:`OtherFiles`,id:e.recordId}),await this.reload()})}catch(e){this.removeError=e.message||`Could not remove it.`}},async openUpload(){if(this.up={...Qi(),open:!0},this.formStatus!==`ready`&&this.formStatus!==`loading`){this.formStatus=`loading`;try{let e=Mi(w.member);e.length&&await C.load(e),this.formStatus=`ready`}catch(e){this.formError=e.message||`Could not load.`,this.formStatus=`error`}}},closeUpload(){this.up.busy||(this.up.open=!1)},another(){let{area:e,how:t}=this.up;this.up={...Qi(),open:!0,area:e,how:t},this.pickArea(),this.$refs.upFile&&(this.$refs.upFile.value=``)},get upAreas(){return this.formStatus===`ready`?this.canAddOther?[...qi(C),zi]:qi(C):[]},get upOther(){return this.up.area===zi.key},get upArea(){return ji.find(e=>e.key===this.up.area)||null},get upRecords(){return Ji(C,this.upArea)},get upFields(){return Gi(C,this.upArea)},get upField(){return this.upFields.find(e=>e.name===this.up.column)||null},get upAccept(){return this.upField?At(this.upField.kind):``},get upCurrent(){return Ki(C,this.upArea,this.up.recordId,this.upField)},get upHint(){return this.upField?jt(this.upField.kind,!1):``},get otherAccept(){return At(`all`)},get otherHint(){return jt(`all`,!1)},get canSend(){return this.up.busy?!1:this.upOther?!!(this.up.title.trim()&&(this.up.how===`file`?this.up.file:this.up.link.trim())):!!(this.upArea&&this.up.recordId&&this.upField&&this.up.file)},pickArea(){this.up.recordId=``,this.up.replace=!1;let e=this.upFields;this.up.column=e.length===1?e[0].name:``,this.up.error=``},picked(e){this.up.file=e.target.files&&e.target.files[0]||null,this.up.error=``},async sendOther(){this.up.busy=!0,this.up.error=``;try{let e=await Ut({api:i,title:this.up.title,comment:this.up.comment,link:this.up.how===`link`?this.up.link.trim():``,file:this.up.how===`file`?this.up.file:null,onStage:e=>{this.up.stage=e}});this.up.done={url:e.entry?e.entry.url:``,text:`Added "${this.up.title.trim()}" to Other.`},this.reload()}catch(e){this.up.error=e.message||`Could not add it. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}},async send(){if(!this.canSend)return;if(this.upOther){await this.sendOther();return}let e=this.upArea,t=this.upField;this.up.busy=!0,this.up.error=``;try{let n=await Ht({api:i,records:C,file:this.up.file,kind:t.kind,target:Yi(e,this.up.recordId,t.name,{replace:this.up.replace}),onStage:e=>{this.up.stage=e}}),r=Ji(C,e).find(e=>e.value===this.up.recordId),a=`${r?r.label:`the record`} (${t.label.toLowerCase()})`;this.up.done={url:n.url,text:n.attached?`Added to ${a}, next to the files already there.`:`Uploaded to ${a}.`},this.reload()}catch(e){this.up.error=e.message||`Could not upload. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}}}}var ea=`
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
        <template x-if="other(menu.f) && menu.f.canRemove">
          <div class="contents"><div class="sep"></div><button type="button" role="menuitem" class="warn" @click="remove(menu.f)">Remove</button></div>
        </template>
      </div>
    </template>
  </div>
  </section>`;function ta(e){e.data(`filesScreen`,$i)}var na=[`Lists`,`system/Lists`],ra={year:`year`,all_years:`system`},ia=`To change what a value means, retire it and add a new one: records keep the old one.`,aa=`Shared by every year: a change here shows in all years, past ones too.`;function oa(e,t,n){if(!e||!e.items)return[];let r=e=>(e===`system`?n:t)||[];return(e.screens||[]).map(t=>({id:t.id,label:t.label,lists:Object.entries(e.items).filter(([,e])=>e.screen===t.id).map(([e,t])=>{let n=ra[t.scope]||`year`;return{name:e,sheet:n,title:t.title,help:t.help||``,fixed:t.fixed===!0,allYears:t.scope===`all_years`,count:r(n).filter(t=>String(t.list_name).trim()===e&&t.active!==!1).length}})})).filter(e=>e.lists.length)}var sa=(e,t)=>e.flatMap(e=>e.lists).find(e=>e.name===t)||null;function ca(e,t,n=[],r=!1){let i=new Set(n.filter(e=>e.locked).map(e=>e.value));return e.filter(e=>String(e.list_name).trim()===t).map(e=>({id:e.id,value:String(e.value),label:String(e.label||e.value),order:Number(e.sort_order)||0,active:e.active!==!1,locked:r||i.has(String(e.value))})).sort((e,t)=>e.order-t.order||e.label.localeCompare(t.label,`en-GB`))}function la(e,t,n){if(!e)return``;let r=e[t]||0;return n?r?r===1?`Used once`:`Used ${r} times`:`Not used yet`:r?`Still on ${r===1?`one record`:`${r} records`}`:``}var ua=(e,t)=>!!e&&!t.locked&&!(e[t.value]>0);function da(e,t,n){let r=e.map(e=>e.id),i=r.indexOf(t),a=i+n;return i<0||a<0||a>=r.length?null:([r[i],r[a]]=[r[a],r[i]],r)}var fa={none:`None`,view:`View`,edit:`Edit`,full:`Full`},pa=[`none`,`view`,`edit`],ma=`Everyone is what each person gets. Click a person to give them more: each click goes up a level, and after Full back to what everyone has. View sees, Edit also adds and changes, Full can also remove.`,ha=`Admin: can do everything, including members and permissions.`,J=e=>t.indexOf(e),Y=e=>fa[e]||fa.none,ga=e=>e===`admin`||/^can_/.test(String(e)),X=e=>e&&e.column||`can_${e&&e.id}`;function _a(e,t){return!!t&&J(t)>J(e.default)}function va(e,t){return t?t.admin===!0?`full`:_a(e,t[X(e)])?t[X(e)]:e.default:e.default}function ya(e,t){return(e||[]).map(e=>{let n=va(e,t);return{id:e.id,label:e.label,level:n,levelLabel:Y(n),grant:!(t&&t.admin===!0)&&_a(e,t&&t[X(e)])}})}var ba=e=>Object.fromEntries((e||[]).map(e=>[e.id,e.default]));function xa(e,t){let n={};for(let r of e||[]){let e=t&&t[r.id];pa.includes(e)&&e!==r.default&&(n[r.id]=e)}return n}var Sa=[`members`],Ca=e=>pa.filter(t=>!(t===`none`&&Sa.includes(e))).map(e=>({value:e,label:Y(e)})),wa={none:`Cannot see it`,view:`Can see it`,edit:`View, plus add and change`,full:`Edit, plus remove`};function Ta(e,n){let r=ya(e,n);return t.map(e=>({level:e,label:Y(e),help:wa[e],items:r.filter(t=>t.level===e)}))}var Ea=(e,n)=>t.includes(n)&&J(n)>=J(e.default),Da=(e,t)=>J(t)>J(e.default)?t:``;function Oa(e,t,n){return e?Ea(e,n)?n===va(e,t)?`here`:`target`:`locked`:``}function ka(e,t){let n=Ca(e).map(e=>e.value);return n[(n.indexOf(t)+1)%n.length]}function Aa(e,n){let r=[``,...t.filter(t=>J(t)>J(e.default))];return r[(r.indexOf(_a(e,n)?n:``)+1)%r.length]}function ja(e,t){if(t&&t.admin===!0)return{level:`full`,kind:`admin`};let n=va(e,t);return{level:n,kind:n===e.default?`same`:`more`}}function Ma(e,t,n){let r=X(e),i={...n&&n[t.id]||{}},a=_a(e,t[r])?t[r]:``,o=Aa(e,r in i?i[r]:t[r]);o===a?delete i[r]:i[r]=o;let s={...n||{}};return Object.keys(i).length?s[t.id]=i:delete s[t.id],s}function Na(e,t){return Object.entries(t||{}).map(([t,n])=>{let r={};for(let[t,i]of Object.entries(n)){let n=(e||[]).find(e=>X(e)===t);n&&(r[t]=_a(n,i)?i:``)}return{id:t,values:r}}).filter(e=>Object.keys(e.values).length)}var Pa=g({MEMBERS:()=>Fa,html:()=>Ja,setup:()=>Za}),Fa={tab:`Members`,list:[`_label`,`admin`],form:[`first_name`,`last_name`,`google_email`,`phone`],filters:[`admin`],sort:`_label`,noun:`member`,defaults:{active:!0,admin:!1},empty:`No members yet. Add the committee so they can sign in.`},Z=h.reactive({status:`idle`,error:``,groups:[]}),Ia=null;function La(e=!1){return Ia&&(e?Z.status===`loading`:Z.status!==`error`)||(Z.status=`loading`,Ia=i.call(`permissions.get`,{}).then(e=>{Z.groups=e.groups||[],Z.status=`ready`},e=>{Z.error=e.message||`Could not load the permissions.`,Z.status=`error`})),Ia}var Ra=()=>!!(w.member&&w.member.admin===!0),za=(e,t)=>`
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
    </div>`,Ba=`
  <section class="flex flex-col gap-2" aria-label="Permissions">
    <h3 class="m-0 text-[13px] font-semibold" x-text="'What ' + (record.first_name || 'this member') + ' can do'"></h3>
    <p class="muted m-0 text-[13px]" x-show="perms.status === 'loading'">Loading...</p>
    <p class="muted m-0 text-[13px]" x-show="perms.status === 'error'" x-text="perms.error"></p>
    <p class="m-0 text-[13.5px]" x-show="record.admin === true">${ha}</p>
    <template x-if="perms.status === 'ready' && record.admin !== true">
      <div class="flex flex-col gap-2">
        <p class="fhelp m-0">Dark parts are more than everyone has.</p>${za(`record`,!1)}
      </div>
    </template>
  </section>`,Va=`
  <section class="flex flex-col gap-2" aria-label="Permissions" x-show="permCols.length">
    <h3 class="m-0 text-[13px] font-semibold" x-text="'What ' + (form.first_name || 'this member') + ' can do'"></h3>
    <template x-if="permCol('admin')">
      <label class="fcheck"><input type="checkbox" x-model="form.admin" :disabled="!permCol('admin').writable"><span>Admin: can do everything, including members and permissions</span></label>
    </template>
    <p class="muted m-0 text-[13px]" x-show="!form.admin && perms.status === 'loading'">Loading...</p>
    <p class="ferr" x-show="!form.admin && perms.status === 'error'" x-text="perms.error"></p>
    <template x-if="!form.admin && perms.status === 'ready'">
      <div class="flex flex-col gap-2">
        <p class="fhelp m-0" role="status" x-text="permHint()"></p>${za(`form`,!0)}
      </div>
    </template>
  </section>`;function Ha(){let e=L({...Fa,ownField:ga,extend:{perms:Z,get formCols(){return E([...this.cfg.form,...this.cols.filter(e=>ga(e.name)).map(e=>e.name)],this.cols).filter(e=>!Se(e.name)&&e.name!==`_label`)},get permCols(){return this.cols.filter(e=>ga(e.name))},permCol(e){return this.cols.find(t=>t.name===e)||{writable:!1}},get permGroups(){return Z.groups.filter(e=>this.cols.some(t=>t.name===X(e)))},permPick:null,permOver:``,permLevels(e,t){return Ta(t?this.permGroups:Z.groups,e)},permGroup(e){return Z.groups.find(t=>t.id===e)||null},permColumnOf(e){return X(this.permGroup(e))},permState(e){return this.permPick?Oa(this.permGroup(this.permPick),this.form,e):``},permBoxClass(e){let t=this.permState(e);return{target:t===`target`,locked:t===`locked`,over:this.permOver===e}},permToggle(e){this.permPick=this.permPick===e?null:e},permMove(e){if(this.permState(e)!==`target`)return;let t=this.permGroup(this.permPick);this.form[X(t)]=Da(t,e),this.permPick=null,this.permOver=``},permDragOver(e,t){this.permState(t)===`target`&&(e.preventDefault(),this.permOver=t)},permHint(){let e=this.permPick&&this.permGroup(this.permPick);return e?`Now pick the level for ${e.label}. It cannot go below what everyone has (${Y(e.default)}).`:`Tap a part, then the level it should have. Dark parts are more than everyone has.`}}}),t=e.init;return e.init=function(){return La(),t.call(this)},e}var Ua=`
  <div class="card" x-show="admin">
    <div class="card-h"><h2>Who can do what</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0">${ma}</p>
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
  </div>`;function Wa(){return{perms:Z,status:`loading`,error:``,done:``,busy:!1,defaults:{},edits:{},options:Ca,levelLabel:Y,nextDefault:ka,get admin(){return Ra()},get groups(){return Z.groups.map(e=>({...e,default:this.defaults[e.id]||e.default}))},get people(){return C.rows(`Members`).filter(e=>e.active!==!1).map(e=>this.edits[e.id]?{...e,...this.edits[e.id]}:e)},get adminNames(){return this.people.filter(e=>e.admin===!0).map(e=>e.first_name||e._label).join(`, `)},get changed(){return Object.keys(xa(Z.groups,this.defaults)).length>0||Object.keys(this.edits).length>0},init(){this.admin&&this.reload()},async reload(){this.status=`loading`;try{if(await Promise.all([La(!0),C.load([`Members`])]),Z.status===`error`)throw Error(Z.error);this.reset(),this.status=`ready`}catch(e){this.error=e.message||`Could not load who can do what.`,this.status=`error`}},reset(){this.defaults=ba(Z.groups),this.edits={},this.error=``},cell(e,t){return ja(e,t)},look(e,t){let n=ja(e,t),r=!!(this.edits[t.id]&&X(e)in this.edits[t.id]);return`lv-${n.level} ${r?`pending`:n.kind}${r&&this.busy?` saving`:``}`},everyonePending(e){let t=Z.groups.find(t=>t.id===e.id);return!!(t&&t.default!==e.default)},everyoneLook(e){let t=this.everyonePending(e);return`lv-${e.default}${t?` pending`:``}${t&&this.busy?` saving`:``}`},step(e,t){if(t.admin===!0)return;let n=C.byId(`Members`,t.id)||t;this.edits=Ma(e,n,this.edits)},moreFor(e){return this.people.filter(t=>ja(e,t).kind===`more`).map(t=>`${t.first_name||t._label} (${Y(ja(e,t).level)})`).join(`, `)},async save(){if(this.busy||!this.changed)return;this.busy=!0,this.error=``,this.done=``;let e=xa(Z.groups,this.defaults),t=Na(this.groups,this.edits),n=[];try{Object.keys(e).length&&(Z.groups=(await i.call(`permissions.saveDefaults`,{defaults:e})).groups||Z.groups,this.defaults=ba(Z.groups));let r={...this.edits};for(let e of t)try{await C.save(`Members`,e.values,e.id),delete r[e.id]}catch(t){let r=C.byId(`Members`,e.id);n.push(`${r?r.first_name||r._label:e.id}: ${t.message||`did not save`}`)}this.edits=n.length?r:{},n.length?this.error=`Not saved for ${n.join(`; `)}`:this.done=`Saved. People get it from their next click.`}catch(e){this.error=e.message||`That did not save.`}finally{this.busy=!1}}}}var Ga=`People sign in with the Google account listed here. Only active members can sign in. Only an Admin adds or changes members and what they can do.`,Ka=`The choices in every dropdown, grouped by the screen they belong to. Reorder, retire or add values. Records keep what they hold: a retired value stays on them but is no longer offered. Values marked "Used by the app" stay as they are, because the app's rules depend on them.`,qa=`
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
                    <span class="lit-t"><span x-text="l.title"></span><span class="ltag all" x-show="l.allYears">All years</span></span>
                    <small class="lit-h" x-text="l.help"></small>
                    <small class="lit-n" x-text="l.count"></small>
                  </button>
                </template>
              </div>
            </template>
          </nav>
          <section class="lmain" x-show="choice">
            <button class="btn sm lback" type="button" @click="back()">&larr; All lists</button>
            <h3 class="lhead"><span x-text="choice && choice.title"></span><span class="ltag all" x-show="choice && choice.allYears">All years</span></h3>
            <p class="muted m-0" x-text="choice && choice.help"></p>
            <p class="fhelp m-0" x-show="choice && choice.allYears">${aa}</p>
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
            <p class="fhelp m-0" x-show="canEdit && !fixed">${ia}</p>
            <p class="muted m-0 text-[13px]" x-show="!fixed && !canEdit">You can see the lists but not change them.</p>
            <form class="flex gap-2 max-w-md" x-show="canEdit" @submit.prevent="add()">
              <input class="inp" x-model="newLabel" maxlength="60" placeholder="New value" aria-label="New value">
              <button class="btn pri shrink-0" type="submit" :disabled="busy || !newLabel.trim()">Add</button>
            </form>
          </section>
        </div>
      </template>
    </div>
  </div>`,Ja=`
  <section class="flex flex-col gap-4" x-data="settingsPage">
    <template x-if="showMembers">
      <div class="contents" x-data="membersCard">${R({title:`Members`,intro:Ga,panelViewHtml:Ba,panelEditHtml:Va})}</div>
    </template>
    <div class="contents" x-data="whoCard">${Ua}</div>
    <div class="contents" x-data="listsCard">${qa}</div>
    <p class="note m-0">Event settings and years will be added to this page later.</p>
  </section>`,Ya=()=>typeof window<`u`&&window.matchMedia&&window.matchMedia(`(min-width: 768px)`).matches;function Xa(){return{intro:Ka,status:`loading`,error:``,which:``,busy:!1,renaming:null,renameText:``,newLabel:``,usage:{},get canSee(){return u(w.member,`settings`,`view`)},get groups(){return oa(C.listInfo(),C.rows(`Lists`),C.rows(`system/Lists`))},get choice(){return this.which?sa(this.groups,this.which):null},get tab(){return this.choice&&this.choice.sheet===`system`?`system/Lists`:`Lists`},get fixed(){return!!(this.choice&&this.choice.fixed)},get canEdit(){return!!this.choice&&!this.fixed&&C.canWrite(this.tab)},get canRetire(){return this.canEdit},get values(){let e=this.choice;if(!e)return[];let t=ca(C.rows(this.tab),e.name,C.list(e.name),e.fixed);return[...t.filter(e=>e.active),...t.filter(e=>!e.active)]},use(e){return la(this.usage[this.which],e.value,e.active)},renamable(e){return ua(this.usage[this.which],e)},init(){this.canSee&&this.load()},async load(){this.status=C.has(na)&&C.listInfo()?`ready`:`loading`;try{await C.load(na),!this.which&&Ya()&&this.groups.length&&this.pick(this.groups[0].lists[0].name),this.status=`ready`}catch(e){this.error=e.message||`Could not load the lists.`,this.status=`error`}},pick(e){this.which=e,this.cancelRename(),this.error=``,this.count(e),this.toTop()},back(){this.which=``,this.toTop()},toTop(){!Ya()&&this.$root&&this.$root.scrollIntoView&&this.$nextTick(()=>this.$root.scrollIntoView({block:`start`}))},async count(e){try{let t=await i.call(`lists.usage`,{list_name:e});this.usage={...this.usage,[e]:t.counts||{}}}catch{}},async run(e,t){this.busy=!0,this.error=``;try{return await i.call(e,{sheet:this.choice.sheet,...t}),await C.load(na),!0}catch(e){return this.error=e.message||`That did not save.`,e.code===`conflict`&&await C.load(na).catch(()=>{}),!1}finally{this.busy=!1}},startRename(e){this.renaming=e.id,this.renameText=e.label},cancelRename(){this.renaming=null,this.renameText=``},async saveRename(e){this.renameText.trim()===e.label||await this.run(`lists.save`,{id:e.id,label:this.renameText})?this.cancelRename():this.count(this.which)},setActive(e,t){return this.run(`lists.save`,{id:e.id,active:t})},move(e,t){let n=da(this.values,e.id,t);return n?this.run(`lists.reorder`,{list_name:this.which,ids:n}):null},async add(){await this.run(`lists.save`,{list_name:this.which,label:this.newLabel})&&(this.newLabel=``)}}}function Za(e){e.data(`settingsPage`,()=>({get showMembers(){return u(w.member,`members`,`view`)}})),e.data(`membersCard`,Ha),e.data(`whoCard`,Wa),e.data(`listsCard`,Xa)}var Qa={sponsors:Lr,suppliers:$r,tasks:xi,files:Xi,settings:Pa};function $a(e){return Qa[e]?Qa[e].html:Xe}function eo(e){for(let t of Object.values(Qa))typeof t.setup==`function`&&t.setup(e)}var to=p.map(e=>e.id),no=`dashboard`,Q=me({api:i});c(()=>Q.ended()),Q.subscribe(e=>{w.member=e.status===`signedIn`&&e.member||null,e.status!==`signedIn`&&(C.clear(),h.store(`toast`)&&h.store(`toast`).dismiss())}),eo(h),h.store(`toast`,Ye());var $={host:null,box:null};h.data(`committeeApp`,()=>({hash:d(to,no),sideOpen:!1,moreOpen:!1,icon:ee,env:r,auth:{...Q.state},googleError:``,googleFor:``,init(){window.addEventListener(`hashchange`,()=>{this.hash=d(to,no)}),Q.subscribe(e=>{this.auth={...e}}),this.$watch(`route`,()=>this.showScreen()),Q.restore().then(()=>{r.mock&&this.auth.status===`signedOut`&&/[?&]preview=1/.test(location.search)&&this.mockSignIn(`admin`)})},get modules(){return s(p,this.member)},get groups(){return n(this.modules)},get tabs(){return l.map(e=>this.modules.find(t=>t.id===e)).filter(Boolean)},get moreItems(){return this.modules.filter(e=>!l.includes(e.id))},get route(){let e=p.find(e=>e.id===this.hash);return f(e,this.member)?this.hash:no},mountHost(e){$.host=e,$.box=null,queueMicrotask(()=>this.showScreen())},showScreen(){let{host:e}=$;if(!e||!e.isConnected)return;let t=this.route;if($.box&&$.box.dataset.screen===t&&$.box.isConnected)return;$.box&&h.destroyTree($.box);let n=document.createElement(`div`);n.className=`contents`,n.dataset.screen=t,n.innerHTML=$a(t),e.replaceChildren(n),$.box=n,h.initTree(n)},go(e){this.sideOpen=!1,this.moreOpen=!1,location.hash=`#/${e}`,window.scrollTo({top:0})},get current(){return p.find(e=>e.id===this.route)},SIGN_IN_SLOW:ue,mockLogins:[[`admin`,`Admin`],[`member`,`Member`],[`granted`,`Member with grants`]],get showShell(){return this.auth.status===`signedIn`},get member(){return this.auth.member||{}},get memberKind(){return this.member.admin?`Admin`:`Member`},get clientId(){return ie(this.$store.ball.settings&&this.$store.ball.settings.google_client_id)},isMoreRoute(){return!l.includes(this.route)},mountGoogle(e,t){if(r.mock||!t)return;let n=t;this.googleFor===n&&e.childElementCount||(this.googleFor=n,this.googleError=``,ye(e,{clientId:t,onCredential:e=>Q.signIn(e)}).catch(e=>{this.googleError=e.message,this.googleFor=``}))},mockSignIn(e){r.mock&&oe(e)&&Q.signIn(oe(e))},signOut(){this.sideOpen=!1,be(),Q.signOut(),this.googleFor=``}})),o({app:`committee`}),h.start();