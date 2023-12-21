import { Container, Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { creatingArray } from "../../utils/fromArray";

interface ISkeletonOfDisplay {
    numberOfSkeleton: number
    widthSkeleton: number
    heightSkeleton: number
}

export const SkeletonCoponent: React.FC<ISkeletonOfDisplay> = ({ numberOfSkeleton, widthSkeleton, heightSkeleton }) => {

    const skeletonNumbers = creatingArray(numberOfSkeleton)

    return (
        <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >
                {skeletonNumbers.map((item: number, index: number) => {
                    return (
                        <Grid xs={4} key={index}>
                            <Skeleton variant="rectangular" width={widthSkeleton} height={heightSkeleton} sx={{margin:"auto"}}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}