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

  @observable inv = ['شريط لاصق', 'ماء', 'منديل']

  @observable inventory = [
    {
      itemName: 'شاي',
      elements: ['ورق شاي', 'ماء'],
      description: 'يمكنك صنع مشروب باستخدام هذه المكونات',
      imageItem: 'ماء'
    },
    {
      itemName: 'لصق جروح',
      elements: ['شريط لاصق', 'منديل'],
      description: 'يمكنك صنع لصاق جروح باستخدام المكونات التالية',
      imageItem: 'منديل'
    },
    {
      itemName: 'لصق جروح',
      elements: ['شريط لاصق', 'منديل'],
      description: 'يمكنك صنع لصاق جروح باستخدام المكونات التالية',
      imageItem: 'شريط لاصق'
    }
  ]

  @observable addToInv = (item) => {
    console.log('in the function');
    if (this.inv.indexOf(item.imageItem) === -1) {
      console.log('in the if');
      this.inv.push(item.imageItem)
      this.inv.push(item.imageItem)
      this.inventory.push(item)
    }
  }
}

export default new Store()
