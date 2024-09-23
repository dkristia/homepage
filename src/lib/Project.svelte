<div class="project">
    <div class="project-text">
        <div class="project-title"><slot name="project-title"><h1>Project title</h1></slot></div>
        <div class="project-description"><slot name="project-description"><p>Project description</p></slot></div>
        <div class="project-languages"><slot name="project-languages"><p>Languages: Project languages</p></slot></div>
      </div>
    <div class="image-container">
        <slot name="project-image">
            <img src="https://via.placeholder.com/300" alt="Project" />
        </slot>
    </div>
</div>

<style>
    .project {
        display: flex;
        flex-direction: row;
    }
    .project-text {
        margin: 20px;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .image-container {
        align-self: center;
        min-width: 45%;
        border-radius: 10px;
    }
    .project-title {
        font-size: 2rem;
    }
    .project-description {
        font-size: 1.6rem;
        height: 100%;

    }
    .project-languages {
        font-size: 1.6rem;
    }
    @media (max-width: 905px) {
        .project {
            flex-direction: column;
        }
        .image-container {
            min-width: 100%;
        }
    }
</style>
