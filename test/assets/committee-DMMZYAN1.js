import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,l as s,m as c,n as l,o as u,p as d,s as f,t as p,u as m}from"./modules-CyBSRW-n.js";var h=Object.defineProperty,g=(e,t)=>{let n={};for(var r in e)h(n,r,{get:e[r],enumerable:!0});return t||h(n,Symbol.toStringTag,{value:`Module`}),n},_=`Your session ended. Please sign in again.`,ee=/^[0-9]+-[a-z0-9]+\.apps\.googleusercontent\.com$/;function te(e){return typeof e==`string`&&ee.test(e.trim())?e.trim():null}var ne=[`chair`,`treasurer`,`guest_team`,`member`];function re(e){return ne.includes(e)?`mock.${e}.token`:null}var ie=2147483647;function ae({api:e,now:t=()=>Date.now(),setTimer:n=setTimeout,clearTimer:r=clearTimeout}){let i={status:e.session.get()?`checking`:`signedOut`,member:null,expiresAt:null,message:``},a=null,o=new Set,s=()=>o.forEach(e=>e(i));function c(e){a&&r(a),a=null;let i=Date.parse(e);if(Number.isNaN(i))return;let o=i-t();if(o<=0)return d();a=n(d,Math.min(o,ie))}function l(e){i.status=`signedIn`,i.member=e.member||null,i.expiresAt=e.expiresAt||null,i.message=``,c(i.expiresAt),s()}function u(t=``){a&&r(a),a=null,e.session.clear(),i.status=`signedOut`,i.member=null,i.expiresAt=null,i.message=t,s()}function d(){i.status===`signedOut`&&!e.session.get()?(i.message=_,s()):u(_)}async function f(){if(!e.session.get())return u(``);i.status=`checking`,s();try{l(await e.call(`auth.me`))}catch(e){if(e.code===`unauthorised`||e.code===`forbidden`)return u(_);i.status=`signedOut`,i.message=`Could not check your sign-in. Check your connection and reload.`,s()}}async function p(t){if(t){i.status=`signingIn`,i.message=``,s();try{let n=await e.call(`auth.signIn`,{idToken:t});e.session.set(n.session),l(n)}catch(e){u(e.message||`Sign-in failed. Please try again.`)}}}async function m(){try{e.session.get()&&await e.call(`auth.signOut`)}catch{}u(``)}return{state:i,restore:f,signIn:p,signOut:m,ended:d,subscribe:e=>(o.add(e),()=>o.delete(e))}}var oe=`https://accounts.google.com/gsi/client`,se=null;function ce(){return window.google&&window.google.accounts&&window.google.accounts.id?Promise.resolve(window.google):(se||=new Promise((e,t)=>{let n=document.createElement(`script`);n.src=oe,n.async=!0,n.defer=!0,n.onload=()=>e(window.google),n.onerror=()=>{se=null,t(Error(`Could not load Google sign-in`))},document.head.appendChild(n)}),se)}var le=null;async function ue(e,{clientId:t,onCredential:n,dark:r}){let i=await ce();le!==t&&(i.accounts.id.initialize({client_id:t,callback:e=>n(e&&e.credential),auto_select:!1,use_fedcm_for_prompt:!0,cancel_on_tap_outside:!0,context:`signin`,ux_mode:`popup`}),le=t),e.replaceChildren(),i.accounts.id.renderButton(e,{type:`standard`,theme:r?`filled_black`:`outline`,size:`large`,text:`signin_with`,shape:`pill`,logo_alignment:`left`,width:Math.min(320,Math.max(200,Math.floor(e.clientWidth||280)))})}function de(){window.google&&window.google.accounts&&window.google.accounts.id&&window.google.accounts.id.disableAutoSelect()}var fe=[`id`,`created_at`,`updated_at`,`updated_by`],pe=e=>fe.includes(e),me=`en-GB`,he=(e,t)=>String(e.label).localeCompare(String(t.label),me,{sensitivity:`base`}),v=e=>Array.isArray(e)?e:e==null||e===``?[]:[e];function ge(e,{wrap:t=e=>e}={}){let n=t({year:null,role:null,tabs:{},lists:{}});function r(e){if(n.tabs[e])return n.tabs[e];let t=e.startsWith(`system/`)?e.slice(7):`system/${e}`;return n.tabs[t]||null}async function i(t){let r=await e.call(`records.list`,{tabs:t});n.year=r.year??n.year,n.role=r.role??n.role;for(let[e,t]of Object.entries(r.tabs||{}))n.tabs[e]={canWrite:!!t.canWrite,columns:t.columns||[],rows:t.rows||[]};return r.lists&&(n.lists=r.lists),r}let a=e=>r(e)?r(e).rows:[],o=e=>r(e)?r(e).columns:[],s=(e,t)=>o(e).find(e=>e.name===t)||null,c=e=>!!(r(e)&&r(e).canWrite),l=e=>e.every(e=>!!r(e)),u=(e,t)=>a(e).find(e=>e.id===t)||null;function d(e,t){if(t==null||t===``)return``;let n=u(e,t);return n?n._label||n.id:String(t)}let f=e=>n.lists[e]||[];function p(e,t){if(t==null||t===``)return``;let n=f(e).find(e=>e.value===t);return n?n.label||n.value:String(t)}function m(e,t){let n=f(e),r=new Set(v(t)),i=n.filter(e=>e.active!==!1||r.has(e.value)).map(e=>({value:e.value,label:e.label||e.value,active:e.active!==!1}));for(let e of r)n.some(t=>t.value===e)||i.push({value:e,label:String(e),active:!1});return i}function h(e,t){let n=new Set(v(t)),r=a(e).filter(e=>e.active!==!1||n.has(e.id)).map(e=>({value:e.id,label:e._label||e.id})).sort(he);for(let e of n)r.some(t=>t.value===e)||r.push({value:e,label:String(e)});return r}function g(e,t){let n=r(e);if(!n||!t||!t.id)return;let i=n.rows.findIndex(e=>e.id===t.id);i>=0?n.rows.splice(i,1,t):n.rows.push(t)}async function _(t,n,r){let i={tab:t,values:n};if(r){i.id=r;let e=u(t,r);e&&e.updated_at&&(i.updatedAt=e.updated_at)}try{let n=await e.call(`records.save`,i);return g(t,n.row),n}catch(n){if(n&&n.code===`conflict`&&r){let i=n.details&&n.details.row;if(!i)try{i=(await e.call(`records.get`,{tab:t,id:r})).row}catch{i=null}i&&(g(t,i),n.row=i)}throw n}}function ee(){n.year=null,n.role=null,n.tabs={},n.lists={}}return{state:n,load:i,has:l,rows:a,columns:o,column:s,canWrite:c,byId:u,label:d,list:f,listLabel:p,options:m,refOptions:h,put:g,save:_,clear:ee}}function _e(e){let t=String(e||``).replace(/_member_id$/,``).replace(/_(id|ids|pence)$/,``).replace(/_/g,` `).trim();return t?t[0].toUpperCase()+t.slice(1):``}var y=e=>e&&e.label||_e(e&&e.name);function ve(e){let t=String(e&&e.description||``).trim();return!t||t.toLowerCase()===y(e).toLowerCase()?``:t.replace(/^TRUE:\s*/,`Ticked: `).replace(/^FALSE:\s*/,`Unticked: `)}var b=e=>_e(String(e??``))||``,ye=/^(-)?£?(-)?(\d{1,3}(?:,\d{3})+|\d+)?(?:\.(\d{1,2}))?$/;function be(e){if(typeof e==`number`)return Number.isFinite(e)?Math.round(e*100):NaN;let t=String(e??``).replace(/\s+/g,``);if(!t)return null;let n=ye.exec(t);if(!n||n[1]&&n[2]||!n[3]&&!n[4])return NaN;let r=n[3]?Number(n[3].replace(/,/g,``)):0,i=n[4]?Number(n[4].padEnd(2,`0`)):0,a=r*100+i;return Number.isSafeInteger(a)?n[1]||n[2]?-a:a:NaN}var xe=new Intl.NumberFormat(me,{style:`currency`,currency:`GBP`});function x(e){return e==null||e===``||!Number.isFinite(Number(e))?``:xe.format(Number(e)/100)}function Se(e){if(e==null||e===``||!Number.isFinite(Number(e)))return``;let t=Number(e),n=t<0?`-`:``,r=Math.abs(t),i=Math.floor(r/100),a=r%100;return a?`${n}${i}.${String(a).padStart(2,`0`)}`:`${n}${i}`}var Ce=/^(\d{4})-(\d{2})-(\d{2})$/,we=/^([01]\d|2[0-3]):([0-5]\d)$/;function Te(e){let t=Ce.exec(e);if(!t)return!1;let n=new Date(Date.UTC(+t[1],t[2]-1,+t[3]));return n.getUTCFullYear()===+t[1]&&n.getUTCMonth()===t[2]-1&&n.getUTCDate()===+t[3]}function Ee(e,t,n={}){if(!e)return t==null?``:String(t);let r=n.listLabel||((e,t)=>t),i=n.refLabel||((e,t)=>t);switch(e.type){case`pence`:return x(t);case`int`:return t==null||t===``?``:new Intl.NumberFormat(me).format(Number(t));case`bool`:return t?`Yes`:`No`;case`date`:return o(t);case`datetime`:return a(t,n.timeZone);case`time`:return typeof t==`string`?t.slice(0,5):``;case`list`:return t==null||t===``?``:r(e.list,t)||``;case`lists`:return v(t).map(t=>r(e.list,t)).join(`, `);case`ref`:return t?i(e.ref,t):``;case`refs`:return v(t).map(t=>i(e.ref,t)).join(`, `);case`enum`:return t?b(t):``;case`json`:return t==null?``:JSON.stringify(t);default:return t==null?``:String(t)}}function De(e,t){if(!e||typeof t!=`string`||!t.trim())return null;let n=t.trim();if(e.type===`email`)return/^[^\s@]+@[^\s@]+$/.test(n)?`mailto:${n}`:null;if(e.type===`url`||e.type===`drive_file`){if(/^https?:\/\//i.test(n))return n;if(e.type===`drive_file`&&/^[A-Za-z0-9_-]{20,}$/.test(n))return`https://drive.google.com/open?id=${n}`}return null}function Oe(e,t){switch(e.type){case`pence`:return Se(t);case`int`:return t==null?``:String(t);case`bool`:return!!t;case`lists`:case`refs`:return v(t).slice();case`json`:return t==null?``:JSON.stringify(t,null,2);case`datetime`:return ke(t);default:return t==null?``:String(t)}}function ke(e){let t=Date.parse(e);if(typeof e!=`string`||Number.isNaN(t))return``;let n=new Date(t),r=e=>String(e).padStart(2,`0`);return`${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}T${r(n.getHours())}:${r(n.getMinutes())}`}var S={value:null},C=e=>({error:e});function Ae(e,t){let n=typeof t==`string`?t.trim():t;switch(e.type){case`bool`:return{value:!!t};case`lists`:case`refs`:return{value:v(t).map(String).filter(e=>e.trim())};case`int`:{if(n==null||n===``)return S;let e=String(n).replace(/,/g,``);return/^-?\d+$/.test(e)&&Number.isSafeInteger(Number(e))?{value:Number(e)}:C(`Enter a whole number.`)}case`pence`:{let e=be(n);return e===null?S:Number.isNaN(e)?C(`Enter an amount in pounds, like 1,250.50`):{value:e}}case`date`:return n?Te(n)?{value:n}:C(`Enter a date.`):S;case`time`:return n?we.test(n)?{value:n}:C(`Enter a time, like 18:30.`):S;case`datetime`:{if(!n)return S;let e=Date.parse(n);return Number.isNaN(e)?C(`Enter a date and time.`):{value:new Date(e).toISOString()}}case`json`:if(!n)return S;try{return{value:JSON.parse(n)}}catch{return C(`This is not valid JSON.`)}case`email`:return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?{value:n}:C(`Enter an email address.`):S;case`url`:return n?/^https?:\/\/\S+$/i.test(n)?{value:n}:C(`Enter a web address starting with https://`):S;default:return n==null||n===``?S:{value:String(n)}}}var je=e=>e==null||e===``||Array.isArray(e)&&!e.length,Me=(e,t)=>JSON.stringify(e??null)===JSON.stringify(t??null);function Ne(e,t,n){let r={},i={};for(let a of e){if(!a.writable||pe(a.name)||a.name.startsWith(`_`))continue;let e=Ae(a,t[a.name]);e.error?i[a.name]=e.error:a.required&&a.type!==`bool`&&je(e.value)?i[a.name]=`Please fill this in.`:n&&Me(e.value,Pe(a,n[a.name]))||(r[a.name]=e.value)}return{values:r,errors:i}}function Pe(e,t){return e.type===`bool`?!!t:e.type===`lists`||e.type===`refs`?v(t):t===``?null:t}function Fe(e,t={}){let n={};for(let r of e)n[r.name]=Oe(r,t[r.name]??null);return n}function w(e,t){let n={};for(let r of e)n[r.name]=Oe(r,t?t[r.name]:null);return n}var T=ge(m,{wrap:t=>e.reactive(t)}),E=e.reactive({member:null}),Ie=`
  <section>
    <div class="card"><div class="empty">
      <div class="ic" x-html="icon(current.icon)"></div>
      <h3 x-text="current.title"></h3>
      <p class="muted" x-text="'Built in ' + current.epic + '.'"></p>
    </div></div>
  </section>`,Le=`__none`,Re=e=>e==null||e===``||Array.isArray(e)&&!e.length,ze=e=>String(e??``).toLocaleLowerCase(`en-GB`).normalize(`NFD`).replace(/[̀-ͯ]/g,``);function Be(e,t,n){let r=ze(t).split(/\s+/).filter(Boolean);return r.length?e.filter(e=>{let t=ze(n(e));return r.every(e=>t.includes(e))}):e}function Ve(e,t,n){let r=Object.entries(t||{}).filter(([,e])=>e!==``&&e!=null);if(!r.length)return e;let i=e=>((n||[]).find(t=>t.name===e)||{}).type;return e.filter(e=>r.every(([t,n])=>{let r=e[t];return n===`__none`?Re(r)||i(t)===`bool`&&!r:i(t)===`bool`?String(!!r)===String(n):Array.isArray(r)?r.includes(n):r===n}))}function He(e,t,{text:n,listOrder:r}={}){let i=t[e.name];if(Re(i)&&e.type!==`bool`)return null;switch(e.type){case`int`:case`pence`:return Number(i);case`bool`:return+!!i;case`date`:case`time`:case`datetime`:return String(i);case`list`:{let t=r?r(e.list).indexOf(i):-1;return t>=0?t:1e6}default:return ze(n?n(t,e):i)}}function Ue(e,t,n=`asc`,r={}){if(!t)return e.slice();let i=n===`desc`?-1:1,a=e.map((e,n)=>({r:e,i:n,k:He(t,e,r)}));return a.sort((e,t)=>e.k===null||t.k===null?e.k===t.k?e.i-t.i:e.k===null?1:-1:e.k<t.k?-i:e.k>t.k?i:e.i-t.i),a.map(e=>e.r)}function We(e,t,n){let r=n.map(e=>({value:e.value,label:e.label,rows:[]})),i=e=>r.find(t=>t.value===e),a=null;for(let n of e){let e=n[t];if(Re(e)){a||={value:Le,label:`Not set`,rows:[]},a.rows.push(n);continue}let o=i(e);o||(o={value:e,label:String(e),rows:[]},r.push(o)),o.rows.push(n)}return a?r.concat(a):r}var Ge={string:`input`,email:`input`,url:`input`,color:`input`,drive_file:`input`,text:`textarea`,int:`number`,pence:`money`,date:`date`,time:`time`,datetime:`datetime`,bool:`check`,list:`select`,enum:`select`,lists:`checks`,ref:`ref`,refs:`checks`,json:`textarea`};function Ke(e){return!e||!e.writable?`readonly`:Ge[e.type]||`input`}var qe={email:`email`,url:`url`};function Je(e){if(!e||!e.tab)throw Error("record screen: `tab` missing");let t=e.noun||`record`;return{tab:e.tab,load:e.load&&e.load.length?e.load.slice():[e.tab],list:e.list&&e.list.length?e.list.slice():[`_label`],form:e.form?e.form.slice():null,filters:e.filters?e.filters.slice():[],sort:e.sort||e.list&&e.list[0]||`_label`,dir:e.dir===`desc`?`desc`:`asc`,groupBy:e.groupBy||null,noun:t,nouns:e.nouns||`${t}s`,defaults:{...e.defaults||{}},empty:e.empty||`No ${e.nouns||`${t}s`} yet.`}}var Ye={name:`_label`,label:`Name`,type:`string`,writable:!1};function D(e,t){return(e||[]).map(e=>e===`_label`?Ye:t.find(t=>t.name===e)).filter(Boolean)}var Xe={bool:[`4.5rem`,.4],int:[`4.5rem`,.5],pence:[`6rem`,.7],date:[`8.75rem`,.9],time:[`4.5rem`,.5],datetime:[`8.5rem`,.9],enum:[`6.5rem`,.9],list:[`6.5rem`,.9],lists:[`8rem`,1.3],ref:[`6.5rem`,1.1],refs:[`8rem`,1.3],email:[`10rem`,1.6],url:[`8rem`,1.3],text:[`10rem`,1.8],string:[`6.5rem`,1.1]},Ze=[`9rem`,2.2];function Qe(e,t=!1){let[n,r]=t?Ze:Xe[e&&e.type]||Xe.string;return`minmax(${n},${r}fr)`}var $e=e=>e.map((e,t)=>Qe(e,t===0)).join(` `),et=e=>!!e&&(e.type===`int`||e.type===`pence`),tt=7340032,nt=41943040,rt=1600,it=.85,at=[`chair`,`treasurer`],O={SponsorYear:`file_kind_sponsors`,SupplierYear:`file_kind_suppliers`,Meetings:`file_kind_meetings`},k=`Images`,ot=12e4,A={"image/jpeg":{kind:`image`,ext:[`jpg`,`jpeg`]},"image/png":{kind:`image`,ext:[`png`]},"image/webp":{kind:`image`,ext:[`webp`]},"image/gif":{kind:`image`,ext:[`gif`]},"application/pdf":{kind:`document`,ext:[`pdf`]},"application/msword":{kind:`document`,ext:[`doc`]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{kind:`document`,ext:[`docx`]},"application/vnd.ms-excel":{kind:`document`,ext:[`xls`]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{kind:`document`,ext:[`xlsx`]},"application/vnd.ms-powerpoint":{kind:`document`,ext:[`ppt`]},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{kind:`document`,ext:[`pptx`]},"text/plain":{kind:`document`,ext:[`txt`]},"text/csv":{kind:`document`,ext:[`csv`]}},st=e=>{let t=/\.([A-Za-z0-9]{1,5})$/.exec(String(e||``));return t?t[1].toLowerCase():``};function ct(e){let t=String(e&&e.type||``).toLowerCase();if(A[t])return t;let n=st(e&&e.name);return Object.keys(A).find(e=>A[e].ext.includes(n))||t}var lt=e=>A[e]?A[e].kind:null,ut=e=>!!e&&(e.name===`folder`||/_folder$/.test(e.name));function dt(e,t,n){return!e||e.type!==`drive_file`||!e.writable||ut(e)?null:n===`Images`?`images`:at.includes(t)?`all`:`images`}function j(e){let t=Object.keys(A).filter(t=>e===`all`||A[t].kind===`image`);return t.concat(t.flatMap(e=>A[e].ext.map(e=>`.${e}`))).join(`,`)}function ft(e,t=!0){let n=t?`, or paste a Google Drive link`:``;return e===`all`?`Upload a picture or a document (PDF, Word, Excel, PowerPoint, text or CSV, up to 7 MB)${n}.`:e===`images`?`Upload a picture (JPEG, PNG, WebP or GIF)${n}. Only the chair and the treasurer upload documents.`:``}var M=e=>`${Math.round(e/1048576*10)/10} MB`;function pt(e,t){if(!e)return{error:`Choose a file first.`};let n=ct(e),r=lt(n);if(!r)return{error:`This kind of file cannot be uploaded. Use a picture (JPEG, PNG, WebP, GIF), a PDF, or a Word, Excel, PowerPoint, text or CSV file.`};if(!t)return{error:`You cannot upload here.`};if(r===`document`&&t!==`all`)return{error:`Only pictures can be uploaded here. For a document, paste a Google Drive link instead.`};if(!e.size)return{error:`The file is empty.`};let i=r===`image`&&n!==`image/gif`?nt:tt;return e.size>i?{error:`The file is ${M(e.size)}. The most is ${M(i)}.`}:{mimeType:n,kind:r}}function mt(e,t,n=rt){let r=Math.max(1,Math.round(e)),i=Math.max(1,Math.round(t)),a=Math.min(1,n/Math.max(r,i));return{width:Math.max(1,Math.round(r*a)),height:Math.max(1,Math.round(i*a)),scaled:a<1}}function ht(e,t){let n=String(e||``).split(/[\\/]/).pop().trim()||`file`,r=(A[t]||{}).ext||[],i=st(n);return!r.length||r.includes(i)?n:`${(i?n.slice(0,-(i.length+1)):n)||`file`}.${r[0]}`}function gt(e,t,n){if(e&&typeof e.put==`function`){e.put(t,n);return}let r=e&&e.state&&e.state.tabs;if(!r||!n||!n.id)return;let i=r[r[t]?t:t.startsWith(`system/`)?t.slice(7):`system/${t}`];if(!i)return;let a=i.rows.findIndex(e=>e.id===n.id);a>=0?i.rows.splice(a,1,n):i.rows.push(n)}async function _t(e){if(typeof createImageBitmap==`function`)try{return await createImageBitmap(e,{imageOrientation:`from-image`})}catch{}let t=URL.createObjectURL(e);try{let e=new Image;return e.src=t,await e.decode(),e}finally{URL.revokeObjectURL(t)}}function vt(e,t,n){let r=e.getImageData(0,0,t,n).data;for(let e=3;e<r.length;e+=4)if(r[e]<255)return!0;return!1}var yt=(e,t,n)=>new Promise((r,i)=>{e.toBlob(e=>e?r(e):i(Error(`The picture could not be prepared.`)),t,n)});async function bt(e,t){if(lt(t)!==`image`||t===`image/gif`){if(e.size>7340032)throw Error(`The file is ${M(e.size)}. The most is ${M(tt)}.`);return{blob:e,mimeType:t,name:ht(e.name,t)}}let n;try{n=await _t(e)}catch{throw Error(`This picture could not be opened. Try saving it as a JPEG first.`)}let r=mt(n.width,n.height),i=document.createElement(`canvas`);i.width=r.width,i.height=r.height;let a=i.getContext(`2d`);a.drawImage(n,0,0,r.width,r.height),typeof n.close==`function`&&n.close();let o=t!==`image/jpeg`&&vt(a,r.width,r.height),s=o?`image/png`:`image/jpeg`,c=await yt(i,s,o?void 0:it);if(!r.scaled&&e.size<=7340032&&e.size<=c.size)return{blob:e,mimeType:t,name:ht(e.name,t)};if(c.size>7340032)throw Error(`This picture is still too large after shrinking. Try a smaller one.`);return{blob:c,mimeType:s,name:ht(e.name,s)}}async function xt(e){let t=new Uint8Array(await e.arrayBuffer()),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode.apply(null,t.subarray(e,e+32768));return btoa(n)}async function St({api:e,records:t,file:n,kind:r,target:i,onStage:a=()=>{}}){let o=pt(n,r);if(o.error)throw Object.assign(Error(o.error),{code:`bad_request`});a(`Getting the file ready...`);let s=await bt(n,o.mimeType),c=await xt(s.blob);a(`Uploading...`);let l={...i,fileName:s.name,mimeType:s.mimeType,dataBase64:c};Object.keys(l).forEach(e=>{(l[e]==null||l[e]===``)&&delete l[e]});try{let n=await e.call(`files.upload`,l,{retry:!1,timeoutMs:ot});return gt(t,i.tab,n.row),n}catch(e){throw e&&e.code===`conflict`&&e.details&&e.details.row&&gt(t,i.tab,e.details.row),e}}async function Ct({api:e,title:t,comment:n,link:r,file:i,onStage:a=()=>{}}){let o={title:t,comment:n};if(!i)return e.call(`files.addOther`,{...o,link:r},{retry:!1});let s=pt(i,`all`);if(s.error)throw Object.assign(Error(s.error),{code:`bad_request`});a(`Getting the file ready...`);let c=await bt(i,s.mimeType),l=await xt(c.blob);return a(`Uploading...`),e.call(`files.addOther`,{...o,fileName:c.name,mimeType:c.mimeType,dataBase64:l},{retry:!1,timeoutMs:ot})}var wt=[`list`,`lists`,`enum`,`ref`,`refs`,`bool`],Tt=9,Et=0,Dt={listLabel:(e,t)=>T.listLabel(e,t),refLabel:(e,t)=>T.label(e,t)},Ot=e=>Object.keys(e||{});function kt(e){return e===`int`||e===`pence`?[`Lowest first`,`Highest first`]:e===`date`||e===`datetime`||e===`time`?[`Earliest first`,`Latest first`]:e===`list`?[`In list order`,`Reverse order`]:e===`bool`?[`No first`,`Yes first`]:[`A to Z`,`Z to A`]}function N(e){let t=Je(e),n={cfg:t,uid:++Et,status:`loading`,loadError:``,q:``,filters:Object.fromEntries(t.filters.map(e=>[e,``])),sortCol:t.sort,sortDir:t.dir,view:t.groupBy?`board`:`list`,panel:{open:!1,mode:`view`,id:null},form:{},errors:{},message:``,saving:!1,refQuery:{},init(){this.reload()},async reload(){let e=T.has(t.load);this.status=e?`ready`:`loading`;try{await T.load(t.load),this.status=`ready`}catch(t){if(e)return;this.loadError=t.message||`Could not load.`,this.status=`error`}},get canWrite(){return T.canWrite(t.tab)},get cols(){return T.columns(t.tab)},get listCols(){return D(t.list,this.cols)},get formCols(){return D(t.form||this.cols.map(e=>e.name),this.cols).filter(e=>!pe(e.name)&&e.name!==`_label`)},get editCols(){return this.formCols.filter(e=>e.writable||this.panel.id)},get filterCols(){return D(t.filters,this.cols).filter(e=>wt.includes(e.type))},get groupCol(){return t.groupBy?T.column(t.tab,t.groupBy):null},label:y,hint:ve,cell(e,t){return!e||!t?``:t.name===`_label`?this.rowLabel(e):Ee(t,e[t.name],Dt)},link(e,t){return t?De(e,t[e.name]):null},rowLabel(t){return e.rowLabel&&e.rowLabel(t)||t._label||t.id},get rows(){let n=Ve(T.rows(t.tab),this.filters,this.cols);e.where&&(n=n.filter(t=>e.where.call(this,t))),n=Be(n,this.q,e=>this.listCols.map(t=>this.cell(e,t)).join(` `));let r=D([this.sortCol],this.cols)[0];return Ue(n,r,this.sortDir,{text:(e,t)=>this.cell(e,t),listOrder:e=>T.list(e).map(e=>e.value)})},get total(){return T.rows(t.tab).length},get countText(){let e=this.rows.length;return e===this.total?`${e} ${(e=>e===1?t.noun:t.nouns)(e)}`:`Showing ${e} of ${this.total} ${t.nouns}`},get gridStyle(){return{"--cols":$e(this.listCols)}},isNumber(e){return et(e)},get groups(){let e=this.groupCol;if(!e)return[];let t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:b(e)})):T.options(e.list);return We(this.rows,e.name,t)},filterOptions(e){let t;return e.type===`bool`?[{value:`true`,label:`Yes`},{value:`false`,label:`No`}]:(t=e.type===`enum`?(e.values||[]).map(e=>({value:e,label:b(e)})):e.type===`ref`||e.type===`refs`?T.refOptions(e.ref):T.list(e.list).map(e=>({value:e.value,label:e.label||e.value})),t.concat({value:Le,label:`Not set`}))},get sortOptions(){return this.listCols},sortBy(e){this.sortCol===e?this.sortDir=this.sortDir===`asc`?`desc`:`asc`:(this.sortCol=e,this.sortDir=`asc`)},flipSort(){this.sortDir=this.sortDir===`asc`?`desc`:`asc`},get sortDirText(){let e=D([this.sortCol],this.cols)[0];return kt(e&&e.type)[this.sortDir===`asc`?0:1]},get filtered(){return!!this.q.trim()||Object.values(this.filters).some(e=>e!==``)},clearFilters(){this.q=``;for(let e of Ot(this.filters))this.filters[e]=``},get record(){return this.panel.id?T.byId(t.tab,this.panel.id):null},get panelTitle(){return this.panel.id?this.record?this.rowLabel(this.record):``:`New ${t.noun}`},get stamp(){let e=this.record;if(!e||!e.updated_at)return``;let t=this.who(e.updated_by);return`Last changed ${a(e.updated_at)}${t?` by ${t}`:``}`},who(e){if(!e)return``;let t=T.rows(`Members`).find(t=>t.id===e||t.google_email===e);return t&&t._label||e},reset(){this.errors={},this.message=``,this.refQuery={}},open(e){this.reset(),this.panel={open:!0,mode:`view`,id:e.id},this.loadMoreFiles()},moreFiles:[],async loadMoreFiles(){this.moreFiles=[];let e=this.panel.id;if(e&&O[t.tab])try{let n=await m.call(`files.forRecord`,{tab:t.tab,id:e});this.panel.id===e&&(this.moreFiles=n.files||[])}catch{}},create(){this.reset(),this.panel={open:!0,mode:`edit`,id:null},this.form=Fe(this.formCols,t.defaults)},edit(){this.canWrite&&this.record&&(this.reset(),this.form=w(this.formCols,this.record),this.panel.mode=`edit`)},get dirty(){if(this.panel.mode!==`edit`)return!1;let e=this.panel.id?w(this.formCols,this.record):Fe(this.formCols,t.defaults);return JSON.stringify(this.form)!==JSON.stringify(e)},cancel(){this.saving||(this.reset(),this.panel.id?this.panel.mode=`view`:this.panel.open=!1)},close(){this.saving||(!this.dirty||window.confirm(`Close without saving your changes?`))&&(this.panel.open=!1,this.panel.mode=`view`)},async save(){if(this.saving)return;let n=this.panel.id?this.record:null,{values:r,errors:i}=Ne(this.formCols,this.form,n);if(this.errors=i,this.message=``,Ot(i).length)this.message=`Please check the highlighted fields.`;else if(n&&!Ot(r).length)this.panel.mode=`view`;else{this.saving=!0;try{let n=!this.panel.id,{row:i,notice:a}=await T.save(t.tab,r,this.panel.id);this.panel.id=i.id,this.panel.mode=`view`,a&&(this.message=a),e.afterSave&&await e.afterSave.call(this,i,n)}catch(e){e.code===`conflict`?(this.record&&(this.form=w(this.formCols,this.record)),this.message=e.message||`Someone else changed this record. It has been reloaded.`):e.details&&e.details.fields?(this.errors={...e.details.fields},this.message=e.message||`Please check the highlighted fields.`):this.message=e.message||`Could not save. Please try again.`}finally{this.saving=!1}}},widget:Ke,inputType(e){return qe[e.type]||`text`},fid(e){return`f${this.uid}-${e.name}`},fieldOptions(e){let t=this.form[e.name];if(e.type===`enum`)return(e.values||[]).map(e=>({value:e,label:b(e)}));if(e.type===`list`||e.type===`lists`)return T.options(e.list,t);let n=T.refOptions(e.ref,t),r=(this.refQuery[e.name]||``).trim().toLowerCase();return!r||e.type===`refs`?n:n.filter(e=>e.value===t||e.label.toLowerCase().includes(r))},refSearch(e){return T.refOptions(e.ref).length>=Tt},uploads:{},replaceFlags:{},uploadKindOf(e){return dt(e,T.state.role,t.tab)},uploadAcceptOf(e){return j(this.uploadKindOf(e))},uploadHintOf(e){return ft(this.uploadKindOf(e))},uploadOf(e){return this.uploads[`${this.panel.id}:${e.name}`]||{}},async uploadPicked(e,n){let r=n.target.files&&n.target.files[0];if(n.target.value=``,!r||!this.panel.id)return;let i=`${this.panel.id}:${e.name}`;this.uploads[i]={busy:!0,text:``,error:``};let a=this.uploads[i],o={tab:t.tab,id:this.panel.id,column:e.name};this.form[e.name]&&this.replaceFlags[i]&&(o.replace=!0),this.record&&this.record.updated_at&&(o.updatedAt=this.record.updated_at);try{let t=await St({api:m,records:T,file:r,kind:this.uploadKindOf(e),target:o,onStage:e=>{a.text=e}});t.attached?(a.text=`Uploaded and kept next to the current file (under More files).`,this.loadMoreFiles()):(this.form[e.name]=t.fileId,a.text=`Uploaded and saved on this record.`),this.replaceFlags[i]=!1}catch(e){e.code===`conflict`&&this.record&&(this.form=w(this.formCols,this.record)),a.text=``,a.error=e.message||`Could not upload. Please try again.`}finally{a.busy=!1}}};return e.extend&&Object.defineProperties(n,Object.getOwnPropertyDescriptors(e.extend)),n}var At=`
  <div class="rtools">
    <input class="inp rsearch" type="search" placeholder="Search" aria-label="Search" x-model.debounce.150ms="q">
    <template x-for="c in filterCols" :key="c.name">
      <select class="inp rsel" x-model="filters[c.name]" :aria-label="'Filter by ' + label(c)">
        <option value="" x-text="label(c) + ': all'"></option>
        <template x-for="o in filterOptions(c)" :key="o.value"><option :value="o.value" x-text="o.label" :selected="filters[c.name] === o.value"></option></template>
      </select>
    </template>
    <div class="rsort">
      <select class="inp rsel" x-model="sortCol" aria-label="Sort by">
        <template x-for="c in sortOptions" :key="c.name"><option :value="c.name" x-text="'Sort: ' + label(c)" :selected="sortCol === c.name"></option></template>
      </select>
      <button class="btn sm" type="button" @click="flipSort()" :aria-label="'Order: ' + sortDirText + '. Click to reverse.'" x-text="sortDirText"></button>
    </div>
    <div class="seg" role="group" aria-label="Show as" x-show="cfg.groupBy">
      <button type="button" :aria-pressed="view === 'list'" @click="view = 'list'">List</button>
      <button type="button" :aria-pressed="view === 'board'" @click="view = 'board'">Board</button>
    </div>
    <span class="grow"></span>
    <!--slot:toolbar-->
    <button class="btn pri" type="button" x-show="canWrite" @click="create()" x-text="'New ' + cfg.noun"></button>
  </div>`,jt=`
  <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
  <div class="banner" role="alert" x-show="status === 'error'">
    <span x-text="loadError"></span>
    <button class="btn sm" type="button" @click="reload()">Try again</button>
  </div>
  <div class="rnone" x-show="status === 'ready' && !rows.length">
    <p class="m-0" x-text="filtered ? 'Nothing matches.' : cfg.empty"></p>
    <button class="btn sm" type="button" x-show="filtered" @click="clearFilters()">Clear search and filters</button>
  </div>`,Mt=`
  <div class="rlist" x-show="status === 'ready' && rows.length && view === 'list'" :style="gridStyle">
    <div class="rhead">
      <template x-for="c in listCols" :key="c.name">
        <button type="button" :class="{ num: isNumber(c) }" :title="label(c)" @click="sortBy(c.name)" :aria-sort="sortCol === c.name ? (sortDir === 'asc' ? 'ascending' : 'descending') : null">
          <span x-text="label(c)"></span><span class="rarrow" x-show="sortCol === c.name" x-text="sortDir === 'asc' ? '↑' : '↓'"></span>
        </button>
      </template>
    </div>
    <template x-for="r in rows" :key="r.id">
      <button type="button" class="rrow" @click="open(r)">
        <template x-for="(c, i) in listCols" :key="c.name">
          <span class="rc" :class="{ first: i === 0, blank: !cell(r, c), num: i > 0 && isNumber(c) }" :data-l="label(c)" :title="cell(r, c) || null" x-text="cell(r, c)"></span>
        </template>
      </button>
    </template>
  </div>`,Nt=`
  <div class="board" x-show="status === 'ready' && rows.length && view === 'board'">
    <template x-for="g in groups" :key="g.value">
      <section class="bcol">
        <header><span x-text="g.label"></span><b class="num" x-text="g.rows.length"></b></header>
        <template x-for="r in g.rows" :key="r.id">
          <button type="button" class="bcard" @click="open(r)">
            <template x-for="(c, i) in listCols.filter((x) => x.name !== cfg.groupBy)" :key="c.name">
              <span :class="i === 0 ? 'bt' : 'bs'" x-show="cell(r, c)"><template x-if="i > 0"><em x-text="label(c) + ': '"></em></template><span x-text="cell(r, c)"></span></span>
            </template>
          </button>
        </template>
      </section>
    </template>
  </div>`,Pt=`
  <div class="scrim pscrim" x-show="panel.open" @click="close()"></div>
  <aside class="panel" :class="{ open: panel.open }" role="dialog" aria-modal="true" :aria-label="panelTitle" :inert="!panel.open" @keydown.escape.window="panel.open && close()">
    <header class="ph">
      <div class="min-w-0 grow">
        <div class="lbl" x-text="panel.mode === 'edit' ? (panel.id ? 'Editing' : 'Adding') : cfg.noun"></div>
        <h2 x-text="panelTitle"></h2>
      </div>
      <button class="btn sm" type="button" @click="close()">Close</button>
    </header>
    <div class="pb">
      <div class="banner" role="alert" x-show="message" x-text="message"></div>
      <template x-if="panel.mode === 'view' && record">
        <dl class="pkv">
          <template x-for="c in formCols" :key="c.name">
            <div>
              <dt x-text="label(c)"></dt>
              <dd>
                <template x-if="link(c, record)"><a :href="link(c, record)" target="_blank" rel="noopener" x-text="cell(record, c)"></a></template>
                <template x-if="!link(c, record)"><span :class="{ muted: !cell(record, c) }" x-text="cell(record, c) || 'Not set'"></span></template>
              </dd>
            </div>
          </template>
        </dl>
      </template>
      <template x-if="panel.mode === 'view' && record && moreFiles.length">
        <div class="flex flex-col gap-1">
          <div class="lbl">More files</div>
          <template x-for="f in moreFiles" :key="f.attachmentId">
            <a class="text-[13.5px] text-accent-ink" :href="f.url" target="_blank" rel="noopener" x-text="f.columnLabel + (f.fileName ? ': ' + f.fileName : '')"></a>
          </template>
        </div>
      </template>
      <template x-if="panel.mode === 'view' && record"><div class="pextra"><!--slot:panelView--></div></template>
      <template x-if="panel.mode === 'edit'">
        <form class="pform" :id="'rform' + uid" novalidate @submit.prevent="save()">
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
      <template x-if="widget(c) === 'ref'">
        <div class="fref">
          <input class="inp" type="search" placeholder="Type to narrow the list" :aria-label="'Narrow the ' + label(c) + ' list'" x-show="refSearch(c)" x-model="refQuery[c.name]">
          <select class="inp" :id="fid(c)" x-model="form[c.name]" :aria-invalid="Boolean(errors[c.name])">
            <option value="">Choose...</option>
            <template x-for="o in fieldOptions(c)" :key="o.value"><option :value="o.value" x-text="o.label" :selected="form[c.name] === o.value"></option></template>
          </select>
        </div>
      </template>
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
  </template><!--slot:panelEdit--></form>
      </template>
    </div>
    <footer class="pf">
      <small class="muted" x-text="stamp"></small>
      <span class="grow"></span>
      <button class="btn pri" type="button" x-show="panel.mode === 'view' && canWrite && record" @click="edit()">Edit</button>
      <button class="btn" type="button" x-show="panel.mode === 'edit'" :disabled="saving" @click="cancel()">Cancel</button>
      <button class="btn pri" type="submit" x-show="panel.mode === 'edit'" :form="'rform' + uid" :disabled="saving" x-text="saving ? 'Saving...' : 'Save'"></button>
    </footer>
  </aside>`;function P({title:e=``,intro:t=``,toolbarHtml:n=``,aboveListHtml:r=``,panelViewHtml:i=``,panelEditHtml:a=``}={}){return`<div class="card rec">${e?`<div class="card-h"><h2>${e}</h2></div>`:``}<div class="card-b rec-b">${t?`<p class="muted m-0">${t}</p>`:``}${At.replace(`<!--slot:toolbar-->`,n)}${r}<p class="rcount m-0" x-show="status === 'ready' && total" x-text="countText"></p>${jt}${Mt}${Nt}</div></div>${Pt.replace(`<!--slot:panelView-->`,i).replace(`<!--slot:panelEdit-->`,a)}`}var Ft=[`agreed`,`invoiced`,`paid`],It=e=>Array.isArray(e)?e:e==null||e===``?[]:[e],F=e=>e==null||e===``,Lt=(e,t)=>String(e).localeCompare(String(t),`en-GB`,{sensitivity:`base`});function Rt(e,t){return e?(t||[]).filter(t=>t.tier_id===e&&Ft.includes(t.status)).length:0}function zt(e,t){if(!e||F(e.available))return`No limit`;let n=Number(e.available)-t;return n<=0?`Secured`:`${n} left`}function Bt(e,t,n=[]){let r=e=>{let t=n.indexOf(e);return t<0?1e6:t};return(t||[]).filter(t=>t.sponsor_year_id===e).sort((e,t)=>r(e.benefit)-r(t.benefit)||Lt(e.benefit,t.benefit))}function Vt(e,t,n){if(!e)return[];let r=new Set((t||[]).map(e=>e.benefit));return It(e.benefits).filter(e=>!r.has(e)&&(!n||n.includes(e)))}function Ht(e,t,n,r){return!e||!t?!1:Vt(t,n,r).length?!0:F(e.amount_pence)&&!F(t.price_pence)}function Ut(e,t){return e?(t||[]).filter(t=>t.contact_id===e&&t.active!==!1).sort((e,t)=>Number(!!t.preferred)-Number(!!e.preferred)||Lt(e._label||``,t._label||``)):[]}function Wt(e,t){return(t||[]).find(t=>t.contact_id===e)||null}function Gt(e=new Date){let t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function Kt(e,t,n){return e?{done:!0,done_on:n,done_by_member_id:t||null}:{done:!1,done_on:null,done_by_member_id:null}}function qt(e){let t=String(e||``).trim();if(!t)return null;if(/^https?:\/\//i.test(t))return t;let n=t.replace(/^@/,``);return/^[A-Za-z0-9._]{1,30}$/.test(n)?`https://www.instagram.com/${n}/`:null}function Jt(e,t=e=>e){if(!e)return[];let n=[e.address_line1,e.address_line2,e.town,e.postcode].filter(e=>!F(e)).join(`, `);return[{label:`Website`,text:e.website,href:e.website&&/^https?:\/\//i.test(e.website)?e.website:null},{label:`Business email`,text:e.email,href:e.email?`mailto:${e.email}`:null},{label:`Phone`,text:e.phone,href:e.phone?`tel:${String(e.phone).replace(/[^\d+]/g,``)}`:null},{label:`Address`,text:n,href:null},{label:`Instagram`,text:e.instagram,href:qt(e.instagram)},{label:`Category`,text:e.category?t(e.category):``,href:null},{label:`Notes`,text:e.notes,href:null}].filter(e=>!F(e.text))}function Yt(e){let t=Math.max(0,...(e||[]).map(e=>Number(e.sort_order)||0));return Math.floor(t/10)*10+10}var I=()=>E.member&&E.member.id||``;function L(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this,r,...e)}}function R(e,t){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function z(e,t){e.label=e=>e&&t[e.name]||y(e)}function Xt(e,t=`owner_member_id`){L(e,`create`,function(e){this.cfg.defaults[t]=I()||null,e.call(this)})}function Zt(e=`owner_member_id`){return function(t){return!this.mine||t[e]===I()}}function Qt(e){let t=Object.getOwnPropertyDescriptor(e,`filtered`).get;R(e,{mine:!1,get myId(){return I()},get filtered(){return this.mine||t.call(this)}}),L(e,`clearFilters`,function(e){this.mine=!1,e.call(this)})}var $t=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine" x-show="myId">Mine</button>`;function en(e){L(e,`fieldOptions`,function(e,t){let n=e.call(this,t);return t.name!==`contact_person_id`||!this.form.contact_id?n:n.filter(e=>e.value===this.form.contact_person_id||(T.byId(`system/ContactPeople`,e.value)||{}).contact_id===this.form.contact_id)})}function tn(e,t){let n=e=>Object.prototype.hasOwnProperty.call(t,e);R(e,{get listCols(){return this.cfg.list.map(e=>n(e)?{name:e,label:t[e].label,type:t[e].type||`string`,writable:!1,computed:!0}:D([e],this.cols)[0]).filter(Boolean)},get sortOptions(){return this.listCols.filter(e=>!e.computed)}}),L(e,`cell`,function(e,r,i){return r&&i&&n(i.name)?t[i.name].text.call(this,r):e.call(this,r,i)}),L(e,`sortBy`,function(e,t){n(t)||e.call(this,t)})}var nn=e=>`
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
  </dl>`,rn={tab:`SponsorYear`,load:[`SponsorYear`,`system/Contacts`,`system/ContactPeople`,`Members`,`Tiers`,`Benefits`],list:[`_label`,`status`,`tier_id`,`owner_member_id`,`amount_pence`,`last_contacted`],form:[`contact_id`,`contact_person_id`,`owner_member_id`,`status`,`tier_id`,`amount_pence`,`last_contacted`,`listed_on_tickets`,`logo_file`,`ad_file`,`paid`,`paid_on`,`paid_pence`,`notes`],filters:[`status`,`owner_member_id`,`tier_id`],sort:`_label`,groupBy:`status`,noun:`sponsor`,defaults:{status:`to_contact`},empty:`No sponsors this year yet. Add one here, or add a company from Companies.`,rowLabel:e=>T.label(`system/Contacts`,e.contact_id),where:Zt(),afterSave(e){return this.syncBenefits(e,`Saved, but the benefit checklist was not updated`)}},an={_label:`Company`,contact_id:`Company`,owner_member_id:`Who approaches`,tier_id:`Tier`,listed_on_tickets:`On the ticket page`,logo_file:`Logo`,ad_file:`Advert artwork`,paid_pence:`Amount received`};function on(){let e=N(rn);z(e,an),Xt(e),Qt(e),en(e),L(e,`fieldOptions`,function(e,t){let n=e.call(this,t);if(t.name!==`contact_id`)return n;let r=new Set(T.rows(`SponsorYear`).filter(e=>e.id!==this.panel.id).map(e=>e.contact_id));return n.filter(e=>e.value===this.form.contact_id||!r.has(e.value))}),L(e,`init`,function(e){this.$watch(`form.tier_id`,e=>this.tierChosen(e)),this.$watch(`status`,e=>{e===`ready`&&this.openPending()}),e.call(this)});for(let t of[`create`,`edit`])L(e,t,function(e){e.call(this),this.lastTier=this.form.tier_id});return R(e,{busy:!1,lastTier:``,tierChosen(e){if(this.panel.mode!==`edit`||e===this.lastTier)return;this.lastTier=e;let t=e?T.byId(`Tiers`,e):null;t&&t.price_pence!=null&&!String(this.form.amount_pence??``).trim()&&(this.form.amount_pence=Se(t.price_pence))},openPending(){let e=this.pendingSponsor;if(!e)return;this.pendingSponsor=null;let t=T.byId(`SponsorYear`,e);t&&this.open(t)},get company(){return this.record?T.byId(`system/Contacts`,this.record.contact_id):null},get facts(){return Jt(this.company,e=>T.listLabel(`contact_category`,e))},get people(){return this.record?Ut(this.record.contact_id,T.rows(`system/ContactPeople`)):[]},get tier(){return this.record&&this.record.tier_id?T.byId(`Tiers`,this.record.tier_id):null},get offered(){return T.list(`sponsor_benefit`).filter(e=>e.active!==!1).map(e=>e.value)},get benefits(){return this.record?Bt(this.record.id,T.rows(`Benefits`),T.list(`sponsor_benefit`).map(e=>e.value)):[]},get missing(){return Vt(this.tier,this.benefits,this.offered)},get canTick(){return T.canWrite(`Benefits`)},get canAssign(){return this.canWrite&&this.myId&&this.record&&this.record.owner_member_id!==this.myId},benefitLabel(e){return T.listLabel(`sponsor_benefit`,e.benefit)},doneText(e){if(!e.done)return``;let t=e.done_by_member_id?T.label(`Members`,e.done_by_member_id):``;return[o(e.done_on),t&&`by ${t}`].filter(Boolean).join(` `)},async assignToMe(){let e=this.record;if(e&&I()&&!this.busy){if(e.owner_member_id&&e.owner_member_id!==I()){let t=T.label(`Members`,e.owner_member_id);if(!window.confirm(`${t} is approaching ${this.rowLabel(e)}. Take it over?`))return}this.busy=!0,this.message=``;try{await T.save(`SponsorYear`,{owner_member_id:I()},e.id)}catch(e){this.message=e.message||`Could not save. Please try again.`}finally{this.busy=!1}}},async tick(e,t){let n=()=>!!(T.byId(`Benefits`,e.id)||e).done;if(this.busy)t.checked=n();else{this.busy=!0,this.message=``;try{await T.save(`Benefits`,Kt(t.checked,I(),Gt()),e.id)}catch(e){t.checked=n(),this.message=e.message||`Could not save the tick. Please try again.`}finally{this.busy=!1}}},async syncBenefits(e,t){if(e&&T.canWrite(`Benefits`)&&Ht(e,e.tier_id?T.byId(`Tiers`,e.tier_id):null,Bt(e.id,T.rows(`Benefits`)),this.offered)){this.busy=!0;try{await m.call(`sponsors.syncBenefits`,{id:e.id}),await T.load([`SponsorYear`,`Benefits`])}catch(e){this.message=`${t}: ${e.message||`please try again.`}`}finally{this.busy=!1}}}}),e}var sn=P({toolbarHtml:$t,panelViewHtml:`
  <div x-show="canAssign">
    <button class="btn sm" type="button" :disabled="busy" @click="assignToMe()">Assign to me</button>
  </div>

  <section class="flex flex-col gap-2" x-show="company">
    <h3 class="lbl m-0">Company</h3>
    ${nn(`facts`)}
    <p class="muted m-0" x-show="!facts.length">No details yet. Add them in Companies.</p>
  </section>

  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Contact people</h3>
    <template x-for="p in people" :key="p.id">
      <div class="flex flex-col">
        <span><b x-text="p._label"></b><span class="muted" x-show="p.job_title" x-text="', ' + p.job_title"></span>
          <span class="ml-1 rounded-full bg-accent-soft px-2 text-[11px] font-semibold text-accent-ink" x-show="p.preferred">Approach first</span></span>
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
        <input type="checkbox" :checked="b.done" :disabled="!canTick || busy" @change="tick(b, $event.target)">
        <span><span x-text="benefitLabel(b)"></span> <small class="muted" x-text="doneText(b)"></small></span>
      </label>
    </template>
    <p class="muted m-0" x-show="!benefits.length" x-text="record.tier_id ? 'No benefits listed yet.' : 'Choose a tier to make the checklist.'"></p>
    <div x-show="canTick && missing.length">
      <button class="btn sm" type="button" :disabled="busy" @click="syncBenefits(record, 'The benefit checklist was not updated')">Add the tier's benefits</button>
    </div>
  </section>

  <p class="muted m-0 text-xs">Past years appear here once the 2026 ball is brought in.</p>`}),cn={tab:`system/Contacts`,load:[`system/Contacts`,`system/ContactPeople`,`SponsorYear`,`Members`],list:[`name`,`category`,`town`,`_year`,`active`],form:[`name`,`kind`,`category`,`website`,`email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`instagram`,`checked`,`notes`,`active`],filters:[`category`,`active`],sort:`name`,noun:`company`,nouns:`companies`,defaults:{kind:`business`,active:!0},empty:`No companies yet.`},ln={email:`Business email`,address_line1:`Address`,address_line2:`Address, second line`,checked:`Details checked`,active:`Approach again`},un=[`first_name`,`last_name`,`job_title`,`email`,`phone`,`preferred`,`active`,`notes`],dn={preferred:`Approach first`,active:`Still works there`},B=()=>({open:!1,id:null,form:{},errors:{},message:``,saving:!1});function fn(){let e=N(cn);z(e,ln),tn(e,{_year:{label:`This year`,type:`list`,text(e){let t=Wt(e.id,T.rows(`SponsorYear`));return t?T.listLabel(`sponsor_status`,t.status):``}}});for(let t of[`open`,`create`,`close`])L(e,t,function(e,...t){return this.person=B(),e.apply(this,t)});return R(e,{person:B(),adding:!1,get spy(){return this.record?Wt(this.record.id,T.rows(`SponsorYear`)):null},get spyText(){let e=this.spy;if(!e)return``;let t=e.owner_member_id?`, ${T.label(`Members`,e.owner_member_id)} approaching`:`, no one approaching yet`;return`${T.listLabel(`sponsor_status`,e.status)}${t}`},get canAddToYear(){return T.canWrite(`SponsorYear`)&&this.record&&!this.spy},async addToYear(){if(this.record&&!this.adding){this.adding=!0,this.message=``;try{let e={contact_id:this.record.id,status:`to_contact`};I()&&(e.owner_member_id=I());let{row:t}=await T.save(`SponsorYear`,e);this.panel.open=!1,this.openSponsor(t.id)}catch(e){this.message=e.message||`Could not add it. Please try again.`}finally{this.adding=!1}}},showSponsor(){this.spy&&(this.panel.open=!1,this.openSponsor(this.spy.id))},get people(){if(!this.record)return[];let e=T.rows(`system/ContactPeople`),t=e.filter(e=>e.contact_id===this.record.id&&e.active===!1);return Ut(this.record.id,e).concat(t)},get personCols(){return D(un,T.columns(`system/ContactPeople`))},get canEditPeople(){return T.canWrite(`system/ContactPeople`)},plabel(e){return dn[e.name]||y(e)},pfid(e){return`p${this.uid}-${e.name}`},newPerson(){this.person={...B(),open:!0,form:Fe(this.personCols,{active:!0,preferred:!this.people.length})}},editPerson(e){this.person={...B(),open:!0,id:e.id,form:w(this.personCols,e)}},cancelPerson(){this.person.saving||(this.person=B())},async savePerson(){let e=this.person;if(e.saving||!this.record)return;let t=e.id?T.byId(`system/ContactPeople`,e.id):null,{values:n,errors:r}=Ne(this.personCols,e.form,t);if(e.errors=r,e.message=``,Object.keys(r).length)e.message=`Please check the highlighted fields.`;else if(t&&!Object.keys(n).length)this.person=B();else{e.id||(n.contact_id=this.record.id),e.saving=!0;try{await T.save(`system/ContactPeople`,n,e.id),this.person=B()}catch(n){n.code===`conflict`&&t&&(e.form=w(this.personCols,T.byId(`system/ContactPeople`,e.id))),n.details&&n.details.fields&&(e.errors={...n.details.fields}),e.message=n.message||`Could not save. Please try again.`}finally{e.saving=!1}}}}),e}var pn=P({panelViewHtml:`
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
            <span class="ml-1 rounded-full bg-accent-soft px-2 text-[11px] font-semibold text-accent-ink" x-show="p.preferred && p.active !== false">Approach first</span>
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
      <button class="btn pri sm" type="submit" :disabled="person.saving" x-text="person.saving ? 'Saving...' : 'Save person'"></button>
      <button class="btn sm" type="button" :disabled="person.saving" @click="cancelPerson()">Cancel</button>
    </div>
  </form>
  </section>`}),V=()=>T.rows(`SponsorYear`),mn={tab:`Tiers`,load:[`Tiers`,`SponsorYear`,`system/Contacts`,`Members`],list:[`name`,`price_pence`,`available`,`_taken`,`_left`,`sort_order`],form:[`name`,`price_pence`,`available`,`benefits`,`benefits_text`,`ad_size`,`sort_order`,`active`],filters:[`active`],sort:`sort_order`,noun:`tier`,defaults:{active:!0},empty:`No tiers yet. The chair or treasurer adds them.`},hn={price_pence:`Price`,available:`How many`,benefits_text:`Benefits as written`,sort_order:`Order`,active:`Offered`};function gn(){let e=N(mn);return z(e,hn),tn(e,{_taken:{label:`Taken`,type:`int`,text:e=>String(Rt(e.id,V()))},_left:{label:`Left`,type:`int`,text:e=>zt(e,Rt(e.id,V()))}}),L(e,`create`,function(e){this.cfg.defaults.sort_order=Yt(T.rows(`Tiers`)),e.call(this)}),R(e,{get onTier(){if(!this.record)return[];let e=e=>+!Ft.includes(e.status);return V().filter(e=>e.tier_id===this.record.id).map(t=>({id:t.id,name:T.label(`system/Contacts`,t.contact_id),status:T.listLabel(`sponsor_status`,t.status),held:e(t)})).sort((e,t)=>e.held-t.held||e.name.localeCompare(t.name,`en-GB`))},get placesText(){let e=this.record;if(!e)return``;let t=Rt(e.id,V());return e.available==null?`${t} taken, no limit`:`${t} of ${e.available} taken. ${zt(e,t)}.`},showSponsor(e){this.panel.open=!1,this.openSponsor(e)}}),e}var _n=P({panelViewHtml:`
  <section class="flex flex-col gap-2">
    <h3 class="lbl m-0">Places</h3>
    <p class="m-0" x-text="placesText"></p>
    <p class="muted m-0 text-xs">A place counts as taken once the sponsor has agreed, been invoiced or paid.</p>
    <template x-for="s in onTier" :key="s.id">
      <button type="button" class="btn sm justify-between" @click="showSponsor(s.id)">
        <span x-text="s.name"></span><span class="muted" x-text="s.status"></span>
      </button>
    </template>
  </section>`}),vn={tab:`Donations`,load:[`Donations`,`system/Contacts`,`system/ContactPeople`,`Members`],list:[`_label`,`what`,`status`,`owner_member_id`,`value_pence`,`asked_on`],form:[`contact_id`,`contact_person_id`,`owner_member_id`,`what`,`status`,`value_pence`,`asked_on`,`received_on`,`notes`],filters:[`status`,`owner_member_id`],sort:`_label`,groupBy:`status`,noun:`donation`,defaults:{status:`to_ask`},empty:`No donations yet.`,rowLabel:e=>T.label(`system/Contacts`,e.contact_id)},yn={_label:`Company`,contact_id:`Company`,owner_member_id:`Who asks`,what:`What they give`,value_pence:`Value`};function bn(){let e=N(vn);return z(e,yn),Xt(e),en(e),e}var xn=P(),Sn=g({PARTS:()=>Cn,html:()=>wn,setup:()=>Tn}),Cn=[{id:`year`,label:`This year`,data:`sponsorsYear`,html:sn},{id:`companies`,label:`Companies`,data:`sponsorsCompanies`,html:pn},{id:`tiers`,label:`Tiers`,data:`sponsorsTiers`,html:_n},{id:`donations`,label:`Donations`,data:`sponsorsDonations`,html:xn}],wn=`
  <section class="flex flex-col gap-4" x-data="sponsorsPage">
    <div class="seg flex-wrap self-start" role="group" aria-label="Show">
      <template x-for="p in parts" :key="p.id">
        <button type="button" :aria-pressed="part === p.id" @click="part = p.id" x-text="p.label"></button>
      </template>
    </div>${Cn.map(e=>`
    <template x-if="part === '${e.id}'"><div class="contents" x-data="${e.data}">${e.html}</div></template>`).join(``)}
  </section>`;function Tn(e){e.data(`sponsorsPage`,()=>({part:`year`,parts:Cn.map(({id:e,label:t})=>({id:e,label:t})),pendingSponsor:null,openSponsor(e){this.pendingSponsor=e,this.part=`year`}})),e.data(`sponsorsYear`,on),e.data(`sponsorsCompanies`,fn),e.data(`sponsorsTiers`,gn),e.data(`sponsorsDonations`,bn)}var H=`system/Suppliers`,En=[`chair`,`treasurer`],U=e=>e!=null&&e!==``;function Dn(e,t){return[e,t].filter(e=>U(e)).join(` / `)}function On(e){let t=[`SupplierYear`,H,`Members`,`Tasks`];return En.includes(e)?t.concat(`Budget`):t}function kn(e,t,n=new Date,r){if(t||!U(e))return``;let i=c(e,n,r);return i===null?``:i<0?`overdue`:i<=14?`soon`:``}function An(e,t=new Date,n){let r=e||{},i=(e,r,i)=>({amount:U(e)?Number(e):null,due:U(r)?r:null,paid:!!i,state:U(e)||U(r)?kn(r,i,t,n):``}),a=i(r.deposit_pence,r.deposit_due,r.deposit_paid),o=i(r.balance_pence,r.balance_due,r.balance_paid),s=a.amount!==null||o.amount!==null,c=e=>e.amount!==null&&!e.paid?e.amount:0;return{quote:U(r.quote_pence)?Number(r.quote_pence):null,deposit:a,balance:o,left:s?c(a)+c(o):null}}function jn(e,t,n,r=`done`){let i=(e||[]).filter(e=>e.linked_tab===t&&e.linked_id===n),a=e=>[+(e.status===r),e.due||`9999-99-99`];return i.slice().sort((e,t)=>{let[n,r]=a(e),[i,o]=a(t);return n-i||(r<o?-1:+(r>o))})}function Mn(e,t){return(e||[]).filter(e=>e.supplier_year_id===t)}function Nn(e){return e?[e.address_line1,e.address_line2,e.town,e.postcode].map(e=>U(e)?String(e).trim():``).filter(Boolean).join(`, `):``}function Pn(e){if(!U(e))return null;let t=String(e).replace(/[^\d+]/g,``);return t.length>=3?`tel:${t}`:null}function Fn(e,t,n){return(e||[]).find(e=>e.supplier_id===t&&e.area===n)||null}function In(e,t){return(e||[]).filter(e=>e.supplier_id===t)}function Ln(e,t){let n=(e&&Array.isArray(e.areas)?e.areas:[]).filter(Boolean);return t&&n.includes(t)?t:n[0]||``}function Rn(e,t){let n=t&&t.venue_supplier_id;return U(e)&&U(n)&&String(n)===String(e)}var zn=g({ALL:()=>Gn,YEAR:()=>Wn,html:()=>tr,setup:()=>ar}),W=()=>e.store(`ball`)&&e.store(`ball`).settings||{},Bn=()=>W().timezone||void 0,Vn=e=>T.listLabel(`supplier_area`,e),Hn=()=>(T.options(`supplier_status`)[0]||{}).value||``,Un=[`quote_pence`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`],Wn={tab:`SupplierYear`,list:[`supplier_id`,`area`,`status`,`owner_member_id`,`quote_pence`,`deposit_due`,`balance_due`],form:[`supplier_id`,`area`,`status`,`owner_member_id`,`idea`,`quote_pence`,`quote_file`,`deposit_pence`,`deposit_due`,`deposit_paid`,`balance_pence`,`balance_due`,`balance_paid`,`folder`,`notes`],filters:[`area`,`status`,`owner_member_id`],sort:`supplier_id`,groupBy:`status`,noun:`supplier this year`,nouns:`suppliers this year`,empty:`No suppliers for this year yet. Add one here, or open one under All suppliers.`},Gn={tab:H,load:[H,`SupplierYear`,`Members`],list:[`_label`,`areas`,`email`,`phone`,`active`],form:[`name`,`areas`,`website`,`email`,`events_email`,`phone`,`address_line1`,`address_line2`,`town`,`postcode`,`maps_url`,`notes`,`active`],filters:[`areas`,`active`],sort:`_label`,noun:`supplier`,defaults:{active:!0},empty:`No suppliers yet. Add the venue and anyone else you use, they are kept from year to year.`},G=`m-0 text-[13px] font-semibold`,Kn=`inline-block rounded-full px-2 text-[11.5px] font-semibold leading-5`,qn=`${Kn} bg-accent-soft text-accent-ink`,Jn={soon:`text-warn`,overdue:`text-bad`},Yn={soon:`${Kn} bg-[var(--warn-soft)] text-warn`,overdue:`${Kn} bg-[var(--bad-soft)] text-bad`},Xn={soon:`Due soon`,overdue:`Overdue`},Zn=`
  <div x-show="venue(record.supplier_id)"><span class="${qn}">This year's venue</span></div>

  <section class="flex flex-col gap-2" aria-label="Supplier details">
    <div class="flex items-center justify-between gap-2">
      <h3 class="${G}">Supplier details</h3>
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
    <h3 class="${G}">Money this year</h3>
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
    <p class="muted m-0 text-[12px]" x-show="!canMarkPaid">Only the chair and the treasurer can mark a payment as paid.</p>
  </section>

  <section class="flex flex-col gap-2" aria-label="Tasks">
    <h3 class="${G}">Tasks</h3>
    <ul class="m-0 p-0 list-none flex flex-col" x-show="tasks.length">
      <template x-for="t in tasks" :key="t.id">
        <li class="py-2 border-t border-line flex flex-col gap-0.5">
          <span class="font-medium" x-text="t._label || t.title"></span>
          <span class="text-[12.5px]" :class="taskLate(t) ? 'text-bad' : 'text-muted'" x-text="taskLine(t)"></span>
        </li>
      </template>
    </ul>
    <p class="muted m-0 text-[13px]" x-show="!tasks.length">No tasks linked to this supplier yet. Tasks are added on the Tasks screen.</p>
  </section>

  <template x-if="showBudget">
    <section class="flex flex-col gap-2" aria-label="Budget lines">
      <h3 class="${G}">Budget lines</h3>
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
  </template>`,Qn=`
  <span hidden x-effect="suggestArea()"></span>
  <p class="note m-0" x-show="!panel.id">Not in the supplier list? Add them under All suppliers first, then come back here.</p>`,$n=`
  <button class="btn sm" type="button" :class="{ pri: mine }" :aria-pressed="mine" @click="mine = !mine">Mine</button>`,er=`
  <div x-show="venue(record.id)"><span class="${qn}">This year's venue</span></div>
  <p class="note m-0" x-show="record.active === false">Marked as not to use again.</p>

  <section class="flex flex-col gap-2" aria-label="This year">
    <h3 class="${G}">This year</h3>
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
  </section>`,tr=`
  <section class="flex flex-col gap-4" x-data="suppliersScreen">
    <div class="seg self-start" role="group" aria-label="Show">
      <button type="button" :aria-pressed="supTab === 'year'" @click="supTab = 'year'">This year</button>
      <button type="button" :aria-pressed="supTab === 'all'" @click="supTab = 'all'">All suppliers</button>
    </div>
    <div class="contents" x-data="supplierYearScreen" x-show="supTab === 'year'" @supplier-year-open.window="openYear($event.detail.id)">${P({intro:`Suppliers we are talking to or have booked for this ball, by where they stand. Open one for its details, money and tasks.`,toolbarHtml:$n,panelViewHtml:Zn,panelEditHtml:Qn})}</div>
    <div class="contents" x-data="supplierListScreen" x-show="supTab === 'all'" @supplier-open.window="openSupplier($event.detail.id)">${P({intro:`Every supplier we have used or considered, kept from year to year. Open one to add it to this year.`,panelViewHtml:er})}</div>
  </section>`;function nr(e,t,n){let r=e[t];e[t]=function(...e){return n.call(this),r.apply(this,e)}}function rr(){let e=N({...Wn,load:On(E.member&&E.member.role),rowLabel:e=>Dn(T.label(H,e.supplier_id),Vn(e.area)),where(e){return!this.mine||E.member&&e.owner_member_id===E.member.id},extend:{mine:!1,formFull:!1,suggested:``,get filtered(){return this.mine||!!this.q.trim()||Object.values(this.filters).some(e=>e!==``)},clearFilters(){this.mine=!1,this.q=``;for(let e of Object.keys(this.filters))this.filters[e]=``},get formCols(){let e=D(this.cfg.form,this.cols).filter(e=>!pe(e.name)&&e.name!==`_label`);return this.panel.mode===`view`&&!this.formFull?e.filter(e=>!Un.includes(e.name)):e},get supplier(){return this.record?T.byId(H,this.record.supplier_id):null},get canEditSuppliers(){return T.canWrite(H)},get canMarkPaid(){let e=T.column(`SupplierYear`,`deposit_paid`);return!!(e&&e.writable)},get details(){let e=this.supplier;if(!e)return[];let t=e=>De({type:`url`},e),n=e=>De({type:`email`},e);return[{k:`Website`,v:e.website,href:t(e.website),ext:!0},{k:`Map`,v:e.maps_url?`Open the map`:``,href:t(e.maps_url),ext:!0},{k:`Email`,v:e.email,href:n(e.email)},{k:`Events email`,v:e.events_email,href:n(e.events_email)},{k:`Phone`,v:e.phone,href:Pn(e.phone)},{k:`Address`,v:Nn(e)},{k:`Notes`,v:e.notes}].filter(e=>e.v)},get money(){return An(this.record,new Date,Bn())},get moneyParts(){let e=this.money;return[{k:`Deposit`,...e.deposit},{k:`Balance`,...e.balance}]},partText(e){if(e.amount===null&&!e.due)return`Not set`;let t=[e.amount===null?`Amount not set`:x(e.amount)];return e.due&&t.push(`due ${o(e.due)}`),t.push(e.paid?`paid`:`not paid`),t.join(`, `)},stateClass:e=>Jn[e]||``,statePill:e=>Yn[e]||``,stateText:e=>Xn[e]||``,pounds:x,get tasks(){return this.record?jn(T.rows(`Tasks`),`SupplierYear`,this.record.id):[]},taskLine(e){return[T.listLabel(`task_status`,e.status),e.due?`due ${o(e.due)}`:``,e.owner_member_id?T.label(`Members`,e.owner_member_id):``].filter(Boolean).join(`, `)},taskLate(e){return e.status!==`done`&&kn(e.due,!1,new Date,Bn())===`overdue`},get showBudget(){return T.columns(`Budget`).length>0},get budget(){return this.record?Mn(T.rows(`Budget`),this.record.id):[]},budgetLine(e){let t=[[`planned`,e.planned_pence],[`committed`,e.committed_pence],[`paid out`,e.actual_pence]].filter(([,e])=>e!=null).map(([e,t])=>`${e} ${x(t)}`);return[T.listLabel(`budget_category`,e.category),...t,e.paid?`paid`:`not paid`].filter(Boolean).join(`, `)},venue:e=>Rn(e,W()),suggestArea(){if(this.panel.id||this.panel.mode!==`edit`)return;let e=T.byId(H,this.form.supplier_id),t=e&&Array.isArray(e.areas)&&e.areas[0]||``;t&&(!this.form.area||this.form.area===this.suggested)&&(this.form.area=t,this.suggested=t)},openYear(e){let t=T.byId(`SupplierYear`,e);t&&this.open(t)},showSupplier(){let e=this.record&&this.record.supplier_id;e&&(this.panel.open=!1,this.supTab=`all`,window.dispatchEvent(new CustomEvent(`supplier-open`,{detail:{id:e}})))}}});nr(e,`reload`,function(){this.cfg.load=On(E.member&&E.member.role)}),nr(e,`create`,function(){this.suggested=``,this.cfg.defaults.status=Hn(),this.cfg.defaults.owner_member_id=E.member&&E.member.id||null});let t=e.edit;return e.edit=function(){this.formFull=!0;try{t.call(this)}finally{this.formFull=!1}},e}function ir(){let e=N({...Gn,rowLabel:e=>Rn(e.id,W())?`${e._label||e.name} (this year's venue)`:e._label||e.name,extend:{started:!1,pick:{},adding:!1,addError:``,init(){this.supTab===`all`?this.start():this.$watch(`supTab`,e=>{e===`all`&&this.start()})},start(){this.started||(this.started=!0,this.reload())},venue:e=>Rn(e,W()),areaLabel:Vn,get thisYear(){return this.record?In(T.rows(`SupplierYear`),this.record.id):[]},yearChip(e){return`${Vn(e.area)}: ${T.listLabel(`supplier_status`,e.status)||`No status`}`},get addArea(){return this.record?Ln(this.record,this.pick[this.record.id]):``},get canAdd(){let e=this.record;return!!(e&&e.active!==!1&&this.addArea&&T.canWrite(`SupplierYear`))},get addButtonText(){return this.adding?`Adding...`:this.record&&Fn(T.rows(`SupplierYear`),this.record.id,this.addArea)?`Open in this year`:`Add to this year`},async addToYear(){let e=this.record,t=this.addArea;if(!e||!t||this.adding)return;this.addError=``;let n=Fn(T.rows(`SupplierYear`),e.id,t);if(!n){this.adding=!0;try{let r={supplier_id:e.id,area:t,status:Hn()};E.member&&E.member.id&&(r.owner_member_id=E.member.id),{row:n}=await T.save(`SupplierYear`,r)}catch(e){this.addError=e.message||`Could not add. Please try again.`;return}finally{this.adding=!1}}this.showYear(n.id)},showYear(e){this.panel.open=!1,this.supTab=`year`,window.dispatchEvent(new CustomEvent(`supplier-year-open`,{detail:{id:e}}))},openSupplier(e){this.supTab=`all`;let t=T.byId(H,e);t&&this.open(t)}}});return nr(e,`open`,function(){this.addError=``}),e}function ar(e){e.data(`suppliersScreen`,()=>({supTab:`year`})),e.data(`supplierYearScreen`,rr),e.data(`supplierListScreen`,ir)}var K=`Tasks`,or=`done`,sr=`todo`,cr=[{tab:`SponsorYear`,label:`Sponsor`},{tab:`SupplierYear`,label:`Supplier`},{tab:`Donations`,label:`Donation`},{tab:`Meetings`,label:`Meeting`},{tab:`Prizes`,label:`Prize`}],lr=e=>(cr.find(t=>t.tab===e)||{}).label||String(e||``),ur=e=>String(e).padStart(2,`0`),dr=e=>`${e.getFullYear()}-${ur(e.getMonth()+1)}-${ur(e.getDate())}`;function fr(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||``));return t?new Date(Date.UTC(+t[1],t[2]-1,+t[3])):null}var pr=e=>e.toISOString().slice(0,10);function q(e,t){let n=fr(e);return n?(n.setUTCDate(n.getUTCDate()+t),pr(n)):``}function mr(e){let t=fr(e);return t?q(e,7-(t.getUTCDay()||7)):``}var J=e=>String(e).slice(0,7);function hr(e){let[t,n]=e.split(`-`).map(Number);return n===12?`${t+1}-01`:`${t}-${ur(n+1)}`}function gr(e){let[t,n]=e.split(`-`).map(Number);return new Intl.DateTimeFormat(`en-GB`,{month:`long`,year:`numeric`,timeZone:`UTC`}).format(new Date(Date.UTC(t,n-1,1)))}function _r(e,t){return!e||!e.due||e.status===`done`||!t?``:e.due<t?`overdue`:e.due<=q(t,7)?`soon`:``}var vr=(e=new Date)=>({status:or,done_at:e.toISOString()}),yr=()=>({status:sr,done_at:null});function br(e,t=new Date){return e?e.status===`done`&&!e.done_at?{done_at:t.toISOString()}:e.status!==`done`&&e.done_at?{done_at:null}:null:null}function xr(e,t){let n={status:sr};if(!e||!e.id)return n;let r=(t||[]).find(t=>t.id===e.id);if(!r)return n;n.owner_member_id=r.id;let i=Array.isArray(r.groups)?r.groups.filter(Boolean):[];return i.length&&(n.group=i[0]),n}var Sr=(e,t)=>e.length>t?`${e.slice(0,t-1).trimEnd()}...`:e;function Cr(e,t,n){if(!n)return``;switch(t){case`SponsorYear`:return e.label(`system/Contacts`,n.contact_id)||n._label||n.id;case`SupplierYear`:{let r=e.label(`system/Suppliers`,n.supplier_id)||n.id,i=e.column(t,`area`),a=n.area?e.listLabel(i&&i.list||`supplier_area`,n.area):``;return a?`${r} (${a})`:r}case`Donations`:return[n.contact_id?e.label(`system/Contacts`,n.contact_id):``,Sr(String(n.what||``).trim(),40)].filter(Boolean).join(`, `)||n.id;case`Meetings`:return[o(n.date),n.location].filter(Boolean).join(`, `)||n.id;case`Prizes`:return n.title||n._label||n.id;default:return n._label||n.id}}function wr(e,t){if(!t||!t.linked_tab)return``;let n=lr(t.linked_tab);if(!t.linked_id)return n;let r=e.byId(t.linked_tab,t.linked_id);return r?`${n}: ${Cr(e,t.linked_tab,r)}`:e.columns(t.linked_tab).length?`${n}: record not found`:n}function Tr(e,t,{current:n=``,query:r=``}={}){if(!t)return[];let i=e.rows(t).slice();t===`Meetings`&&i.sort((e,t)=>String(e.date||``).localeCompare(String(t.date||``)));let a=i.map(n=>({value:n.id,label:Cr(e,t,n)}));t!==`Meetings`&&a.sort((e,t)=>e.label.localeCompare(t.label,`en-GB`,{sensitivity:`base`}));let o=String(r||``).trim().toLowerCase();return o&&(a=a.filter(e=>e.value===n||e.label.toLowerCase().includes(o))),n&&!a.some(e=>e.value===n)&&a.unshift({value:n,label:`Record not found`}),a}function Er(e,t,n){let r=(e||[]).filter(e=>e.status!==or),i=mr(t),a=J(t),o=r.filter(e=>e.due&&e.due>i).map(e=>J(e.due)).sort(),s=n&&/^\d{4}-\d{2}/.test(n)?J(n):o[o.length-1]||a;s<a&&(s=o[o.length-1]||a);let c={key:`overdue`,label:`Overdue`,rows:[]},l={key:`week`,label:`This week`,rows:[]},u={key:`month`,label:`This month`,rows:[]},d=[];for(let e=hr(a);e<=s;e=hr(e))d.push({key:e,label:gr(e),rows:[]});let f={key:`later`,label:`Later`,rows:[]},p={key:`none`,label:`No date`,rows:[]};for(let e of r)e.due?e.due<t?c.rows.push(e):e.due<=i?l.rows.push(e):J(e.due)===a?u.rows.push(e):(d.find(t=>t.key===J(e.due))||f).rows.push(e):p.rows.push(e);let m=(e,t)=>String(e.due||``).localeCompare(String(t.due||``)),h=[c,l,u,...d,f,p];h.forEach(e=>e.rows.sort(m));let g=J(q(i,1))!==a,_=[c,f,p].concat(g?[u]:[]);return h.filter(e=>e.rows.length||!_.includes(e))}var Dr=g({TASKS:()=>Pr,html:()=>Rr,setup:()=>zr,tasksScreen:()=>Ir}),Or=[`Tasks`,`Members`,`Meetings`,`SponsorYear`,`SupplierYear`,`Donations`,`system/Contacts`,`system/Suppliers`],kr=[`Prizes`],Ar=[`linked_tab`,`linked_id`],jr={owner_member_id:`Owner`,linked_tab:`Linked to`},Mr=9,Nr={"--cols":`${[`string`,`ref`,`list`,`date`,`list`,`ref`].map((e,t)=>Qe({type:e},t===0)).join(` `)} 4.5rem`},Pr={tab:K,load:Or,list:[`title`,`owner_member_id`,`group`,`due`,`status`,`linked_tab`],form:[`title`,`details`,`owner_member_id`,`group`,`due`,`status`,...Ar],filters:[`status`,`owner_member_id`,`group`],sort:`due`,noun:`task`,defaults:{status:`todo`},empty:`No tasks yet. Add the first one with New task.`},Fr=()=>dr(new Date);function Ir(){let e=N({...Pr,where(e){return this.hideDone&&e.status===`done`&&this.filters.status!==`done`?!1:this.scope===`mine`&&E.member?e.owner_member_id===E.member.id:!0},async afterSave(e){let t=br(e);t&&await T.save(K,t,e.id)}}),t=Object.getOwnPropertyDescriptors(e),n=(e,n,...r)=>t[e].value.apply(n,r),r=(e,n)=>t[e].get.call(n);return Object.defineProperties(e,Object.getOwnPropertyDescriptors({view:`tasks`,tview:`list`,scope:`mine`,hideDone:!0,linkQuery:``,busyId:null,listMessage:``,undo:null,fullForm:!1,linkKinds:cr,grid:Nr,init(){n(`init`,this),this.$watch(`filters.owner_member_id`,e=>{e&&(this.scope=`all`)})},async reload(){return T.load(kr).catch(()=>{}),n(`reload`,this)},setScope(e){this.scope=e,e===`mine`&&(this.filters.owner_member_id=``)},get gridStyle(){return{}},get total(){return 0},get allCount(){return T.rows(K).length},get countLine(){let e=this.rows.length,t=this.allCount;return e===t?`${e} ${e===1?`task`:`tasks`}`:`Showing ${e} of ${t} tasks`},get filtered(){return r(`filtered`,this)||this.allCount>0&&(this.scope===`mine`||this.hideDone)},clearFilters(){n(`clearFilters`,this),this.scope=`all`,this.hideDone=!1},label(e){return e&&jr[e.name]||n(`label`,this,e)},cell(e,t){return t&&t.name===`linked_tab`?this.linkText(e):n(`cell`,this,e,t)},linkText(e){return wr(T,e)},ownerName(e){return e&&e.owner_member_id?T.label(`Members`,e.owner_member_id):``},dueState(e){return _r(e,Fr())},dueClass(e){let t=this.dueState(e);return t===`overdue`?`text-bad font-semibold`:t===`soon`?`text-warn font-semibold`:``},dueText(e){if(!e||!e.due)return``;let t=o(e.due);return this.dueState(e)===`overdue`?`${t}, overdue`:t},listCell(e,t){return t.name===`due`?this.dueText(e):this.cell(e,t)},get statusGroups(){let e=T.column(K,`status`);if(!e)return[];let t=this.rows;return T.options(e.list).map(e=>({value:e.value,label:e.label,rows:t.filter(t=>t.status===e.value)})).filter(e=>e.rows.length||!this.filters.status&&!(e.value===`done`&&this.hideDone))},get timeline(){let e=this.$store.ball&&this.$store.ball.settings||{};return Er(this.rows,Fr(),e.event_date||``)},get formCols(){let e=r(`formCols`,this);return this.fullForm||this.panel.mode===`edit`?e:e.filter(e=>e.name!==`linked_id`)},get editCols(){return r(`editCols`,this).filter(e=>!Ar.includes(e.name))},edit(){this.fullForm=!0;try{n(`edit`,this)}finally{this.fullForm=!1}this.linkQuery=``},create(){this.cfg.defaults={...Pr.defaults,...xr(E.member,T.rows(`Members`))},n(`create`,this),this.linkQuery=``},async save(){if(this.form.linked_tab&&!this.form.linked_id)this.errors={linked_id:`Choose one, or set Linked to back to None.`},this.message=`Please check the highlighted fields.`;else return this.form.linked_tab||(this.form.linked_id=``),n(`save`,this)},get availableKinds(){return cr.filter(e=>T.columns(e.tab).length||e.tab===this.form.linked_tab)},get linkOptions(){return Tr(T,this.form.linked_tab,{current:this.form.linked_id,query:this.linkQuery})},get linkSearch(){return T.rows(this.form.linked_tab||``).length>=Mr},kindChanged(){this.form.linked_id=``,this.linkQuery=``},async setDone(e,t,n=!1){if(!e||!this.canWrite||this.busyId)return;this.busyId=e.id,this.listMessage=``,n||(this.message=``);let r=e.status;try{await T.save(K,t?vr():yr(),e.id),this.undo=t&&n?{id:e.id,title:e.title,status:r}:null}catch(e){let t=e.message||`Could not save. Please try again.`;n?this.listMessage=t:this.message=t}finally{this.busyId=null}},async undoDone(){let e=this.undo;if(e&&!this.busyId){this.busyId=e.id;try{await T.save(K,{status:e.status&&e.status!==`done`?e.status:`todo`,done_at:null},e.id),this.undo=null}catch(e){this.listMessage=e.message||`Could not undo. Please try again.`}finally{this.busyId=null}}},doneAtText(e){return e&&e.done_at?a(e.done_at):``},meetingText(e){let t=e&&e.meeting_id?T.byId(`Meetings`,e.meeting_id):null;return t?o(t.date)||t.id:``}})),e}var Lr=(e,t=``)=>`
  <button class="btn sm ${t}" type="button" x-show="canWrite && ${e}.status !== 'done'" :disabled="busyId === ${e}.id"
    @click.stop="setDone(${e}, true, true)" :aria-label="'Mark done: ' + ${e}.title">Done</button>`,Rr=`
  <section class="flex flex-col gap-4">
    <div class="contents" x-data="tasksScreen">${P({intro:`Who is doing what, and by when. Overdue tasks are in red, tasks due in the next 7 days in amber.`,toolbarHtml:`
  <div class="seg" role="group" aria-label="Whose tasks">
    <button type="button" :aria-pressed="scope === 'mine'" @click="setScope('mine')">My tasks</button>
    <button type="button" :aria-pressed="scope === 'all'" @click="setScope('all')">Everyone's</button>
  </div>
  <label class="fcheck text-[13px]"><input type="checkbox" x-model="hideDone"><span>Hide done</span></label>
  <div class="seg" role="group" aria-label="Show as">
    <button type="button" :aria-pressed="tview === 'list'" @click="tview = 'list'">List</button>
    <button type="button" :aria-pressed="tview === 'board'" @click="tview = 'board'">Board</button>
    <button type="button" :aria-pressed="tview === 'timeline'" @click="tview = 'timeline'">Timeline</button>
  </div>`,aboveListHtml:`
  <div class="note flex flex-wrap items-center gap-2" role="status" x-show="undo">
    <span class="grow" x-text="undo ? 'Marked done: ' + undo.title : ''"></span>
    <button class="btn sm" type="button" :disabled="busyId" @click="undoDone()">Undo</button>
    <button class="btn sm" type="button" @click="undo = null">OK</button>
  </div>
  <div class="banner" role="alert" x-show="listMessage" x-text="listMessage"></div>
  <p class="rcount m-0" x-show="status === 'ready' && allCount" x-text="countLine"></p>
  ${`
  <div class="rlist" x-show="status === 'ready' && rows.length && tview === 'list'" :style="grid">
    <div class="rhead">
      <template x-for="c in listCols" :key="c.name">
        <button type="button" :title="label(c)" @click="sortBy(c.name)" :aria-sort="sortCol === c.name ? (sortDir === 'asc' ? 'ascending' : 'descending') : null">
          <span x-text="label(c)"></span><span x-show="sortCol === c.name" x-text="sortDir === 'asc' ? '↑' : '↓'"></span>
        </button>
      </template>
      <span></span>
    </div>
    <template x-for="r in rows" :key="r.id">
      <div class="rrow cursor-pointer" @click="open(r)">
        <button type="button" class="rc first text-left" @click.stop="open(r)" :title="r.title" x-text="r.title"></button>
        <template x-for="c in listCols.slice(1)" :key="c.name">
          <span class="rc" :class="[c.name === 'due' ? dueClass(r) : '', listCell(r, c) ? '' : 'blank']" :data-l="label(c)" :title="listCell(r, c) || null" x-text="listCell(r, c)"></span>
        </template>
        <span class="flex justify-end">${Lr(`r`)}</span>
      </div>
    </template>
  </div>`}${`
  <div class="board" x-show="status === 'ready' && rows.length && tview === 'board'">
    <template x-for="g in statusGroups" :key="g.value">
      <section class="bcol">
        <header><span x-text="g.label"></span><b class="num" x-text="g.rows.length"></b></header>
        <template x-for="r in g.rows" :key="r.id">
          <div class="bcard cursor-pointer" @click="open(r)">
            <button type="button" class="bt text-left" @click.stop="open(r)" x-text="r.title"></button>
            <span class="bs" x-show="ownerName(r)" x-text="ownerName(r)"></span>
            <span class="bs" x-show="r.due" :class="dueClass(r)" x-text="'Due ' + dueText(r)"></span>
            <span class="bs" x-show="r.linked_tab" x-text="linkText(r)"></span>
            <span class="flex justify-end">${Lr(`r`,`mt-1`)}</span>
          </div>
        </template>
        <p class="bs muted m-0 px-1 text-[12px]" x-show="!g.rows.length">Nothing here.</p>
      </section>
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
    <div x-show="record.meeting_id"><dt>From the meeting on</dt><dd x-text="meetingText(record)"></dd></div>
  </dl>
  <div class="flex gap-2" x-show="canWrite">
    <button class="btn pri" type="button" x-show="record.status !== 'done'" :disabled="busyId" @click="setDone(record, true)">Mark done</button>
    <button class="btn" type="button" x-show="record.status === 'done'" :disabled="busyId" @click="setDone(record, false)">Reopen</button>
  </div>`,panelEditHtml:`
  <div class="field">
    <label class="flab" :for="'f' + uid + '-linked_tab'">Linked to</label>
    <select class="inp" :id="'f' + uid + '-linked_tab'" x-model="form.linked_tab" @change="kindChanged()">
      <option value="">None</option>
      <template x-for="k in availableKinds" :key="k.tab"><option :value="k.tab" x-text="k.label" :selected="form.linked_tab === k.tab"></option></template>
    </select>
    <p class="fhelp">The sponsor, supplier, donation or meeting this task is about, if any.</p>
  </div>
  <div class="field" :class="{ bad: errors.linked_id }" x-show="form.linked_tab">
    <label class="flab" :for="'f' + uid + '-linked_id'">Which one</label>
    <div class="fref">
      <input class="inp" type="search" placeholder="Type to narrow the list" aria-label="Narrow the list" x-show="linkSearch" x-model="linkQuery">
      <select class="inp" :id="'f' + uid + '-linked_id'" x-model="form.linked_id" :aria-invalid="Boolean(errors.linked_id)">
        <option value="">Choose...</option>
        <template x-for="o in linkOptions" :key="o.value"><option :value="o.value" x-text="o.label" :selected="form.linked_id === o.value"></option></template>
      </select>
    </div>
    <p class="ferr" x-show="errors.linked_id" x-text="errors.linked_id"></p>
  </div>`})}</div>
  </section>`;function zr(e){e.data(`tasksScreen`,Ir)}var Br=[{key:`SponsorYear`,tab:`SponsorYear`,label:`Sponsors`,kindList:O.SponsorYear},{key:`SupplierYear`,tab:`SupplierYear`,label:`Suppliers`,kindList:O.SupplierYear},{key:`Meetings`,tab:`Meetings`,label:`Meetings`,kindList:O.Meetings},{key:`Prizes`,tab:k,recordTab:`Prizes`,label:`Prizes (pictures)`},{key:`Lots`,tab:k,recordTab:`Lots`,label:`Lots (pictures)`}],Vr=[`SponsorYear`,`system/Contacts`,`SupplierYear`,`system/Suppliers`,`Meetings`,`Prizes`,`Lots`,k],Hr=`en-GB`,Y=(e,t)=>String(e).localeCompare(String(t),Hr,{sensitivity:`base`,numeric:!0}),X=e=>/^\d{4}-\d{2}-\d{2}$/.test(String(e))?o(e):String(e??``);function Ur(e,t,n){if(!n)return``;if(n._label&&n._label!==n.id)return X(n._label);let r=e.columns(t).find(e=>e.type===`ref`&&e.required);return r&&n[r.name]?e.label(r.ref,n[r.name]):n.id}var Wr={key:`other`,label:`Other (not for one record)`},Gr=e=>!!e&&e.tab===`OtherFiles`;function Kr(e){return e.slice().sort((e,t)=>Y(e.tabLabel,t.tabLabel)||Y(X(e.recordLabel),X(t.recordLabel))||Y(e.columnLabel,t.columnLabel))}function qr(e){return[...new Set(e.map(e=>e.tabLabel))].sort(Y)}function Jr(e,{q:t=``,area:n=``}={}){let r=String(t).toLowerCase().split(/\s+/).filter(Boolean);return e.filter(e=>{if(n&&e.tabLabel!==n)return!1;let t=[e.tabLabel,X(e.recordLabel),e.columnLabel,e.comment||``,e.addedBy||``].join(` `).toLowerCase();return r.every(e=>t.includes(e))})}function Yr(e){return Gr(e)?[e.kind===`link`?`Link`:`File`,e.comment].filter(Boolean).join(`: `):e.kind===`image`?`Picture`:e.kind===`folder`?`${e.columnLabel} (folder)`:e.columnLabel}function Xr(e,t,n){if(!n)return[];if(n.recordTab){let r=e.column(k,`file`);return!e.canWrite(n.recordTab)||!dt(r,t,`Images`)?[]:[{name:`file`,label:`Picture`,kind:`images`}]}let r=e.columns(n.tab).map(e=>({name:e.name,label:e.label,kind:dt(e,t,n.tab)})).filter(e=>e.kind);if(!n.kindList||!e.canWrite(n.tab))return r;let i=at.includes(t)?`all`:`images`,a=e.list(n.kindList).filter(e=>e.active!==!1).map(e=>({name:`kind:${e.value}`,label:e.label,kind:i,listKind:e.value}));return r.concat(a)}function Zr(e,t,n,r){if(!t||t.recordTab||!r||r.listKind||!n)return``;let i=e.byId(t.tab,n);return i&&i[r.name]?String(i[r.name]):``}function Qr(e,t){return Br.filter(n=>Xr(e,t,n).length)}function $r(e,t){if(!t)return[];let n=t.recordTab||t.tab;return e.rows(n).map(t=>({value:t.id,label:Ur(e,n,t)})).sort((e,t)=>Y(e.label,t.label))}function ei(e,t,n,{replace:r=!1}={}){return e.recordTab?{tab:k,recordTab:e.recordTab,recordId:t}:String(n).startsWith(`kind:`)?{tab:e.tab,id:t,kind:String(n).slice(5)}:r?{tab:e.tab,id:t,column:n,replace:!0}:{tab:e.tab,id:t,column:n}}var ti=g({filesScreen:()=>ii,html:()=>ai,setup:()=>oi}),ni={"--cols":`${[`string`,`list`,`string`].map((e,t)=>Qe({type:e},t===0)).join(` `)}`},ri=()=>({open:!1,area:``,recordId:``,column:``,file:null,busy:!1,stage:``,error:``,done:null,title:``,comment:``,how:`file`,link:``,replace:!1});function ii(){return{status:`loading`,loadError:``,files:[],q:``,area:``,grid:ni,up:ri(),formStatus:`idle`,formError:``,confirmId:``,removeError:``,init(){this.reload()},async reload(){this.status=`loading`;try{let e=await m.call(`files.list`,{});this.files=e.files||[],this.status=`ready`}catch(e){this.loadError=e.message||`Could not load.`,this.status=`error`}},get role(){return E.member&&E.member.role||T.state.role},get areas(){return qr(this.files)},get shown(){return Kr(Jr(this.files,{q:this.q,area:this.area}))},get filtered(){return!!(this.q.trim()||this.area)},get countText(){let e=this.shown.length,t=this.files.length;return e===t?`${t} ${t===1?`file`:`files`}`:`Showing ${e} of ${t} files`},clearFilters(){this.q=``,this.area=``},nice:X,what:Yr,other:Gr,async remove(e){if(this.confirmId!==e.recordId)this.confirmId=e.recordId,this.removeError=``;else try{await m.call(`files.removeOther`,{id:e.recordId}),this.files=this.files.filter(t=>!(Gr(t)&&t.recordId===e.recordId))}catch(e){this.removeError=e.message||`Could not remove it.`}finally{this.confirmId=``}},async openUpload(){if(this.up={...ri(),open:!0},this.formStatus!==`ready`&&this.formStatus!==`loading`){this.formStatus=`loading`;try{await T.load(Vr),this.formStatus=`ready`}catch(e){this.formError=e.message||`Could not load.`,this.formStatus=`error`}}},closeUpload(){this.up.busy||(this.up.open=!1)},another(){let{area:e,how:t}=this.up;this.up={...ri(),open:!0,area:e,how:t},this.pickArea(),this.$refs.upFile&&(this.$refs.upFile.value=``)},get upAreas(){return this.formStatus===`ready`?[...Qr(T,this.role),Wr]:[]},get upOther(){return this.up.area===Wr.key},get upArea(){return Br.find(e=>e.key===this.up.area)||null},get upRecords(){return $r(T,this.upArea)},get upFields(){return Xr(T,this.role,this.upArea)},get upField(){return this.upFields.find(e=>e.name===this.up.column)||null},get upAccept(){return this.upField?j(this.upField.kind):``},get upCurrent(){return Zr(T,this.upArea,this.up.recordId,this.upField)},get upHint(){return this.upField?ft(this.upField.kind,!1):``},get otherAccept(){return j(`all`)},get otherHint(){return ft(`all`,!1)},get canSend(){return this.up.busy?!1:this.upOther?!!(this.up.title.trim()&&(this.up.how===`file`?this.up.file:this.up.link.trim())):!!(this.upArea&&this.up.recordId&&this.upField&&this.up.file)},pickArea(){this.up.recordId=``,this.up.replace=!1;let e=this.upFields;this.up.column=e.length===1?e[0].name:``,this.up.error=``},picked(e){this.up.file=e.target.files&&e.target.files[0]||null,this.up.error=``},async sendOther(){this.up.busy=!0,this.up.error=``;try{let e=await Ct({api:m,title:this.up.title,comment:this.up.comment,link:this.up.how===`link`?this.up.link.trim():``,file:this.up.how===`file`?this.up.file:null,onStage:e=>{this.up.stage=e}});this.up.done={url:e.entry?e.entry.url:``,text:`Added "${this.up.title.trim()}" to Other.`},this.reload()}catch(e){this.up.error=e.message||`Could not add it. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}},async send(){if(!this.canSend)return;if(this.upOther){await this.sendOther();return}let e=this.upArea,t=this.upField;this.up.busy=!0,this.up.error=``;try{let n=await St({api:m,records:T,file:this.up.file,kind:t.kind,target:ei(e,this.up.recordId,t.name,{replace:this.up.replace}),onStage:e=>{this.up.stage=e}}),r=$r(T,e).find(e=>e.value===this.up.recordId),i=`${r?r.label:`the record`} (${t.label.toLowerCase()})`;this.up.done={url:n.url,text:n.attached?`Added to ${i}, next to the files already there.`:`Uploaded to ${i}.`},this.reload()}catch(e){this.up.error=e.message||`Could not upload. Please try again.`}finally{this.up.busy=!1,this.up.stage=``}}}}var ai=`
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
          <button class="btn pri" type="button" @click="openUpload()">Upload a file</button>
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
    <div class="rhead text-[10.5px] font-bold tracking-[.1em] uppercase text-[var(--muted)]"><span>Record</span><span>Area</span><span>File</span></div>
    <template x-for="f in shown" :key="f.tab + f.recordId + f.column + f.fileId">
      <div class="contents">
        <template x-if="!other(f)">
          <a class="rrow no-underline text-inherit" :href="f.url" target="_blank" rel="noopener">
            <span class="rc first" :title="nice(f.recordLabel)" x-text="nice(f.recordLabel)"></span>
            <span class="rc" data-l="Area" :title="f.tabLabel" x-text="f.tabLabel"></span>
            <span class="rc" data-l="File" :title="what(f)" x-text="what(f)"></span>
          </a>
        </template>
        <template x-if="other(f)">
          <div class="rrow">
            <a class="rc first no-underline text-inherit" :href="f.url" target="_blank" rel="noopener" :title="f.recordLabel" x-text="f.recordLabel"></a>
            <span class="rc" data-l="Area" :title="f.addedBy ? 'Added by ' + f.addedBy : ''" x-text="f.addedBy ? 'Other, by ' + f.addedBy : 'Other'"></span>
            <span class="rc flex items-center gap-2" data-l="File">
              <span class="min-w-0 overflow-hidden text-ellipsis" :title="what(f)" x-text="what(f)"></span>
              <button class="btn sm shrink-0 ml-auto" type="button" x-show="f.canRemove" @click="remove(f)" x-text="confirmId === f.recordId ? 'Yes, remove' : 'Remove'"></button>
            </span>
          </div>
        </template>
      </div>
    </template>
  </div>
      </div>
    </div>
    <p class="note m-0">
      Anyone on the committee can upload pictures (logos, adverts, prize photos) to a record. Only
      the chair and the treasurer upload documents such as quotes and invoices to a record; anyone
      can paste a Google Drive link into a record's file field instead. Under Other, anyone adds a
      file or a link for the whole committee, and removes their own. Pictures can be seen by anyone
      with the link; documents open only for people the year's Drive folder is shared with.
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
          <select class="inp" id="fu-area" x-model="up.area" @change="pickArea()" :disabled="up.busy">
            <option value="">Choose...</option>
            <template x-for="a in upAreas" :key="a.key"><option :value="a.key" x-text="a.label" :selected="up.area === a.key"></option></template>
          </select>
        </div>
        <template x-if="upOther">
          <div class="flex flex-col gap-4">
            <div class="field">
              <label class="flab" for="fu-title">Title</label>
              <input class="inp" id="fu-title" x-model="up.title" maxlength="200" :disabled="up.busy" placeholder="For example: Hotel floor plan">
            </div>
            <div class="field">
              <label class="flab" for="fu-comment">Comment</label>
              <textarea class="inp" id="fu-comment" x-model="up.comment" maxlength="2000" :disabled="up.busy"></textarea>
            </div>
            <div class="seg self-start" role="group" aria-label="File or link">
              <button type="button" :aria-pressed="up.how === 'file'" @click="up.how = 'file'" :disabled="up.busy">Upload a file</button>
              <button type="button" :aria-pressed="up.how === 'link'" @click="up.how = 'link'" :disabled="up.busy">Paste a link</button>
            </div>
            <div class="field" x-show="up.how === 'file'">
              <label class="flab" for="fu-ofile">File</label>
              <input class="inp" id="fu-ofile" type="file" :accept="otherAccept" @change="picked($event)" :disabled="up.busy">
              <p class="fhelp" x-text="otherHint"></p>
            </div>
            <div class="field" x-show="up.how === 'link'">
              <label class="flab" for="fu-link">Link</label>
              <input class="inp" id="fu-link" type="url" x-model="up.link" :disabled="up.busy" placeholder="https://">
              <p class="fhelp">A Google Drive, Docs or Sheets link, or any web page.</p>
            </div>
          </div>
        </template>
        <div class="field" x-show="upArea">
          <label class="flab" for="fu-record">Which one</label>
          <select class="inp" id="fu-record" x-model="up.recordId" @change="up.replace = false" :disabled="up.busy">
            <option value="">Choose...</option>
            <template x-for="r in upRecords" :key="r.value"><option :value="r.value" x-text="r.label" :selected="up.recordId === r.value"></option></template>
          </select>
          <p class="fhelp" x-show="upArea && !upRecords.length">Nothing here yet. Add it on its own screen first.</p>
        </div>
        <div class="field" x-show="upArea && upFields.length > 1">
          <label class="flab" for="fu-field">File field</label>
          <select class="inp" id="fu-field" x-model="up.column" @change="up.replace = false" :disabled="up.busy">
            <option value="">Choose...</option>
            <template x-for="f in upFields" :key="f.name"><option :value="f.name" x-text="f.label" :selected="up.column === f.name"></option></template>
          </select>
        </div>
        <div class="field" x-show="upField && up.recordId">
          <template x-if="upCurrent">
            <div class="flex flex-col gap-1">
              <label class="flex items-start gap-2 text-[13.5px]">
                <input type="checkbox" class="mt-0.5" x-model="up.replace" :disabled="up.busy">
                <span>Replace the current file</span>
              </label>
              <p class="fhelp" x-text="up.replace ? 'The current file goes to the Drive Bin, where it can be restored for 30 days.' : 'Not ticked: the new file is added next to the current one.'"></p>
            </div>
          </template>
          <p class="fhelp" x-show="!upCurrent && upField && upField.listKind">Added as an extra file on this record.</p>
        </div>
        <div class="field" x-show="upField">
          <label class="flab" for="fu-file">File</label>
          <input class="inp" id="fu-file" type="file" x-ref="upFile" :accept="upAccept" @change="picked($event)" :disabled="up.busy">
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
          <button class="btn" type="button" :disabled="up.busy" @click="closeUpload()">Cancel</button>
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
  </section>`;function oi(e){e.data(`filesScreen`,ii)}var Z=[`Lists`,`system/Lists`],si=[`member_role`],ci={breakout_group:`Breakout groups members join, and tasks belong to.`,sponsor_status:`Where each sponsor stands this year.`,donation_status:`Where each donation stands.`,sponsor_benefit:`What a sponsor tier gives (logo on the invitation, ad in the booklet).`,supplier_area:`What a supplier does (venue, DJ, flowers).`,supplier_status:`Where each supplier stands this year.`,task_status:`Where each task stands.`,contact_category:`Kinds of business, for sponsors and donors.`,budget_category:`Spending lines in the budget.`,income_source:`Where money comes in from.`,member_role:`Decides what each member can see and do. Fixed.`,file_kind_sponsors:`Extra kinds of file a sponsor can have, on top of invoice, logo and ad.`,file_kind_suppliers:`Extra kinds of file a supplier can have, on top of the quote.`,file_kind_meetings:`Extra kinds of file a meeting can have, on top of agenda and recap.`},li={file_kind_sponsors:`File types: sponsors`,file_kind_suppliers:`File types: suppliers`,file_kind_meetings:`File types: meetings`};function ui(e,t){let n=[],r=new Set,i=(e,t)=>e.forEach(e=>{let i=String(e.list_name||``).trim();i&&!r.has(i)&&(r.add(i),n.push({name:i,sheet:t,title:li[i]||b(i),help:ci[i]||``,fixed:si.includes(i)}))});return i(e,`year`),i(t,`system`),n.sort((e,t)=>e.title.localeCompare(t.title,`en-GB`))}function di(e,t,n=[]){let r=new Set(n.filter(e=>e.locked).map(e=>e.value));return e.filter(e=>String(e.list_name).trim()===t).map(e=>({id:e.id,value:String(e.value),label:String(e.label||e.value),order:Number(e.sort_order)||0,active:e.active!==!1,locked:r.has(String(e.value))||si.includes(t)})).sort((e,t)=>e.order-t.order||e.label.localeCompare(t.label,`en-GB`))}function fi(e,t,n){let r=e.map(e=>e.id),i=r.indexOf(t),a=i+n;return i<0||a<0||a>=r.length?null:([r[i],r[a]]=[r[a],r[i]],r)}var pi=g({MEMBERS:()=>mi,html:()=>_i,setup:()=>yi}),mi={tab:`Members`,list:[`_label`,`role`,`groups`,`active`],form:[`first_name`,`last_name`,`google_email`,`phone`,`role`,`groups`,`active`],filters:[`role`,`active`],sort:`_label`,noun:`member`,defaults:{active:!0},empty:`No members yet. Add the committee so they can sign in.`},hi=`People sign in with the Google account listed here. Only active members can sign in.`,gi=`The choices in every dropdown. Rename, reorder or retire a value, or add a new one. Records keep what they hold: a retired value stays on old records but is no longer offered. Values marked "Used by the app" stay as they are, because the app's rules depend on them.`,_i=`
  <section class="flex flex-col gap-4">
    <div class="contents" x-data="membersCard">${P({title:`Members`,intro:hi})}</div>
    <div class="contents" x-data="listsCard">
  <div class="card" x-show="isChair">
    <div class="card-h"><h2>Lists</h2></div>
    <div class="card-b flex flex-col gap-3">
      <p class="muted m-0" x-text="intro"></p>
      <p class="muted m-0" x-show="status === 'loading'">Loading...</p>
      <div class="banner" role="alert" x-show="status === 'error'">
        <span x-text="error"></span><button class="btn sm" type="button" @click="load()">Try again</button>
      </div>
      <template x-if="status === 'ready'">
        <div class="flex flex-col gap-3">
          <label class="field max-w-sm">
            <span class="lbl">Which list</span>
            <select class="inp" x-model="which" @change="cancelRename(); error = ''">
              <template x-for="c in choices" :key="c.name"><option :value="c.name" x-text="c.title"></option></template>
            </select>
          </label>
          <p class="muted m-0" x-show="choice && choice.help" x-text="choice && choice.help"></p>
          <div class="banner" role="alert" x-show="error" x-text="error"></div>
          <ul class="lvals">
            <template x-for="(v, i) in values" :key="v.id">
              <li class="lval" :class="{ retired: !v.active }">
                <template x-if="renaming !== v.id">
                  <span class="lname">
                    <span x-text="v.label"></span>
                    <span class="ltag" x-show="!v.active">Retired</span>
                    <span class="ltag" x-show="v.locked && !fixed" title="The app relies on this value: it cannot be renamed or retired">Used by the app</span>
                  </span>
                </template>
                <template x-if="renaming === v.id">
                  <form class="flex gap-2 flex-1 min-w-0" @submit.prevent="saveRename(v)">
                    <input class="inp" x-model="renameText" maxlength="60" aria-label="New name" x-init="$nextTick(() => $el.focus())" @keydown.escape="cancelRename()">
                    <button class="btn sm pri" type="submit" :disabled="busy">Save</button>
                    <button class="btn sm" type="button" @click="cancelRename()">Cancel</button>
                  </form>
                </template>
                <span class="lacts" x-show="!fixed && renaming !== v.id">
                  <button class="btn sm" type="button" :disabled="busy || i === 0" @click="move(v, -1)" :aria-label="'Move ' + v.label + ' up'">↑</button>
                  <button class="btn sm" type="button" :disabled="busy || i === values.length - 1" @click="move(v, 1)" :aria-label="'Move ' + v.label + ' down'">↓</button>
                  <button class="btn sm" type="button" x-show="!v.locked" :disabled="busy" @click="startRename(v)">Rename</button>
                  <button class="btn sm" type="button" x-show="v.active && !v.locked" :disabled="busy" @click="setActive(v, false)">Retire</button>
                  <button class="btn sm" type="button" x-show="!v.active" :disabled="busy" @click="setActive(v, true)">Bring back</button>
                </span>
              </li>
            </template>
          </ul>
          <form class="flex gap-2 max-w-md" x-show="!fixed" @submit.prevent="add()">
            <input class="inp" x-model="newLabel" maxlength="60" placeholder="New value" aria-label="New value">
            <button class="btn pri shrink-0" type="submit" :disabled="busy || !newLabel.trim()">Add</button>
          </form>
        </div>
      </template>
    </div>
  </div></div>
    <p class="note m-0">Event settings and years will be added to this page later.</p>
  </section>`;function vi(){return{intro:gi,status:`loading`,error:``,which:`breakout_group`,busy:!1,renaming:null,renameText:``,newLabel:``,get isChair(){return(E.member&&E.member.role||T.state.role)===`chair`},get choices(){return ui(T.rows(`Lists`),T.rows(`system/Lists`))},get choice(){return this.choices.find(e=>e.name===this.which)||null},get fixed(){return!!(this.choice&&this.choice.fixed)},get values(){let e=this.choice;return e?di(T.rows(e.sheet===`system`?`system/Lists`:`Lists`),e.name,T.list(e.name)):[]},init(){this.load()},async load(){this.status=T.has(Z)?`ready`:`loading`;try{await T.load(Z),!this.choice&&this.choices.length&&(this.which=this.choices[0].name),this.status=`ready`}catch(e){this.error=e.message||`Could not load the lists.`,this.status=`error`}},async run(e,t){this.busy=!0,this.error=``;try{return await m.call(e,{sheet:this.choice.sheet,...t}),await T.load(Z),!0}catch(e){return this.error=e.message||`That did not save.`,e.code===`conflict`&&await T.load(Z).catch(()=>{}),!1}finally{this.busy=!1}},startRename(e){this.renaming=e.id,this.renameText=e.label},cancelRename(){this.renaming=null,this.renameText=``},async saveRename(e){(this.renameText.trim()===e.label||await this.run(`lists.save`,{id:e.id,label:this.renameText}))&&this.cancelRename()},setActive(e,t){return this.run(`lists.save`,{id:e.id,active:t})},move(e,t){let n=fi(this.values,e.id,t);return n?this.run(`lists.reorder`,{list_name:this.which,ids:n}):null},async add(){await this.run(`lists.save`,{list_name:this.which,label:this.newLabel})&&(this.newLabel=``)}}}function yi(e){e.data(`membersCard`,()=>N(mi)),e.data(`listsCard`,vi)}var bi={sponsors:Sn,suppliers:zn,tasks:Dr,files:ti,settings:pi};function xi(e){return bi[e]?bi[e].html:Ie}function Si(e){for(let t of Object.values(bi))typeof t.setup==`function`&&t.setup(e)}var Ci=p.map(e=>e.id),wi=`dashboard`,Q=ae({api:m});i(()=>Q.ended()),Q.subscribe(e=>{E.member=e.status===`signedIn`&&e.member||null,e.status!==`signedIn`&&T.clear()}),Si(e);var $={host:null,box:null};function Ti(){let e=document.documentElement.getAttribute(`data-theme`);return e?e===`dark`:window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches}e.data(`committeeApp`,()=>({hash:r(Ci,wi),sideOpen:!1,moreOpen:!1,icon:n,env:s,auth:{...Q.state},googleError:``,googleFor:``,init(){window.addEventListener(`hashchange`,()=>{this.hash=r(Ci,wi)}),Q.subscribe(e=>{this.auth={...e}}),this.$watch(`route`,()=>this.showScreen()),Q.restore().then(()=>{s.mock&&this.auth.status===`signedOut`&&/[?&]preview=1/.test(location.search)&&this.mockSignIn(`chair`)})},get modules(){return f(p,this.member.role)},get groups(){return u(this.modules)},get tabs(){return l.map(e=>this.modules.find(t=>t.id===e)).filter(Boolean)},get moreItems(){return this.modules.filter(e=>!l.includes(e.id))},get route(){let e=p.find(e=>e.id===this.hash);return t(e,this.member.role)?this.hash:wi},mountHost(e){$.host=e,$.box=null,queueMicrotask(()=>this.showScreen())},showScreen(){let{host:t}=$;if(!t||!t.isConnected)return;let n=this.route;if($.box&&$.box.dataset.screen===n&&$.box.isConnected)return;$.box&&e.destroyTree($.box);let r=document.createElement(`div`);r.className=`contents`,r.dataset.screen=n,r.innerHTML=xi(n),t.replaceChildren(r),$.box=r,e.initTree(r)},go(e){this.sideOpen=!1,this.moreOpen=!1,location.hash=`#/${e}`,window.scrollTo({top:0})},get current(){return p.find(e=>e.id===this.route)},mockRoles:[[`chair`,`Chair`],[`treasurer`,`Treasurer`],[`guest_team`,`Guest team`],[`member`,`Member`]],get showShell(){return this.auth.status===`signedIn`},get member(){return this.auth.member||{}},get clientId(){return te(this.$store.ball.settings&&this.$store.ball.settings.google_client_id)},isMoreRoute(){return!l.includes(this.route)},mountGoogle(e,t){if(s.mock||!t)return;let n=`${t}|${this.$store.ball.mode}`;this.googleFor===n&&e.childElementCount||(this.googleFor=n,this.googleError=``,ue(e,{clientId:t,dark:Ti(),onCredential:e=>Q.signIn(e)}).catch(e=>{this.googleError=e.message,this.googleFor=``}))},mockSignIn(e){s.mock&&re(e)&&Q.signIn(re(e))},async signOut(){this.sideOpen=!1,de(),await Q.signOut(),this.googleFor=``}})),d({app:`committee`}),e.start();