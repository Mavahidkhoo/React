import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className="container-fluid p-0 welcome-page text-center">
    <header className="header">
      <div className="box">
        <h1 className="heading">به اپلیکیشن ری‌اکت من خوش آمدید</h1>
        <p className="subheading">یک پلتفرم ساده و قدرتمند برای ساخت برنامه‌های وب شما</p>
      </div>
    </header>
    <main className="main">
      <section className="section">
        <div className="container">
          <h2 className="section-heading">درباره من</h2>
          <p className="section-text">وظیفه من طراحی وب سایت های متفاوت برای شما دوستان گرامی است.</p>
          <p className="section-text">سایت من را بررسی کرده و نقاط ضعف و قدرت را به من اطلاع دهید.</p>
        </div>
      </section>
    </main>
    <footer className="footer fixed-bottom">
      <div className='box'>
      <p className="footer-text">ساخته شده با ❤️ توسط <strong>محمدامین وحیدخو</strong> </p>
      </div>
      
    </footer>
  </div>
  )
}

export default Home
