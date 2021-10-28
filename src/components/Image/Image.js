import PropTypes from 'prop-types';

const Image = ({ src, name = 'Pokemon' }) => {
  return <img src={src} className="img-thumbnail" alt={`Image ${name}`} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default Image;
