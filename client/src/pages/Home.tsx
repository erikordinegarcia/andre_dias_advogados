import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, ArrowRight, Shield, Users, Zap, Gavel, Briefcase, Heart, Building2, FileText } from "lucide-react";

export default function Home() {
  const handleWhatsAppGeral = () => {
    window.open("https://wa.me/551150506310?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica", "_blank");
  };

  const handleWhatsAppCriminal = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20preciso%20de%20atendimento%20criminal%20urgente", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="container py-8 flex items-center justify-between gap-8">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663378446436/OPLIhcZDbOGighKU.webp"
              alt="André Dias Advogados Logo"
              className="h-25 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex gap-8 flex-1">
            <a href="/" className="text-sm text-primary font-semibold">
              Home
            </a>
            <a
              href="/direito-criminal"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Criminal
            </a>
            <a
              href="/direito-trabalhista"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Trabalhista
            </a>
            <a
              href="/direito-civel"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Cível
            </a>
            <a
              href="/direito-de-familia"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Família
            </a>
            <a
              href="/direito-empresarial"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Empresarial
            </a>
          </nav>
          <Button
            onClick={handleWhatsAppGeral}
            size="sm"
            className="gap-2 bg-green-500 hover:bg-green-600 text-white"
          >
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
              <p className="text-sm font-semibold text-primary">
                ✓ Advocacia Full Service em São Paulo
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 display-font leading-tight">
              Sua defesa jurídica em São Paulo
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Especialistas em Direito Criminal, Trabalhista, Cível, Família e
              Empresarial. 16 anos de experiência defendendo seus direitos com
              excelência e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleWhatsAppGeral}
                className="gap-2 bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppCriminal}
                className="gap-2 bg-red-600 hover:bg-red-700 text-white"
              >
                <MessageCircle className="w-5 h-5" />
                CRIMINAL 24 HORAS
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
              Atuamos em todas as áreas do direito, oferecendo soluções
              completas para indivíduos e empresas
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-24">
            <a href="/direito-criminal" className="group">
              <Card className="p-6 h-full hover:shadow-lg transition cursor-pointer">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2 display-font">
                  Criminal
                </h3>
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
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2 display-font">
                  Trabalhista
                </h3>
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
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2 display-font">Cível</h3>
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
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2 display-font">
                  Família
                </h3>
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
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2 display-font">
                  Empresarial
                </h3>
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
              <h3 className="font-bold text-xl mb-3 display-font">
                16 Anos de Experiência
              </h3>
              <p className="text-foreground/70">
                Trajetória consolidada defendendo direitos de indivíduos e
                empresas na Zona Leste de São Paulo.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="font-bold text-xl mb-3 display-font">
                Especialização Completa
              </h3>
              <p className="text-foreground/70">
                Atuação full service em todas as principais áreas do direito com
                expertise aprofundada.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="font-bold text-xl mb-3 display-font">
                Atendimento 24 Horas
              </h3>
              <p className="text-foreground/70">
                Disponibilidade para emergências criminais e atendimento ágil em
                todas as situações.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">🔒</div>
              <h3 className="font-bold text-xl mb-3 display-font">
                Sigilo Profissional
              </h3>
              <p className="text-foreground/70">
                Confidencialidade garantida em todas as consultas e processos
                jurídicos.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="font-bold text-xl mb-3 display-font">
                Localização Estratégica
              </h3>
              <p className="text-foreground/70">
                Escritório na Zona Leste com fácil acesso e atendimento
                presencial ou online.
              </p>
            </Card>

            <Card className="p-8">
              <div className="mb-4 text-4xl">💼</div>
              <h3 className="font-bold text-xl mb-3 display-font">
                Resultado Orientado
              </h3>
              <p className="text-foreground/70">
                Foco em soluções efetivas e maximização de direitos para cada
                cliente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-primary/10 border-t-2 border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full">
                <p className="text-sm font-semibold text-primary">
                  🤖 TECNOLOGIA JURÍDICA
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 display-font leading-tight">
                Inteligência Artificial para Soluções Jurídicas
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Utilizamos tecnologia de ponta em inteligência artificial focada
                especificamente em soluções jurídicas. Nossa abordagem inovadora
                combina a experiência humana com a precisão da IA para entregar
                resultados superiores.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Análise Inteligente de Casos
                    </h3>
                    <p className="text-sm text-foreground/70">
                      IA analisa jurisprudência e precedentes para estratégias
                      mais efetivas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Documentação Otimizada
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Geração de peças processuais com precisão e conformidade
                      legal
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Resposta Mais Rápida
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Processamento acelerado de informações para atendimento
                      ágil
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      Pesquisa Jurídica Avançada
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Busca inteligente em bases de dados jurídicas para melhor
                      fundamentação
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-foreground/60 mb-6">
                ✓ Tecnologia desenvolvida especificamente para o setor jurídico
              </p>
              <p className="text-sm text-foreground/60">
                ✓ Mantém sigilo profissional e conformidade com regulamentações
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Inovação no Direito
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Somos um dos poucos escritórios na Zona Leste que utiliza IA
                    avançada para potencializar nossas soluções jurídicas.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div className="text-4xl mb-3">🧠</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Precisão e Confiabilidade
                  </h3>
                  <p className="text-sm text-foreground/70">
                    A IA complementa a expertise de nossos advogados, garantindo
                    análises mais precisas e estratégias otimizadas.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Melhor Resultado
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Combinamos experiência humana com tecnologia para oferecer
                    soluções jurídicas de excelência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings & Reviews Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">
                ⭐ AVALIAÇÕES DE CLIENTES
              </p>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4 display-font">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Confiança construída através de resultados e atendimento
              excepcional
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">5.0</div>
                <div className="flex justify-center gap-1 mb-2">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm text-foreground/70">Avaliação Média</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-foreground/70 font-semibold">
                  Clientes Satisfeitos
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">
                  1000+
                </div>
                <p className="text-sm text-foreground/70 font-semibold">
                  Casos Resolvidos
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-foreground/70 font-semibold">
                  Taxa de Sucesso
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-primary/10 hover:shadow-lg transition">
              <div className="flex gap-1 mb-3">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Excelente atendimento! Conseguiram resolver meu caso de forma
                rápida e eficiente. Muito obrigado!"
              </p>
              <p className="font-semibold text-foreground">
                Carlos Eduardo Silva
              </p>
              <p className="text-sm text-primary">Direito Criminal</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-primary/10 hover:shadow-lg transition">
              <div className="flex gap-1 mb-3">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Profissionais competentes e dedicados. Consegui receber todas
                as verbas rescisórias que tinha direito."
              </p>
              <p className="font-semibold text-foreground">
                Maria Helena Santos
              </p>
              <p className="text-sm text-primary">Direito Trabalhista</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-primary/10 hover:shadow-lg transition">
              <div className="flex gap-1 mb-3">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Melhor escritório que já contratei! Resolveram meu caso com
                muita profissionalismo e transparência."
              </p>
              <p className="font-semibold text-foreground">
                João Ricardo Oliveira
              </p>
              <p className="text-sm text-primary">Direito Cível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">
                👥 NOSSA EQUIPE
              </p>
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
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">
                Dr André Dias
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                DIREITO CRIMINAL
              </p>
              <p className="text-sm text-foreground/70">
                Especialista em defesa criminal com casos de alta complexidade
              </p>
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
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">
                Dr Wilson Gonçalves
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                DIREITO CIVIL, FAMÍLIA E PREVIDENCIÁRIO
              </p>
              <p className="text-sm text-foreground/70">
                Especialista em ações de cobrança e questões familiares
              </p>
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
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">
                Dra Hemilly Samantha
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                DIREITO TRABALHISTA
              </p>
              <p className="text-sm text-foreground/70">
                Especialista em demissões injustas e verbas rescisórias
              </p>
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
              <h3 className="font-bold text-lg text-foreground mb-1 display-font">
                Bianca
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                ASSISTENTE
              </p>
              <p className="text-sm text-foreground/70">
                Suporte administrativo e atendimento ao cliente
              </p>
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
            Entre em contato conosco para uma consulta especializada. Temos
            soluções para sua situação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppGeral}
              className="gap-2 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Fale no WhatsApp
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsAppCriminal}
              className="gap-2 bg-red-600 hover:bg-red-700 text-white"
            >
              <MessageCircle className="w-5 h-5" />
              CRIMINAL 24 HORAS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                André Dias Advogados
              </h4>
              <p className="text-sm text-foreground/70">
                Advocacia especializada com 16 anos de experiência na Zona Leste
                de São Paulo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Áreas de Atuação
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="/direito-criminal"
                    className="hover:text-primary transition"
                  >
                    Direito Criminal
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-trabalhista"
                    className="hover:text-primary transition"
                  >
                    Direito Trabalhista
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-civel"
                    className="hover:text-primary transition"
                  >
                    Direito Cível
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-de-familia"
                    className="hover:text-primary transition"
                  >
                    Direito de Família
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-empresarial"
                    className="hover:text-primary transition"
                  >
                    Direito Empresarial
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="tel:+5511938059405"
                    className="hover:text-primary transition"
                  >
                    🚨 Criminal: (11) 9 3805-9405
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+551150506310"
                    className="hover:text-primary transition"
                  >
                    📞 Demais Áreas: (11) 5050-6310
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511938059405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    💬 WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Localização
              </h4>
              <a
                href="https://maps.google.com/?q=Rua+Aldeia+dos+Machac%C3%A1lis,+124,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-primary transition"
              >
                Rua Aldeia dos Machacális, 124
                <br />
                Zona Leste - São Paulo/SP
                <br />
                CEP: 08430-430
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>
              &copy; 2026 André Dias Advogados. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Desenvolvido com excelência para sua defesa jurídica.
            </p>
          </div>
        </div>
      </footer>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "André Dias Advogados",
            description:
              "Escritório de advocacia full service em São Paulo com especialização em Direito Criminal, Trabalhista, Cível, Família e Empresarial.",
            url: "https://www.andrediasadvogados.com.br",
            telephone: "+5511938059405",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Aldeia dos Machacális, 124",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              postalCode: "03000-000",
              addressCountry: "BR",
            },
            areaServed: ["São Paulo", "SP", "Zona Leste"],
            priceRange: "Consultar",
            sameAs: [
              "https://www.facebook.com/andrediasadvogados",
              "https://www.instagram.com/andrediasadvogados",
            ],
          }),
        }}
      />
    </div>
  );
}
