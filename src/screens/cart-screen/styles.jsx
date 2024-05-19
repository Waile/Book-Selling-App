import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  bookDetailsContainer: {
    marginVertical: '8%',
    paddingBottom: '7%',
    borderBottomColor: COLORS.grey2,
    borderBottomWidth: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginVertical: '1%',
  },
  textStyle: {
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
  },
  buttonText: {
    color: COLORS.white,
  },
  buttonContainer: {
    marginBottom: '5%',
    backgroundColor: COLORS.black1,
  },
});
export default styles;
