const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Mobile navigation menu
if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatically update the year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Check the local Python backend
async function checkAwienBackend() {
  try {
    const response = await fetch("http://127.0.0.1:5000/health");

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const data = await response.json();

    console.log("Awien DevHub backend:", data.status);
  } catch (error) {
    console.log(
      "Local backend is not reachable. It may be stopped, or this website may be running online."
    );
  }
}

checkAwienBackend();