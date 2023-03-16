import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();

const databaseService = {
  writeData(url, data) {
    set(ref(db, url), data);
  },
  pushData(url, data) {
    const dataRef = ref(db, url);
    const newDataRef = push(dataRef);
    set(newDataRef, data);
  },
  readData(url, callback) {
    const itemRef = ref(db, url);
    onValue(itemRef, (snapshot) => {
      console.log("data changed !", snapshot.val());
      const data = snapshot.val();
      callback(data);
    });
  },
  updateData(url, data) {
    const updates = {};
    updates[url] = data;
    return update(ref(db), updates);
  },
  removeData(id) {
    const dateRef = ref(db, "dates/" + id);

    remove(dateRef).then(() => {
      console.log("location removed");
    });
  },
};

export default databaseService;
