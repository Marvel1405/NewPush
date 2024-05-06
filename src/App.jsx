import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import NavHolder from "./NavHolder.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <Container>
      <Header>
        <HeaderContent>
          <LogoImage src="../public/images/logo.png" />
          <Navs>
            <Nav>Product</Nav>
            <Nav>Features</Nav>
            <Nav>About</Nav>
            <Nav>Support</Nav>
          </Navs>
          <HeaderButton>Login/ Signup</HeaderButton>
          <Hamburger onClick={handleMenu}>
            <MdMenu />
          </Hamburger>
          {showMenu && <NavHolder />}
        </HeaderContent>
      </Header>
      <Hero>
        <LeftHero>
          <HeroHeadText>
            Bottling up the most precious gift of life.
          </HeroHeadText>
          <HeroSubText>
            Our original bottle is needed for everyday hydration. The base
            cylinder is enclosed with vibrium vaccum to help preserve.
          </HeroSubText>
          <HeroButtonText>
            <HeroButton>Buy now</HeroButton>
            <HeroText>
              <IoIosPlay /> Watch how it works
            </HeroText>
          </HeroButtonText>
        </LeftHero>
        <RightHero src="../public/images/Capture.png" />
      </Hero>
    </Container>
  );
}
export default App;
const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    color: gray;
  }
`;
const RightHero = styled.img`
  @media (min-width: 768px) and (max-width: 1044px) {
    width: 100%;
    height: 50%;
    object-fit: contain;
    object-position: center;
    background-repeat: no-repeat;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    display: flex;
    width: 60%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    background-repeat: no-repeat;
  }
  @media (max-width: 425px) {
    display: flex;
    width: 60%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    background-repeat: no-repeat;
  }
`;
const HeroText = styled.button`
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  gap: 5px;
  background-color: #1b1c21;
  font-size: 15px;
  border-radius: 50px;
  border: 1px solid gray;
  cursor: pointer;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
    color: white;
  }
  @media (max-width: 425px) {
    font-size: 13px;
    width: 60%;
  }
`;
const HeroButton = styled.button`
  width: 40%;
  height: 70%;
  background-color: #aab3ba;
  color: #1b1c21;
  font-size: 15px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
  }
  @media (max-width: 425px) {
    font-size: 13px;
    width: 30%;
  }
`;
const HeroButtonText = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 425px) {
    font-size: 13px;
    height: 40px;
    display: flex;
  }
`;
const HeroSubText = styled.div`
  width: 85%;
  height: 80px;
  font-size: 15px;
  font-weight: 200;
  color: #acb1b7;
  @media (max-width: 425px) {
    font-size: 13px;
    height: 70px;
    display: flex;
  }
`;
const HeroHeadText = styled.div`
  width: 85%;
  height: 150px;
  font-size: 37px;
  font-weight: 400;
  color: #acb1b7;
  @media (max-width: 425px) {
    font-size: 18px;
    height: 70px;
    display: flex;
  }
`;
const LeftHero = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media (min-width: 425px) and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 50%;
  }
`;
const Hero = styled.div`
  width: 92%;
  height: 450px;
  margin-top: 130px;
  display: flex;
  align-items: center;
  @media (min-width: 425px) and (max-width: 768px) {
    width: 92%;
    height: 700px;
    flex-direction: column;
    margin-top: 80px;
  }
  @media (max-width: 425px) {
    width: 92%;
    height: 500px;
    flex-direction: column;
    margin-top: 80px;
  }
`;
const HeaderButton = styled.button`
  width: 120px;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  background-color: #1b1c21;
  color: gray;
  border-radius: 50px;
  cursor: pointer;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled.nav`
  cursor: pointer;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
    color: white;
    font-size: 15px;
  }
`;
const Navs = styled.div`
  width: 350px;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  font-size: 13px;
  font-weight: 200;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoImage = styled.img`
  height: 30px;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
`;
const HeaderContent = styled.div`
  width: 92%;
  height: 100%;
  background-color: #1b1c21;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1b1c21;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1b1c21;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 425px) and (max-width: 768px) {
    width: 100%;
    height: 110vh;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
`;
