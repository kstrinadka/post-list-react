import React from 'react';
import classes from './MyInput.module.css'

/**
 * React.forwardRef(). Эта функция позволяет передавать ref (ссылку на DOM-элемент) внутрь компонента.
 * ref является ссылкой на DOM-элемент, который будет присвоен данному компоненту.
 */
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;
