import React from 'react'

import {
  Container,
  Reetweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Reetweeted>
        <RetweetedIcon />
        você retweetou
      </Reetweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Mayro Myller</strong>
            <span>@myllermayro</span>
            <Dot />
            <time>12 de abr</time>
          </Header>
          <Description>Vai Corinthians!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetIcon />
              55
            </Status>
            <Status>
              <LikeIcon />
              753
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
