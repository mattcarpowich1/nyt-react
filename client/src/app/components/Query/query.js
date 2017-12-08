import React from 'react'
import './query.css'

const Query = props => {

	return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <div className="field">
          <label className="label">Search Term</label>
          <div className="control">
            <input className="input"
              type="text"
              name="search"
              onChange={props.handleInputChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Number of Records to Retrieve</label>
          <div className="control">
            <div className="select">
              <select onChange={props.handleInputChange} 
                name="numRecords"
                defaultValue={5}>
                <option>1</option>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-info is-outlined">
              <span className="icon"><i className="fa fa-search"></i></span>Search
            </button>
          </div>
        </div>
      </form>
    </div>
	)

}

export default Query