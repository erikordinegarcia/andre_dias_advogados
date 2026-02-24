import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Team() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511938059405";
  };

  const teamMembers = [
    {
      name: "Dr André Dias",
      title: "Direito Criminal",
      specialties: ["Prisão em Flagrante", "Habeas Corpus", "Defesa Criminal"],
      bio: "Especialista em direito criminal com 16 anos de experiência. Dr André Dias é o fundador do escritório e lidera a área de defesa criminal. Atua em casos de alta complexidade e é reconhecido pela sua dedicação e resultados excepcionais em casos criminais.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/sUBXEfaxEAX7qoudeWkWyp/sandbox/3ZVdAOnn0PimXTld8tXxlx-img-1_1771895704000_na1fn_bGF3eWVyLWFuZHJlLWRpYXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1VCWEVmYXhFQVg3cW91ZGVXa1d5cC9zYW5kYm94LzNaVmRBT25uMFBpbVhUbGQ4dFh4bHgtaW1nLTFfMTc3MTg5NTcwNDAwMF9uYTFmbl9iR0YzZVdWeUxXRnVaSEpsTFdScFlYTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jv7zvaxo7FPa4GTiZ78mj4NIKVW2DiisfQ9qkacSvhI-XsFJGzMHWsu5TKkJtEcvgqwb1R1qFW2f2sGYEeTFDgX6oW6Zu6uVAhZIswJ4ynnveOZTgS8vkw5uPACi~UqHMgZkDiCfOuvN1f3it-NUalbr46UN3i0eER5~c75DftUDFKP0vjl8GADh3cAdDoZ0N-DtS7x93wfw5a2Aqa8gJik8peHu-BubWnnZJcfTZo2UNi1mT6YH~wuCGm869i8kJV22e0G54DlKjQuaNayJq-R6qGbVRz5L1JY-7X0nPoReeRW1rfCxE0uT-jOuiqsKrDM4-5rMiwyrZMc~cMLwQQ__",
      email: "andre@andrediasadvogados.com.br",
      phone: "+5511938059405"
    },
    {
      name: "Dra Hemilly Samantha",
      title: "Direito Trabalhista",
      specialties: ["Demissões Injustas", "Verbas Rescisórias", "Danos Morais"],
      bio: "Dra Hemilly Samantha é especialista em direito trabalhista, com foco em demissões injustas, verbas rescisórias e casos de assédio moral. Conhecida por sua abordagem humanizada e resultados efetivos, defende os direitos dos trabalhadores com excelência e dedicação.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/sUBXEfaxEAX7qoudeWkWyp/sandbox/3ZVdAOnn0PimXTld8tXxlx-img-2_1771895704000_na1fn_bGF3eWVyLWNhcm9saW5hLXNpbHZh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1VCWEVmYXhFQVg3cW91ZGVXa1d5cC9zYW5kYm94LzNaVmRBT25uMFBpbVhUbGQ4dFh4bHgtaW1nLTJfMTc3MTg5NTcwNDAwMF9uYTFmbl9iR0YzZVdWeUxXTmhjbTlzYVc1aExYTnBiSFpoLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jgQ-0I4NEQTfml-j96lLw6ifTYNQHUP8qd7G1T9D~jbCcANyxQyibLylF3YvNMR-2oPHpnr0~Qn6UhylZnbXBJYlXcAARNJpZtmOG0Qq~4~853s4OBW5w2tVQYVvob374LaC5c~TmzW03WfL1KdQHt9HRoDUJbTPtxm8hQPoLnWDmoqzBa~z~8mu4hk7b7AHnCT2UrDj7Cn8evCxqNA0Y-x4TZFdySrc4e-gbifPUVjmm-mEKK4HP4l4Vde6nQG4hmE7FZuBCOFx~4TadwkNt8RqvUq~KKfaTTBVURJen-jcaDY5P9y7Uoz-3fxUGRNnoI9ka7orXPIUmUjdWV-Flw__",
      email: "carolina@andrediasadvogados.com.br",
      phone: "+551150506310"
    },
    {
      name: "Dr Wilson Gonçalves",
      title: "Direito Civil, Família e Previdenciário",
      specialties: ["Direito Civil", "Direito de Família", "Direito Previdenciário"],
      bio: "Dr Wilson Gonçalves é especialista em direito civil, família e previdenciário. Com vasta experiência em ações de cobrança, indenizações por danos morais, questões contratuais, divórcios e questões previdenciárias. Seus casos têm alta taxa de sucesso.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/sUBXEfaxEAX7qoudeWkWyp/sandbox/3ZVdAOnn0PimXTld8tXxlx-img-3_1771895707000_na1fn_bGF3eWVyLWZlcm5hbmRvLXNhbnRvcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1VCWEVmYXhFQVg3cW91ZGVXa1d5cC9zYW5kYm94LzNaVmRBT25uMFBpbVhUbGQ4dFh4bHgtaW1nLTNfMTc3MTg5NTcwNzAwMF9uYTFmbl9iR0YzZVdWeUxXWmxjbTVoYm1SdkxYTmhiblJ2Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NYI22Lbd81JxJb8ArEBWGBwnYKDh7~wfNXM6NdX-~LV1xW7lYZCXAo0JJV8p-Dv~tM3Sn3lnufeIdvNwjSjnq06DA4JyWIjFrRvqlxOG3vMdm6275WouXcGk588uLhfyV28h2~eDZ6oaFCyxMJ3vg3yCqV16zdUw5UxarWnWSNxlygpKrh4tneRaTwgvo6FKpMTpML2QBB8vk5xgL6U2~ZYBrzkgsGJ1GwTJCD0I1Wp9jfBn6Ympxii5IAmtxbPSpih2F9FirRhhiAvDTUq4poTgNZcQKhtmwL5IoTXIsVU-zZpyQWMGuGSRRwrAiR-tAy4pu82dsjpbP-LqtMVDgg__",
      email: "fernando@andrediasadvogados.com.br",
      phone: "+551150506310"
    },
    {
      name: "Bianca",
      title: "Assistente",
      specialties: ["Suporte Administrativo", "Atendimento ao Cliente", "Documentação"],
      bio: "Bianca é assistente do escritório, responsável pelo suporte administrativo, atendimento ao cliente e documentação. Contribui para o funcionamento eficiente do escritório e para a melhor experiência dos clientes.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/sUBXEfaxEAX7qoudeWkWyp/sandbox/3ZVdAOnn0PimXTld8tXxlx-img-4_1771895706000_na1fn_bGF3eWVyLWlzYWJlbGxhLWNvc3Rh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1VCWEVmYXhFQVg3cW91ZGVXa1d5cC9zYW5kYm94LzNaVmRBT25uMFBpbVhUbGQ4dFh4bHgtaW1nLTRfMTc3MTg5NTcwNjAwMF9uYTFmbl9iR0YzZVdWeUxXbHpZV0psYkd4aExXTnZjM1JoLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YvglGas-bRN5h0A-4aPjEfOemYW0BeiKOZ38tWHgY23Mb0EW0Xr35ajovERpUpqjLK2vZtx5bXLrq9tkrd99CtSzPLJRlbdMZN2PdZQ9VembJr47jnfDuCxQTluQ7oCdYa-2G~JqbUu~nsF3l6bF9ZjZYJRl~3q8RY~JTRf98WAPD61jUJq0LzU34Eiv~5nX8LIpiyGB8mE4Z0NqxObEn2aa5RueySDEtcfNw0bWDp0UIc-XYP8~sb-Col521dlWHvEzx90DVdJUWlZGfaWJcLZy6HbUYZxWGYJ6DN5TX4DdYvH7blbIChOFwIzXBYLaYwVGPvi509d7Y62Wr~k8fA__",
      email: "isabella@andrediasadvogados.com.br",
      phone: "+551150506310"
    }
  ];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "André Dias Advogados",
    "url": "https://www.andrediasadvogados.com.br",
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.title,
      "knowsAbout": member.specialties
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
            <a href="/direito-empresarial" className="text-sm text-foreground hover:text-primary transition">Empresarial</a>
            <a href="/nossa-equipe" className="text-sm text-primary font-semibold">Nossa Equipe</a>
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
              Nossa Equipe
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Conheça os advogados especializados que compõem o escritório André Dias. Profissionais dedicados com experiência comprovada em suas áreas de atuação.
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

      {/* Team Members Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 display-font">
              Profissionais Experientes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada membro da nossa equipe traz anos de experiência e dedicação ao direito, garantindo o melhor atendimento para seus casos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                specialties={member.specialties}
                bio={member.bio}
                image={member.image}
                email={member.email}
                phone={member.phone}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center display-font">
            Por que Escolher Nossa Equipe?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3 display-font">Experiência Comprovada</h3>
              <p className="text-foreground/70">
                Nossos advogados possuem mais de 10 anos de experiência cada um, com histórico de sucesso em diversos tipos de casos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3 display-font">Especialização Profunda</h3>
              <p className="text-foreground/70">
                Cada membro da equipe é especializado em sua área específica, garantindo conhecimento profundo e atualizado.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3 display-font">Atendimento Personalizado</h3>
              <p className="text-foreground/70">
                Tratamos cada cliente como único, desenvolvendo estratégias personalizadas para seus casos específicos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3 display-font">Resultados Efetivos</h3>
              <p className="text-foreground/70">
                Nossa equipe é comprometida em alcançar os melhores resultados possíveis para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 display-font">
            Pronto para Conversar com Nossa Equipe?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Entre em contato conosco para uma consulta especializada com um de nossos advogados.
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
          </div>
        </div>
      </footer>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(teamSchema)}} />
    </div>
  );
}
