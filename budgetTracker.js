export default class BudgetTracker {
  constructor(querySelector) {}
  //return table html
  static html() {}
  //html for single row entries
  static entryHtml() {}
  //initial load data
  load() {}
  //will work out total of table
  updateSumm() {}
  //saves to storage for when refreshing page
  save() {}
  //for adding new entry
  addEntry(entry = {}) {}
  //get helper to return all active entries in table
  getEntries() {}
  //button for making new entry
  newEntryBtn() {}
  //for deleting entry
  deleteEntryBtn() {}
}
