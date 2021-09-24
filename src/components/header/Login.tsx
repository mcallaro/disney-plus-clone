import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  DescriptionTwo,
  CTALogoTwo
} from './styled-login';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="hulu, Disney+ and ESPN+" />
          <SignUp>Get the Disney Bundle</SignUp>
          <Description>Stream now. <a href="/">Terms apply.</a></Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="Disney + Pixar + Marvel + Star Wars + National Geographic" />
          <DescriptionTwo>$7.99/month or $79.99/year.</DescriptionTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;