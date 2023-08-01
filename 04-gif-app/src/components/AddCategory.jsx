import { useState } from "react";
import PropTypes from 'prop-types';

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequired
// }