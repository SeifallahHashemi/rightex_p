import React, {forwardRef} from 'react';
import classes from "./radio-button.module.css";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

// type InputProps = React.HTMLProps<HTMLInputElement>
interface InputProps extends InputAttributes {
    name: string;
    value: string;
    id: string;
    className?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setCheckedInput: (checkedInput: any) => void;
}
const RadioButton = forwardRef<HTMLInputElement ,InputProps>((props, ref) => {
    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked !== undefined) {
            props.setCheckedInput((prevState: any) => ({
                [e.target.value]: e.target.checked,
            }))
        }
    }
    return (
        <>
            <input className={`${props.className} ${classes.radioBtn}`} type={"radio"} name={props.name} id={props.id}
                  value={props.value} ref={ref} onChange={onChangeInputHandler}/>
            <label htmlFor={props.id}>{props.value}</label>
        </>
    );
});

RadioButton.displayName = 'RadioButton';
export default RadioButton;