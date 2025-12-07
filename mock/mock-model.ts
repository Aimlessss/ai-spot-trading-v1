export const mockmodel = async () => {
  const decisions = [ "sell", "hold", "buy"] as const;
  const decision = decisions[Math.floor(Math.random() * decisions.length)];

  const quantity = String(Math.floor(Math.random() * 10) + 1);

  if (decision === "hold") {
    return JSON.stringify({
      decision: "hold",
      reason: "Market conditions uncertain, waiting for confirmation.",
      quantity,
      next_check: {
        target_price: (Math.random() * 90000 + 30000).toFixed(2),
        wait_minutes: String(Math.floor(Math.random() * 5) + 1)
      }
    });
  }

  // buy or sell
  return JSON.stringify({
    decision,
    reason: `Mock signal suggests a good opportunity to ${decision}.`,
    quantity,
  });
};