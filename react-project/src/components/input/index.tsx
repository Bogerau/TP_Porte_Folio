import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"


const InputComponents = (props: {
    placeholder: string;
    type: string;

}) => {
    return <input placeholder={props.placeholder} type={props.type}></input>
}

export default InputComponents