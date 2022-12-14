import { TextField } from '../TextFiled/TextField'
import './form.css'
import {Dropdown} from "../Dropdown/Dropdown";

export function Form () {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Endereço da imagem" />
                <Dropdown label="Time" items={times}/>
            </form>
        </section>
    )
}