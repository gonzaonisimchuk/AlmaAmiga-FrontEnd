/**
 * Funciones de almacenamiento para guardar y cargar datos en el almacenamiento
 * local del navegador (LocalStorage).
 */
const storage = {
    /**
     * Guarda un valor en el almacenamiento local del navegador.
     * @param {string} key - La clave para identificar el valor almacenado.
     * @param {*} value - El valor a almacenar.
     */
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error al guardar el elemento ${key}:`, error);
        }
    },

    /**
     * Obtiene un valor del almacenamiento local del navegador.
     * @param {string} key - La clave del valor a recuperar.
     * @return {*} El valor recuperado o null si no se encuentra.
     */
    getItem: (key) => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        } catch (error) {
            console.error(`Error al obtener el elemento ${key}:`, error);
            return null;
        }
    },

    /**
     * Elimina un valor del almacenamiento local del navegador.
     * @param {string} key - La clave del valor a eliminar.
     */
    removeItem: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error al eliminar el elemento ${key}:`, error);
        }
    },

    /**
     * Limpia todo el almacenamiento local del navegador.
     */
    clear: () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error al limpiar el almacenamiento:", error);
        }
    },

    /**
     * Verifica si existe un tocken en localstorage.
     */
    isAuthenticated: () => {
        const token = localStorage.getItem("authToken");
        return token !== null;
    }
};

export default storage;
