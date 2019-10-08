import * as Types from '../actionType'

export const getCountAddAction = (n) => {
    return {
        type: Types.COUNT_ADD,
        n
    }
}