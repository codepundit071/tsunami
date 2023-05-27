export const zIndex = {
  base: 1, // z-index: auto content will go here or inherit z-index from a parent
  nav: 2, // all cards should default to one layer above the base content
  card: 3,
  avatar: 4, // avatars should never appear behind cards
  loading: 5, // loading elements should never appear behind cards
  fab: 25,
  fullscreen: 4000, // fullscreen elements should cover all screen content except toasts
  slider: 4002, // slider should appear significantly above the base to leave room for other elements
  modal: 5000, // modals should completely cover base content and slider as well
  launcher: 6000, // modals should completely cover base content and slider as well
};
