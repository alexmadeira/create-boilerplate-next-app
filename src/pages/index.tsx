import Image from 'next/image'

import {
  Container,
  Header,
  LogosContainer,
  TextStart,
  PackagesBox,
  Footer,
} from '../styles/pages/home'

import logo from '../assets/img/logo.png'
import nextLogo from '../assets/img/nextjs.png'

import reactLogo from '../assets/img/packages/react.png'
import typescriptLogo from '../assets/img/packages/typescript.png'
import stitchesLogo from '../assets/img/packages/stitches.png'
import huskyLogo from '../assets/img/packages/husky.png'
import eslintLogo from '../assets/img/packages/eslint.png'
import commitlintLogo from '../assets/img/packages/commitlint.png'
import commitizenLogo from '../assets/img/packages/commitizen.png'

import envelope from '../assets/img/icons/envelope.png'
import githubLogo from '../assets/img/icons/githubLogo.png'
import linkedinLogo from '../assets/img/icons/linkedinLogo.png'
import desktop from '../assets/img/icons/desktop.png'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Madeira | NextJs Boilerplate</title>
      </Head>
      <Container>
        <Header>
          <h1>Alex Madeira</h1>
          <p>NextJs Boilerplate</p>
        </Header>
        <LogosContainer>
          <Image src={nextLogo} width={286} height={172} alt="NextJs logo" />
          <Image src={logo} width={172} height={172} alt="Logo" />
        </LogosContainer>
        <TextStart>Edit src/pages/index.tsx and save to test</TextStart>
        <PackagesBox>
          <div>
            <h3>Packages</h3>
          </div>
          <div>
            <a href="https://pt-br.reactjs.org/" target="_black">
              <Image
                src={reactLogo}
                width={40}
                height={40}
                alt="react logo"
                title="React"
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_black">
              <Image
                src={typescriptLogo}
                width={40}
                height={40}
                alt="typescript logo"
                title="Typescript"
              />
            </a>
            <a href="https://stitches.dev/" target="_black">
              <Image
                src={stitchesLogo}
                width={40}
                height={40}
                alt="stitches logo"
                title="Stitches"
              />
            </a>
            <a href="https://typicode.github.io/husky/#/" target="_black">
              <Image
                src={huskyLogo}
                width={40}
                height={40}
                alt="husky logo"
                title="Husky"
              />
            </a>
            <a href="https://eslint.org/" target="_black">
              <Image
                src={eslintLogo}
                width={40}
                height={40}
                alt="eslint logo"
                title="Eslint"
              />
            </a>
            <a href="https://commitlint.js.org/#/" target="_black">
              <Image
                src={commitlintLogo}
                width={40}
                height={40}
                alt="commitlint logo"
                title="Commitlint"
              />
            </a>
            <a
              href="https://commitizen-tools.github.io/commitizen/"
              target="_black"
            >
              <Image
                src={commitizenLogo}
                width={40}
                height={40}
                alt="commitizen logo "
                title="Commitizen"
              />
            </a>
          </div>
        </PackagesBox>
        <Footer>
          <div>
            <a href="mailto:alex.c.madeira@gmail.com">
              <Image src={envelope} width={27} alt="" />
              alex.c.madeira@gmail.com
            </a>
            <a
              href="https://github.com/alexmadeira"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={githubLogo} width={27} alt="" />
              https://github.com/alexmadeira
            </a>
          </div>
          <div>
            <a href="www.linkedin.com/in/alex-madeira" target="_blank">
              <Image src={linkedinLogo} width={27} alt="" />
              www.linkedin.com/in/alex-madeira
            </a>
            <a href="www.alexmadeira.com.br" target="_blank">
              <Image src={desktop} width={27} alt="" />
              www.alexmadeira.com.br
            </a>
          </div>
        </Footer>
      </Container>
    </>
  )
}
