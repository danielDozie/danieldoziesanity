import {FcDoughnutChart} from 'react-icons/fc'
export default {
    title:'Logo',
    name: 'logo',
    type: 'document',
    icon: FcDoughnutChart,
    fields: [
        {
            title: 'name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'abbreviation',
            name: 'abbreviation',
            type: 'string',
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'image',
        }
    ]
}