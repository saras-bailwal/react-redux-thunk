export const submiting = flag => (
    {
        type: 'form-submiting',
        isSubmiting: flag,
    }
);

export const errSubmiting = flag => (
{
    type: 'form-errSubmiting',
    errSubmiting: flag,
}
);

export const submitted  = payload => (
{
    type: 'form-submitted',
    payload,
}
);

const submitForm = (data) => {
    return dispatch => {
        dispatch(submiting(true))
        setTimeout(() => {
            dispatch(errSubmiting(true))
            // dispatch(submitted(true))
            dispatch(submiting(false))
            console.log('data', data);
        }, 5000);
    }
}

export default  submitForm;