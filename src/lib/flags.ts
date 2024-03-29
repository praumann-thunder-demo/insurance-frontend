import Rox from "rox-browser"

export const flags = {
  newQuotePage: new Rox.Flag(),
  contrastButtons: new Rox.Flag(),
  appointmentButton: new Rox.Flag(),
}
export const flagStore: {
  [key: string]: any
} = {}

const impressionHandler = (reporting: {
  name: string | number
  value: any
}) => {
  console.log(reporting.name)
  flagStore[reporting.name] = reporting.value
  console.log(JSON.stringify(flagStore))
}
async function initRollout() {
  const options = { impressionHandler }

  Rox.register("frontend", flags)

  await Rox.setup(import.meta.env.VITE_FM_KEY, options)
}

initRollout().then(function () {
  console.log("Done loading CloudBees Feature Management")
})
