import { Tshirt } from '@/svg/tshirt';
import { Shorts } from '@/svg/shorts';
import { Snapback } from '@/svg/snapback';
import { Pants } from '@/svg/pants';
import { Hoodie } from '@/svg/hoodie';
import { Beannie } from '@/svg/beannie';

export const menu_data = {
    0: {
        id: 0,
        title: '(root)',
        childIds: [1, 6, 13, 17]
    },
    1: {
        id: 1,
        forWomen: true,
        title: 'Для женщин',
        childIds: [2, 3, 4, 5]
    },
    2: {
        id: 2,
        title: 'футболки',
        childIds: [],
        image: <Tshirt />,
    },
    3: {
        id: 2,
        title: 'худи',
        childIds: [],
        image: <Hoodie />,
    },
    4: {
        id: 2,
        title: 'кепки',
        childIds: [],
        image: <Snapback />,
    },
    5: {
        id: 5,
        title: 'шапки',
        childIds: [],
        image: <Beannie />,
    },
    6: {
        id: 6,
        forMen: true,
        title: 'Для мужчин',
        childIds: [7, 8, 9, 10, 11, 12]
    },
    7: {
        id: 7,
        title: 'футболки',
        childIds: [],
        image: <Tshirt />,
    },
    8: {
        id: 8,
        title: 'худи',
        childIds: [],
        image: <Hoodie />,
    },
    9: {
        id: 9,
        title: 'кепки',
        childIds: [],
        image: <Snapback />,
    },
    10: {
        id: 10,
        title: 'шапки',
        childIds: [],
        image: <Beannie />,
    },
    11: {
        id: 11,
        title: 'брюки',
        childIds: [],
        image: <Pants />,
    },
    12: {
        id: 12,
        title: 'шорты',
        childIds: [],
        image: <Shorts />,
    },
    13: {
        id:13,
        forChildren: true,
        childIds: [14, 15, 16]
    },
    14: {
        id: 2,
        title: 'футболки',
        childIds: [],
        image: <Tshirt />,
    },
    15: {
        id: 2,
        title: 'худи',
        childIds: [],
        image: <Hoodie />,
    },
    16: {
        id: 2,
        title: 'кепки',
        childIds: [],
        image: <Snapback />,
    },
    17: {
        id: 17,
        title: 'эко-сумки',
        childIds: []
    }
}
