import {Global, css} from '@emotion/react'

const Fonts = () => {
  return (<Global styles={css`
    @font-face {
      font-family: 'AvenirNext';
      src: url('/fonts/AvenirNext-Regular-08.ttf') format('truetype');
      font-weight: normal;
    }
    @font-face {
      font-family: 'AvenirNextMedium';
      src: url('/fonts/AvenirNext-DemiBold-03.ttf') format('truetype');
      font-weight: 600;
    }
  `} />);
}
export default Fonts