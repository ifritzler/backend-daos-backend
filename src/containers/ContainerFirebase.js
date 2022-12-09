import {
  addDoc, collection, deleteDoc, doc,
  getDoc, getDocs, query, updateDoc
} from "firebase/firestore";
import _ from "lodash";
import firebaseDb from "../common/config/firebase.js";

class ContainerFirebase {
  constructor(collectionName) {
    this.db = firebaseDb;
    this.collection = collection(this.db, collectionName);
  }
  async getAll() {
    const q = query(this.collection);
    const result = await getDocs(q);
    const products = [];
    result.forEach((item) => {
      products.push({ id: item.id, ...item.data() });
    });
    return products;
  }
  async create(data) {
    const newItem = await addDoc(
      this.collection,
      JSON.parse(JSON.stringify(data))
    );
    return { id: newItem.id, ...data };
  }
  async getById(id) {
    const docRef = doc(this.collection, id);
    const result = await getDoc(docRef);
    if (_.isNil(result.data())) throw new Error("Item not found");
    return { id, ...result.data() };
  }
  async update(id, changes) {
    const item = await this.getById(id);
    const docRef = doc(this.collection, id);
    await updateDoc(docRef, changes);
    return { ...item, ...changes };
  }
  async delete(id) {
    const docRef = doc(this.collection, id);
    await deleteDoc(docRef);
  }
}

export default ContainerFirebase;
