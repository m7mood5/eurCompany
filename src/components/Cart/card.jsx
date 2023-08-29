import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import data from "../../data/db.json"
import { CardMedia, Container, Grid } from '@mui/material';
import { styled } from 'styled-components';
import style from "./Card.module.css"
import Balls from './balls';
import Title from "../title"
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Main >
            <Title>
                <Link to="/galary/work1" style={{
                    borderRadius: "5px",
                    border: "1px solid red"
                }}>مشاهدة المعرض</Link>

            </Title>
            <Balls />
            <div className={style.TypesC}>
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }} >
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 1, md: 4 }}  >
                            {data.Details.map((el) => (
                                <Grid xs={12} md={4} item key={el.desc}>
                                    <Card sx={{ width: 250, height: 250, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                        <CardMedia
                                            sx={{
                                                height: 50, borderRadius: 5, width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "auto",
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
        </Main>
    )

}
const Main = styled.div`
padding: 3rem 0;
    background-color:#cbd4d9 ;
    position: relative;
    
`;
export default Cart;
