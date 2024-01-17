import { Link } from "react-scroll";
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"
import { Box, Button, Container, Divider, Typography } from "@mui/material";

import { useState } from "react";

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;


export const StructureLifo: React.FC = () => {

  const [arrayPilha, setArrayPilha] = useState<number[]>([])


  const handleAddArrayPilha = () => {
    if (arrayPilha.length <= 6) {
      setArrayPilha(prev => [...prev, prev.length + 1 - 1]);
    }

  }

  const handleRemoveArrayPilha = () => {
    const newArray = [...arrayPilha]
    newArray.pop()
    setArrayPilha(newArray)
  }

  return (
    <>
      <LayoutSectionInitial
        background={backgroundHome}
        title="Estrutura de dados de Pilha"
        subTitle='Entenda estrutura de dados de forma Visual '
        button={
          <Link to="structureLifo" smooth={true} duration={500}>
            <Button variant="contained" size="medium" href="">Leia mais</Button>
          </Link>
        } />


      <Box sx={{ my: "20px" }} id="structureLifo">
        <Container>
          <Typography component="h2" sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}>
            Estrutura de Dados de Pilha
          </Typography>
          <Typography paragraph>
            Durante meus estudos sobre estruturas de dados, surgiu a ideia de representar visualmente a estrutura de dados de uma pilha.
            Nesta seção, vou explicar o funcionamento dessa estrutura, e em seguida,
            você poderá visualizá-la de forma gráfica.
          </Typography>
          <Typography paragraph>
            Uma pilha é uma coleção ordenada de itens que obedece ao princípio
            LIFO (Last In First Out, isto é, o último a entrar é o primeiro a sair).
            A adição de novos itens ou a remoção de itens existentes ocorrem na mesma
            extremidade. A extremidade da pilha é conhecida como topo, enquanto o lado oposto é
            conhecido como base. Os elementos mais novos ficam próximos ao topo, e os elementos
            mais antigos estão próximos da base.
            Temos vários exemplos de pilhas na vida real, por exemplo, uma pilha de livros, ou uma
            pilha de bandejas em uma lanchonete.
          </Typography>
          <Typography paragraph>
            Vamos criar nossa estrutura de Pilha baseada em Array, e a
            linguagem escolhida será o JavaScript. Para isso, utilizaremos os métodos
            da classe Array. A seguir, proporcionarei uma breve explicação sobre os métodos
            utilizados.
          </Typography>
          <Divider />
          <Typography component="h3" sx={{ fontWeight: "bold" }}>
            Inserir elementos na pilha
          </Typography>
          <Typography paragraph>
            O primeiro método que vamos usar é o método push, responsável pela adição de
            novos elementos na pilha, com um detalhe muito importante: só podemos adicionar novos
            itens no topo da pilha, isto é, no final dela. O método push é representado assim:
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            const pilha = [];
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            pilha.push("Primeiro valor inserido")
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            pilha.push("Segundo valor inserido")
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            console.log(pilha)
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            //saída: [0:"Primeiro valor inserido",1:"Segundo valor inserido"];
          </Typography>
          <Divider />
          <Typography component="h3" sx={{ fontWeight: "bold" }}>
            Remover elementos da pilha
          </Typography>
          <Typography paragraph>
            O  método pop é responsável pela remoção de itens da pilha.
            Como a pilha utiliza o princípio LIFO, o último item adicionado é aquele
            que será removido. Por esse motivo, podemos usar o método pop da classe Array.
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            const pilha = ["Primeiro valor inserido", "Segundo valor inserido"];
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            pilha.pop()
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            console.log(pilha)
          </Typography>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            //saída: [0:primeiro valor inserido];
          </Typography>
        </Container>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "80vh" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
          Entenda de forma visual o funcionamento desta estrutura
        </Typography>
        <Box sx={{ minHeight: "50vh", display: "flex", justifyContent: "end", flexDirection: "column", my: "5px" }}>
          {arrayPilha?.slice().reverse().map((item, id) => {
            return (
              <Container key={id} sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ background: "blue", width: "50px", borderRadius: "5px", my: "5px", display: "flex", flexDirection: "column-reverse" }}>
                  <Typography color="secondary" sx={{ textAlign: "center" }}>
                    {item}
                  </Typography>
                </Box>
              </Container>
            );
          })}
        </Box>
        <Box>
          <Button variant="contained" onClick={() => handleAddArrayPilha()}>Inserir </Button>
          <Button variant="contained" onClick={() => handleRemoveArrayPilha()} sx={{ mx: "5px" }}>Remover</Button>
        </Box>
      </Box>
    </>
  )
}