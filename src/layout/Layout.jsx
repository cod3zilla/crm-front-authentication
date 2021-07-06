import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

function Layout({children}) {
    return (
        <div>
          <Header/>
          <main style={{height:'90vh'}} className="main-content">
             {children}
          </main>
          <Footer/>  
        </div>
    )
}

export default Layout
