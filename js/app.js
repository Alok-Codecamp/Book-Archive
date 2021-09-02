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
  console.log(data.length)
  if(data.length==0){
   
    booksContainer.innerHTML=`<p class="fs-1 no-result"> No result found</p>`
  }
  else{
  data.forEach(book=>{
      
      const BookDiv = document.createElement("div");
      BookDiv.classList.add("col");
      BookDiv.textContent='';
      const Imgurl=`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  BookDiv.innerHTML=`
  <div class="card h-100">
                <img src="${Imgurl}" class="book-img" alt="Book Cover">
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
      
  });
  totalResult.innerHTML=`
  <p>Total search result ${data.length}
  `
}
};

