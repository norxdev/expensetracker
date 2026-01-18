"use client"

import { useState } from "react"
import FileUpload from "@/components/FileUpload"
import Dashboard from "@/components/Dashboard"
import { Transaction } from "@/lib/csv"

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  return (
    <main>
      <h1>Small Business Expense Tracker</h1>

      <FileUpload onParsed={setTransactions} />

      {transactions.length > 0 && (
        <Dashboard transactions={transactions} />
      )}
    </main>
  )
}
