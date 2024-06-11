class IdeaList {
  constructor() {
    this._ideaListElement = document.querySelector("#idea-list");
    this._ideas = [
      {
        id: 1,
        text: "first idea",
        tag: "Technology",
        username: "Ben",
        date: "07-03-1992",
      },
      {
        id: 2,
        text: "second idea",
        tag: "Business",
        username: "John",
        date: "07-03-1992",
      },
      {
        id: 3,
        text: "third idea",
        tag: "software",
        username: "Dean",
        date: "07-03-1992",
      },
    ];
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
            <p class="tag tag-${idea.tag.toLocaleLowerCase()}">${idea.tag}</p>
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
