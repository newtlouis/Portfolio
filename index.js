const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
  
  
  // ********** Workaround to fix the scroll container size bug with Locomotive Scroll
  
  setTimeout(
    function(){ 
      scroll.update();
    }, 
    500);
  
  // ********** Projects List BG color change on hover
  
  const elements = document.getElementsByClassName('projects')
  const elements__vids = document.getElementsByClassName('preview')
  const arrayOfElements = [...elements]
  
  const randomColor = () => {
    let colors = ['#3FB984', '#F0DB4F', '#2196F3', '#FF5722', '#3A304A']
    return colors[Math.floor((Math.random() * colors.length))]
  }
  
  arrayOfElements.forEach(el =>{ 
    el.addEventListener('mouseenter', () => {
    el.style.backgroundColor = randomColor()
    el.nextElementSibling.style.backgroundColor = el.style.backgroundColor
  
    }),
    el.addEventListener('mouseleave', () => {
      el.style.backgroundColor = 'rgb(31, 30, 30)'
    })
  })
  
  
  //********** Prevent default links' behavior and add 'scrollTo' methods
  
  const autoScroller = (start, target, options) => {
    const scrollTo_trigger = [...document.getElementsByClassName(start)]
    scrollTo_trigger.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault()
        scroll.scrollTo(target, options)
      })
    })
  }
  
  const nav_scrollTo = [
    {start: 'trigger_scrollToAboutMe',
    target: '#aboutMe',
    options: {offset : -230}},
    {start: 'trigger_scrollToProjects',
    target: '#projects',
    options: window.innerWidth < 890 ? {offset : -120} : 0},
    {start: 'trigger_scrollToContacts',
    target: '#contact'}
  ]
  
  nav_scrollTo.forEach(el => {
    autoScroller(el.start, el.target, el.options)
  } )
  
  //********** remove Scroll effects on Projects Lists elements on smartphone screen
  
  const removeAttribute = () => {
    if(window.innerWidth < 890) {
      const projectList = [...document.getElementsByClassName('projects')]
  
      projectList.forEach(el =>{ 
        const dataset = el.dataset
  
        for (let key in dataset) {
          el.removeAttribute("data-" + key.split(/(?=[A-Z])/).join("-").toLowerCase())
          el.removeAttribute('style')
        }
      })
    }
  }
  
  removeAttribute()
  
  window.addEventListener('resize', function() {
    removeAttribute()
  })