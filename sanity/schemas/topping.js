import { FaPepperHot } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon: FaPepperHot,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      description: 'Is tihs topping vegetarian?',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🍃' : ''}`,
    }),
  },
};
