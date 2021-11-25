import './index.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import StepsItemModel from './StepsItemModel';

function AddForm (props) {
  const {onAdd} = props;
  const [form, setForm] = useState({
    date: new Date(),
    distance: 0
  })

  function submitHandle (e) {
    e.preventDefault();
    const stepsItem = new StepsItemModel(form.date.setHours(0,0,0,0), form.distance)
    onAdd(stepsItem)
    setForm({
      date: new Date(),
      distance: 0
    })
  }

  const onDateChange = date => {
    setForm(prevForm => ({...prevForm,
      date: date
    }));
  }
  const onDistanceChange = e => {
    setForm(prevForm => ({...prevForm,
      distance: e.target.value
    }));
  }
  
  return (
    <div className="form">
      <DatePicker selected={form.date} onChange={onDateChange}/>
      <form className="form" onSubmit={submitHandle}>
        <input id="distance" name="distance" value={form.distance} type="number" onChange={onDistanceChange}/>
        <button type="submit">OK</button>
      </form>
    </div>
  )
}

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default AddForm;