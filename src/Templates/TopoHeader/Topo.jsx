import Xbolado from "../../assets/Xbolado.jpg"
import logoMasugux from "../../assets/logoMasugux.jpg"
import "./topo.css"
function Topo()
{
    return(
        <header className="main_header_template">
            <img className="Logo_header_1" src={Xbolado} alt="" />
            <nav className="header_nav_1">
                <h3>Home</h3>
                <h3>Produtos</h3>
                <h3>Contato</h3>
                <h3>Carrinho <i class="bi bi-bag"></i></h3>
            </nav>
            <img src={logoMasugux} className="logo_header_extend_1" alt="" />
        </header>
    );
}
export default Topo