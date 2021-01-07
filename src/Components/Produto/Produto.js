import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css';
import Head from '../Head/Head';

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  //Refericiando dados de um produto especifico da api, tratando o erro e especifiando com try e catch para tratamento de error, e finaly para modificar o loding da pagina.

  useEffect(() => {


    const fetchProduto = async (url) => {

      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);

      } catch (error) {
        setError('Um erro ocorreu!');
      } finally {

        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading === true) return <div className="loading"></div>;
  else if (error !== null) return <p>{error}</p>;
  else if (produto === null) return null;


  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title={`Ranek | ${produto.nome}`} />
      <div>
        {produto.fotos.map(foto => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>

    </section>
  )
}

export default Produto
