import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

function App() {
  const [qrValue,setQrValue] = useState({
    txt_qr_text:null,
    txt_qr_logo:null,
  });

  const onChange = (e) =>{
    e.preventDefault();
    setQrValue({...qrValue,[e.target.id]: e.target.value});
  }


  return (
        <>
            <div className="container">
              <h1 className='text-center'>Text To QR</h1>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Text</label>
                  <input type="text" className="form-control shadow-none" id="txt_qr_text" onChange={onChange} placeholder="Enter any text to convert into QR" value={qrValue.txt_qr_text} />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Logo</label>
                  <input type="text" className="form-control shadow-none" id="txt_qr_logo" onChange={onChange} placeholder="Enter full logo path" value={qrValue.txt_qr_logo} />
                </div>
              </div>
              {
                qrValue.txt_qr_text && 
                  <>
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                      <QRCode value={qrValue.txt_qr_text} logoImage={qrValue.txt_qr_logo ? qrValue.txt_qr_logo : ""} removeQrCodeBehindLogo={false} logoWidth={50} logoHeight={50} qrStyle={"squares"} eyeRadius={"CornerRadii"}/>
                    </div>
                    <button className="btn btn-primary shadow-none" >Download</button>
                  </>
              }
            </div>
        </>
  );
}

export default App;
