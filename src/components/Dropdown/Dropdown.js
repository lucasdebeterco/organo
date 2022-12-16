import './dropdown.css';

export function Dropdown(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}