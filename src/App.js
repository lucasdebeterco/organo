import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";
import {useState} from "react";
import {Time} from "./components/Time";

function App() {
    const [collaborators, setCollaborators] = useState([]);
    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57c278',
            corSecundaria: '#d9f7e9',
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82cffa',
            corSecundaria: '#e8f8ff',
        },
        {
            nome: 'Data Science',
            corPrimaria: '#a6d157',
            corSecundaria: '#f0f8e2',
        },
        {
            nome: 'Devops',
            corPrimaria: '#e06b69',
            corSecundaria: '#fde7e8',
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#db6ebf',
            corSecundaria: '#fae9f5',
        },
        {
            nome: 'Mobile',
            corPrimaria: '#ffba05',
            corSecundaria: '#fff5d9',
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#ff8a29',
            corSecundaria: '#ffeedf',
        }
    ]
    const onAddCollaborator = (collaborator) => {
        setCollaborators([...collaborators, collaborator])
    }
    return (
        <h1>
            <Banner />
            <Form times={times.map(time => time.nome)} onNewCollaborator={collaborator => onAddCollaborator(collaborator)} />

            {times.map(
                time => <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
                />
            )}
        </h1>
  );
}

export default App;
