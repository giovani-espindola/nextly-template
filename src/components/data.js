import {
  Battery100Icon,
  FaceSmileIcon,
  BoltIcon,
  HeartIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/dai-dicas-1.jpg";
import benefitTwoImg from "../../public/img/dai-dicas-2.jpg";

const benefitOne = {
  title: 'O Ser que você Será lhe espera!',
  desc: "Tantra oferece uma conexão transcendente com a fonte da vida e o viver, que estão acessíveis e disponíveis a qualquer ser humano, sem privilégios.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Ejaculação Precoce",
      desc: "Oferecemos uma metodologia que promove a reeducação sensorial com base na percepção da energia sexual.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Falta de Libido e Tesão em Viver",
      desc: "O prazer e o afeto são explorados de forma consciente e com um propósito não-sexual, abrindo os caminhos de mobilização e de expansão da energia sexual através do seu corpo",
      icon: <Battery100Icon />,
    },
    {
      title: "Anorgasmia (Falta de Orgasmos)",
      desc: "O terapeuta sente as áreas de menor reação e conduz os estímulos de tal forma que sensibiliza as áreas congeladas e neutras, restaurando a sensibilidade e os reflexos musculares",
      icon: <BoltIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Através de toda a sutileza, amor e carinho do Tantra, transmutamos o ser.",
  desc: "Tendo adquirido o uso dos sentidos internos, tendo vencido os desejos dos sentidos externos, tendo vencido os desejos da alma individual, e tendo adquirido conhecimento, prepare-se agora para entrar realmente no caminho",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Depressão",
      desc: "A Terapêutica Tântrica, aplicada em sessões individuais ajudam a controlar casos leves ou moderados de depressão.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Dor no Sexo (Dispareunia)",
      desc: "Desenvolvemos uma metodologia onde o terapeuta sente e reconhece os sinais fisiológicos que o corpo comunica, reduzindo as tensões e conectando, pouco a pouco, os músculos sexuais com o prazer.",
      icon: <HeartIcon />,
    },
    {
      title: "Impotência Sexual",
      desc: "Pesquisamos o potencial do corpo em readaptar-se aos estímulos que provocam uma releitura no potencial de prazer do corpo",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
