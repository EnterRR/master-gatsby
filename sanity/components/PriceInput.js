/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => {
  const priceLabel = value && `- ${formatMoney(value / 100)}`;

  return (
    <FormField
      label={`${type.title} ${priceLabel || ''}`}
      description={type.description}
    >
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
      />
    </FormField>
  );
};

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
