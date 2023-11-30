function toggleSection(sectionId) {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('nav a');

  sections.forEach(function (section) {
    section.style.display = 'none';
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  document.getElementById(sectionId).style.display = 'block';
  document.querySelector('nav a[href="javascript:void(0);"][onclick="toggleSection(\'' + sectionId + '\')"]').classList.add('active');
}
