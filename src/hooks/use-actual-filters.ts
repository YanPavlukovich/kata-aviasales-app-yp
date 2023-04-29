
import { selectFilters } from "../store/slices/filter-slice";
import { FilterInitialType } from "../types/filters";
import { useAppSelector } from "./hooks";

type DefaultFiltersTypes = () => FilterInitialType[];

export const useActualFilters: DefaultFiltersTypes = () => {
	const filters = useAppSelector(selectFilters);


	const actualFilters: FilterInitialType[] = [
    {
      label: 'Без пересадок',
      filterType: 'without',
      filterPayload: 0,
			active: filters.without,
    },
    {
      label: '1 пересадка',
      filterType: 'oneTransfer',
      filterPayload: 1,
			active: filters.oneTransfer,

    },
    {
      label: '2 пересадки',
      filterType: 'twoTransfer',
      filterPayload: 2,
			active: filters.twoTransfer,

    },
    {
      label: '3 пересадки',
      filterType: 'threeTransfer',
      filterPayload: 3,
			active: filters.threeTransfer,
    },
  ];



  return actualFilters;
};
