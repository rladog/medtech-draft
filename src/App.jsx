import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Physion from "./projects/Physion.jsx";
import Morphine from "./projects/Morphine.jsx";
import Connecto from "./projects/Connecto.jsx";
import OneTouch from "./projects/OneTouch.jsx";
import Heartsync from "./projects/Heartsync.jsx";
import Archives from "./pages/Archives.jsx";
import PubsSubcomm from "./pages/PubsSubcomm.jsx";
import Recruitment from "./pages/Recruitment.jsx";
import Merchandise from "./pages/Merchandise.jsx";
import Contact from "./pages/Contact.jsx";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  return (
    <Router>
      <div className="App">
        <AppShell />
        <body style={{ minHeight: "100vh", display: "flex" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/physion" element={<Physion />} />
            <Route exact path="/morphine" element={<Morphine />} />
            <Route exact path="/connecto" element={<Connecto />} />
            <Route exact path="/onetouch" element={<OneTouch />} />
            <Route exact path="/heartsync" element={<Heartsync />} />
            <Route exact path="/archives" element={<Archives />} />
            <Route exact path="/pubssubcomm" element={<PubsSubcomm />} />
            <Route exact path="/recruitment" element={<Recruitment />} />
            <Route exact path="/merchandise" element={<Merchandise />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </Router>
  );
}

function Footer() {
  return (
    <footer>
      <Box
        bgcolor={"#121A46"}
        padding={"20px"}
        display="flex"
        justifyContent={"space-around"}
      >
        <div>
          <div className="footer-sponsor-text">Proudly partnered with:</div>
          <div className="footer-sponsor-image-container">
            <img src="/FooterImages/PNG_NUS CDE.png" height="90" width="90" />
            <img
              src="/FooterImages/PNG_NUS Enterprises.png"
              height="90"
              width="90"
            />
            <img src="/FooterImages/PNG_NUS SEC.png" height="90" width="90" />
            <img src="/FooterImages/JPG_BEC.jpg" height="90" width="90" />
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-text">Contact us:</div>
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=nusmedtech.official@gmail.com&tf=1"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            <EmailIcon />
            nusmedtech.official@gmail.com
          </a>
          <a
            href="https://www.instagram.com/nus.medtech/"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            <InstagramIcon />
            nus.medtech
          </a>
          <a
            href="https://t.me/NUSMedTech"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            <TelegramIcon />
            NUS MedTech updates
          </a>
        </div>
      </Box>
    </footer>
  );
}

function AppShell() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#121A46" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="/medtech_logo.png" alt="image" height="50" width="50" />
          </Link>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            component="div"
            onClick={handleHover}
          >
            <Link>Projects▾</Link>
          </Typography>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <Link to="/physion">Physion</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/morphine">Morphine</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/connecto">Connecto</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/onetouch">One Touch</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/heartsync">Heartsync</Link>
            </Typography>
          </Popover>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/archives">Archives</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/pubssubcomm">Pubs Subcomm</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/recruitment">Recruitment</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/merchandise">Merchandise</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/contact">Contact Us</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
