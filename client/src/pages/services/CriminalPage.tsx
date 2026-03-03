import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function CriminalPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20direito%20criminal", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511938059405";
  };

  const faqItems = [
    {
      question: "O que fazer se for preso em flagrante?",
      answer: "Se você for preso em flagrante, tem direito a ser informado sobre seus direitos, incluindo o direito de permanecer em silêncio e de ter um advogado. Entre em contato conosco imediatamente. Atuamos 24 horas em delegacias para solicitar sua liberdade provisória na audiência de custódia, que deve ocorrer em até 24 horas após a prisão."
    },
    {
      question: "Qual é a diferença entre prisão em flagrante e preventiva?",
      answer: "A prisão em flagrante ocorre no momento do crime ou logo depois, sem necessidade de ordem judicial. A prisão preventiva é decretada por um juiz durante o processo, quando há risco de fuga ou de reiteração criminosa. Ambas podem ser contestadas através de habeas corpus ou pedidos de liberdade provisória."
    },
    {
      question: "Como funciona o habeas corpus?",
      answer: "O habeas corpus é um remédio jurídico que protege contra prisões ilegais ou abusivas. Pode ser impetrado quando há violação do direito de liberdade. Atuamos em habeas corpus preventivos (antes da prisão) e repressivos (após a prisão). O processo é rápido e pode resultar na sua libertação imediata."
    },
    {
      question: "Quanto tempo leva um processo criminal?",
      answer: "O tempo varia conforme a complexidade do caso. Processos simples podem levar 6 meses a 1 ano. Casos mais complexos podem levar 2 a 5 anos ou mais. Atuamos em todas as fases: inquérito, denúncia, instrução processual, julgamento e recursos, buscando sempre agilizar o processo."
    },
    {
      question: "Posso ser condenado sem ir ao julgamento?",
      answer: "Você tem direito a julgamento. Porém, em alguns casos, é possível fazer acordos (como confissão qualificada) que podem resultar em redução de pena. Analisamos cada caso para determinar a melhor estratégia de defesa, seja em julgamento ou através de negociações."
    },
    {
      question: "O que é audiência de custódia?",
      answer: "A audiência de custódia é obrigatória e deve ocorrer em até 24 horas após a prisão em flagrante. Nela, o juiz avalia se a prisão foi legal e se você deve permanecer preso ou ser liberado. Atuamos nessa audiência apresentando argumentos para sua libertação ou para redução de medidas cautelares."
    },
    {
      question: "Quais são os crimes mais graves?",
      answer: "Crimes como homicídio, latrocínio, estupro, tráfico de drogas e roubo qualificado são considerados graves. Esses crimes têm penas maiores e procedimentos processuais mais complexos. Nossa experiência em defesa de crimes graves permite oferecer estratégia robusta para sua defesa."
    },
    {
      question: "Posso ser defendido por advogado particular e defensor público?",
      answer: "Você pode escolher um advogado particular. Se não tiver condições financeiras, tem direito à Defensoria Pública. Alguns clientes optam por ter ambos atuando em conjunto. Oferecemos consultoria especializada e atuação completa em sua defesa criminal."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary display-font">
            André Dias Advogados
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-sm text-foreground hover:text-primary transition">Home</a>
            <a href="/direito-criminal" className="text-sm text-primary font-semibold">Criminal</a>
            <a href="/direito-trabalhista" className="text-sm text-foreground hover:text-primary transition">Trabalhista</a>
            <a href="/direito-civel" className="text-sm text-foreground hover:text-primary transition">Cível</a>
            <a href="/direito-de-familia" className="text-sm text-foreground hover:text-primary transition">Família</a>
            <a href="/direito-empresarial" className="text-sm text-foreground hover:text-primary transition">Empresarial</a>
          </nav>
          <Button onClick={handleWhatsApp} size="sm" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-font">
              Direito Criminal em São Paulo
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Defesa especializada em casos criminais. Atuamos em prisões em flagrante, habeas corpus, defesas criminais e recursos em tribunais superiores. Atendimento 24 horas na Zona Leste de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </Button>
              <Button size="lg" variant="outline" onClick={handlePhone} className="gap-2">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 display-font">
            Especialidades em Direito Criminal
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Prisão em Flagrante</h3>
                  <p className="text-foreground/80">
                    Atuação imediata em delegacias e fóruns. Pedidos de liberdade provisória em audiências de custódia com argumentação técnica e estratégica.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Audiência de Custódia</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Liberdade Provisória</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Atendimento 24h</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Habeas Corpus</h3>
                  <p className="text-foreground/80">
                    Proteção contra prisões ilegais. Impetration de habeas corpus em primeira e segunda instância, com atuação em tribunais superiores quando necessário.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Habeas Corpus Preventivo</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Habeas Corpus Repressivo</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Tribunal do Júri</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Defesa Criminal</h3>
                  <p className="text-foreground/80">
                    Defesa técnica em todas as fases do processo penal: inquérito policial, denúncia, instrução processual, julgamento e recursos.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Crimes Graves</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Crimes Leves</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Tráfico de Drogas</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Mandado de Segurança</h3>
                  <p className="text-foreground/80">
                    Proteção contra abusos de autoridade. Impetration de mandado de segurança contra decisões ilegais de juízes, delegados e órgãos administrativos.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Abuso de Autoridade</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Decisões Ilegais</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Direitos Constitucionais</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Recursos em Tribunais Superiores</h3>
                  <p className="text-foreground/80">
                    Atuação em segunda instância (Tribunal de Justiça), terceira instância (STJ) e quarta instância (STF) em Brasília.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Apelação</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Recurso Especial</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Recurso Extraordinário</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Por que escolher nosso escritório?
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>16 anos de experiência em defesa criminal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atendimento 24 horas em delegacias e fóruns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Estratégia personalizada para cada caso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Sigilo profissional garantido</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atuação em toda a Zona Leste de São Paulo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Perguntas Frequentes sobre Direito Criminal"
        description="Respostas para as dúvidas mais comuns sobre processos criminais, prisões e seus direitos."
        items={faqItems}
        schemaData={faqSchema}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Precisa de ajuda agora?
            </h3>
            <p className="text-foreground/80 mb-6">
              Não deixe para depois. Entre em contato com nossos especialistas em direito criminal. Dispomos de atendimento 24 horas para emergências.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Enviar Mensagem
              </Button>
              <Button size="lg" variant="outline" onClick={handlePhone} className="gap-2">
                <Phone className="w-5 h-5" />
                (11) 9 3805-9405
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">André Dias Advogados</h4>
              <p className="text-sm text-foreground/70">Advocacia especializada com 16 anos de experiência na Zona Leste de São Paulo.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">Áreas</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="/direito-criminal" className="hover:text-primary transition">Criminal</a></li>
                <li><a href="/direito-trabalhista" className="hover:text-primary transition">Trabalhista</a></li>
                <li><a href="/direito-civel" className="hover:text-primary transition">Cível</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">Contato</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="tel:+5511938059405" className="hover:text-primary transition">🚨 Criminal: (11) 9 3805-9405</a></li>
                <li><a href="tel:+551150506310" className="hover:text-primary transition">📞 Demais Áreas: (11) 5050-6310</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">Localização</h4>
              <a
                href="https://maps.google.com/?q=Rua+Aldeia+dos+Machac%C3%A1lis,+124,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-primary transition"
              >Rua Aldeia dos Machacális, 124<br />Zona Leste - São Paulo/SP</a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 André Dias Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "André Dias Advogados - Direito Criminal",
        "description": "Defesa especializada em direito criminal em São Paulo. Atendimento 24 horas em prisões em flagrante, habeas corpus e defesas criminais.",
        "url": "https://www.andrediasadvogados.com.br/direito-criminal",
        "telephone": "+5511938059405",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Aldeia dos Machacális, 124",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "03000-000",
          "addressCountry": "BR"
        },
        "areaServed": "São Paulo, SP",
        "serviceType": "Direito Criminal"
      })}} />
    </div>
  );
}
