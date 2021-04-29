import { default as Options } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Options',() => {
  beforeEach(() => {
    
    renderWithReduxProvider(<Options/>)
  })

  test('it renders a submit button', () => {
    let btn = screen.getByRole('button',{name: 'submit'});
    expect(btn).toBeInTheDocument();
  })

})
//<button handleSelect={stubHandleSelect}></button>
//

  
  



