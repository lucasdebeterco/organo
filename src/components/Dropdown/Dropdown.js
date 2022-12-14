import './dropdown.css';

export function Dropdown(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}