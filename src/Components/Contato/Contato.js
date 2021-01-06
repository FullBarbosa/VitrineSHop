import React from 'react'
import styles from "./Contato.module.css";
import foto from '../../img/contato.jpg';
import Head from "../Head/Head";
const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title={`Ranek | Contato`}/>
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li> Email: exemple@persona.com</li>
          <li> Telefone: 9999-999</li>
          <li>Rua: exemplo, N99 </li>
          <li>Referencia: Proximo</li>
        </ul>
      </div>

    </section>
  )
}

export default Contato
