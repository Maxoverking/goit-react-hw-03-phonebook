import { Section, Title } from "./Wrapper.styled"
import PropTypes from 'prop-types';

export const WrapperForPhonebook = ({ children }) => {
    return (
        <Section>
            <Title>Phonebook</Title>
            {children}
        </Section > 
    )
}
WrapperForPhonebook.propTypes = {
    children: PropTypes.node.isRequired,
}