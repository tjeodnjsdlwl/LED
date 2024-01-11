// ****새로고침
history.scrollRestoration = "manual";






intro = gsap.timeline({})
intro.from('.sc-main [data-scroll-text] span',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
  
},'a')


intro = gsap.timeline({})
gsap.from('.sc-theme .theme-group [data-scroll-text] span',{
  scrollTrigger:{
      trigger:'.sc-theme',
      start:"0% 60%",
      end:"30% 100%",
      // markers:true,
      // scrub:1,
    },
  yPercent:100,
  opacity:0,
  delay:0.2,
  stagger:0.1
},'a')

intro = gsap.timeline({})
gsap.from('.sc-theme .flow-group [data-scroll-text] span',{
  scrollTrigger:{
      trigger:'.sc-theme',
      start:"20% 60%",
      end:"40% 100%",
      // markers:true,
      // scrub:1,
    },
  yPercent:100,
  opacity:0,
  delay:0.2,
  stagger:0.1
},'a')


intro = gsap.timeline({})
gsap.from('.sc-theme .phone-group [data-scroll-text] span',{
  scrollTrigger:{
      trigger:'.sc-theme',
      start:"10% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:1,
    },
  yPercent:50,
  opacity:0,
  // delay:0.2,
  stagger:0.1
},'a')

