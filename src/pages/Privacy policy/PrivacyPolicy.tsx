import { Box, Container, Typography } from "@mui/material";

export const Privacypolicy: React.FC = () => {
  return (
    <Box sx={{ py: 20 }}>
      <Container>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Última atualização: 24/04/2024
        </Typography>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Política de Privacidade para o aplicativo Película Compatível
        </Typography>
        <Typography>
          A JFC Tecnologia opera o aplicativo móvel Película Compatível,
          oferecendo o serviço de listagem de compatibilidade de películas.
        </Typography>
        <Typography>
          Esta política de privacidade informa sobre como são tratadas as
          informações coletadas pelo aplicativo Película Compatível.
        </Typography>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Informações Coletadas
        </Typography>
        <Typography>
          Não coletamos dados pessoais identificáveis dos usuários do aplicativo
          Película Compatível. As informações coletadas são estritamente
          relacionadas ao funcionamento do aplicativo, como informações de
          dispositivo e estatísticas de uso.
        </Typography>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Uso de Informações
        </Typography>
        <Typography>
          As informações coletadas são usadas para melhorar a experiência do
          usuário e otimizar o desempenho do aplicativo Película Compatível. Não
          compartilhamos essas informações com terceiros.
        </Typography>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Consentimento do Usuário
        </Typography>
        <Typography>
          Ao utilizar o aplicativo Película Compatível, você concorda com a
          coleta e uso das informações conforme descrito nesta política de
          privacidade.
        </Typography>
        <Typography
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", my: "10px" }}
        >
          Contato
        </Typography>
        <Typography>
          Se você tiver alguma dúvida sobre esta política de privacidade, entre
          em contato conosco através
        </Typography>

        <Typography>E-mail: jfctecnologia16@gmail.com</Typography>
        <Typography>Telefone: (35) 99900-7141</Typography>
      </Container>
    </Box>
  );
};
