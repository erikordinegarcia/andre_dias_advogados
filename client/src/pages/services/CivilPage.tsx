import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

export default function CivilPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511950506310?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20direito%20c%C3%ADvel", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511950506310";
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
            <a href="/direito-civel" className="text-sm text-primary font-semibold">Cível</a>
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
              Direito Cível em São Paulo
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Soluções jurídicas para contratos, indenizações e questões patrimoniais. Atuamos em ações cíveis, cobranças, indenizações por danos morais e materiais, e proteção de patrimônio.
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
            Especialidades em Direito Cível
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Contratos Descumpridos</h3>
                  <p className="text-foreground/80">
                    Ação para cobrar obrigações contratuais não cumpridas. Análise de cláusulas, negociação e ação judicial quando necessário.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Indenizações por Danos</h3>
                  <p className="text-foreground/80">
                    Cobrança de indenizações por danos morais e materiais. Acidentes, responsabilidade civil e reparação de prejuízos.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Questões Patrimoniais</h3>
                  <p className="text-foreground/80">
                    Proteção e defesa de patrimônio. Ações possessórias, usucapião, divisão de bens e questões imobiliárias.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Ações de Cobrança</h3>
                  <p className="text-foreground/80">
                    Cobrança de dívidas, empréstimos não pagos e valores em aberto. Ações de execução e recuperação de crédito.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Direito do Consumidor</h3>
                  <p className="text-foreground/80">
                    Defesa de direitos do consumidor. Ações contra práticas abusivas, produtos defeituosos e serviços inadequados.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 display-font">Mediação e Conciliação</h3>
                  <p className="text-foreground/80">
                    Solução de conflitos através de mediação e conciliação. Alternativas mais rápidas e menos custosas que a ação judicial.
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
                <span>Especialista em direito cível com 16 anos de experiência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Análise estratégica de cada caso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Maximização de indenizações</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atuação em todas as instâncias</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Atuação em toda a Zona Leste de São Paulo</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 display-font">
              Tem um contrato descumprido ou sofreu danos?
            </h3>
            <p className="text-foreground/80 mb-6">
              Procure-nos para uma análise completa do seu caso. Temos soluções para recuperar seus direitos e patrimônio.
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
        "name": "André Dias Advogados - Direito Cível",
        "description": "Especialista em direito cível em São Paulo. Contratos, indenizações, questões patrimoniais e ações cíveis.",
        "url": "https://www.andrediasadvogados.com.br/direito-civel",
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
        "serviceType": "Direito Cível"
      })}} />
    </div>
  );
}
