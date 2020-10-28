let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "B2 - Kolette",
    start: todayStr + "T10:00:00",
    color: "#CCC6FF",
		borderColor: '#A499FF'
	},
  {
    id: createEventId(),
    title: "A2 - Currywurst",
    start: todayStr + "T08:00:00",
    color: '#CCC6FF',
    borderColor: '#A499FF'
  },
  {
    id: createEventId(),
    title: "A2 - Currywurst",
    start: todayStr + "T12:00:00",
    color: "#FFEECE",
    borderColor: '#FFBC42'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
