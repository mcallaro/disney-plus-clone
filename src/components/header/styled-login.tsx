import styled from 'styled-components';

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/login-background.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 30px;
  width: 100%;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 400;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0,0%,75.3%,.8);
  font-size: 11px;
  font-weight: normal;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1px;
`;

const DescriptionTwo = styled.p`
  color: hsla(0,0%,75.3%,.8);
  font-size: 1.1em;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: .01em;
  margin: 0;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  transition: transform .4s;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  DescriptionTwo,
  CTALogoTwo
};