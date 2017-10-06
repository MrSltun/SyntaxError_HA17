import mobx, { observable } from 'mobx'

class Store {
  @observable example = {
    data: 'info'
  }

  @observable items = {
    item1: {
      title: 'Item 1',
      desc: 'Description of Item 1',
      geo: {lat: 81.1567, lon: 68.9452}
    },
    item2: {
      title: 'Item 2',
      desc: 'Description of Item 2',
      geo: {lat: 38.1692, lon: 16.6841}
    },
    item3: {
      title: 'Item 3',
      desc: 'Description of Item 3',
      geo: {lat: -53.9348, lon: 7.6034}
    }
  }
}

export default new Store()
