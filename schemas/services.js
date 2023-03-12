import {FcTemplate} from 'react-icons/fc'

export default {
    title: 'Services',
    name: 'services',
    type: 'document',
    icon: FcTemplate,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, 
            }
          },
          {
              title: 'Link',
              name: 'link',
              type: 'string'
          },
          {
              title: 'Description',
              name: 'description',
              type: 'text'
          },
          {
              title: 'Services List',
              name: 'services_list',
              type: 'array',
              of: [{type: 'service_section'}]
          }
    ]
}