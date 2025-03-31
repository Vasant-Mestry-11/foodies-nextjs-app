'use client';

import ImagePicker from '@/components/meals/image-picker'
import classes from './page.module.css'
import { shareMeal } from '@/lib/actions'
import MealFormSubmit from '@/components/meals/meal-form-submit'
import { useActionState } from 'react'

export default function ShareMealPage() {

  const [state, formAction] = useActionState(shareMeal, { message: null })
  return <>
    <header className={classes.header}>
      <h1>
        Share your <span className={classes.highlight}>favorite meal</span>
      </h1>
      <p>Or any meal you feel need sharing!</p>
    </header>

    <main className={classes.main}>
      <form className={classes.form} action={formAction}>
        <div className={classes.row}>
          <p>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' name='name' required />
          </p>

          <p>
            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' name='email' />
          </p>
        </div>

        <p>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' />
        </p>

        <p>
          <label htmlFor='summary'>Short summary</label>
          <input type='text' id='summary' name='summary' />
        </p>

        <p>
          <label htmlFor='instructions'>Instructions</label>
          <textarea
            id='instructions'
            name='instructions'
            rows={10}
            required
          ></textarea>
        </p>
        <ImagePicker label="Select an image" name="image" />
        {state.message && <p>{state.message}</p>}
        <p className={classes.actions}>
          <MealFormSubmit />
        </p>
      </form>
    </main>
  </>
}