import React from 'react'
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {

  let styles = {
   height: '500px',
   backgroundImage: `url(${props.backgroundImage})`,
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover'
 };

  return (
    <div className="header" style={styles}>
    <div className="banner-text">
      <p>
        {props.bannerText}
      </p>
    </div>
    </div>
  )
}
export default Header

Header.propTypes = {
  backgroundImage: PropTypes.string,
  bannerText: PropTypes.string,
}
