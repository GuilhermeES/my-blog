import {Container} from '../Container.styled'
import {Title, Subtitle, Page, HeaderHero} from './style'

export default function Hero() {
    return(
        <>
            <HeaderHero>
                <Container textAlign="center"> 
                    <Page>⛺ Homepage</Page>
                    <Title>Minimal blog template for creative expressions</Title>
                    <Subtitle>
                        100% customisable and SEO-friendly blog template for personal and commercial purposes.
                    </Subtitle>
                </Container>
            </HeaderHero>
        </>
    )
}