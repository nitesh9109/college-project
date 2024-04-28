import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ChatBot from '../screens/ChatBotScreen'

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <ChatBot />
      ) : (
        <div className=' py-5'>
          <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>


              <h1 className='text-center mb-4 text-dark'>AI ChatBot</h1>
              <p className='text-center mb-4 text-dark'>
                Welcome to our AI Chatbot App! Powered by the cutting-edge Google Gemini API, our chatbot is designed to provide intelligent and seamless conversations. Whether you're looking to login or register, our user-friendly interface makes interaction effortless. Experience the future of conversational AI today!
              </p>
              <div className='d-flex'>
                <LinkContainer to='/login'>
                  <Button variant='primary' className='me-3 bg-primary text-white'>
                    Sign In
                  </Button>
                </LinkContainer>

                <LinkContainer to='/register'>
                  <Button variant='secondary' className="bg-primary text-white">Register</Button>
                </LinkContainer>
              </div>
            </Card>
          </Container>
        </div>
      )}


    </>
  );
};

export default Hero;
