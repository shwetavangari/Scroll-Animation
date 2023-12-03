const the_animation = document.querySelectorAll('.animation')
const the_animation1 = document.querySelectorAll('.animation1')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
            entry.target.classList.remove('scroll-animation')
        }

        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1')
        }
        else {
            entry.target.classList.remove('scroll-animation1')
        }
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];
    observer.observe(elements);
  }

  for (let i = 0; i < the_animation1.length; i++) {
    const elements = the_animation1[i];
     observer.observe(elements);
   }