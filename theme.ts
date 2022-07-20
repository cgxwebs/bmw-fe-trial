import {extendTheme} from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      color: '#555562',
    },
    heading: {
      color: '#333',
    },
    a: {
      color: 'primary1.400'
    }
  }
}

const fonts = {
  body: 'AvenirNext, sans-serif',
  heading: 'AvenirNextMedium, sans-serif',
}

const colors = {
  primary1: {
    100: '#FFEFDE',
    200: '#FFDCC2',
    400: '#F0A545',
    900: '#F1863E',
  },
  primary2: {
    100: '#F9FAFD',
    200: '#D8E4FF',
    400: '#4678DF',
    900: '#2C4A89',
  },
  primary3: {
    100: '#FAFBFD',
    200: '#F2F3F7',
    400: '#9898AD',
    900: '#8E8E9C',
  },
  tertiary: {
    900: '#333',
    800: '#555562',
    600: '#A3A5C0',
    500: '#E0E0E6',
    200: '#F2F4F9',
    100: '#F9F9F9',
  },
  tertiarygood: '#10C664',
  tertiarybad: '#FF504C',
  greytext: '#c0c9dc',
}

// 3. extend the theme
const theme = extendTheme({config, colors, styles, fonts})

export default theme