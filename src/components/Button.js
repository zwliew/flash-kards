export default {
  data: () => ({
    hovering: false,
  }),
  computed: {
    style() {
      return {
        border: 'none',
        'border-radius': '4px',
        padding: '0 16px 0 16px',
        height: '36px',
        color: '#6200ee',
        'text-transform': 'uppercase',
        'font-weight': 'bold',
        transition: 'background 0.3s',
        cursor: `${this.hovering ? 'pointer' : 'default'}`,
        background: `${this.hovering ? '#eee' : 'white'}`,
      };
    },
  },
  template: `
    <div>
      <button
        :style="style"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
        @click="$emit('click')"
      >
        <slot></slot>
      </button>
    </div>
  `,
};
