let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// home
nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

//vehicles

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//featured

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//reviews

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

function openGoogleForm() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Deshabilita el desplazamiento de la página
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto"; // Habilita el desplazamiento de la página
}

// Function to reset form fields
function resetForm() {
  document.getElementById("contactForm").reset();
}

// Add event listener to form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Submit form data
    fetch(this.action, {
      method: this.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          resetForm(); // Reset form fields
        } else {
          alert("Error submitting form!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form!");
      });
  });

  const locales = ["es-ES", "en-GB"]; // Cambiamos el orden de los locales

function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
        ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
        : "";
}

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
        type: "language",
    }).of(intlLocale.language);

    dropdownContent.innerHTML = "";

    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.unshift(locale); // Agregamos el locale actual al principio del array.

    otherLocales.forEach((otherLocale) => {
        const otherIntlLocale = new Intl.Locale(otherLocale);
        const otherLangName = new Intl.DisplayNames([otherLocale], {
            type: "language",
        }).of(otherIntlLocale.language);

        const listEl = document.createElement("li");
        listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
            otherIntlLocale.region
        )}" />`;
        listEl.value = otherLocale;
        listEl.addEventListener("mousedown", function () {
            setSelectedLocale(otherLocale);
            if (otherLocale === "es-ES") {
                window.open("views/indexEs.html", "_self");
            }
            if(otherIntlLocale == "en-GB"){
              window.open("../index.html", "_self")
            }
        });
        dropdownContent.appendChild(listEl);
    });

    dropdownBtn.innerHTML = `<img src="${getFlagSrc(
        intlLocale.region
    )}" />${langName}<span class="arrow-down"></span>`;
}

// Verifica si la página actual es views/indexEs.html
if (window.location.pathname.includes("views/indexEs.html")) {
    setSelectedLocale("es-ES");
} else {
    // Llamamos a la función setSelectedLocale para establecer 'en-GB' como la opción preestablecida.
    setSelectedLocale("en-GB");
}


 // Captura los valores del formulario y los envía a Web3Forms
 document
 .getElementById("bookingForm")
 .addEventListener("submit", function (event) {
   event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

   // Obtiene los valores del formulario
   const formData = new FormData(this);

   // Realiza el envío del formulario a través de AJAX
   fetch(this.action, {
     method: this.method,
     body: formData,
   })
     .then((response) => {
       if (response.ok) {
         alert("Formulario enviado correctamente");
         this.reset(); // Limpia el formulario después del envío
       } else {
         alert("Error al enviar el formulario");
       }
     })
     .catch((error) => {
       console.error("Error:", error);
     });
 });
