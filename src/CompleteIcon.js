import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type = "check"
            color = {completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };

//React Icons: https://react-icons.github.io/react-icons/  Comant: npm install react-icons --save