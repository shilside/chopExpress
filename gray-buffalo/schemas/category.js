export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validaton: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Image',
    },
  ],
}
// Compare this snippet from gray-buffalo\schemas\category.js:
