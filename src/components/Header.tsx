


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
     </header>
    
    )

}
