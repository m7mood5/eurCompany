import { styled } from "styled-components";
import { motion } from 'framer-motion'
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Hero() {
    return (
        <Container>
            <div className="container">
                <Content>
                    <Grid container rowSpacing={2} justifyContent='space-between' alignItems='center'>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ textAlign: { xs: 'center', md: 'right' }, zIndex: '2' }}
                            textAlign='right'
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 1,
                                    delay: 0.4,
                                }}
                            >
                                <Typography
                                    display='flex:'
                                    variant='h1'
                                    color='textPrimary'
                                    sx={{
                                        fontWeight: { xs: '300', sm: '500', lg: '700' },
                                        fontSize: {
                                            xs: 'h3.fontSize',
                                            sm: 'h2.fontSize',
                                            lg: 'h1.fontSize',
                                        },
                                        margin: "30px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    EUROPEAN
                                </Typography>

                                <Typography
                                    display='flex'
                                    variant='h5'
                                    color='textPrimary'
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "h5",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "30px",
                                    }}
                                >
                                    متخصصون فى تركيب وصيانة المصاعد المنزلية والسلالم الكهربائية
                                    وتقديم جميع خدمات المصاعد من ” تركيب مصاعد , صيانة المصاعد . تطوير المصاعد والحلول الهندسية الخاصة بالمصاعد ”
                                </Typography>
                                <Start>
                                    <Link to="/contact">اتصل بنا</Link>
                                </Start>

                            </motion.div>
                        </Grid>
                        <Grid
                            item
                            xs="auto"
                            md={4}
                            sx={{ mt: { xs: -30, md: 0 } }}
                            textAlign='left'
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 70 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 1,
                                    delay: 0.4,
                                }}
                            >
                                <Imag src="../../public/logo.jpg" />

                            </motion.div>
                        </Grid>

                    </Grid>
                </Content>
            </div>
        </Container>
    );
}
const Container = styled.section`
  height: calc((100vh + 50px) - (134.4px + 79.6px));
  @media (max-width: 768px) {
    height: calc(100vh - (100px + 101.2px));
  }
`;
const Content = styled.div`
  width: 90%;
  height:435px;
  max-width: 100%;
  margin: 0 auto 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 60px;
  @media (max-width: 768px) {
    padding: 5px;
    margin:  auto;
  }
`;
const Imag = styled.img`
width:300px;
height:300px;
display:"flex";
align-items: "center";
justify-content: "center";
margin: "auto";
overflow: "hidden";
border-radius: 25%;
@media (max-width: 768px) {
   display: none;
  }
`;
const Start = styled.div`
  width: fit-content;
  height: 35px;
  margin: 5px;
  border-radius: 10px;
  background-color: red;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc062f;
    transition: all 0.3s ease;
    height: 38px;
  }
  a,
  button {
    background: transparent;
    cursor: pointer;
    padding: 0 15px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    color: white;
    
  &:hover {
    background-color: #cc062f;
    transition: all 0.3s ease;
    font-weight: bold;
    border-radius: 5px;
  }
  }
`;

export default Hero;