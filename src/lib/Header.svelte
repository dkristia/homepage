<nav>
    <div class="header">
        <a href="https://dasuki.fi"><h1>&lt;<span class="green">Dasuki</span> /&gt;</h1></a>
        <a href="https://github.com/dkristia" target="_blank"><h1><i class="fa-brands fa-github"></i></h1></a>
    </div>
    <ul class="big-menu">
        <li><a href="#about">&lt;<span class="green">About</span> /&gt;</a></li>
        <li><a href="#projects">&lt;<span class="green">Projects</span> /&gt;</a></li>
        <li><a href="#contact">&lt;<span class="green">Contact</span> /&gt;</a></li>
    </ul>
</nav>

<style>
    @keyframes slideInDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

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
        padding: 1rem 2rem 1.5rem 2rem;
        background-color: var(--background-color);
        color: var(--text-color);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.9);
        z-index: 3;
        height: 50px;
        animation: slideInDown 0.5s ease-out forwards;
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
    
    .green {
        color: var(--green);
    }
    
    a {
        font-family: "Source Code Pro", monospace;
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.3rem;
        position: relative;
        transition: all 0.3s ease;
    }
    
    .big-menu a::before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 50%;
        background-color: var(--green);
        transition: all 0.3s ease;
    }
    
    .big-menu a:hover::before {
        width: 100%;
        left: 0;
    }
    
    .big-menu a:hover .green {
        filter: brightness(130%);
    }
    
    @media (max-width: 780px) {
        nav {
            flex-direction: column;
            height: auto;
        }
        .header {
            height: 50px;
        }
        .big-menu {
            display: none;
        }
    }
    
    @media (max-width: 430px) {
        .header a {
            font-size: 5vi;
        }
    }
</style>