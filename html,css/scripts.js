// Disable animation on subsequent page loads
if (sessionStorage.getItem("animationPlayed")) {
    document.getElementById("heroSection").classList.add("no-animation");
  } else {
    sessionStorage.setItem("animationPlayed", "true");
  }
  
  // Toggle the mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
  });
  
  // Close menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });
  

  const newsContainer = document.getElementById('news-container');
const apiKey = '78b348cc2a7c44218a2691f7869093b1'; // Substitua pela sua chave da API

async function fetchNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=finanças&language=pt&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.status === 'ok') {
      data.articles.slice(0, 5).forEach(article => { // Mostra as 6 primeiras notícias
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const image = article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}">` : ''; // Lida com notícias sem imagem
        newsItem.innerHTML = `
          ${image}
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Leia mais</a>
        `;
        newsContainer.appendChild(newsItem);
      });
    } else {
      console.error('Erro ao buscar notícias:', data.message);
      newsContainer.innerHTML = '<p>Não foi possível carregar as notícias.</p>';
    }
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    newsContainer.innerHTML = '<p>Não foi possível carregar as notícias.</p>';
  }
}

fetchNews();