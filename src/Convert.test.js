import {act, fireEvent, render, screen} from '@testing-library/react';
import {Convert, ERROR_NEGVALUE} from './componentes/Convert';
import userEvent from '@testing-library/user-event';
describe('Cuando se ingresa un numero', () => {
	test('convierte un valor > 0 en millas a km correctamente', () => {
		//arrange
		render(<Convert />);
		const tagValue = screen.getByTestId("numberKm");
		const tagInputMillas = screen.getByTestId("millas");
    //active
	  userEvent.type(tagInputMillas, '10')
    //assert
    expect(tagValue).toHaveTextContent("16.09");
  });
	test("un valor < 0 debe dar un mensjae de error al user",() =>{
		//arange
		render(<Convert/>)
		const tagValue = screen.getByTestId("numberKm");
		const tagInputMillas = screen.getByTestId("millas");
		//active
		fireEvent.change(tagInputMillas,{target: {value: '-3'}})
		//assert
		expect(tagValue).toHaveTextContent(ERROR_NEGVALUE);
	})
	test("un valor no numerico debe dar un mensjae de error al user",() =>{
		//arange
		render(<Convert/>)
		const tagValue = screen.getByTestId("numberKm");
		const tagInputMillas = screen.getByTestId("millas");
		//active
		userEvent.type(tagInputMillas, 'holaa')
		//assert
		expect(tagValue).toHaveTextContent("0");
	})
})