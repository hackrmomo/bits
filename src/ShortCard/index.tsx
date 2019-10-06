import * as React from 'react';
import styled from 'styled-components'


export interface IShortCardProps {
  href: string | undefined;
  title: string;
  subtitle: string | undefined;
  picture: string | any | undefined;
}

export interface IShortCardState {

}

export default class ShortCard extends React.Component<IShortCardProps, IShortCardState> {
  constructor(props: IShortCardProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <ContainerDiv onClick={() => {window.location.assign(this.props.href)}}>
          <ImageDiv>
            <Image src={this.props.picture} />
          </ImageDiv>
          <TextDiv>
            <TitleText>
              {this.props.title}
            </TitleText>
            <SubTitleText>
              {this.props.subtitle}
            </SubTitleText>
          </TextDiv>
        </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 500px;
  height: 150px;
  background: #ECECEC;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  padding: 15px;
  justify-content: flex-start;
  cursor: pointer;
  
  transition: all 250ms 0ms ease-in-out;

  &:hover {
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.15);
  }
`

const ImageDiv = styled.div`
  border-radius: 14px;
`

const Image = styled.img`
  height: 120px;
  width: 120px;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 19px;
  text-align: start;
  justify-content: center;
`

const TitleText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #5A5A5A;
`

const SubTitleText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #949494;
`