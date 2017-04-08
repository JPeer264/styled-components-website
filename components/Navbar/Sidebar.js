import styled from 'styled-components'
import rem from 'polished/lib/helpers/rem'

const Sidebar = styled.nav`
  position: fixed;
  display: block;

  left: 0;
  top: 0;
  bottom: 0;
  right: auto;

  width: ${rem(300)};
  height: 100%;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(243, 182, 97));
  box-sizing: border-box;
  color: white;
  overflow-y: scroll;

  @media (max-width: 1000px) {
    bottom: auto;
    right: 0;
    height: auto;
    width: 100%;
    overflow-y: visible;
  }
`

export default Sidebar