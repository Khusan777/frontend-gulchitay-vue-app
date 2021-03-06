import { h } from 'vue';

import { MenuItem } from '@headlessui/vue';
import { getIconComponent } from '../../utils';

const AtDropdownItem = (props, { slots, emit }) => {
  return h(MenuItem, null, {
    default: ({ active }) =>
      h(
        'span',
        {
          class: [
            'cursor-pointer block px-4 py-2 text-sm',
            active || props.active
              ? 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100'
              : 'text-gray-700 dark:text-white',
            { 'group flex items-center': props.icon },
          ],
          onClick: () => {
            emit('onClick');
            emit('update:onClick');
          },
        },
        [
          props.icon
            ? h(getIconComponent(props.icon).Icon, {
                class: [
                  active || props.active
                    ? 'text-gray-500 dark:text-gray-300'
                    : 'text-gray-400 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-300',
                  'mr-3 h-5 w-5',
                ],
                'aria-hidden': true,
              })
            : null,
          props.title || slots.default(),
        ]
      ),
  });
};

AtDropdownItem.props = {
  active: { type: Boolean, default: false },
  title: { type: String, default: '' },
  icon: { type: [String, Object], default: () => '' },
};

AtDropdownItem.emits = ['onClick', 'update:onClick'];

export default AtDropdownItem;
