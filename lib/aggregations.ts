import { Transaction } from "./csv"

export function totalSpend(txns: Transaction[]) {
  return txns
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)
}

export function spendByCategory(txns: Transaction[]) {
  const map: Record<string, number> = {}

  txns.forEach(t => {
    if (t.amount < 0) {
      map[t.category] =
        (map[t.category] || 0) + Math.abs(t.amount)
    }
  })

  return map
}

export function monthlySpend(txns: Transaction[]) {
  const map: Record<string, number> = {}

  txns.forEach(t => {
    if (t.amount < 0) {
      map[t.month] = (map[t.month] || 0) + Math.abs(t.amount)
    }
  })

  return Object.entries(map).map(([month, total]) => ({
    month,
    total
  }))
}
