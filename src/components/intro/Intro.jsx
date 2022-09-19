import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import me from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I'm a web developer with a passion for building web applications with astounding designs. Pair-programming and remote work devotee. Proficient in multiple languages, frameworks, and technologies and capable of taking on new skills quickly and efficiently.

Currently, I am enrolled in Masai’s program which is an online remote software school. Here we study web development in an online multicultural environment. We get experience in pair programming. My daily routine consists of building projects, studying, reading articles and documentation, solving coding challenges, and networking. ;-)</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro;