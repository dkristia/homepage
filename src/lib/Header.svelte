<nav>
    <div class="header">
        <a href="https://dasuki.fi"><h1>&lt;<span style="color:aqua;">Dasuki</span> /&gt;</h1></a>
        <a href="https://github.com/dkristia" target="_blank"><h1><i class="fa-brands fa-github"></i></h1></a>
    </div>
    <ul>
        <li><a href="#about">&lt;<span style="color:aqua;">About</span> /&gt;</a></li>
        <li><a href="#projects">&lt;<span style="color:aqua;">Projects</span> /&gt;</a></li>
        <li><a href="#contact">&lt;<span style="color:aqua;">Contact</span> /&gt;</a></li>
    </ul>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: var(--background-color);
        color: var(--text-color);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.9);
        z-index: 3;
    }
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;
    }
    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    a {
        font-family: "Source Code Pro", monospace;
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.3rem;
    }
    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            padding: 1rem 0;
        }
        ul {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>