import { Container } from "./styles"
export function Button ({title,icon: Icon, exclud,...rest}) {
    return(
        <Container $exclud={exclud} {...rest}>
           {Icon && <Icon size={20} />} {title}
        </Container>
    )
}