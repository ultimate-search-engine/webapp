import styles from "../styles/Calculator.module.scss"
import React, {useState} from 'react'

function Calculator() {

    const [mathProblem, setMathProblem] = useState("")

    const [mathResult, setMathResult] = useState("=")

    function calculate() {
        let temp = ''
        for (let i = 0; i < mathProblem.length; i++) {
            if (mathProblem[i] == "×") {
                temp += "*"
            } else if (mathProblem[i] == "÷") {
                temp += "/"
            } else if (mathProblem[i] == "(" && mathProblem[i - 1] != "×" && mathProblem[i - 1] != "÷" && mathProblem[i - 1] != "+" && mathProblem[i - 1] != "-") {
                temp += "*("
            } else if (mathProblem[i] == "²") {
                for (let j = temp.length; j > -1; j--) {
                    let bad = ["+", "-", "/", "*", "(", ")"]
                    if (bad.includes(temp[j])) {
                        temp = temp.slice(0, j + 1) + "(Math.pow(" + temp.slice(j + 1) + ",2))"
                    }
                }
            } else if (mathProblem[i] == "√") {
                for (let j = temp.length; j < mathProblem.length; j++) {
                    let bad = ["+", "-", "/", "*", "(", ")"]
                    if (bad.includes(mathProblem[j])) {
                        temp = temp.slice(0, i) + "(Math.sqrt(" + mathProblem.slice(i + 1, j) + ",2))"
                        i = j - i - 1;
                    }
                }
            } else {
                temp += mathProblem[i]
            }
        }
        console.log(`Final: ${temp}`)
        setMathResult((eval(temp).toFixed(5)))
    }

    function brasko(nevbie: string) {
        if (nevbie === "c_s") {
            setMathProblem(mathProblem + "²")
        } else if (nevbie === "c_c") {
            setMathProblem('')
            setMathResult('=')
        } else if (nevbie === "c_e") {
            calculate()
        } else {
            setMathProblem(mathProblem + nevbie)
            console.log(mathProblem)
        }
    }

    return (
        <div className={styles.base}>
            <p className={styles.result}>{mathResult}</p>
            <input className={styles.input} value={mathProblem}/>
            <div className={styles.buttons}>

                <div className={styles.button} onClick={() => {
                    brasko("7")
                }}><p>7</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("8")
                }}><p>8</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("9")
                }}><p>9</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("×")
                }}><p>×</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("÷")
                }}><p>÷</p></div>


                <div className={styles.button} onClick={() => {
                    brasko("4")
                }}><p>4</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("5")
                }}><p>5</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("6")
                }}><p>6</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("+")
                }}><p>+</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("-")
                }}><p>-</p></div>

                <div className={styles.button} onClick={() => {
                    brasko("1")
                }}><p>1</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("2")
                }}><p>2</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("3")
                }}><p>3</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("c_s")
                }}><p><i>x</i><sup>2</sup></p></div>
                <div className={styles.button} onClick={() => {
                    brasko("√")
                }}><p>√<i>x</i></p></div>

                <div className={styles.button} onClick={() => {
                    brasko("(")
                }}><p>(</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("0")
                }}><p>0</p></div>
                <div className={styles.button} onClick={() => {
                    brasko(")")
                }}><p>)</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("c_e")
                }}><p>=</p></div>
                <div className={styles.button} onClick={() => {
                    brasko("c_c")
                }}><p>C</p></div>

            </div>
        </div>
    )
}

export default Calculator
