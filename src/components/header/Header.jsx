import Form from "../form/Form";
import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <div className="navbar">
            <Logo />
            <Form />
        </div>
    )
}