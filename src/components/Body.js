import React from "react";

export default function Body() {
  const [image, setImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  // NASA API
  // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const [allImages, setAllImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllImages(data.data.memes));
  }, []);

  // Handle image change
  function getImage() {
    const randomNumber = Math.floor(Math.random() * allImages.length);
    const url = allImages[randomNumber].url;
    setImage((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  // Handle text change
  function handleChange(event) {
    const { name, value } = event.target;
    setImage((prevImage) => ({
      ...prevImage,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="textinput"
          placeholder="Top Text"
          name="topText"
          value={image.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="textinput"
          placeholder="Bottom Text"
          name="bottomText"
          value={image.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getImage}>
          Get a new meme
        </button>
      </div>

      <div className="body">
        <div className="image-container">
          <img src={image.randomImage} className="image" />
        </div>
        {image.randomImage.length > 0 && (
          <h2 className="memeText topText">{image.topText}</h2>
        )}
        {image.randomImage.length > 0 && (
          <h2 className="memeText bottomText">{image.bottomText}</h2>
        )}
      </div>
    </main>
  );
}
