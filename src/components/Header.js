import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <a class="navbar-brand" href="#">E Yemek</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex flex-row align-items-center">
            <a className='nav-link' href="/">Anasayfa</a>
            <a className='nav-link'  href="/urunler">Ürünler</a>
            <a className='nav-link'  href="/sepetim">Sepetim</a>
        </div>
      </div>
    </nav>
  )
}

export default Header