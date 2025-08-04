const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link e faz scroll manual
navLinksItems.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      // Aguarda o menu fechar antes de rolar
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200); // tempo suficiente para o menu fechar
    }
  });
});

// Envio do formulário de contato via WhatsApp
const btnWhatsapp = document.getElementById('enviarWhatsapp');
if (btnWhatsapp) {
  btnWhatsapp.addEventListener('click', function() {
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const texto = `Olá! Estou interessado (a) nas aulas de ritmos:%0A%0ANome: ${nome}%0AE-mail: ${email}%0AMensagem: ${mensagem}`;
    const numero = '55519'; // Substitua pelo número do WhatsApp do responsável

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  });
}