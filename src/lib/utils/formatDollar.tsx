export function formatDollar(amt: any) {
  return amt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
