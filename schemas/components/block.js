import {FcNext} from 'react-icons/fc'

export default {
    title: 'Custom Block',
    name: 'custom_block',
    type: 'object',
    icon: FcNext,
    fields: [
        {
            title: 'Block',
            name: 'block',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ]
        },
    ]
}