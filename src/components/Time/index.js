import './time.css'
import {Collaborator} from "../Collaborator/Collaborator";

export function Time(props) {
    return (
        props.collaborators.length > 0 && <section className='time' style={{ background: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='collaborators'>
                {props.collaborators.map(
                    collaborator => <Collaborator
                        key={collaborator.nome}
                        nome={collaborator.nome}
                        cargo={collaborator.cargo}
                        background={props.corPrimaria}
                        imagem={collaborator.imagem}
                    />
                )}
            </div>
        </section>
    )
}