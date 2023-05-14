import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <a className='logo' href="#">LOGO</a>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <a href="#hero" className="navigation-link">Hero</a>
            </li>
            <li className="navigation-list-item">
              <a href="#about" className="navigation-link">About</a>
            </li>
            <li className="navigation-list-item">
              <a href="#contacts" className="navigation-link">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id='hero' className="section-hero section">
          <p className='hero-text'>Yaroslav Borovskyi 113863
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi inventore ipsum perferendis suscipit.</p>
          <h1 className='hero-title'>Hero section</h1>
          <button className='hero-button' type='button'>Button</button>
        </section>
        <section id="about" className="section-about section">
          <h2 className='about-title'>About</h2>
          <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere optio reprehenderit fuga porro quaerat ab aut saepe at iste, vel minima, accusamus sint molestias labore, culpa perspiciatis? Earum consequatur harum dolores illum, mollitia dolor maxime ipsam. Facere, placeat quas error illum officiis totam nostrum ullam quibusdam repellat atque quo, ea, non veniam minima debitis quis odit minus nobis consequuntur nulla rem impedit modi delectus possimus! Ex, aliquam! Possimus mollitia repudiandae sit ut praesentium illo rem inventore similique sunt harum minus quasi, natus ratione dolor odio soluta, autem nemo incidunt doloribus velit et recusandae iusto. Ut consectetur fugiat harum. Unde temporibus possimus, dicta accusantium quasi deleniti mollitia sit repudiandae delectus necessitatibus ratione harum vel dolorum dolorem laborum expedita nihil, laboriosam praesentium! Sed incidunt fugit iure, commodi, voluptates et dolorum alias, qui labore consequuntur nostrum molestias possimus fuga deserunt iste enim explicabo? Nisi, fuga incidunt deleniti culpa cupiditate soluta ipsa ea cum inventore, minus animi provident corporis impedit ex quas ab illo sint debitis qui quam, officia beatae quisquam. Aspernatur, eos eius beatae quod amet eaque aliquid consequuntur assumenda blanditiis officiis corrupti maiores distinctio in accusantium magni? Explicabo aliquam hic temporibus repellat cum porro omnis incidunt vel similique? Eos, maxime aliquid?</p>
        </section> 
      </main>
      <footer id='contacts' className='contacts'>
        <address className='addres'>
          <h2 className='contacts-title'>Contacts</h2>
          <ul className='contacts-list'>
            <li className='contacts-list-item'>
              <a href="tel:+1111111111" className="addres-link">+1 111 111 111</a>
            </li>
            <li className='contacts-list-item'>
              <a href="mailto:mailme@gmail.com" className="addres-link">mailme@gmail.com</a>
            </li>
          </ul>
        </address>
      </footer>
    </>
  )
}

export default App
