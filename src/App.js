import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category,setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://api-blog-yurdi.herokuapp.com/api/post", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          slug: slug,
          category: category,
          summary : summary,
          content : content,
          image : image,

        }),
      });
      res = await res.json();
      if (res.status === 200) {
        setTitle("");
        setSlug("");
        setCategory("");
        setSummary("");
        setContent("");
        setImage("");
        setMessage("User created successfully");
      } else {
        setMessage(res.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={slug}
          placeholder="title"
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={summary}
          placeholder="Summary"
          onChange={(e) => setSummary(e.target.value)}

        />
        <input

          type="text"
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          value={image}
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;