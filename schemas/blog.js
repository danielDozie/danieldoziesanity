import {FcNews} from 'react-icons/fc'

export default {
    title: 'Blog',
    name: 'blog',
    type: 'document',
    icon: FcNews,
    fields: [
      {
      title:'Title',
      name:'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name:'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
            type: 'code',
        },
        {
            type: 'image',
            options: {
                hotspot: true,
            }
        },
      ]
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Excerpts',
      name: 'excerpts',
      type:'text',
      description: 'Write a short description of your blog content'
    },
    {
      title:'Author',
      name: 'author',
      type: 'reference',
      to: [{
        type: 'author',
      }]
    }


  ]
  }