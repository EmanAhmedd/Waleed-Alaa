    const weddingDate = new Date("June 15, 2026 00:00:00").getTime();

    setInterval(function () {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days + "d";
      document.getElementById("hours").textContent = hours + "h";
      document.getElementById("minutes").textContent = minutes + "m";
      document.getElementById("seconds").textContent = seconds + "s";
    }, 1000);