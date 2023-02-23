export default class BudgetTracker {
  constructor(querySelector) {
    this.root = document.querySelector(querySelector);
    //makes innerHTML the html wihtin the static method
    this.root.innerHTML = BudgetTracker.html();
    //selecting the new entry button and adding listner for when clicking
    this.root.querySelector(".newEntry").addEventListener("click", () => {
      this.newEntryBtn;
    });
    //will load data from storage
    this.load();
  }
  //return table html
  static html() {
    return `
        <table class="budgetTrackerTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="entries"></tbody>
            <tbody>
                <tr>
                    <td colspan="5" class="controls">
                        <button type="button" class="newEntry">New Entry</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="summary">
                        <strong>Total:</strong>
                        <span class="total">$0.00</span>
                    </td>
                </tr>
            </tfoot>
        </table>
      `;
  }
  //html for single row entries
  static entryHtml() {
    return ` 
        <tr>
            <td>
                <input type="date" class="input dateInput" />
            </td>
            <td>
                <input type="text" placeholder="I.e Wages, bills, etc" class="input descriptInput"/>
            </td>
            <td>
                <select class="input selectInput">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </td>
            <td>
                <input type="number" class="input amountInput" placeholder="0.00"/>
            </td>
            <td>
                <button type="button" class="deleteEntry">&#10005;</button>
            </td>
        </tr>
    `;
  }
  //initial load data
  load() {
    const allEntries = JSON.parse(
      localStorage.getItem("budgetTrackerEntries") || "[]"
    );
    for (const entry of allEntries) {
      this.addEntry(entry);
    }
    this.updateSumm();
  }
  //will work out total of table
  updateSumm() {}
  //saves to storage for when refreshing page
  save() {}
  //for adding new entry
  addEntry(entry = {}) {
    this.root
      .querySelector(".entries")
      .insertAdjacentHTML("beforeend", BudgetTracker.entryHtml());
  }
  //get helper to return all active entries in table
  getEntries() {}
  //button for making new entry
  newEntryBtn() {
    this.addEntry;
  }
  //for deleting entry
  deleteEntryBtn() {}
}
