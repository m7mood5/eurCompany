import { Fragment, useState } from "react"
import Containerr from "../components/Container"
import { styled } from "styled-components";
import Title from "../components/title";
import Balls from "../components/Cart/balls";
import { Box, Card, CardContent, Container, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import data from "../data/db.json";
import { Link, useLocation } from "react-router-dom";

const Gallary = () => {
    const { pathname } = useLocation();

    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Fragment>
            <Containerr>
                <LandingImg>
                    <img src="../../public/assets/cover.jpg" alt="" />
                </LandingImg>
                <div className="container">
                    <Content>
                        <Title>
                            <ToggleButtonGroup
                                color="error"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="work">
                                    <Link to="/galary/work1">المصاعد</Link>
                                </ToggleButton>
                                <ToggleButton value="ghiar">
                                    <Link to="/galary/work2">قطع الغيار</Link>

                                </ToggleButton>
                                <ToggleButton value="ios">
                                    <Link to="/galary/work3"> اشكال الأبواب</Link>

                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Title>
                        <Balls />
                        <div style={{ padding: "3rem 0" }}>
                            <Container maxWidth="lg">

                                <Box sx={{ width: '100%' }} >
                                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 1, md: 4 }}  >
                                        {pathname === "/galary/work3" ?

                                            data.Door.map((el) => (
                                                <Grid xs={12} md={3} item key={el.id}>
                                                    <Card sx={{ width: 250, height: 280, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                                        <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2px" }}>
                                                            <img src={el.img} alt={el.prifx} />
                                                        </CardContent>
                                                    </Card>
                                                </Grid>

                                            ))
                                            : pathname === "/galary/work2" ?

                                                data.Ghiar.map((el) => (
                                                    <Grid xs={12} md={3} item key={el.id}>
                                                        <Card sx={{ width: 270, height: 300, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                                            <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2px" }}>
                                                                <img src={el.img} alt={el.prifx} />
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>

                                                ))

                                                : pathname === "/galary/work1" ?
                                                    data.work.map((el) => (
                                                        <Grid xs={12} md={3} item key={el.id}>
                                                            <Card sx={{ width: 270, height: 330, borderRadius: 2, boxShadow: "-moz-initial", backgroundColor: "transparent" }} >
                                                                <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2px" }}>
                                                                    <img src={el.img} alt={el.prifx} />
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>

                                                    )) : null
                                        }
                                    </Grid>
                                </Box>
                            </Container>
                        </div>
                        <Title>
                            <a href="https://www.facebook.com/european.elevators" target="_blank" style={{
                                borderRadius: "5px",
                                border: "1px solid red"
                            }}>مشاهدة المزيد</a>

                        </Title>
                    </Content>
                </div>
            </Containerr>
        </Fragment>
    )
}
const LandingImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(130vh + 50px);
  z-index: -1;
  overflow: hidden;
  border-radius: 5%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ECF1F4;
    opacity: 0.7;
    z-index: 1;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Content = styled.div`
  width: 100%;
  margin:  auto ;
  border-radius: 15px;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 5px;
    margin:  auto;
  }
`;

export default Gallary