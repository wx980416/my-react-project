import services from '../index.js'

export function getHomeGoodPriceData() {
  return services.get({
    url: '/home/goodprice',
  })
}
