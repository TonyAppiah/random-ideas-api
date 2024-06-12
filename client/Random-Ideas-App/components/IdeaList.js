import IdeasApi from "../services/ideasApi";

class IdeaList {
  constructor() {
    this._ideaListElement = document.querySelector("#idea-list");
    this._ideas = [];

    this.getIdeas();
  }

  async getIdeas() {
    try {
      const response = await IdeasApi.getIdeas();
      this._ideas = response.data.data;
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  addIdeaToDOM(idea) {
    this._ideas.push(idea);
    this.render();
  }

  render() {
    this._ideaListElement.innerHTML = this._ideas
      .map((idea) => {
        return `
        <div class="card">
            <button class="delete">
                <i class="fa-solid fa-x"></i>
            </button>
            <h3>
                ${idea.text}        
            </h3>
            <p class="tag tag-${idea.tag.toLowerCase()}">${idea.tag}</p>
            <p>
                Posted on<span class="date"> ${idea.date}</span> by
                <span class="author">${idea.username}</span>
            </p>
        </div>
            `;
      })
      .join("");
  }
}

export default IdeaList;
