import * as React from 'react';
import styled from 'styled-components'
import ThemeObject, { } from '../theme'


export interface ILinkProps {
  href: String | undefined;
  theme: ThemeObject;
}

export interface ILinkState {

}

export default class Link extends React.Component<ILinkProps, ILinkState> {
  constructor(props: ILinkProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <StyledLink theme={this.props.theme} href={`${this.props.href}`} >
        {this.props.children}
      </StyledLink>
    );
  }
}

const StyledLink = styled.a`
  border: none;
  text-decoration: ${props => props.theme && props.theme.font && props.theme.font.isUnderlined ? `underlined` : 'none'};
  width: unset !important;
  max-width: unset !important;
  min-width: unset !important;
`