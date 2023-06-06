export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished development
  // token: "BQDrQHjUSLevKjml8rTvx2lDJxoYfC3pi3PBI7syCGu-o6pnEXI4zXlPPTUvqpNin8P4uZS-HSWwt_0uSN0kqgYrdt5KqZGEtSRN5HoOq6LPK9od3aYfAwVFJk-WaeP5mgnPC3Y0Gnpp303GloQWQ0HLgpN2rHpi2tq5BPHHmaRu8_m2jI450iMyYko2MvuFGHlZZcel8OUEOLP2",
};

const reducer = (state, action) => {

  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return{
        ...state,
        playlists: action.playlists,
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
}

export default reducer;
