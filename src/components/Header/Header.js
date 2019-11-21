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
  backgroundImage: PropTypes.string.isRequired,
  bannerText: PropTypes.string,
}

Header.defaultProps = {
  backgroundImage: "https://media.istockphoto.com/photos/beautiful-pink-peony-flowers-on-white-table-with-copy-space-for-your-picture-id806870408?k=6&m=806870408&s=612x612&w=0&h=66tVRT5Rdsj5AbnggABG75HVO8qF40Ems1Mfdb1siFU="
}
