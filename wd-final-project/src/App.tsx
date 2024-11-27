
import './App.css';
import { HashRouter } from "react-router-dom";
import WebApp from './WebApp';

export default function App() {
  return (
    <HashRouter>
      <div>
        <WebApp />
      </div>
    </HashRouter>
  );
}

