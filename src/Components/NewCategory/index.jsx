import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function NewCategory({isNew = false, name}) {
    return (
        <Container $isNew={isNew}>
            <span> {isNew ? "Novo marcardor" : name}</span>

            {isNew? <FiPlus /> : <FiX />}
        </Container>
    )
}