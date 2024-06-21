import './Navbar.css'
function Navbar(){
    return(
        <header>
        <nav className='links'>
                <figure className="logo">
                    <img src="./teamsLogo.png" alt="" />
                </figure>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Author</a></li>
                <li><a href="#">About this Project</a></li>
            </ul>     
        </nav>
        <nav className="social">
            <ul>
                <li><a href="#"><img src="./githublogo.png" alt="" /></a></li>
                <li><a href="#"><img src="./medium.png" alt="" /></a></li>
                <li><a href="#"><img src="./instagram.png" alt="" /></a></li>
                <li><a href="#"><img src="./linkedin.png" alt="" /></a></li>
            </ul>
        </nav>
        </header>
    )
}
export default Navbar