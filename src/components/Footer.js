import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
      <div className='footer-container'>
          <section className="social-media">
              <div className="social-media-wrap">
                  <small className='website-rights'>Aurora Shi © 2024</small>
                  <div className="social-icons">
                      <a className="social-icon-link email" href = "mailto: Aurorashi16@gmail.com">
                          <i className="far fa-envelope"></i>
                      </a>
                      <Link className="social-icon-link instagram" to="https://www.instagram.com/aurorashi16/" target="_blank">
                          <i className="fab fa-instagram"></i>
                      </Link>
                      <Link className="social-icon-link github" to="https://github.com/asyf16" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                      <Link className="social-icon-link linkedin" to="https://www.linkedin.com/in/aurora-shi-387656247/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                      </Link>
                  </div>
              </div>
          </section>
      </div>
    )
  }
export default Footer