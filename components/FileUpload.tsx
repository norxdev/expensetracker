"use client"

import { parseCSV, Transaction } from "../lib/csv"


export default function FileUpload({
  onParsed
}: {
  onParsed: (txns: Transaction[]) => void
}) {
  return (
    <div className="card">
      <h2>Upload Transactions CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) parseCSV(file, onParsed)
        }}
      />

      <p>
        <a href="/sample-transactions.csv" download>
          Download sample CSV
        </a>
      </p>
    </div>
  )
}
