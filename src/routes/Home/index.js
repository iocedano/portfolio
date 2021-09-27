import React from "react";
import "./styled.css";
import Header from "../../components/Header";
import WorkSection from './WorkSection';
import SkillSection from "./SkillSection";
import ContactSection from "./ContactSection";
import CV from '../../config/cv.json';

const { contact, skills, jobHistories, shortDescription } = CV;

function App() {
  return (
    <main className="App">
      <h1 className="visually-hidden">Hi, I&apos;m Ismael Cedano</h1>
      <Header />
      <section>
        <h2>Hi, I&apos;m Ismael Cedano</h2>
        <p>{shortDescription}</p>
      </section>
      <WorkSection jobs={jobHistories} />
      <SkillSection skills={skills} />
      <ContactSection points={contact.points} email={contact.email} />
    </main>
  );
}

export default App;
