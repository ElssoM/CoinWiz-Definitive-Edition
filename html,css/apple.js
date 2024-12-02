document.getElementById("simulate-investment").addEventListener("click", () => {
    // Gerar valores aleatórios para simulação
    const stockPrice = (Math.random() * (200 - 50) + 50).toFixed(2); // Entre $50 e $200
    const quantity = Math.floor(Math.random() * 10) + 1; // Entre 1 e 10
    const timePeriod = Math.floor(Math.random() * 10) + 1; // Entre 1 e 10 anos

    // Obter saldo atual (sempre permite negativo)
    const cashAmountElem = document.getElementById("cash-amount");
    const currentCash = parseFloat(cashAmountElem.textContent.replace("$", "").replace(",", "")) || 0;

    // Calcular investimento total
    const totalInvestment = stockPrice * quantity;

    // Atualizar saldo
    const newCash = currentCash - totalInvestment;

    // Simular valor futuro (crescimento anual de 8%)
    const growthRate = 0.08;
    const futureValue = totalInvestment * Math.pow(1 + growthRate, timePeriod);

    // Atualizar os elementos da página
    cashAmountElem.textContent = `$${newCash.toLocaleString("en-US")}`;
    document.getElementById("investment-result").innerHTML = `
      <p>You invested <strong>$${totalInvestment.toFixed(2)}</strong> in ${quantity} shares at $${stockPrice} per share.</p>
      <p>In ${timePeriod} years, your investment could be worth <strong>$${futureValue.toFixed(2)}</strong>.</p>
    `;
  });

  const companies = [
    { symbol: "AAPL", name: "Apple Inc.", sector: "Criativo" },
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

  // Simulação de dados de uma API
const updatedData = {
    nextResults: {
      reportDate: "31 de março",
      reportPeriod: "Q2 2025",
      epsEstimate: "2,50 USD",
      revenueEstimate: "130,00 B USD"
    },
    keyStats: {
      marketCap: "3,70 T USD",
      netIncome: "95,00 B USD",
      revenue: "400,00 B USD",
      dividendYield: "0,45%",
      peRatio: "37,50",
      beta: "1,00"
    },
    employees: {
      totalEmployees: "165 K",
      revenuePerEmployee: "2,42 M USD",
      employeeVariation: "+4K (+2,42%)",
      profitPerEmployee: "580,00 K USD"
    }
  };
  
  // Atualiza os elementos na página
  document.getElementById("report-date").textContent = updatedData.nextResults.reportDate;
  document.getElementById("report-period").textContent = updatedData.nextResults.reportPeriod;
  document.getElementById("eps-estimate").textContent = updatedData.nextResults.epsEstimate;
  document.getElementById("revenue-estimate").textContent = updatedData.nextResults.revenueEstimate;
  
  document.getElementById("market-cap").textContent = updatedData.keyStats.marketCap;
  document.getElementById("net-income").textContent = updatedData.keyStats.netIncome;
  document.getElementById("revenue").textContent = updatedData.keyStats.revenue;
  document.getElementById("dividend-yield").textContent = updatedData.keyStats.dividendYield;
  document.getElementById("pe-ratio").textContent = updatedData.keyStats.peRatio;
  document.getElementById("beta").textContent = updatedData.keyStats.beta;
  
  document.getElementById("total-employees").textContent = updatedData.employees.totalEmployees;
  document.getElementById("revenue-per-employee").textContent = updatedData.employees.revenuePerEmployee;
  document.getElementById("employee-variation").textContent = updatedData.employees.employeeVariation;
  document.getElementById("profit-per-employee").textContent = updatedData.employees.profitPerEmployee;

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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("simulate-investment");
  const resultDiv = document.getElementById("investment-result");

  button.addEventListener("click", () => {
    // Número de anos
    const years = prompt("Enter the number of years:");
    if (!years || isNaN(years) || years <= 0) {
      resultDiv.textContent = "Please enter a valid number of years.";
      return;
    }

    // Cálculo do investimento
    const investmentValue = 175 * 2 * 3 * Number(years);

    // Exibir o resultado
    resultDiv.textContent = `Your investment in Apple stocks after ${years} years would be: $${investmentValue.toFixed(2)}`;
  });
});
