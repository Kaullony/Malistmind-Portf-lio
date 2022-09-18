/// EFEITO MENU STICK

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// CARROSSEIS

$('.carrossel').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  autoplay: false,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.carrtwo').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  autoplay: false,
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// MUDAR PORTFÓLIO

const portArtes = document.getElementById('artes');
const portCardapios = document.getElementById('cardapios');
const portIdVisuais = document.getElementById('idvisuais');
const btnActive = document.getElementById('button-active');

portCardapios.style.display = "none"
portIdVisuais.style.display = "none"

function mudarPortCardapio(){
  
  portCardapios.style.display = 'flex'
  portArtes.style.display = 'none'
  portIdVisuais.style.display = 'none'

  btnActive.classList.add("active-link-port")

}

function mudarPortArtes(){
  
  portArtes.style.display = 'flex'
  portCardapios.style.display = 'none'
  portIdVisuais.style.display = 'none'
  
}

function mudarPortIdvisuais(){
  
  portIdVisuais.style.display = 'flex'
  portArtes.style.display = 'none'
  portCardapios.style.display = 'none'
  
}

// MENU RESPONSIVO
const menuResp = document.getElementById("menuResponsivo");
const btnMenuOpen = document.getElementById("btnOpen");
const btnMenuClose = document.getElementById("btnClose");

btnMenuClose.style.display = 'none'

function openMenu(){
  
  menuResp.style.display = "flex"
  btnMenuOpen.style.display = 'none'
  btnMenuClose.style.display = 'flex'
}

function closeMenu(){
  
  menuResp.style.display = 'none'
  btnMenuOpen.style.display = 'flex'
  btnMenuClose.style.display = 'none'
}

function linkfecharmenu(){
  menuResp.style.display = 'none'
  btnMenuOpen.style.display = 'flex'
  btnMenuClose.style.display = 'none'
}