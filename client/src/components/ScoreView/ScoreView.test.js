import { render, screen } from '@testing-library/react';
import {default as ScoreView} from '.';


describe('ScoreView', () => {
  let playersStub = {}
  
  beforeEach(() => {
    renderWithReduxProvider(<ScoreView/>)
  })

  test('it renders a player icon', () => {
    //let icon = screen.getByRole('img',{name: 'Player Icon'});
    let icon = screen.getByAltText('Player Icon');
    expect(icon).toBeInTheDocument();
  })
})