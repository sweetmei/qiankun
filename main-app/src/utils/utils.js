let targetMicro = ''
export const transRoutes = (routes,pathname) => {
  routes.map(item => {
      if(item.routes){
          return transRoutes(item.routes,pathname)
      }
      if(item.path === pathname){
          targetMicro = item.microName
      }
  })
  return targetMicro
}