'use client';
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ name, label }) {
  const imageInput = useRef();

  const [pickedImage, setPickedImage] = useState(null)

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  function handlePickImage() {
    imageInput.current.click()
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>

    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No file is picked yet.</p>}
        {pickedImage && <div>
          <Image src={pickedImage} alt='picked image' fill />
        </div>}
      </div>
      <input
        className={classes.input}
        type='file'
        id={name}
        accept='image/png, image/jpeg'
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
      />
      <button className={classes.button} type='button' onClick={handlePickImage}>Pick an Image</button>
    </div>
  </div>
}