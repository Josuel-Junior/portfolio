import { Link } from "react-scroll";
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"
import { Box, Button, Container, Divider, Typography } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;


export const StructureFifo: React.FC = () => {

    const navigate = useNavigate()
    const [arrayFila, setArrayFila] = useState<number[]>([])


    const handleAddArrayFila = () => {
        if (arrayFila.length <= 5) {
            setArrayFila(prev => [...prev, (prev.length > 0 ? prev[prev.length - 1] : 0) + 1]);
        }

    }

    const handleRemoveArrayFila = () => {
        const newArray = [...arrayFila]
        newArray.shift()
        setArrayFila(newArray)
    }

    const handleNavigateLifo = () => {
        navigate("/structureLifo")
    }

    return (
        <>
            <LayoutSectionInitial
                background={backgroundHome}
                title="Estrutura de dados de Fila"
                subTitle='Entenda estrutura de dados de forma Visual '
                button={
                    <Link to="structureFila" smooth={true} duration={500}>
                        <Button variant="contained" size="large" href="">Leia mais</Button>
                    </Link>
                } />


            <Box sx={{ my: "20px" }} id="structureFila">
                <Container>
                    <Typography component="h2" sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}>
                        Estrutura de Dados de Fila
                    </Typography>
                    <Typography paragraph>
                        Durante meus estudos sobre estruturas de dados, surgiu a ideia de
                        representar visualmente a estrutura de dados de uma Fila,
                        Nesta seção, vou explicar o funcionamento dessa estrutura, e em seguida, você poderá visualizá-la de forma gráfica.
                    </Typography>
                    <Typography paragraph>
                        Veja também sobre a estrutura de Pilha <Button onClick={handleNavigateLifo}>ver sobre</Button>
                    </Typography>
                    <Typography paragraph>
                        Uma fila é uma coleção ordenada de itens baseada em FIFO
                        (First In First Out, isto é, o primeiro que entra é o primeiro que sai)
                        A operação de adição de novos elementos em uma fila ocorre no final da fila,
                        também conhecido como "cauda" (tail), enquanto a remoção de elementos ocorre
                        na frente da fila.
                    </Typography>
                    <Typography paragraph>
                        Um exemplo seria a fila de uma lotérica, onde o primeiro cliente a chegar será o
                        primeiro a ser atendido,
                        enquanto o último da fila será o último a ser atendido. A cada cliente atendido,
                        o cliente anterior se torna o próximo a ser atendido e, com isso, o próximo a sair da fila.
                    </Typography>
                    <Typography paragraph>
                        Vamos criar nossa estrutura de Fila baseada em Array, e a
                        linguagem escolhida será o JavaScript. Para isso, utilizaremos os métodos
                        da classe Array. A seguir, proporcionarei uma breve explicação sobre os métodos
                        utilizados.
                    </Typography>
                    <Divider />
                    <Typography component="h3" sx={{ fontWeight: "bold" }}>
                        Inserir elementos na fila
                    </Typography>
                    <Typography paragraph>
                        O primeiro método que vamos usar é o método push, responsável pela adição de
                        novos elementos na pilha, Esse
                        método será responsável pela adição de novos elementos na fila, com um
                        detalhe muito importante: só podemos adicionar novos itens no final da
                        fila. O método push é representado assim:
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        const fila = [];
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        fila.push("Primeiro valor inserido")
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        fila.push("Segundo valor inserido")
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        console.log(fila)
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                       // saída: [0:"Primeiro valor inserido",1:"Segundo valor inserido"];
                    </Typography>
                    <Divider />
                    <Typography component="h3" sx={{ fontWeight: "bold" }}>
                        Remover elementos da fila
                    </Typography>
                    <Typography paragraph>
                        O  método shift é responsável pela remoção de itens da fila.
                        Como a fila utiliza o princípio FIFO, o primeiro item adicionado é aquele
                        que será removido. Por esse motivo, podemos usar o método shift da classe Array.
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        const fila = ["Primeiro valor inserido","Segundo valor inserido"];
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        fila.shift()
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                        console.log(fila)
                    </Typography>
                    <Typography paragraph sx={{ fontWeight: "bold" }}>
                       // saída: const fila = [0:"Segundo valor inserido"];
                    </Typography>
                </Container>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "80vh" }}>
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                    Entenda de forma visual o funcionamento desta estrutura
                </Typography>
                <Box sx={{ minHeight: "50vh", display: "flex", justifyContent: "end", flexDirection: "column", my: "5px" }}>
                    {arrayFila?.slice().reverse().map((item, id) => {
                        return (
                            <Container key={id} sx={{ display: "flex", flexDirection: "column" }}>
                                <Box sx={{ background: "blue", width: "50px", borderRadius: "5px", my: "5px", display: "flex", flexDirection: "column-reverse" }}>
                                    <Typography color="secondary" sx={{ textAlign: "center" }}>
                                        {item - 1}
                                    </Typography>
                                </Box>
                            </Container>
                        );
                    })}
                </Box>
                <Box>
                    <Button variant="contained" onClick={() => handleAddArrayFila()}>Inserir </Button>
                    <Button variant="contained" onClick={() => handleRemoveArrayFila()} sx={{ mx: "5px" }}>Remover</Button>
                </Box>
            </Box>
        </>
    )
}