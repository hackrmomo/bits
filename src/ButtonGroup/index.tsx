import * as React from 'react';
import styled from 'styled-components'
import ThemeObject, { } from '../theme'
import { number } from 'prop-types';


export interface ILinkProps {
  buttonLabels: [string];
  buttonFunctions: [Function];
  startingIndex: number | undefined;
}

export interface ILinkState {
  currentSelectedIndex: number

}

export default class Link extends React.Component<ILinkProps, ILinkState> {
  constructor(props: ILinkProps) {
    super(props);

    //@ts-ignore
    this.buttonRefs = [];

    for (let i = 0; i < props.buttonLabels.length; i++) {
      this.buttonRefs.push(React.createRef())
    }

    this.state = {
      currentSelectedIndex: typeof props.startingIndex === 'number' ? props.startingIndex : 0
    }
  }

  buttonRefs: [any]

  renderButtons(buttonLabels: [string], buttonFunctions: [Function]) {
    return buttonLabels.map((buttonLabel, index) => {
      return (

        <Button ref={this.buttonRefs[index]} onClick={() => {
          this.setState({ currentSelectedIndex: index })
          buttonFunctions[index]()
        }} key={index}>
          {buttonLabel}
        </Button>
      );
    })
  }

  public render() {

    // @ts-ignore
    let positions: [{
      top: number,
      left: number,
      height: number,
      width: number
    }] = []
    let containerDivMaxWidth = 14;
    this.buttonRefs.forEach((value) => {
      if (value.current) {
        positions.push({
          top: value.current.offsetTop,
          left: value.current.offsetLeft,
          height: value.current.offsetHeight,
          width: value.current.offsetWidth
        })
        containerDivMaxWidth += value.current.offsetWidth;
      }
    })


    return (
      <ContainerDiv style={{ maxWidth: containerDivMaxWidth }}>
        {this.renderButtons(this.props.buttonLabels, this.props.buttonFunctions)}
        {
          // @ts-ignore
          positions.length === 0 ? null :
            // @ts-ignore
            <SelectionDiv style={{
              top: positions[this.state.currentSelectedIndex].top,
              left: positions[this.state.currentSelectedIndex].left,
              width: positions[this.state.currentSelectedIndex].width,
              height: positions[this.state.currentSelectedIndex].height
            }}
            />
        }
      </ContainerDiv>
    );
  }
}

let Button = styled.div`
  padding: 7px 30px 7px 30px;
  cursor: pointer;
  z-index: 2;
  color: white;
`

let ContainerDiv = styled.div`
  background: #545454;
  border-radius: 10px;
  padding: 7px;
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 0
`

let SelectionDiv = styled.div`
  background: #3399CC;
  border-radius: 6px;

  transition: all 250ms 0ms ease-in-out;
  
  position: absolute;
  z-index: 1
`