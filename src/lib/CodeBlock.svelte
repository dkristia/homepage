<script lang="ts">
    export let importable: string;
    export let type: string = "";
    export let path: string = "";
    const hasPath: boolean = path.length > 0;
    const hasType: boolean = type.length > 0;
</script>
<code class="code-block">
    <span class="line">&lt;<span class="code-tag">script</span> <span class="code-attribute">lang</span>="<span class="code-value">ts</span>"&gt;</span>
    <span class="line indent"><span class="code-tag">import <span class="code-text">{importable}</span> from</span> "<span class="code-value">https://dasuki.fi/{hasPath ? "#" : ""}{path}</span>";</span>
    <span class="line">&lt;/<span class="code-tag">script</span>&gt;</span>
    <span class="line">&lt;<span class=code-tag>section</span><span class="code-attribute">{hasPath ? " id" : ""}</span>{hasPath ? `="` : ""}<span class="code-value">{path}</span>{hasPath ? `"` : ""}&gt;</span>
    <span class="line indent">&lt;<span class="code-custom-tag">{importable}</span><span class="code-attribute">{hasType ? " type" : ""}</span>{hasType ? `="` : ""}<span class="code-value">{type}</span>{hasType ? `"` : ""} /&gt;</span>
    <span class="line">&lt;/<span class=code-tag>section</span>&gt;</span>
</code>
<style>
    .code-block {
    background-color: #2d2d2d;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    font-family: "Source Code Pro", monospace;
    display: block;
    white-space: pre;
    color: gray;
    font-size: 1.6rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .line {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .indent {
    margin-left: 20px;
  }
  .code-attribute {
    color: aqua;
    font-style: italic;
  }
  .code-tag {
    color: coral;
  }
  .code-custom-tag {
    color: aqua;
  }
  .code-value {
    color: yellow;
  }
  .code-text {
    color: white;
  }
  @media (max-width: 840px) {
    .code-block {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 740px) {
    .code-block {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 640px) {
    .code-block {
      font-size: 1rem;
    }
  }
</style>