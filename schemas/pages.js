import {FcDocument} from 'react-icons/fc'

export default 
{
    title: 'Pages',
    name: 'pages',
    type: 'document',
    icon: FcDocument,
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: 'Page Title',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'string',
        description: 'Page Description',
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
        title: 'Section',
        name: 'section',
        type: 'array',
        of: [
            {
              type: 'hero_section',
            },
            {
              type: 'work_section',
            },
            {
              type: 'tech_stack',
            },
            {
              type: 'custom_text',
            },
            {
              type: 'custom_block',
            },      
            {
              type: 'blogs',
            }, 
            {
              type: 'button',
            },
                 
        ],
      }
    ]
    
}