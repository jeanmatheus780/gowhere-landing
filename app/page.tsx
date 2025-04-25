import Image from 'next/image';

export default function LandingPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>Bem-vindo ao GoWhere 🌍</h1>
        <p>Explore hábitos saudáveis, saúde mental e a natureza ao seu redor 🌿</p>
        <button style={{ padding: "0.75rem 1.5rem", marginTop: "1rem", fontSize: "1rem", cursor: "pointer" }}>
          Comece agora
        </button>
      </section>

      {/* Seção de imagem */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Conheça o GoWhere</h2>
  <div style={{
    position: "relative",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  }}>
    <Image
      src="/images/Logotipo GoWhere.png"
      alt="Banner do GoWhere"
      width={800}
      height={400}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
      priority
    />
  </div>
</section>

      <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", marginTop: "4rem" }}>
        <FeatureCard
          title="Descubra Trilhas"
          description="Encontre trilhas próximas e compartilhe suas aventuras ao ar livre."
        />
        <FeatureCard
          title="Monitore Seus Hábitos"
          description="Registre atividades físicas e bem-estar mental com facilidade."
        />
        <FeatureCard
          title="Ganhe Recompensas"
          description="Acumule pontos ao contribuir com avaliações e registros no app."
        />
      </section>

      {/* Seção de Download */}
      <section style={{ textAlign: "center", marginTop: "4rem", padding: "3rem", backgroundColor: "#f4f4f4", borderRadius: "10px" }}>
        <h2>Baixe o GoWhere</h2>
        <p>Disponível na App Store e Google Play. Comece a explorar trilhas e monitorar sua saúde hoje mesmo!</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <button style={downloadButtonStyle}>Baixar na App Store</button>
          <button style={downloadButtonStyle}>Baixar no Google Play</button>
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2>O que dizem nossos usuários</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <TestimonialCard
            name="Maria Silva"
            text="O GoWhere mudou minha vida! Agora eu faço trilhas regularmente e me sinto mais saudável."
          />
          <TestimonialCard
            name="Carlos Souza"
            text="Acompanhar minha saúde mental e física nunca foi tão fácil. Eu recomendo para todos!"
          />
          <TestimonialCard
            name="Ana Pereira"
            text="Adoro ganhar recompensas ao me manter ativa e saudável. O app é super intuitivo."
          />
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #ccc" }}>
        <p>© {new Date().getFullYear()} GoWhere. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{
      flex: "1 1 300px",
      padding: "1.5rem",
      border: "1px solid #eee",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div style={{
      width: "300px",
      padding: "1rem",
      border: "1px solid #eee",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
      <h3>{name}</h3>
      <p>"{text}"</p>
    </div>
  );
}

const downloadButtonStyle = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
