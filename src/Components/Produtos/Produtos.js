import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Produtos.module.css";
import Head from "../Head/Head";

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);


  // Buscando dados da Api
  useEffect(() => {
    const fetchProduto = async (url) => {
      const response = await fetch(url)
      const json = await response.json();
      setProdutos(json);
    }
    fetchProduto('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

 
  if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title={`Ranek`}/>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};




export default Produtos;
