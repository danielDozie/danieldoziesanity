import {FcNext} from 'react-icons/fc'
export default {
  title: 'Work Section',
    name: 'work_section',
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
      },
      {
        title: 'Left Image',
        name: 'left_image',
        type: 'image',
        description: 'Upload a crisp image for the left section of the section'
      }
  
  ]
}