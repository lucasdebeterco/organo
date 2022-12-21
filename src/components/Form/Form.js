import { TextField } from '../TextFiled/TextField'
import './form.css'
import {Dropdown} from "../Dropdown/Dropdown";
import { Button } from '../Button/Button';
import {useState} from "react";

export function Form (props) {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onNewCollaborator({
            nome,
            cargo,
            imagem,
            time,
        });
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados do colaborador</h2>
                <TextField
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChanged={value => setNome(value)}
                />

                <TextField
                    required
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChanged={value => setCargo(value)}
                />

                <TextField
                    required
                    label="Imagem"
                    placeholder="Endereço da imagem"
                    value={imagem}
                    onChanged={value => setImagem(value)}
                />

                <Dropdown
                    required
                    label="Time"
                    items={times}
                    value={time}
                    onChanged={value => setTime(value)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}