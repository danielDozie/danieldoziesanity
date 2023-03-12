import {FcTimeline} from 'react-icons/fc'

export default {
    title: 'Footer',
    name: 'footer',
    type: 'document',
    icon: FcTimeline,
    fields: [
        {
            title: 'Footer Text',
            name: 'footer_text',
            type: 'string',
        },
        {
            title: 'Footer Copyright',
            name: 'footer_copyright',
            type: 'string',
        },
        {
            title: 'Footer Social',
            name: 'footer_social',
            type: 'array',
            of: [
                {
                    title: 'Icons',
                    name: 'icons',
                    type: 'image',
                }
            ],
        }
    ]
}