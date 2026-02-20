import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  p {
    text-align: justify;
    text-justify: inter-word;
  }
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    justify-items: center;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      text-align: center;

      &:before {
        content: '▹';
        position: relative;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    outline: 0;
    border-radius: var(--border-radius);
    background-color: var(--white);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        // mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  // useEffect(() => {
  //   if (prefersReducedMotion) {
  //     return;
  //   }

  //   sr.reveal(revealContainer.current, srConfig());
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
  //   script.type = 'text/javascript';
  //   script.onload = function () {
  //     window.voiceflow.chat.load({
  //       verify: { projectID: '65c5ee5bbfe9831529334876' },
  //       url: 'https://general-runtime.voiceflow.com',
  //       versionID: 'production',
  //     });
  //   };
  //   document.body.appendChild(script);
  // }, []);

  const skills = [
    'Java',
    'Spring Boot',
    'Node.js',
    'React',
    'AWS',
    'Microservices',
    'Distributed Systems',
    'AI/LLMs',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Mathang Peddi, a Software Engineer with 4+ years of experience building
              scalable systems and AI-driven applications. I recently graduated with a Master's in
              Computer Science from Georgia State University and currently work at iTradeNetwork,
              where I develop AI-powered backend systems to automate enterprise workflows.
            </p>

            <p>
              I specialize in backend and full-stack development, with experience in Java, Spring
              Boot, Node.js, React, and cloud technologies like AWS. My work spans distributed
              systems, microservices, and applied AI/LLMs, with a strong focus on building reliable,
              high-performance systems that operate at scale.
            </p>

            <p>
              Previously, I worked at The Home Depot, Juniper Networks, and Citrix Systems, where I
              built large-scale data processing systems, developed high-throughput microservices and
              APIs, and delivered impactful features that improved system performance and served
              thousands of users. At Citrix, I contributed to core features of the Workspace UI,
              including the Activity Manager, and implemented scheduling capabilities that optimized
              resource utilization and reduced infrastructure costs.
            </p>

            <p>
              I'm passionate about building scalable, intelligent systems that solve real-world
              problems and create meaningful impact.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
