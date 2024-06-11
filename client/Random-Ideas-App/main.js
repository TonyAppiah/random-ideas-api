import "./style.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";

document.querySelector("#app").innerHTML = `
  <header>
  <h1>Random Ideas</h1>
  <button id="modal-btn">
    <i class= "fa-solid fa-plus fa-2x"></i>
  </button>
</header>

<div class="container">
  <div id="idea-list" class="ideas"></div>
</div>

<div id="modal" class="modal">
   <div id="form-modal" class="modal-box"></div>
</div>

`;

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
const ideaList = new IdeaList();
