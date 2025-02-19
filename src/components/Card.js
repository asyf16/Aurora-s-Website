import React, {useEffect} from 'react';
import './Card.css';
import Item from './Item';
import Aos from "aos";
import 'aos/dist/aos.css'

function Card() {
  const handleScrollToTop=() =>{
    window.scrollTo({top:0, behavior:'smooth'});
  }

  useEffect(()=>{
    Aos.init({duration:1000});

  }, [])

  return (
    <div className='cards'>
        <h1>Awards</h1>
        <p>The awards I have received showcase both my passions and skills.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' data-aos='fade-up'>
            <Item
              src='https://i.imgur.com/YBFHMxU.jpg'
              text='Graduated with highest academic grade of 99.6% from Old Scona Academic.'
              label='Valedictorian'
              path='https://edmontonsun.com/news/valedictorians-2023-old-sconas-aurora-shi' 
            />
            <Item
              src='https://i.imgur.com/4IE35XW.jpg'
              text='Nominated for $2000 scholarship, 1 of 18 in Edmonton, based on leadership, inclusivity, and excellence.'
              label='Micheal S. Award'
              path='https://www.epsb.ca/media/epsb/schools/goingtoschool/studentawards/EPSB_Michael_Strembitsky_Award_Recipients_Guide_2023.pdf'
            />
          </ul>
          <ul data-aos='fade-up' className='cards__items'>
            <Item
              src='https://i.imgur.com/bF2yyba.png'
              text='Won $2500 by creating video game teaching financial skills, placing third nationally in competition sponsored by CIBC.'
              label='My Money My Future'
              path='https://www.mymoneymyfuturechallenge.ca/winners-portfolio/daniel-aurora-amy-and-andrew'
            />
            <Item
              src='https://i.imgur.com/WIZLP2V.png'
              text='Won $3000 by creating storybook about diversity. Book was officially published and distributed to libraries and schools in Edmonton.'
              label='Diverse Minds'
              path='https://www.dmshop.ca/products/a-bark-to-be-proud-of'
            />
          </ul>
          <ul data-aos='fade-up' className='cards__items'>
            <Item
              src='https://i.imgur.com/IFZkHKw.jpg'
              text='$2500 scholarship presented by P.E.O. International for exceptional women attending accredited postsecondaries.'
              label='PEO Star Scholar'
              path='https://www.peointernational.org/peo-star-scholarship-star'
            />
            <Item
              src='https://reporter.mcgill.ca/wp-content/uploads/2018/07/SHAD.jpg'
              text='Summer enrichment program at McGill campus. Created robot to clean algae from polluted lakes for annual SHAD design contest.'
              label='SHAD Canada'
              path='https://www.shad.ca/'
            />
          </ul>

          <ul data-aos='fade-up' className='cards__items'>
            <Item
              src='https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_large/public/dsc_1298_full_res__3.jpg?itok=3rMVGwW8'
              text='$2000 entrance scholarship offered by the University of Waterloo for maintaining an average of 95%+.'
              label="President's Scholarship"
              path='https://uwaterloo.ca/future-students/financing/scholarships/presidents-scholarships'
            />
            <Item
              src='https://www.stripes.com/incoming/njo73l-040722rimpac-canadaphoto01.jpg/alternates/LANDSCAPE_910/040722RIMPAC-CANADAphoto01.jpg'
              text='Designed patch for the 2022 Rim of the Pacific (RIMPAC) exercise, winning silver in the competition and recognized by the HMCS navy.'
              label='RIMPAC Design Challenge'
              path="https://en.wikipedia.org/wiki/Exercise_RIMPAC"
            />
          </ul>
          <ul data-aos='fade-up' className='cards__items'>
            <Item
              src='https://www.skillscompetencescanada.com/wp-content/uploads/2021/03/default_grey.png'
              text='Placed bronze in Skills Canada Graphic Design competition by creating logos and brochures for drone company.'
              label='Skills Canada'
              path='https://www.skillscompetencescanada.com/en/'
            />
            <Item
              src='https://i.imgur.com/FzqUJvC.png'
              text='Created artwork tackling social issues. Awarded Finalist and American Visions Nominee by Scholastic, 1 of 5 people in region.'
              label='American Visions Nominee'
              path='https://www.artandwriting.org/'
            />
            </ul>
        </div>
      </div>
      <h2 className="scroll-text" onClick={handleScrollToTop}>Scroll to top</h2>
    </div>
  );
}

export default Card;