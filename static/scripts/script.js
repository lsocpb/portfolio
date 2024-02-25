// Mobile nav toggle
document.querySelector('.mobile-nav-toggle').addEventListener('click', function(e) {
  document.getElementById('navbar').classList.toggle('navbar-mobile');
  this.classList.toggle('bi-list');
  this.classList.toggle('bi-x');
});

// Mobile nav dropdowns activate
document.querySelectorAll('.navbar .dropdown > a').forEach(function(element) {
  element.addEventListener('click', function(e) {
    if (document.getElementById('navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  });
});
// preloader
window.addEventListener('load', function () {
  const loader = document.getElementById('preloader');
  loader.style.display = 'none';
});