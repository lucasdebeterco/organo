import { Banner } from "./components/Banner/Banner";
import { TextField } from "./components/TextFiled/TextField";

function App() {
  return (
    <h1>
      <Banner />
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Endereço da imagem" />
    </h1>
  );
}

export default App;
