import { Moment as MomentTypes } from "moment";
import React from "react";

export interface momentType extends MomentTypes {
    _d?: Date
}

export interface ScheduleItemPropsTypes {
    id: number
    title: string
    startDate: string
    endDate: string
}

export interface ScheduleListPropsType {
    day: string
}

export interface SchedulePropsType {
    day: momentType
    setDay: React.Dispatch<React.SetStateAction<momentType>>
}

export interface ScheduleOptionItemPropsType {
    title: string
    children: React.ReactNode
}

export interface DateInputPropsType {
    type: "Date" | "Time"
    width: string
    height: string
    fontSize: string
    fontWeight: string
    color: string
    backgroundColor: string
    placeHolder: string
    border: string
    borderRadius: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export interface DateInputListPropsType {
    startDate: string
    setStartDate: React.Dispatch<React.SetStateAction<string>>
    endDate: string
    setEndDate: React.Dispatch<React.SetStateAction<string>>
}