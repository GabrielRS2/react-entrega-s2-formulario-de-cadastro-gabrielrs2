import { WelcomeContainer } from "./styles";
import { motion } from "framer-motion";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { ThemeButton } from "../../Styles/Global";

function Welcome({formData}) {
  const history = useHistory();
  const params = useParams();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        duration: 2
      }
    }
  }

  function goHome() {
    history.push("/")
  }


  return (
    <WelcomeContainer>
      {!formData.name && (
        <Redirect to="/"/>
      )}
      <p>Parabéns {params.name} agora você é um super sayajin!!! </p>
      <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      >
        <img alt="goku" src="https://www.kindpng.com/picc/m/355-3555342_thumb-image-goku-thumbs-up-png-transparent-png.png"/>
      </motion.div>
      <ThemeButton onClick={goHome}>Voltar</ThemeButton>
    </WelcomeContainer>
  )
}

export default Welcome;