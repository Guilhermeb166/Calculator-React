import { useState } from 'react'
import styles from './Css-modules/Calculator.module.css'
import { FaBackspace, FaTimes,FaRegSquare,FaMinus  } from 'react-icons/fa'
export default function Calculator({ visible }) {

    const [num, setNum] = useState((0))
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()
    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value)
        } else (
            setNum(num + e.target.value)
        )

    }
    function clear(e) {
        setNum(0)
    }
    function porsentage() {
        setNum(num / 100)
    }
    function changeSign() {
        if (num > 0) {
            setNum(-num)
        } else if (-num) {
            setNum(-num)
        }
    }

    function operatorHandler(e) {
        setOperator(e.target.value)
        setOldNum(num)
        setNum(0)

    }

    function calculate() {
        if (operator === '/') {
            setNum(oldNum / num)
        } else if (operator === 'x') {
            setNum(oldNum * num)
        } else if (operator === '-') {
            setNum(oldNum - num)
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }

    }


    return (
        <section className={`${styles.wrapper} ${visible ? styles.visible:''}`}>
            <div className={styles.title}>
                <div>
                    <img src="./img/Calculator_icon.png" alt="" />
                    <p>Calculator</p>
                </div>
                <div className={styles.close_control}>
                    <p><FaMinus /></p>
                    <p><FaRegSquare/></p>
                    <p className={styles.close}><FaTimes /></p>
                </div>

            </div>

            <h1 className = { styles.result } > { num }</h1>
            <div className={styles.calculator}>
                <div>
                    <button className={`${styles.darkGray}`} onClick={porsentage}>%</button>
                    <button className={`${styles.darkGray}`}>()</button>
                    <button className={`${styles.darkGray}`} onClick={clear}>C</button>
                    <button className={`${styles.darkGray}`}><FaBackspace /></button>
                </div>
                <div>
                    <button className={`${styles.darkGray}`}><sup>1</sup>/x</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler}><sup>2</sup>&radic;x</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler}>x<sup>2</sup></button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'/'}>/</button>
                </div>
                <div>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={7}>7</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={8}>8</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={9}>9</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'x'}>x</button>
                </div>
                <div>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={4}>4</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={5}>5</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={6}>6</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'-'}>-</button>
                </div>
                <div>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={1}>1</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={2}>2</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={3}>3</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'+'}>+</button>
                </div>
                <div>
                    <button className={`${styles.lightGray}`} onClick={changeSign}>+/-</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={0}>0</button>
                    <button className={`${styles.lightGray}`} onClick={inputNum} value={'.'}>,</button>
                    <button className={`${styles.calcular}`} onClick={calculate}>=</button>
                </div>
            </div>
        </section >
    )
}

