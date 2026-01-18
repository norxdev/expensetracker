import Papa from "papaparse"

export type Transaction = {
  id: string
  date: Date
  month: string
  description: string
  amount: number
  category: string
}

export function parseCSV(
  file: File,
  callback: (txns: Transaction[]) => void
) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const transactions: Transaction[] = results.data.map(
        (row: any, index: number) => {
          const date = new Date(row.date)
          const month = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}`

          return {
            id: index.toString(),
            date,
            month,
            description: row.description,
            amount: Number(row.amount),
            category: row.category || "Uncategorized"
          }
        }
      )

      callback(transactions)
    }
  })
}
