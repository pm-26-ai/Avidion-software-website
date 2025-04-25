// Smooth scroll on nav click
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Fake form submission
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! We’ll get back to you shortly.");
    e.target.reset();
  });
  const services = {
    ai: {
      title: "AI Integration",
      description: "We embed artificial intelligence into your business processes using modern APIs, machine learning, and custom-built AI agents."
    },
    web: {
      title: "Website Development",
      description: "Fully custom websites designed for performance, aesthetics, and user experience. Optimized for every device."
    }
  };
  
  function openModal(service) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("modal-title").textContent = services[service].title;
    document.getElementById("modal-description").textContent = services[service].description;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
// Voice recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

function startListening() {
  if (!recognition) {
    alert("Sorry, your browser does not support voice input.");
    return;
  }

  recognition.start();
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("userInput").value = transcript;
    sendMessage();
  };
}

// Send message function
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  const messages = document.getElementById("messages");
  messages.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  const botReply = getBotReply(message);
  setTimeout(() => {
    messages.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    speak(botReply);
    messages.scrollTop = messages.scrollHeight;
  }, 500);

  userInput.value = "";
}

// Basic chatbot logic
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) return "Hello! How can I help you today?";
  if (msg.includes("services")) return "We offer AI, CRM, ERP, cloud migration and custom web development.";
  if (msg.includes("price") || msg.includes("cost")) return "Our pricing is project-based. Let’s discuss your needs!";
  return "I’m not sure I understand. Can you rephrase?";
}

// Voice response
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}
function toggleCustomBot() {
    document.getElementById("chatbot-container").style.display = "block";
  }
  
  function toggleLyro() {
    alert("Lyro will open in the bottom right chat icon!");
    // You can also trigger the widget programmatically if needed
  }  
  function toggleCustomBot() {
    const botContainer = document.getElementById("chatbot-container");
    if (botContainer.style.display === "none") {
      botContainer.style.display = "block";
    } else {
      botContainer.style.display = "none";
    }
  }
 
     