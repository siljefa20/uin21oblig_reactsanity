import {MdPerson as icon} from 'react-icons/md'

export default {
  name: 'actor',
  title: 'Actor',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required(),
    }
  ]
}
