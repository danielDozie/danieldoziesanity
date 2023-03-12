import {FcNext} from 'react-icons/fc'
export default {
    title: 'Tech Stack',
    name: 'tech_stack',
    type: 'object',
    icon: FcNext,
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Subtitle',
        name: 'subtitle',
        type: 'string',
      },
      {
        title: 'Content',
        name: 'content',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: 'Logo Icon',
        name: 'logo_icon',
        type: 'array',
        of: [{type: 'logo_icons'}]
      },
      {
        title: 'Logo Bottom Text',
        name: 'logo_text',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
          title: 'Button',
          name: 'button',
          type: 'array',
          of: [
              {
                  type: 'button',
              }
          ]
      },

    ]

  }