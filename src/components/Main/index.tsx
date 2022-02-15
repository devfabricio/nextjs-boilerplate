import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src={'/img/logo-dark.png'} alt={'Logo da Hello Codes'} />
    <S.Description>
      A <b>NextJS</b> boilerplate with Typescript, Babel, Storybook, Jest, React
      Testing Library, Eslint, Husky, Lint Staged and Plop.
    </S.Description>
  </S.Wrapper>
)

export default Main
