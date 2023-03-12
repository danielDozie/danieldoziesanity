import {FcNext} from 'react-icons/fc'
export default {
    title: 'Hero Section',
        name: 'hero_section',
        type:'object',
        icon: FcNext,
        fields: [
          {
            title: 'PrimaryHeading',
            name: 'primaryHeading',
            type: 'string',
          },
          {
            title: 'SecondaryHeading',
            name: 'secondaryHeading',
            type: 'string',
          },
          {
            title: 'Image',
            name: 'image',
            type: 'image',
          }
        ]
}