const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close");

// content map
const sections = {
  aboutme: `
    <h2>About Me</h2>
    <p><strong>Name:</strong> Nestor Ozbert S. Abenoja</p>
    <li>An aspiring Network Engineer</li>
  `,
  education: `
    <h2>Academic Transcripts</h2>
    <li>Bachelor of Science in Information Technology, University of the Cordilleras</li>
  `,
  experience: `
    <h2>Experience</h2>
    <p>N/A</p>
  `,
  skills: `
    <h2>Skills</h2>
    <li>Knowledgeable in the area of the programming languages Python, Java, SQL, HTML, JavaScript, CSS.</li>
    <li>Knowledgeable in Weka data mining tool.</li>
  `,
  
  contacts: `
    <h2>Contact Information</h2>
    <li><strong>Work Email:</strong> n.o.s.abenoja@gmail.com</li>
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