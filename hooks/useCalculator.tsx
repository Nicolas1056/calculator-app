import { useRef, useState } from "react";

enum Operator {
    Add, Subtract, Multiply, Divide
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        // verificacion de punto decimal
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            //Logica para reemplazar el 0 inicial 
            if (numberString === '.') {
                setNumber(number + numberString);
            } else if (numberString === '0' && number.includes('.')) {
                setNumber(number + numberString);
            } else if (numberString !== '0' && !number.includes('.')) {
                setNumber(numberString);
            } else if (numberString === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + numberString);
            }
        } else {
            setNumber(number + numberString);
        }
    }

    const setLastNumber = () => {
        setFormula(number);

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Multiply;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Add;
    }

    const equalsOperation = () => {
        const num1 = Number(prevNumber);
        const num2 = Number(number);

        switch (lastOperation.current) {
            case Operator.Add:
                setNumber(`${num1 + num2}`);
                break;
            case Operator.Subtract:
                setNumber(`${num1 - num2}`);
                break;
            case Operator.Multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.Divide:
                setNumber(`${num1 / num2}`);
                break;
        }
        setPrevNumber('0');
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber,
        toggleSign,
        clean,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        equalsOperation
    }
}