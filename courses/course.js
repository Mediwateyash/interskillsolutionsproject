  // JavaScript to toggle extra content
  document.querySelector(".read-more-link").addEventListener("click", function () {
    const extraContent = document.querySelector(".extra-content");
    const readMoreLink = this;

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
      extraContent.style.display = "inline";
      readMoreLink.textContent = "Read less";
    } else {
      extraContent.style.display = "none";
      readMoreLink.textContent = "Read more";
    }
  });
  