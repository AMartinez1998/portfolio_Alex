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


   const descriptionEs =
  "Soy un desarrollador web junior apasionado por crear páginas web modernas y funcionales. Me encanta aprender nuevas tecnologías y mejorar mis habilidades día a día.";

const descriptionEn =
  "I am a junior web developer passionate about creating modern and functional websites. I love learning new technologies and improving my skills every day.";

const typedElement = document.getElementById("typed-description");

let index = 0;
let currentLang = "es";

function typeWriter(text) {
  typedElement.innerHTML = "";
  index = 0;

  function typing() {
    if (index < text.length) {
      typedElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typing, 45);
    }
  }

  typing();
}

// 👉 Primera carga
typeWriter(descriptionEs);

// 👉 Botón traducir
document.getElementById("translatePage").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";

  typeWriter(
    currentLang === "es" ? descriptionEs : descriptionEn
  );
});



  
  const translations = {
    "Desarrollador Web": "Web Developer",
    "Desarrollador full-stack, listo para aportar valor a tu empresa.": "Full-stack developer, ready to bring value to your company.",
    "Descargar CV": "Download CV",
    "Experiencia": "Experience",
    "Desarrollador Web Junior": "Junior Web Developer",
    "Desarrollo de páginas web con HTML, CSS y JavaScript.": "Development of web pages using HTML, CSS and JavaScript.",
    "Aplicación de diseño responsive para todos los dispositivos.": "Responsive design implementation for all devices.",
    "Mantenimiento y mejoras de sitios web existentes.": "Maintenance and improvements of existing websites.",
    "Conversión de prototipos de Figma a páginas funcionales.": "Conversion of Figma prototypes into functional web pages.",
    "Mis Proyectos": "My Projects",
    "Restaurante Amelia": "Amelia Restaurant",
    "Sitio web para reservas en un restaurante de alta cocina.": "Website for reservations at a fine dining restaurant.",
    "Aplicación del Clima": "Weather App",
    "¿Quieres saber cómo estará el clima?": "Want to know what the weather will be like?",
    "Clínica Dentalmall": "Dentalmall Clinic",
    "¿Necesitas una revisión dental? Esta es la clínica para ti.": "Need a dental checkup? This is the clinic for you.",
    "Generar tu clave aleatoria": "Generate your random password",
    "Obtén tu propia clave sin pensar demasiado.": "Get your own password instantly.",
    "Lista de Tareas": "To-Do List",
    "Organiza tus tareas para ser más eficiente.": "Organize your tasks to be more efficient.",
    "Tabla de Cuotas de Préstamos": "Loan Payment Table",
    "Mantente al tanto de tus pagos mensuales.": "Stay on top of your monthly payments.",
    "Ver más": "See more",
    "Librería de Chistes": "Joke Library",
    "Sé el más divertido en tus reuniones.": "Be the funniest one in your meetings.",
    "Aprendido en cursos online y práctica personal.": "Learned through online courses and personal practice.",
    "Aprendido en cursos y práctica en proyectos personales.": "Learned through courses and hands-on practice in personal projects.",
    "Aprendido en cursos y mini proyectos personales.": "Learned through courses and small personal projects.",
    "Aprendido en tutoriales y prototipos de diseño.": "Learned through tutorials and design prototypes.",
    "Aprendido en prácticas de gestión de proyectos.": "Learned through project management practices.",
    "Aprendido en cursos y práctica en proyectos colaborativos.": "Learned through courses and hands-on practice in collaborative projects.",
    "Aprendido en cursos y práctica en control de versiones.": "Learned through courses and hands-on practice in version control.",
    "Usado en: Proyecto 1, Proyecto 2, Proyecto 3": "Used in: Project 1, Project 2, Project 3",
    "Usado en: Proyecto 3": "Used in: Project 3",
    "Usado en: Proyecto 1, Proyecto 2": "Used in: Project 1, Project 2",
    "Usado en: Proyecto 2, Proyecto 3": "Used in: Project 2, Project 3",
    "Herramientas Conocidas": "Known Tools",
    "Habilidades Blandas": "Soft Skills",
    "Trabajo en equipo": "Teamwork",
    "Organizado": "Organized",
    "Resolución de problemas": "Problem solving",
    "Creativo": "Creative",
    "Proactivo": "Proactive",
    "Eficiente": "Efficient"
  };

  let translated = false;

  document.getElementById("translatePage").addEventListener("click", () => {
      const elements = document.querySelectorAll("h1, h2, h3, p, li, button, span");

      elements.forEach(el => {
          const original = el.textContent.trim();

          if (!translated && translations[original]) {
              el.textContent = translations[original];
          } else if (translated && Object.values(translations).includes(original)) {
              el.textContent = Object.keys(translations)
                  .find(key => translations[key] === original);
          }
      });

      translated = !translated;
      document.getElementById("translatePage").textContent = translated ? "Spanish" : "English";
  });

