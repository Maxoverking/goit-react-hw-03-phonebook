import { Label } from "components/Form/Form.styled"
import { Input } from "./Filter.styled"
import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeProps }) => {
    return (
        <>
            <Label>Find contacts by name</Label>
            <Input
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -]
                [a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="May contain only letters"
                value={value}
                onChange={onChangeProps}
                required />
        </>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeProps: PropTypes.func.isRequired,
}