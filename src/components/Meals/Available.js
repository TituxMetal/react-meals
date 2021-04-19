import React from 'react'

import { Card } from '~/components/UI'

import './Available.css'
import Item from './Item'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]

const Available = () => {
  const mealsList = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <Item
      key={id}
      name={name}
      description={description}
      price={price}
      id={id}
    />
  ))

  return (
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default Available
