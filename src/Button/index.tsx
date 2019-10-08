import * as React from 'react';
import styled from 'styled-components'

export interface IButtonProps {
  children: any;
  value: any;
  onClick: Function;
  type: 'wire' | 'solid' | 'text'
}

export interface IButtonState {

}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super(props);

    this.state = {
    }
  }

  buttonRef: any

  public render() {
    return (
      // @ts-ignore
      <StyledButton styleType={this.props.type === 'wire' || this.props.type === 'solid' ? this.props.type : 'text'} onClick={() => { this.props.onClick() }}>
        {this.props.children !== undefined ? this.props.children : this.props.value}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  font-size: 17px;
  font-family: "Open Sans";
  font-weight: 400;
  cursor: pointer;
  border-radius: 7px;
  padding: 7px 30px 7px 30px;

  // @ts-ignore
  border: ${props => props.styleType === 'wire' ? "1px solid #3399CC" : "none"};

  // @ts-ignore
  background-color: ${props => props.styleType === 'solid' ? "#3399CC" : "transparent"};

  // @ts-ignore
  color: ${props => props.styleType === 'solid' ? "white" : "#3399cc"};
  
  transition: all 250ms 0ms ease-in-out;
  
  &:hover {
    // @ts-ignore
    box-shadow: ${props => props.styleType === 'text' ? "none" : "4px 4px 20px #3399CC99"};
    
    
    // @ts-ignore
    text-shadow: ${props => props.styleType === 'solid' ? "none" : "4px 4px 20px #3399CC99"};
  }
  
  &:focus {
    outline: none;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.75;
  }
`