import { TextField } from '../TextFiled/TextField'
import './form.css'

export function Form () {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Endereço da imagem" />
            </form>
        </section>
    )
}