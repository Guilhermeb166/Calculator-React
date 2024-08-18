import { useState } from 'react'
import styles from './Css-modules/Calculator.module.css'
import { FaBackspace, FaTimes, FaRegSquare, FaMinus } from 'react-icons/fa'
export default function Calculator({ visible, onClose }) {

    const [num, setNum] = useState((0))//Armazena o número atual que está sendo digitado ou calculado.
    const [oldNum, setOldNum] = useState(0)//Armazena o número anterior ao aplicar uma operação matemática.
    const [operator, setOperator] = useState()//Armazena o operador matemático atual (+, -, *, /, etc.).
    const [history, setHistory] = useState([])//Armazena o histórico das operações realizadas.
    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value)
        } else (
            setNum(num + e.target.value)
        )

    }
    function clear(e) {
        setNum(0)
        setOldNum(0)
        setOperator('')
        setHistory([]);
        //Reseta a calculadora, limpando o número atual (num), o número antigo (oldNum), o operador (operator) e o histórico (history).
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
        const operatorValue = e.target.value;//Armazena o operador atual (operatorValue).

    // Se o histórico já contém o último número e o operador anterior, não adicione novamente
    if (history[history.length - 1] !== num.toString()) {
        /*Isso acessa o último elemento do array history. O length - 1 obtém o índice do último item.
        !== num.toString(): Aqui, ele verifica se o último item no histórico não é igual ao número atual (num). O num.toString() converte o número para uma string, porque todos os elementos no histórico estão em formato de string. */
        setHistory(prevHistory => [...prevHistory, num.toString(), operatorValue]);
        /*Se o último item no history não é o número atual (num), ele atualiza o histórico adicionando o número atual e o operador (operatorValue).
         
        [...prevHistory, num.toString(), operatorValue]: Esse código cria um novo array que copia todos os elementos do histórico anterior (prevHistory), e adiciona o número atual (num.toString()) e o operador (operatorValue) ao final do array.*/
        
    } else {
        // Se o histórico já tem o número, apenas adicione o operador
        setHistory(prevHistory => [...prevHistory, operatorValue]);
       
    }

    setOperator(operatorValue);
    setOldNum(num);
    setNum(0);

    }

    function calculate() {
        let result;
        if (operator === '/') {
            result = oldNum / num;
        } else if (operator === 'x') {
            result = oldNum * num;
        } else if (operator === '-') {
            result = oldNum - num;
        } else if (operator === '+') {
            result = parseFloat(oldNum) + parseFloat(num);
        } else if (operator === '√') {
            result = Math.sqrt(num)
        } else if (operator === '**') {
            result = Math.pow(oldNum, num);
        }

        setNum(result);
        setHistory([result.toString()]); // Atualiza o histórico apenas com o resultado final
        setOperator(null); // Reseta o operador para evitar duplicações
    }



    return (
        <section className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
            <div className={styles.title}>
                <div>
                    <img src="./img/Calculator_icon.png" alt="" />
                    <p>Calculator</p>
                </div>
                <div className={styles.close_control}>
                    <p><FaMinus /></p>
                    <p><FaRegSquare /></p>
                    <p className={styles.close} onClick={onClose}><FaTimes /></p>
                </div>

            </div>
            <h2 className={styles.history}>{history.join(' ')}</h2>
            <h1 className={styles.result} > {num}</h1>
            <div className={styles.calculator}>
                <div>
                    <button className={`${styles.darkGray}`} onClick={porsentage}>%</button>
                    <button className={`${styles.darkGray}`}>()</button>
                    <button className={`${styles.darkGray}`} onClick={clear}>C</button>
                    <button className={`${styles.darkGray}`}><FaBackspace /></button>
                </div>
                <div>
                    <button className={`${styles.darkGray}`}><sup>1</sup>/x</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'√'}><sup>2</sup>&radic;x</button>
                    <button className={`${styles.darkGray}`} onClick={operatorHandler} value={'**'}>x<sup>2</sup></button>
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

