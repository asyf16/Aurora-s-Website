import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} target="_blank">
          <figure className='cards__item__pic-wrap' data-category={props.label} style = {{background: "black"}} >
            <img
              className='cards__item__img'
              alt='Awards'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {/* <div className='language-wrap'><h2>{props.language}</h2></div> */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default Item;