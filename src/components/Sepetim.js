import React from 'react'
import Footer from './Footer';
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sepetim() {
    var sepeticerigi = JSON.parse(sessionStorage.getItem("sepeticerigi"));
    function sepettenSil(index) {
      for (let i = 0; i < sepeticerigi.length; i++) {
        if ( i === index) { 
          sepeticerigi.splice(i, 1); 
        }
      }
      sessionStorage.setItem("sepeticerigi",JSON.stringify(sepeticerigi));
    }
  return (
    <div>
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
        <Header/>
        <table className='table-bordered text-center mt-5 container'>
          <tr>
          <th>Resim</th>
          <th>Ürün Adı</th>
          <th>Açıklama</th>
          <th>Satıcı</th>
          <th>Fiyat</th>
          <th>#</th>
          </tr>
        {sepeticerigi.map((urun,index)=>(
          <tr>
            <td ><div className='d-flex flex-column align-items-center' ><img style={{width:'50px'}} src={require("../../src/img/"+urun.resim)} /></div></td>
            <td>{urun.ad}</td>
            <td>{urun.aciklama}</td>
            <td>{urun.satici}</td>
            <td>{urun.fiyat}₺</td>
            <td><button className='btn btn-danger bg-red' onClick={() =>{
              sepettenSil(index);
              toast.success('Ürün sepetinizden çıkarıldı!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                window.location.reload(1000);
            }}>Sepetten Çıkar</button></td>
          </tr>
          ))}
      </table>
      <div className='container mt-5'><button onClick={()=>{
        alert("Alışverişiniz başarıyla gerçekleştirildi! Teşekkür ederiz!");
        var sepet = [];
        sessionStorage.setItem("sepeticerigi",JSON.stringify(sepet));
        window.location.reload();
      }} className='w-100 btn-primary'>Sepeti Onayla</button></div>
        <Footer/>
    </div>
  )
}

export default Sepetim