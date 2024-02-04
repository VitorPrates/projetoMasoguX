import "./App.css";
import Topo from "./Templates/TopoHeader/Topo.jsx"
import Chao from "./Templates/chaoFooter/chao.jsx";
import mascote from "./assets/mascote.png"
import Cardproduto from "./Templates/cardprodutoshome/Cardproduto.jsx";
import { itensProdutos } from "./itensloja.js";
import React, { useEffect } from 'react';

function App() {

  const TesteAnuncio = () => {
    
    useEffect(() => {
      let banner = 0;
      let pra_esquerda = true
      
      const att_anuncio = () => {
        console.log(banner)
        console.log(pra_esquerda)
        if(banner == 4)
        {
          pra_esquerda = false
        }
        if(banner == 0)
        {
          pra_esquerda = true
        }
        if(banner <= 3 && pra_esquerda == true)
        {
          banner++
          let final = 0; 
          let rodar = setInterval(() =>{
            document.querySelector(".anuncios").scrollLeft += 3
            final+=3
            if(final >= document.querySelector(".anuncios").clientWidth)
            {
              clearInterval(rodar);
            }
          }, 0.001);
         
        }
        if(banner > 0 && pra_esquerda == false)
        {
          banner --;
          let final = 0; 
          let rodar = setInterval(() =>{
            document.querySelector(".anuncios").scrollLeft -= 3
            final+=3
            if(final >= document.querySelector(".anuncios").clientWidth)
            {
              clearInterval(rodar);
            }
          }, 0.001);
        }
        
      }
      const intervalo = setInterval(att_anuncio, 7000)
      return () => clearInterval(intervalo);
    }, [])
  }

  const itens_loja = itensProdutos
  return <>
      <Topo/>
      <div className="main_container">
        <section className="main_anuncios">
        {TesteAnuncio()}
          <div className="anuncios">
              <div className="anc anc0"></div>
              <div className="anc anc1"></div>
              <div className="anc anc2"></div>
              <div className="anc anc3"></div>   
          </div>
          <img src={mascote} alt="" />
        </section>
        <section className="main_Produtos">
          <div className="produtos">
            <h2>Produtos</h2>
            <div className="list_produtos">
              <i class="bi bi-caret-left" onClick={() => {{
                let final = 612
                let rodar = setInterval(() =>{
                  document.querySelector(".card_produtos").scrollLeft -= 17
                  final-=17
                  if(final <= 0)
                  {
                    window.clearInterval(rodar);
                  }
                }, 7);
              }}}></i>
              <div className="card_produtos">
                {itens_loja.map(item => (
                  <Cardproduto titulo ={item.nome} preco={item.preco}/>
                ))}
              </div>
              <i class="bi bi-caret-right" onClick={() => {{
                let final = 0
                let rodar = setInterval(() =>{
                  document.querySelector(".card_produtos").scrollLeft += 17
                  final+=17
                  if(final >= 612)
                  {
                    window.clearInterval(rodar);
                  }
                }, 7);
              }}}></i>
            </div>
            <div className="todos_produtos">
              <h2>Categorias</h2>
              <ul className="list_categorias">
                <li>Áudio/Vídeo</li>
                <li>Armazenamento</li>
                <li>Conectores</li>
                <li>Específicos</li>
                <li>Ferramentas</li>
                <li>Instrumentação</li>
                <li>Módulos</li>
                <li>Ópticos</li>
                <li>Passivos</li>
                <li>Potência</li>
                <li>Semicondutores</li>
                <li>Sensores</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Chao/>
    </>
    ;
}

export default App
