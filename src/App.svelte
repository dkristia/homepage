<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import CodeBlock from "./lib/CodeBlock.svelte";
  import Project from "./lib/Project.svelte";
  import '@fortawesome/fontawesome-free/css/all.css';

  const heroTaglines: string[] = [
    "Software Developer",
    "Ohjelmistokehittäjä",
    "Mjukvaruutvecklare",
    "Softwareentwickler",
  ];

  const heroText: string = "Dasuki";
  let heroTagline: string = heroTaglines[0];

  function changeHeroTagline(
    index: number,
    changeTagline: (tagline: string) => void,
    taglines: string[]
  ): void {
    changeTagline(taglines[index]);
    setTimeout(
      () =>
        changeHeroTagline(
          (index + 1) % heroTaglines.length,
          changeTagline,
          taglines
        ),
      2000
    );
  }
  changeHeroTagline(0, (tagline) => (heroTagline = tagline), heroTaglines);
</script>

<main>
  <title>{heroText} - {heroTagline}</title>
  <Header />

  <section class="hero">
    <h1>{heroText}</h1>
    <p>{heroTagline}</p>
  </section>

  <section class="sections">
    <section class="section" id="about">
      <h2>About Me</h2>
      <CodeBlock importable="Dasuki" type="software-developer"/>
      <p>
        Hi, I'm Daniel "Dasuki" Kristiansson, a passionate software developer
        and system administrator born and raised in Espoo, Finland. I have
        hands-on experience in full-stack development and system administration,
        with a strong focus on frameworks such as <span class="language-react highlight"><i class="fa-brands fa-react"/> React</span> and <span class="language-svelte highlight">Svelte</span> and languages
        like <span class="language-typescript highlight">TypeScript</span>, 
        <span class="language-python highlight"><i class="fa-brands fa-python"/> Python</span>, 
        <span class="language-cpp highlight">C++</span>, and 
        <span class="language-rust highlight"><i class="fa-brands fa-rust" /> Rust</span>.
      </p>
    
      <p>
        I'm currently interning at
        <a class="project psil highlight" href="https://psil.fi" target="_blank">PSIL</a>, where I've
        been developing software and leading a team of other capable developers.
        Additionally, I'm interning as a system administrator at Päivölä
        Institute, where I manage and maintain the network infrastructure and
        on-site as well as remote server environments.
      </p>
    
      <p>
        In addition to my work in software development, I have a deep passion for game development. I primarily use <span class="language-gdscript highlight">Godot</span> for my videogames, and I've partaken in multiple game jams. 
      </p>
    </section>

    <section class="section" id="projects">
      <h2>Projects</h2>
      <CodeBlock importable="Projects" path="projects" />
      <p>Along the years I have worked on several projects, some of which are:</p>
      <Project>
        <img slot="project-image" src="./dailycrypt.png" alt="DailyCrypt encryption webapp" class="project-image" />
        <a href="https://github.com/Paivola-Student-Innovation-Lab/DailyCrypt" target="_blank" slot="project-title" class="project dailycrypt highlight"><h1>DailyCrypt</h1></a>
        <p slot="project-description">DailyCrypt is an easy-to-use, open-source file encryption and decryption website. It utilizes AES-256 encryption to ensure strong protection for your files. All encryption/decryption happens on your local machine, and no files or data are ever sent to a server. The site is built with React & TypeScript and the encryption is handled in Rust</p>
        <p slot="project-languages">Languages: <span class="language-react highlight"><i class="fa-brands fa-react"/> React</span>, <span class="language-typescript highlight">TypeScript</span>, <span class="language-rust highlight"><i class="fa-brands fa-rust"/> Rust</span></p>
      </Project>
      <Project>
        <img slot="project-image" src="./pakastin.png" alt="Website listing contents of a freezer" class="project-image" />
        <a href="https://github.com/dkristia/freezer/" target="_blank" slot="project-title" class="project pakastin highlight"><h1>Freezer management tool</h1></a>
        <p slot="project-description">This freezer management tool was created, because we had a freezer that was in general use by several students. We decided to make a website to easily manage the contents of the freezer, by tagging which items belong to who. The frontend was made with HTMX and the backend was made with php. All the data was stored in a PostgreSQL database.</p>
        <p slot="project-languages">Languages: <span class="language-php highlight"><i class="fa-brands fa-php"/> php</span>, HTMX</p>
      </Project>
      <Project>
        <img slot="project-image" src="./presidenttikirja.jpg" alt="Website comparing two congressmen" class="project-image" />
        <a href="https://github.com/dkristia/presidenttikirja/" target="_blank" slot="project-title" class="project presidenttikirja highlight"><h1>Presidentbook</h1></a>
        <p slot="project-description">This webapp was created as a joke after me and my friends hypothesized a mold for the ideal presidential candidate: they have to be bald, have a mischievous smile, look like Walter White and be a woman. I made this site which simply asks the user a random question of the four criteria and places two congressmen against each other, and then the user picks which one best fits the criteria. The app is heavily inspired by the original Facebook (hence the name Presidentbook). The frontend is made with React & TypeScript and the backend is a TypeScript Express server. The backend uses elo logic (similar to chess elo) to calculate which candidate best fits the four criteria.</p>
        <p slot="project-languages">Languages: <span class="language-react highlight"><i class="fa-brands fa-react"/> React</span>, <span class="language-typescript highlight">TypeScript</span></p>
      </Project>
      <Project>
        <img slot="project-image" src="./shipmarine.png" alt="Shipmarine video game" class="project-image" />
        <a href="https://dasukii.itch.io/shipmarine" target="_blank" slot="project-title" class="project shipmarine highlight"><h1>Shipmarine</h1></a>
        <p slot="project-description">Shipmarine is a silly little videogame made in Godot where the objective is to get as far as possible by dodging enemies. The ship moves forward and you only have one keybind: thrust downwards. The goal is to use the downwards thrust of the rocket and the buoyancy of the water to propel your ship upwards.</p>
        <p slot="project-languages">Languages: <span class="language-gdscript highlight"><i class="fa-brands fa-godot"/>GDScript</span></p>
      </Project>
      <Project>
        <div class="mirror-container" slot="project-image">
          <iframe title="Mirror of this site" src="." class="mirror-frame" height="1080px" />
        </div>
          <a href="." slot="project-title" class="project highlight"><h1><span style="color:aqua;">dasuki.fi</span></h1></a>
        <p slot="project-description">This site was made with Svelte & TypeScript. The point of this website is to introduce me and showcase some of the projects I've developed.</p>
        <p slot="project-languages">Languages: <span class="language-svelte highlight">Svelte</span>, <span class="language-typescript highlight">TypeScript</span></p>
      </Project>
      <p style="margin-top: 100px;">You can find more projects on my GitHub: <a class="contact-link" href="https://github.com/dkristia" target="_blank"><i class="fa-brands fa-github"></i> dkristia</a></p>
    </section>

    <section class="small section" id="contact">
      <h2>Contact</h2>
      <CodeBlock importable="Contact" path="contact" />
      <p>If you have any questions or would like to get in touch, feel free to contact me the following ways:</p>
      <div class="contact-box">
        <p><i class="fa fa-envelope" aria-hidden="true"/> Email: <a class="contact-link" href="mailto:daniel.i.kristiansson@gmail.com">daniel.i.kristiansson@gmail.com</a></p>
        <p>Discord: <span class="contact-link">@dasukii</span></p>
        <p><i class="fa-brands fa-telegram" aria-hidden="true"/> Telegram: <a class="contact-link" href="https://t.me/dasuki_beifong" target="_blank" >@dasuki_beifong</a></p>
      </div>
    </section>
  </section>

  <Footer />
</main>

<style>
  main {
    font-family: Calibri, sans-serif;
    color: var(--text-color);
  }
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    font-size: 3rem;
  }
  .hero::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(/frog.jpg);
    background-repeat: no-repeat;
    background-position: center 60%;
    background-size: cover;
    filter: blur(0.5vw);
    z-index: -1;
  }

  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
  }

  .section {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 1000px;
    padding: 40px;
    text-align: center;
  }
  .section > h2 {
    font-size: 3rem;
  }
  .section > p {
    font-size: 1.6rem;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  .small > h2 {
    font-size: 2rem;
  }
  .small > p {
    font-size: 1.2rem;
  }
  
  .language-typescript {
    color: #3178c6;
  }
  .language-python {
    color: #306998;
  }
  .language-gdscript {
    color: #478cbf;
  }
  .language-cpp {
    color: #f34b7d;
  }
  .language-rust {
    color: #dea584;
  }
  .language-svelte {
    color: #c30;
  }
  .language-react {
    color: rgb(88 196 220)
  }
  .language-php {
    color: #7A86B8;
  }
  .highlight {
    font-weight: bold;
  }

  .project {
    color: white;
    text-decoration: none;
  }
  .project:hover {
    text-decoration: underline;
  }
  .psil {
    color: #03A1FF;
  }
  .dailycrypt {
    color: #29c08d;
  }
  .shipmarine {
    color: #0db6d6;
  }
  .pakastin {
    color: #844484;
  }
  .presidenttikirja {
    color: #535bf2;
  }
  .project-image {
        width: 100%;
        border-radius: 10px;
  }
  .mirror-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0px;
  }
  @media (max-width: 905px) {
    .mirror-container {
      height: 500px;
    }
  }
  
  .contact-box {
    display: flex;
    flex-direction: column;
  }
  .contact-link {
    color:aqua;
    text-decoration:none;
  }
  .contact-box > p {
    font-size: 1.5rem;
  }

  .mirror-frame {
    transform:scale(0.4);
    min-width:250%;
    border-radius: 25px;
  }

  @media (max-width: 905px) {
    .section > p {
      font-size: 1.3rem;
    }
  }
</style>
