
import styles from './Contato.module.css'
import Input from './Input'

import React from 'react'

function Contato() {
    // const [nome, setNome] = useState('Enviar')
    // const [nomeDig, setNomeDig] = useState('')

    // // const handleNome= (event)=>{
    // //     setNomeDig(event.target.value)
    // // }

    // const clickButton= (event)=>{
    //     event.preventDefault()
    //     setNome('...Enviando')
    //     setTimeout(()=>{
    //         setNome(nomeDig)
    //     },1000)
        
    // }
    return (
        <div>
              <section className={styles.container}>
                <header className={styles.header}>
                    <h3>Contato</h3>
                </header>
                <main className={styles.main}>
                   <picture className={styles.img}>
                   <img  src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg" alt=""/>
                   </picture>

                    <form className={styles.form} action="">
                        <Input name='inputName' type='text' id='inputName' className='legenda'>Nome:</Input> 

                        <label className={styles.legenda} htmlFor="email">Email:</label>
                        <input className={styles.input} type="text" name='email'/>

                        <label className={styles.legenda}  htmlFor="message">Menssagem:</label>
                        <textarea className={`${styles.input} ${styles.textArea}`} name="message" id=""/>

                        <button className={styles.button}  >Enviar</button>
                    </form>
                </main>
            </section>
        </div>
    )
}

export default Contato

