import React, { useState } from 'react';

const dogsListAPI = 'https://dog.ceo/api/breeds/list/all';

function Dog() {
  let [getBreed, setBreed] = useState([]);
  let [image, setImage] = useState();
  let [currBreed, setCurrBreed] = useState('');

  let getBreedList = () => {
    fetch(dogsListAPI)
      .then((res) => res.json())
      .then((data) => setBreed(Object.keys(data.message)));
  };

  let getImageHandler = (event) => {
    let breed = event.target.value;
    setCurrBreed(breed);
    setImage(undefined);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((res) => setImage(res.message));
  };

  let dogList = (
    <select onClick={() => getBreedList()} onChange={getImageHandler}>
      <option>select one breed</option>
      {getBreed.map((breeds, index) => (
        <option key={index}>{breeds}</option>
      ))}
    </select>
  );

  return (
    <div>
      <h1>DOG APP</h1>
      <div className="dropdown">{dogList}</div>
      <h2>Breed Image</h2>
      {image && (
        <img
          src={image}
          onClick={() => {
            setImage(undefined);
            fetch(`https://dog.ceo/api/breed/${currBreed}/images/random`)
              .then((res) => res.json())
              .then((res) => setImage(res.message));
          }}
          alt="dog"
        />
      )}
      {image && <p>click on the image to see more..</p>}
    </div>
  );
}

export default Dog;
