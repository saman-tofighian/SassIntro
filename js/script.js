const _span1 = document.querySelector(".ham>span:nth-of-type(1)");
const _span2 = document.querySelector(".ham>span:nth-of-type(2)");
const _span3 = document.querySelector(".ham>span:nth-of-type(3)");

const _ham = document.querySelector(".ham");

const _mobile = document.getElementById("mobile");

const _aside = document.getElementsByTagName("aside")[0];

const _Intro = document.querySelector('#intro')

const _articleIntro = document.querySelector('#intro > article')

const _figureIntro = document.querySelector('#intro > figure')

const _ALLLinkMobile = document.querySelectorAll('#mobile > li > a')

const _btn = document.querySelector('form > button')

const _aboutArticle = document.querySelector('#about > div > article')

const _aboutFigure = document.querySelector('#about > div > figure')

const _AllFeaturesArticle = document.querySelectorAll('#features article')

const _templateArticle = document.querySelector('#template article')
const _templateFigure = document.querySelector('#template figure')

let num = 3;
_ham.addEventListener("click", () => {
  // Toggle mobile menu and ham class
  if (num % 2) {
    _mobile.style.top = "80px";
    _span1.classList.add("span1");
    _span2.classList.add("span2");
    _span3.classList.add("span3");
  } else {
    _mobile.style.top = "-300px";
    _span1.classList.remove("span1");
    _span2.classList.remove("span2");
    _span3.classList.remove("span3");
  }
  num++;
});


_ALLLinkMobile.forEach((item,index)=>{
  // Close mobile menu on link click
  item.addEventListener('click',()=>{
    _mobile.style.top = "-300px";
    _span1.classList.remove("span1");
    _span2.classList.remove("span2");
    _span3.classList.remove("span3");
    num++
  })
})

window.addEventListener('scroll',()=>{
  const header = document.getElementsByTagName('header')[0];

  const _about = document.getElementById('about')

  const _windowOffSet = window.pageY || document.documentElement.scrollTop

  const _aboutArticleOffSet = _aboutArticle.offsetTop

  const _aboutFigureOffSet = _aboutFigure.pageY
// Change header style on scroll
  if (window.scrollY > header.offsetTop) {
    header.style.background = '#fff';

    header.style.boxShadow = '0px 20px 50px 0px rgba(0, 0, 0, 0.05)';
  }
  else{
    header.style.background = 'transparent';

    header.style.boxShadow = '0px 0 0 0 transparent';
  }
// Animate about section elements
  if(_windowOffSet + 200 > _aboutArticleOffSet)
  {
    _aboutArticle.style.transform = 'translateX(0)'
  }

  if(_windowOffSet + 200 > _aboutArticleOffSet)
  {
    _aboutFigure.style.transform = 'translateX(0)'
  }

  _AllFeaturesArticle.forEach((item , index)=>{
    // Show features on scroll
    if(_windowOffSet > item.offsetTop)
    {
      item.style.opacity = '1'
    }
  })

  if(_windowOffSet + 200 > _templateArticle.offsetTop)
  {
    _templateArticle.style.transform = 'translateX(0)'
  }

  if(_windowOffSet + 200 > _templateFigure.offsetTop)
  {
    _templateFigure.style.transform = 'translateX(0)'
  }
})

window.addEventListener('load', ()=>{
  setTimeout(()=>{
    // Animate intro section elements on load
    _articleIntro.style.transform = 'translateX(0)';
    
    _figureIntro.style.transform = 'translateX(0)'
  },400)
})

_btn.addEventListener('click', ()=>{
  const _inputValue = document.querySelector('form > input').value
  // Validate email input and show alert
  if(_inputValue < 10)
  {
    alert('Your Email is incorrect')
  }
  else if (_inputValue.indexOf('<script') === 0) {
    window.close();
  }  
  else
  {
    alert('Thanks for Subscribing')
  }
})