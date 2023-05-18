//schemas/featured.js //sonny-sanghas deliveroo clone

export default {
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      type: 'string',
      title: 'Short Description',
      validaton: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
