import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container';
import { styled } from 'styled-components';
import Title from '../title';
import { Typography } from '@mui/material';
import "./Contact.css"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_k5v0nt8",
            "template_k4z8cux",
            form.current,
            "dOiDBv71hFIQjNBJ5"
        )
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                toast("Email Sent Successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    type: "success"
                });
            }, (error) => {
                console.log(error.text);
                toast("Failed to send email", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    type: "error"
                });
            });
    };

    return (
        <Container>
            <Content>
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon" />
                            <h4>Email</h4>
                            <h5>info@europeanllc.com</h5>
                            <a href="mailto:info@europeanllc.com" target="_blank" rel="noreferrer">ارسال رسالة </a>
                        </article>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Massager</h4>
                            <h5>الشركة الأوربية</h5>
                            <a href="https://www.facebook.com/european.elevators" target="_blank" rel="noreferrer">ارسال رسالة </a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>+201000016176</h5>
                            <a href="https://api.whatsapp.com/send?phone=%2B201220199222&data=ARAeeK8JuZL1-aL9Fupj22zB5K8jPVYYnKCZEfEF1_cYluqlq5Nls7wAqBIK6i2BkDtSG1S4RLGX5IlLMrD7VCmNst5kde_dWdx5KNAEk0SnANbrhxPQN07KU7Fb6D6gJGLEiJqFLX8pdyo5VLO2ek2nZg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3ldy4-cnfFS1F8CH5AA4Nkg5lxqLMuftUaSYapAlkUiyy-1L3MVW7iAIM" target="_blank" rel="noreferrer">ارسال رسالة </a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="الاسم" required />
                        <input type="text" name="num" placeholder="رقم الهاتف" required />
                        <textarea name="message" rows="7" placeholder="الرسالة" required  ></textarea>
                        <button type="submit" className="btn btn-primary">ارسال</button>
                    </form>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light" />
                </div>
            </Content>
            <Content>
                <Title>
                    سنكون سعداء فى تقديم المساعدة والاستشارة
                </Title>
                <Typography
                    variant='h6'
                    color='#042E3C'
                    textAlign='center'
                >
                    هل لديك اى استفسار او سؤال ؟ تواصل معنا وسنسعى جاهدين لتقديم المساعدة
                    <span style={{
                        color: "#a16825",
                        fontWeight: "bold",
                        margin: "2px"
                    }}>
                        اتصل بنا
                    </span>
                    خدمه على مدار اليوم في اي وقت واينما كنت
                </Typography>
            </Content>
        </Container>
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

export default Contact  