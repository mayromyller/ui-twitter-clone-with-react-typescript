import React from 'react'

import Button from '../Button'

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileInfo,
  BotSide,
  Avatar,
  ProfileData,
  ExitApp
} from './styles'

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileInfo className="active" />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <BotSide>
        <Avatar />
        <ProfileData>
          <span>Mayro Myller</span>
          <span>@myllermayro</span>
        </ProfileData>
        <ExitApp />
      </BotSide>
    </Container>
  )
}

export default MenuBar
