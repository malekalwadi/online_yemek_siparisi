import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Urunler from './components/Urunler';
import Sepetim from './components/Sepetim';
import { useNavigate } from "react-router-dom";

class Urun{
  constructor(ad,fiyat,resim,satici,puan,aciklama){
    this.ad=ad;
    this.fiyat=fiyat;
    this.resim=resim;
    this.aciklama=aciklama;
    this.satici=satici;
    this.puan=puan;
  }
}
if(sessionStorage.getItem("urunler") == null){
  var urundizi = [];
  urundizi.push(new Urun("Pide",32.50,"pide.png","Köroğlu Pide",4.8,"Çeşitler: Kıymalı, kaşarlı, sade, yumurtalı"));
  urundizi.push(new Urun("Lahmacun",25,"lahmacun.png","Köroğlu Pide",5,"Acılı/Acısız"));
  urundizi.push(new Urun("Çorba Çeşitleri",22,"corba.png","Köroğlu Pide",3.6,"Mercimek, Ezogelin, Domates, Kellepaça!"));
  urundizi.push(new Urun("Karışık Sandviç",27.50,"sandvic.png","Tadım Sandviç",4.2,"Karışık, yumurtalı, ilave kaşarlı, bol malzemeli"));
  urundizi.push(new Urun("Suşi",55,"susi.png","SushiCO",3.8,"Bildiğiniz suşi!"));
  sessionStorage.setItem("urunler",JSON.stringify(urundizi));
  var sepeticerigi=[];
  sessionStorage.setItem("sepeticerigi",JSON.stringify(sepeticerigi));
}


function App() {
  let navigate = useNavigate();
  function UrunAra() {
    var metin = document.getElementById('aramakutusu').value;
    navigate("/urunler/"+metin);
  }
  return(
    <div>
    <Header/>
    <div className='container'>
        <div className='container pt-5'>
            <h1>E Yemek'e Hoşgeldiniz!</h1>
            <p>Karnınız acıktıysa, onlarda çeşit yemek arasından hemen siparişinizi verin!</p>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h3>Hemen Aramaya Başlayın!</h3>
          <input id='aramakutusu' className='form-control w-50 mt-3' type={'text'}></input>
          <button onClick={()=>UrunAra()} className='btn btn-primary w-25 mt-3'>Ara</button>
        </div>
    </div>
    <Footer/>
</div>
  );
}

export default App;

//<Route path="/author/:id" exact component={AuthorDetail} />