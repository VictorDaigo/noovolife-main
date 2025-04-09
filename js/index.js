const Slider = document.querySelector(`.Slider`);
const Dot = document.querySelectorAll(`.Dot`);
const DetailsUl = document.querySelector(`.Details-ul`)
const FlechasIzq = document.querySelector(`.Flechas--izq`)
const FlechasDer = document.querySelector(`.Flechas--der`)
const DetailsLi = document.querySelectorAll(`.Details-li`)
const QuestionsLi = document.querySelectorAll(`.Questions-li`)
const QuestionsP = document.querySelectorAll(`.Questions-p`)
const QuestionsSvgWrapper = document.querySelectorAll(`.Questions-svgWrapper`)
const CtaElement = document.querySelectorAll(`.Cta-element`)
const Header = document.querySelector(`.Header`)
const Product = document.querySelector(`.Product`)
const ProductLi = document.querySelectorAll(`.Product-li`)
const VideoSection = document.querySelector(`.Video-section`)
const Hero = document.querySelector('.Hero')
const CtaWhiteSpecial = document.querySelectorAll(`.Cta-element--WhiteSpecial`)
const Testament = document.querySelector(`.Testament`)
const ServicesImg = document.querySelectorAll(`.Services-img`)
const HeaderLi = document.querySelectorAll(`.Header-li`)
const HeaderMenuWrapper = document.querySelector(`.Header-MenuWrapper`)
const Desplegable = document.querySelector(`.Desplegable`)
const DesplegableCloseWrapper = document.querySelector(`.Desplegable-closeWrapper`)
HeaderLi.forEach((li) => {
    li.addEventListener('mouseenter', () => {
        li.style.setProperty('--subrayado-width', '100%'); 
    });

    li.addEventListener('mouseleave', () => {
        li.style.setProperty('--subrayado-width', '0'); 
    });
});

HeaderMenuWrapper.addEventListener('click', ()=>{
    Desplegable.classList.add('DespleagableIsActive')
})
DesplegableCloseWrapper.addEventListener('click', ()=>{
    Desplegable.classList.remove('DespleagableIsActive')
})

let contador = 0;
let contadorDetalles = 0;
const totalSlides = Dot.length;
window.addEventListener('wheel', (e)=>{
    let { deltaY } = e;
    if( deltaY > 0){
       Header.classList.remove('HeaderIsActive') 
    } else {
        Header.classList.add('HeaderIsActive') 

    }
    
})

let options = {
    threshold: 0.5
}
const handleInteraction = (entries) => {
    entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {

            // Encuentra el elemento y modifica su estilo directamente
            document.querySelector('.Product-intro-span--inline')?.style.setProperty('--subrayado-width', '100%');
        } else {

            // Restablece el ancho del subrayado a 0 cuando el elemento no es visible
            document.querySelector('.Product-intro-span--inline')?.style.setProperty('--subrayado-width', '0');
        }
    });
};
const observer = new IntersectionObserver( handleInteraction , options )
observer.observe(Product)



let ProductLioptions = {
    threshold: 0.5
}
const handleProductLiInteraction = (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            target.classList.add('ProductLiIsVisible');
        } else {
            target.classList.remove('ProductLiIsVisible');
        }
    });
};

const ProductLiObserver = new IntersectionObserver(handleProductLiInteraction, ProductLioptions);

// Iterar sobre cada elemento y observarlo
ProductLi.forEach(element => ProductLiObserver.observe(element));
let herooptions = {
    threshold: 0.5
}
const handleHeroInteraction = (entries) => {
    entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
            Header.classList.remove('HeaderBlur'); 
        } else {
            Header.classList.add('HeaderBlur'); 
        }
    });
};
const Heroobserver = new IntersectionObserver( handleHeroInteraction , herooptions )

Heroobserver.observe(Hero)

let videooptions = {
    threshold: 0.5
}
const handleVideoInteraction = (entries) => {
    entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
           
            // Encuentra el elemento y modifica su estilo directamente
           document.querySelector('.Video-section-subrayado')?.style.setProperty('--subrayado-width', '100%');
        } else {

       // Restablece el ancho del subrayado a 0 cuando el elemento no es visible
       document.querySelector('.Video-section-subrayado')?.style.setProperty('--subrayado-width', '0');
     }
   });
};
const Videoobserver = new IntersectionObserver( handleVideoInteraction , videooptions )

Videoobserver.observe(VideoSection);





// Función para actualizar el slider y la clase activa en los dots
function actualizarSlider() {
    // Mueve el slider
    Slider.style.transform = `translateX(-${100 * contador}vw)`;

    // Quita la clase de todos los dots
    Dot.forEach(dot => dot.classList.remove('DotIsActive'));

    // Añade la clase al dot correspondiente
    Dot[contador].classList.add('DotIsActive');
}

// Evento para el control manual con los dots
Dot.forEach((_, i) => {
    Dot[i].addEventListener('click', () => {
        contador = i;
        actualizarSlider();
    });
});

// Intervalo para cambiar el slider automáticamente cada 10 segundos
setInterval(() => {
    contador = (contador + 1) % totalSlides; // Avanza al siguiente slide
    actualizarSlider(); // Llama a la función para actualizar slider y dots
}, 10000);

FlechasIzq.addEventListener('click', ()=>{
    contadorDetalles--;
    if(contadorDetalles < 0){
        contadorDetalles = 4  
    }
    DetailsUl.style.transform = `translate(-${contadorDetalles * 15}%)`
    console.log(contadorDetalles)
})
FlechasDer.addEventListener('click', ()=>{
    contadorDetalles++;
    if(contadorDetalles > 4){
        contadorDetalles = 0  
    }
    DetailsUl.style.transform = `translate(-${contadorDetalles * 15}%)`
    console.log(contadorDetalles)
})
DetailsLi.forEach((li) => { 
    li.addEventListener('mouseenter', () => {
        const info = li.querySelector('.Details-li-info'); // Busca solo dentro del li actual
        const spanEffect = li.querySelector('.Details-li-span-effect'); // Busca el span dentro del li actual
        
        if (info) {
            info.classList.add('DetailsLiInfoIsActive'); 
        }
        
        if (spanEffect) {
            spanEffect.classList.add('DetailsLiInfoIsActive'); // Añade la clase también al span
        }
    });

    li.addEventListener('mouseleave', () => {
        const info = li.querySelector('.Details-li-info'); // Busca dentro del li actual
        const spanEffect = li.querySelector('.Details-li-span-effect'); // Busca el span dentro del li actual
        
        if (info) {
            info.classList.remove('DetailsLiInfoIsActive'); 
        }
        
        if (spanEffect) {
            spanEffect.classList.remove('DetailsLiInfoIsActive'); // Quita la clase del span
        }
    });
});

QuestionsLi.forEach((_ , i)=>{
    QuestionsLi[i].addEventListener('click', ()=>{
        QuestionsLi[i].classList.toggle(`QuestionIsActive`)
        QuestionsSvgWrapper[i].classList.toggle('svgIsActive')
    })
})
CtaElement.forEach(element => {
    element.addEventListener("mouseenter", () => {
        const limiter = element.querySelector(".Cta-limiter");
        if (limiter) {
            limiter.classList.add("CtaIshovering");
        }
    });

    element.addEventListener("mouseleave", () => {
        const limiter = element.querySelector(".Cta-limiter");
        if (limiter) {
            limiter.classList.remove("CtaIshovering");
        }
    });
});
CtaWhiteSpecial.forEach((a)=>{
    a.addEventListener('mouseenter', ()=>{
        const FlechasSlider = a.querySelector(`.Flechas-slider`)
        if(FlechasSlider){
            FlechasSlider.classList.add('FlechasSliderIsActive') 
        }
    });
    a.addEventListener('mouseleave', ()=>{
        const FlechasSlider = a.querySelector(`.Flechas-slider`)
        if(FlechasSlider){
            FlechasSlider.classList.remove('FlechasSliderIsActive') 
        }
    });

})


let testamentoptions = {
    threshold: 0.5
}
const handletestamentInteraction = (entries) => {
    entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
           
            // Encuentra el elemento y modifica su estilo directamente
           document.querySelector('.Testament-span')?.style.setProperty('--subrayado-width', '100%');
        } else {

       // Restablece el ancho del subrayado a 0 cuando el elemento no es visible
       document.querySelector('.Testament-span')?.style.setProperty('--subrayado-width', '0');
     }
   });
};
const testamentobserver = new IntersectionObserver( handletestamentInteraction , testamentoptions )

testamentobserver.observe(Testament);

ServicesImg.forEach(( _ , i )=>{
    ServicesImg[i].addEventListener('mouseenter' , ()=>{
        ServicesImg[i].classList.add('ServiceImgIsActive')
    })
})
ServicesImg.forEach(( _ , i )=>{
    ServicesImg[i].addEventListener('mouseleave' , ()=>{
        ServicesImg[i].classList.remove('ServiceImgIsActive')
    })
})