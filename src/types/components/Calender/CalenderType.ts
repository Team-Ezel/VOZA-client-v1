import { momentType } from "./ScheduleTypes"

export interface CalenderDataTypes extends moment.Moment {
    _d?: Date
}

export type CalenderItemPropsTypes = {
    data: CalenderDataTypes
    onClick: () => void
    date: moment.Moment
}

export type CalenderListPropsTypes = {
    data: CalenderDataTypes[]
    date: moment.Moment
    onClick: () => void
}

export type CalenderMonthPropsTypes = {
    onClick: (num: number) => void
    month?: number | string
    type?: string
}

export interface CalenderBoxPropsType {
    day: momentType
    setDay: React.Dispatch<React.SetStateAction<momentType>>
}