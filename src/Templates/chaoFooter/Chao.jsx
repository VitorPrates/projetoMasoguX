import logoMasugux2 from "../../assets/logoMasugux2.png"
import "./chao.css"

export default function Chao()
{
    return <footer className="main_footer_template">
        <nav className="Contato_footer">
            <h2>Contato</h2>
            <h3>Email: <span>Masugux@gmail.com</span></h3>
            <h3>Telefone: <span>(11) 4119-0574</span></h3>
        </nav>
        <img src={logoMasugux2} alt="" className="logo_footer_1"/>
    </footer>
}