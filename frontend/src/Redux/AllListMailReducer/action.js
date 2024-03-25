

export const ALL_MAILS_IS_LOADING = 'ALL_MAILS_IS_LOADING';
export const ALL_MAILS_SUCCESS = 'ALL_MAILS_SUCCESS';
export const ALL_MAILS_IS_ERROR = 'ALL_MAILS_IS_ERROR';

export const allMailsIsLoadingAction = ()=>{
    return {type: ALL_MAILS_IS_LOADING}
}

export const allMailsSuccessAction = (payload)=>{
    return {type: ALL_MAILS_SUCCESS, payload}
}

export const allMailsIsErrorAction = ()=>{
    return {type: ALL_MAILS_IS_ERROR}
}

// Function to handle All Mails