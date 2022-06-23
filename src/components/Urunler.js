import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

function Urunler() {
    var urunler = JSON.parse(sessionStorage.getItem("urunler"));
    let parametreler = useParams();
    var filtreli = [];
    console.log(parametreler);
    if(parametreler.ara!=null){
      urunler.forEach(urun => {
        if(urun.ad.toLowerCase().includes(parametreler.ara.toLowerCase())){
          filtreli.push(urun);
        }
      });
    }
    else{
      filtreli = urunler;
    }
    return (
    <div>
        <Header/>
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className='container pb-5 mb-5 blockquote'>
        {filtreli.map((urun,index)=>(
          <div className='row p-3 m-2 border' style={{background:'rgba(19,15,150,0.3)'}}>
            <div className='col-md-6'><div className='d-flex flex-column w-75' ><img src={require("../../src/img/"+urun.resim)} /></div></div>
            <div className='col-md-6'><h3>{urun.ad}</h3> 
            <p>Ürün Fiyatı: {urun.fiyat}₺</p>
             <p>Ürün Detayı: <br></br>{urun.aciklama}</p>
              <p>Satıcı: {urun.satici}</p> 
              <p>Puan: {urun.puan}/5</p> 
            <button onClick={()=>{
              var sepet = JSON.parse(sessionStorage.getItem("sepeticerigi"));
              sepet.push(urun);
              sessionStorage.setItem("sepeticerigi",JSON.stringify(sepet));
              toast.success('Ürün başarıyla sepetinize eklendi!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }} className='btn btn-danger'>Sepete Ekle</button> </div>
          </div>
          ))}
        </div>
        
        <Footer/>
      </div>
  )
}

export default Urunler