import React from "react";

import styles from './Card.module.css';

const Card = (props) => {
    return <div className={`${styles.card} ${props.className}`}>
        {props.children} {/*get the content passed between opening and closing tag of the components where found*/}
    </div>;
}

export default Card;