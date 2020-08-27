// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.  
     gsap.to('.text', { 
          duration:1,  
          opacity:1, 
          y:"0px", 
          yoyo:true, 
          repeat:-1,
          stagger: { 
              each:0.5, 
          }
        }) 