import AbouInfo from './AboutInfo.json';
const About = () => {
  return (
    <section className="About">
      <h1>About</h1>
      <p>Lorem ipsum adatd asdfko asdf sfff</p>
      {AbouInfo.map(
        (item) => {
          return (
           <section key={item.nombre + item.apellido}>
              <h2>{item.nombre} {item.apellido}</h2>
              <p>{item.edad}</p>
              <p>{item.hobbies.join(' | ')}</p>
           </section>
          );
        }
      )}
    </section>
  );
}

export default About;
