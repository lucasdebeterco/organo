import './textField.css'

export function TextField(props) {
    const placeholder = `${props.placeholder}...`
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={placeholder} />
        </div>
    )
}