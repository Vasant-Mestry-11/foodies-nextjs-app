'use client';
import { useRef } from 'react'
import classes from './image-picker.module.css'

export default function ImagePicker({ name, label }) {
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click()
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>

    <div className={classes.controls}>
      <input
        className={classes.input}
        type='file'
        id={name}
        accept='image/png, image/jpeg'
        name={name}
        ref={imageInput}
      />
      <button className={classes.button} type='button' onClick={handlePickImage}>Pick an Image</button>
    </div>
  </div>
}