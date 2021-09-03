import React from "react";
import "./styled.css";
import Header from "../../components/Header";
import WorkSection from './WorkSection';
import SkillSection from "./SkillSection";
import ContactSection from "./ContactSection";


const Contact = {
  email: 'iocedano@gmail.com',
  points: [
    { type: 'github', url: 'https://github.com/iocedano' },
    { type: 'linkedin', url: 'https://www.linkedin.com/in/iocedano' },
  ]
};

const skills = [
  { type: 'react' },
  { type: 'nodejs' },
  { type: 'javascript' },
  { type: 'typescript' },
  { type: 'jest' },
  { type: 'sass' },
  { type: 'yarn' },
  { type: 'npm' },
  { type: 'html5' },
  { type: 'docker' },
  { type: 'googlecloud' },
  { type: 'python' },
  { type: 'django' }
];

const Jobs = [{
  id: 'nytimes-1',
  company: 'New York Time: Web platform: Performance Team',
  role: 'Senior Software Engineer',
  description: `
    Since Google announced CWV, we have been working on tooling, implementing metrics to keep track
    of our own RUM data, and constantly creating AB tests that help us prove which performance changes
    improve the web app the most.
  `
},{
  id: 'nytimes-2',
  company: 'New York Time: Web platform Team',
  title: 'Senior Software Engineer',
  description: `
  Maintaining, supporting, researching, and creating toolings for other dev teams members; I have been doing
  maintenance to support an internal dashboard that shows the SLI and SLO of the team has platform supporters.
  `
},{
  id: 'nytimes-2',
  company: 'New York Time: Web platform Team',
  title: 'Senior Software Engineer',
  description: `
  Maintaining, supporting, researching, and creating toolings for other dev teams members; I have been doing
  maintenance to support an internal dashboard that shows the SLI and SLO of the team has platform supporters.
  `
}];

function App() {
  return (
    <div className="App">
      <Header />
      <WorkSection jobs={Jobs} />
      <SkillSection skills={skills} />
      <ContactSection points={Contact.points} email={Contact.email} />
    </div>
  );
}

export default App;
