import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
        <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value="http://rfconnect.in/"
        viewBox={`0 0 256 256`}
        />
    </div>
    </div>
  );
}

export default App;
