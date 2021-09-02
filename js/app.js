// functin for load data

const lodeData = () => {
  const input = document.getElementById("search-input");
  const inputText = input.value;
  input.value = "";
  if (inputText.length === 0) {
  } else {
    const url = ` https://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data.docs));
  }
};

const displayData = (data) => {
  const booksContainer = document.getElementById("books-container");
  const totalResult=document.getElementById('total-Result');
  for (const book of data) {
    const BookDiv = document.createElement("div");
    BookDiv.classList.add("col");

    BookDiv.innerHTML=`
    <div class="card h-100">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <p class="card-text">Author: ${book?.author_name}</p>
                      <p class="card-text">first publish: ${book.first_publish_year}</p>
                    </div>
                    <div class="card-footer">
                      <p class="view-details">View details</p>
                    </div>
                  </div>
    `;

    booksContainer.appendChild(BookDiv);

    totalResult.innerHTML=`
    <p>Total search result ${data.length}
    `
  }
};
