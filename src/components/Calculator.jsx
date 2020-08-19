import React, { useState } from 'react'

function Calculator() {
  const [result, setResult] = useState(0)
  const [leftOperand, setLeftOperand] = useState()
  const [operator, setOperator] = useState()
  const [rightOperand, setRightOperand] = useState()

  const numberSelection = (event) => {
    const selectedNumber = event.target.innerText

    setResult(selectedNumber)

    const number = parseInt(selectedNumber)

    if (leftOperand === undefined) {
      setLeftOperand(number)
    } else {
      setRightOperand(number)
    }
  }

  const handleClickOperator = (operator) => {
    setOperator(operator)
  }

  const handleClickEquals = () => {
    let answer

    switch (operator) {
      case '/':
        answer = leftOperand / rightOperand
        break

      case '*':
        answer = leftOperand * rightOperand
        break

      case '-':
        answer = leftOperand - rightOperand
        break

      case '+':
        answer = leftOperand + rightOperand
        break
    }

    setResult(answer)
  }

  const handleClickClear = () => {
    setResult(0)
    setLeftOperand(undefined)
    setRightOperand(undefined)
    setOperator(undefined)
  }

  return (
    <div className="">
      <table border="1" className="outsidetable">
        <tr>
          <td>
            <td className="result">{result}</td>
            <table className="calculator">
              <tr>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button type="" onClick={numberSelection} className="button">
                    1
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    2
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    3
                  </button>
                </td>
                <td>
                  <button
                    type=""
                    onClick={() => handleClickOperator('+')}
                    className="function"
                  >
                    &#43;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    4
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    5
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    6
                  </button>
                </td>
                <td>
                  <button
                    type=""
                    onClick={() => handleClickOperator('-')}
                    className="function"
                  >
                    &#8722;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    7
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    8
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    9
                  </button>
                </td>
                <td>
                  <button
                    type=""
                    onClick={() => handleClickOperator('*')}
                    className="function"
                  >
                    &#215;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="" onClick={handleClickClear} className="clear">
                    Clear
                  </button>
                </td>
                <td>
                  <button type="" onClick={numberSelection} className="button">
                    0
                  </button>
                </td>
                <td>
                  <button
                    type=""
                    onClick={handleClickEquals}
                    className="function"
                  >
                    &#61;
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleClickOperator('/')}
                    className="function"
                  >
                    &#247;
                  </button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Calculator
