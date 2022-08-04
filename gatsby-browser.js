export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Website has been updated. ` +
      `Please click ok to reload website`
  )

  if (answer === true) {
    window.location.reload()
  }
}
