import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2/Grid2';


export const SectionProjects: React.FC = () => {
    return (
        <Box sx={{
        }} component="section">

            <Container maxWidth="lg" component="div" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box >
                    <Typography component="h2" variant="h3" sx={{
                        fontWeight: 'bold', marginTop: "15px", fontSize: {
                            xl: 31,
                            md: 30,
                            sm: 30,
                            xs: 25
                        }
                    }}>
                        Projetos
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ marginTop: "15px" }} paragraph>
                        Explore nosso portfólio de projetos e conheça algumas de nossas soluções.
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >
                        <Grid xs={4}>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    )
}