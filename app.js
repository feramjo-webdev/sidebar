// select elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar');
  }
});
