// https://stackoverflow.com/questions/47448567/using-async-in-event-emitter

const moment = require('moment')

const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const getDogs = (msec) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([moment().format(), 'Woof', 'Woof'])
    }, msec)
  })
}

myEmitter.on('event', async() => {
  console.log(`111 pre getDogs`)
  const dogs = await getDogs(300)
  console.log(`111 post getDogs ${dogs}`)
})

myEmitter.on('event', async() => {
  console.log(`222 pre getDogs`)
  const dogs = await getDogs(1300)
  console.log(`222 post getDogs ${dogs}`)
})

myEmitter.emit('event')
