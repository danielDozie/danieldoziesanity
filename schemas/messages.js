import {FcInvite} from 'react-icons/fc'
export default {
    text: 'Messages',
    name: 'messages',
    type: 'document',
    icon: FcInvite,
    fields: [
        {
            title: 'Fullname',
            name: 'fullname',
            type: 'string',
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Subject',
            name: 'subject',
            type: 'string',
        },
        {
            title: 'Message',
            name: 'message',
            type: 'text',
        }
    ]
}