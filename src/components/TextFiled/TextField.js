import './textField.css'

export function TextField(props) {
    const placeholder = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>

            <input
                value={props.value}
                onChange={event => props.onChanged(event.target.value)}
                required={props.required}
                placeholder={placeholder}
            />
        </div>
    )
}