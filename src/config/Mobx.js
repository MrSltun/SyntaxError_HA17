import mobx, { observable } from 'mobx'

class Store {
  @observable example = {
    data: 'info'
  }
}

export default new Store()
