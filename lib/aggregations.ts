import { Transaction } from "./csv"

export function totalSpend(txns: Transaction[]) {
  return txns.reduce((sum, t) => sum + t.amount, 0)
}

export function spendByCategory(txns: Transaction[]) {
  return txns.reduce((acc: Record<string, number>, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount
    return acc
  }, {})
}

export function monthlySpend(txns: Transaction[]) {
  const map: Record<string, number> = {}
  txns.forEach(t => {
    map[t.month] = (map[t.month] || 0) + t.amount
  })
  return Object.entries(map).map(([month, total]) => ({ month, total }))
}
