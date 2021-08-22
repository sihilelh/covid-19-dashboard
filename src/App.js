import "./App.css";
import { useEffect, useState } from "react";
import Home from "./views/home";
import Analytics from "./views/analytics";
import Info from "./views/info";
import NavBar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Modal from "./components/modal";
import moment from "moment";
function App() {
  const [ModalActive, setModalActive] = useState(false);
  const [PWAPrompt, setPWAPrompt] = useState(null);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      let isPrompted = localStorage.getItem("is_prompted");
      if (isPrompted === null) {
        setPWAPrompt(e);
        e.preventDefault();
        setModalActive(true);
        localStorage.setItem(
          "is_prompted",
          JSON.stringify({
            at: moment().format("YYYY-MM-DD"),
            installed: true,
          })
        );
      }
    });
  }, []);
  async function InstallApp() {
    setModalActive(false);
    PWAPrompt.prompt();
    const { outcome } = await PWAPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setPWAPrompt(null);
  }
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <main>
          <Route path="/" component={Home} exact></Route>
          <Route path="/analytics" component={Analytics} exact></Route>
          <Route path="/info" component={Info}></Route>
        </main>
      </Switch>
      <Modal
        active={ModalActive}
        closeFn={() => {
          setModalActive(false);
        }}
        installFn={InstallApp}
      ></Modal>
    </BrowserRouter>
  );
}

export default App;
