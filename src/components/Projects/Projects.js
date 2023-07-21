import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online book store"
              description="It is a online book shop developed using django. It have features like registration,login,select book,make payment,It is a interactive web page"
              ghLink="https://github.com/gangareddy9824/bookstore"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="It is a basic portfolio developed using django . It contains all the information about the student or a employee."
              ghLink="https://github.com/gangareddy9824/portfolio"
              demoLink="/"
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Advanced Portfolio using react"
              description="It is a advanced portfolio webpage developed using react and it contains all the information of the student like resume,about,blogs,contact information etc.."
              ghLink="https://github.com/gangareddy9824/portfolio2-react"
              demoLink="/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text utils app using react"
              description="It is a basic webpage developed using react and this acts as a text tools app used to perform certain opetations like uppercase,lowercase,capitalize,clear text etc..."
              ghLink="https://github.com/gangareddy9824/text_utils"
              demoLink="/"              
            />
          </Col>

          

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
