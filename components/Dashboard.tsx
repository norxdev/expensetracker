"use client"

import "@/components/charts"
import { Bar, Line } from "react-chartjs-2"
import { Transaction } from "@/lib/csv"
import {
  totalSpend,
  spendByCategory,
  monthlySpend
} from "@/lib/aggregations"

export default function Dashboard({
  transactions
}: {
  transactions: Transaction[]
}) {
  const total = totalSpend(transactions)
  const byCategory = spendByCategory(transactions)
  const byMonth = monthlySpend(transactions)

  return (
    <>
      <div className="card">
        <h2>Total Spend</h2>
        <strong>${total.toFixed(2)}</strong>
      </div>

      <div className="card">
        <h2>Spend by Category</h2>
        <Bar
          data={{
            labels: Object.keys(byCategory),
            datasets: [
              {
                label: "Expenses",
                data: Object.values(byCategory)
              }
            ]
          }}
        />
      </div>

      <div className="card">
        <h2>Monthly Spend</h2>
        <Line
          data={{
            labels: byMonth.map(m => m.month),
            datasets: [
              {
                label: "Expenses",
                data: byMonth.map(m => m.total),
                tension: 0.3
              }
            ]
          }}
        />
      </div>
    </>
  )
}
