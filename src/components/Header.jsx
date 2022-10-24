import Logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'


function Header(){
    // const {text1, text2} = text;
    return(
        <header className="header">
            <div>
                <img src={Logo} alt="" />
                <img src={menu} alt="" />
            </div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use<br/> the most popular frontend library,<br/> and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </header>
    );
}

export default Header;