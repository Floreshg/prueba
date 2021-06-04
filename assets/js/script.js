/* function accionParaCuandoEllaDigaQueSi() {
    alert('ahora ya somos nobios <3');
}
 */
/* 
window.addEventListener('load', moverBoton, false); */

/* let cuandosdigaquesi = document.getElementById('btnSi');
cuandosdigaquesi.addEventListener('click',(e)=>{
e.preventDefault();
    alert('ahora ya somos nobios <3');
    
})
 */




let moverBoton = document.getElementById('btnNo');
let button = document.getElementById('btnNo');
/* width = window.innerWidth;
height = window.innerHeight; */



/* const mq = window.matchMedia( "(min-width: 980px)" );
if (mq.matches) {
    let w = mq < window;
    newWidth =Math.floor(Math.random() * w).toFixed(0);
} else {
    
}  */



window.addEventListener('resize', function(event){
    // do stuff here
  });

let width= window.matchMedia( "(min-width: 980px)" );
if (width.matches) {
    width = window.innerWidth - 800;
} else {
    width = window.innerWidth - 200;
}  

/* 

const height= window.matchMedia( "(min-width: 980px)" );
if (height.matches) {
    height = window.innerWidth - 700;
} else {
    height = window.innerWidth - 200;
}  
 */

/* let width = window.innerWidth - 700;

 */

let height = window.innerHeight - 300;


moverBoton.addEventListener('mouseenter', () => {

   /*  const mq = window.matchMedia( "(min-width: 900px)" );
    if (mq.matches) {
        let w = mq < window;
        newWidth =Math.floor(Math.random() * w).toFixed(0);
    } else {
        
    }  */

/* 
    newWidth = (Math.random() * width).toFixed(0);
    newHeight = (Math.random() * height).toFixed(0);
 */
  newWidth =Math.floor(Math.random() * width).toFixed(0);
 newHeight = Math.floor(Math.random() * height).toFixed(0); 
 

    button.style.position = "absolute";
    button.style.left = newWidth + "px";
    button.style.top = newHeight + "px";
    button.style.transition = ".1s ease-out";
    button.style.zIndex = "1";
});

moverBoton.addEventListener('click', (e) => {
    e.preventDefault();
    newWidth =Math.floor(Math.random() * width).toFixed(0);
    newHeight = Math.floor(Math.random() * height).toFixed(0); 
    
    button.style.position = "absolute";
    button.style.left = newWidth + "px";
    button.style.top = newHeight + "px";
    button.style.transition = ".1s ease-out";
    button.style.zIndex = "1";
});


/* 
 function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

   let button = document.getElementById('btnNo');
   button.style.position = "absolute";
   button.style.left = newWidth + "px";
   button.style.top = newHeight + "px";
   button.style.transition =  ".2s ease-in";

} 

 */



const btnMobile = document.getElementById('btnNo');

btnMobile.addEventListener('click',()=>{
  animateDiv('.button-mobile');

  btnMobile.style.position = "fixed";
  btnMobile.style.zIndex = "1";

})


function makeNewPosition(){
    

    let h = $(window).height() - 50;
    let w = $(window).width() - 50;
    
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    
  return [nh,nw];    
    
}

function animateDiv(myclass){
  let newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 300,   function(){
      animateDiv(myclass);        
    });
    
};
 

/*FOOTER COPYRIGHT*/

const year = (new Date).getFullYear();
$(document).ready(function () {
  $("#anio").text(year);
  $("#anio").addClass("font-weight-bold");
 /*  $('#anio').css("color", "green"); */
});





let sweetAlertSi = document.getElementById('btnSi');

let sweetAlertNo = document.getElementById('btnNo');

const swalWithMdbBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success btn-rounded waves-effect',
      cancelButton: 'btn btn-danger btn-rounded waves-effect'
    },
    buttonsStyling: false
  });
  

  sweetAlertSi.addEventListener('click',() =>{

      swalWithMdbBootstrapButtons.fire({
        imageUrl: 'assets/svg/heart-in-love.svg',
        imageHeight: 100, 
         title: 'Sabia que aceptarias  🥰 ', 
        text: '❤️ #ATMLEQMGTDT ❤️',
        confirmButtonText: `Somos novios 🙊`,
      /*   footer: '<button type="button" class="btn btn-light btnmusic m-2 " id="playBtn"><i class="fas fa-play"></i></button><button  class="btn btn-light btnmusic m-2" id="pauseBtn"><i class="fas fa-pause"></i></button>' */
      /*   footer: '<a href="">awwww :3</a>' */
      });


     
});




sweetAlertNo.addEventListener('click',() =>{

    swalWithMdbBootstrapButtons.fire({
      imageUrl: 'https://i.pinimg.com/originals/53/dc/c4/53dcc445553bd7c2f86339ab663e687b.gif',
      imageHeight: 100,
      title: 'Chale lograste alcanzarlo!',
      text: '¿Me das una oportunidad?',
      confirmButtonText: `Si 🙊`,
      
    });


   
});

/*Sweet alert jquery*/

/* $(document).on('click', '#btnSi', function(e) {
    e.preventDefault();
    swal({
        title:u"Me aceptaste qe emoción! :3",
        text:'Te quiero! :3',
        icon: 'success',
        buttons: {
            confirm: {
              text:"Cerrar",
              className: "btn btn-outline-success btn-rounded waves-effect",
            }
        }
    
     });
     
    
});


$(document).on('click', '#btnNo', function(e) {
    e.preventDefault();
    swal({
        title:"Piensalo un poquito no?",
        text:'dame chance',
        icon: 'warning',
        buttons: {
            confirm: {
              text:"Volver a intentarlo",
              className: "btn btn-outline-warning btn-rounded waves-effect",
            }
        }
    
     });
     
    
});
 */



/*MUSIC*/

/* let source = "https://m.box.com/file/812953609986/download?shared_link=https%3A%2F%2Fapp.box.com%2Fs%2Fy1y37pxrrty1gz2d3yodp2oe8q9fc1y3"; */
/* let source ="assets/audio/Rauw Alejandro - Todo de Ti.mp3" */
let source = "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/11917fb7a790faefd38dbf9786192327.m4a";
let audio = new Audio(); // use the constructor in JavaScript, just easier that way


sweetAlertSi.addEventListener('click',()=>{
  audio.addEventListener("load", () => {
    audio.play();
  }, true);
  audio.src = source;
  audio.autoplay = true; // add this
  

  if($('#pauseBtn').hasClass('active')) {
    $('#pauseBtn').removeClass('active');
  } else {
    $('#playBtn').removeClass('active');
    $('#playBtn').addClass('active');
  }


/* 
  $("#playBtn").click(function() {
    audio.play();
  });
  
  $("#pauseBtn").click(function() {
    audio.pause();
  }); 
  
  $("#stopBtn").click(function() {
    audio.pause();
    audio.currentTime = 0;
  });
 */

});


  audio.addEventListener("click", () => {
    audio.play();
  }, true);
  audio.src = source;
  audio.autoplay = false; // add this
  
    $("#playBtn").click(function() {
    audio.play();

  });
  
  $("#pauseBtn").click(function() {
    audio.pause();
  });
  
  $("#stopBtn").click(function() {
    audio.pause();
    audio.currentTime = 0;
  });
  

 let controlBtn = document.getElementById('playBtn');


 $('.buttonMusic').on('click', function(e) {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $('.buttonMusic').removeClass('active');
    $(this).addClass('active');
  }
});
/* 
  function playPause() {
      if (audio.paused) {
        audio.play();
          //controlBtn.textContent = "Pause";
          controlBtn.className = "pause";
      } else { 
        audio.pause();
           //controlBtn.textContent = "Play";
          controlBtn.className = "play";
      }
  }
  
  controlBtn.addEventListener("click", playPause);
  audio.addEventListener("ended", function() {
    controlBtn.className = "play";
  });
 */
 





/*BG RAMDOM*/

      //caching body tag to change the background style property.
      const body = document.getElementById("body");
      //caching the button tag.
      const buttonChangeColor= document.getElementById("random");
      //caching the p element to display the value that will be passed to the body.
      const propertyValue = document.getElementById("propertyValue");
      
      //caching first input of type color.
 /*      const color1 = document.querySelector("#color1");
 
      const color2 = document.querySelector("#color2"); */
      //caching the p element to display the value the has been passed to the background property of body element.
    /*   const inputcolors = document.querySelector("#showcolors"); */
      
      //Function to generate a random color block times two!
      const generateImage = () => {
        const direction = Math.round(Math.random() * 360); //To output a volue between 0 and 360 in degrees to be given to the linear-gradient.
      
        const r1 = Math.round(Math.random() * 255); // Math.random() outputs a numer between 0(inclusive) & 1(exclusive) with around 17 decimal digits.
        const g1 = Math.round(Math.random() * 255); // We take this number and multiply it by 255. This number can never go above 255.
        const b1 = Math.round(Math.random() * 255); // We have a decimal number with we make an integer with Math.round() which rounds off the previous output.
        // to add random transparency to the image;         // This output is a whole number between 0 & 255 and can be assigned as values for the rgba() property.
        const a1 = Math.round(Math.random() * 10) / 10; //  *** for alpha values we need between 0 & 1 so we multiply the random number with 10 so as to get a value X.xxxxx, round it off so as to X and then                                                                divide it by 10 to get a decimal number or 1. ***  //
      
        const r2 = Math.round(Math.random() * 255);
        const g2 = Math.round(Math.random() * 255);
        
        const b2 = Math.round(Math.random() * 255);
      
        const a2 = Math.round(Math.random() * 10) / 10;
      
        //Giving values to the linear gradiant.
        const background = body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))`;
        //Displaying the passing values.
       /*  propertyValue.textContent = `${background};`; */
      }
      // Gradient Function
    /*   const setGradient = () => {
   
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

      } */
      //Adding Event Listener to the button.
      buttonChangeColor.addEventListener("click", generateImage);
      /* //Adding Event Listener to first input of type color.
      color1.addEventListener("input", setGradient);
      //Adding Event Listener to second input of type color.
      color2.addEventListener("input", setGradient); */
      



