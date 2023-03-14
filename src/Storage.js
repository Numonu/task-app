function addToStorage(object) {
    localStorage[object.id] = JSON.stringify(object);
}
function deleteToStorage(id) {
    localStorage.removeItem(id);
}
function updateToStorage(object) {
    localStorage[object.id] = JSON.stringify({
        id: object.id,
        title: object.title,
        description: object.description,
    });
}

export const Storage = {
    addToStorage,
    deleteToStorage,
    updateToStorage,
};
