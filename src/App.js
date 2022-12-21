import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";
import {useState} from "react";

function App() {
    const [collaborators, setCollaborators] = useState([]);
    const onAddCollaborator = (collaborator) => {
        console.log(collaborator)
        setCollaborators([...collaborators, collaborator])
    }
    return (
        <h1>
            <Banner />
            <Form onNewCollaborator={collaborator => onAddCollaborator(collaborator)} />
        </h1>
  );
}

export default App;
