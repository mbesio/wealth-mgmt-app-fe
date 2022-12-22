import React, { useState } from 'react'
import { TextField, MenuItem, Button, FormLabel } from '@mui/material'
import { CURRENCIES, CATEGORIES } from './utils/Assets'

const AccountAssetsForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    currency: '',
    category: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    // send to form to the backend
    // if ok/ no errors 1) clean the form; 2) modal (5 sec) response that account was created
    console.log(
      'submitting the form - will hit the POST AccountsAsset endpoint'
    )
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <FormLabel>Add a new Asset</FormLabel>
      <TextField
        style={{ width: '500px', margin: '5px' }}
        type="text"
        label="name"
        name="name"
        value={formState.name}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        style={{ width: '500px', margin: '5px' }}
        select
        label="currency"
        name="currency"
        value={formState.currency}
        variant="outlined"
        onChange={handleChange}
      >
        {CURRENCIES.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        style={{ width: '500px', margin: '5px' }}
        select
        label="category"
        name="category"
        value={formState.category}
        variant="outlined"
        onChange={handleChange}
      >
        {CATEGORIES.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <Button
        style={{ width: '200px', margin: '5px' }}
        variant="contained"
        onClick={handleSubmit}
      >
        Create Asset
      </Button>
    </form>
  )
}

export default AccountAssetsForm
