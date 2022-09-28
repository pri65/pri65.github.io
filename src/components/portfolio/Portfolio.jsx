import React from 'react';
import IMG1 from '../../assets/management.png';
import IMG2 from '../../assets/imdb.png';
import IMG3 from '../../assets/spotify.png';
import IMG4 from '../../assets/geekbuying.png';
import IMG5 from '../../assets/tictac.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Coschedule Management Software',
      img: IMG1,
      description:
        'Software management app that allows users to organize all of their marketing in one place, from any place.',
      technologies: 'React | Redux | HTML | CSS',
      link: 'https://comfy-sundae-dc85c9.netlify.app/',
      github: 'https://github.com/pri65/coschedule-clone',
    },
    {
      id: 2,
      title: 'IMDB Movie Rating App',
      img: IMG2,
      description:
        'IMDB is the worlds most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.',
      technologies: 'React | CSS',
      link: 'https://verdant-naiad-5ac918.netlify.app/',
      github: 'https://github.com/pri65/imdb-clone',
    },
    {
      id: 3,
      title: 'Spotify Music App',
      img: IMG3,
      description: 'Spotify is an audio streaming and media services provider. It is one of the largest music streaming service providers.',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://starlit-paprenjak-fb55a3.netlify.app/',
      github: 'https://github.com/pri65/spotify-clone',
    },
    {
      id: 4,
      title: 'GeekBuying E-commerce Website',
      img: IMG4,
      description:
        'It is an E-commerce platforms selling a wide range of consumer electronic gadgets. ',
      technologies: 'JavaScript | CSS | HTML | Bootstrap',
      link: 'https://adorable-cobbler-b9755b.netlify.app/index.html',
      github: 'https://github.com/pri65/geekbuying-clone',
    },
    {
      id: 5,
      title: 'Tic-Tac-Toe Game',
      img: IMG5,
      description:
        'Fully responsive interactive gaming website built based on React',
      technologies: 'React | CSS',
      link: 'https://meek-pixie-cd49e4.netlify.app/',
      github: 'https://github.com/pri65/tic-tac-toe',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
