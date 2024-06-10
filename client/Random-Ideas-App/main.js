import "./style.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";

document.querySelector("#app").innerHTML = `
  <header>
  <h1>Random Ideas</h1>
  <button id="modal-btn">
    <i class= "fa-solid fa-plus fa-2x"></i>
  </button>
</header>

<div class="container">
  <div id="idea-list" class="ideas">
    <div class="card">
      <button class="delete">
        <i class="fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas        
      </h3>
      <p class="tag tag-technology">Techology</p>
      <p>
        Posted on<span class="date"> January 1, 2024</span> by
        <span class="author">Tony Appiah</span>
      </p>
    </div>

    <div class="card">
      <button class="delete">
        <i class= "fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas       
      </h3>
      <p class="tag tag-media">Media</p>
      <p>
        Posted on<span class="date"> January 2, 2024</span> by
        <span class="author">Eunice Appiah</span>
      </p>
    </div>

    <div class="card">
      <button class="delete">
        <i class= "fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas        
      </h3>
      <p class="tag tag-health">Health</p>
      <p>
        Posted on<span class="date"> January 3, 2024</span> by
        <span class="author">Zion Appiah</span>
      </p>
    </div>
  </div>
</div>

<div id="modal" class="modal">
   <div id="form-modal" class="modal-box">     
   </div>
</div>

`;

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
