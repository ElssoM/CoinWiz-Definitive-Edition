// Array com dados fictícios das empresas
const companies = [
    { symbol: "AAPL.html", name: "Apple Inc.", sector: "Criativo" },
    { symbol: "NVDA", name: "NVIDIA Corp.", sector: "Serviços de Tecnologia" },
    { symbol: "MSFT", name: "Microsoft Corp.", sector: "Serviços de Tecnologia" },
    { symbol: "AMZN", name: "Amazon.com Inc.", sector: "Comércio Varejo" },
    { symbol: "META", name: "Meta Platforms", sector: "Criativo" },
    { symbol: "TSLA", name: "Tesla Inc.", sector: "Criativo" },
    { symbol: "BRK.B", name: "Berkshire Hathaway", sector: "Financeiro" },
    { symbol: "TSM", name: "Taiwan Semiconductor", sector: "Serviços de Tecnologia" },
    { symbol: "AVGO", name: "Broadcom Inc.", sector: "Serviços de Tecnologia" },
    { symbol: "LLY", name: "Eli Lilly and Co.", sector: "Saúde" },
    { symbol: "WMT", name: "Walmart Inc.", sector: "Comércio Varejo" },
    { symbol: "V", name: "Visa Inc.", sector: "Serviços Financeiros" },
    { symbol: "UNH", name: "UnitedHealth Group", sector: "Saúde" },
    { symbol: "XOM", name: "Exxon Mobil Corp.", sector: "Energia" },
    { symbol: "ORCL", name: "Oracle Corp.", sector: "Serviços de Tecnologia" },
    { symbol: "MA", name: "Mastercard Inc.", sector: "Serviços Financeiros" },
    { symbol: "NVO", name: "Novo Nordisk", sector: "Saúde" },
    { symbol: "COST", name: "Costco Wholesale", sector: "Comércio Varejo" },
    { symbol: "HD", name: "Home Depot", sector: "Comércio Varejo" },
    { symbol: "PG", name: "Procter & Gamble", sector: "Consumo" },
    { symbol: "NFLX", name: "Netflix Inc.", sector: "Entretenimento" },
    { symbol: "JNJ", name: "Johnson & Johnson", sector: "Saúde" },
    { symbol: "BAC", name: "Bank of America", sector: "Financeiro" },
    { symbol: "ABBV", name: "AbbVie Inc.", sector: "Saúde" },
    { symbol: "CRM", name: "Salesforce Inc.", sector: "Tecnologia" },
    { symbol: "CVX", name: "Chevron Corp.", sector: "Energia" },
    { symbol: "KO", name: "Coca-Cola Co.", sector: "Consumo" },
    { symbol: "MRK", name: "Merck & Co.", sector: "Saúde" }
];

// Função para gerar números aleatórios dentro de um intervalo
function randomFloat(min, max, decimals = 2) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
}

// Função para formatar o Valor de Mercado com K e M
function formatMarketCap(value) {
    if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
    if (value >= 1000) return (value / 1000).toFixed(1) + "K";
    return value.toFixed(1);
}

// Função para determinar se vale a pena comprar
function shouldBuy(variation, epsGrowth) {
    return epsGrowth > 10 && variation > -2 ? "Sim" : "Não";
}

// Função para preencher a tabela com dados aleatórios
function populateTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpar a tabela antes de popular

    companies.forEach(company => {
        const price = parseFloat(randomFloat(50, 500));
        const variation = parseFloat(randomFloat(-5, 5));
        const volume = Math.round(randomFloat(10, 1000));
        const marketCap = price * volume * 1000;
        const epsGrowth = parseFloat(randomFloat(-10, 30));
        const buyStatus = shouldBuy(variation, epsGrowth);
        const variationClass = variation >= 0 ? "up" : "down";

        // Criar uma nova linha na tabela
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="/empresa/${company.symbol}">${company.symbol}</a></td>
            <td><a href="/empresa/${company.symbol}">${company.name}</a></td>
            <td>${price.toFixed(2)} BRL</td>
            <td class="${variationClass}">${variation.toFixed(2)}%</td>
            <td>${volume}K</td>
            <td>${formatMarketCap(marketCap)} BRL</td>
            <td>${epsGrowth.toFixed(2)}%</td>
            <td>${company.sector}</td>
            <td>${buyStatus}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para criar o marquee com as empresas e variação aleatória
function populateMarquee() {
    const marquee = document.getElementById("marquee");
    marquee.innerHTML = ""; // Limpar o marquee antes de popular

    companies.forEach(company => {
        const price = parseFloat(randomFloat(50, 500));
        const variation = parseFloat(randomFloat(-5, 5));
        const variationClass = variation >= 0 ? "up" : "down";
        
        // Criar um elemento de texto para o marquee
        const span = document.createElement("span");
        span.className = variationClass;
        span.textContent = `${company.name} (${company.symbol}): ${price.toFixed(2)} BRL (${variation.toFixed(2)}%)  |  `;
        marquee.appendChild(span);
    });
}

// Função para iniciar a atualização periódica
function startUpdating() {
    populateTable(); // Preencher a tabela inicialmente
    populateMarquee(); // Preencher o marquee inicialmente
    setInterval(() => {
        populateTable();
        populateMarquee();
    }, 10000); // Atualizar a cada 2 minutos, lembrar de mudar que isto já não é mais 2 minutos
}

// Inicializar
startUpdating();


