import '../css/navbar.css';

function Header(){
    return(
        <div className="NavBar">
            <header>
                <div className='logo'>
                    <h1>Romario</h1>
                </div>
                <nav>
                    <a href="#a">Home</a>
                    <a href="#a">Feedback</a>
                    <a href="#a">About</a>
                    <a href="#a">More</a>
                    <a href="#a">Contact</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;