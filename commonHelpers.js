import{i as n,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const c=document.querySelector(".form"),g=document.querySelector(".search-input"),d=document.querySelector(".gallery"),l=document.querySelector(".loader");c.addEventListener("submit",h);function h(a){l.classList.remove("is-hidden"),d.innerHTML="",a.preventDefault();const t=new URL("https://pixabay.com/api/"),s=new URLSearchParams({key:"41798579-68ab5b2702b30822247f51cf8",q:g.value,orientation:"horizontal",image_type:"photo",safesearch:!0});fetch(`${t}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)return console.log(n.warning),n.warning({title:"Ooops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});v(r.hits)}).catch(r=>n.error({title:"Error",message:"Something is wrong!",position:"topRight"})).finally(()=>{l.classList.add("is-hidden"),c.reset()})}function v(a){const t=a.map(({webformatURL:s,largeImageURL:r,tags:e,likes:i,views:o,comments:m,downloads:u})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${s}" alt="${e}" class="gallery-image"/>
        </a>
        <div class="image-desc">
          <div class="image-desc-item">
            <div class="image-desc-label">Likes</div>
            <div>${i}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Views</div>
            <div>${o}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Comments</div>
            <div>${m}</div>
          </div>
          <div class="image-desc-item">
            <div class="image-desc-label">Downloads</div>
            <div>${u}</div>
          </div>
        </div>
      </li>
      `).join("");d.innerHTML=t,new f(".gallery a").refresh()}
//# sourceMappingURL=commonHelpers.js.map
