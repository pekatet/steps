import PropTypes from 'prop-types'
class StepsItemModel {
  constructor (date, distance) {
    this.date = date;
    this.distance = distance;
  }
}

StepsItemModel.proptypes = {
  date: PropTypes.instanceOf(Date),
  distance: PropTypes.number
}

export default StepsItemModel;