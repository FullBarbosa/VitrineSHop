import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Produtos.module.css";
import Head from "../Head/Head";

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Buscando dados da Api
  useEffect(() => {
    const fetchProduto = async (url) => {

      try {
        setLoading(true);
        const response = await fetch(url)
        const json = await response.json();
        setProdutos(json);

      } catch (error) {
        setError('Um erro ocorreu!');
      }finally{
        setLoading(false);
      }

    }
    fetchProduto('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (loading === true) return <div className="loading"></div>;
  else if (error !== null) return <p>{error}</p>;
  else if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title={`Ranek`} />

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
