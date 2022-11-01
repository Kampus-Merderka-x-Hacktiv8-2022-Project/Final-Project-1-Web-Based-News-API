const date = new Date();
export const monthAgo = new Date(
  date.setMonth(date.getMonth() - 1)
).toLocaleDateString("en-CA");