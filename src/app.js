import './styles.scss';
import visa from '../assets/visa.webp';
import mastercard from '../assets/master-card.webp';
import paypal from '../assets/paypal.webp';
import logo from '../assets/logo.webp';


console.log('Gradiweb is online!!!');

document.querySelector('.header__logo img').src = logo;

document.querySelector('.header__payments').innerHTML = `
  <span class="header__payments-label">Método de pago</span>
  <div class="header__payment-icon"><img src="${visa}" alt="Visa" /></div>
  <div class="header__payment-icon"><img src="${mastercard}" alt="Mastercard" /></div>
  <div class="header__payment-icon"><img src="${paypal}" alt="Paypal" /></div>
`;


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  