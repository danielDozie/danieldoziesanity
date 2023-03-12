import {FcManager} from 'react-icons/fc'
export default {
    title: 'Author',
    name: 'author',
    type: 'document',
    icon: FcManager,
    fields: [
        {
        title: 'Fullname',
        name: 'fullname',
        type: 'string',
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'array',
            of : [
                {
                type: 'block',
            }
        ]
        }
]
}