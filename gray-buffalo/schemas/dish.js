//schemas/dish.js //sonny-sanghas deliveroo clone

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      type: 'string',
      title: 'Short Description',
      validaton: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the Dish in CAD',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
  ],
}
