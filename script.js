document.addEventListener("DOMContentLoaded", () => {
  // La fecha de cumpleaños para el contador - ACTUALIZADA A JULIO 15
  const birthdayDate = new Date("July 15, 2025 00:00:00").getTime();
  // Elementos comunes que pueden existir en ambas páginas
  const animationContainer = document.getElementById("animation-container");
  const specialMessagePopup = document.getElementById("special-message-popup");
  const specialMessageText = document.getElementById("special-message-text");
  const closeSpecialMessageButton = document.getElementById(
    "close-special-message"
  );

  // --- Configuración del contenido diario ---
  // Asegúrate de que las fechas estén en orden cronológico ascendente.
  // La propiedad 'unlockSection' vincula cada día a una de las 3 secciones de desbloqueo en lost_days.html
  // ¡IMPORTANTE!: Completa este array con todos los días hasta el 14 de julio.
  const dailyContent = [
    // --- INICIO DÍAS ---
    {
      date: "2025-07-01",
      title: "¡Un Mes Lleno de Magia! 💖",
      phrase:
        "Este mes es verdaderamente grandioso porque en él celebramos un cumpleaños muy especial: **¡el tuyo!** Cada día nos acerca más a un momento lleno de **alegría** y **amor**. Prepárate, que la cuenta regresiva es solo el comienzo.",
      password: "aventura",
      animationType: "corazones",
      specialMessageHourly: true,
      specialMessageText: "Este mes es mágico por tu cumple. ✨",
      unlockSection: 1,
    },
    {
      date: "2025-07-02",
      title: "El valor de ser tú",
      phrase:
        "No necesitas parecerte a nadie ni cumplir con expectativas ajenas. Tu autenticidad es tu **superpoder**.",
      password: "calma",
      animationType: "rayos",
      specialMessageHourly: true,
      specialMessageText: "Ser tú es tu mejor versión. 💪",
      unlockSection: 1,
    },
    //Aca2
    {
      date: "2025-07-03",
      title: "El Día de la Inspiración",
      phrase:
        "Que cada día te brinde nuevas **ideas** y te inspire a alcanzar tus sueños más grandes. ¡Nos vemos en el festejo de tu cumpleaños, será una sorpresa!",
      password: "amor",
      animationType: "petalos",
      specialMessageHourly: true,
      specialMessageText: "¡¡Sonríe! 😊",
      unlockSection: 1,
    },
    {
      date: "2025-07-04",
      title: "Día de la Alegría Inesperada",
      phrase:
        "A tu lado, la vida se llena de **magia** en los detalles más pequeños. Gracias por transformar lo ordinario en extraordinario.",
      password: "infinita",
      animationType: "efugaces",
      specialMessageHourly: true,
      specialMessageText: "¡Un toque de magia para tu día! ✨",
      unlockSection: 1,
    },
    {
      date: "2025-07-05",
      title: "Siempre firme, siempre tú",
      phrase:
        "Lo que más admiro de ti es que nunca finges: eres tú en toda **tu esencia**. Eso se agradece.",
      password: "corazones",
      animationType: "chispas",
      specialMessageHourly: true,
      specialMessageText: "Qué orgullo tenerte. 🎆",
      unlockSection: 1,
    },
    {
      date: "2025-07-06",
      title: "Tu esencia deja huella",
      phrase:
        "Hay personas que marcan un antes y un después, y tú eres sin duda una de **ellas**. Y no es exageración.",
      password: "juntos",
      animationType: "hojas",
      specialMessageHourly: true,
      specialMessageText: "Eres admirable en cada sentido. 🌸",
      unlockSection: 2,
    },
    {
      date: "2025-07-07",
      title: "Cada año más admirable",
      phrase:
        "A medida que pasa el tiempo, se nota en ti el sentido profundo con el que vives. Eso también es **belleza**.",
      password: "cotidiana",
      animationType: "energia",
      specialMessageHourly: true,
      specialMessageText: "Crecer así, es digno de respeto. 🎀",
      unlockSection: 2,
    },
    {
      date: "2025-07-08",
      title: "Día de la sonrisa",
      phrase:
        "Tu **sonrisa**. Es contagiosa y me llena de alegría. Que nunca te falten motivos para reír a carcajadas.",
      password: "fuerza",
      animationType: "estrellas",
      specialMessageHourly: true,
      specialMessageText: "¡Una sonrisa para ti! 😁",
      unlockSection: 2,
    },
    //Aca3
    {
      date: "2025-07-09",
      title: "Tu eres un regalo diario",
      phrase:
        "No hay que esperar tu cumple para agradecer que existas. Pero ya que se acerca… **¡doble motivo para festejarte!**",
      password: "resplandor",
      animationType: "burbujas",
      specialMessageHourly: true,
      specialMessageText: "Contar contigo es un regalo. 🎁",
      unlockSection: 2,
    },
    {
      date: "2025-07-10",
      title: "Día de la Alegría",
      phrase:
        "Descubre la **magia** en los pequeños detalles y deja que la alegría te encuentre en los lugares más inesperados. Cada momento contigo es un regalo.",
      password: "ternura",
      animationType: "efugaces",
      specialMessageHourly: true,
      specialMessageText: "¡Este es tu momento para brillar! ⭐",
      unlockSection: 2,
    },
    {
      date: "2025-07-11",
      title: "Día de la Conexión",
      phrase:
        "Recuerda que cuando te sientas sola **yo siempre estoy aquí** para lo que necesites. ",
      password: "conexion",
      animationType: "corazones",
      specialMessageHourly: true,
      specialMessageText: "¡Un momento para ti! 🧘‍♀️",
      unlockSection: 3,
    },
    {
      date: "2025-07-12",
      title: "Agradezco tu cercanía",
      phrase:
        "Cada **conversación contigo** deja algo valioso: tranquilidad, alegría o una buena reflexión.",
      password: "paciencia",
      animationType: "burbujas",
      specialMessageHourly: true,
      specialMessageText: "Eso siempre suma demasiado💌",
      unlockSection: 3,
    },
    {
      date: "2025-07-13",
      title: "Un Día Para Soñar",
      phrase:
        "Que cada sueño que tengas se **convierta** en una hermosa realidad, porque mereces todo lo bueno que la vida puede ofrecer. Recuerda que el día de tu festejo es muy importante para mí.",
      password: "risa",
      animationType: "petalos",
      specialMessageHourly: true,
      specialMessageText: "¡Que este momento te traiga una sonrisa! ✨",
      unlockSection: 3,
    },
    {
      date: "2025-07-14",
      title: "Día de la Expectativa",
      phrase:
        "Mañana es un día muy especial, y la **expectativa** de celebrarlo contigo me llena de emoción. Estoy contando los minutos para verte.",
      password: "expectativa",
      animationType: "hojas",
      specialMessageHourly: true,
      specialMessageText: "¡Casi llegamos al gran día! 🥳",
      unlockSection: 3,
    },
    // Día del cumpleaños - ACTUALIZADO A JULIO 15
    {
      date: "2025-07-15",
      title: "¡Feliz Cumpleaños!",
      phrase:
        "Hoy celebramos la llegada de la persona más increíble que conozco. Que tu día esté lleno de alegría, amor y todo lo que deseas. Eres **hermosa** y **te admiro**.",
      password: "cumpleaños", // Contraseña para el día de su cumpleaños (puedes cambiarla)
      animationType: "confeti", // Cambiado a 'fireworks'
      specialMessageHourly: true, // No aplica un mensaje cada hora en su cumpleaños
      specialMessageText:
        "¡El mejor día ha llegado! ¡Feliz cumpleaños! 🎉🎂",
      unlockSection: 3, // Podría estar en la sección 3, o manejarse de forma especial
    },
  ];

  // --- Definición de las preguntas y sus contraseñas para lost_days.html ---
  // Estas son las contraseñas para desbloquear los RANGOS de días.
  const unlockSectionsConfig = {
    1: {
      question: "¿Primer nombre de las mascotas de BTS?",
      password: "Hip Hop Monsters",
      start: new Date("2025-07-01T00:00:00"),
      end: new Date("2025-07-05T23:59:59"),
    },
    2: {
      question: "¿Fecha de la primera vez que salimos?",
      password: "08/02/25",
      start: new Date("2025-07-06T00:00:00"),
      end: new Date("2025-07-10T23:59:59"),
    },
    3: {
      question: "¿Cuál es tu anime favorito?",
      password: "Haikyuu",
      start: new Date("2025-07-11T00:00:00"),
      end: new Date("2025-07-15T23:59:59"),
    },
  };

  let specialMessageCheckInterval = null;
  let lastDisplayedMinute = -1; // Para asegurar que el mensaje solo se muestre una vez por minuto exacto

  // --- Funciones para Animación ---
  function clearAnimations() {
    animationContainer.innerHTML = ""; // Limpiar animaciones previas
  }

  function triggerAnimation(type) {
    clearAnimations(); // Limpiar antes de añadir nuevas

    if (type === "estrellas") {
      for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        animationContainer.appendChild(star);
      }
    } else if (type === "nubes") {
      for (let i = 0; i < 5; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.animationDelay = `${i * 10}s`; // Para que no salgan todas a la vez
        cloud.style.top = `${10 + Math.random() * 20}%`; // Posición vertical
        cloud.style.left = `${-20 - Math.random() * 50}%`; // Empieza fuera de pantalla
        animationContainer.appendChild(cloud);
      }
    } else if (type === "hojas") {
      for (let i = 0; i < 30; i++) {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        // Variables CSS para la animación de hojas
        leaf.style.setProperty("--leaf-x", Math.random() * window.innerWidth); // Posición inicial X
        leaf.style.setProperty("--leaf-delay", Math.random() * 10 + "s"); // Retraso
        leaf.style.animationDelay = leaf.style.getPropertyValue("--leaf-delay");
        animationContainer.appendChild(leaf);
      }
    } else if (type === "confeti") {
      // Ejemplo de confeti muy simple (puedes usar una librería o CSS más complejo)
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * -20}%`;
        confetti.style.opacity = "0";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fallConfetti ${
          Math.random() * 3 + 2
        }s linear infinite forwards`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        animationContainer.appendChild(confetti);
      }
    } // --- Nuevas Animaciones ---
    else if (type === "corazones") {
      for (let i = 0; i < 25; i++) {
        // Generar 15 corazones
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
        heart.style.animationDelay = `${Math.random() * 5}s`; // Retraso para que no salgan todos a la vez
        // Variable CSS para movimiento horizontal sutil
        heart.style.setProperty("--heart-x", `${Math.random() * 100 - 50}px`); // -50 a 50px de movimiento horizontal
        animationContainer.appendChild(heart);
      }
    } else if (type === "chispas") {
      // Renombrado de "brillos" para claridad
      for (let i = 0; i < 70; i++) {
        // Generar 70 chispas
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`; // Más rápido
        animationContainer.appendChild(sparkle);
      }
    } else if (type === "burbujas") {
      for (let i = 0; i < 15; i++) {
        // Generar 10 burbujas
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
        bubble.style.bottom = `${-50 - Math.random() * 100}px`; // Empiezan por debajo de la pantalla
        bubble.style.animationDuration = `${5 + Math.random() * 5}s`; // Duración de 5 a 10 segundos
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        // Variables CSS para movimiento aleatorio de burbujas
        bubble.style.setProperty("--bubble-dx", `${Math.random() * 60 - 30}px`); // Movimiento lateral (-30px a 30px)
        bubble.style.setProperty("--bubble-dy", `${Math.random() * 60 - 30}px`); // Movimiento vertical extra
        animationContainer.appendChild(bubble);
      }
    } else if (type === "rayos") {
      for (let i = 0; i < 15; i++) {
        // 5 rayos de luz
        const lightRay = document.createElement("div");
        lightRay.classList.add("light-ray");
        const size = 150 + Math.random() * 100; // Tamaño entre 150px y 250px
        lightRay.style.width = `${size}px`;
        lightRay.style.height = `${size}px`;
        // Posiciones iniciales y finales aleatorias
        lightRay.style.left = `${Math.random() * 100}%`;
        lightRay.style.top = `${Math.random() * 100}%`;
        lightRay.style.setProperty(
          "--light-x-start",
          `${Math.random() * 200 - 100}px`
        );
        lightRay.style.setProperty(
          "--light-y-start",
          `${Math.random() * 200 - 100}px`
        );
        lightRay.style.setProperty(
          "--light-x-end",
          `${Math.random() * 200 - 100}px`
        );
        lightRay.style.setProperty(
          "--light-y-end",
          `${Math.random() * 200 - 100}px`
        );
        lightRay.style.animationDelay = `${Math.random() * 5}s`;
        animationContainer.appendChild(lightRay);
      }
    } else if (type === "efugaces") {
      const colors = ["#f0caff", "#FFFFE0", "#FFC0CB", "#ADD8E6"]; // Blanco, Amarillo Claro, Rosa Claro, Azul Claro
      const numberOfStars = 100; // Un poco menos, ya que son más grandes

      for (let i = 0; i < numberOfStars; i++) {
        const trailStar = document.createElement("div");
        trailStar.classList.add("trail-star"); // <-- ¡Nueva clase CSS!

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Aplica el color a la cola usando una variable CSS para el gradiente
        trailStar.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${randomColor} 50%, rgba(255, 255, 255, 0))`;
        trailStar.style.boxShadow = `0 0 5px 1px ${randomColor}`; // Un brillo del mismo color

        // Posiciones inicial y final para el movimiento diagonal
        // Queremos que empiecen abajo a la izquierda y terminen arriba a la derecha
        // Para que no todas salgan del mismo punto, introducimos aleatoriedad
        const startX = -150 + Math.random() * 200; // Empieza más a la izquierda, con menos varianza horizontal
        const startY = window.innerHeight - 100 + Math.random() * 100; // Empieza un poco más arriba desde el borde inferior, con menos varianza vertical

        const endX = window.innerWidth + 50 + Math.random() * 200;
        const endY = -50 - Math.random() * 200;

        trailStar.style.setProperty("--start-x", `${startX}px`);
        trailStar.style.setProperty("--start-y", `${startY}px`);
        trailStar.style.setProperty("--end-x", `${endX}px`);
        trailStar.style.setProperty("--end-y", `${endY}px`);

        trailStar.style.animationDelay = `${Math.random() * 8}s`; // Retrasos más largos para que no salgan todas a la vez
        trailStar.style.animationDuration = `${4 + Math.random() * 3}s`; // Duraciones variadas

        animationContainer.appendChild(trailStar);
      }
    } else if (type === "petalos") {
      for (let i = 0; i < 20; i++) {
        // 20 pétalos cayendo
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random() * 10}s`;
        petal.style.animationDuration = `${8 + Math.random() * 5}s`; // Duración de 8 a 13 segundos
        petal.style.setProperty("--petal-x", `${Math.random() * 50 - 25}px`); // Movimiento lateral sutil
        petal.style.setProperty(
          "--petal-rot-start",
          `${Math.random() * 360}deg`
        );
        petal.style.setProperty(
          "--petal-rot-end",
          `${360 + Math.random() * 720}deg`
        ); // Rotación compleja
        animationContainer.appendChild(petal);
      }
    } else if (type === "energia") {
      for (let i = 0; i < 8; i++) {
        // 8 líneas de energía
        const energyLine = document.createElement("div");
        energyLine.classList.add("energy-line");
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const rotationStart = Math.random() * 360;
        const rotationEnd = Math.random() * 360;

        energyLine.style.left = `${startX}%`;
        energyLine.style.top = `${startY}%`;
        energyLine.style.setProperty("--line-x-start", `0px`);
        energyLine.style.setProperty("--line-y-start", `0px`);
        energyLine.style.setProperty("--line-x-end", `${endX - startX}vw`);
        energyLine.style.setProperty("--line-y-end", `${endY - startY}vh`);
        energyLine.style.setProperty("--line-rot-start", `${rotationStart}deg`);
        energyLine.style.setProperty("--line-rot-end", `${rotationEnd}deg`);

        energyLine.style.animationDelay = `${Math.random() * 6}s`;
        energyLine.style.animationDuration = `${5 + Math.random() * 5}s`; // Duración de 5 a 10 segundos
        animationContainer.appendChild(energyLine);
      }
    }
  }

  // --- Funciones para el mensaje especial (solo en index.html) ---
  function showSpecialMessage(message) {
    specialMessageText.textContent = message;
    specialMessagePopup.classList.remove("hidden");
  }

  function checkSpecialMessageHourly(dailyItem) {
    // Esta función solo debe ejecutarse en index.html
    if (document.body.id === "lost-days-page") {
      if (specialMessageCheckInterval) {
        clearInterval(specialMessageCheckInterval); // Asegurarse de detenerlo si se cambió de página
        specialMessageCheckInterval = null;
      }
      return;
    }

    if (!dailyItem || !dailyItem.specialMessageHourly) {
      if (specialMessageCheckInterval) {
        clearInterval(specialMessageCheckInterval);
        specialMessageCheckInterval = null;
      }
      return;
    }

    // Si ya hay un intervalo, no iniciar otro
    if (specialMessageCheckInterval) {
      return;
    }

    specialMessageCheckInterval = setInterval(() => {
      const now = new Date();
      // Muestra el mensaje si el segundo es 0 y el minuto ha cambiado
      if (now.getSeconds() === 0 && now.getMinutes() !== lastDisplayedMinute) {
        showSpecialMessage(dailyItem.specialMessageText);
        lastDisplayedMinute = now.getMinutes();
      }
    }, 1000); // Chequear cada segundo
  }

  // Cierre del pop-up del mensaje especial
  if (closeSpecialMessageButton) {
    closeSpecialMessageButton.addEventListener("click", () => {
      specialMessagePopup.classList.add("hidden");
    });
  }

  // --- Lógica Principal para index.html ---
  // Se ejecuta si no hay ID en el body o si el ID no es 'lost-days-page'
  if (!document.body.id || document.body.id !== "lost-days-page") {
    // Obteniendo las referencias de los elementos del DOM específicas de index.html
    const countdownElement = document.getElementById("countdown");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const countdownSection = document.getElementById("countdown-section");
    const dailyContentSection = document.getElementById(
      "daily-content-section"
    );
    const dailyTitleElement = document.getElementById("daily-title");
    const dailyPhraseElement = document.getElementById("daily-phrase");
    const mainTitleElement = document.querySelector("#countdown-section h1"); // El h1 "¡El Gran Día Se Acerca!"
    const generalGreetingMessageElement = document.getElementById(
      "general-greeting-message"
    ); // El párrafo "Un pequeño detalle..."

    // Función para obtener el contenido del día actual
    function getTodayContent() {
      const today = new Date();
      const todayFormatted =
        today.getFullYear() +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0");
      return dailyContent.find((item) => item.date === todayFormatted);
    }

    // Función del contador regresivo
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = birthdayDate - now;
      console.warn(birthdayDate);
      console.warn(now);
      console.warn(distance);
      if (distance < 0) {
        // Si el cumpleaños ya pasó (o es hoy)
        clearInterval(countdownInterval);
        countdownSection.classList.add("hidden"); // Oculta toda la sección del contador
        mainTitleElement.classList.add("hidden"); // Oculta el título "¡El Gran Día Se Acerca!"
        countdownElement.innerHTML = ""; // Limpia el contenido del contador
        if (generalGreetingMessageElement) {
          generalGreetingMessageElement.classList.add("hidden"); // Oculta el mensaje general
        }

        // Mostrar el contenido del día de cumpleaños
        displayMainPageContent("2025-07-15"); // Llamar con la fecha exacta del cumpleaños
        document.body.classList.add("birthday-background"); // Cambia el fondo a oscuro

        if (distance > -86454713) {
          const colors = [
            "#FF0000",
            "#0000FF",
            "#00FF00",
            "#FFFF00",
            "#FF69B4",
            "#8A2BE2",
            "#00FFFF",
            "#FFA500",
          ]; // Variedad de colores

          for (let i = 0; i < 500; i++) {
            // Generar una buena cantidad de fuegos artificiales
            setTimeout(() => {
              const firework = document.createElement("div");
              firework.classList.add("firework");
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              firework.style.backgroundColor = randomColor;
              firework.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
              firework.style.top = `${Math.random() * 100}%`; // Posición vertical aleatoria
              document.body.appendChild(firework);

              // Activar la explosión después de un corto retraso (simulando el lanzamiento)
              setTimeout(() => {
                firework.classList.add("explode");
              }, 800); // Ajustar este retraso para que coincida con la duración de la animación fireworkLaunch en CSS

              // Eliminar el elemento firework después de que su animación termine
              firework.addEventListener("animationend", (e) => {
                if (e.animationName === "fireworkExplode") {
                  firework.remove();
                }
              });
            }, i * 500); // Escalonar la creación de los fuegos artificiales
          }
        } else {
          document.body.classList.remove("birthday-background");
        }

        return;
      }

      // Si el cumpleaños aún no ha llegado
      countdownSection.classList.remove("hidden"); // Asegura que el contador sea visible
      mainTitleElement.classList.remove("hidden"); // Asegura que el título sea visible
      if (generalGreetingMessageElement) {
        generalGreetingMessageElement.classList.remove("hidden"); // Asegura que el mensaje general sea visible
      }
      document.body.classList.remove("birthday-background"); // Asegura el fondo predeterminado

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.innerHTML = String(days).padStart(2, "0");
      hoursElement.innerHTML = String(hours).padStart(2, "0");
      minutesElement.innerHTML = String(minutes).padStart(2, "0");
      secondsElement.innerHTML = String(seconds).padStart(2, "0");
    }

    // Función para mostrar el contenido del día en la página principal
    function displayMainPageContent(dateToDisplay = null) {
      let contentToShow;
      if (dateToDisplay) {
        // Si se especifica una fecha (ej. el día del cumpleaños)
        contentToShow = dailyContent.find(
          (item) => item.date === dateToDisplay
        );
      } else {
        // Si no, intentar obtener el contenido del día actual
        contentToShow = getTodayContent();
      }

      if (contentToShow) {
        dailyContentSection.classList.remove("hidden"); // Asegurarse de que la sección del contenido diario esté visible

        dailyTitleElement.textContent = contentToShow.title;

        // Aplica la clase 'birthday-greeting' solo en el día del cumpleaños
        if (contentToShow.date === "2025-07-15") {
          // Usar la fecha real de cumpleaños
          dailyTitleElement.classList.add("birthday-greeting");
        } else {
          dailyTitleElement.classList.remove("birthday-greeting"); // Quitar la clase en otros días
        }

        // Reemplaza **texto** con <span class="highlight">texto</span>
        dailyPhraseElement.innerHTML = contentToShow.phrase.replace(
          /\*\*(.*?)\*\*/g,
          '<span class="highlight">$1</span>'
        );

        triggerAnimation(contentToShow.animationType);
        checkSpecialMessageHourly(contentToShow); // Inicia chequeo de mensaje solo en index.html
      } else {
        // Este bloque se ejecuta si no se encuentra contenido diario para la fecha.
        clearAnimations(); // Limpia cualquier animación residual

        dailyContentSection.classList.remove("hidden"); // Asegurarse de que la sección sea visible
        document.body.classList.remove("birthday-background"); // Asegurarse de quitar el fondo negro después del cumpleaños

        dailyTitleElement.textContent = "¡La fiesta pudo haber terminado...!";
        dailyTitleElement.classList.remove("birthday-greeting"); // Asegura que no tenga estilo de saludo de cumpleaños
        dailyPhraseElement.innerHTML = `...pero la diversión contigo nunca para. <br> <span class="highlight">¡Estaremos de vuelta con más sorpresas!</span> 😉`;
        clearInterval(specialMessageCheckInterval); // Asegurarse de detenerlo si se cambió de página
        specialMessageCheckInterval = null;
      }
    }

    // Inicialización de index.html
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Llamar una vez al inicio para evitar el retraso de 1 segundo

    // Siempre se muestra el contador.
    // La visibilidad se manejará dentro de updateCountdown.

    // Intentar mostrar el contenido del día actual.
    // Si el cumpleaños ya pasó, displayMainPageContent lo manejará.
    // Si no, buscará el contenido de hoy.
    displayMainPageContent();
  } else {
    // --- Lógica Principal para lost_days.html ---
    const unlockSectionButtons = document.querySelectorAll(
      ".unlock-section-button"
    );

    unlockSectionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const sectionId = button.dataset.section;
        const passwordInput = document.getElementById(
          `password-input-${sectionId}`
        );
        const errorMessage = document.getElementById(
          `error-message-${sectionId}`
        );
        const unlockedDaysContainer = document.getElementById(
          `unlocked-days-${sectionId}`
        );

        const enteredPassword = passwordInput.value.trim();
        const sectionData = unlockSectionsConfig[`${sectionId}`];

        if (enteredPassword === sectionData.password) {
          errorMessage.classList.add("hidden");
          passwordInput.classList.add("hidden");
          button.classList.add("hidden");
          unlockedDaysContainer.classList.remove("hidden");
          loadDaysForSection(sectionData, unlockedDaysContainer);
        } else {
          errorMessage.classList.remove("hidden");
          passwordInput.value = "";
          passwordInput.focus();
        }
      });
    });

    function loadDaysForSection(sectionData, container) {
      container.innerHTML = "";
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let daysFound = false;
      dailyContent.forEach((item) => {
        const itemDate = new Date(item.date + "T00:00:00");

        if (
          itemDate >= sectionData.start &&
          itemDate <= sectionData.end &&
          itemDate <= today
        ) {
          const dayCard = document.createElement("div");
          dayCard.classList.add("unlocked-day-card");
          dayCard.innerHTML = `
                        <h4>Día ${item.date} - ${item.title}</h4>
                        <p>${item.phrase.replace(
                          /\*\*(.*?)\*\*/g,
                          '<span class="highlight">$1</span>'
                        )}</p>
                    `;
          container.appendChild(dayCard);
          daysFound = true;
        }
      });

      if (!daysFound) {
        container.innerHTML = `<p>Aún no hay días disponibles para esta sección o los días de este rango aún no han pasado.</p>`;
      }
    }

    // Asegurarse de que no haya animaciones ni mensajes especiales en lost_days.html
    clearAnimations();
    if (specialMessageCheckInterval) {
      clearInterval(specialMessageCheckInterval);
      specialMessageCheckInterval = null;
    }
  }
});
