import { MdLocalPizza } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon: MdLocalPizza,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Name of the pizza',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Image of the pizza',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
    {
      name: 'price',
      title: 'Price',
      description: 'The price of the pizza in cents',
      type: 'number',
      validation: (Rule) => Rule.positive(),
      inputComponent: PriceInput,
    },
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
    },
    prepare: ({ name, image, ...toppings }) => ({
      title: name,
      subtitle: Object.values(toppings)
        .filter((topping) => !!topping)
        .join(', '),
      media: image,
    }),
  },
};
