import { db, storageRef } from "../../src/firebase";

export const saveData = (data) => async () => {
    await storageRef.put(data.image);
    await storageRef.getDownloadURL().then((url) => {
        return db.set({ image: url, userName: data.userName });
    });
}

export const getData = () => async (dispatch) => {
    return await db.on('value', (snap) => {
        console.log(snap.val());
        dispatch({
            type: "GET_DATA",
            payload: snap.val()
        })
    }, (err) => {
        console.log(err)
    });
}