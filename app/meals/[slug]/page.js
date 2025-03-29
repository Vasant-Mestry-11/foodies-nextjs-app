import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export default function MealsDetailPage({ params }) {
  const meal = getMeal(params.slug)

  if (!meal) {
    notFound();
  }

  const { title, summary, creator_email, creator, image } = meal;
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={classes.headerText}>
        <h1>{title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${creator_email}`}>{creator}</a>
        </p>
        <p className={classes.summary}>{summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: meal.instructions
      }}></p>
    </main>
  </>
}