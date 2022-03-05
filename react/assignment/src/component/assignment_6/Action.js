export const AddStudent = (data) =>{
    return {
        type : 'Insert',
        payload : data
    }
}
export const UpdateStudent = (data) =>{
    return {
        type: 'Update',
        payload: data
    }
}