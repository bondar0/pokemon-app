import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <h1 className="text-center font-weight-bold mt-5 mb-5 text-info">
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
