//[✅]Requisições
const os = require("node:os")

//[✅]Mapeando plataformas
const systemPlatformMap = {
  "win32": "Windows",
  "linux": "Linux",
  "darwin": "MacOS",
  "freebsd": "FreeBSD"
}

//[✅]Pegando informações do sistema
function getSystemInfo() {
    //[✅] Plataforma / Arquitetura / CPUs
  const system = systemPlatformMap[os.platform()]
  const arch = os.arch()
  const cpu = os.cpus()[0].model

//[✅] Pegando informações de tempo de atividade
    
//[✅]Dias
  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

//[✅]Horas
  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
  const uptimeHoursInSeconds = uptimeHours * 60 * 60

//[✅]Minutos
  const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
  const uptimeMinsInSeconds = uptimeMins * 60

//[✅]Segundos
  const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

//[✅]Junção das informações
  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

//[✅]Pegando informações de memória RAM
  const ramTotal = os.totalmem() / 1024 / 1024 / 1024
  const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
  const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100)

  return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }
}

//[✅]Mostrar informações
function printLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
  console.clear()
  console.log("DETALHES DO SISTEMA")
  console.log(`Sistema Operacional: ${system}`)
  console.log(`Arquitetura: ${arch}`)
  console.log(`Modelo do Processador: ${cpu}`)
  console.log(`Tempo de Atividade do Sistema: ${uptime}`)
  console.log(`Uso de Memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)`)
}

//[✅]Intervalo de 1 segundo
setInterval(() => {
  const systemInfo = getSystemInfo()
  printLog(systemInfo)
}, 1000)