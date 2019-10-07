import * as React from 'react';
// @ts-ignore
import Lottie from 'react-lottie'
import mloadingdata from './mloading.json'
import styled from 'styled-components';

export interface ILoadingIndicatorProps {

}

export interface ILoadingIndicatorState {

}

export default class LoadingIndicator extends React.Component<ILoadingIndicatorProps, ILoadingIndicatorState> {
  constructor(props: ILoadingIndicatorProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <LottieContainer>
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: mloadingdata
        }}
          width={200}
          height={200}
        />
      </LottieContainer>
    );
  }
}

const LottieContainer = styled.div`
    pointer-events: none;
`