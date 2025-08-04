import { create } from 'zustand';
import cars from "@/data/data";
import {defaultFilters, price} from '@/store/helpers';
import Negotiated from "@/components/negotiated";

const useCarsStore = create((set) => ({
    cars,
    filterCarsData:cars,
    filters: [],
    filtersData: defaultFilters,
    filterSearch:[],
    filterMark:null,
    filerModel:null,
    filterYearMin:null,
    filerYearMax:null,
    filterPrice:null,
    filterNegotiated:false,
    filterMileage:[],
    setFilterMileage:(searchParams) => set((state) => ({
        filterMileage: searchParams
    })),
    setFilterNegotiated:(searchParams) => set((state) => ({
        filterNegotiated: searchParams
    })),
    setFilterPrice:(searchParams) => set((state) => ({
        filterPrice: searchParams
    })),
    setFilterYearMin:(searchParams) => set((state) => ({
        filterYearMin: searchParams
    })),
    setFilterYearMax:(searchParams) => set((state) => ({
        filerYearMax: searchParams
    })),

    setFilterMark:(searchParams) => set((state) => ({
        filterMark: searchParams
    })),
    setFilerModel:(searchParams) => set((state) => ({
        filerModel: searchParams
    })),
    setFilterSearch: (searchParams) => set((state) => ({
        filterSearch: searchParams
    })),
    filterClear: () => set(() => ({
        filters: [],
        filterSearch:[],
        filtersData:defaultFilters,
        filterMark:null,
        filerModel:null,
        filterYearMin:null,
        filerYearMax:null,
        filterPrice:price,
        filterNegotiated:false,
        filterMileage:[],
    })),
    setFilterCarsData: (data) => set(() => ({
        filterCarsData:data,
    })),
    setCheckboxFilterList: (filterData, argument, check) => set((state) => {
        const type = filterData.type;
        const id = filterData.filterId || filterData.id;
        const argObj = typeof argument === 'string'
            ? { argumentFilterId: argument, argument }
            : {
                argumentFilterId: argument.filterArgumentId,
                argument: argument.argument
            };
        const existing = state.filters.find((f) => f.type === type);
        let filters;

        if (check) {
            if (existing) {
                const hasArg = existing.arguments.some((a) => a.argumentFilterId === argObj.argumentFilterId);
                const newArgs = hasArg
                    ? existing.arguments
                    : [...existing.arguments, argObj];

                filters = state.filters.map((f) =>
                    f.type === type ? { ...f, arguments: newArgs } : f
                );
            } else {
                filters = [...state.filters, { type, id, arguments: [argObj] }];
            }
        } else {
            if (existing) {
                const newArgs = existing.arguments.filter(
                    (a) => a.argumentFilterId !== argObj.argumentFilterId
                );
                filters = newArgs.length
                    ? state.filters.map((f) =>
                        f.type === type ? { ...f, arguments: newArgs } : f
                    )
                    : state.filters.filter((f) => f.type !== type);
            } else {
                filters = state.filters;
            }
        }
        return { filters };
    }),

    setFilterCheckbox: (typeId, argumentId, check) => set((state) => {
        const filtersData = state.filtersData.map((item) => {
            if (item.filterId === typeId) {
                return {
                    ...item,
                    arguments: item.arguments.map((arg) =>
                        arg.filterArgumentId === argumentId
                            ? { ...arg, checked: check }
                            : arg
                    ),
                };
            }
            return item;
        });
        return { filtersData };
    }),
}));

export { useCarsStore };

