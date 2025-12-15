function loadComponent(id, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("vs-navbar", "../../../component-html/vs-navbar.html");
  loadComponent("vs-footer", "../../../component-html/vs-footer.html");
});
