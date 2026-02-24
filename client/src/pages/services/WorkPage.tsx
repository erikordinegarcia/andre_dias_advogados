import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function WorkPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511950506310?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20direito%20trabalhista", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511950506310";
  };

  const faqItems = [
    {
      question: "Como calcular as verbas rescisórias após demissão?",
      answer: "As verbas rescisórias incluem: saldo de salário (dias trabalhados), 13º proporcional, férias vencidas + terço constitucional, férias proporcionais + terço, e multa de 40% do FGTS. Cada cálculo depende do motivo da demissão e do tempo de serviço. Oferecemos cálculo preciso e análise se há valores não pagos."
    },
    {
      question: "Posso ser demitido sem justa causa?",
      answer: "Sim, o empregador pode demitir sem justa causa, mas deve pagar todas as verbas rescisórias. Se a demissão foi injusta (sem motivo legítimo), você pode reclamar na Justiça do Trabalho. Analisamos cada caso para determinar se há direito a indenização por danos morais além das verbas."
    },
    {
      question: "O que é rescisão indireta?",
      answer: "Rescisão indireta ocorre quando o empregador descumpre obrigações legais (não paga salário, oferece ambiente inseguro, etc.), permitindo que o trabalhador 'demita' a empresa. O empregado recebe como se tivesse sido demitido sem justa causa, incluindo multa de 40% do FGTS."
    },
    {
      question: "Como provar assédio moral no trabalho?",
      answer: "Assédio moral é caracterizado por humilhação, constrangimento ou perseguição repetida. Provas incluem: testemunhas, mensagens, e-mails, registros de agressões verbais, atestados médicos comprovando danos psicológicos. Acionamos na Justiça do Trabalho para condenação e indenização por danos morais."
    },
    {
      question: "Tenho direito a horas extras?",
      answer: "Sim, se trabalhou além da jornada contratada (8 horas/dia ou 44 horas/semana). As horas extras devem ser pagas com acréscimo de 50% (noturno) ou 100% (diurno). Podemos cobrar horas extras não pagas dos últimos 5 anos com correção monetária e juros."
    },
    {
      question: "Qual é o valor da indenização por assédio moral?",
      answer: "Não há valor fixo. O juiz considera: intensidade do assédio, duração, danos psicológicos, perda de renda. Indenizações variam de R$ 5 mil a R$ 100 mil ou mais, dependendo do caso. Buscamos maximizar a indenização com base em jurisprudência consolidada."
    },
    {
      question: "Posso reclamar na Justiça do Trabalho sozinho?",
      answer: "Sim, você pode reclamar sozinho, mas ter um advogado especialista aumenta significativamente as chances de sucesso. Conhecemos os procedimentos, prazos e argumentos que funcionam. Oferecemos consultoria completa desde a análise até a execução da sentença."
    },
    {
      question: "Qual é o prazo para reclamar direitos trabalhistas?",
      answer: "O prazo é de até 2 anos após o término do contrato de trabalho (ou até 5 anos para horas extras). Após esse período, prescreve o direito. Se você foi demitido recentemente, não perca tempo: procure-nos para análise imediata de seus direitos."
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
            <a href="/direito-trabalhista" className="text-sm text-primary font-semibold">Trabalhista</a>
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
              Direito Trabalhista em São Paulo
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Defesa de direitos trabalhistas. Atuamos em demissões injustas, cálculo de verbas rescisórias, assédio moral, horas extras e indenizações. Consultoria especializada para trabalhadores e empresas.
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
            Especialidades em Direito Trabalhista
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Demissões Injustas</h3>
                  <p className="text-foreground/80">
                    Defesa contra demissões sem justa causa. Análise completa do processo de rescisão e recuperação de direitos trabalhistas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Cálculo de Verbas Rescisórias</h3>
                  <p className="text-foreground/80">
                    Cálculo preciso de todas as verbas devidas: saldo de salário, 13º proporcional, férias, FGTS e multa de 40%.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Assédio Moral no Trabalho</h3>
                  <p className="text-foreground/80">
                    Proteção contra assédio moral, discriminação e perseguição no ambiente de trabalho. Ação por danos morais.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Horas Extras e Adicional Noturno</h3>
                  <p className="text-foreground/80">
                    Cobrança de horas extras não pagas, adicional noturno e diferenças salariais. Cálculo com correção monetária.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Rescisão Indireta</h3>
                  <p className="text-foreground/80">
                    Quando o empregador descumpre obrigações legais, o trabalhador pode "demitir" a empresa e receber como demitido sem justa causa.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Consultoria para Empresas</h3>
                  <p className="text-foreground/80">
                    Orientação sobre legislação trabalhista, contratos, rescisões e conformidade com normas trabalhistas.
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
                <span>Especialista em direito trabalhista com 16 anos de experiência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Análise detalhada de cada caso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Recuperação máxima de direitos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atendimento personalizado</span>
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
        title="Perguntas Frequentes sobre Direito Trabalhista"
        description="Respostas para as dúvidas mais comuns sobre demissão, verbas rescisórias, horas extras e direitos trabalhistas."
        items={faqItems}
        schemaData={faqSchema}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Você foi demitido ou sofre assédio no trabalho?
            </h3>
            <p className="text-foreground/80 mb-6">
              Não deixe seus direitos para depois. Procure-nos para uma consulta especializada. Temos soluções para sua situação.
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
              <p className="text-sm text-foreground/70">Rua Aldeia dos Machacális, 124<br />Zona Leste - São Paulo/SP</p>
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
        "name": "André Dias Advogados - Direito Trabalhista",
        "description": "Especialista em direito trabalhista em São Paulo. Defesa de demissões injustas, horas extras, assédio moral e consultoria trabalhista.",
        "url": "https://www.andrediasadvogados.com.br/direito-trabalhista",
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
        "serviceType": "Direito Trabalhista"
      })}} />
    </div>
  );
}
