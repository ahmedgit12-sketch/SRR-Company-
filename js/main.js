// Mutsurgical — shared front-end behaviour (no build step required)

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
      });
    });
  }

  // Highlight current page in nav
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Set current year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Quote request form: client-side validation + mailto fallback
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var country = document.getElementById('country').value.trim();
      var category = document.getElementById('category').value;
      var message = document.getElementById('message').value.trim();
      var statusEl = document.getElementById('form-status');

      if (!name || !email || !message) {
        statusEl.textContent = 'Please fill in your name, email, and message before sending.';
        statusEl.style.color = '#c0392b';
        return;
      }

      var subject = encodeURIComponent('Quote Request — ' + (category || 'General Inquiry'));
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Country: ' + (country || '-') + '\n' +
        'Product Category: ' + (category || '-') + '\n\n' +
        'Message:\n' + message
      );

      // Placeholder recipient — replace with the company's real export/sales inbox.
      window.location.href = 'mailto:info@mutsurgical.example?subject=' + subject + '&body=' + body;

      statusEl.textContent = 'Opening your email client to send this request…';
      statusEl.style.color = '#1f7a4d';
    });
  }
});
