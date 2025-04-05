import './styles.scss';
import visa from '../assets/visa.webp';
import mastercard from '../assets/master-card.webp';
import paypal from '../assets/paypal.webp';
import logo from '../assets/logo.webp';
import banner from '../assets/homepage_bottom_banner.avif';

// Logo principal
document.querySelector('.header__logo img').src = logo;
document.querySelector('.footer__logo img').src = logo;

// Banner principal
document.querySelector('.hero-banner').style.backgroundImage = `url(${banner})`;

// Métodos de pago
document.querySelector('.header__payments').innerHTML = `
  <span class="header__payments-label">Método de pago</span>
  <div class="header__payment-icon"><img src="${visa}" alt="Visa" /></div>
  <div class="header__payment-icon"><img src="${mastercard}" alt="Mastercard" /></div>
  <div class="header__payment-icon"><img src="${paypal}" alt="Paypal" /></div>
`;

// Footer desde settings_data.json
fetch('/settings_data.json')
  .then(response => response.json())
  .then(data => {
    const footerLinksContainer = document.querySelector('.footer__links');
    const footerSecondaryLinksContainer = document.querySelector('.footer__secondary-links');
    const footerLogoText = document.querySelector('.footer__left p');

    if (data.sections?.footer?.settings) {
      const settings = data.sections.footer.settings;
      footerLogoText.textContent = settings.logo_text;

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

// Scroll suave
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Carga de productos
fetch('/data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.querySelector('.carousel-products');

    products.forEach((product, index) => {
      const isHidden = index > 3 ? 'hidden' : '';
      container.innerHTML += `
        <div class="product-card-wrapper ${isHidden}">
          <div class="product-card">
            <div class="product-image">
              <img src="/assets/${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
              <h3>${product.title}</h3>
              <p class="price"><span class="cart-icon">🛒</span> $${product.price}</p>
              <ul class="tags">
                ${product.tags.map(tag => `<li>${tag}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    // 👁️ Animación en scroll: efecto de crecimiento
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // 🟡 Observa solo los que aún no tienen 'reveal'
    const observeAll = () => {
      document.querySelectorAll('.product-card-wrapper:not(.reveal)').forEach(card => {
        observer.observe(card);
      });
    };

    observeAll(); // Para los primeros visibles

    // 🎯 Botón "Ver todo"
    const viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) {
      viewAllBtn.addEventListener('click', () => {
        // Mostrar todos sin revelar aún
        document.querySelectorAll('.product-card-wrapper.hidden').forEach(card => {
          card.classList.remove('hidden');
        });

        observeAll(); // Observar los nuevos para aplicar animación con scroll
        viewAllBtn.style.display = 'none';
      });
    }
  })
  .catch(err => {
    console.error('Error al cargar products.json:', err);
  });

console.log('Gradiweb is online!!!');
