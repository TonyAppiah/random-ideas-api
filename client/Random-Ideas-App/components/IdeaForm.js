import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._ideaList = new IdeaList();
  }

  async handleSubmit(e) {
    e.preventDefault();

    //client validation
    if (
      !this._form.elements.text.value ||
      !this._form.elements.tag.value ||
      !this._form.elements.username.value
    ) {
      alert("Please enter all fields!");
      return;
    }

    // idea object to be sent to the database
    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    //store username to localStorage on submit
    localStorage.setItem("username", this._form.elements.text.value);

    //adds idea to server
    const newIdea = await IdeasApi.postIdea(idea);

    //adds idea to DOM list
    this._ideaList.addIdeaToDOM(newIdea.data.data);

    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";

    this.render();

    //creating a custom event listener
    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
     <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" value="${
            localStorage.getItem("username")
              ? localStorage.getItem("username")
              : ""
          }" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
    `;

    this._form = document.querySelector("#idea-form");
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }
}

export default IdeaForm;
