import "./Cardproduto.css"
export default function Cardproduto({titulo, preco})
{
    return<>
        <div className="card_container">
            <div className="thumb_produto"></div>
            <h4 className="titulo_produto">{titulo}</h4>
            <h4 className="preco_produto">{preco}</h4>
            <button className="add_carrihno"><i class="bi bi-bag-plus"></i></button>
        </div>
    </>
}