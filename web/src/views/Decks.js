export default {
  data: () => ({
    title: 'Decks',
    styles: {
      deck: {
        'margin-top': '16px',
      },
    },
    "decks": [
      {
        "title": "Synonyms",
        "tags": [
          "General Paper",
          "English"
        ],
        "cards": [
          {
            "front": "technology",
            "back": "machines"
          }
        ]
      },
      {
        "title": "Word Bank",
        "tags": [
          "General Paper",
          "English"
        ],
        "cards": [
          {
            "front": "morose",
            "back": "sullen and ill-tempered"
          },
          {
            "front": "infidel",
            "back": "a person who has no religion or whose religion is not that of the majority"
          }
        ]
      }
    ]
  }),
  methods: {
    openDeck(id) {
      router.push(`/decks/${id}`);
    },
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <flash-deck
        v-for="deck in decks"
        :key="deck.id"
        :deck="deck"
        :style="styles.deck"
        @click="openDeck(deck.id)"
      ></flash-deck>
    </div>
  `,
};
