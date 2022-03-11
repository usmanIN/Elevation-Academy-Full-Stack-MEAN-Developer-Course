import {takeLatest,put, delay} from 'redux-saga/effects';

function* ageUpAsync(i){
    yield delay(5000);
    yield put({
        type:'MUL', payload:1
    })
}

export function* watchAgeUp(){
    yield takeLatest('INCREMENT',ageUpAsync);
}



