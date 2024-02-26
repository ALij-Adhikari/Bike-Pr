document.addEventListener("DOMContentLoaded", function () {
  const englishButton = document.getElementById("english-button");
  const nepaliButton = document.getElementById("nepali-button");
  const continueButton = document.getElementById("continue-button");
  const newScreen = document.getElementById("new-screen");

  englishButton.addEventListener("click", () => {
    continueButton.classList.remove("hidden");
    selectLanguage("english");
  });

  nepaliButton.addEventListener("click", () => {
    continueButton.classList.remove("hidden");
    selectLanguage("nepali");
  });

  function selectLanguage(language) {
    const englishButton = document.getElementById("english-button");
    const nepaliButton = document.getElementById("nepali-button");

    if (language === "english") {
      englishButton.classList.add("selected");
      nepaliButton.classList.remove("selected");
    } else if (language === "nepali") {
      nepaliButton.classList.add("selected");
      englishButton.classList.remove("selected");
    }
  }

  continueButton.addEventListener("click", () => {
    document.querySelector(".screen:not(.hidden)").classList.add("hidden");
    newScreen.classList.remove("hidden");
  });

  const menuIcon = document.getElementById("menu-icon");
  const menuContainer = document.getElementById("menu-container");

  menuIcon.addEventListener("click", () => {
    menuContainer.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !menuIcon.contains(event.target) &&
      !menuContainer.contains(event.target)
    ) {
      menuContainer.classList.remove("show");
    }
  });

  menuContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-option")) {
      const option = event.target.innerText;
      console.log("Selected option:", option);
      menuContainer.classList.remove("show");
    }
  });

  //   const profileButton = document.getElementById("user-profile-button");
  //   const profileModal = document.getElementById("profile-modal");

  //   profileButton.addEventListener("click", () => {
  //     profileButton.classList.toggle("clicked");
  //     if (profileModal.style.display === "block") {
  //       profileModal.style.display = "none";
  //     } else {
  //       profileModal.style.display = "block";
  //     }
  //   });

  //   window.addEventListener("click", (event) => {
  //     if (
  //       !event.target.matches(".user-profile-button") &&
  //       !event.target.matches(".modal-content")
  //     ) {
  //       profileModal.style.display = "none";
  //       profileButton.classList.remove("clicked");
  //     }
  //   });
});
