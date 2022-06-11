import { TextField } from "@mui/material";
import { ThemeButton } from "../../Styles/Global";
import { FormContainer } from "./styles";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";

function Home({setFormData}) {

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Username obrigatório").matches(/^[a-zA-Z ]{1,}$/, "Contêm caracteres inválidos"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
    .min(8, "Mínimo 8 caracteres")
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])[0-9a-zA-Z$*&@#]{8,}/, "Senha muito fraca"),
    confirmPassword: yup.string().required("Repita sua senha").oneOf([yup.ref("password")], "Senhas diferentes")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
  function onSubmitFunction(data) {
    setFormData(data);
    history.push(`/success/${data.name}`)
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <TextField 
            variant="outlined"
            label="Nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <TextField 
            variant="outlined"
            label="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <TextField 
            type="password"
            variant="outlined"
            label="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <TextField 
            type="password"
            variant="outlined"
            label="Confirmar senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <ThemeButton onClick={handleSubmit}>Cadastrar</ThemeButton>
      </form>
    </FormContainer>
  )
}

export default Home;