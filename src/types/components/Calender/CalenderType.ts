
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
    onClick: (num: number) => void
}

export type CalenderMonthPropsTypes = {
    onClick: (num: number) => void
    month: string
    type: string
}

