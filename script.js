// Lógica do carrossel INICIO
let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;

  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}
// Lógica do carrossel FIM

// Lógica do modal INICIO
// Texto para o modal
const odsTexts = [
  {
    title: "ODS 1: Erradicação da Pobreza",
    text: `
      O objetivo da ODS 1 é erradicar a pobreza em todas as suas formas e em todos os lugares. A pobreza extrema, medida como pessoas que vivem com menos de 1,90 dólares por dia, foi reduzida significativamente nos últimos anos, mas ainda persiste em várias partes do mundo.<br/><br/>
      Erradicar a pobreza é um desafio global, pois ela afeta a qualidade de vida de bilhões de pessoas, privando-as de direitos básicos como alimentação, saúde e educação. A pobreza não se limita à falta de renda, mas também a uma privação multidimensional que inclui vulnerabilidades sociais e econômicas.<br/><br/>
      Para acabar com a pobreza, é necessário implementar políticas públicas eficazes que incluam proteção social, criação de empregos e acesso a serviços de qualidade. Além disso, a cooperação internacional e o financiamento adequado são essenciais para garantir que todas as pessoas possam escapar desse ciclo de pobreza.<br/><br/>
      `,
  },
  {
    title: "ODS 2: Fome Zero e Agricultura Sustentável",
    text: `
      A ODS 2 busca acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável. Apesar do aumento na produção global de alimentos, milhões de pessoas ainda passam fome todos os dias, especialmente em países em desenvolvimento.<br/><br/>
      A fome não é apenas uma questão de produção insuficiente de alimentos, mas também de desigualdade no acesso a esses recursos. Grupos vulneráveis, como crianças, idosos e pessoas de baixa renda, são os mais afetados. Além disso, a má nutrição causa uma série de problemas de saúde, incluindo o desenvolvimento inadequado em crianças.<br/><br/>
      Para acabar com a fome, é necessário promover uma agricultura mais eficiente e sustentável, capacitar pequenos produtores e garantir a equidade no acesso a alimentos. Isso requer melhorias nas infraestruturas rurais, redução do desperdício de alimentos e o uso de tecnologias inovadoras no campo.<br/><br/>
      `,
  },
  {
    title: "ODS 3: Saúde e Bem-Estar",
    text: `
      A ODS 3 visa assegurar uma vida saudável e promover o bem-estar para todos em todas as idades. Isso inclui a redução da mortalidade materna e infantil, a erradicação de epidemias e o combate a doenças transmissíveis e não transmissíveis.<br/><br/>
      Um dos principais desafios para alcançar a saúde global é o acesso universal a serviços de saúde de qualidade. Muitos países ainda enfrentam problemas com a infraestrutura de saúde, a falta de profissionais qualificados e a desigualdade no acesso a medicamentos essenciais.<br/><br/>
      Além disso, questões como saúde mental, dependência de substâncias e condições ambientais que afetam o bem-estar geral devem ser abordadas para garantir que todos possam viver com qualidade e dignidade. Campanhas de prevenção e promoção da saúde são cruciais para reduzir o impacto de doenças evitáveis.<br/><br/>
      `,
  },
  {
    title: "ODS 4: Educação de Qualidade",
    text: `
      A ODS 4 busca assegurar uma educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizagem ao longo da vida para todos. A educação é a chave para o desenvolvimento sustentável e o combate à desigualdade social.<br/><br/>
      Embora o acesso à educação tenha aumentado globalmente, a qualidade da educação oferecida ainda varia significativamente entre regiões. Muitas crianças ainda não têm acesso à educação básica, e em muitos países, as taxas de analfabetismo permanecem elevadas.<br/><br/>
      Investir na formação de professores, melhorar as infraestruturas escolares e garantir a inclusão de crianças com deficiência são aspectos fundamentais para alcançar uma educação de qualidade para todos. A tecnologia também pode desempenhar um papel importante ao oferecer novas oportunidades de aprendizado, especialmente em áreas remotas.<br/><br/>
      `,
  },
  {
    title: "ODS 5: Igualdade de Gênero",
    text: `
      A ODS 5 visa alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Apesar de avanços, a discriminação de gênero ainda está presente em muitas sociedades, afetando a vida de milhões de mulheres em todo o mundo.<br/><br/>
      A igualdade de gênero não é apenas uma questão de justiça social, mas também um fator chave para o desenvolvimento econômico. Mulheres com acesso igualitário à educação, ao mercado de trabalho e à saúde têm mais oportunidades de contribuir de maneira significativa para o progresso da sociedade.<br/><br/>
      A eliminação de práticas nocivas, como o casamento infantil e a violência de gênero, é crucial para garantir que as mulheres possam viver com dignidade e autonomia. Além disso, é essencial garantir que as mulheres tenham representação igual em todas as esferas da vida pública e privada.<br/><br/>
      `,
  },
  {
    title: "ODS 6: Água Potável e Saneamento",
    text: `
      A ODS 6 busca garantir a disponibilidade e gestão sustentável da água e saneamento para todos. O acesso à água potável é um direito humano fundamental, mas milhões de pessoas em todo o mundo ainda não têm acesso a esse recurso essencial.<br/><br/>
      A falta de acesso a água de qualidade e saneamento adequado afeta diretamente a saúde pública, resultando em doenças como diarreia e cólera. Além disso, a poluição e o uso excessivo de recursos hídricos estão esgotando as reservas de água doce em várias regiões.<br/><br/>
      Para garantir água limpa e saneamento para todos, é necessário investir em infraestruturas adequadas, melhorar a gestão dos recursos hídricos e promover práticas sustentáveis que preservem a qualidade da água e protejam os ecossistemas aquáticos.<br/><br/>
      `,
  },
  {
    title: "ODS 7: Energia Acessível e Limpa",
    text: `
      A ODS 7 visa assegurar o acesso a energia acessível, confiável, sustentável e moderna para todos. A energia é essencial para o desenvolvimento econômico, social e ambiental, mas ainda há milhões de pessoas sem acesso à eletricidade.<br/><br/>
      O uso predominante de combustíveis fósseis está diretamente ligado às mudanças climáticas e à degradação ambiental. Para alcançar uma transição energética sustentável, é necessário aumentar a participação de energias renováveis, como a solar e eólica, no mix energético global.<br/><br/>
      Além disso, melhorar a eficiência energética e tornar a energia mais acessível para populações vulneráveis são medidas cruciais para reduzir a desigualdade e combater os efeitos das mudanças climáticas.<br/><br/>
      `,
  },
  {
    title: "ODS 8: Trabalho Decente e Crescimento Econômico",
    text: `
      A ODS 8 busca promover o crescimento econômico sustentado, inclusivo e sustentável, além de garantir trabalho decente para todos. O desemprego, especialmente entre jovens, e a precarização do trabalho são desafios que afetam o crescimento econômico em todo o mundo.<br/><br/>
      Promover o trabalho decente significa garantir condições de trabalho seguras, salários justos e a proteção dos direitos trabalhistas. Também envolve a criação de oportunidades para o desenvolvimento pessoal e profissional dos trabalhadores.<br/><br/>
      Além disso, o crescimento econômico deve ser equilibrado com a preservação ambiental e a inclusão social, assegurando que os benefícios sejam amplamente distribuídos e que ninguém seja deixado para trás.<br/><br/>
      `,
  },
  {
    title: "ODS 9: Indústria, Inovação e Infraestrutura",
    text: `
      A ODS 9 foca em construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável, e fomentar a inovação. Infraestruturas adequadas, como estradas, energia e comunicações, são essenciais para o crescimento econômico e a melhoria da qualidade de vida.<br/><br/>
      A inovação é um dos principais motores do desenvolvimento sustentável, permitindo que as indústrias cresçam de forma eficiente e ambientalmente responsável. Investimentos em pesquisa e desenvolvimento são cruciais para impulsionar a inovação tecnológica.<br/><br/>
      Além disso, a industrialização inclusiva deve garantir que os benefícios do desenvolvimento econômico cheguem a todos, incluindo as populações mais vulneráveis, e que sejam respeitados os limites ambientais para garantir a sustentabilidade a longo prazo.<br/><br/>
      `,
  },
  {
    title: "ODS 10: Redução das Desigualdades",
    text: `
      A ODS 10 visa reduzir as desigualdades dentro e entre os países. As desigualdades econômicas, sociais e políticas ainda são amplas, tanto entre países quanto dentro de nações, afetando principalmente grupos marginalizados.<br/><br/>
      Para reduzir as desigualdades, é essencial adotar políticas que promovam a inclusão social e econômica de todos, independentemente de raça, gênero, origem ou condição econômica. A redistribuição de recursos e oportunidades é uma ferramenta eficaz para combater a desigualdade.<br/><br/>
      Além disso, a cooperação internacional e a reforma de instituições globais podem ajudar a equilibrar as disparidades entre os países e promover um crescimento econômico mais equitativo e sustentável.<br/><br/>
      `,
  },
  {
    title: "ODS 11: Cidades e Comunidades Sustentáveis",
    text: `
      A ODS 11 visa tornar as cidades e comunidades inclusivas, seguras, resilientes e sustentáveis. A rápida urbanização tem criado desafios como a escassez de moradia acessível, a poluição do ar e o aumento da vulnerabilidade a desastres naturais.<br/><br/>
      Para garantir que as cidades sejam sustentáveis, é necessário melhorar a infraestrutura urbana, aumentar o acesso ao transporte público e reduzir o impacto ambiental das atividades urbanas. Também é importante garantir que as áreas urbanas sejam inclusivas e acessíveis a todos os grupos sociais.<br/><br/>
      Além disso, a gestão eficaz dos recursos naturais e a criação de espaços verdes são essenciais para melhorar a qualidade de vida nas cidades e tornar os ambientes urbanos mais resilientes às mudanças climáticas.<br/><br/>
      `,
  },
  {
    title: "ODS 12: Consumo e Produção Responsáveis",
    text: `
      A ODS 12 busca garantir padrões de consumo e produção sustentáveis. O atual modelo de produção e consumo, baseado na extração de recursos naturais e no desperdício, não é sustentável a longo prazo e está contribuindo para a degradação ambiental.<br/><br/>
      Promover o consumo responsável significa reduzir o desperdício de alimentos, melhorar a eficiência no uso de recursos e promover a reciclagem. As empresas também têm um papel fundamental na adoção de práticas de produção mais limpas e eficientes.<br/><br/>
      Além disso, políticas públicas que incentivem a economia circular, onde produtos são reutilizados e reciclados, são essenciais para garantir que os recursos sejam usados de maneira mais responsável e que os impactos ambientais sejam minimizados.<br/><br/>
      `,
  },
  {
    title: "ODS 13: Ação Contra a Mudança Global do Clima",
    text: `
      A ODS 13 visa tomar medidas urgentes para combater as mudanças climáticas e seus impactos. As mudanças climáticas estão afetando a vida de milhões de pessoas em todo o mundo, e seus efeitos só vão se intensificar nos próximos anos.<br/><br/>
      Mitigar os impactos das mudanças climáticas exige a redução de emissões de gases de efeito estufa, a transição para energias limpas e o fortalecimento da resiliência das comunidades frente aos desastres naturais.<br/><br/>
      Além disso, é necessário que os governos adotem políticas climáticas ambiciosas e que as empresas e a sociedade civil contribuam para a redução dos impactos negativos sobre o clima e o meio ambiente.<br/><br/>
      `,
  },
  {
    title: "ODS 14: Vida na Água",
    text: `
      A ODS 14 visa conservar e usar de forma sustentável os oceanos, mares e recursos marinhos. Os ecossistemas marinhos estão sob grande pressão devido à poluição, à sobrepesca e às mudanças climáticas.<br/><br/>
      Proteger os ecossistemas marinhos e costeiros é fundamental para a saúde do planeta e o sustento de milhões de pessoas que dependem do mar para sua subsistência. Reduzir a poluição e promover a pesca sustentável são medidas prioritárias.<br/><br/>
      Além disso, é necessário ampliar as áreas marinhas protegidas, proibir subsídios que promovem práticas de pesca prejudiciais e incentivar o uso sustentável dos recursos oceânicos para preservar a biodiversidade marinha.<br/><br/>
      `,
  },
  {
    title: "ODS 15: Vida Terrestre",
    text: `
      A ODS 15 tem como foco proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, combater a desertificação, deter a degradação do solo e a perda de biodiversidade.<br/><br/>
      As florestas desempenham um papel vital no combate às mudanças climáticas e na proteção da biodiversidade. No entanto, a desflorestação e a degradação dos ecossistemas continuam a ocorrer em ritmo alarmante.<br/><br/>
      Promover a gestão sustentável dos recursos florestais, restaurar ecossistemas degradados e proteger espécies ameaçadas são ações essenciais para garantir a saúde dos ecossistemas terrestres e a preservação da biodiversidade.<br/><br/>
      `,
  },
  {
    title: "ODS 16: Paz, Justiça e Instituições Eficazes",
    text: `
      A ODS 16 busca promover sociedades pacíficas e inclusivas, proporcionar acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.<br/><br/>
      A violência, a corrupção e a ineficiência das instituições continuam a ser desafios globais que impedem o desenvolvimento sustentável. Fortalecer o Estado de Direito e garantir o acesso à justiça são fundamentais para sociedades mais justas.<br/><br/>
      Além disso, é importante promover a participação inclusiva na tomada de decisões e combater todas as formas de discriminação, garantindo que as instituições sejam responsáveis e transparentes para todos.<br/><br/>
      `,
  },
  {
    title: "ODS 17: Parcerias e Meios de Implementação",
    text: `
      A ODS 17 destaca a importância de fortalecer as parcerias globais para o desenvolvimento sustentável. A implementação dos objetivos globais requer cooperação entre governos, setor privado, sociedade civil e outras partes interessadas.<br/><br/>
      Mobilizar recursos financeiros, transferir tecnologias e promover o desenvolvimento de capacidades nos países em desenvolvimento são componentes essenciais para alcançar todos os ODS.<br/><br/>
      Além disso, é fundamental fortalecer a cooperação internacional e promover o comércio justo, garantir que as parcerias globais sejam inclusivas e transparentes, e assegurar que ninguém seja deixado para trás.<br/><br/>
      `,
  },
];

// Função para abrir o modal
function openModal(odsToOpen) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");
  const title = document.getElementById("modal-title");

  title.innerHTML = odsTexts[odsToOpen - 1].title;
  text.innerHTML = odsTexts[odsToOpen - 1].text;

  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// Lógica do modal FIM
