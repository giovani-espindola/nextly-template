import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="O caminho do sim amoroso"
        title="Daiane de Sousa - Terapeuta"
      >
        “Uma rosa é uma oportunidade para a beleza acontecer. Tantra é uma oportunidade para a divindade se manifestar através de nós, para que nós, como seres limitados, possamos compartilhar o êxtase do universo.” - Osho
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Terapia Tântrica"
        title="Veja como funciona a sessão"
      >
        Um caminho para transformação!
      </SectionTitle>

      <Video videoId="iENUSChRbh8" />

      <SectionTitle
        preTitle="Depoimentos"
        title="O que estão falando"
      >

      </SectionTitle>

      <Testimonials />

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}
      {/* <Cta /> */}
    </Container>
  );
}
