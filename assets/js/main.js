const menuBtn=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
const searchInput=document.querySelector('[data-search]');
if(searchInput){
  searchInput.addEventListener('input',()=>{
    const q=searchInput.value.toLowerCase().trim();
    document.querySelectorAll('[data-article]').forEach(card=>{
      card.style.display=card.textContent.toLowerCase().includes(q)?'':'none';
    });
  });
}
