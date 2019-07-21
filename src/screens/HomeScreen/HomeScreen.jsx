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
      scrollToContactOnLoad: this.props.location.state.scrollToContactOnLoad
    };
    this.projectSection = React.createRef();
    this.contactSection = React.createRef();
    this.scrollTo = this._scrollTo.bind(this);

  }

  componentDidMount() {
    if (this.state.scrollToContactOnLoad) {
      this._scrollTo("contactSection");
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
          demos: projects[project].demos,
          stack: projects[project].stack,
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
      <div className="homeContainer">
        <Navbar
          handleClick={ this.scrollTo }/>
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

  _scrollTo(name) {
    let ref = this[name];

    if (ref && ref.current) {
      let offsetTop = ref.current.offsetTop + ((name === "contactSection") ? 250 : 0);

      window.scrollTo(0,offsetTop);
    } else if (name === "resume") {
      console.log(name);
    }
  }
}

HomeScreen.propTypes = {

};

export default HomeScreen;