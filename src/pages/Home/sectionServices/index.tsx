import { Box, Container, Typography } from '@mui/material'
import { ServiceInfo } from "../../../shared/interfaces/index"
import { DisplayService } from '../../../shared/components/displayService/displayService';



interface ISectionServicesProps {
    textServices: ServiceInfo[];
}

export const SectionServices: React.FC<ISectionServicesProps> = ({ textServices }) => {
    return (
        <Box sx={{ width: "100vw" }} component={"section"} >
            <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{
                        fontWeight: 'bold', marginTop: "15px", fontSize: {
                            xl: 31,
                            md: 30,
                            sm: 30,
                            xs: 25
                        },
                    }} variant='h3' component="h2">
                        Nossos Serviços
                    </Typography>
                    <Typography sx={{ mt: "15px" }} paragraph>
                        Com a era digital em constante evolução, oferecemos soluções sob medida para atender às suas necessidades. Descubra como nossos serviços podem impulsionar sua empresa ou seu negócio online.
                    </Typography>
                </Box>

                <DisplayService serviceInformation={textServices} />

            </Container>
        </Box>
    )
}