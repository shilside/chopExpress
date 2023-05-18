//schemas/restaurants.js

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      type: 'string',
      title: 'Short Description',
      validaton: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
      name: 'logoImage',
      type: 'image',
      title: 'Restaurant Logo',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Restaurant Rating',
      validaton: (Rule) =>
        Rule.required().Rule.min(1).Rule.max(5).error('Rating must be between 1 and 5'),
    },
    {
      name: 'reviews',
      type: 'number',
      title: 'Number of Reviews',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validaton: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
