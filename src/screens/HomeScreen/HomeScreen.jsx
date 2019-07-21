import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';
import { Navbar,
  ProjectScreenShot,
  ProjectInfo,
  ProjectScreenShotMobile,
  ProjectInfoMobile,
  ContactForm,
  ContactFormMobile,
  Footer,
  FooterMobile
}  from '../../components';

import { projects } from "../../constants/projects";
import { isMobile } from "react-device-detect";
const device = !isMobile ? "desktop" : "mobile";


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
    this.projectSection = React.createRef();
    this.contactSection = React.createRef();
  }
  componentDidMount() {
    switch (this.props.history.location.search) {
      case "?contact":
        window.scrollTo(0,this.contactSection.current.offsetTop);
        break;
      case "?project":
      default:
        window.scrollTo(0,this.projectSection.current.offsetTop);
        break;
    }
  }

  render () {
    let allProjects = [],
      projectScreenShotComponent = (isMobile ? <ProjectScreenShotMobile /> : <ProjectScreenShot />),
      projectInfoComponent = (isMobile ? <ProjectInfoMobile /> : <ProjectInfo />),
      contactComponent = (isMobile ? <ContactFormMobile /> : <ContactForm />),
      footerComponent = (isMobile ? <FooterMobile /> : <Footer />),
      key = 0;

    for (const project in projects) {
      const infoProps = {
          body: projects[project].description,
          logo: projects[project].logo,
          demos: projects[project].demos
        },
        screenshotProps = {
          screenshots: projects[project].screenshots[device]
        };

      let projectWrapper = (
        <div key={key} className={`projectWrapper ${(key%2 === 0) ? "even" : "odd"}`}>
          { React.cloneElement(projectScreenShotComponent, screenshotProps) }
          { React.cloneElement(projectInfoComponent, infoProps) }
        </div>
      );

      allProjects.push(projectWrapper);
      key++;
    }

    return  (
      <div className="homeContainer" ref={ this.home }>
        <Navbar />
        <div className="projectsWrapper" ref={ this.projectSection }>
          { allProjects }
        </div>
        <div className="contactWrapper" ref={ this.contactSection }>
          { contactComponent }
        </div>
        <div className="footerWrapper">
          { footerComponent }
        </div>
      </div>
    )
  }
}

HomeScreen.propTypes = {

};

export default HomeScreen;