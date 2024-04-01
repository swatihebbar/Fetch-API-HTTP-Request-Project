const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

const url = "https://jsonplaceholder.typicode.com/posts"


// fetch(url)
//     .then(res => {
//         // console.log(res)
//         res.json().then((data) => console.log(data));
//     })
//     .catch(err => console.log(err));  


const fetchPosts = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)

        const results = data.map(post => {
            return `
                <div class="card">
                <div class="card-title">
                <h2>${post.title}</h2>
                </div>
                <div class="card-body">
                <p>
                ${post.body}
                </p>
                </div>
            </div>`;
        });
        container.innerHTML = results.join("")
    } catch(error) {
        console.log(error);
    }
}

// fetchPosts();
btn.addEventListener("click", fetchPosts);