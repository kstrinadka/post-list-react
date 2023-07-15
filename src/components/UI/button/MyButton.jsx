import React from 'react';
import classes from "./MyButton.module.css";

/**
 * className={classes.myBtn} -> получаем стиль как свойство объекта
 */
const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
