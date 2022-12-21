import './time.css'

export function Time(props) {
    return (
        <section className='time' style={{ background: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

        </section>
    )
}