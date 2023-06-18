'use client'

import { type ChangeEvent } from 'react'

import { useFilter } from '../../hooks/useFilter'
import Checkbox from '../server/Checkbox'
import FormGroup from '../server/FormGroup'

const Filter = () => {
  const { filters, setFilters } = useFilter()

  const handleToggleFiltersChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, event.target.name],
      })
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter(
          (item) => item !== event.target.name
        ),
      })
    }
  }

  return (
    <section>
      <div className="flex min-h-[320px] w-[350px] flex-col gap-7 rounded-lg border-[1px] p-4 dark:border-filter-color">
        <p className="text-xl font-bold dark:text-white">Filter</p>

        <FormGroup>
          <p className="text-md dark:text-white">Min Price</p>
          <input
            className="w-full accent-teal-700 dark:accent-teal-300"
            type="range"
            min={0}
            max={300}
            value={filters.price}
            onChange={(event) => {
              setFilters({
                ...filters,
                price: Number(event.target.value),
              })
            }}
          />
          <div className="flex items-center justify-between dark:text-white">
            <span>$0</span>
            <span>${filters.price}</span>
          </div>
        </FormGroup>

        <FormGroup>
          <p className="text-md dark:text-white">Gender</p>
          <div className="flex items-center gap-8">
            <Checkbox
              label="Men"
              name="men"
              onChange={handleToggleFiltersChange}
              checked={filters.categories.some(
                (category) => category === 'men'
              )}
            />
            <Checkbox
              label="Female"
              name="women"
              onChange={handleToggleFiltersChange}
              checked={filters.categories.some(
                (category) => category === 'women'
              )}
            />
            <Checkbox
              label="Kid"
              name="kid"
              onChange={handleToggleFiltersChange}
              checked={filters.categories.some(
                (category) => category === 'kid'
              )}
            />
          </div>
        </FormGroup>
      </div>
    </section>
  )
}

export default Filter
