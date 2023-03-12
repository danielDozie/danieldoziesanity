
import {FcNext} from 'react-icons/fc'

export default {
    title: 'Custom Blog Posts',
    name: 'blogs',
    type: 'object',
    icon: FcNext,
    fields: [
        {
            title: 'Heading',
            name: 'block',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]

        },
        {
            title: 'Custom Blog Posts',
            name: 'custom_blogs',
            type: 'array',
            of: [
                {
                    type: 'reference',
            to: [
                {
                    type: 'blog',
                }
            ]
        
                }
            ]
        }
    ]
}