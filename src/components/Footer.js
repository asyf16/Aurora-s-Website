import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
      <div className='footer-container'>
          <section className="social-media">
              <div className="social-media-wrap">
                  <small className='website-rights'>Aurora Shi © 2025</small>
                  <div className="social-icons">
                      <a className="social-icon-link email" href = "mailto: Aurorashi16@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} />

                      </a>
                      <Link className="social-icon-link instagram" to="https://www.instagram.com/aurorashi16/" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />

                      </Link>
                      <Link className="social-icon-link github" to="https://github.com/asyf16" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                      <Link className="social-icon-link linkedin" to="https://www.linkedin.com/in/aurora-shi-387656247/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} />

                      </Link>
                  </div>
              </div>
          </section>
      </div>
    )
  }
export default Footer