


export default function Header (){

    return (
     
      <header>
        <nav className="nav-container">
            <img src="/src/img/logo.svg" alt="Logo" />

            <ul>
               <a href="#"> <li>Dyner</li></a>
               <a href="#"><li>Puder</li></a>
               <a href="#"><li>Guides</li></a>
               <a href="#"><li>Om os</li></a>
            </ul>

            <div className="ikon-container">
                <button><i className="fa-solid fa-cart-shopping"></i></button>
                <button><img src="/src/img/danskflag.png" alt="Dansk flag" /></button>
                <button><i className="fa-solid fa-magnifying-glass"></i>Søg</button>
                
            </div>
        </nav>

        <section className="calendar-info-container">
            <div className="calendar-info">
            <div className="left-line"></div>
            <div><img src="/src/img/logo.jul.svg" alt="logo with julehue" /></div>
            <div className="right-line"></div>
            </div>

            <h1>JuleKalender</h1>
            <span>24 dage til bedre søvn</span>
            <p>Klik på en låge for at åbne dagens overraskelse. Du kan åbne en låge om dagen, og hver gang du åbner en låge, optjener du en stjerne. Saml så mange stjerner som muligt, og glæd dig til den 24. december, hvor du får en særlig julegave baseret på antallet af stjerner, du har samlet. Jo flere stjerner du samler, desto bedre bliver din gave!</p>

            <p><i className="fa-solid fa-star"></i></p>

        </section>
     </header>
    
    )

}
