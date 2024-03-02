import Textbox from "./Textbox.jsx";
import homeText from "./homeText.jsx";
import "./homeStyle.css";

const Home = () => {
  return (
    <body>
      <Textbox textObj={homeText.about} />
      <Textbox textObj={homeText.purpose} />
      <Textbox textObj={homeText.involve} />
      <Textbox textObj={homeText.connect} />
    </body>
  );
};

export default Home;
