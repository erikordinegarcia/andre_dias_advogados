import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Home() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511938059405";
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
            <a href="/" className="text-sm text-primary font-semibold">Home</a>
            <a href="/direito-criminal" className="text-sm text-foreground hover:text-primary transition">Criminal</a>
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
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">✓ Advocacia Full Service na Zona Leste</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 display-font leading-tight">
              Sua defesa jurídica em São Paulo
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Especialistas em Direito Criminal, Trabalhista, Cível, Família e Empresarial. 16 anos de experiência defendendo seus direitos com excelência e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </Button>
              <Button size="lg" variant="outline" onClick={handlePhone} className="gap-2">
                <Phone className="w-5 h-5" />
                (11) 9 3805-9405
              </Button>
            </div>
            <p className="text-sm text-foreground/60 mt-6">
              ⏰ Atendimento 24 horas para emergências criminais
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 display-font">
              Nossas Especialidades
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Atuamos em todas as áreas do direito, oferecendo soluções completas para indivíduos e empresas
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <a href="/direito-criminal" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 display-font">Criminal</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Defesa em prisões em flagrante, habeas corpus e recursos
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </a>

            <a href="/direito-trabalhista" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 display-font">Trabalhista</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Demissões injustas, horas extras e assédio moral
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </a>

            <a href="/direito-civel" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 display-font">Cível</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Contratos, indenizações e questões patrimoniais
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </a>

            <a href="/direito-de-familia" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 display-font">Família</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Divórcio, guarda e pensão alimentícia
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </a>

            <a href="/direito-empresarial" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 display-font">Empresarial</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Contratos, compliance e consultoria
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 display-font">
              Por que escolher André Dias Advogados?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="font-bold text-xl mb-3 display-font">16 Anos de Experiência</h3>
              <p className="text-foreground/70">
                Trajetória consolidada defendendo direitos de indivíduos e empresas na Zona Leste de São Paulo.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="font-bold text-xl mb-3 display-font">Especialização Completa</h3>
              <p className="text-foreground/70">
                Atuação full service em todas as principais áreas do direito com expertise aprofundada.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="font-bold text-xl mb-3 display-font">Atendimento 24 Horas</h3>
              <p className="text-foreground/70">
                Disponibilidade para emergências criminais e atendimento ágil em todas as situações.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">🔒</div>
              <h3 className="font-bold text-xl mb-3 display-font">Sigilo Profissional</h3>
              <p className="text-foreground/70">
                Confidencialidade garantida em todas as consultas e processos jurídicos.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="font-bold text-xl mb-3 display-font">Localização Estratégica</h3>
              <p className="text-foreground/70">
                Escritório na Zona Leste com fácil acesso e atendimento presencial ou online.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">💼</div>
              <h3 className="font-bold text-xl mb-3 display-font">Resultado Orientado</h3>
              <p className="text-foreground/70">
                Foco em soluções efetivas e maximização de direitos para cada cliente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">👥 NOSSA EQUIPE</p>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4 display-font">
              Conheça os Especialistas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Profissionais experientes e dedicados ao seu caso
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Dr André Dias */}
            <div className="text-center group">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663378446436/KoYfZadciVVBxFaK.jpeg" 
                  alt="Dr André Dias" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">Dr André Dias</h3>
              <p className="text-sm text-primary font-semibold mb-3">DIREITO CRIMINAL</p>
              <p className="text-sm text-foreground/70">Especialista em defesa criminal com casos de alta complexidade</p>
            </div>

            {/* Dr Wilson Gonçalves */}
            <div className="text-center group">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663378446436/vFUdDZKPlmQDogZy.png" 
                  alt="Dr Wilson Gonçalves" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">Dr Wilson Gonçalves</h3>
              <p className="text-sm text-primary font-semibold mb-3">DIREITO CIVIL, FAMÍLIA E PREVIDENCIÁRIO</p>
              <p className="text-sm text-foreground/70">Especialista em ações de cobrança e questões familiares</p>
            </div>

            {/* Dra Hemilly Samantha */}
            <div className="text-center group">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663378446436/jzOeXGUxDhafXhOi.jpeg" 
                  alt="Dra Hemilly Samantha" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">Dra Hemilly Samantha</h3>
              <p className="text-sm text-primary font-semibold mb-3">DIREITO TRABALHISTA</p>
              <p className="text-sm text-foreground/70">Especialista em demissões injustas e verbas rescisórias</p>
            </div>

            {/* Bianca */}
            <div className="text-center group">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663378446436/udziWzbJVCyDDADs.jpeg" 
                  alt="Bianca" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">Bianca</h3>
              <p className="text-sm text-primary font-semibold mb-3">ASSISTENTE</p>
              <p className="text-sm text-foreground/70">Suporte administrativo e atendimento ao cliente</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/nossa-equipe" className="inline-block">
              <Button size="lg" variant="outline" className="gap-2">
                Conheça Melhor Nossa Equipe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 display-font">
            Precisa de ajuda jurídica?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Entre em contato conosco para uma consulta especializada. Temos soluções para sua situação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Enviar Mensagem WhatsApp
            </Button>
            <Button size="lg" variant="outline" onClick={handlePhone} className="gap-2">
              <Phone className="w-5 h-5" />
              Ligar Agora
            </Button>
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
              <h4 className="font-bold text-foreground mb-4 display-font">Áreas de Atuação</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="/direito-criminal" className="hover:text-primary transition">Direito Criminal</a></li>
                <li><a href="/direito-trabalhista" className="hover:text-primary transition">Direito Trabalhista</a></li>
                <li><a href="/direito-civel" className="hover:text-primary transition">Direito Cível</a></li>
                <li><a href="/direito-de-familia" className="hover:text-primary transition">Direito de Família</a></li>
                <li><a href="/direito-empresarial" className="hover:text-primary transition">Direito Empresarial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">Contato</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="tel:+5511938059405" className="hover:text-primary transition">🚨 Criminal: (11) 9 3805-9405</a></li>
                <li><a href="tel:+551150506310" className="hover:text-primary transition">📞 Demais Áreas: (11) 5050-6310</a></li>
                <li><a href="https://wa.me/5511938059405" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">💬 WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">Localização</h4>
              <p className="text-sm text-foreground/70">
                Rua Aldeia dos Machacális, 124<br />
                Zona Leste - São Paulo/SP<br />
                CEP: 03000-000
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 André Dias Advogados. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com excelência para sua defesa jurídica.</p>
          </div>
        </div>
      </footer>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "André Dias Advogados",
        "description": "Escritório de advocacia full service em São Paulo com especialização em Direito Criminal, Trabalhista, Cível, Família e Empresarial.",
        "url": "https://www.andrediasadvogados.com.br",
        "telephone": "+5511938059405",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Aldeia dos Machacális, 124",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "03000-000",
          "addressCountry": "BR"
        },
        "areaServed": ["São Paulo", "SP", "Zona Leste"],
        "priceRange": "Consultar",
        "sameAs": [
          "https://www.facebook.com/andrediasadvogados",
          "https://www.instagram.com/andrediasadvogados"
        ]
      })}} />
    </div>
  );
}
