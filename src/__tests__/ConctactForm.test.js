import {screen, render} from "@testing-library/react";
import ContactForm from "../components/Layout/ContactForm";

test('render name , email ,password inputs', () => {
    render(<ContactForm/>);
    const nameELement = screen.getByText('name');
    const emailELement = screen.getByText('name');
    const passwordElement = screen.getByText('name');

    expect(nameELement).toBeInTheDocument();
    expect(emailELement).toBeInTheDocument()
    expect(passwordElement).toBeInTheDocument()

})