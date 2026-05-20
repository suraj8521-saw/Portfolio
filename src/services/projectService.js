// Temporal mock data store
const portfolioProjects = [
  {
    id: "e-book-sys",
    title: "E-Book Management System",
    description: "A comprehensive management system featuring distinct administrative controls and user panels.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "pizza-sales",
    title: "Pizza Sales & Management System",
    description: "An optimized analytics and sales tracker managing high-volume transactional data.",
    tags: ["C#", "MySQL", "React"],
    liveLink: "#",
    githubLink: "#"
  }
];

// This function mimics an asynchronous database fetch
export const fetchProjects = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioProjects);
    }, 400); // 400ms simulated network latency
  });
};