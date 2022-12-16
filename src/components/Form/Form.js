import { TextField } from '../TextFiled/TextField'
import './form.css'
import {Dropdown} from "../Dropdown/Dropdown";
import { Button } from '../Button/Button';

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

    const onSave = (event) => {
        event.preventDefault()

        console.log("Form foi enviado")
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados do colaborador</h2>
                <TextField required label="Nome" placeholder="Digite seu nome" />
                <TextField required label="Cargo" placeholder="Digite seu cargo" />
                <TextField required label="Imagem" placeholder="Endereço da imagem" />
                <Dropdown required label="Time" items={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}