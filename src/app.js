import './styles.scss';
import visa from '../assets/visa.webp';
import mastercard from '../assets/master-card.webp';
import paypal from '../assets/paypal.webp';
import logo from '../assets/logo.webp';

console.log('Gradiweb is online!!!');

// Asignar logo en el header y el footer
document.querySelector('.header__logo img').src = logo;
document.querySelector('.footer__logo img').src = logo;

// Asignar métodos de pago en el header
document.querySelector('.header__payments').innerHTML = `
  <span class="header__payments-label">Método de pago</span>
  <div class="header__payment-icon"><img src="${visa}" alt="Visa" /></div>
  <div class="header__payment-icon"><img src="${mastercard}" alt="Mastercard" /></div>
  <div class="header__payment-icon"><img src="${paypal}" alt="Paypal" /></div>
`;

// Función para cargar los enlaces del footer desde settings_data.json
fetch('/settings_data.json') // Cambiado a la ruta correcta
  .then(response => response.json())
  .then(data => {
    const footerLinksContainer = document.querySelector('.footer__links');
    const footerSecondaryLinksContainer = document.querySelector('.footer__secondary-links');
    const footerLogoText = document.querySelector('.footer__left p');

    if (data.sections && data.sections.footer && data.sections.footer.settings) {
      const settings = data.sections.footer.settings;

      // Establecer el texto del logo
      footerLogoText.textContent = settings.logo_text;

      // Cargar los enlaces del footer
      if (settings.links) {
        const mainLinks = settings.links.slice(0, 4);
        const secondaryLinks = settings.links.slice(4);

        footerLinksContainer.innerHTML = mainLinks
          .map(link => `<a href="${link.url}">${link.label.toUpperCase()}</a>`)
          .join('');

        footerSecondaryLinksContainer.innerHTML = secondaryLinks
          .map(link => `<a href="${link.url}">${link.label.toUpperCase()}</a>`)
          .join('');
      }
    }
  })
  .catch(error => console.error('Error cargando settings_data.json:', error));

// Agregar comportamiento de scroll suave a los enlaces internos
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
