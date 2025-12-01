document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("more");
  const projects = document.getElementById("extraProjects");
  const section = document.querySelector(".ocultar"); 
  const animationTime = 400;

  projects.style.display = "none";

  btn.addEventListener("click", () => {
    if (projects.style.display === "grid") {
    
      projects.classList.remove("show");
      btn.textContent = "See more";

      setTimeout(() => {
        projects.style.display = "none";
        
        section.appendChild(btn); 
      }, animationTime);
    } else {
      projects.style.display = "grid";
      setTimeout(() => projects.classList.add("show"), 10);
      btn.textContent = "See less";

     
      section.appendChild(btn);
    }
  });
});


const container = document.getElementById('profilePic');
const imgElement = container.querySelector('img');
const width = imgElement.naturalWidth || 200;  // ancho por defecto
const height = imgElement.naturalHeight || 200; // alto por defecto

// Crear canvas
const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.borderRadius = '50%';
canvas.style.display = 'block';
container.appendChild(canvas);

const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'picture.webp';  // <- aquí apuntas a tu imagen
img.crossOrigin = "anonymous";

img.onload = () => {
    const hiddenCanvas = document.createElement('canvas');
    hiddenCanvas.width = width;
    hiddenCanvas.height = height;
    const hiddenCtx = hiddenCanvas.getContext('2d');
    hiddenCtx.drawImage(img, 0, 0, width, height);

    const imageData = hiddenCtx.getImageData(0, 0, width, height);
    const pixels = [];

    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const color = `rgba(${imageData.data[i]},${imageData.data[i+1]},${imageData.data[i+2]},${imageData.data[i+3]/255})`;
            pixels.push({x, y, color});
        }
    }

    pixels.sort(() => Math.random() - 0.5);

    let index = 0;
    const pixelsPerFrame = 500;

    function drawNextPixels() {
        for(let i = 0; i < pixelsPerFrame; i++){
            if(index >= pixels.length) return;
            const p = pixels[index];
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 1, 1);
            index++;
        }
        requestAnimationFrame(drawNextPixels);
    }

    drawNextPixels();
};


   
  const descriptionEs = "Soy un desarrollador web junior apasionado por crear páginas web modernas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades día a día.";
  const descriptionEn = "I am a junior web developer passionate about creating modern and functional websites. I love learning new technologies and improving my skills every day.";
  let index = 0;
  let isEnglish = false;
  const typedElement = document.getElementById("typed-description");
  
  function typeWriter(text) {
    typedElement.innerHTML = "";
    index = 0;
    function typing() {
      if(index < text.length) {
        typedElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 45);
      }
    }
    typing();
  }
  
  typeWriter(descriptionEs);