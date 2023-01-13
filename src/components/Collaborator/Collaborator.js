import './collaborator.css'

export function Collaborator({nome, imagem, cargo, background}) {
    return (
        <div className='collaborator'>
            <div className='header'style={{ backgroundColor: background }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='collaborator-footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}