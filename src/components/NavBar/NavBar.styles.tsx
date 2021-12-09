import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`

export const NavBarSectionContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  height: 100px;

  &:first-child {
    //adds width to logo to center nav
    width: 190px;
  }

  &:nth-child(2) {
    :hover {
      color: #555555;
      border-color: #555555;
    }
  }
`

export const NavBarTitle = styled.div`
  margin: 0 20px;
  border-bottom: 2px solid;
  :hover {
    color: black;
  }


`
