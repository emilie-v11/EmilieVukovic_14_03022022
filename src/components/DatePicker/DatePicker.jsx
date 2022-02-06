import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ label, inputName, idHtmlFor, onBlur, onChange }) => {
    return (
        <>
            <label htmlFor={idHtmlFor}>{label}</label>
            <input
                type="date"
                name={inputName}
                id={idHtmlFor}
                onBlur={onBlur}
                onChange={onChange}
                //   onBlur={e => fillForm(e, setDateOfBirth)}
                // onChange={date => handleDateFormat(date)}
            />
        </>
    );
};

DatePicker.protoTypes = {
    label: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    onBlur: PropTypes.string,
    onChange: PropTypes.string,
};

export default DatePicker;
