import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../contants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});

export default Card;
