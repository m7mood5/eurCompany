import { styled } from "styled-components";
import Containerr from "../components/Container"
import Balls from "../components/Cart/balls";
import Title from "../components/title";
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import data from "../data/db.json";
import { Fragment } from "react";
import ReactPlayer from "react-player"

const Work = () => {

    return (
        <Fragment>
            <Containerr>
                <div className="container">
                    <Content>
                        <Title>خدماتنا</Title>
                        <Balls />
                        <div style={{ padding: "3rem 0" }}>
                            <Container maxWidth="lg">
                                <Box sx={{ width: '100%' }} >
                                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 1, md: 4 }}  >

                                        {data.Servces.map((el) => (
                                            <Grid xs={12} md={4} item key={el.desc}>
                                                <Card sx={{ width: 250, height: 250, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                                    <CardMedia
                                                        sx={{
                                                            height: 50, borderRadius: 1, width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "auto",
                                                        }}
                                                        image={el.icon}
                                                        title={el.title} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5"
                                                            style={
                                                                { textTransform: "capitalize", marginLeft: 10, borderRadius: 2, color: "#217A7E" }
                                                            } textAlign='center' >
                                                            {el.title}
                                                        </Typography>
                                                        <Typography gutterBottom variant="h6"
                                                            style={
                                                                { marginLeft: 10, borderRadius: 2, color: "#000" }
                                                            } textAlign='center' >
                                                            {el.desc}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>

                                        ))}
                                    </Grid>
                                </Box>
                            </Container>
                        </div>
                    </Content>
                </div>
            </Containerr>
            <VContainer>
                <Title>
                    شاهد بعض اعمالنا
                </Title>
                <Balls />
                <Vedio >
                    <ReactPlayer
                        url="https://www.facebook.com/watch/?v=2192784820918382"
                        controls
                        style={{
                            borderRadius: "30px"
                        }}
                    />
                </Vedio>
                <div style={{ padding: "3rem 0" }}>
                    <Container maxWidth="lg">
                        <Box sx={{ width: '100%' }} >
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 1, md: 4 }}  >
                                {data.Vedios.map((el) => (
                                    <Grid xs={12} md={4} item key={el}>
                                        <Card sx={{ width: 250, height: 300, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                            <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2px" }}>
                                                <ReactPlayer
                                                    url={el}
                                                    controls
                                                />
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                ))}
                            </Grid>
                        </Box>
                    </Container>
                    <Typography
                        variant='h6'
                        color='red'
                        textAlign='center'
                        style={{
                            margin: "5px",
                            cursor: "pointer"
                        }}
                    >
                        <a href="https://www.facebook.com/european.elevators/videos" target="_blank">
                            شاهد المزيد
                        </a>
                    </Typography>
                </div>
                <Content>
                    <Title>
                        المنزل لا يوجد به مكان مخصص للمصعد !؟
                    </Title>
                    <Typography
                        variant='h6'
                        color='#042E3C'
                        textAlign='center'
                    >
                        اوقات كثيرة يتم بناء المنزل بدون توفير مكان لعمل المصعد
                        <span style={{
                            color: "#a16825",
                            fontWeight: "bold"
                        }}>
                            , ولكن ليست مشكلة
                        </span>
                        , نحن يمكننا توفير مصعد بدون غرفة ماكينات وكذلك فى اقل المساحات المتوفرة
                    </Typography>
                </Content>
            </VContainer>
        </Fragment>
    )
}
const Content = styled.div`
  width: 90%;
  margin:  auto ;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 30px;
  @media (max-width: 768px) {
    padding: 5px;
    margin:  auto;
  }
`;
const VContainer = styled.div`
    position: relative;
    padding: 3rem;
    background-color: azure;
`;
const Vedio = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    @media (max-width: 768px) {
    margin:  0;
    bottom: -100px;
  }
    `



export default Work