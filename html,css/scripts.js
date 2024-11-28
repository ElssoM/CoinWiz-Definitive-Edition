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
      // Filtra os artigos com título OU descrição "[Removed]"
      const filteredArticles = data.articles.filter(article => {
        return article.title !== "[Removed]" && article.description !== "[Removed]";
      });

      filteredArticles.slice(0, 5).forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Adicione um operador de coalescência nula para lidar com imagens, títulos e descrições ausentes
        const image = article.urlToImage ?? ''; 
        const title = article.title ?? 'Sem título';
        const description = article.description ?? 'Sem descrição';

        newsItem.innerHTML = `
          <img src="${image}" alt="${title}" loading="lazy">
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="${article.url ?? '#'} "target="_blank">Leia mais</a>
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