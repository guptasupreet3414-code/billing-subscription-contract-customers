import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routeLabels } from '../data/navigation'

const Main = styled.main`
  padding: 24px;
`

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
  margin: 0 0 8px;
`

const PageMeta = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral600};
  margin: 0;
`

export default function StubPage() {
  const location = useLocation()
  const label = routeLabels[location.pathname] ?? location.pathname

  useEffect(() => {
    document.title = `${label} — DigiCert ONE`
  }, [label])

  return (
    <Main>
      <PageTitle>{label}</PageTitle>
      {location.pathname === '/profile' && (
        <PageMeta style={{ marginBottom: '8px', fontWeight: 500, color: '#353535' }}>
          Deepika Chauhan
        </PageMeta>
      )}
      <PageMeta>
        This is a stub page for <code>{location.pathname}</code>
      </PageMeta>
    </Main>
  )
}
