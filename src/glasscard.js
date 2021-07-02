import React from 'react';
import profile from './images/card.jpg';
import styled from 'styled-components'; 
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block; 
background: #000;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
    width: 400px;
    height: auto;
    border-radius: 10px 10px 0px 0px;
`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5; 
    font-family: "Calibri";
`;

const StyledH3 = styled.h3` 
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Calibri";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container 
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[1,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <StyledH1>Usuario Administrador</StyledH1>
            <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3>
        </Container>
    );
}

export default GlassCard; 
 