import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Convert } from './componentes/Convert';

describe('Cuando se ingresa un numero', () => {
  test('convierte un valor > 0 en millas a km correctamente', () => {
    //arrange
    render(<Convert />);
    const tagValue = screen.getByTestId("numberKm");
    const input = screen.getByTestId("input");
    //active
    userEvent.type(input, "16.09");
    //assert
    expect(tagValue).toHaveTextContent("16.09");
  });
})
