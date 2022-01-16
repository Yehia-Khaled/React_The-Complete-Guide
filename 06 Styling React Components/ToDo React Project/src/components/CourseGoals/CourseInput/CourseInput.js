import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false)
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles['form-control']} ${!isValid && styles.invalid}`}>{/*`form-control ${!isValid ? 'invalid ' : ''}`*/}
                <label>Course Goal</label> {/*inline style: {color: !isValid ? 'red' : 'black'}*/}
                <input
                    type="text"
                    onChange={goalInputChangeHandler}/> {/*inline style:{borderColor: !isValid ? 'red' : '#ccc', background: !isValid ? 'salmon' : 'transparent'}*/}
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
