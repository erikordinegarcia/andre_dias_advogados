import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function FamilyPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511950506310?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20direito%20de%20fam%C3%ADlia", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511950506310";
  };

  const faqItems = [
    {
      question: "Como fazer um divórcio consensual?",
      answer: "Se há acordo entre os cônjuges sobre tudo (bens, filhos, pensão), o divórcio é rápido e simples. Pode ser feito em cartório (sem juiz) ou judicialmente. Documentação necessária: certidão de casamento, documentos pessoais, comprovante de residência. Levamos 1 a 3 meses para conclusão."
    },
    {
      question: "Qual é a diferença entre guarda compartilhada e unilateral?",
      answer: "Guarda compartilhada: ambos os pais têm direitos e responsabilidades iguais sobre os filhos. Guarda unilateral: um dos pais tem a guarda, o outro tem direito de visitação. A lei prefere guarda compartilhada, mas analisamos cada caso para determinar o melhor para os filhos."
    },
    {
      question: "Como é calculada a pensão alimentícia?",
      answer: "A pensão é calculada considerando: renda de ambos os pais, número de filhos, despesas com educação, saúde e moradia. Geralmente é entre 15% a 30% da renda do pai/mãe que paga. Pode ser revisada se houver mudança de renda ou circunstâncias."
    },
    {
      question: "Posso cobrar pensão alimentícia atrasada?",
      answer: "Sim, você pode cobrar pensão atrasada com juros e correção monetária. O prazo para cobrar é de 5 anos. Se o devedor não pagar, pode haver penhora de bens, bloqueio de contas e até prisão civil em alguns casos."
    },
    {
      question: "Como é feita a divisão de bens no divórcio?",
      answer: "Bens adquiridos durante o casamento são divididos igualmente (regime de comunhão parcial). Bens anteriores ao casamento ou recebidos por herança/doação são do cônjuge que os adquiriu. Analisamos cada bem para garantir divisão justa."
    },
    {
      question: "Qual é o prazo para divorciar?",
      answer: "Divórcio consensual: 1 a 3 meses. Divórcio litigioso: 1 a 3 anos, dependendo da complexidade. Atuamos para agilizar o processo sem prejudicar seus direitos. Em casos urgentes, podemos solicitar procedimentos acelerados."
    },
    {
      question: "Posso perder a guarda dos meus filhos?",
      answer: "Sim, se há negligência, abuso ou ambiente inadequado. O juiz prioriza o melhor interesse dos filhos. Se você está em risco de perder a guarda, procure-nos imediatamente. Temos estratégia para proteger seus direitos parentais."
    },
    {
      question: "O que é mediação familiar?",
      answer: "Mediação é um processo onde um mediador neutro ajuda a família a resolver conflitos de forma amigável. É mais humanizado que ação judicial, menos custoso e mais rápido. Muitos casos de divórcio e guarda são resolvidos em mediação."
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
            <a href="/direito-criminal" className="text-sm text-foreground hover:text-primary transition">Criminal</a>
            <a href="/direito-trabalhista" className="text-sm text-foreground hover:text-primary transition">Trabalhista</a>
            <a href="/direito-civel" className="text-sm text-foreground hover:text-primary transition">Cível</a>
            <a href="/direito-de-familia" className="text-sm text-primary font-semibold">Família</a>
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
              Direito de Família em São Paulo
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Soluções humanizadas para questões familiares. Divórcio, guarda de filhos, pensão alimentícia, separação e mediação familiar. Atendimento sensível e especializado.
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
            Especialidades em Direito de Família
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Divórcio Consensual</h3>
                  <p className="text-foreground/80">
                    Divórcio rápido e amível quando há acordo entre os cônjuges. Documentação simplificada e sem necessidade de ação judicial.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Divórcio Extrajudicial</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Acordo de Divisão</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Documentação</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Divórcio Litigioso</h3>
                  <p className="text-foreground/80">
                    Divórcio quando não há acordo. Defesa de seus direitos em relação à divisão de bens, guarda e pensão.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Divórcio Judicial</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Defesa de Direitos</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Recursos</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Guarda de Filhos</h3>
                  <p className="text-foreground/80">
                    Guarda compartilhada ou unilateral. Proteção dos direitos dos filhos e definição de regime de visitação.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Guarda Compartilhada</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Guarda Unilateral</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Regime de Visitação</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Pensão Alimentícia</h3>
                  <p className="text-foreground/80">
                    Fixação, revisão e cobreça de pensão alimentícia. Proteção dos direitos dos filhos e cônjuges dependentes.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Fixação</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Revisão</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Cobreça</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Separação de Bens</h3>
                  <p className="text-foreground/80">
                    Divisão justa do patrimônio acumulado durante o casamento. Análise completa de bens e direitos.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Regime de Bens</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Divisão Patrimonial</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Direitos Adquiridos</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Mediação Familiar</h3>
                  <p className="text-foreground/80">
                    Solução de conflitos familiares através de mediação. Processo mais humanizado e menos custoso que ações judiciais.
                  </p>
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
                <span>Especialista em direito de família com 16 anos de experiência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atendimento sensível e humanizado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Proteção dos direitos de todos os envolvidos, especialmente filhos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Mediação e conciliação quando possível</span>
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
        title="Perguntas Frequentes sobre Direito de Família"
        description="Respostas para as dúvidas mais comuns sobre divórcio, guarda, pensão alimentícia e mediação familiar."
        items={faqItems}
        schemaData={faqSchema}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Passando por uma situação familiar difícil?
            </h3>
            <p className="text-foreground/80 mb-6">
              Procure-nos para uma consulta confidencial. Temos experiência em resolver questões familiares de forma justa e humanizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Enviar Mensagem
              </Button>
              <Button size="lg" variant="outline" onClick={handlePhone} className="gap-2">
                <Phone className="w-5 h-5" />
                (11) 5050-6310
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
        "name": "André Dias Advogados - Direito de Família",
        "description": "Especialista em direito de família em São Paulo. Divórcio, guarda, pensão alimentícia e mediação familiar.",
        "url": "https://www.andrediasadvogados.com.br/direito-de-familia",
        "telephone": "+5511950506310",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Aldeia dos Machacális, 124",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "03000-000",
          "addressCountry": "BR"
        },
        "areaServed": "São Paulo, SP",
        "serviceType": "Direito de Família"
      })}} />
    </div>
  );
}
