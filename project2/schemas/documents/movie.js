import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'actor',
      type: 'reference',
      to: [{type: 'actor'}]
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
  ],
  preview: {
    select: {
      title: 'title',
      actor: 'actor.name'
    },
    prepare(selection) {
      const {title, actor} = selection;
      return {
        title,
        subtitle: `Actor: ${actor.name}`
      }
    }
  }
}
