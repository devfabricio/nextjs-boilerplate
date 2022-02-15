import { render } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render the colors correctly', function () {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#222c59' })
    expect(container.firstChild).toMatchSnapshot()
  })
})
