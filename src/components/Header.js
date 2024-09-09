import './Header.css';
import Button from './Button';
import Logo from '../styles/Pics/logo.png';

function copyText() {
    var copyText = "09121085080";

    navigator.clipboard.writeText(copyText);

    var numberText = document.getElementById('numberText');

    numberText.innerText = "کپی شد!";
    setTimeout(() => {
        numberText.innerText = "09121085080";
    }, 1500);
}

function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

function Header() {
    return (
        <header>
            <i class="bi bi-list" onClick={toggleMenu}></i>
            <img src={Logo} alt='Logo'/>
            <nav id="desktopMenu">
                <a href="#">صفحه اصلی </a>
                <a href="#">خدمات پزشکی </a>
                <a href="#">درباره من </a>
                <a href="#">تماس با ما </a>
                <a href="#">ویزیت آنلاین </a>
            </nav>
            <nav id="mobileMenu">
                <a href="#">صفحه اصلی </a>
                <a href="#">خدمات پزشکی </a>
                <a href="#">درباره من </a>
                <a href="#">تماس با ما </a>
                <a href="#">ویزیت آنلاین </a>
            </nav>
            <div class="navLeft">
                <div class="phoneNumber" onClick={copyText}>
                    <h2 id="numberText">09121085080</h2>
                    <i class="bi bi-telephone-fill"></i>
                </div>
                <Button text=" درخواست ویزیت آنلاین " />
            </div>
        </header>
    );
}

export default Header;