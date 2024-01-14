import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),g=document.querySelector(".search-input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");n.addEventListener("submit",h);function h(a){l.classList.remove("is-hidden"),c.innerHTML="",a.preventDefault();const r=new URL("https://pixabay.com/api/"),s=new URLSearchParams({key:"41798579-68ab5b2702b30822247f51cf8",q:g.value,orientation:"horizontal",image_type:"photo",safesearch:!0});fetch(`${r}?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{setTimeout(()=>{if(l.classList.add("is-hidden"),i.hits.length===0)return u.warning({title:"Ooops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});v(i.hits)},2e3)}).catch(i=>console.log(i)).finally(()=>{n.reset()})}function v(a){const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${s}" alt="${e}" class="gallery-image"/>
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${t}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Views</div>
            <div>${o}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${d}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${m}</div>
          </div>
        </div>
      </li>
      `).join("");c.innerHTML=r,new f(".gallery a").refresh()}
//# sourceMappingURL=commonHelpers.js.map
