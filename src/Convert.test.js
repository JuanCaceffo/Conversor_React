import { render, screen } from '@testing-library/react';
import { Convert } from './componentes/Convert';
import userEvent from '@testing-library/user-event';

describe('Cuando se ingresa un numero', () => {
  test('convierte un valor > 0 en millas a km correctamente', () => {
    //arrange
    render(<Convert />);
    const tagValue = screen.getByTestId("numberKm");
    const inputMillas = screen.getByTestId("millas");
    //active
    userEvent.type(inputMillas, '10')
    //assert
    expect(tagValue).toHaveTextContent("16.09");
  });
})