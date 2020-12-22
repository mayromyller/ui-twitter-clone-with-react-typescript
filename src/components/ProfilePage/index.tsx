import React from 'react'

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar Perfil </EditButton>
        <h1>Mayro Myller</h1>
        <h2>@myllermayro</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Floriano, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de abril de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>52 </strong>
          </span>
          <span>
            <strong> 125 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
