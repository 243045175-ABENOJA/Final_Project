const content = document.getElementById("content");

// content map (clean + scalable)
const sections = {
  about: `
    <h2>About Me</h2>
    <p>I am a passionate developer with skills in web development.</p>
  `,
  transcripts: `
    <h2>Academic Transcripts</h2>
    <p>Details about your academic records go here.</p>
  `,
  licenses: `
    <h2>Licenses and Certifications</h2>
    <p>List your certifications here.</p>
  `,
  portfolio: `
    <h2>My Portfolio</h2>
    <p>Showcase your projects here.</p>
  `,
  work: `
    <h2>Work Experience</h2>
    <p>Your job experience details.</p>
  `,
  contact: `
    <h2>Contact Information</h2>
    <p>Email: example@email.com</p>
  `
};

// attach listeners dynamically
Object.keys(sections).forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    content.innerHTML = sections[id];
  });
});