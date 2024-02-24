import { Container, Row } from "reactstrap";
const About = () => {
  return (
    <Container>
      <Row>
        <h1>About</h1>
      </Row>
      <h2>Thought Records</h2>
      <p>
        "..a practical way to capture and examine your thoughts and feelings
        about a situation, and your evidence for them [...]
      </p>
      <p>
        Doing this can help you understand how linked our thoughts and
        behaviours can be, and how they influence each other.
      </p>
      <p>
        Completing this process is a good way to recognise when thoughts and
        behaviours are unhelpful, and begin to challenge and reframe them in
        different ways."
      </p>
      <p>
        From{" "}
        <a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/thought-record/">
          National Health Service (NHS)
        </a>
      </p>
      <h2>This App</h2>
      <p>
        This app was created in React with React Redux, React Router, React
        Strap, Formik and Bootstrap
      </p>
      <p>
        <em>App created by Jazmin Zuniga</em>
      </p>
    </Container>
  );
};
export default About;
