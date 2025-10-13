import createWebStorage from "redux-persist/lib/storage/createWebStorage";

interface StorageLike {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<string>;
  removeItem(key: string): Promise<void>;
}

const createNoopStorage = (): StorageLike => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage: StorageLike =
  typeof window !== "undefined"
    ? (createWebStorage("local") as unknown as StorageLike)
    : createNoopStorage();

export default storage;
