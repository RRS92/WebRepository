const quotes = [
  { text: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon", image: "lennon.jpg" },
  { text: "A única coisa que devemos temer é o próprio medo.", author: "Franklin D. Roosevelt", image: "Roosevelt.jpg" },
  { text: "A imaginação é mais importante que o conhecimento.", author: "Albert Einstein", image: "einstein.jpg" },
  { text: "A felicidade não é algo pronto. Ela vem de suas próprias ações.", author: "Dalai Lama", image: "dalai_lama.jpg" },
  { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier", image: "Collier.jpg" }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>${quote.text}</p><footer>${quote.author}</footer>`;
  document.body.style.backgroundImage = `url('${quote.image}')`;
}


