import './styles.scss';
import visa from '../assets/visa.webp';
import mastercard from '../assets/master-card.webp';
import paypal from '../assets/paypal.webp';
import logo from '../assets/logo.webp';
import banner from '../assets/homepage_bottom_banner.avif';

// Importamos solo las imágenes usadas por las colecciones posteriores al 1 de enero 2025
import homepageBanner from '../assets/homepage_bottom_banner.avif';
import shuffleEssentials from '../assets/shuffle_essentials.webp';

// Mapa de imágenes
const imageMap = {
  'homepage_bottom_banner.avif': homepageBanner,
  'shuffle_essentials.webp': shuffleEssentials,
};

document.querySelector('.header__logo img').src = logo;
document.querySelector('.footer__logo img').src = logo;
document.querySelector('.hero-banner').style.backgroundImage = `url(${banner})`;

document.querySelector('.header__payments').innerHTML = `
  <span class="header__payments-label">Payment methods</span>
  <div class="header__payment-icon"><img src="${visa}" alt="Visa" /></div>
  <div class="header__payment-icon"><img src="${mastercard}" alt="Mastercard" /></div>
  <div class="header__payment-icon"><img src="${paypal}" alt="Paypal" /></div>
`;

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

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

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

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const observeAll = () => {
      document.querySelectorAll('.product-card-wrapper:not(.reveal)').forEach(card => {
        observer.observe(card);
      });
    };

    observeAll();

    const viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) {
      viewAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.product-card-wrapper.hidden').forEach(card => {
          card.classList.remove('hidden');
        });

        observeAll();
        viewAllBtn.style.display = 'none';
      });
    }
  })
  .catch(err => {
    console.error('Error al cargar products.json:', err);
  });

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

Promise.all([
  fetch('/settings_data.json').then(res => res.json()),
  fetch('/data/collections.json').then(res => res.json())
])
  .then(([settingsData, collections]) => {
    const title = settingsData.sections["collections-section"]?.settings?.title || "Colecciones destacadas";
    document.getElementById('collections-title').textContent = title;

    const filteredCollections = collections.filter(col => {
      const createdAt = new Date(col.created_at);
      const minDate = new Date('2025-01-01');
      return createdAt >= minDate;
    });

    const container = document.getElementById('collections-grid');

    if (!filteredCollections.length) {
      container.innerHTML = '<p>No hay colecciones para mostrar.</p>';
      return;
    }

    filteredCollections.forEach(col => {
      const imageSrc = imageMap[col.image] || '';
      container.innerHTML += `
        <div class="collections-section__card in-view">
          <div class="collections-section__image-wrapper">
            <img src="${imageSrc}" alt="${col.title}" class="collections-section__image" />
            <p class="collections-section__name">${col.title}</p>
          </div>
        </div>
      `;
    });
    
  })
  .catch(err => console.error('Error cargando datos de collections:', err));
