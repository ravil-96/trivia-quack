import { default as Options } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Options',() => {
  beforeEach(() => {
    renderWithReduxProvider(<Options/>)
  })

  //let stubHandleSelect = jest.fn();

  // test('it calls a handleSelect prop when clicked', () => {
  //   let btn = screen.getByRole('button');
  //   userEvent.click(btn)
  //   expect(stubHandleSelect).toHaveBeenCalledTimes(1)
  // })

  test('it renders a submit button', () => {
    let btn = screen.getByRole('button',{name: 'Submit'});
    expect(btn).toBeDisabled;
  })

})
//<button handleSelect={stubHandleSelect}></button>
//

  
  



