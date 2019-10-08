import * as React from 'react';
import styled from 'styled-components'


export interface ITextFieldProps {
  onChange: any;
  errored: boolean | undefined;
  placeholder: string | undefined | null;
  children: string | undefined | null;
  onHitReturn: Function;
  isSecret: boolean | undefined;
}

export interface ITextFieldState {
  value: string;
}

export default class TextField extends React.Component<ITextFieldProps, ITextFieldState> {
  constructor(props: ITextFieldProps) {
    super(props);

    this.state = {
      value: typeof props.children === 'string' ? props.children : "",
    }
  }

  public render() {
    return (
      // @ts-ignore
      <StyledTextField
        errored={this.props.errored}
        type={this.props.isSecret ? 'password' : 'text'}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            this.props.onHitReturn ? this.props.onHitReturn() : null
          }
        }}
      >
        {this.props.children}
      </StyledTextField>
    );
  }
}

const StyledTextField = styled.input`
  border: unset;
  // @ts-ignore
  border-bottom: 1px solid ${props => props.errored ? '#C63527' : 'black'};
  font-family: "Open Sans";
  font-size: 20px;
  min-width: 300px;

  transition: all 250ms 0ms ease-in-out;

  &:hover {
    border-bottom: 2px solid black;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #3399CC;
  }
`