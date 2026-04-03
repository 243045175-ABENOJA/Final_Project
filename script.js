const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close");

// content map
const sections = {
  about: `
    <h2>About Me</h2>
    <p><strong>Name:</strong> Nestor Ozbert S. Abenoja</p>
    <p><strong>Skills:</strong></p>
    <li>Knowledgeable in the area of the programming languages Python, Java, SQL, HTML, JavaScript, CSS.</li>
    <li>Knowledgeable in Weka data mining tool.</li>
    
  
  `,
  transcripts: `
    <h2>Academic Transcripts</h2>
    <li>Bachelor of Science in Information Technology, University of the Cordilleras</li>
  `,
  certs: `
    <h2>Licenses and Certifications</h2>
    <p><strong>Licenses:</strong> N/A</p>
    <p><strong>Certificates:</strong> N/A</p>
  `,
  portfolio: `
    <h2>My Portfolio</h2>
    <p><strong>Projects:</strong> N/A</p>
  `,
  work: `
    <h2>Work Experience</h2>
    <li>N/A</li>
  `,
  contact: `
    <h2>Contact Information</h2>
    <li><strong>Work Email:</strong> n.o.s.abenoja@email.com</li>
    <li><strong>Contact Number:</strong> 0999599588533099</li>
  `
};

// attach click to ALL cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.key;

    // safety check
    if (sections[key]) {
      modalText.innerHTML = sections[key];
      modal.style.display = "block";
    }
  });
});

// close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click outside to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});