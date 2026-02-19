import { View } from 'react-native';
import { useCalculator } from '../hooks/useCalculator';


import { CalculatorButton } from '../components/CalculatorButton';
import { ThemeText } from '../components/ThemeText';
import { Colors } from '../constants/Colors';
import { globalStyles } from '../styles/global-styles';

const CalculatorApp = () => {
  const {
    formula,
    number,
    buildNumber,
    clean,
    deleteLast,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    equalsOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.calculatorContainer}>
        {/* Resultados */}
        <ThemeText variant="h1">{number}</ThemeText>
        <ThemeText variant="h2">{formula}</ThemeText>

        {/* Fila de Botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label="C" color={Colors.lightgray} blackText onPress={clean} />
          <CalculatorButton label="+/-" color={Colors.lightgray} blackText onPress={toggleSign} />
          <CalculatorButton label="del" color={Colors.lightgray} blackText onPress={deleteLast} />
          <CalculatorButton label="/" color={Colors.primary} onPress={divideOperation} />
        </View>

        {/* Fila 7, 8, 9, * */}
        <View style={globalStyles.row}>
          <CalculatorButton label="7" onPress={() => buildNumber('7')} />
          <CalculatorButton label="8" onPress={() => buildNumber('8')} />
          <CalculatorButton label="9" onPress={() => buildNumber('9')} />
          <CalculatorButton label="X" color={Colors.primary} onPress={multiplyOperation} />
        </View>

        {/* Fila 4, 5, 6, - */}
        <View style={globalStyles.row}>
          <CalculatorButton label="4" onPress={() => buildNumber('4')} />
          <CalculatorButton label="5" onPress={() => buildNumber('5')} />
          <CalculatorButton label="6" onPress={() => buildNumber('6')} />
          <CalculatorButton label="-" color={Colors.primary} onPress={subtractOperation} />
        </View>

        {/* Fila 1, 2, 3, + */}
        <View style={globalStyles.row}>
          <CalculatorButton label="1" onPress={() => buildNumber('1')} />
          <CalculatorButton label="2" onPress={() => buildNumber('2')} />
          <CalculatorButton label="3" onPress={() => buildNumber('3')} />
          <CalculatorButton label="+" color={Colors.primary} onPress={addOperation} />
        </View>

        {/* Fila 0, ., = */}
        <View style={globalStyles.row}>
          <CalculatorButton label="0" doubleSize onPress={() => buildNumber('0')} />
          <CalculatorButton label="." onPress={() => buildNumber('.')} />
          <CalculatorButton label="=" color={Colors.primary} onPress={equalsOperation} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorApp;