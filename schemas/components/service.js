import {FcNext} from 'react-icons/fc'
export default {
  title: 'Service Section',
    name: 'service_section',
    type:'object',
    icon: FcNext,
  fields: [
      {
          title: 'Title',
          name: 'title',
          type: 'string',
      },
      {
          title: 'Content',
          name: 'content',
          type: 'array',
          of: [
            {
              type: 'block',
            }
          ]
      }
  
  ]
}