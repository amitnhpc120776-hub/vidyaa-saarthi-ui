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

/* load Navigation & Fotter on the page*/

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("vs-navbar", "../../../component-html/vs-navbar.html");
  loadComponent("vs-footer", "../../../component-html/vs-footer.html");
});

/* CTA Button Groups */
document.querySelectorAll(".vs-cta-group").forEach((el) => {
  el.innerHTML = `
    <a href="../../../Pages/website/studentSignup.html" class="btn btn-primary">Signup — It’s Free →</a>
    <a href="../../../Pages/website/howitWorksNew.html" class="btn btn-warning text-white">How It Works →</a>
  `;
});
