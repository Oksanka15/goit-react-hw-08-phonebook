import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionBox>
      <h2>{title}</h2>
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};