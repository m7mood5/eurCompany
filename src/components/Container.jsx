import { styled } from "styled-components";

const Container = ({ children }) => {
    return (
        <Main>{children}</Main>
    )
}

const Main = styled.div`
padding: 3rem 0;    
position: relative;
    
`;

export default Container