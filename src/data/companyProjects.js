import realtorImage from '../assets/realtor.jpg'; // <-- yeh add karo

const companyProjects = [
  {
    title: "Realtor.com",
    skills: ["React.js", "Node.js", "AWS", "GraphQL"],
    thumbnail: realtorImage,   // <-- direct import use karo
    link: "https://realtor.com",
  },
  {
    title: "Level Capital",
    skills: ["React.js", "AWS", "Node.js"],
    thumbnail: '/assets/default.png',
  },
];

export default companyProjects;