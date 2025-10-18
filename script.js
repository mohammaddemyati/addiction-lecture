// Smooth-scroll for nav links
document.querySelectorAll('nav a').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
  
  // Mini quiz scorer
  document.getElementById('scoreBtn').onclick=()=>{
    const val=document.querySelector('input[name="q1"]:checked');
    const out=document.getElementById('scoreOut');
    if(!val){out.textContent='Please pick an option.';return;}
    const s=+val.value;
    const msg=['Low risk','Moderate risk','High risk','Possible dependence'];
    out.textContent='Result: '+msg[s]+' (score '+s+')';
  };