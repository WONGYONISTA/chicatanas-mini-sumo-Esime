import './App.css';
import robots from './data/robots.json';
import members from './data/members.json';
import competitions from './data/competitions.json';

function App() {
  return (
    <div id="root">
      {/* Header con logo */}
      <header className="header">
  <div className="header-container">
    {/* Logo del club */}
    <img
      src="/Logo/Logo .jpeg"
      alt="Logo Chicatanas"
      className="logo-small"
    />

    {/* Nombre del club */}
    <h1 className="club-name">Chicatanas Mini Sumo</h1>

    {/* Logo de la universidad */}
    <img
      src="/Logo/esimeazcch.jpg"
      alt="Logo ESIME Azcapotzalco"
      className="logo-universidad"
    />
  </div>

  {/* Subtítulo debajo */}
  <p className="club-subtitle">
    Club de Robótica · ESIME Azcapotzalco · IPN
  </p>
</header>


      {/* Sección Robots */}
      <section className="section">
        <h2>🤖 Robots del Club</h2>
        <div className="robots">
          {robots.map((robot, index) => (
            <div key={index} className={`robot-card ${robot.estado}`}>
              <img src={robot.imagen} alt={robot.nombre} />
              <h3>{robot.nombre}</h3>
              <p>{robot.descripcion}</p>
              <ul>
                <li><strong>Peso:</strong> {robot.peso}</li>
                <li><strong>Control:</strong> {robot.control}</li>
                <li><strong>Sensores:</strong> {robot.sensores}</li>
              </ul>
              <span className="estado">{robot.estado}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Miembros */}
      <section className="section">
        <h2>👥 Miembros del Club</h2>
        <div className="members">
          {members.map((m, i) => (
            <div key={i} className="member-card">
              <img src={m.foto} alt={m.nombre} />
              <h3>{m.nombre}</h3>
              <p>{m.rol}</p>
              <small>{m.semestre}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Competencias */}
      <section className="section">
        <h2>🏆 Competencias</h2>
        <div className="competitions">
          {competitions.map((c, i) => (
            <div key={i} className="competition-card">
              <img src={c.imagen} alt={c.nombre} />
              <h3>{c.nombre}</h3>
              <p>{c.año} — {c.resultado}</p>
              <small>Robot: {c.robot}</small>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>ESIME Azcapotzalco · IPN</p>
      </footer>
    </div>
  );
}

export default App;
