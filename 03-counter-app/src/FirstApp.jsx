import PropTypes from 'prop-types';

const name = 'José';
const lastName = 'Encalada';

const message = {
    title: 'Test',
    description: 'A short text'
}

// const getNameAndLastName = () => {
//     return `${name} ${lastName}`;
// }

function getNameAndLastName() {
  return `${name} ${lastName}`;  
} 

export const FirstApp = ({ title, subTitle, text }) => {

    return (
        <>
        <h1>{ title }</h1>
        <h3>{ subTitle }</h3>
        <h3>{ text }</h3>
        <p>My name is : {name}</p>
        <p>My Full name is : {getNameAndLastName()}</p>
        <code> { JSON.stringify(message)} </code>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No Title',
    subTitle: 'No subtitle',
    text: 'Pepe'
}