import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";

function App() {
  const color = useSelector((state) => state.theme.value);

  return (
    <div className="App" style={{ color: color }}>
      <Profile />
      <Login />
      <Theme />
    </div>
  );
}

export default App;
