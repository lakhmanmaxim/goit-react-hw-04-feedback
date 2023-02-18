import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return (
    <>
      <section>
        <h2>{title}</h2>
      </section>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
