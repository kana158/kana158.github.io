"use strict";
{
  function callback(entries,obs){
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        return
      };
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const options={
    threshold:0.1,
  }
  const observer=new IntersectionObserver(callback,options);
  const targets=document.querySelectorAll(".animate");
  targets.forEach(target=>{
    observer.observe(target);
  });

  window.addEventListener("scroll",()=>{
    let position=window.scrollY;
    if(position>300){
      document.querySelector(".header-container nav").classList.add("move");
    }else{
      document.querySelector(".header-container nav").classList.remove("move");
    };
  });

  const navs=document.querySelectorAll("nav a");
  for(let i=0;i<navs.length;i++){
    navs[i].addEventListener("click",()=>{
    document.querySelectorAll("nav span")[i].textContent="pets";
    });
  };
}
