import {create} from 'zustand'

export const useScoreTuningStore = create((set) => ({
    scoreTuning: {
        carbon_footprint: 1,
        responsible_sourcing: 1,
        labor_standards: 1,
    },
    updateScoreTuning: (name, value) => set((state) => ({
        scoreTuning: {
            ...state.scoreTuning,
            [name]: value
        }
    }))
}))