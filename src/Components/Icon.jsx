import { useState } from 'react'
import Calculator from './Calculator'
import styles from './Css-modules/Icon.module.css'
export default function Icon() {

    const [visible, setVisible] = useState(false)
    const handleIconClick = () => {
        setVisible(true)
        //A função que você passa para setVisible recebe o valor atual do estado como argumento. No caso do exemplo, esse argumento é chamado de prevVisible (ou qualquer outro nome que você escolher). O propósito desse argumento é permitir que você atualize o estado com base no valor atual.
        
    }
    return (
        <div className={styles.icon_container}>
            <img src="./img/Calculator_icon.png" alt="icon" onClick={handleIconClick}/>
            <Calculator visible={visible}/>
        </div>
    )
}