import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function CorporatePage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511950506310?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20direito%20empresarial", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511950506310";
  };

  const faqItems = [
    {
      question: "Como constituir uma empresa?",
      answer: "Processo envolve: escolher tipo de empresa (MEI, PJ, LTDA, SA), registrar na Junta Comercial, obter CNPJ, abrir conta bancária, registrar na Prefeitura e na Receita Federal. Oferecemos orientação completa para escolher a melhor estrutura tributária e societária para seu negócio."
    },
    {
      question: "Qual é a melhor forma jurídica para minha empresa?",
      answer: "Depende do tamanho, faturamento e atividade. MEI é ideal para autônomos. PJ para profissionais liberais. LTDA para pequenas/médias empresas. SA para grandes empresas. Analisamos sua situação para recomendar a forma mais vantajosa fiscalmente."
    },
    {
      question: "Como elaborar um contrato comercial seguro?",
      answer: "Contrato deve incluir: partes, objeto, prazos, valores, condições de pagamento, direitos e deveres, cláusulas de rescisão e resolução de conflitos. Elaboramos contratos personalizados que protegem seus interesses e evitam litígios futuros."
    },
    {
      question: "O que é compliance jurídico?",
      answer: "Compliance é conformidade com leis, regulamentações e boas práticas. Inclui: políticas internas, treinamento de funcionários, auditoria, documentação. Protege sua empresa de multas, processos e danos à reputação. Implementamos programas de compliance adaptados ao seu negócio."
    },
    {
      question: "Como funciona uma fusão ou aquisição?",
      answer: "Processo envolve: análise da empresa alvo (due diligence), negociação de termos, elaboração de contrato, aprovação de sócios/acionistas, transferência de ativos e passivos. Atuamos em todas as fases para garantir operação segura e vantajosa."
    },
    {
      question: "Posso ter conflito com meu sócio?",
      answer: "Sim, conflitos entre sócios são comuns. Podem ser resolvidos por mediação, arbitragem ou ação judicial. Se há impasse, pode resultar em exclusão de sócio, dissolução ou venda de participação. Oferecemos consultoria para resolver conflitos de forma estratégica."
    },
    {
      question: "Como proteger a propriedade intelectual da minha empresa?",
      answer: "Proteção inclui: registro de marca, patente, direito autoral, segredo de negócio. Cada tipo de proteção tem procedimento específico. Orientamos sobre qual tipo de proteção é mais adequado para seus ativos intelectuais."
    },
    {
      question: "Qual é o custo de consultoria jurídica empresarial?",
      answer: "Custos variam conforme a complexidade e escopo do trabalho. Oferecemos consultoria por hora, projeto ou retainer (mensal). Discutimos opções de preço e estrutura que se adequem ao seu orçamento e necessidades."
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
            <a href="/direito-de-familia" className="text-sm text-foreground hover:text-primary transition">Família</a>
            <a href="/direito-empresarial" className="text-sm text-primary font-semibold">Empresarial</a>
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
              Direito Empresarial em São Paulo
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Consultoria jurídica para empresas. Contratos comerciais, compliance, constituição de empresas, fusões e aquisições. Proteção do seu negócio com estratégia legal.
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
            Especialidades em Direito Empresarial
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Constituição de Empresas</h3>
                  <p className="text-foreground/80">
                    Orientação completa na constituição de empresas. Escolha do regime tributário, estrutura societária e documentação necessária.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MEI/PJ</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Regime Tributário</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Documentação</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Contratos Comerciais</h3>
                  <p className="text-foreground/80">
                    Elaboração, revisão e negociação de contratos comerciais. Proteção de seus interesses em transações e parcerias.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Contratos B2B</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Parcerias</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Negociação</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Compliance Jurídico</h3>
                  <p className="text-foreground/80">
                    Implementação de programas de compliance. Conformidade com leis, regulamentações e boas práticas corporativas.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Conformidade Legal</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Programa de Compliance</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Boas Práticas</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Fusões e Aquisições</h3>
                  <p className="text-foreground/80">
                    Consultoria em processos de fusão, aquisição e incorporação de empresas. Due diligence e estruturação de operações.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Due Diligence</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Estruturação</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Negociação</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Questões Societárias</h3>
                  <p className="text-foreground/80">
                    Resolução de conflitos entre sócios. Alteração de contrato social, dissolução de sociedades e sucessão empresarial.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Conflitos entre Sócios</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Alteração Contratual</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Sucessão Empresarial</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Consultoria Geral</h3>
                  <p className="text-foreground/80">
                    Orientação estratégica em questões jurídicas do dia a dia. Proteção de patrimônio e minimização de riscos legais.
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
                <span>Especialista em direito empresarial com 16 anos de experiência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Consultoria estratégica e preventiva</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Proteção completa do seu negócio</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atuação em operações de qualquer porte</span>
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
        title="Perguntas Frequentes sobre Direito Empresarial"
        description="Respostas para as dúvidas mais comuns sobre constituição de empresas, contratos e consultoria jurídica."
        items={faqItems}
        schemaData={faqSchema}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Sua empresa precisa de consultoria jurídica?
            </h3>
            <p className="text-foreground/80 mb-6">
              Procure-nos para uma análise completa das necessidades legais do seu negócio. Temos soluções para empresas de todos os tamanhos.
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
        "name": "André Dias Advogados - Direito Empresarial",
        "description": "Consultoria jurídica para empresas em São Paulo. Contratos, compliance, constituição e consultoria geral.",
        "url": "https://www.andrediasadvogados.com.br/direito-empresarial",
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
        "serviceType": "Direito Empresarial"
      })}} />
    </div>
  );
}
