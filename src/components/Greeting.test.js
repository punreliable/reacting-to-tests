import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test( 'renders Hello World message', () => {

render(<Greeting />);
screen.getByText('Hello World!', {exact: true});
const helloWorldElement = screen.getByText('Hello World', { exact: false});
expect(helloWorldElement).toBeInTheDocument();

});
